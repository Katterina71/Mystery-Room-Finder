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
itemsLouieRoom.createItemList("lamp","./img/room1/items/lamp.svg",411,-453)
itemsLouieRoom.createItemList("box","./img/room1/items/box.svg",345,-625)
itemsLouieRoom.createItemList("chair","./img/room1/items/chair.svg",172,-292)
itemsLouieRoom.createItemList("frame","./img/room1/items/frame.svg",390,-530)
itemsLouieRoom.createItemList("pencil","./img/room1/items/pencil.svg",122,-292)
itemsLouieRoom.createItemList("pillow","./img/room1/items/pillow.svg",-215,-349)
itemsLouieRoom.createItemList("plant","./img/room1/items/plant.svg",-473,-370)
itemsLouieRoom.createItemList("sofa","./img/room1/items/sofa.svg",-15,-285)
itemsLouieRoom.createItemList("nightstand","./img/room1/items/nightstand.svg",630,-442)
itemsLouieRoom.createItemList("backpack","./img/room1/items/backpack.svg",412,-465)
itemsLouieRoom.createItemList("scarf","./img/room1/items/scarf.svg",270,-485)
itemsLouieRoom.createItemList("bedsidelamp","./img/room1/items//bedsidelamp.svg",445,-574)
itemsLouieRoom.createItemList("book","./img/room1/items/book.svg",330,-574)
itemsLouieRoom.createItemList("umbrella","./img/room1/items/umbrella.svg",215,-424)
const spider = new BonusItem ("spider","./img/room1/items/spider.svg",-80,-900)






houseLouie[0].room.push(itemsLouieRoom);
console.log(houseLouie[0].imagePath);
console.log(houseLouie[0].room);
console.log(houseLouie[0].room[0].roomItems); // array of items





// main 
const startGame = document.getElementById("playerField");
const gameFiledIMG = document.getElementById("gameFiledIMG");
const gamePicture = document.getElementById("dynamicIMG")
console.log(gamePicture)

let itemsArr =[];

startGame.addEventListener("click", function(event){
    event.preventDefault();
    const clickElement = event.target; 
    if (clickElement.nodeName = "BUTTON") {
        document.getElementById('gameFiledIMG').src = houseLouie[0].imagePath;
        console.log(houseLouie[0].imagePath);
        const itemsArr = houseLouie[0].room[0].roomItems;
        for (let i in itemsArr) {
            // debugger;
            let itemImg = document.createElement('img');
            console.log(itemsArr[i].name);
            console.log(itemsArr[i].imagePath);
            itemImg.setAttribute('id', itemsArr[i].name);
            itemImg.classList.add("overlay-image");
            itemImg.src = itemsArr[i].imagePath;
            itemImg.style.left = itemsArr[i].leftPX+'px';
            itemImg.style.top = itemsArr[i].topPX+'px';
            gamePicture.appendChild(itemImg);
        }
    }
})



