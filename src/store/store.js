import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from "redux-thunk"
import { countReducer } from './reducer';
import { moviesReduser } from './reducers/moviesReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    count: countReducer,
    movies: moviesReduser
})

export const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware
        (thunk))
)


