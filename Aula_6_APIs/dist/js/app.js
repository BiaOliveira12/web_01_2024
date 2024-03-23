"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
function appLog() {
    console.log("A API está disponível no URL http://localhost:3000");
}
function hello(resq, res) {
    return res.status(201).json({ mensagem: "Hello World!!" });
}
app.get("/api/hello", hello);
app.listen(PORT, appLog);

