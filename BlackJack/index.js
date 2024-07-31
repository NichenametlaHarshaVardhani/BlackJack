
function randomNum(){
    let randomnum= Math.floor(Math.random()*13)+1
    if(randomnum===1) return 11
    else if(randomnum>11) return 10
    else return randomnum
}
let msg=" "
let sum=0
let isAlive=true
let blackJack=false
let disEl=document.getElementById("dis-el")
let sumEl=document.getElementById("sum-el")
let cards=[]
let cardsEl=document.getElementById("cards-el")
let player={
    name:"Harsha",
    points: 199
}
let pointsEl=document.getElementById("points-el")
pointsEl.textContent=player.name+": $"+player.points

function startgame(){
    isAlive=true
    let firstcard=randomNum()
    let seccard=randomNum()
    cards=[firstcard,seccard]
    sum=firstcard+seccard
    rendergame()
}
function rendergame(){
    cardsEl.textContent="Cards :"
    for( let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i]+" "
    }
    
if(sum<21){
    msg=("Do you want to pick another card")}
  
else if(sum===21){
    msg=("You've won blackjack")
    blackJack=true
 }
else{
    msg=("you are out of game")
    isAlive=false
}
disEl.textContent=msg
sumEl.textContent="Sum is:  "+sum
}
function newcard(){
    if(isAlive===true && blackJack===false ){
    let thirdvar=randomNum()
    sum+=thirdvar
    cards.push(thirdvar)
    rendergame()
    }
}
