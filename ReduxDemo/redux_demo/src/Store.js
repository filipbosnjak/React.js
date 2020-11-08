import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk]

const store = createStore( rootReducer , initialState , applyMiddleware(...middleware) )
//create store takes 3 params: reducer function => in functional programming reduce function takes in accumulator and iterrates over values.
//                                                 then returns acumulator that was optionaly changed during iteration over values
//                             initial state
//                             store enhancer function -> middleware - it will intercept every action that comes trough and then modify it or for eg. cancel it 

export default store;