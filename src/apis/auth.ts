import firebase, { twitterProvider } from '../config/firebase'
// import types
import { SignInType } from '../types/auth'

export const requestFetchSignIn = async (type: SignInType) => {
  try {
    firebase.auth().signInWithRedirect(twitterProvider)
    const result = await firebase.auth().getRedirectResult()
    console.log(result)
  } catch(error) {
    return { error }
  }
}

