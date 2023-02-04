"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Roles_1 = __importDefault(require("./Roles"));
const User = connection_1.default.define("users", {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    "birth_date": {
        type: sequelize_1.DataTypes.DATE
    },
    status: {
        type: sequelize_1.DataTypes.TINYINT
    },
    "id_role": {
        type: sequelize_1.DataTypes.NUMBER
    }
});
User.belongsTo(Roles_1.default, { foreignKey: "id_role" });
exports.default = User;
//# sourceMappingURL=User.js.map