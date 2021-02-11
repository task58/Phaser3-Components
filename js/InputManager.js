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
exports.InputManager = void 0;
require("phaser");
/**
 * 入力を管理するクラス。
 * シーンとしてのKeyは、"InputManager"なので、<br>
 * 使用したいところで<code>this.scene.launch("InputManager")</code>した後に、<br>
 * <code>this.scene.get("InputManager")</code>して利用してください。
 * @module
 * @class
 * @since 0.1.0
 * @extends Phaser.Scene
 */
var InputManager = /** @class */ (function (_super) {
    __extends(InputManager, _super);
    function InputManager() {
        return _super.call(this, {
            key: "InputManager"
        }) || this;
    }
    InputManager.prototype.create = function () {
        for (var index in Phaser.Input.Keyboard.KeyCodes) {
            this.keys[index] = this.input.keyboard.addKey(index);
        }
    };
    InputManager.prototype.update = function () {
    };
    /**
     * 指定したキーが押されたかどうかを取得する。
     * @param key キーの名前
     * @method
     */
    InputManager.prototype.getKeyDown = function (key) {
        var inputKey = this.keys[key];
        if (inputKey instanceof Phaser.Input.Keyboard.Key) {
            return inputKey.isDown;
        }
        else {
            return false;
        }
    };
    /**
     * 指定したキーが押した状態から押してない状態に変わったかどうかを取得する。
     * @param key キーの名前
     * @method
     */
    InputManager.prototype.getKeyUp = function (key) {
        var inputKey = this.keys[key];
        if (inputKey instanceof Phaser.Input.Keyboard.Key) {
            console.log(inputKey.isUp);
            return inputKey.isUp;
        }
        else {
            return false;
        }
    };
    return InputManager;
}(Phaser.Scene));
exports.InputManager = InputManager;
