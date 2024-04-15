import {itemList} from './modules/func.js'



class Room {
    constructor (house,name,imagePath){
        this.name = name
        this.imagePath = imagePath
        this.house = house
        this.room = []
    }
}


class RoomList {
    constructor (name) {
        this.houseName = name;
        this.houseRooms = [];
    }
    createRoom(name, imagePath){
        const room = new Room(this.houseName,name, imagePath);
        this.houseRooms.push(room);
        return this.houseRooms;
    }
}

class Player {
    constructor (name) {
        this.name = name
        this.timeTofind = [] // Array of all check breakes
        this.score = []
        this.timeToFinish = 0
        this.totalNumberOfItems = 0
        this.totalScore = 0
        this.bonusItem = []
    }
    allfindItems() {
       return this.totalNumberOfItems++;
    }
    timeWhenFindItem(time){
      return this.timeTofind.push(time);
    }
    finishtime(time){
        this.timeToFinish = time;
        return this.timeToFinish;
    }
    countScore(scoreScheme){
        let num = 0;
        if (this.timeTofind.length === 1) { num = 300 - this.timeTofind.at(-1)}
        else  {num = this.timeTofind.at(-1) - this.timeTofind.at(-2);}
        if (num <= 2) {
            this.score.push(scoreScheme[0]);
        } else if (num > 2 && num <= 3) {
            this.score.push(scoreScheme[1]);
        } else if (num > 3 && num <= 5) {
            this.score.push(scoreScheme[2]);
        } else if (num > 5 && num <= 10) {
            this.score.push(scoreScheme[3]);
        } else {
            this.score.push(scoreScheme[4]); 
        }
    }
    finalScore(){
        let num = this.score.reduce((arr, currentValue) => arr + currentValue);
        return num;
    }
    finalTime(totalTime){
        return time = totalTime - timeTofind.at[-1];
    }
    restart(){
        this.timeTofind = [] // Array of all check breakes
        this.score = []
        this.timeToFinish = 0
        this.totalNumberOfItems = 0
        this.totalScore = 0
        this.bonusItem = []
    }
}

 const scoreScheme = [20,10,5,3,1] // Earning score depent on how fast player find an item.





const house = new RoomList("louie");
const houseLouie = house.createRoom("louieRoom","./img/room1/louieroom.svg");



houseLouie[0].room.push(itemList);
console.log(houseLouie[0])





// GAME
function generateRound (houseLouie, round){

    document.getElementById('gameFiledIMG').src = houseLouie[round].imagePath;
    const itemsArr = houseLouie[round].room[0].roomItems;

    for (let i in itemsArr) {
        let itemImg = document.createElement('img');
        itemImg.setAttribute('id', itemsArr[i].name);
        itemImg.classList.add("overlay-image");
        itemImg.src = itemsArr[i].imagePath;
        itemImg.style.left = itemsArr[i].leftPX+'px';
        itemImg.style.top = itemsArr[i].topPX+'px';
        gamePicture.appendChild(itemImg);
    }

    const introHeader = document.getElementById("intro").firstElementChild;
    introHeader.textContent = "Round " +(round+1);
  
    const introText = document.getElementById("intro").lastElementChild;
    introText.textContent = "Your quest? Find the lost items before the clock ticks down! But hurry, the attic gremlins love a slowpoke."

    const headerForFider = document.createElement('h3');
    headerForFider.textContent = "Find an item:"
    headerForFider.setAttribute('id','FindAnItem')
    playerField.appendChild(headerForFider);
 
    const wordDiv = document.createElement('div');
    wordDiv.setAttribute("id", "wordItem");
    wordDiv.classList.add("finditem");
    playerField.appendChild(wordDiv);
    
    const timer = document.createElement('div')
    timer.setAttribute('id', 'timerDisplay');
    timer.innerText = "Time Left: 05:00";
    playerField.appendChild(timer);
    startCountdown();

    newWord (houseLouie, round, 0);
    
}

function newWord (houseLouie, round, index) {
 const itemsArray = houseLouie[round].room[round].roomItems;
 const word = document.getElementById("wordItem");
 word.innerText = itemsArray[index].name

}

function countedScore(player, itemsArray, round, index, time) {
    
    itemsArray[index].itemfound(); 
    player.allfindItems();
    player.timeWhenFindItem(time);
    player.countScore(scoreScheme); 
}

let check = true;
function checkFinishRound(player, houseLouie, round, index){
 
    let time = getCurrentTimeLeft();
    const itemsArray = houseLouie[round].room[round].roomItems;
    countedScore(player, itemsArray, round, index, time);
    let result = itemsArray.filter((arr) => arr.found === false);
    debugger
    if (result.length !== 0) {
    return check = true}
    else {return check = false};
}



function removeBlocks(){
   
    
    document.getElementById("wordItem").remove();

    const introHeader = document.getElementById("intro").firstElementChild;
    introHeader.textContent = "Game over";
  
    const introText = document.getElementById("intro").lastElementChild;
    introText.style.visibility = "hidden";

    document.getElementById('FindAnItem').remove();

    const elements = Array.from(document.getElementsByClassName("overlay-image"));
    elements.forEach(function(element) {
    element.remove();});
    document.getElementById("timerDisplay").remove();
    return;
}

// Interface 

function timeIsOver () {
    document.getElementById('gameFiledIMG').src = "./img/lost.svg"

    const winnerDiv = document.createElement('div');
    winnerDiv.setAttribute('id','winner');
    winnerDiv.classList.add("winer");
    document.getElementById('gameFiledIMG').style.position = "relative";

    const headerForFider = document.createElement('h2');
    headerForFider.textContent = "You've lost!"
    winnerDiv.appendChild(headerForFider);

    const lostHeader = document.createElement('h3');
    lostHeader.textContent = "Time is over!"
    winnerDiv.appendChild(lostHeader);

    const itemsP = document.createElement('p');
    itemsP.textContent = "You find: " + player.totalNumberOfItems
    winnerDiv.appendChild(itemsP);     

    document.getElementById('dynamicIMG').appendChild(winnerDiv);
    player.totalScore = 0;

   
    const BtnDiv = document.createElement('div');
    BtnDiv.setAttribute('id','btnDiv');
  
    restart("Restart Game",BtnDiv);
    restart("New Game", BtnDiv);

    playerField.appendChild(BtnDiv);

    indexRestart(index);
    removeBlocks();
    totalTime = 300;
    index=0;
    return player.restart()
}

function restart(buttonName, BtnDiv) { 

let startButton = document.createElement('button');
startButton.setAttribute("id", "startGame");
startButton.innerText = buttonName;
BtnDiv.appendChild(startButton);

return true;

}

function indexRestart(index){
    return index=0;
}



//TIMER

let totalTime = 300; // 5 minutes in seconds
const allTime = totalTime;
let intervalId = null;


function startCountdown() {
    intervalId = setInterval(() => {
        totalTime--;
        updateTimerDisplay();
        
        if (totalTime <= 0) {
            clearInterval(intervalId);
            timeIsOver();
        }
    }, 1000); // Update every second
    return totalTime;
}

function updateTimerDisplay() {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    
    // Ensuring double digits for minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    document.getElementById('timerDisplay').innerText = `Time Left: ${minutes}:${seconds}`;
}

function getCurrentTimeLeft() {
    return totalTime;
}


// Pop up
function showPopup() {
    document.getElementById('customPopup').style.display = 'block';
}

// Function to close the pop-up
function closePopup() {
    document.getElementById('customPopup').style.display = 'none';
}

// 
let round = 0;  
let playerName ="";
let index=0;


// main 
const playerField = document.getElementById("playerField");
const gameFiledIMG = document.getElementById("gameFiledIMG");
const gamePicture = document.getElementById("dynamicIMG")



playerField.addEventListener("click", function(event){
    event.preventDefault();
    const clickElement = event.target; 

    if (clickElement.nodeName === "BUTTON") {
   
        if (clickElement.id === "startGame") {

            if (document.getElementById("btnDiv") !== null) {
                document.getElementById("btnDiv").remove();
                document.getElementById("winner").remove();
            }
            else{
                document.getElementById("welcomePlayer").remove();
                document.getElementById("startGame").remove();
            }

            generateRound(houseLouie, round);
    }
}
})

playerField.addEventListener("click", function(event){
    event.preventDefault();
    const clickElement = event.target; 
    console.log(clickElement);
    if (clickElement.nodeName === "BUTTON") {
        if (clickElement.id === "soloGame") {
        let divName = document.createElement("div");
        divName.classList.add("addname")
        
        let inputName = document.createElement('input');
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "name");
        inputName.placeholder="Your name"

        let subButton = document.createElement('button')
        subButton.innerText = "Submit";
        subButton.setAttribute("id", "submit")

        divName.appendChild(inputName);
        divName.appendChild(subButton);
        
       
        playerField.appendChild(divName);

        document.getElementById("soloGame").remove();
    }
}
})

playerField.addEventListener("click", function(event){
    event.preventDefault();
    const clickElement = event.target; 

    if (clickElement.nodeName === "BUTTON") {
      
        if (clickElement.id === "submit") {

            let playerName = document.getElementById("name").value;
            let welcomeText = document.createElement('p')
            welcomeText.setAttribute("id", "welcomePlayer")
            welcomeText.textContent = `Hi, ${playerName}! Let's fix this mess!`;

            let startButton = document.createElement('button');
            startButton.setAttribute("id", "startGame");
            startButton.innerText = "Start Game";

            playerField.appendChild(welcomeText);
            playerField.appendChild(startButton);

            const elements = Array.from(document.getElementsByClassName("addname"));
            elements.forEach(function(element) {
            element.remove();
         });
        clickElement.remove();
        return playerName;
    }
}
})

let player = new Player(playerName);


gameField.addEventListener("click", function(event){
    event.preventDefault();
    const clickElement = event.target; 
    if (clickElement.nodeName === "IMG") {
        let wordFind = document.getElementById("wordItem");
        if (wordFind.innerText === clickElement.id) {
            let check = checkFinishRound(player, houseLouie, round, index);
            let finalTime = getCurrentTimeLeft();
            console.log(finalTime)
             if (check === false) {

                document.getElementById('gameFiledIMG').src = "./img/winner.svg"
    
                const winnerDiv = document.createElement('div');
                winnerDiv.setAttribute('id','winner');
                winnerDiv.classList.add("winer");
                document.getElementById('gameFiledIMG').style.position = "relative";
        

                const headerForFider = document.createElement('h2');
                headerForFider.textContent = "You win!"
                winnerDiv.appendChild(headerForFider);

                const scrore = document.createElement('h3');
                scrore.textContent = "Your score: " + player.finalScore()
                winnerDiv.appendChild(scrore);  
                
                const itemsP = document.createElement('p');
                itemsP.textContent = "You find: " + player.totalNumberOfItems
                winnerDiv.appendChild(itemsP);     
                
                const totalTimeP = document.createElement('p');
                let time = allTime - finalTime;
                console.log(time)
                console.log(allTime)

                let minutes = Math.floor(time / 60);
                let seconds = time % 60;
                
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;

                totalTimeP.innerText = `Your time: ${minutes}:${seconds}`;
                winnerDiv.appendChild(totalTimeP);      

                document.getElementById('dynamicIMG').appendChild(winnerDiv);

                removeBlocks();

                const BtnDiv = document.createElement('div');
                BtnDiv.setAttribute('id','btnDiv');
              
                restart("Restart Game",BtnDiv);
                restart("New Game", BtnDiv);

                playerField.appendChild(BtnDiv);
                const itemsArray = houseLouie[round].room[round].roomItems;
                itemsArray.forEach((element) => (element.itemRestart()))
                
                index = 0;
                totalTime = 300;
                return player.restart()
                }
            else  {
   
                index++;
                newWord (houseLouie, round, index);
                showPopup();
                setTimeout(closePopup, 1000); 
                return index }
        }
    }
})

