function networkAlertStubSuccess(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    return 200;
}

function networkAlertStubFailed(celcius) {
    return 500;
}


module.exports={networkAlertStubSuccess,networkAlertStubFailed}