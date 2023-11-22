const{networkAlertStubSuccess,networkAlertStubFailed}=require('./alerter.mock')

var alertFailure={}
alertFailure['count']=0

function alertInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkAlertStubFailed(celcius);
    if (returnCode != 200) {
        alertFailure['count']+=1
    }
}

module.exports={alertInCelcius,alertFailure}