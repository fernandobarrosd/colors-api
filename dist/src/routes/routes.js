"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const FindAllColorsController_1 = require("../controllers/colors/FindAllColorsController");
const FindByIdColorController_1 = require("../controllers/colors/FindByIdColorController");
exports.routes = (0, express_1.Router)();
exports.routes.get("/api/colors", new FindAllColorsController_1.FindAllColorsController().handle);
exports.routes.get("/api/color", new FindByIdColorController_1.FindByIdColorController().handle);
