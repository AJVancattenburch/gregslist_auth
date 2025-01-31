import { AppState } from "../AppState.js"
export class House {
  constructor(data) {
      this.bedrooms = data.bedrooms
      this.bathrooms = bathrooms
      this.levels = data.levels
      this.imgUrl = data.imgUrl
      this.model = data.model
      this.year = data.year
      this.price = data.price
      this.description = data.description
      this.creatorId = data.creatorId
      this.creator = data.creator
  }

  get HouseCard() {
    return /*html*/`
    <div class="col-md-4 my-3">
        <div class="card elevation-1">
          <img class="rounded-top" src="${this.imgUrl}" alt="${this.description}">
          <div class="card-body">
            <p class="fs-4 mb-2 d-flex justify-content-between">
              <span>
                ${this.year} ${this.model}
                ${this.bedrooms} ${this.bathrooms}
              </span>
              <span>
                $${this.price}
              </span>
            </p>
            <div class="d-flex align-items-center justify-content-between border-top pt-2">
                
                ${this.deleteCreatedPost}
            
                <div>
                  <span class="text-capitalize">${this.creator.name}</span>
                  <img class="rounded seller-picture" src="${this.creator.picture}" alt="${this.creator.name}">
                </div>
            </div>
          </div>
        </div>
      </div>
      `
  }
  get deleteButtonIfCarIsYours() {
    if (this.creatorId != AppState.account?.id) {
      return ''
    }
    return `
    <button 
      class="btn btn-danger" 
      onclick="app.HousesController.deleteHouse('${this.id}')"
    >Delete Listing</button>`

  }
  static HouseForm() {
    return /*html*/`
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">List House</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

    <form onsubmit="app.HousesController.createHouse()">
      <div class="modal-body container-fluid">
        <section class="row">
          <div class="mb-3 col-6">
            <label for="model" class="form-label">Model:</label>
            <input required minlength="3" maxlength="20" type="text" class="form-control" id="model" name="model"
              placeholder="Model:">
          </div>
          <div class="mb-3 col-6">
            <label for="bedrooms" class="form-label">Bedrooms:</label>
            <input required minlength="1" maxlength="10" type="text" class="form-control" id="bedrooms" name="bedrooms"
              placeholder="Floors:">
          </div>
          <div class="mb-3 col-6">
            <label for="bathrooms" class="form-label">bathrooms</label>
            <input required minlength="3" maxlength="20" type="text" class="form-control" id="bathrooms" name="bathrooms" placeholder="bathrooms:">
          </div>
          <div class="mb-3 col-6">
            <label for="levels" class="form-label">Floors</label>
            <input required minlength="3" maxlength="20" type="text" class="form-control" id="levels" name="levels"
              placeholder="Floors:">
          </div>
          <div class="mb-3 col-6">
            <label for="year" class="form-label">Year Built:</label>
            <input required min="1500" max="2024" type="number" class="form-control" id="year" name="year"  placeholder="Year Built:">
          </div>
          <div class="mb-3 col-6">
            <label for="price" class="form-label">Price:</label>
            <input required min="5000" max="100000000" type="number" class="form-control" id="price" name="price"
              placeholder="Price:">
          </div>
          <div class="mb-3 col-12">
            <label for="description" class="form-label">House Description</label>
            <input required minlength="3" maxlength="50" type="text" class="form-control" id="description" name="description"
              placeholder="Description:">
          </div>
          <div class="mb-3 col-12">
            <label for="imgUrl" class="form-label">House Image</label>
            <input required type="text" class="form-control" id="imgUrl" name="imgUrl" placeholder="House Image">
          </div>
        </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">List Home</button>
      </div>
    </form>
    `
  }







}