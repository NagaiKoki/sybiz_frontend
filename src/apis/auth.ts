import firebase, { db } from '../config/firebase'
// import types
import { SignInType } from '../types/auth'
import { PublicUserType } from '../types/public/user'
// import config
import { FIRESTORE_PUBLIC_DOCUMENT_ID } from '../config/firestore'

export const requestFetchSignIn = async (type: SignInType) => {
  const userRef = db.collection('public').doc(FIRESTORE_PUBLIC_DOCUMENT_ID.ROOT).collection('v1').doc(FIRESTORE_PUBLIC_DOCUMENT_ID.v1).collection('users')
  try {
    const provider = new firebase.auth.TwitterAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const { username, providerId, isNewUser } = result.additionalUserInfo
    const user: PublicUserType = {
      username,
      userId: username,
      firebaseUserId: result.user.uid,
      providerId,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    if (isNewUser) {
      await userRef.doc(result.user.uid).set(user)
    }
    return { payload: user }
  } catch(error) {
    return { error }
  }
}
