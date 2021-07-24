"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./index.css");
function Slider(props) {
    var listImg = props.listImg, _a = props.time, time = _a === void 0 ? 100 : _a;
    var renderArrImg = react_1.useCallback(function (arrImg) {
        return (react_1.default.createElement(react_1.default.Fragment, null, arrImg.map(function (src, index) {
            return (react_1.default.createElement("div", { className: "card-holder", key: index },
                react_1.default.createElement("img", { className: "v-img", src: src })));
        })));
    }, []);
    react_1.useEffect(function () {
        var elemSlider = Array.from(document.getElementsByClassName("v-slider"));
        for (var i = 0; i < elemSlider.length; i++) {
            var element = elemSlider[i];
            element.style.animation = time + "s linear 0s infinite translationLeftSide";
        }
    }, []);
    return (react_1.default.createElement("div", { className: "v-container-holder" },
        react_1.default.createElement("div", { className: "v-slider v-left" }, renderArrImg(listImg)),
        react_1.default.createElement("div", { className: "v-slider v-right" }, renderArrImg(listImg))));
}
exports.default = Slider;
//# sourceMappingURL=index.js.map