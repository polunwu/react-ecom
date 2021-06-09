import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';

import { signInSuccess, signInFialure } from './user.actions';

// 取得 userSnapshot，並更新到 user reducer: currentUser
export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    // put means puts action back to regular Redux flow
    // update user into user reducer
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(signInFialure(error));
  }
}

// 執行 google sign in
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFialure(error));
  }
}

// 執行 email sign in
export function* signInWithEmail(action) {
  const { email, password } = action.payload;

  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFialure(error));
  }
}

// 監聽 GOOGLE_SIGN_IN_START
export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

// 監聽 EMAIL_SIGN_IN_START
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
