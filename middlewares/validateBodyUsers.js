const HttpError = require("../helpers/HttpError");

const validateBodyUsers = (schema) => {
    const func = (req, res, next) => {
        const { error } = schema.validate(req.body);

        if (error) {
            next(HttpError(400, error.message));
        }
        next();
    };

    return func;
};

module.exports = validateBodyUsers;
