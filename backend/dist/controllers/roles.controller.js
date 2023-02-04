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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRole = exports.putRole = exports.createRoles = exports.getRoles = void 0;
const Roles_1 = __importDefault(require("../models/Roles"));
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield Roles_1.default.findAll();
        res.json(roles);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "There was a problem getting roles"
        });
    }
    ;
});
exports.getRoles = getRoles;
const createRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const role = yield Roles_1.default.build(body);
        role.save();
        res.json(role);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "There was a problem creating a role"
        });
    }
    ;
});
exports.createRoles = createRoles;
const putRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield Roles_1.default.findByPk(id);
        yield (user === null || user === void 0 ? void 0 : user.update(Object.assign(Object.assign({}, body), { updatedAt: new Date().toISOString() })));
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "There was a problem editing the user" });
    }
    ;
});
exports.putRole = putRole;
const deleteRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield Roles_1.default.findByPk(id);
        yield (user === null || user === void 0 ? void 0 : user.destroy());
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "There is a problem trying to delete this user"
        });
    }
    ;
});
exports.deleteRole = deleteRole;
//# sourceMappingURL=roles.controller.js.map