import { useState, useEffect } from 'react'
// import config
import firebase from '../../config/firebase'

export const useSessionCheck = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setIsChecked(true)
    })
  }, [])

  return [isLoggedIn, isChecked]
}