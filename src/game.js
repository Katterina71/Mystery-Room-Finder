class Room {
    constructor (house,name,imagePath){
        this.name = name
        this.imagePath = imagePath
        this.house = house
        this.room = []
    }
}


class Item {
    constructor (name,imagePath,leftPX,topPX){
        this.name = name
        this.imagePath = imagePath
        this.found = false
        this.leftPX = leftPX;
        this.topPX = topPX;
    }
    soundOn(sound) {
        return true;
    }
    animationOn(animation) {
        return true;
    }
}

class BonusItem extends Item {
    constructor () {
        super();
        this.bonus = true
        this.score = 30
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

class ItemList {
    constructor (name) {
        this.roomName = name;
        this.roomItems = [];
    }
    createItemList(name,imagePath,leftPX,topPX){
        const room = new Item(name,imagePath,leftPX,topPX);
        this.roomItems.push(room);
        return this.roomItems;
    }
}

class Player {
    constructor (name) {
        this.name = name
        this.timeTofind = [] // Array of all check breakes
        this.findItems = [] // The name of itemes - length how many items
        this.score = 0
        this.timeToFinish = 0
        this.totalNumberOfItems = 0
        this.totalScore = 0
        this.bonusItem = []
    }
}

 const scoreScheme = // Earning score depent on how fast player find an item.
 {      time1sec: 20,
        time2sec: 10,
        time5sec: 5,
        time10sec: 3,
        timeOver: 1  } 


const house = new RoomList("louie");
const houseLouie = house.createRoom("louieRoom","./img/room1/louieroom.svg");


const itemsLouieRoom = new ItemList("LouieItems");
itemsLouieRoom.createItemList("lamp","./img/room1/items/lamp.svg",412,-455)
itemsLouieRoom.createItemList("box","./img/room1/items/box.svg",350,-625)
itemsLouieRoom.createItemList("chair","./img/room1/items/chair.svg",178,-294)
itemsLouieRoom.createItemList("frame","./img/room1/items/frame.svg",410,-530)
itemsLouieRoom.createItemList("pencil","./img/room1/items/pencil.svg",130,-292)
itemsLouieRoom.createItemList("pillow","./img/room1/items/pillow.svg",-205,-349)
itemsLouieRoom.createItemList("plant","./img/room1/items/plant.svg",-450,-372)
itemsLouieRoom.createItemList("sofa","./img/room1/items/sofa.svg",10,-285)
itemsLouieRoom.createItemList("nightstand","./img/room1/items/nightstand.svg",630,-442)
itemsLouieRoom.createItemList("backpack","./img/room1/items/backpack.svg",412,-465)
itemsLouieRoom.createItemList("scarf","./img/room1/items/scarf.svg",280,-488)
itemsLouieRoom.createItemList("bedsidelamp","./img/room1/items//bedsidelamp.svg",460,-574)
itemsLouieRoom.createItemList("book","./img/room1/items/book.svg",345,-574)
itemsLouieRoom.createItemList("umbrella","./img/room1/items/umbrella.svg",215,-424)
const spider = new BonusItem ("spider","./img/room1/items/spider.svg",-80,-900)





houseLouie[0].room.push(itemsLouieRoom);
console.log(houseLouie[0].imagePath);
console.log(houseLouie[0].room);
console.log(houseLouie[0].room[0].roomItems); // array of items

//TIMER

let totalTime = 300; // 5 minutes in seconds
let intervalId = null;

function startCountdown() {
    intervalId = setInterval(() => {
        totalTime--;
        updateTimerDisplay();
        
        if (totalTime <= 0) {
            clearInterval(intervalId);
            console.log("Countdown finished!"); // Perform an action when the countdown ends
        }
    }, 1000); // Update every second
}

function updateTimerDisplay() {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    
    // Ensuring double digits for minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    document.getElementById('timerDisplay').innerText = `Time Left: ${minutes}:${seconds}`;
}



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


// main 
const playerField = document.getElementById("playerField");
const gameFiledIMG = document.getElementById("gameFiledIMG");
const gamePicture = document.getElementById("dynamicIMG")



playerField.addEventListener("click", function(event){
    event.preventDefault();
    const clickElement = event.target; 

    if (clickElement.nodeName = "BUTTON") {

        if (clickElement.id === "startGame") {

        generateRound(houseLouie, round);
        document.getElementById("welcomePlayer").remove();
        document.getElementById("startGame").remove();
    }
}
})

playerField.addEventListener("click", function(event){
    event.preventDefault();
    const clickElement = event.target; 

    if (clickElement.nodeName = "BUTTON") {

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

    if (clickElement.nodeName = "BUTTON") {
      
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
    }
}
})

let index=0;
gameField.addEventListener("click", function(event){
    event.preventDefault();
    const clickElement = event.target; 

    if (clickElement.nodeName = "IMG") {
        debugger;
        let wordFind = document.getElementById("wordItem");
        if (wordFind.innerText === clickElement.id) {
            index++;
            newWord (houseLouie, round, index);
            showPopup();
            setTimeout(closePopup, 2500);
            return index
        }
    }
})

console.log(index)