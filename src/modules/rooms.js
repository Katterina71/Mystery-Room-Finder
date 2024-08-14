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