import {AnyAction} from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';
import { signInSuccess, signOutSuccess, signOutFailed, signInFailed,signUpFailed } from './user.action';
import { USER_ACTION_TYPES } from './user.types';

export type UserState = {
  readonly currentUser: UserData | null,
  readonly isLoading: boolean,
  readonly error: Error | null,
};

const INITIAL_STATE:UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE as UserState, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signOutFailed.match(action) ||
    signInFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;
   
  
};