const customerRouter = require("../code/customer/routes/customerV1");
const cookRouter = require("../code/Cook/routes/cookV1");

module.exports = function (app) {
    app.use("/v1/customers", customerRouter);
    app.use("/v1/cooks", cookRouter);
};
