function createUser(
    userName,
    password
) {
    return `INSERT INTO users(user_name, password) values('${userName}','${password}')`;
}

function checkUserInfo(userName) {
    return `SELECT * FROM users where user_name ='${userName}'`;
}

function get_user_info() {
    return `SELECT * FROM users`;
}


module.exports = {
    createUser,
    checkUserInfo,
    get_user_info
};
