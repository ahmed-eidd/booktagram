import { fork, put } from 'redux-saga/effects';
import gallerySaga from '../store/gallery/saga';

export default function* rootSaga() {
  yield fork(gallerySaga);
}
