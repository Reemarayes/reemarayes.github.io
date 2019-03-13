/* Initializing the game */
function game (){
    document.turn = "X";
}

/* Messages display (use setMessage) */
function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function xo (box){
    if (box.innerText == ''){
        box.innerText = document.turn;
        switchTurn();
}
else {
    swal({
        title: "Oops!",
        text: "Box already selected, Please select another box",
        icon: "warning",
      });
}
winningPart();

}

/* make turns alternative */
function switchTurn(){
    if(document.turn == "X") {
        document.turn = "O";
    }
    else {
        document.turn = "X";
    }
}

 function getBox(number){
     return document.getElementById("b" + number).innerText // b+the number of the box 1-9
 }   

    function winningPart(){  //three wining chances: horizontally, vertically, or diagonally

    /* Horizontal Win */
    if (((b1.innerText == "X") || (b1.innerText == "O")) && ((b1.innerText == b2.innerText) && (b2.innerText == b3.innerText))){
        swal ("Congratulations", "Player" + " " + b1.innerText + " " + "Wins!", "success")
    } 
    else if (((b4.innerText == "X") || (b4.innerText == "O")) && ((b4.innerText == b5.innerText) && (b5.innerText == b6.innerText))){
        swal ("Congratulations","Player" + " " + b4.innerText + " " + "Wins!", "success")
    }
    else if (((b7.innerText == "X") || (b7.innerText == "O")) && ((b7.innerText == b8.innerText) && (b8.innerText == b9.innerText))){
        swal ("Congratulations","Player" + "" + b7.innerText + " "  + "Wins!", "success")
    }


    /* Vertical Win */
    else if (((b1.innerText == "X") || (b1.innerText == "O")) && ((b1.innerText == b4.innerText) && (b4.innerText == b7.innerText))){
        swal ("Congratulations","Player" + " " + b1.innerText + " "  + "Wins!", "success")
    }
    else if (((b2.innerText == "X") || (b2.innerText == "O")) && ((b2.innerText == b5.innerText) && (b5.innerText == b8.innerText))){
            swal ("Congratulations","Player" + " " + b2.innerText + " "  + "Wins!", "success")
    }
    else if (((b3.innerText == "X") || (b3.innerText == "O")) && ((b3.innerText == b6.innerText) && (b6.innerText == b9.innerText))){
        swal ("Congratulations","Player" + " " + b3.innerText + " "  + "Wins!", "success")
    }

    
    /* diagonally Win */
    else if (((b1.innerText == "X") || (b1.innerText == "O")) && ((b1.innerText == b5.innerText) && (b5.innerText == b9.innerText))){
        swal ("Congratulations","Player" + " " + b1.innerText + " "  + "Wins!", "success")
    }
    else if (((b3.innerText == "X") || (b3.innerText == "O")) && ((b3.innerText == b5.innerText) && (b5.innerText == b7.innerText))){
            swal ("Congratulations","Player" + " " + b3.innerText + " "  + "Wins!", "success")
    }
    drawPart();
}


/*  No winner, Draw! */
function drawPart() {
    moveCount = b1.innerText + b2.innerText + b3.innerText + b4.innerText + b5.innerText + b6.innerText + b7.innerText + b8.innerText +b9.innerText 
    console.log(moveCount.length)
    if (moveCount.length == 9) {
        swal({
            text: "It's a Draw!",
            icon: "error",
          });
    }
}


// function resetGame(number){
//     document.getElementById("b" + number).innerText = "";
// }
    

