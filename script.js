const result = document.querySelector(".result")
const choiceMachine = document.querySelector(".choice-machine")
const myScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humamChoise) => {
    playTheGame(humamChoise, playMachine())
    winTheGame()

}
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
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
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        result.innerHTML = "&#x2705 Você GANHOU!  &#x2705"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "&#x274C Você perdeu! &#x274C"
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
