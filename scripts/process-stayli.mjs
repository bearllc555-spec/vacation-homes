import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import https from "node:https";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "_stayli-source.html");
const outHtml = path.join(root, "index.html");
const imagesDir = path.join(root, "public", "images");

if (!fs.existsSync(sourcePath)) {
  console.error("Missing _stayli-source.html — curl stayli.framer.website first.");
  process.exit(1);
}

let html = fs.readFileSync(sourcePath, "utf8");

const imageRegex =
  /https:\/\/framerusercontent\.com\/images\/[A-Za-z0-9_-]+\.(?:webp|png|jpg|jpeg|svg)(?:\?[^"')\s>]*)?/gi;
const matches = [...new Set(html.match(imageRegex) ?? [])];

fs.mkdirSync(imagesDir, { recursive: true });

function download(url) {
  return new Promise((resolve, reject) => {
    const fileName = path.basename(new URL(url).pathname);
    const dest = path.join(imagesDir, fileName);
    if (fs.existsSync(dest)) {
      resolve({ fileName, dest });
      return;
    }
    const file = fs.createWriteStream(dest);
    https
      .get(url.split("?")[0], (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          fs.unlinkSync(dest);
          download(res.headers.location).then(resolve).catch(reject);
          return;
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve({ fileName, dest })));
      })
      .on("error", (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
}

const hashes = new Set();
for (const url of matches) {
  const hash = url.replace(/https:\/\/framerusercontent\.com\/images\//, "").split("?")[0];
  hashes.add(hash);
}

console.log(`Downloading ${hashes.size} images…`);
for (const hash of hashes) {
  const url = `https://framerusercontent.com/images/${hash}`;
  try {
    await download(url);
    process.stdout.write(".");
  } catch (e) {
    console.warn(`\nFailed ${hash}:`, e.message);
  }
}
console.log("\nReplacing URLs in HTML…");

for (const hash of hashes) {
  const local = `/images/${hash}`;
  const escaped = hash.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  html = html.replace(
    new RegExp(`https://framerusercontent\\.com/images/${escaped}(?:\\?[^"'\\s)>]*)?`, "g"),
    local,
  );
}

html = html.replace(
  /<script>try\{if\(localStorage\.get\("__framer_force_showing_editorbar_since"\)\)[\s\S]*?<\/script>\s*/i,
  "",
);
html = html.replace(
  /<script async src="https:\/\/events\.framer\.com\/script[^"]*"[^>]*><\/script>\s*/i,
  "",
);
html = html.replace(
  /<link rel="modulepreload"[^>]*href="https:\/\/framerusercontent\.com\/sites\/[^>]*>\s*/gi,
  "",
);
html = html.replace(
  /<script type="module"[^>]*src="https:\/\/framerusercontent\.com\/sites\/[^>]*><\/script>\s*/gi,
  "",
);
html = html.replace(/<div id="svg-templates"[^>]*>[\s\S]*?<\/div>\s*/i, "");

html = html.replace(
  /<title>.*?<\/title>/i,
  "<title>Stayli — Vacation Homes</title>",
);

const headInject = `
<style id="stayli-custom">
  .stayli-version-badge {
    display: inline-block;
    margin-left: 10px;
    padding: 3px 10px;
    font-family: Inter, sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 999px;
    vertical-align: middle;
    line-height: 1;
  }
  a[href="./"]:has(.stayli-version-badge) {
    text-decoration: none;
  }
</style>
`;

const bodyInject = `
<script id="stayli-custom-js">
(function () {
  var VERSION = "v1.03";
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href="./"], a[href="/"]');
    if (!a) return;
    e.preventDefault();
    history.replaceState(null, "", location.pathname + location.search);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  function injectVersion() {
    var home = document.querySelector('a[href="./"]');
    if (!home || document.querySelector(".stayli-version-badge")) return;
    var badge = document.createElement("span");
    badge.className = "stayli-version-badge";
    badge.textContent = VERSION;
    badge.setAttribute("aria-label", "Site version " + VERSION);
    home.appendChild(badge);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectVersion);
  } else {
    injectVersion();
  }
})();
</script>
`;

if (!html.includes("stayli-custom")) {
  html = html.replace("</head>", `${headInject}</head>`);
  html = html.replace("</body>", `${bodyInject}</body>`);
}

html = html.replace(/<script type="module" src="\/src\/main\.tsx"><\/script>\s*/i, "");

fs.writeFileSync(outHtml, html);
console.log(`Wrote ${outHtml} (${(html.length / 1024).toFixed(0)} KB)`);
