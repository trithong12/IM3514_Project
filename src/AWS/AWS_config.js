const AWS = require('aws-sdk/dist/aws-sdk-react-native'); 
AWS.config.update({
    region: "ap-northeast-1",
    credentials: {
        accessKeyId: "AKIAJQVEZRJOOIKIXISQ",
        secretAccessKey: "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"
    }
});
//AWS.config.loadFromPath('/Users/tonychen/AWS/config.json');
export default AWS;