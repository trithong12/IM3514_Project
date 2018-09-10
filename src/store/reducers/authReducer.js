import { SET_COGNITO_USER } from '../actions/actionTypes';

const initialState = {
    cognitoUser: null
}

const reducer = (state = initialState, action) => {
    console.log('action in reducer: ', action.type, '\n', action.cognitoUser);
    switch (action.type) {
        case SET_COGNITO_USER:
            return {
                ...state,
                cognitoUser: action.cognitoUser
            }
        default:
            return state;
    }
}

export default reducer;