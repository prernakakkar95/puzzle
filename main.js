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
  //  initialising values 
	function onImage(e){
    _pieceWidth = Math.floor(_img.width / PUZZLE_DIFFICULTY)
    _pieceHeight = Math.floor(_img.height / PUZZLE_DIFFICULTY)
    _puzzleWidth = _pieceWidth * PUZZLE_DIFFICULTY;
    _puzzleHeight = _pieceHeight * PUZZLE_DIFFICULTY;
    setCanvas();
    initPuzzle();
  }
  //set the canvas
   function setCanvas(){
    _canvas = document.getElementById('canvas');
    _stage = _canvas.getContext('2d');
    _canvas.width = _puzzleWidth;
    _canvas.height = _puzzleHeight;
    _canvas.style.border = "1px double black";
  }
  //a function to be called to set puzzle and when replaying
  function initPuzzle(){
    _pieces = []; // initialising with null
    _mouse = {x:0,y:0}; // initialising mouse position
    _currentPiece = null;
    _currentDropPiece = null;
    _stage.drawImage(_img, 0, 0, _puzzleWidth, _puzzleHeight, 0, 0, _puzzleWidth, _puzzleHeight);
    buttonTitle("Lets play!");
    buildPieces();
 }
 //styling of button
   function buttonTitle(msg){
    _stage.fillStyle = "#000000";
    _stage.globalAlpha = .4;
    _stage.fillRect(100,_puzzleHeight - 40,_puzzleWidth - 200,40);
    _stage.fillStyle = "#FFFFFF";
    _stage.globalAlpha = 1;
    _stage.textAlign = "center";
    _stage.textBaseline = "middle";
    _stage.font = "20px Arial";
    _stage.fillText(msg,_puzzleWidth / 2,_puzzleHeight - 20);
    }
 //building of pieces
 //shuffle function
 //to check the piece clicked
 //update function
 //game over
 //score function
  })();