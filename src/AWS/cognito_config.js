import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'ap-northeast-1_O1bojcWN7',
    ClientId: '7k7s8v9ockt6ih2bucl2ejth3p'
};
const userPool = new CognitoUserPool(poolData);

export default userPool;