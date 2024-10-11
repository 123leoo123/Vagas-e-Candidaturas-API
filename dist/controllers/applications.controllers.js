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
exports.ApplicationsControlers = void 0;
const applications_services_1 = require("../services/applications.services");
const tsyringe_1 = require("tsyringe");
class ApplicationsControlers {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const applicationsServices = tsyringe_1.container.resolve(applications_services_1.ApplicationsServices);
            const response = yield applicationsServices.create(Number(req.params.id), req.body);
            return res.status(201).json(response);
        });
    }
    findMany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const applicationsServices = tsyringe_1.container.resolve(applications_services_1.ApplicationsServices);
            const response = yield applicationsServices.findMany(Number(req.params.id));
            return res.status(200).json(response);
        });
    }
}
exports.ApplicationsControlers = ApplicationsControlers;
