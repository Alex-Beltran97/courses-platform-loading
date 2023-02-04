"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./models/Server"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const server = new Server_1.default();
server.listen();
//# sourceMappingURL=app.js.map