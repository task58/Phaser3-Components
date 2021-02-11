import "phaser"

const defaultStyle:Phaser.Types.GameObjects.Text.TextStyle={
    fontSize : "30px",
    stroke : "#000000 1",
    backgroundColor : "#FFFFFF",
    color : "#000000"
};

/**
 * ボタンを作れるクラス。
 * @module
 * @class
 * @since 0.1.0
 * @extends Phaser.GameObjects.Text
 */
export class Button extends Phaser.GameObjects.Text{

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
    constructor(scene: Phaser.Scene, x: number, y: number, text: string | string[], style: Phaser.Types.GameObjects.Text.TextStyle = defaultStyle,extra=true){
        super(scene,x,y,text,style);
        this.setInteractive();
        if(extra){
            this.on("pointerover",()=>{
                this.scale *= 1.2;
            },this);
            this.on("pointerout",()=>{
                this.scale /= 1.2;
            },this);
        }
    }

    /**
     * ボタンを押したときの処理を設定する。
     * @param callback 
     * @param context 
     * @method
     */
    public setCallBack(callback:Function,context?:any){
        this.on("pointerdown",callback,context)
    }
}