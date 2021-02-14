/**
 * スクリーンに関係することを処理するクラス。
 * `this.scene.lunch("ScreenManager")`した後、`this.scene.get("ScreenManager")`してください。
 */
export class ScreenManager extends Phaser.Scene{

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

    update():void{
        if(this.autoResize){
            this.game.scale.resize(window.innerWidth,window.innerHeight);
        }
    }
}