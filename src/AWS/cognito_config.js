import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId : '**', // your user pool id here
    ClientId : '**' // your app client id here
};
const userPool = new CognitoUserPool(poolData);

export default userPool;