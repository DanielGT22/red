export const ADD_TO_FAVOURITES = 'ADD_TO_FAV'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAV'
export const SET_USERNAME = 'SET_USERNAME'
export const GET_AZIENDE = 'GET_AZIENDE'


export const addToFavouritesAction = (bookSelected) => {
    return {
      type: ADD_TO_FAVOURITES,
      payload: bookSelected, 
    }
  }
  
  export const removeFromFavouritesAction = (i) => {
    return {
      type: REMOVE_FROM_FAVOURITES,
      payload: i,
    }
  }
  
  
  export const setUsernameAction = (username) => {
    return {
      type: SET_USERNAME,
      payload: username,
    }
  }
  
  export const getAziendeAction = () => {
    return async (dispatch) => {
      fetch('https://strive-benchmark.herokuapp.com/api/jobs?company=')
        .then((res) => {
          if (res.ok) {
            return res.json()
          } else {
            throw new Error('errore nel recupero dei libri')
          }
        })
        .then((aziende) => {
          dispatch({
            type: GET_AZIENDE,
            payload: aziende,
          })
        })
        .catch((err) => {
          console.log('errore', err)
        })
    }
  }