import { Car } from "./models/Car.js"
import { House } from "./models/House.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"



class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  cars = loadState('cars', [Car])


  houses = [
    new House({
      address: '123 Fleet St', year: '1974', bedrooms: 3, bathrooms: 2.5, sqft: 1400, price: 375000, description: 'Newly renovated mid-century modern home', imgUrl: 'https://th.bing.com/th/id/R.ff20b5ef8b0405610b226866b74b12f2?rik=eGIy74viLRY%2b%2bA&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2015%2f03%2f02%2f12556168%2fGeneva_Q1_Facade.jpg&ehk=JPpfgQiaCOhK7BwYU8TBB6FCKISsQc%2fvK6kd9ElEKGs%3d&risl=1&pid=ImgRaw&r=0'
    }),
    new House({
      address: '121 Feet St', year: '1992', bedrooms: 3.5, bathrooms: 2, sqft: 1620, price: 399000, description: 'Rambler Home', imgUrl: 'https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?cs=srgb&dl=architecture-facade-house-259600.jpg&fm=jpg'
    }),
    new House({
      address: '124 Leet St', year: '2008', bedrooms: 5, bathrooms: 3.5, sqft: 1400, price: 425000, description: 'Great Multi-family Home', imgUrl: 'https://jooinn.com/images/beautiful-house-29.jpg'
    }),
    new House({
      address: '221 Toad Rd', year: '2017', bedrooms: 4, bathrooms: 2, sqft: 1400, price: 305000, description: 'Cabin in the Woods', imgUrl: 'https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2016/06/07101922/19ad-Northwest.jpg'
    })
  ]

  // cars = [

  //   new Car({
  //     make: "BMW",
  //     model: "335i",
  //     year: 1973,
  //     imgUrl: "https://bringatrailer.com/wp-content/uploads/2020/05/2011_bmw_335_15901301926d884f6124Photo-May-03-1-45-59-PM.jpg?fit=940%2C627",
  //     price: 50000,
  //     isNew: true,
  //     description: "Mint",
  //     color: "silver"
  //   }),
  //   new Car(
  //     {
  //       make: "Mazda",
  //       model: "Miata",
  //       year: 1997,
  //       imgUrl: "https://bringatrailer.com/wp-content/uploads/2022/06/1997_mazda_mx-5-miata_img_1612-5-84972.jpg?fit=940%2C626",
  //       price: 8000,
  //       isNew: false,
  //       description: "Perfect for cruisin' down the coast",
  //       color: "black"
  //     }
  //   ),
  //   new Car(
  //     {
  //       make: "Muscle",
  //       model: "Car",
  //       year: 2043,
  //       imgUrl: "https://media.tenor.com/EgMfjYtMD3oAAAAC/car-jump.gif",
  //       price: 900000,
  //       isNew: false,
  //       description: "Getcha one of these bad boys",
  //       color: "red"
  //     }
  //   )

  // ]



  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
