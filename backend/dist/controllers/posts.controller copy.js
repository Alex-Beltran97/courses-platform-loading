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
exports.deletePosts = exports.patchPosts = exports.putPosts = exports.createPost = exports.getPost = exports.getPosts = void 0;
const Post_1 = __importDefault(require("../models/Post"));
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield Post_1.default.findAll();
    res.json(posts);
});
exports.getPosts = getPosts;
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const post = yield Post_1.default.findByPk(id);
    res.json(post !== null && post !== void 0 ? post : {});
});
exports.getPost = getPost;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const post = yield Post_1.default.build(body);
        post.save();
        res.json(post);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "There was a problem while creating an post"
        });
    }
    ;
});
exports.createPost = createPost;
const putPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const post = yield Post_1.default.findByPk(id);
        yield (post === null || post === void 0 ? void 0 : post.update(Object.assign(Object.assign({}, body), { updatedAt: new Date().toISOString() })));
        res.json(post);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something was wrong while editing the post" });
    }
    ;
});
exports.putPosts = putPosts;
const patchPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const post = yield Post_1.default.findByPk(id);
        yield (post === null || post === void 0 ? void 0 : post.update(Object.assign(Object.assign({}, body), { updatedAt: new Date().toISOString() })));
        res.json(post);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something was wrong while editing the post"
        });
    }
    ;
});
exports.patchPosts = patchPosts;
const deletePosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const post = yield Post_1.default.findByPk(id);
        yield (post === null || post === void 0 ? void 0 : post.update({ status: 0, updatedAt: new Date().toISOString() }));
        res.json(post);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "There is a problem trying to delete this user"
        });
    }
    ;
});
exports.deletePosts = deletePosts;
//# sourceMappingURL=posts.controller%20copy.js.map