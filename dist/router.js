"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = __importDefault(require("./controllers/userController"));
var router = (0, express_1.Router)();
router.post('/', userController_1.default.create);
exports.default = router;
//# sourceMappingURL=router.js.map