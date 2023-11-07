import { GET_AZIENDE } from '../actions'

const initialState = {
  stock: [], 
}

const aziendaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AZIENDE:
      return {
        ...state,
        stock: action.payload, 
      }

    default:
      return state
  }
}

export default aziendaReducer