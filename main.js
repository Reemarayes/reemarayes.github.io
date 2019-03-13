// /* Player X or O */
//     var XorO = 0;
//     function boxes(){
//         var box1 = document.getElementById("1")
//         var box2 = document.getElementById("2")
//         var box3 = document.getElementById("3")
//         var box4 = document.getElementById("4")
//         var box5 = document.getElementById("5")
//         var box6 = document.getElementById("6")
//         var box7 = document.getElementById("7")
//         var box8 = document.getElementById("8")
//         var box9 = document.getElementById("9")
//         box1.value="";
//         box2.value="";
//         box3.value="";
//         box4.value="";
//         box5.value="";
//         box6.value="";  
//         box7.value="";
//         box8.value="";
//         box9.value="";
//         box1.disabled=false;
//         box2.disabled=false;
//         box3.disabled=false;
//         box4.disabled=false;
//         box5.disabled=false;
//         box6.disabled=false;
//         box7.disabled=false;
//         box8.disabled=false;
//         box9.disabled=false;
//         document.getElementById("popup").style.visibility = "hidden";
//         document.getElementById("overlay").style.visibility = "hidden";
//     }
//     function disabledButtons() {
//         var box1 = document.getElementById("1");
//         var box2 = document.getElementById("2");
//         var box3 = document.getElementById("3");
//         var box4 = document.getElementById("4");
//         var box5 = document.getElementById("5");
//         var box6 = document.getElementById("6");
//         var box7 = document.getElementById("7");
//         var box8 = document.getElementById("8");
//         var box9 = document.getElementById("9");
       
//         box1.disabled = true;
//         box2.disabled = true;
//         box3.disabled = true;
//         box4.disabled = true;
//         box5.disabled = true;
//         box6.disabled = true;
//         box7.disabled = true;
//         box8.disabled = true;
//         box9.disabled = true;
//     }
//     function win(winnerPlayer) {
//         disabledButtons();
      
//         popuptext = document.getElementById("text");
//         popuptext.innerHTML = winnerPlayer + " wins.";
      
//         var pop = document.getElementById("popup");
//         var overlay = document.getElementById("overlay");
//         pop.style.visibility = "visible";
//         overlay.style.visibility ="visible"
//   }
// /*
//       1  | 2  |  3
//     --------------
//       4  | 5  |  6
//     --------------
//       7  |  8 |  9
// */
// function display() {
//     var box1 = document.getElementById("1").value;
//     var box2 = document.getElementById("2").value;
//     var box3 = document.getElementById("3").value;
//     var box4 = document.getElementById("4").value;
//     var box5 = document.getElementById("5").value;
//     var box6 = document.getElementById("6").value;
//     var box7 = document.getElementById("7").value;
//     var box8 = document.getElementById("8").value;
//     var box9 = document.getElementById("9").value;
    
//     /* Horizontal Win */
//     if (((box1 == "X") || (box1 == "O")) && ((box1 == box2) && (box2 == box3))){
//         console.log(box1 + "Wins")
//     } 
//     else if (((box4 == "X") || (box4 == "O")) && ((box4 == box5) && (box5 == box6))){
//         console.log(box4 + "Wins")
//     }
//     else if (((box7 == "X") || (box7 == "O")) && ((box7 == box8) && (box8 == box9))){
//         console.log(box7 + "Wins")
//     }
//     /* Vertical Win */
//     else if (((box1 == "X") || (box1 == "O")) && ((box1 == box4) && (box4 == box7))){
//         console.log(box1 + "Wins")
//     }
//     else if (((box2 == "X") || (box2 == "O")) && ((box2 == box5) && (box5 == box8))){
//             console.log(box2 + "Wins")
//     }
//     else if (((box3 == "X") || (box3 == "O")) && ((box3 == box6) && (box6 == box9))){
//         console.log(box3 + "Wins")
//     }
//     /* diagonally Win */
//     else if (((box1 == "X") || (box1 == "O")) && ((box1 == box5) && (box5 == box9))){
//         console.log(box1 + "Wins")
//     }
//     else if (((box3 == "X") || (box3 == "O")) && ((box3 == box5) && (box5 == box7))){
//             console.log(box3 + "Wins")
//     }
// }
// function game(x, XorO) {
//     if (x==1) {
//     var button = document.getElementById("1");
//     button.value = XorO;
//     button.disabled=true;
//     }
//     else if (x==2) {
//     var button = document.getElementById("2");
//     button.value = XorO;
//     button.disabled=true;
//     }
//     else if (x==3) {
//     var button = document.getElementById("3");
//     button.value = XorO;
//     button.disabled=true;
//     }
//     else if (x==4) {
//     var button = document.getElementById("4");
//     button.value = XorO;
//     button.disabled=true;
//     }
//     else if (x==5) {
//     var button = document.getElementById("5");
//     button.value = XorO;
//     button.disabled=true;
//     }
//     else if (x==6) {
//     var button = document.getElementById("6");
//     button.value = XorO;
//     button.disabled=true;
//     }
//     else if (x==7) {
//     var button = document.getElementById("7");
//     button.value = XorO;
//     button.disabled=true;
//     }
//     else if (x==8) {
//     var button = document.getElementById("8");
//     button.value = XorO;
//     button.disabled=true;
//     }
//     else if (x==9) {
//     var button = document.getElementById("9");
//     button.value = XorO;
//     button.disabled=true;
//     }
//     display();
//     }
//     function xo(button) {
//         if (XorO=="X") {
//             XorO="O";
//         display(button, XorO);
//         }
//         else if (XorO=="O") {
//             XorO="X";
//         display(button, XorO);
//         }
//      










function game (){
    // for(var i=1; i<=9; i++){
    //     resetGame(i);
    // }
    document.turn = "X";
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function xo (box){
    if (box.innerText == ''){
    box.innerText = document.turn;
    switchTurn();
}
else {
    setMessage("Box already chosen, Chose another box")
}
winningPart();
}

function switchTurn(){
    if(document.turn == "X") {
        document.turn = "O";
    }
    else {
        document.turn = "X";
    }
}

 function getBox(number){
     return document.getElementById("b" + number).innerText
 }   

    function winningPart(){
            /* Horizontal Win */
    if (((b1.innerText == "X") || (b1.innerText == "O")) && ((b1.innerText == b2.innerText) && (b2.innerText == b3.innerText))){
        alert ("Player" + "" + b1.innerText + "Wins")
    } 
    else if (((b4.innerText == "X") || (b4.innerText == "O")) && ((b4.innerText == b5.innerText) && (b5.innerText == b6.innerText))){
        alert ("Player" + "" + b4.innerText + "Wins")
    }
    else if (((b7.innerText == "X") || (b7.innerText == "O")) && ((b7.innerText == b8.innerText) && (b8.innerText == b9.innerText))){
        alert ("Player" + "" + b7.innerText + "Wins")
    }
    /* Vertical Win */
    else if (((b1.innerText == "X") || (b1.innerText == "O")) && ((b1.innerText == b4.innerText) && (b4.innerText == b7.innerText))){
        alert ("Player" + "" + b1.innerText + "Wins")
    }
    else if (((b2.innerText == "X") || (b2.innerText == "O")) && ((b2.innerText == b5.innerText) && (b5.innerText == b8.innerText))){
            alert ("Player" + "" + b2.innerText + "Wins")
    }
    else if (((b3.innerText == "X") || (b3.innerText == "O")) && ((b3.innerText == b6.innerText) && (b6.innerText == b9.innerText))){
        alert ("Player" + "" + b3.innerText + "Wins")
    }
    /* diagonally Win */
    else if (((b1.innerText == "X") || (b1.innerText == "O")) && ((b1.innerText == b5.innerText) && (b5.innerText == b9.innerText))){
        alert ("Player" + "" + b1.innerText + "Wins")
    }
    else if (((b3.innerText == "X") || (b3.innerText == "O")) && ((b3.innerText == b5.innerText) && (b5.innerText == b7.innerText))){
            alert ("Player" + "" + b3.innerText + "Wins")
    }
}

// function resetGame(number){
//     document.getElementById("b" + number).innerText = "";
// }
    

