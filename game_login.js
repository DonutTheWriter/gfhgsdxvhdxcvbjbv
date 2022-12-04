function logg()
{
    player1_name=document.getElementById("player1_name").value;
    player2_name=document.getElementById("player2_name").value;

    localStorage.setItem("First player's username",player1_name);
    localStorage.setItem("Second player's username",player2_name);

    window.location="game_page.html";
}
