const {Pool} = require("pg");
const {
    db: {user, host, database, password, port}
} = require("../conf/config");

const pool = new Pool({
    user,
    host,
    database,
    password,
    port
});

// Query
// It return the promise
const query = (text, params) => {
    return pool.query(text, params);
};

module.exports = query;
