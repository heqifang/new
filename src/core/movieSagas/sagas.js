import { call, fork, put, select, take } from 'redux-saga/effects';
import { types, actions } from '../actions';
import requestUtils from '../api';

export function* watchMovie() {
    while (true) {
      yield take(types.START_FETCH);
      const res = yield call(requestUtils.movieFetch,{locationId:290});
      if(res.status === 200 && res.data){
        yield put(actions.setMovies(res.data));
      }else{
        yield put(actions.setError(true));
      }
    }
  }


export const movieSagas = [
    fork(watchMovie)
  ];