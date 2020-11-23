export interface AuthState {
  isLoggedIn: boolean
  error: string
}

export type SignInType = 'twitter'

export type RequestSignInType = {
  type: SignInType
}