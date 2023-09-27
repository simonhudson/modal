"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseButton = exports.Wrapper = exports.Overlay = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var polished_1 = require("polished");
exports.Overlay = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\talign-items: flex-start;\n\tbackground: rgba(0, 0, 0, 0.65);\n\tdisplay: flex;\n\theight: 100%;\n\tjustify-content: center;\n\tleft: 0;\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\tz-index: 1;\n"], ["\n\talign-items: flex-start;\n\tbackground: rgba(0, 0, 0, 0.65);\n\tdisplay: flex;\n\theight: 100%;\n\tjustify-content: center;\n\tleft: 0;\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\tz-index: 1;\n"])));
exports.Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t@keyframes grow {\n\t\tfrom {\n\t\t\ttransform: scale(0);\n\t\t}\n\t\tto {\n\t\t\ttransform: scale(1);\n\t\t}\n\t}\n\n\tanimation-duration: 0.35s;\n\tanimation-iteration-count: 1;\n\tanimation-name: grow;\n\tanimation-timing-function: linear;\n\tbackground: #f2f9ff;\n\tborder-radius: ", ";\n\tbox-shadow: 0 0 5px #000;\n\tfont-weight: bold;\n\theight: auto;\n\tpadding: ", " ", " ", ";\n\tposition: relative;\n\ttext-align: center;\n\ttop: ", ";\n\twidth: 90%;\n\tz-index: 2;\n\n\t@media screen and (prefers-reduced-motion: reduce) {\n\t\tanimation-name: none;\n\t}\n"], ["\n\t@keyframes grow {\n\t\tfrom {\n\t\t\ttransform: scale(0);\n\t\t}\n\t\tto {\n\t\t\ttransform: scale(1);\n\t\t}\n\t}\n\n\tanimation-duration: 0.35s;\n\tanimation-iteration-count: 1;\n\tanimation-name: grow;\n\tanimation-timing-function: linear;\n\tbackground: #f2f9ff;\n\tborder-radius: ", ";\n\tbox-shadow: 0 0 5px #000;\n\tfont-weight: bold;\n\theight: auto;\n\tpadding: ", " ", " ", ";\n\tposition: relative;\n\ttext-align: center;\n\ttop: ", ";\n\twidth: 90%;\n\tz-index: 2;\n\n\t@media screen and (prefers-reduced-motion: reduce) {\n\t\tanimation-name: none;\n\t}\n"])), (0, polished_1.rem)(10), (0, polished_1.rem)(48), (0, polished_1.rem)(16), (0, polished_1.rem)(16), (0, polished_1.rem)(32));
exports.CloseButton = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tbackground: 0;\n\tborder: 0;\n\tposition: absolute;\n\tright: ", ";\n\ttop: ", ";\n"], ["\n\tbackground: 0;\n\tborder: 0;\n\tposition: absolute;\n\tright: ", ";\n\ttop: ", ";\n"])), (0, polished_1.rem)(16), (0, polished_1.rem)(16));
var templateObject_1, templateObject_2, templateObject_3;
