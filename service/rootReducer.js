import { combineReducers} from 'redux'
import galleryReducer from '../store/gallery/slice';

const rootReducer = combineReducers({
  gallery: galleryReducer
})

export default rootReducer
