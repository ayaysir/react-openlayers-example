import { fetchLocationListApi } from '../lib/api'
import apiJsonExample from './apiJsonExample.json'
import axios from 'axios'

describe('API 테스트', () => {
  test('locations GET success test', async () => {
    axios.get = jest.fn().mockResolvedValue(apiJsonExample)

    const responseJson = await fetchLocationListApi().then((response: any) => {
      expect(response.locations).toBeDefined()
      expect(response.locations.length).toBeGreaterThan(0)
    })
  })

  test('GET response doesn\'t have locations.', async () => {
    axios.get = jest.fn().mockResolvedValue({})
    const responseJson = await fetchLocationListApi().then((response: any) => {
      expect(response.locations).toBeUndefined()
    })
  })
})