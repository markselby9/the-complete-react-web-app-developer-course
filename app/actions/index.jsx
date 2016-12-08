//directly export the action generators
export var changeName = (name) => {
    // action generator
    return {
        type: 'CHANGE_NAME',
        name   //es6 feature, equal to name:name
    }
};

export var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
};
export var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
};

export var startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH'
    }
};
export var completeLocationFetch = (url) => {
    console.log('completeLocationFetch, ' + url);
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
};
export var fetchLocation = () => {
    return (dispatch, getState)=>{
        dispatch(startLocationFetch());
        var pretendFetch = (url) => {
            setTimeout(
                dispatch(completeLocationFetch(url))
                , 100);
        };
        pretendFetch('www.bing.com');
    };
};
