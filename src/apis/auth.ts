import firebase from '../config/firebase'
// import types
import { SignInType } from '../types/auth'

export const requestFetchSignIn = async (type: SignInType) => {
  try {
    const provider = new firebase.auth.TwitterAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    console.log(result)
  } catch(error) {
    return { error }
  }
}

