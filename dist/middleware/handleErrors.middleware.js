"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = void 0;
const appError_1 = require("../errors/appError");
const zod_1 = require("zod");
const jsonwebtoken_1 = require("jsonwebtoken");
class handleErrors {
    do() {
        return "do";
    }
    undo() {
        return this.do();
    }
    static execute(error, req, res, next) {
        if (error instanceof appError_1.appError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
            return res.status(401).json({ message: error.message });
        }
        if (error instanceof zod_1.ZodError) {
            return res.status(422).json(error);
        }
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
exports.handleErrors = handleErrors;
const handle = "";
class Handle {
}
var Options;
(function (Options) {
})(Options || (Options = {}));
handleErrors.execute;
const error = new handleErrors();
error.undo();
