import { takeLatest, put } from 'redux-saga/effects';
import {
  loginUser,
  loginUserFail,
  loginUserSuccess,
  signInUserFail,
  signInUser,
  signInUserSuccess,
  signOutSuccess,
  signOutFail,
  signOut
} from './slice';
import firebase from 'firebase';

function* loginSaga({ payload }) {
  console.log(payload); // This being printed

  firebase
    .auth()
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then(function* (result) {
      console.log('success'); // Not being loged
      yield put(loginUserSuccess);
    })
    .catch(function* (error) {
      console.log('failed'); //Not being loged
      yield put(loginUserFail);
    });

}

function* signOutSaga () {
  firebase.auth().signOut().then(function* () {
    yield put(signOutSuccess)
  }).catch(function* () {
    yield put(signOutFail)
  })
}

export default function* authSaga() {
  yield takeLatest(loginUser, loginSaga);
  yield takeLatest(signOut, signOutSaga);
}
