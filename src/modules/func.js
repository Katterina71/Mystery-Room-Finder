
class Item {
    constructor (name,imagePath,leftPX,topPX){
        this.name = name
        this.imagePath = imagePath
        this.found = false
        this.leftPX = leftPX;
        this.topPX = topPX;
    }
    itemfound() {
        this.found = true;
        return  this.found;
    }
    itemRestart(){
        return  this.found=false;
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

class BonusItem extends Item {
    constructor () {
        super();
        this.bonus = true
        this.score = 30
    }
}


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

export const itemList = itemsLouieRoom;
