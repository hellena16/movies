import axios from 'axios'

export const actionType = {
  SET_MOVIES: 'SET_MOVIES',
  SET_MOVIES_SUCCESS: 'SET_MOVIES_SUCCESS',
  SET_MOVIES_ERROR: 'SET_MOVIES_ERROR',
}
export const actionMovies = {
  getMovies: (page) => {
    return async (dispatch) => {
      dispatch({ type: actionType.SET_MOVIES })
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=264d9db44803a51e84e59f606e859077&page=${page}`,
        )
        .then((res) => {
          dispatch({
            type: actionType.SET_MOVIES_SUCCESS,
            payload: res.data.results,
          })
        })
        .catch((err) => {
          dispatch({ type: actionType.SET_MOVIES_ERROR, payload: err })
        })
    }
  },
}
