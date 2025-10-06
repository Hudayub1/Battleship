class Ship {
    constructor(length, hits = 0) { 
        this.length = length;
        this.hits = hits;
    };
    
    hit() {
        this.hits++
    };

    isSunk() {
        if (this.hits >= this.length) {
            return true
        } else {
            return false
        }
    };
}

class Gameboard {
    constructor() {
        this.board = new Map();
        this.missedShots = new Set();
        this.ships = []
    }

    
    placeShip(ship = new Ship(), startCoord = new Map(), direction) {
        // const ship = new Ship(); should i use this one or the parameter one?
        
        let [x, y] = startCoord

        for (let i = 0;  i < ship.length; i++) {
            if (direction == 'horizontal') {
                startCoord = (x + 1, y)
            } else {
               startCoord = (x, y + 1) 
            }
            this.board.set(startCoord, ship) 
        }

        this.ships.push(ship);
        

        // placeShip function have no idea if im doing it right or not. too much instantiation?
    }


    receiveAttack([x,y]) {
        
        if (this.board.has([x, y])) {
            const ship = this.board.get([x, y])
            ship.hit();
        } else {
            this.missedShots.add([x,y])
        }
    }

    allShipSunk() {
        return this.ships.every(ship => ship.isSunk());
    }
}

class Player {
    constructor(name, isComputer, gameboard) {
        this.name = name;
        this.isComputer = isComputer;
        this.gameboard = gameboard;

        // im assuming have to inherit or make composition of gamboard to player and isComputer? dont know how though
    }

   
    attack(oppBoard, [x,y]) {
        oppBoard.receiveAttack([x,y])
    }
     
}