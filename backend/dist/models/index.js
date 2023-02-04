"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("./Post"));
const User_1 = __importDefault(require("./User"));
Post_1.default.belongsTo(User_1.default, { foreignKey: "id_user" });
User_1.default.hasMany(Post_1.default, { foreignKey: "id_user" });
const models = {
    Post: Post_1.default,
    User: User_1.default
};
exports.default = models;
//# sourceMappingURL=index.js.map