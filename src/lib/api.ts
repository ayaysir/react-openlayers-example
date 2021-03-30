import axios from "axios"
import packageJson from "./../../package.json"

const DEFAULT_URI = packageJson.proxy

// 좌표 불러오기 api
export const fetchLocationListApi = () => axios.get("/api/locations")