/** Poconos flagship property — map, contact, and directions */
export const poconosLocation = {
  name: "Pocono Vacation Homes",
  street: "19 Mountain Crest Dr",
  city: "Lake Harmony",
  state: "PA",
  zip: "18624",
  country: "USA",
  region: "Pocono Mountains",
  /** WGS84 — 19 Mountain Crest Dr, Lake Harmony Estates */
  propertyLat: 41.0475,
  propertyLng: -75.6444,
  /** WGS84 — Lake Harmony reservoir (map camera center) */
  lakeLat: 41.0623,
  lakeLng: -75.6066,
  /** Final zoom — whole lake + shoreline context */
  mapZoom: 14,
  /** Initial map load before fly-in animation */
  mapFlyZoom: 13,
  /** Wide starting zoom for the cinematic fly-in */
  mapFlyStartZoom: 11,
  get fullAddress() {
    return `${this.street}, ${this.city}, ${this.state} ${this.zip}, ${this.country}`;
  },
  get mapsSearchUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.fullAddress)}`;
  },
  get mapsDirectionsUrl() {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(this.fullAddress)}`;
  },
  /** Satellite-style embed fallback (no API key) */
  get mapsSatelliteEmbedUrl() {
    return `https://maps.google.com/maps?q=${encodeURIComponent(this.fullAddress)}&hl=en&z=${this.mapZoom}&t=k&output=embed`;
  },
} as const;

export type LatLng = { lat: number; lng: number };

/** Pin on the property — shown while the map frames the lake */
export const propertyCoordinates: LatLng = {
  lat: poconosLocation.propertyLat,
  lng: poconosLocation.propertyLng,
};

/** Camera center — Lake Harmony water body */
export const mapViewCenter: LatLng = {
  lat: poconosLocation.lakeLat,
  lng: poconosLocation.lakeLng,
};
