var redux = require('redux');
var axios = require('axios');
console.log('Starting redux example');

var stateDefault = {
    name: 'Anonymous',
    hobbies: []
};

// name reducer and action generators
// ==============
var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};
var changeName = (name) => {
    // action generator
    return {
        type: 'CHANGE_NAME',
        name   //es6 feature, equal to name:name
    }
};

// hobbies reducer and action generators
// ==============
var nextHobbyId = 1;
var hobbyReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                // add a hobby object using ES6 feature
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => {
                return hobby.id !== action.id;
            });
        default:
            return state;
    }
};
var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
};
var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
};

// map reducer and action generators (asynchronous)
// ==============
var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
    switch (action.type) {
        case 'START_LOCATION_FETCH':
            return {
                isFetching: true,
                url: undefined
            };
        case 'COMPLETE_LOCATION_FETCH':
            return {
                isFetching: false,
                url: action.url
            };
        default:
            return state;
    }
};
var startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH'
    }
};
var completeLocationFetch = (url) => {
    console.log('completeLocationFetch, ' + url);
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
};
var fetchLocation = () => {
    store.dispatch(startLocationFetch());
    var pretendFetch = (url) => {
        setTimeout(
            store.dispatch(completeLocationFetch(url))
            , 100);
    };
    pretendFetch('www.bing.com');
};

var reducer = redux.combineReducers({
    name: nameReducer,
    hobby: hobbyReducer,
    map: mapReducer
});


var store = redux.createStore(reducer, redux.compose(
    //middleware functions
    window.devToolsExtension ? window.devToolsExtension() : f => f // for dev tools
)); //redux.createStore takes a reducer

// Store can subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('Subscibe: current state is ', state);
});
// store can unsubscribe
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

//dispatch the action to store
// store.dispatch({
//     type: 'CHANGE_NAME', //action name, upper case and underscore
//     name: 'AZXAZX'
// });
store.dispatch(changeName('jon'));
store.dispatch(addHobby('fight'));
store.dispatch(changeName('snow'));
store.dispatch(changeName('betty'));
store.dispatch(addHobby('horsing'));
store.dispatch(addHobby('climbing'));
store.dispatch(removeHobby(3));
fetchLocation();