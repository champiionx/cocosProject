const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    playerName: cc.Node;

    @property(cc.Node)
    Score: cc.Node;

    @property(cc.Node)
    playerNameSc :cc.Node;

    @property(cc.Node)
    checkname: cc.Node = null;

    

    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //this.playerName.string = ''
        localStorage.removeItem('playerName')
        localStorage.removeItem('scorePlayer')
        localStorage.removeItem('scroreComputer')
        localStorage.removeItem('playerHistory1')
        localStorage.removeItem('playerHistory2')
        localStorage.removeItem('playerHistory3')
        localStorage.removeItem('playerHistory4')
        localStorage.removeItem('playerHistory5')
        localStorage.removeItem('computerHistory1')
        localStorage.removeItem('computerHistory2')
        localStorage.removeItem('computerHistory3')
        localStorage.removeItem('computerHistory4')
        localStorage.removeItem('computerHistory5')
    }

    

    start () {

    }
    submitName(e, name){
        // localStorage.setItem("playerName", this.playerName.string)
        //cc.director.loadScene("validation")
        
        var playname = this.playerName
     .getChildByName("txtName")
     .getComponent(cc.Label).string
     console.log(playname)
     
 
     const checkChar = /^[A-Za-z0-9]+$/;
 
     if(playname.match(checkChar)){
         console.log("OK")
 
          localStorage.setItem("playerName", playname)
          cc.director.loadScene("validation")
     }
     else{
         console.log('name failed');
         this.checkname.active = true
     }
     }
 
     okcheckname(e){
         this.checkname.active = false
     }

    // update (dt) {}
}
