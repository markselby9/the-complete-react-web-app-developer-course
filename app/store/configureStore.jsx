var redux = require('redux');
var {nameReducer, hobbyReducer, mapReducer} = require('./../reducers/index');
var thunk = require('redux-thunk').default;

export var configure = () => {
    var reducer = redux.combineReducers({
        name: nameReducer,
        hobby: hobbyReducer,
        map: mapReducer
    });


    var store = redux.createStore(reducer, redux.compose(
        //middleware functions
        redux.applyMiddleware(thunk),   //use redux-thunk middleware
        window.devToolsExtension ? window.devToolsExtension() : f => f // for dev tools
    )); //redux.createStore takes a reducer

    return store;
};

