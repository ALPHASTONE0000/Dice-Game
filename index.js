function startGame () {
    var player1 = Math.floor(Math.random() * 6) + 1;
    var player2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".first img").setAttribute("src", "./Resource/" + player1 + ".png");
    document.querySelector(".second img").setAttribute("src", "./Resource/" + player2 + ".png");

    if (player1 > player2) {
        document.querySelector("header h1").textContent = "Player 1 Wins!";
        document.querySelector("header img").classList.remove("disable");
        document.querySelector("header img").style.order = "0";
    }
    
    else if (player2 > player1) {
        document.querySelector("header img").style.order = "1";
        document.querySelector("header h1").textContent = "Player 2 Wins!";
        document.querySelector("header img").classList.remove("disable");
    }
    
    else if(player1 == player2) {
        document.querySelector("header img").classList.add("disable");
        document.querySelector("header h1").textContent = "Draw!";
    }
}

                                                      
document.querySelector("button").addEventListener("click", startGame);
