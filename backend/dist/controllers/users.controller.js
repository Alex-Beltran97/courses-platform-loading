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
exports.deleteUser = exports.patchUser = exports.putUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const Roles_1 = __importDefault(require("../models/Roles"));
const User_1 = __importDefault(require("../models/User"));
const attributes = ["id", "type"];
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default.findAll({ include: { model: Roles_1.default, attributes } });
    res.json(users);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield User_1.default.findByPk(id);
    res.json(user !== null && user !== void 0 ? user : {});
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const user = yield User_1.default.build(body);
        user.save();
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "There was a problem creating an user"
        });
    }
    ;
});
exports.createUser = createUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield User_1.default.findByPk(id);
        yield (user === null || user === void 0 ? void 0 : user.update(Object.assign(Object.assign({}, body), { updatedAt: new Date().toISOString() })));
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "There was a problem editing the user" });
    }
    ;
});
exports.putUser = putUser;
const patchUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield User_1.default.findByPk(id);
        yield (user === null || user === void 0 ? void 0 : user.update(Object.assign(Object.assign({}, body), { updatedAt: new Date().toISOString() })));
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "There is a problem editing the post"
        });
    }
    ;
});
exports.patchUser = patchUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield User_1.default.findByPk(id);
        yield (user === null || user === void 0 ? void 0 : user.update({ status: 0, updatedAt: new Date().toISOString() }));
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
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map