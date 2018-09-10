import { SET_COGNITO_USER } from "./actionTypes";

export const setCognitoUser = cognitoUser => {
    return {
        type: SET_COGNITO_USER,
        cognitoUser: cognitoUser
    }
}