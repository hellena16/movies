import { actionType } from '../actions/moviesActions'

const initialState = {
  movies: [],
  loading: false,
  error: false,
}

export const moviesReduser = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case actionType.SET_MOVIES:
      return {
        ...state,
        movies: [],
        loading: true,
        error: false,
      }
    case actionType.SET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload,
        loading: false,
        error: false,
      }
    case actionType.SET_MOVIES_ERROR:
      return {
        ...state,
        error: true,
      }
    default:
      return state;
  }
}
