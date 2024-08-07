function makegame(playername1, playername2){
    var game = [
        playername1,
        playername2,
        {
        0 : "",
        1 : "",
        2 : "",
        3 : "",
        4 : "",
        5 : "",
        6 : "",
        7 : "",
        8 : "",
        }
    ]
    return game
}
let winner = false
let winningplayer
let submitbut = document.querySelector("#sub")
let fingamediv = document.querySelector("#gamefinish")
let form = document.querySelector(".form")
let newgamebut = document.getElementById("newgame")
newgamebut.addEventListener(("click"), () => startGame())
let name1 
let name2
let game
let gameobj
let o

submitbut.addEventListener(("click"), () => startGame())

function startGame(){
    while(container.firstChild){
        container.firstChild.remove()
    }
    winner = false
    fingamediv.style.display = "none"
    form.style.display = "block"
    let name1 = document.getElementById("name1").value
    let name2 = document.getElementById("name2").value
    if(name1 != "" && name2 != ""){
        createGrid()
        game = makegame(name1, name2)
        gameobj = game[2]
        form.style.display = "none"
    }
    document.querySelector("#name1").value = ""
    document.getElementById("name2").value = ""
}
function createGrid(){
    for(let i = 0;i < 9; i++){
        let block = document.createElement("div")
        block.id = i
        block.classList.add("block")
        block.addEventListener(("mousedown"), claimBlock)
        block.addEventListener(("click"), changeUI)
        block.addEventListener(("mouseup"), alertWinner) 
        let container = document.getElementById("container")
        container.appendChild(block)
    }
}
let count = 0
function claimBlock(e){
    i = e.target.id
    if(gameobj[i] == ""){
        o = getPlayer()
        gameobj[i] = o
        console.log(game[2])
    }
    if(!winner){
        getWinner()
    }
}
function changeUI(e){
    e.target.innerHTML = o
}

function alertWinner(){
    if(winner){
        form.style.display = "none"
        fingamediv.style.display = "inline"
        let showwin = document.getElementById("showwin")
        showwin.innerHTML = winningplayer
    }
    
}
function getPlayer(){
    if(count % 2 == 0){ 
        count += 1  
        return "x"

    }else{
        count += 1
        return "o"   
    }
}

function getWinner(){
    if(gameobj[0] !== "" && gameobj[1] !== "" && gameobj[2] !== "" && gameobj[3] !== "" && gameobj[4] !== "" && gameobj[5] !== "" && gameobj[6] !== "" && gameobj[7] !== "" && gameobj[8] !== ""){
        winningplayer = "it's a tie"
        winner = true
    }

    //x as winner
    if(gameobj[1] === "x" && gameobj[0] === "x" && gameobj[2] === "x"){
        winningplayer = game[0]
        winner = true
    }
    if(gameobj[3] === "x" && gameobj[4] === "x" && gameobj[5] === "x"){
        winningplayer = game[0]
        winner = true
    }
    if(gameobj[6] === "x" && gameobj[7] === "x" && gameobj[8] === "x"){
        winningplayer = game[0]
        winner = true
    }
    if(gameobj[0] === "x" && gameobj[3] === "x" && gameobj[6] === "x"){
        winningplayer = game[0]
        winner = true
    }
    if(gameobj[1] === "x" && gameobj[4] === "x" && gameobj[7] === "x"){
        winningplayer = game[0]
        winner = true
    }
    if(gameobj[2] === "x" && gameobj[5] === "x" && gameobj[8] === "x"){
        winningplayer = game[0]
        winner = true
    }
    if(gameobj[0] === "x" && gameobj[4] === "x" && gameobj[8] === "x"){
        winningplayer = game[0]
        winner = true
    }
    if(gameobj[2] === "x" && gameobj[4] === "x" && gameobj[6] === "x"){
        winningplayer = game[0]
        winner = true
    }

    // o is the winner
    if(gameobj[1] === "o" && gameobj[0] === "o" && gameobj[2] === "o"){
        winningplayer = game[1]
        winner = true
    }
    if(gameobj[3] === "o" && gameobj[4] === "o" && gameobj[5] === "o"){
        winningplayer = game[1]
        winner = true
    }
    if(gameobj[6] === "o" && gameobj[7] === "o" && gameobj[8] === "o"){
        winningplayer = game[1]
        winner = true
    }
    if(gameobj[0] === "o" && gameobj[3] === "o" && gameobj[6] === "o"){
        winningplayer = game[1]
        winner = true
    }
    if(gameobj[1] === "o" && gameobj[4] === "o" && gameobj[7] === "o"){
        winningplayer = game[1]
        winner = true
    }
    if(gameobj[2] === "o" && gameobj[5] === "o" && gameobj[8] === "o"){
        winningplayer = game[1]
        winner = true
    }
    if(gameobj[0] === "o" && gameobj[4] === "o" && gameobj[8] === "o"){
        winningplayer = game[1]
        winner = true
    }
    if(gameobj[2] === "o" && gameobj[4] === "o" && gameobj[6] === "o"){
        winningplayer = game[1]
        winner = true
    }
}
