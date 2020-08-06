const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    
    @property(cc.Label)
    playerName: cc.Label = null;

    @property(cc.Label)
    playerNameSc: cc.Label = null;

    @property(cc.Node)
    Score: cc.Node;

    @property(cc.Label)
    playerScore: cc.Label = null;

    @property(cc.Label)
    computerScore: cc.Label = null;

    @property(cc.Label)
    resual: cc.Label = null;

    @property(cc.Node)
    AlertResult: cc.Node;

    @property(cc.Label)
    confirmtxt: cc.Label = null;

    @property(cc.Node)
    confirm: cc.Node = null;

    @property(cc.Node)
    hammerComputer: cc.Node = null;

    @property(cc.Node)
    scissorsComputer: cc.Node = null;

    @property(cc.Node)
    paperComputer: cc.Node = null;

    @property(cc.Label)
    numberMatch: cc.Label = null;

    playerSelect = 0
    computerRandom = 0
    scorePlayer = 0
    scroreComputer = 0
    runTime = 0


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.scorePlayer = 0;
        this.scroreComputer = 0;
        this.runTime = 0;
        this.playerName.string = localStorage.getItem('playerName')
        this.playerNameSc.string = localStorage.getItem('playerName')
    }

    start () {
    
    }

    clickVs(e, data){
        this.confirm.active = true
        if(data == 1){
            this.confirmtxt.string = 'Confirm Select' + ' ROCK '
        }else if(data == 2){
            this.confirmtxt.string = 'Confirm Select' + ' SCISSORS ' 
        }else{
            this.confirmtxt.string = 'Confirm Select' + ' PAPER '
        }
        this.playerSelect = data
    }

    confirmData(e){
        this.confirm.active = false
        this.checkVs()
    }

    cancelData(e){
        this.confirm.active = false
        this.playerSelect = 0
    }

    checkVs(){
        this.computerSelected()

        if(this.playerSelect == 1 && this.computerRandom == 1){
            this.AlertResult.active = true
            this.resual.string = 'DRAW'
        }else if(this.playerSelect == 1 && this.computerRandom == 2){
            this.AlertResult.active = true
            this.resual.string = 'WIN !!!'
            this.scorePlayer++;
            localStorage.setItem('scorePlayer', this.scorePlayer.toString())
        }else if(this.playerSelect == 1 && this.computerRandom == 3){
            this.AlertResult.active = true
            this.resual.string = 'LOSE :('
            this.scroreComputer++;
            localStorage.setItem('scroreComputer', this.scroreComputer.toString())
        }
        else if(this.playerSelect == 2 && this.computerRandom == 2){
            this.AlertResult.active = true
            this.resual.string = 'DRAW'
        }else if(this.playerSelect == 2 && this.computerRandom == 3){
            this.AlertResult.active = true
            this.resual.string = 'WIN !!!'
            this.scorePlayer++;
            localStorage.setItem('scorePlayer', this.scorePlayer.toString())
        }else if(this.playerSelect == 2 && this.computerRandom == 1){
            this.AlertResult.active = true
            this.resual.string = 'LOSE :('
            this.scroreComputer++;
            localStorage.setItem('scroreComputer', this.scroreComputer.toString())
        }else if(this.playerSelect == 3 && this.computerRandom == 3){
            this.AlertResult.active = true
            this.resual.string = 'DRAW'
        }else if(this.playerSelect == 3 && this.computerRandom == 1){
            this.AlertResult.active = true
            this.resual.string = 'WIN !!!'
            this.scorePlayer++;
            localStorage.setItem('scorePlayer', this.scorePlayer.toString())
        }else if(this.playerSelect == 3 && this.computerRandom == 2){
            this.AlertResult.active = true
            this.resual.string = 'LOSE :('
            this.scroreComputer++;
            localStorage.setItem('scroreComputer', this.scroreComputer.toString())
        }

        this.recordHistory()

        this.playerScore.string = this.scorePlayer.toString()
        this.computerScore.string = this.scroreComputer.toString()
        this.runTime++

        this.numberMatch.string = this.runTime.toString()

        if(this.runTime == 5){
            setTimeout(()=>{
                cc.director.loadScene("result")
            }, 1000);
        }
        
        
    }

    recordHistory(){
        if(this.runTime == 0){
            localStorage.setItem('playerHistory1', this.playerSelect.toString())
            localStorage.setItem('computerHistory1', this.computerRandom.toString())
        }else if(this.runTime == 1){
            localStorage.setItem('playerHistory2', this.playerSelect.toString())
            localStorage.setItem('computerHistory2', this.computerRandom.toString())
        }else if(this.runTime == 2){
            localStorage.setItem('playerHistory3', this.playerSelect.toString())
            localStorage.setItem('computerHistory3', this.computerRandom.toString())
        }else if(this.runTime == 3){
            localStorage.setItem('playerHistory4', this.playerSelect.toString())
            localStorage.setItem('computerHistory4', this.computerRandom.toString())
        }else{
            localStorage.setItem('playerHistory5', this.playerSelect.toString())
            localStorage.setItem('computerHistory5', this.computerRandom.toString())
        }
    }

    computerSelected(){
        this.computerRandom = Math.floor(Math.random() * 3) + 1
        if(this.computerRandom == 1){
            this.hammerComputer.active = true
            this.scissorsComputer.active = false
            this.paperComputer.active = false
        }else if(this.computerRandom == 2){
            this.hammerComputer.active = false
            this.scissorsComputer.active = true
            this.paperComputer.active = false
        }else{
            this.hammerComputer.active = false
            this.scissorsComputer.active = false
            this.paperComputer.active = true
        }
    }

    OKAlertResult(){
        this.AlertResult.active = false
    }

    
    }



    // update (dt) {}

