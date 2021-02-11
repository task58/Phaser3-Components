"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
require("phaser");
var defaultStyle = {
    fontSize: "30px",
    stroke: "#000000 1",
    backgroundColor: "#FFFFFF",
    color: "#000000"
};
/**
 * ボタンを作れるクラス。
 * @module
 * @class
 * @since 0.1.0
 * @extends Phaser.GameObjects.Text
 */
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    /**
     * ボタンを表すゲームオブジェクト。スタイルの指定なしで使える。
     * ボタンのdefaultStyle : {<br>
     * fontSize : "30px",<br>
     * stroke : "#000000 1",<br>
     * ackgroundColor : "#FFFFFF",<br>
     * color : "#000000"})
     * @param scene The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time.
     * @param x The horizontal position of this Game Object in the world.
     * @param y The vertical position of this Game Object in the world.
     * @param text The text this Text object will display.
     * @param {Phaser.Types.GameObjects.Text.TextStyle} style The text style configuration object.
     * @param extra trueにすると、一部の機能が有効になる
     * @constructor
     */
    function Button(scene, x, y, text, style, extra) {
        if (style === void 0) { style = defaultStyle; }
        if (extra === void 0) { extra = true; }
        var _this = _super.call(this, scene, x, y, text, style) || this;
        _this.setInteractive();
        if (extra) {
            _this.on("pointerover", function () {
                _this.scale *= 1.2;
            }, _this);
            _this.on("pointerout", function () {
                _this.scale /= 1.2;
            }, _this);
        }
        return _this;
    }
    /**
     * ボタンを押したときの処理を設定する。
     * @param callback
     * @param context
     * @method
     */
    Button.prototype.setCallBack = function (callback, context) {
        this.on("pointerdown", callback, context);
    };
    return Button;
}(Phaser.GameObjects.Text));
exports.Button = Button;
