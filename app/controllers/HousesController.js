import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { setHTML } from "../utils/Writer.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js";

function _drawHouses() {
  console.log('draw houses function confirm')
  let template = ''

  AppState.houses.forEach(h => {
    template += h.HouseCard
  })

  setHTML('app', template)
}

function _drawButton() {
  if (AppState.account) {
    setHTML ('the-place-to-put-the-button', '<button class="btn btn-success circle" data-bs-toggle="modal" data-bs-target="#modal"></button>')
  }
}
export class HousesController {
  constructor() {
    setHTML('app', '<h1>  ➡️🏘️Loading Housey-houses... </h1>')
    setHTML('modal-guts', House.HouseForm())
    _drawButton()
    console.log("house controller log confirm");


    AppState.on('account'. _drawButton)

    this.getHousesFromApi()
    AppState.on('houses'. _drawHouses)
    AppState.on('account'. _drawHouses)
  }
  async getHousesFromApi() {
    try {
      await housesService.getHousesFromApi()
    } catch (error) {
      Pop.error(error)
    }
  }

  async createHouse() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      const formData = getFormData(form)
      console.log('formData confirm...your form data', formData)
      await housesService.createHouse(formData)
      form.reset()
      bootstrap.Modal.getOrCreateInstance('#modal').hide()

    } catch (error) {
      Pop.error(error)
    }
  }

  async deleteHouse(id) {
    try {

      const yes = await Pop.confirm('Delete Listing?')

      if (!yes) {
        return
      }

      await housesService.deleteHouse(id)

    } catch (error) {
      Pop.error(error)
    }
  }
}