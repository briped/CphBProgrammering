/**
 * Created by Christian on 07-02-2018.
 */
let context = document.getElementById("mycanvas").getContext('2d');


let x = Number(prompt("Hvor skal der være en brik? Indtast X: "));
let y = Number(prompt("Hvor skal der være en brik? Indtast Y: "));

drawBoardWithPieceAt(x,y);


function drawBoardWithPieceAt(x, y) {
    //TODO Skriv noget kode, der kan tegne et 'fire på stribe' bræt;
    drawBoard();
    drawPieceAt(x, y);

}

//TODO
function drawBoard() {


}
//TODO
function drawPieceAt( x, y, color) {

}





//------------------
//TODO Implementeres senere...
function removePieceAt( x,y){

}
//TODO Implementeres senere...
function showScore(player1Score, player2Score){

}
//TODO Implementeres senere...
function showWinner(playerName){

}