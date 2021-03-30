import axios from "axios"

// 좌표 불러오기 api
export const fetchLocationListApi = () => axios.get("/api/locations")