// name reducer and action generators
// ==============
export var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

// hobbies reducer and action generators
// ==============
var nextHobbyId = 1;
export var hobbyReducer = (state = [], action) => {
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
// map reducer and action generators (asynchronous)
// ==============
export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
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