'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */

const calculateTotals =
  listings =>
    carts => {
      let bill = []

      const test =
        (customer, total) => ({
          customer,
          total
        })
      carts.reduce((result, cart) => {
        let cartsTotal = 0
        cart.items.reduce((result,itemName) => {

          listings.reduce((result,listings) => {

            if (itemName === listings.name)
              cartsTotal = cartsTotal + listings.price

            },'')


          },[])
            bill.push(test(cart.customer,cartsTotal))
      } ,0)

          return bill
      }



module.exports = {
  listing,
  cart,
  calculateTotals
}
