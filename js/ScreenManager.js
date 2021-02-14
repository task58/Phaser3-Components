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
exports.ScreenManager = void 0;
/**
 * スクリーンに関係することを処理するクラス。
 * `this.scene.lunch("ScreenManager")`した後、`this.scene.get("ScreenManager")`してください。
 */
var ScreenManager = /** @class */ (function (_super) {
    __extends(ScreenManager, _super);
    function ScreenManager() {
        var _this = _super.call(this, {
            key: "ScreenManager"
        }) || this;
        _this.autoResize = true;
        return _this;
    }
    /**
     * 画面のオートリサイズを有効にするか設定する。(初期値:true)
     * @param value 有効にするかどうか trueで有効になる。
     */
    ScreenManager.prototype.setAutoResize = function (value) {
        this.autoResize = value;
    };
    ScreenManager.prototype.update = function () {
        if (this.autoResize) {
            this.game.scale.resize(window.innerWidth, window.innerHeight);
        }
    };
    return ScreenManager;
}(Phaser.Scene));
exports.ScreenManager = ScreenManager;
