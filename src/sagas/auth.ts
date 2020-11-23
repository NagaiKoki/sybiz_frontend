import Router from 'next/router'
import { PayloadAction } from '@reduxjs/toolkit'
import { put, call, fork, takeEvery } from 'redux-saga/effects'
// import apis
import { requestFetchSignIn } from '../apis/auth'
// import slices
import {  
  requestSignIn,
  successSignIn,
  failureSignIn
} from '../slices/auth'
import { setLoginUser } from '../slices/public/user'
// import types
import { RequestSignInType } from '../types/auth'
import { ResponseType } from '../types'
import { PublicUserType } from '../types/public/user'

function* runRequestSignIn(action: PayloadAction<RequestSignInType>) {
  const { payload, error }: ResponseType<PublicUserType> = yield call(
    requestFetchSignIn,
    action.payload.type
  )

  if (payload && !error) {
    yield put(successSignIn())
    yield put(setLoginUser(payload))
    yield call(Router.push, `/onBoarding`)
  } else {
    yield put(failureSignIn(error))
  }
}

function* handleRequestSignIn() {
  yield takeEvery(requestSignIn.type, runRequestSignIn)
}

export default function* authSaga() {
  yield fork(handleRequestSignIn)
}