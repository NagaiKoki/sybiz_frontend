export interface AuthState {
  isLoggedIn: boolean
  error: string
  isLoading: boolean
}

export type SignInType = 'twitter'

export type RequestSignInType = {
  type: SignInType
}