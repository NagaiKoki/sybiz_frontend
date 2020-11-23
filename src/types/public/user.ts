import firebase from 'firebase'

export interface PublicUserState {
  loginUser: PublicUserType
}

export type PublicUserType = {
  userId: string
  username: string
  providerId: string
  createdAt: Date
  updatedAt: Date
}