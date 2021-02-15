import {RESTORE_TOKEN, SIGN_IN, SIGN_OUT} from '../constans/actionTypes';

export const restoreToken = token => ({
  type: RESTORE_TOKEN,
  token
})

export const signIn = user => ({
  type: SIGN_IN,
  user
})

export const signOut = token => ({
  type: SIGN_OUT
})
