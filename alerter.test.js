const {expect} = require('chai')
const{alertInCelcius,alertFailure}= require('./alerter')
const{networkAlertStubSuccess,networkAlertStubFailed}=require('./alerter.mock')

alertInCelcius(400.5,networkAlertStubSuccess);
alertInCelcius(303.6,networkAlertStubFailed);

console.log(`${alertFailure['count']} alerts failed.`);
expect(alertFailure['count']).equals(1);

console.log('All is well');