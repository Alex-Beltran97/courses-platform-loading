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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
const posts_routes_1 = __importDefault(require("../routes/posts.routes"));
const users_routes_1 = __importDefault(require("../routes/users.routes"));
const roles_routes_1 = __importDefault(require("../routes/roles.routes"));
class Server {
    constructor() {
        this.apiPaths = {
            posts: "/api/v1/posts",
            users: "/api/v1/users",
            roles: "/api/v1/roles",
        };
        this.app = (0, express_1.default)();
        this.PORT = process.env.PORT || "8080";
        // middlewares
        this.middlewares();
        // Routes
        this.routes();
        // DB Connection
        this.dbConnection();
    }
    ;
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("Database online");
            }
            catch (error) {
                console.log(error);
                throw new Error("There is an error while connecting the database");
            }
            ;
        });
    }
    ;
    middlewares() {
        // Body Parser
        this.app.use(express_1.default.json());
        // CORS
        this.app.use((0, cors_1.default)());
    }
    ;
    routes() {
        const { posts, users, roles } = this.apiPaths;
        this.app.use(posts, posts_routes_1.default);
        this.app.use(roles, roles_routes_1.default);
        this.app.use(users, users_routes_1.default);
    }
    ;
    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Listening in port http://localhost:${this.PORT}`);
        });
    }
    ;
}
;
exports.default = Server;
//# sourceMappingURL=Server.js.map