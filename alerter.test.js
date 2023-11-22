const {expect} = require('chai')
const{alertInCelcius,alertFailure}= require('./alerter')

alertInCelcius(400.5);
alertInCelcius(303.6);

alertInCelcius(1000);
console.log(`${alertFailure['count']} alerts failed.`);
// expect(alertFailureCount).equals(1);

console.log('All is well');