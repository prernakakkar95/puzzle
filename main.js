var init=(fuction(){
const PUZZLE_DIFFICULTY = 4; //no of rows and columns of puzzle
const PUZZLE_HOVER_TINT = '#ff0066';
 
var _canvas; 
var _stage;
 
var _img;
var _pieces;
var _puzzleWidth;
var _puzzleHeight;
var _pieceWidth;
var _pieceHeight;
var _currentPiece;
var _currentDropPiece;
 
var _mouse; //to find out the current location of the cursor
//to initiate the image building
  
       _img = new Image();
       _img.addEventListener('load',onImage,false);
       _img.src = "puzzle1.jpg";
    
	
})