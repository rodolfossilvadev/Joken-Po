const result = document.querySelector(".result")
const choiceMachine = document.querySelector(".choice-machine")
const myScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTION = {
    ROCK:'rock',
    PAPER:'paper',
    SCISSORS:'scissors'
}

const playHuman = (humamChoise) => {
    playTheGame(humamChoise, playMachine())
    winTheGame()

}
const playMachine = () => {
    const choices = [GAME_OPTION.ROCK, GAME_OPTION.PAPER, GAME_OPTION.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    if(randomNumber === 0){
        choiceMachine.innerHTML = `IA escolheu:&#x1F44A`
    } else if 
    (randomNumber === 1){
        choiceMachine.innerHTML = `IA escolheu:&#x270B`
    } else if 
    (randomNumber === 2){
        choiceMachine.innerHTML = `IA escolheu:&#x270C`
    }
   
    
    return choices[randomNumber]
}
const playTheGame = (human, machine) => {
    console.log(' Humano: ' + human + ' Máquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "Empate!"
    } else if ((human === GAME_OPTION.PAPER && machine === GAME_OPTION.ROCK) ||
        (human === GAME_OPTION.ROCK && machine === GAME_OPTION.SCISSORS) ||
        (human === GAME_OPTION.SCISSORS && machine === GAME_OPTION.PAPER)) {
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você GANHOU!  &#x2705"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu! &#x274C"
    }

}

const winTheGame = (human, machine) => {

    if (humanScoreNumber === 5) {

        result.innerHTML = "CAMPEÃOOO! &#x1F3C6 &#x1F3C6 &#x1F3C6"
        myScore.innerHTML = 0
        machineScore.innerHTML = 0
    } else if (machineScoreNumber === 5) {
        result.innerHTML = "IA Venceu"
        myScore.innerHTML = 0
        machineScore.innerHTML = 0
    }

}
