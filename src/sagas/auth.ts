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
// import types
import { RequestSignInType } from '../types/auth'
import { ResponseType } from '../types'

function* runRequestSignIn(action: PayloadAction<RequestSignInType>) {
  const { payload, error }: ResponseType<any> = call(
    requestFetchSignIn,
    action.payload.type
  )

  if (payload && !error) {
    put(successSignIn())
  } else {
    put(failureSignIn(error))
  }
}

function* handleRequestSignIn() {
  takeEvery(requestSignIn.type, runRequestSignIn)
}

export default function* authSaga() {
  fork(handleRequestSignIn)
}