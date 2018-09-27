import { all } from 'redux-saga/effects'

import { movieSagas } from './movieSagas';

export default function* sagas() {
  yield all([
    ...movieSagas
  ]);
}