import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import dictionary from './modules/dictionary';
import thunk from 'redux-thunk';



// 미들웨어 묶어주기
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

// root리듀서를 만든다
const rootReducer = combineReducers({dictionary});

const store = createStore(rootReducer,enhancer);

export default store;