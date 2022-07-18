const mkcert = require('mkcert');
let fs = require('fs');
const path = require("path");

async function go(){
    // create a certificate authority
    const ca = await mkcert.createCA({
        organization: 'Accenture',
        countryCode: 'MY',
        state: 'Kuala Lumpur',
        locality: 'Malaysia',
        validityDays: 365
    });
    
    // then create a tls certificate
    const cert = await mkcert.createCert({
        domains: ['127.0.0.1', 'localhost', '*.accenture.com'],
        validityDays: 365,
        caKey: ca.key,
        caCert: ca.cert
    });
    
    fs.writeFile(path.resolve(__dirname, "../cert/server.crt"), cert.cert, (err) => {
        if (err) console.log(err);
        else console.log("certificate created!");
    });


    fs.writeFile(path.resolve(__dirname, "../cert/server.key"), cert.key, (err) => {
        if (err) console.log(err);
        else console.log("certificate key created!");
    });

    // console.log(cert.key, cert.cert); // certificate info
    // console.log(`${cert.cert}\n${ca.cert}`); // create a full chain certificate by merging CA and domain certificates
}

go();
