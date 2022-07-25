class ChessPiece {
  constructor(color) {
    this.color = color;
  }
  get moves() { return this.moves };
}

class King extends ChessPiece {}
class Rook extends ChessPiece {}
class Queen extends ChessPiece {}
class Pawn extends ChessPiece {
  constructor(color) { super(color) }

  has_promotion = false;

  promote(piece) {
    if (piece == King) {
      return console.log ("The pawn can't be promoted as a King");
    }
  }
}

class Knight extends ChessPiece {}
class Bishop extends ChessPiece {}

class Chessboard {
  constructor() {
    this.state = 'active';
    this.positions = {};
  }

  static positions = [
    ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'],
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8'],
    ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'],
    ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8'],
    ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8'],
    ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'],
    ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8'],
    ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8']
  ];
}

class Game {
  constructor() {
    this.state = "In game";
    this.moves = 0;
    this.players_move = 'white';
    this.players_move_history = {};
    this.dead_pieces = {};
  }
}

// function chessboard_coord() {
//   letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
//   positions = [...Array(8)].map(e => Array(8));

//   for (let i = 0; i < positions.length; i++) {
//     for (let j = 0; j < positions.length; j++) {
//       positions[i][j] = letters[i].concat(j + 1);
//     }
//   }
//   return positions
// }