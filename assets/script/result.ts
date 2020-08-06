// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    playerName: cc.Label = null;


    @property(cc.Node)
    p1: cc.Node = null;
    @property(cc.Node)
    p2: cc.Node = null;
    @property(cc.Node)
    p3: cc.Node = null;
    @property(cc.Node)
    p4: cc.Node = null;
    @property(cc.Node)
    p5: cc.Node = null;
    @property(cc.Label)
    p6: cc.Label;

    @property(cc.Node)
    c1: cc.Node = null;
    @property(cc.Node)
    c2: cc.Node = null;
    @property(cc.Node)
    c3: cc.Node = null;
    @property(cc.Node)
    c4: cc.Node = null;
    @property(cc.Node)
    c5: cc.Node = null;
    @property(cc.Label)
    c6: cc.Label;



    @property(cc.Node)
    AlertResult: cc.Node;

    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.playerName.string = localStorage.getItem('playerName')
        this.getPlayerData()
        this.getComputerData()
        this.resultData()
    }

    start () {}

    getPlayerData(){
        var pp1 = localStorage.getItem('playerHistory1')
        var pp2 = localStorage.getItem('playerHistory2')
        var pp3 = localStorage.getItem('playerHistory3')
        var pp4 = localStorage.getItem('playerHistory4')
        var pp5 = localStorage.getItem('playerHistory5')

        if(parseInt(pp1) == 1){
            this.p1.getChildByName('Rock').active = true
        }else if(parseInt(pp1) == 2){
            this.p1.getChildByName('scissor').active = true
        }else if(parseInt(pp1) == 3){
            this.p1.getChildByName('Paper').active = true
        }

        if(parseInt(pp2) == 1){
            this.p2.getChildByName('Rock').active = true
        }else if(parseInt(pp2) == 2){
            this.p2.getChildByName('scissor').active = true
        }else if(parseInt(pp2) == 3){
            this.p2.getChildByName('Paper').active = true
        }

        if(parseInt(pp3) == 1){
            this.p3.getChildByName('Rock').active = true
        }else if(parseInt(pp3) == 2){
            this.p3.getChildByName('scissor').active = true
        }else if(parseInt(pp3) == 3){
            this.p3.getChildByName('Paper').active = true
        }

        if(parseInt(pp4) == 1){
            this.p4.getChildByName('Rock').active = true
        }else if(parseInt(pp4) == 2){
            this.p4.getChildByName('scissor').active = true
        }else if(parseInt(pp4) == 3){
            this.p4.getChildByName('Paper').active = true
        }

        if(parseInt(pp5) == 1){
            this.p5.getChildByName('Rock').active = true
        }else if(parseInt(pp5) == 2){
            this.p5.getChildByName('scissor').active = true
        }else if(parseInt(pp5) == 3){
            this.p5.getChildByName('Paper').active = true
        }
    }

    getComputerData(){
        var cc1 = localStorage.getItem('computerHistory1')
        var cc2 = localStorage.getItem('computerHistory2')
        var cc3 = localStorage.getItem('computerHistory3')
        var cc4 = localStorage.getItem('computerHistory4')
        var cc5 = localStorage.getItem('computerHistory5')

        if(parseInt(cc1) == 1){
            this.c1.getChildByName('Rock').active = true
        }else if(parseInt(cc1) == 2){
            this.c1.getChildByName('scissor').active = true
        }else if(parseInt(cc1) == 3){
            this.c1.getChildByName('Paper').active = true
        }

        if(parseInt(cc2) == 1){
            this.c2.getChildByName('Rock').active = true
        }else if(parseInt(cc2) == 2){
            this.c2.getChildByName('scissor').active = true
        }else if(parseInt(cc2) == 3){
            this.c2.getChildByName('Paper').active = true
        }

        if(parseInt(cc3) == 1){
            this.c3.getChildByName('Rock').active = true
        }else if(parseInt(cc3) == 2){
            this.c3.getChildByName('scissor').active = true
        }else if(parseInt(cc3) == 3){
            this.c3.getChildByName('Paper').active = true
        }

        if(parseInt(cc4) == 1){
            this.c4.getChildByName('Rock').active = true
        }else if(parseInt(cc4) == 2){
            this.c4.getChildByName('scissor').active = true
        }else if(parseInt(cc4) == 3){
            this.c4.getChildByName('Paper').active = true
        }

        if(parseInt(cc5) == 1){
            this.c5.getChildByName('Rock').active = true
        }else if(parseInt(cc5) == 2){
            this.c5.getChildByName('scissor').active = true
        }else if(parseInt(cc5) == 3){
            this.c5.getChildByName('Paper').active = true
        }
    }



    resultData(){
        var _scorePlayer = localStorage.getItem('scorePlayer')
        var _scoreComputer = localStorage.getItem('scroreComputer')
        this.p6.string = _scorePlayer.toString()
        this.c6.string = _scoreComputer.toString()
        console.log(_scorePlayer)
        console.log(_scoreComputer)

        // Player 3 wins
    if (parseInt(_scorePlayer) >= 3 ) {
        
        this.AlertResult.active = true
        this.AlertResult.getChildByName('youwin').active = true
        this.AlertResult.getChildByName('youlose').active = false
        this.AlertResult.getChildByName('draw').active = false
    }

    // AI 3 wins
    if (parseInt(_scoreComputer) >= 3 ) {
        
        this.AlertResult.active = true
        this.AlertResult.getChildByName('youwin').active = false
        this.AlertResult.getChildByName('youlose').active = true
        this.AlertResult.getChildByName('draw').active = false
       
      }


    if (parseInt(_scorePlayer) > parseInt(_scoreComputer)) {
        
        this.AlertResult.active = true
        this.AlertResult.getChildByName('youwin').active = true
        this.AlertResult.getChildByName('youlose').active = false
        this.AlertResult.getChildByName('draw').active = false
        console.log("PLAYER WIN");  
        } 
        else if (parseInt(_scorePlayer) < parseInt(_scoreComputer)) {
        
        this.AlertResult.active = true
        this.AlertResult.getChildByName('youwin').active = false
        this.AlertResult.getChildByName('youlose').active = true
        this.AlertResult.getChildByName('draw').active = false
        console.log("AI WIN")
        } 
        else if (parseInt(_scorePlayer) == parseInt(_scoreComputer)) {
        this.AlertResult.active = true
        this.AlertResult.getChildByName('youwin').active = false
        this.AlertResult.getChildByName('youlose').active = false
        this.AlertResult.getChildByName('draw').active = true
            
        console.log("DRAW")
        }
    }

    RestartGame() {
        cc.director.loadScene("playerName");
      }
    
      Exitgame() {
        window.close();
      }
    

    // update (dt) {}
}


