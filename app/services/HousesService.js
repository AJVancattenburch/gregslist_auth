import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";
class HousesService {
  async deleteHouse(id) {
    const res = await api.delete(`api/houses/${id}`)
    console.log('delete button functionality confirm', res.data)
    AppState.houses = AppState.houses.filter(h => h.id != id)
  }

  async getHousesFromApi() {
    const res = await api.get('api/houses')
    console.log('api loading...', res.data)
    AppState.houses = res.data.map(h => new House(h))
    console.log('looking for houses', AppState.houses)
  }

  async createHouse(FormData) {
    const res = await api.post('api/house', FormData)
    console.log('read back data', res.data)

    const newHouse = new House(res.data)
    AppState.houses.push(newHouse)
    AppState.emit('houses')

  }

}

export const housesService = new HousesService();