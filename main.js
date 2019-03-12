/* Player X or O */

    function boxes(){
        var box1 = document.getElementById("1")
        var box2 = document.getElementById("2")
        var box3 = document.getElementById("3")
        var box4 = document.getElementById("4")
        var box5 = document.getElementById("5")
        var box6 = document.getElementById("6")
        var box7 = document.getElementById("7")
        var box8 = document.getElementById("8")

    }

/*
      1  | 2  |  3
    --------------
      4  | 5  |  6
    --------------
      7  |  8 |  9
*/

    /* Horizontal Win */

    if (((box1 == "X") || (box1 == "O")) && ((box1 == box2) && (box2 == box3))){
        console.log(box1 + "Wins")
    } 
    else if (((box4 == "X") || (box4 == "O")) && ((box4 == box5) && (box5 == box6))){
        console.log(box4 + "Wins")
    }
    else if (((box7 == "X") || (box7 == "O")) && ((box7 == box8) && (box8 == box9))){
        console.log(box7 + "Wins")
    }

    /* Vertical Win */

    else if (((box1 == "X") || (box1 == "O")) && ((box1 == box4) && (box4 == box7))){
        console.log(box1 + "Wins")
    }
    else if (((box2 == "X") || (box2 == "O")) && ((box2 == box5) && (box5 == box8))){
            console.log(box2 + "Wins")
    }
    else if (((box3 == "X") || (box3 == "O")) && ((box3 == box6) && (box6 == box9))){
        console.log(box3 + "Wins")
    }

    /* diagonally Win */

    else if (((box1 == "X") || (box1 == "O")) && ((box1 == box5) && (box5 == box9))){
        console.log(box1 + "Wins")
    }
    else if (((box3 == "X") || (box3 == "O")) && ((box3 == box5) && (box5 == box7))){
            console.log(box3 + "Wins")
    }





/* Winning functions */

/* Draw function */

/* Reset the Game */

    