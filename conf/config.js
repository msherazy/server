const env = process.env.NODE_ENV || "test";
// const env = process.env.NODE_ENV;

// Development Configuration
const development = {
    db: {
        user: "postgres",
        host: "localhost",
        database: "database",
        password: "advcomm1",
        port: 5432
    }
};

// Test Configuration
const test = {
    db: {
        user: "postgres",
        host: "localhost",
        database: "database",
        password: "root1234",
        port: 5432
    }
};

// Production configuration
const production = {
    db: {
        user: "postgres",
        host: "localhost",
        database: "database",
        password: "advcomm1",
        port: 5432
    }
};

const config = {
    development,
    test,
    production
};

module.exports = config[env];
