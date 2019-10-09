function createNewCook(
    cookName,
    contactNumber,
    addressLine1,
    addressLine2,
    cityId,
    stateId,
    countryId
) {
    return `INSERT INTO merchants(merchant_name, contact_number, address_line1, address_line2, city_id, state_id, country_id) values('${cookName}','${contactNumber}','${addressLine1}', '${addressLine2}','${cityId}','${stateId}','${countryId}')`;
}

function checkCookInfo(userName) {
    return `SELECT * FROM merchants where merchant_name ='${userName}'`;
}

function get_cook_info() {
    return `SELECT * FROM merchants`;
}


module.exports = {
    createNewCook,
    checkCookInfo,
    get_cook_info
};
