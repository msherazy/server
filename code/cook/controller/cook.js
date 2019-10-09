const Joi = require("joi");

const query = require("../../../db/db");
const {
    createNewCook,
    checkCookInfo,
    get_cook_info
} = require("../queries/cookQueries");

//GET Customer Information
const getCook = async (req, res) => {
    try {

        // let id = req.params.id;
        let data = await query(
            get_cook_info()
        );
        res.send({
            resultCode: 2000,
            message: "succes",
            response: data.rows
        });
    } catch (e) {
        console.log(e)
    }
};

//update cook Information
const register = async (req, res) => {

    /*const schema = Joi.object({
        // merchant Address
        cookName: Joi.string().required(),
        contactNumber: Joi.string().required(),
        addressLine1: Joi.string().required(),
        // email: Joi.string().allow(""),
        addressLine2: Joi.string().required(),
        //city: Joi.string().required(),
        cityId: Joi.number().required,
        stateId: Joi.number().required,
        countryId: Joi.number().required,
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
    }*/

    let requestObj = req.body;

    try {
        let data = await query(
            createNewCook(
                requestObj.cookName,
                requestObj.contactNumber,
                requestObj.addressLine1,
                requestObj.addressLine2,
                requestObj.cityId,
                requestObj.stateId,
                requestObj.countryId,
            )
        );
        console.log("");
        res.send({
            resultCode: 2000,
            message: "cook registered successfully",
            response: ""
        });
    } catch (error) {
        if (error.code === '23505') {
            res.send({
                status: 4003,
                message: 'cook name already taken',
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

    // Check if cook already exists
    //Else return an error
    let result = await query(checkCookInfo(req.body.userName));
    if (result.rows.length === 0) {
        return res.send({
            resultCode: 4000,
            message: "cook does not exist",
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
    login,
    getCook
};
