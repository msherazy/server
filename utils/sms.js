const request = require('request');
const queryString = require('querystring');


exports.uriEncodedRequest = function (obj) {

    return new Promise((resolve, reject) => {
        let requestJSON = {};
        requestJSON.userName = "923335333825";
        requestJSON.password = "Mobile!@#123";
        requestJSON.ClientID = "923335333825";
        requestJSON.language = "English";
        requestJSON.mask = "MOBILEVAS";
        requestJSON.to = obj.mobileNumber;
        requestJSON.msg = obj.OTP;

        let data = {};
        data['formData'] = requestJSON;

        let formData = queryString.stringify(data.formData);
        let options = {
            uri: 'http://www.smspoint.pk/api/smsapi/',
            method: 'POST',
            body: formData,
            headers: {
                'Content-Length': formData.length,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        request(options, function (err, res, body) {
            if (err)
                reject(err);
            else
                resolve(body);
        });

    })
};