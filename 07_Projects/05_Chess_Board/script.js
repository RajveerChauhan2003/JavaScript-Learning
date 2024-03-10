const board = document.createElement('div')
board.style.width="100vw"
board.style.display="grid"
board.style.gridTemplateColumns="auto auto auto auto auto auto auto auto auto auto"
board.style.gridTemplateRows="auto auto auto auto auto auto auto auto auto auto"

document.body.appendChild(board)

let num = 1
let num1 =1
for ( let i=1 ; i<=10 ; i++){
    for (let j = 1; j <= 10; j++) {
        const div = document.createElement('div')
        div.style.textAlign="center"
        div.style.paddingTop="15%"
        div.style.height="70px"
        div.style.border="1px solid black"
        
        if(i%2!=0){
            if(j%2==0){
                div.style.backgroundColor="#212121"
                div.style.color="white"
                div.innerText=`${num++}`
            }
            else{
                div.style.backgroundColor="white"
                div.style.color="black"
                div.innerText=`${num++}`
            }
        }
        else{
            if(j%2!=0){
                div.style.backgroundColor="#212121"
                div.style.color="white"
                div.innerText=`${num++}`
            }
            else{
                div.style.backgroundColor="white"
                div.style.color="black"
                div.innerText=`${num++}`
            }
        }
        
        const player = document.createElement('div')
        player.setAttribute('id',`${num1++}`)
        player.style.height="20px"
        player.style.width="20px"
        player.style.backgroundColor="red"
        player.style.position="absolute"
        player.style.visibility="hidden"
        div.appendChild(player)
        board.appendChild(div) 
    }
}

const rollButton = document.createElement('button')
const resetButton = document.createElement('button')

rollButton.style.height="30px"
rollButton.style.width="100px"
rollButton.style.backgroundColor="#212121"
rollButton.style.marginTop="10px"
rollButton.style.marginLeft="10px"
rollButton.style.color="white"
rollButton.innerText="Roll"
rollButton.style.borderRadius="5px"
rollButton.style.padding="5px"
rollButton.style.textAlign="center"
rollButton.style.display="inline-block"

resetButton.style.height="30px"
resetButton.style.width="100px"
resetButton.style.backgroundColor="#212121"
resetButton.style.marginTop="10px"
resetButton.style.marginLeft="10px"
resetButton.style.color="white"
resetButton.innerText="Reset"
resetButton.style.borderRadius="5px"
resetButton.style.padding="5px"
resetButton.style.textAlign="center"
resetButton.style.display="inline-block"

document.body.appendChild(rollButton)
document.body.appendChild(resetButton)

function rollDice(){
    return parseInt(Math.random()*6+1)
}

document.getElementById('1').style.visibility="visible"

let currentPosition=1

rollButton.addEventListener('click',(e)=>{
    const iterations = rollDice()
    if(iterations+currentPosition>=100){
        document.getElementById('100').style.visibility="visible"
        document.getElementById(`${currentPosition}`).style.visibility="hidden"
        rollButton.setAttribute('disabled','')
    }
    else{
        document.getElementById(`${currentPosition}`).style.visibility="hidden"
        document.getElementById(`${iterations+currentPosition}`).style.visibility="visible"
        currentPosition=iterations+currentPosition
    } 
})

resetButton.addEventListener('click',(e)=>{
    for(let i=2;i<=100;i++){
        document.getElementById(`${i}`).style.visibility="hidden"
    } 
    currentPosition=1
    document.getElementById('1').style.visibility="visible"
    rollButton.removeAttribute('disabled','')
})





