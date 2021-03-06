import "phaser"

interface KeyBinds {
    [key:string] : Phaser.Input.Keyboard.Key
}

/**
 * 入力を管理するクラス。
 * シーンとしてのKeyは、"InputManager"なので、<br>
 * 使用したいところで`this.scene.launch("InputManager")`した後に、<br>
 * `this.scene.get("InputManager")`して利用してください。
 * @module
 * @class
 * @since 0.1.0
 * @extends Phaser.Scene
 */
export class InputManager extends Phaser.Scene{

    private keys: KeyBinds;

    constructor(){
        super({
            key : "InputManager"
        })

        this.keys = {};
    }


    create(){
        for(let index in Phaser.Input.Keyboard.KeyCodes){
            this.keys[index] = this.input.keyboard.addKey(index);
        }
    }

    update(){
    }

    /**
     * 指定したキーが押されたかどうかを取得する。
     * @param key キーの名前
     * @method
     */
    public getKeyDown(key : string){
        var inputKey = this.keys[key];
        if(inputKey instanceof Phaser.Input.Keyboard.Key){
            return inputKey.isDown;
        }else{
            return false;
        }
    }

    /**
     * 指定したキーが押した状態から押してない状態に変わったかどうかを取得する。
     * @param key キーの名前
     * @method
     */
    public getKeyUp(key : string){
        var inputKey = this.keys[key];
        if(inputKey instanceof Phaser.Input.Keyboard.Key){
            console.log(inputKey.isUp)
            return inputKey.isUp;
        }else{
            return false;
        }
    }
}