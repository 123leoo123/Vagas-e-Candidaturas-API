"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOportunityIdMiddleware = void 0;
const appError_1 = require("../errors/appError");
const prisma_1 = require("../database/prisma");
class IsOportunityIdMiddleware {
    static execute(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const opportunity = yield prisma_1.prisma.opportunity.findFirst({
                where: { id: Number(id) },
            });
            if (!opportunity) {
                throw new appError_1.appError(404, "Opportunity not found");
            }
            res.locals.opportunity = opportunity;
            next();
        });
    }
}
exports.IsOportunityIdMiddleware = IsOportunityIdMiddleware;
