import packageJson from "./../../package.json"

const DEFAULT_URI = packageJson.proxy

export const getInitLocations = fetch(`${DEFAULT_URI}/api/locations`)