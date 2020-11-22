import firebase from '../config/firebase'
// import types
import { SignInType } from '../types/auth'

export const requestFetchSignIn = async (type: SignInType) => {
  try {
    const provider = new firebase.auth.TwitterAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  } catch(error) {
    return { error }
  }
}

