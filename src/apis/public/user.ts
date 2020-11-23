import { db } from '../../config/firebase'
// import types
import { UserType } from '../../types/public/user'
// import config
import { FIRESTORE_PUBLIC_DOCUMENT_ID } from '../../config/firestore'

export const requestFetchGetUser = async (id: string) => {
  const userRef = db.collection('public').doc(FIRESTORE_PUBLIC_DOCUMENT_ID.ROOT).collection('v1').doc(FIRESTORE_PUBLIC_DOCUMENT_ID.v1).collection('users')
  let payload: UserType

  try {
    await userRef.doc(id).get().then(snapshot => {
      if (!snapshot.exists) {
        throw new Error
      }
      const data = snapshot.data() as UserType
      payload = data
    })

    return { payload }
  } catch(error) {
    return { error }
  }
}