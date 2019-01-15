$('document').ready(function() {


    var win1 = 0,
        win2 = 0,
        P1count = 0,
        P2count = 0,
        turn = 0,
        score1 = 0,
        score2 = 0;


    play();

    function play() {

        PLAYER1 = prompt("Enter Your Name Player 1?");
        PLAYER2 = prompt("Enter Your Name Player 2?");

        $("#player1 h3").text(PLAYER1);
        $("#player2 h3").text(PLAYER2);
        $(".squares").css('background', '#ffffff'); //set background to white
/*
        $("#dialog p").title("Welcome");

        $("#dialog p").text("Welcome to Grid Match " + PLAYER1 + "and " + PLAYER2 + "." + PLAYER1 + " you have been assigned the colour RED and " + PLAYER2 + " you have been assigned the colour BLUE");
*/
 
        if (PLAYER1 !== null && PLAYER2 !== null) {

            $("#topleft").click(function() {

                if (turn == 0 || turn == 1) {
                    checkWins();
                    if (P1count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P1");
                            $(this).addClass("P1");
                            turn = 2;
                            P1count++;
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            // console.log(" labeled P2") //log labelled P2
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 
                            //console.log(" this tile has already been used") //log tile used

                        }
                    }
                    else if (P1count > 2) {
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            $(this).removeClass("P1"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 1; //make turn 1 again
                            P1count--; //take 1 from P1count total
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P1count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER1 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }

                    }
                    checkWins();
                }
                else if (turn == 2) {
                    checkWins();
                    if (P2count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P2");
                            $(this).addClass("P2");
                            turn = 1;
                            P2count++;
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P2count > 2) {
                        if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            $(this).removeClass("P2"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 2; //make turn 1 again
                            P2count--; //take 1 from P2count total
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P2count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER2 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }
                    }
                    checkWins();
                }

            });

            $("#topcentre").click(function() {

                if (turn == 0 || turn == 1) {
                    checkWins();
                    if (P1count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P1");
                            $(this).addClass("P1");
                            turn = 2;
                            P1count++;
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            // console.log(" labeled P2") //log labelled P2
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P1count > 2) {
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            $(this).removeClass("P1"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 1; //make turn 1 again
                            P1count--; //take 1 from P1count total
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P1count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER1 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }

                    }
                    checkWins();
                }
                else if (turn == 2) {
                    checkWins();
                    if (P2count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P2");
                            $(this).addClass("P2");
                            turn = 1;
                            P2count++;
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1                            
                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            //console.log(" this tile has already been used") //log tile used
                        }
                    }
                    else if (P2count > 2) {
                        if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            $(this).removeClass("P2"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 2; //make turn 1 again
                            P2count--; //take 1 from P2count total
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P2count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER2 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }
                    }
                    checkWins();
                }

            });

            $("#topright").click(function() {

                if (turn == 0 || turn == 1) {
                    checkWins();
                    if (P1count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P1");
                            $(this).addClass("P1");
                            turn = 2;
                            P1count++;
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            // console.log(" labeled P2") //log labelled P2
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P1count > 2) {
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            $(this).removeClass("P1"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 1; //make turn 1 again
                            P1count--; //take 1 from P1count total
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            ////console.log(" labeled P2") //log labelled P2 
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P1count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER1 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }

                    }
                    checkWins();
                }
                else if (turn == 2) {
                    checkWins();
                    if (P2count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P2");
                            $(this).addClass("P2");
                            turn = 1;
                            P2count++;
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if ($(this).hasClass("P2")) { //if labelled P2
                            ////console.log(" labeled P2") //log labelled P2 
                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P2count > 2) {
                        if ($(this).hasClass("P2")) { //if labelled P2
                            ////console.log(" labeled P2") //log labelled P2 
                            $(this).removeClass("P2"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 2; //make turn 1 again
                            P2count--; //take 1 from P2count total
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P2count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER2 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }
                    }
                    checkWins();
                }

            });

            $("#middleleft").click(function() {

                if (turn == 0 || turn == 1) {
                    checkWins();
                    if (P1count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P1");
                            $(this).addClass("P1");
                            turn = 2;
                            P1count++;
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            // console.log(" labeled P2") //log labelled P2
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P1count > 2) {
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            $(this).removeClass("P1"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 1; //make turn 1 again
                            P1count--; //take 1 from P1count total
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            ////console.log(" labeled P2") //log labelled P2 
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P1count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER1 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }

                    }
                    checkWins();
                }
                else if (turn == 2) {
                    checkWins();
                    if (P2count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P2");
                            $(this).addClass("P2");
                            turn = 1;
                            P2count++;
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if ($(this).hasClass("P2")) { //if labelled P2
                            ////console.log(" labeled P2") //log labelled P2 
                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P2count > 2) {
                        if ($(this).hasClass("P2")) { //if labelled P2
                            ////console.log(" labeled P2") //log labelled P2 
                            $(this).removeClass("P2"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 2; //make turn 1 again
                            P2count--; //take 1 from P2count total
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P2count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER2 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }
                    }
                    checkWins();
                }

            });

            $("#middlecentre").click(function() {

                if (turn == 0 || turn == 1) {
                    checkWins();
                    if (P1count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P1");
                            $(this).addClass("P1");
                            turn = 2;
                            P1count++;
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            // console.log(" labeled P2") //log labelled P2
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P1count > 2) {
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            $(this).removeClass("P1"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 1; //make turn 1 again
                            P1count--; //take 1 from P1count total
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            ////console.log(" labeled P2") //log labelled P2 
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P1count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER1 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }

                    }
                    checkWins();
                }
                else if (turn == 2) {
                    checkWins();
                    if (P2count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P2");
                            $(this).addClass("P2");
                            turn = 1;
                            P2count++;
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P2count > 2) {
                        if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            $(this).removeClass("P2"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 2; //make turn 1 again
                            P2count--; //take 1 from P2count total
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P2count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER2 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }
                    }
                    checkWins();
                }

            });

            $("#middleright").click(function() {

                if (turn == 0 || turn == 1) {
                    checkWins();
                    if (P1count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P1");
                            $(this).addClass("P1");
                            turn = 2;
                            P1count++;
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            // console.log(" labeled P2") //log labelled P2
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P1count > 2) {
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            $(this).removeClass("P1"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 1; //make turn 1 again
                            P1count--; //take 1 from P1count total
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P1count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER1 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }

                    }
                    checkWins();
                }
                else if (turn == 2) {
                    checkWins();
                    if (P2count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P2");
                            $(this).addClass("P2");
                            turn = 1;
                            P2count++;
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P2count > 2) {
                        if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            $(this).removeClass("P2"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 2; //make turn 1 again
                            P2count--; //take 1 from P2count total
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P2count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER2 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }
                    }
                    checkWins();
                }

            });

            $("#bottomleft").click(function() {

                if (turn == 0 || turn == 1) {
                    checkWins();
                    if (P1count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P1");
                            $(this).addClass("P1");
                            turn = 2;
                            P1count++;
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            // console.log(" labeled P2") //log labelled P2
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P1count > 2) {
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            $(this).removeClass("P1"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 1; //make turn 1 again
                            P1count--; //take 1 from P1count total
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P1count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER1 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }

                    }
                    checkWins();
                }
                else if (turn == 2) {
                    checkWins();
                    if (P2count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P2");
                            $(this).addClass("P2");
                            turn = 1;
                            P2count++;
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P2count > 2) {
                        if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            $(this).removeClass("P2"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 2; //make turn 1 again
                            P2count--; //take 1 from P2count total
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P2count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER2 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }
                    }
                    checkWins();
                }

            });

            $("#bottomcentre").click(function() {

                if (turn == 0 || turn == 1) {
                    checkWins();
                    if (P1count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P1");
                            $(this).addClass("P1");
                            turn = 2;
                            P1count++;
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            // console.log(" labeled P2") //log labelled P2
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P1count > 2) {
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            $(this).removeClass("P1"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 1; //make turn 1 again
                            P1count--; //take 1 from P1count total
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P1count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER1 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }

                    }
                    checkWins();
                }
                else if (turn == 2) {
                    checkWins();
                    if (P2count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P2");
                            $(this).addClass("P2");
                            turn = 1;
                            P2count++;
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P2count > 2) {
                        if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            $(this).removeClass("P2"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 2; //make turn 1 again
                            P2count--; //take 1 from P2count total
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P2count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER2 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }
                    }
                    checkWins();
                }

            });

            $("#bottomright").click(function() {

                if (turn == 0 || turn == 1) {
                    checkWins();
                    if (P1count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P1");
                            $(this).addClass("P1");
                            turn = 2;
                            P1count++;
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            // console.log(" labeled P2") //log labelled P2
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P1count > 2) {
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            $(this).removeClass("P1"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 1; //make turn 1 again
                            P1count--; //take 1 from P1count total
                        }
                        if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            alert(" this tile is allocated to P2") //allocated to P2
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P1count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER1 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }

                    }
                    checkWins();
                }
                else if (turn == 2) {
                    checkWins();
                    if (P2count <= 2) { //if playe 1 count is less than 2
                        if (!$(this).hasClass("P2" || "P1")) { //if NOT labelled P1 or P2
                            //console.log("not labeled ")
                            $(this).text("P2");
                            $(this).addClass("P2");
                            turn = 1;
                            P2count++;
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            //console.log(" this tile has already been used") //log tile used


                        }
                    }
                    else if (P2count > 2) {
                        if ($(this).hasClass("P2")) { //if labelled P2
                            //console.log(" labeled P2") //log labelled P2 
                            $(this).removeClass("P2"); //remove label
                            $(this).css('background', '#ffffff'); //set background to white
                            $(this).text(""); //set text to blank
                            turn = 2; //make turn 1 again
                            P2count--; //take 1 from P2count total
                        }
                        if ($(this).hasClass("P1")) { //if labelled P1
                            //console.log(" labeled P1") //log labelled P1 

                            alert(" this tile is allocated to P1") //allocated to P1
                        }
                        else if (!$(this).hasClass("P2" || "P1") && P2count === 3) { //if NOT labelled P1 or P2
                            alert(PLAYER2 + " You have 3 TILES used. Click one of your TILES to take another turn") // name player used all your clicks
                        }
                    }
                    checkWins();
                }

            });
        }

        function checkWins() {
            topRowWin();
            middleRowWin();
            bottomRowWin();
            leftColumnWin();
            middleColumnWin();
            rightColumnWin();
            diagLeftWin();
            diagRightWin();

        }

        function topRowWin() {
            if ($('#topleft').hasClass("P1") && ($('#topcentre').hasClass("P1") && ($('#topright').hasClass("P1")))) {

                win1++;
                alert(PLAYER1 + ' WINS');
                localStorage.setItem("score1", win1);
                win1 = parseInt(localStorage.score1);
                localStorage.score1 = JSON.stringify(win1);
                JSON.parse(localStorage.score1);
                $("#score1").text(localStorage.score1);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 1; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total

            }
            else if ($('#topleft').hasClass("P2") && ($('#topcentre').hasClass("P2") && ($('#topright').hasClass("P2")))) {
                win2++;
                alert(PLAYER2 + ' WINS');
                localStorage.setItem("score2", win2);
                win2 = parseInt(localStorage.score2);
                localStorage.score1 = JSON.stringify(win2);
                JSON.parse(localStorage.score2);
                $("#score2").text(localStorage.score2);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 2; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
        }

        function middleRowWin() {
            if ($('#middleleft').hasClass("P1") && ($('#middlecentre').hasClass("P1") && ($('#middleright').hasClass("P1")))) {

                win1++;
                alert(PLAYER1 + ' WINS');
                localStorage.setItem("score1", win1);
                win1 = parseInt(localStorage.score1);
                localStorage.score1 = JSON.stringify(win1);
                JSON.parse(localStorage.score1);
                $("#score1").text(localStorage.score1);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 1; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
            else if ($('#middleleft').hasClass("P2") && ($('#middlecentre').hasClass("P2") && ($('#middleright').hasClass("P2")))) {
                win2++;
                alert(PLAYER2 + ' WINS');
                localStorage.setItem("score2", win2);
                win2 = parseInt(localStorage.score2);
                localStorage.score1 = JSON.stringify(win2);
                JSON.parse(localStorage.score2);
                $("#score2").text(localStorage.score2);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 2; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
        }

        function bottomRowWin() {
            if ($('#bottomleft').hasClass("P1") && ($('#bottomcentre').hasClass("P1") && ($('#bottomright').hasClass("P1")))) {


                win1++;
                alert(PLAYER1 + ' WINS');
                localStorage.setItem("score1", win1);
                win1 = parseInt(localStorage.score1);
                localStorage.score1 = JSON.stringify(win1);
                JSON.parse(localStorage.score1);
                $("#score1").text(localStorage.score1);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 1; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
            else if ($('#bottomleft').hasClass("P2") && ($('#bottomcentre').hasClass("P2") && ($('#bottomright').hasClass("P2")))) {
                win2++;
                alert(PLAYER2 + ' WINS');
                localStorage.setItem("score2", win2);
                win2 = parseInt(localStorage.score2);
                localStorage.score1 = JSON.stringify(win2);
                JSON.parse(localStorage.score2);
                $("#score2").text(localStorage.score2);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 2; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
        }

        function diagLeftWin() {
            if ($('#topleft').hasClass("P1") && ($('#middlecentre').hasClass("P1") && ($('#bottomright').hasClass("P1")))) {


                win1++;
                alert(PLAYER1 + ' WINS');
                localStorage.setItem("score1", win1);
                win1 = parseInt(localStorage.score1);
                localStorage.score1 = JSON.stringify(win1);
                JSON.parse(localStorage.score1);
                $("#score1").text(localStorage.score1);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 1; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
            else if ($('#topleft').hasClass("P2") && ($('#middlecentre').hasClass("P2") && ($('#bottomright').hasClass("P2")))) {
                win2++;
                alert(PLAYER2 + ' WINS');
                localStorage.setItem("score2", win2);
                win2 = parseInt(localStorage.score2);
                localStorage.score1 = JSON.stringify(win2);
                JSON.parse(localStorage.score2);
                $("#score2").text(localStorage.score2);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 2; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
        }

        function diagRightWin() {
            if ($('#bottomleft').hasClass("P1") && ($('#middlecentre').hasClass("P1") && ($('#topright').hasClass("P1")))) {


                win1++;
                alert(PLAYER1 + ' WINS');
                localStorage.setItem("score1", win1);
                win1 = parseInt(localStorage.score1);
                localStorage.score1 = JSON.stringify(win1);
                JSON.parse(localStorage.score1);
                $("#score1").text(localStorage.score1);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 1; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
            else if ($('#bottomleft').hasClass("P2") && ($('#middlecentre').hasClass("P2") && ($('#topright').hasClass("P2")))) {
                win2++;
                alert(PLAYER2 + ' WINS');
                localStorage.setItem("score2", win2);
                win2 = parseInt(localStorage.score2);
                localStorage.score1 = JSON.stringify(win2);
                JSON.parse(localStorage.score2);
                $("#score2").text(localStorage.score2);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 2; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
        }

        function leftColumnWin() {
            if ($('#topleft').hasClass("P1") && ($('#middleleft').hasClass("P1") && ($('#bottomleft').hasClass("P1")))) {


                win1++;
                alert(PLAYER1 + ' WINS');
                localStorage.setItem("score1", win1);
                win1 = parseInt(localStorage.score1);
                localStorage.score1 = JSON.stringify(win1);
                JSON.parse(localStorage.score1);
                $("#score1").text(localStorage.score1);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 1; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
            else if ($('#topleft').hasClass("P2") && ($('#middleleft').hasClass("P2") && ($('#bottomleft').hasClass("P2")))) {
                win2++;
                alert(PLAYER2 + ' WINS');
                localStorage.setItem("score2", win2);
                win2 = parseInt(localStorage.score2);
                localStorage.score1 = JSON.stringify(win2);
                JSON.parse(localStorage.score2);
                $("#score2").text(localStorage.score2);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 2; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
        }

        function middleColumnWin() {
            if ($('#topcentre').hasClass("P1") && ($('#middlecentre').hasClass("P1") && ($('#bottomcentre').hasClass("P1")))) {


                win1++;
                alert(PLAYER1 + ' WINS');
                localStorage.setItem("score1", win1);
                win1 = parseInt(localStorage.score1);
                localStorage.score1 = JSON.stringify(win1);
                JSON.parse(localStorage.score1);
                $("#score1").text(localStorage.score1);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 1; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
            else if ($('#topcentre').hasClass("P2") && ($('#middlecentre').hasClass("P2") && ($('#bottomcentre').hasClass("P2")))) {
                win2++;
                alert(PLAYER2 + ' WINS');
                localStorage.setItem("score2", win2);
                win2 = parseInt(localStorage.score2);
                localStorage.score1 = JSON.stringify(win2);
                JSON.parse(localStorage.score2);
                $("#score2").text(localStorage.score2);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 2; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
        }

        function rightColumnWin() {
            if ($('#topright').hasClass("P1") && ($('#middleright').hasClass("P1") && ($('#bottomright').hasClass("P1")))) {


                win1++;
                alert(PLAYER1 + ' WINS');
                localStorage.setItem("score1", win1);
                win1 = parseInt(localStorage.score1);
                localStorage.score1 = JSON.stringify(win1);
                JSON.parse(localStorage.score1);
                $("#score1").text(localStorage.score1);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 1; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
            else if ($('#topright').hasClass("P2") && ($('#middleright').hasClass("P2") && ($('#bottomright').hasClass("P2")))) {

                win2++;
                alert(PLAYER2 + ' WINS');
                localStorage.setItem("score2", win2);
                win2 = parseInt(localStorage.score2);
                localStorage.score1 = JSON.stringify(win2);
                JSON.parse(localStorage.score2);
                $("#score2").text(localStorage.score2);



                $(".squares").removeClass("P1"); //remove all labels
                $(".squares").removeClass("P2"); //remove all labels
                $(".squares").css('background', '#ffffff'); //set background to white
                $(".squares").text(""); //set text to blank
                turn = 2; //make turn 1 again
                P1count = 0; //reset P1count total
                P2count = 0; //reset P2count total
            }
        }
    }

});
