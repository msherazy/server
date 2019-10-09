function createNewCustomer(
    mobile_number,
    first_name,
    last_name,
    email,
    username,
    password
) {
    return `INSERT INTO customers(mobile_number, first_name, last_name, email, username, password) values('${mobile_number}','${first_name}','${last_name}', '${email}','${username}','${password}')`;
}

function checkCustomerInfo(userName) {
    return `SELECT * FROM customers where username ='${userName}'`;
}


module.exports = {
    createNewCustomer,
    checkCustomerInfo
};
  