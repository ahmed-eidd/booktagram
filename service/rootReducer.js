import { combineReducers} from 'redux'
import { firebaseReducer} from 'react-redux-firebase'
import galleryReducer from '../store/gallery/slice';
import newsReducer from '../store/news/slice';
import authReducer from '../store/auth/slice';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  gallery: galleryReducer,
  news: newsReducer,
  auth: authReducer
})

export default rootReducer
