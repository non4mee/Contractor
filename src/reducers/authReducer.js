import {SIGN_IN, RESTORE_TOKEN, SIGN_OUT} from '../constans/actionTypes';

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
  user: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignout: false,
        user: action.user
      }
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false
      }
    case SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        userToken: null
      }
    default:
      return state
  }
}

export default authReducer;
