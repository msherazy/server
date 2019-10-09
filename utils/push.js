const admin = require("firebase-admin");

var serviceAccount = require("./smartworld-486a6-firebase-adminsdk-usdmn-87906cfcac");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://smartworld-486a6.firebaseio.com"
});

const query = require("../db/db");

/**************** Import Query **************************/
const Queries = require("../query-generator/billing");
const {get_fcm_token} = Queries;

/**
 *  Notification Function is wrapper on send Notification
 *  It expect accountnumber, content title ,body and key as parameter
 */
module.exports = Notification = async (
    accountNumber,
    contentTitle,
    body,
    key
) => {
    try {
        let result = await query(get_fcm_token(accountNumber));
        const token = result.rows[0].fcm_token;
        let element = {
            token,
            contentTitle,
            body,
            key
        };

        let cart = [];
        cart.push({element});
        // Send Notification
        sendNotification(cart);
    } catch (error) {
        console.log("error");
    }
};

function sendNotification(obj) {
    const payLoad = {
        data: {
            Key: obj[0].element.key,
            contentTitle: obj[0].element.contentTitle
        },
        notification: {
            title: 'SmartWorld',
            body: obj[0].element.body
        }
    };

    const options = {
        priority: "high"
    };
    admin
        .messaging()
        .sendToDevice(obj[0].element.token, payLoad, options)
        .then(function (response) {
            console.log("Successfully sent message");
        })
        .catch(function (error) {
            console.log(error);
            console.log("Error sending message");
        });
}