import  firebase, { db } from '../../config/firebase'
// import types
import { PublicUserType } from '../../types/public/user'
// import config
import { FIRESTORE_PUBLIC_DOCUMENT_ID } from '../../config/firestore'

export const requestFetchGetUser = async (id?: string) => {
  console.log(`firebase.auth().currentUser: ${firebase.auth().currentUser}`)
  
  const userRef = db.collection('public').doc(FIRESTORE_PUBLIC_DOCUMENT_ID.ROOT).collection('v1').doc(FIRESTORE_PUBLIC_DOCUMENT_ID.v1).collection('users')
  let payload: PublicUserType

  try {
    await userRef.doc('uid').get().then(snapshot => {
      if (!snapshot.exists) {
        throw new Error
      }
      const data = snapshot.data() as PublicUserType
      payload = data
    })
    return { payload }
  } catch(error) {
    return { error }
  }
}