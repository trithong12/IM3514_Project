const AWS = require('aws-sdk/dist/aws-sdk-react-native');
AWS.config.update({
    region: "ap-northeast-1",
    credentials: {
        accessKeyId: "AKIAI2RR4EDORCMA5X3Q",
        secretAccessKey: "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"
    }
});
//AWS.config.loadFromPath('/Users/tonychen/AWS/config.json');
export default AWS;