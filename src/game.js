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
itemsLouieRoom.createItemList("chair","./img/room1/items/chair.svg",320,-392)
itemsLouieRoom.createItemList("box","./img/room1/items/box.svg",413,-765)
itemsLouieRoom.createItemList("frame","./img/room1/items/frame.svg",660,-716)
itemsLouieRoom.createItemList("pencil","./img/room1/items/pencil.svg",472,-506)
itemsLouieRoom.createItemList("pillow","./img/room1/items/pillow.svg",166,-645)
itemsLouieRoom.createItemList("plant","./img/room1/items/plant.svg",0,-753)
itemsLouieRoom.createItemList("sofa","./img/room1/items/sofa.svg",480,-850)
itemsLouieRoom.createItemList("nightstand","./img/room1/items/nightstand.svg",630,-972)
itemsLouieRoom.createItemList("backpack","./img/room1/items/backpack.svg",538,-1173)
itemsLouieRoom.createItemList("scarf","./img/room1/items/scarf.svg",478,-1348)
itemsLouieRoom.createItemList("bedsidelamp","./img/room1/items//bedsidelamp.svg",678,-1565)
itemsLouieRoom.createItemList("book","./img/room1/items/book.svg",640,-1592)
itemsLouieRoom.createItemList("umbrella","./img/room1/items/umbrella.svg",635,1620)
const spider = new BonusItem ("spider","./img/room1/items/spider.svg",420,-2150)


houseLouie[0].room.push(itemsLouieRoom);

console.log(houseLouie[0].room);
console.log(houseLouie[0].room[0].roomItems); // array of items





// main 
const startGame = document.getElementById("playerField");
console.log(startGame)
const gameFiledIMG = document.getElementById("gameFiledIMG");
const gamePicture = document.getAnimations("dynamicIMG")
console.log(gameFiledIMG)

startGame.addEventListener("click", function(event){
    event.preventDefault();
    const clickElement = event.target; 
    if (clickElement.nodeName = "BUTTON") {
        document.getElementById('gameFiledIMG').src = louieRoom[0].imagePath;
        const itemsArr = houseLouie[0].room[0].roomItems;
        for (let i in length (itemsArr)) {
            let imgDiv = document.createElement('div');
            gamePicture.appendChild(imgDiv);
            let itemImg = document.createElement('img');


        }
    }
})



