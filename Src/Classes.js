class Ship {
    constructor(length, hits = 0) { 
        this.length = length;
        this.hits = hits;
    };
    
    hit() {
        this.hits++
    };

    isSunk() {
        if (this.hits >= length) {
            return true
        } else {
            return false
        }
    };
}

class Gameboard {
    constructor(board = null, missedShots, ships) {
        this.board = new Map();
        this.missedShots = new Set();
        this.ships = []
    }

    
    placeShip(ship = new Ship(), startCoord = new Map(), direction) {
        // const ship = new Ship(); should i use this one or the parameter one?
        
        for (let startCoord[i] = 0;  ship.length - 1) {
            if (direction == 'horizontal') {
                startCoord = (x + 1, y)
            } else {
               startCoord = (x, y + 1) 
            }
        }
        this.board.set(startCoord, ship) 

        // placeShip function have no idea if im doing it right or not. too much instantiation?
    }


    receiveAttack([x,y]) {
        
        if (this.board !== this.missedShots) {
            this.ships[i]
            ship.hit();
        } else {
            this.missedShots.add([x,y])
        }
    }

    allShipSunk() {
        
        this.ships.forEach((ship) => {
            ship.isSunk();
            return true;
        })
    }
}

class Player {
    constructor(name, isComputer, gameboard) {
        this.name = name;
        this.isComputer = isComputer;
        this.gameboard = gameboard;

        // im assuming have to inherit or make composition of gamboard to player and isComputer? dont know how though
    }

   
    attack(oppBoard, receiveAttack) {
        receiveAttack = Gameboard.receiveAttack
        oppBoard.receiveAttack([x,y])
    }
     
}