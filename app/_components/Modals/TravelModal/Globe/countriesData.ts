import geoData from "./geoData.json";

const TOTAL_COUNTRIES = 196;

type TCountry = typeof allCountries[number];

const countryEmojiMap: {
  [key in TCountry]: string;
} = {
  "United States of America": "🇺🇸",
  "Canada": "🇨🇦",
  "United Kingdom": "🇬🇧",
  "Spain": "🇪🇸",
  "Germany": "🇩🇪",
  "Colombia": "🇨🇴",
  "Belize": "🇧🇿",
  "Peru": "🇵🇪",
  "Sweden": "🇸🇪",
  "Denmark": "🇩🇰",
  "Italy": "🇮🇹",
  "Portugal": "🇵🇹",
  "Hungary": "🇭🇺",
  "Belgium": "🇧🇪",
  "Taiwan": "🇹🇼",
  "France": "🇫🇷",
  "Austria": "🇦🇹",
  "Poland": "🇵🇱",
  "Croatia": "🇭🇷",
  "Czechia": "🇨🇿",
  "Monaco": "🇲🇨",
  "Cuba": "🇨🇺",
  "Netherlands": "🇳🇱",
  "Serbia": "🇷🇸",
  "Greece": "🇬🇷",
  "Montenegro": "🇲🇪",
  "Albania": "🇦🇱",
  "The Vatican": "🇻🇦",
  "Turkey": "🇹🇷",
  "Slovenia": "🇸🇮",
  "Georgia": "🇬🇪",
  "Malaysia": "🇲🇾",
  "Singapore": "🇸🇬",
  "Qatar": "🇶🇦",
} as const

const livedIn = [
  "Canada",
  "United Kingdom",
  "Spain",
  "Germany",
  "Colombia",
] as const;

const visited = [
  "United States of America",
  "Belize",
  "Peru",
  "Sweden",
  "Denmark",
  "Italy",
  "Portugal",
  "Hungary",
  "Belgium",
  "Taiwan",
  "France",
  "Austria",
  "Poland",
  "Croatia",
  "Czechia",
  "Monaco",
  "Cuba",
  "Netherlands",
  "Serbia",
  "Greece",
  "Montenegro",
  "Albania",
  "The Vatican",
  "Turkey",
  "Slovenia",
  "Malaysia",
  "Singapore",
  "Qatar",
  "Georgia"
] as const;

const alphabeticalVisited = [...visited].sort((a, b) => a.localeCompare(b));
const alphabeticalLivedIn = [...livedIn].sort((a, b) => a.localeCompare(b));

const allCountries = [...alphabeticalVisited, ...alphabeticalLivedIn] as const;

export const formattedCountriesVisited = alphabeticalVisited.map((country) => `${countryEmojiMap[country]} ${country}`)
export const formattedCountriesLivedIn = alphabeticalLivedIn.map((country) => `${countryEmojiMap[country]} ${country}`)

export const allVisitedCountriesLength = allCountries.length;
export const percentageOfCountriesVisited = Math.round(((visited.length + livedIn.length) / TOTAL_COUNTRIES) * 10000) / 100;

export const globeCountriesData = geoData.features.filter(
  (feature) => !allCountries.includes(feature.properties.ADMIN as any)
);

