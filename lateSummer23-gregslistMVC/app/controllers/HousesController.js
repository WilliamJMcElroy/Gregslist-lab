import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
    let houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.HouseTemplate)
    setHTML('houses', content)
}

export class HousesController {
    constructor() {
        console.log("HomesController has been loaded")
        console.log('House time', AppState.houses)
        _drawHouses()
        // AppState.on('houses', _drawHouses)
    }

    createHouse() {
        console.log('House has been created',)
    }

}