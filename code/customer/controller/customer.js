const Joi = require("joi");

const query = require("../../../db/db");
const {
    createNewCustomer,
    checkCustomerInfo
} = require("../queries/customerQuries");

//update Customer Information
const register = async (req, res) => {

    const schema = Joi.object({
        // merchant Address
        firstName: Joi.string().required(),
        userName: Joi.string().required(),
        lastName: Joi.string().required(),
        // email: Joi.string().allow(""),
        email: Joi.string().required(),
        mobileNumber: Joi.string().required(),
    }).options({
        stripUnknown: true
    });

    // // validate
    let {error} = Joi.validate(req.body, schema);

    if (error) {
        return res.send({
            resultCode: 4000,
            message: error.details[0].message,
            response: ""
        });
    }

    let requestObj = req.body;

    try {
        let data = await query(
            createNewCustomer(
                requestObj.mobileNumber,
                requestObj.firstName,
                requestObj.lastName,
                requestObj.email,
                requestObj.userName,
                requestObj.password,
            )
        );
        console.log("");
        res.send({
            resultCode: 2000,
            message: "Customer registered successfully",
            response: ""
        });
    } catch (error) {
        if (error.code === '23505') {
            res.send({
                status: 4003,
                message: 'username already taken',
                response: ""
            });
        } else {
            res.send({
                status: 4003,
                message: error.toString(),
                response: ""
            });
        }
    }
};

//login
const login = async (req, res) => {

    // Check if customer already exists
    //Else return an error
    let result = await query(checkCustomerInfo(req.body.userName));
    if (result.rows.length === 0) {
        return res.send({
            resultCode: 4000,
            message: "Customer does not exist",
            response: ""
        });
    } else {
        let row = result.rows[0];
        if (req.body.password !== row.password) {
            return res.send({
                resultCode: 4001,
                message: "Invalid credentials",
                response: ""
            });
        } else {
            res.send({
                resultCode: 2000,
                message: "Success",
                response: ""
            });
        }
    }
};
/************* Exports ********************/
module.exports = {
    register,
    login
};
