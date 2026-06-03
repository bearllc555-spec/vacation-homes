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
  lat: 41.0475,
  lng: -75.6444,
  mapZoom: 18,
  mapFlyZoom: 17,
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

export const propertyCoordinates: LatLng = {
  lat: poconosLocation.lat,
  lng: poconosLocation.lng,
};
