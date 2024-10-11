"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateBody = void 0;
class ValidateBody {
}
exports.ValidateBody = ValidateBody;
ValidateBody.execute = (schema) => (req, res, next) => {
    console.log(req.body);
    req.body = schema.parse(req.body);
    return next();
};
