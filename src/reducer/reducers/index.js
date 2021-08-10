import {
  ADD_PRODUCT,
  CLEAR_CART,
  GET_PRODUCTS,
  REMOVE_FROM_CART,
  SEARCH_PRODUCTS,
} from '../actionTypes'

const initialState = {
  originalProducts: [],
  products: [],
  cart: [],
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload, originalProducts: payload }
    case ADD_PRODUCT:
      let isPresent = false
      state.cart.forEach((cartItem) => {
        if (cartItem.id === payload.id) return (isPresent = true)
      })
      let productsToBeSent
      if (isPresent) {
        const filteredItems = state.cart.filter(
          (cartItem) => cartItem.id !== payload.id,
        )
        productsToBeSent = [...filteredItems, payload]
      } else {
        productsToBeSent = [...state.cart, payload]
      }
      return {
        ...state,
        cart: productsToBeSent,
      }
    case SEARCH_PRODUCTS:
      let searchedProducts = state.originalProducts.filter(
        ({ name }) =>
          name &&
          name
            .toLowerCase()
            .includes(payload.length > 0 && payload.toLowerCase()),
      )
      return {
        ...state,
        products:
          payload.length > 0 ? searchedProducts : state.originalProducts,
      }
    case REMOVE_FROM_CART:
      let filteredProducts = state.cart.filter(
        (cartItem) => cartItem.id !== payload,
      )
      console.log(filteredProducts)

      return { ...state, cart: filteredProducts }
    case CLEAR_CART:
      return { ...state, cart: [] }
    default:
      return state
  }
}
export default reducer
