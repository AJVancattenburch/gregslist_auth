import { setHTML } from '../utils/Writer.js'

// Private
function _draw() {
  setHTML('app', '<h1>This is the About Page</h1>')
  setHTML('the-place-to-put-the-button', '')
  setHTML('modal-btn', '')
}

// Public
export class AboutController {
  constructor() {
    _draw()
  }

}
