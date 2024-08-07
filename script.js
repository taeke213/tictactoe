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
let plr1div = document.getElementById("player1")
let plr2div = document.getElementById("player2")
let form = document.querySelector(".form")
let newgamebut = document.getElementById("newgame")
let showwin = document.getElementById("showwin")
newgamebut.addEventListener(("click"), () => startGame())
let name1 
let name2
let game
let gameobj
let o = "x"

submitbut.addEventListener(("click"), () => startGame())

function startGame(){
    while(container.firstChild){
        container.firstChild.remove()
    }
    winner = false
    container.style.backgroundColor = "transparent"
    fingamediv.style.display = "none"
    form.style.display = "block"
    plr1div.textContent = ""
    plr2div.textContent = ""
    let name1 = document.getElementById("name1").value
    let name2 = document.getElementById("name2").value
    if(name1 != "" && name2 != ""){
        createGrid()
        game = makegame(name1, name2)
        gameobj = game[2]
        form.style.display = "none"
        plr1div.textContent = `${name1}: x`
        plr2div.textContent = `${name2}: o`
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
        block.addEventListener(("mouseup"), alertWinner) 
        let container = document.getElementById("container")
        container.appendChild(block)        
        fingamediv.style.display = "block"
        newgamebut.style.display = "none"
        showwin.textContent = `player's turn: ${o}`
        
    }
    container.style.backgroundColor = "black"
}
let count = 0
function claimBlock(e){
    i = e.target.id
    if(gameobj[i] === "" && winner == false){
        fingamediv.style.display = "block"
        o = getPlayer()
        gameobj[i] = o
        if(o === "x"){
            showwin.textContent = "player's turn: o"
        }
        if(o === "o"){
            showwin.textContent = "player's turn: x"
        }
        e.target.innerHTML = o
        console.log(game[2])
    }
    if(!winner){
        getWinner()
    }
}

function alertWinner(){
    if(winner){
        form.style.display = "none"
        fingamediv.style.display = "inline"
        newgamebut.style.display = "inline"
        showwin.innerHTML = `${winningplayer} is the winner`
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
    //check for tie
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
