import firebase from 'firebase'

export type UserType = {
  userId: string
  username: string
  providerId: string
  createdAt: firebase.firestore.FieldValue
  updatedAt: firebase.firestore.FieldValue
}