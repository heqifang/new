export const types = {
  START_FETCH : 'movie/START_FETCH',
  FINISH_FETCH : 'movie/FINISH_FETCH',
  SET_ERROR : 'movie/SET_ERROR',
  SET_MOVIES : 'movie/SET_MOVIES'
}

//action creators
export const actions = {
  startFetch: () => {
    return {type: types.START_FETCH};
  },
  finishFetch: ()=> {
    return {type: types.FINISH_FETCH};
  },
  setError: (error)=> {
    return {type: types.SET_ERROR, payload: error};
  },
  setMovies: (posts)=> {
    return {type: types.SET_MOVIES, payload: posts};
  }
}