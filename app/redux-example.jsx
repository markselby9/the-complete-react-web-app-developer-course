var redux = require('redux');
var axios = require('axios');
console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();


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
// store.dispatch(changeName('jon'));
// store.dispatch(addHobby('fight'));
// store.dispatch(changeName('snow'));
// store.dispatch(changeName('betty'));
// store.dispatch(addHobby('horsing'));
// store.dispatch(addHobby('climbing'));
// store.dispatch(removeHobby(3));

//actions.fetchLocation();
store.dispatch(actions.fetchLocation());