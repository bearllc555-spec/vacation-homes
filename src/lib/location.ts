/** Poconos flagship property — used for map embed & contact */
export const poconosLocation = {
  name: "Stayli Poconos Showcase",
  street: "321 Skytop Drive",
  city: "Lake Harmony",
  state: "PA",
  zip: "18624",
  region: "Pocono Mountains",
  get fullAddress() {
    return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
  },
  get mapsSearchUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.fullAddress)}`;
  },
  /** Standard Google Maps embed (no API key) */
  get mapsEmbedUrl() {
    return `https://maps.google.com/maps?q=${encodeURIComponent(this.fullAddress)}&hl=en&z=13&ie=UTF8&iwloc=&output=embed`;
  },
} as const;
