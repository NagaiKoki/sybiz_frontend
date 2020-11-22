import { fork } from 'redux-saga/effects'
// import sagas
import authSaga from './auth'

export default function* rootSaga() {
  fork(authSaga)
}