import "phaser";

/**
 * スクリーンに関係することを処理するクラス。
 * `this.scene.lunch("ScreenManager")`した後、`this.scene.get("ScreenManager")`してください。
 */
export class ScreenManager extends Phaser.Scene{
    private element = document.querySelector("html")

    private autoResize:boolean;

    constructor(){
        super({
            key:"ScreenManager"
        })

        this.autoResize = true;
    }

    /**
     * 画面のオートリサイズを有効にするか設定する。(初期値:true)
     * @param value 有効にするかどうか trueで有効になる。
     */
    public setAutoResize(value:boolean){
        this.autoResize = value;
    }

    /**
     * 画面の中心座標を取得する。
     * @param CameraX カメラのX座標
     * @param CameraY カメラのY座標
     */
    public getCenterPosition(CameraX:number = 0,CameraY:number = 0):Vector2{
        return {
            x : this.game.canvas.width/2 + CameraX,
            y : this.game.canvas.height/2 + CameraY
        }
    }

    update():void{
        if(this.autoResize){
            
            this.game.scale.resize(this.element.clientWidth,this.element.clientHeight);
        }
    }
}

export interface Vector2{
    x:number;
    y:number;
}