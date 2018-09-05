import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId : 'ap-northeast-1_O1bojcWN7', // your user pool id here
    ClientId : '7k7s8v9ockt6ih2bucl2ejth3p' // your app client id here
};
const userPool = new CognitoUserPool(poolData);

export default userPool;