"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Post = connection_1.default.define("posts", {
    "id_user": {
        type: sequelize_1.DataTypes.NUMBER,
    },
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    infoContent: {
        type: sequelize_1.DataTypes.STRING
    },
    status: {
        type: sequelize_1.DataTypes.TINYINT
    }
});
exports.default = Post;
//# sourceMappingURL=Post%20copy.js.map