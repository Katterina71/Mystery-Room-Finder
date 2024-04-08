class Room {
    constructor (house,name,imagePath){
        this.name = name
        this.imagePath = imagePath
        this.house = house;
    }
}


class Item {
    constructor (name,imagePath,x,y){
        this.name = name
        this.imagePath = imagePath
        this.found = false
        this.lostColor = "light blue"
        this.findColor = "green"
        this.coordinateX = x;
        this.coordinateY = y;
    }
    soundOn(sound) {
        return true;
    }
    animationOn(animation) {
        return true;
    }
}

class BonusItem extends Item {
    constructor(name) {
        bonus = true
        score = 30
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
    createItemList(name){
        const room = new Item(name,imagePath,x,y);
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
const louieRoom = house.createRoom("louieRoom","../img/room1/louieroom.svg");
console.log(house);
console.log(louieRoom);