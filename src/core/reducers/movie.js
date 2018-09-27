import {types, actions} from '../actions/index';

const initialState = {
  isFetching: false,
  error: null,
  posts:{
    byId:{},
    allIds:[],
    allArr:[]
  }
}

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.START_FETCH: 
      return {...state, isFetching: true};
    case types.FINISH_FETCH:
      return {...state, isFetching: false};
    case types.SET_ERROR:
      return {...state, error: action.payload};
    case types.SET_MOVIES:
        let byId = {};
        let allIds = [];
        let allArr = [];
        action.payload.movies.map((item)=>{
          byId[item.movieId] = {...item};
          allIds.push(item.movieId);
          allArr.push(item);
        })
        return {...state.posts, byId, allIds, allArr};
    default: return state;
  }
}