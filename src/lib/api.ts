import axios from 'axios'
import packageJson from './../../package.json'

const baseURI = packageJson.apiBaseURI

// 좌표 불러오기 api
export const fetchLocationListApi = () => axios.get(`${baseURI}/api/locations`)
