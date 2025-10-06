class Ship {
    constructor(length, hits = 0) { 
        this.length = length;
        this.hits = hits;
    };
    
    hit() {
        return this.hits++
    };

    isSunk() {
        if (this.hit >= length) {
            return true
        } else {
            return false
        }
    };
}

class Gameboard {
    constructor(board = null, missedShots, ships) {
        this.board = new Map() || board
        this.missedShots = new Map() || missedShots;
        this.ships = new Map() || ships;
    }

    
    placeShip(ship = new Ship(), startCoord = new Map(), direction) {
        const gB = new Gameboard();
        
        // const ship = new Ship(); should i use this one or the parameter one?
        
        for (const cell of ship.length && direction) {
            startCoord.set([x,y])
        }
        this.ships.push() 

        // placeShip function have no idea if im doing it right or not. too much instantiation?
    }


    receiveAttack([x,y]) {
        const gB = new Gameboard();
        const ship = new Ship();

        if (gB.board >= (ship.length)) {
            ship.hit();
        } else {
            this.missedShots.set([x,y])
        }
    }

    allShipSunk() {
        const gB = new Gameboard();
        const ship = new Ship();

        if (gB.ships === ship.isSunk) {
            return true
        }
    }
}

class Player {
    constructor(name, isComputer, gameboard) {
        this.name = name;
        this.isComputer = isComputer;
        this.gameboard = gameboard;
    }

   
    attack(oppBoard) {
        oppBoard = new Gameboard()
        oppBoard.receiveAttack([x,y])
    }
     
}