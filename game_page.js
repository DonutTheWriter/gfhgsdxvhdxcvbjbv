player1_name=localStorage.getItem("First player's username");
player2_name=localStorage.getItem("Second player's username");

player1_score=0;
player2_score=0;

document.getElementById("player_name1").innerHTML=player1_name+": ";
document.getElementById("player_name2").innerHTML=player2_name+": ";
document.getElementById("player_score1").innerHTML=player1_score;
document.getElementById("player_score2").innerHTML=player2_score;

document.getElementById("playerwhoDECIDES").innerHTML="Who decides your FATE: "+player1_name;
document.getElementById("playerwhoDIES").innerHTML="Who DIES if not answered properly: "+player2_name;

function addWORD()
{
    num1=document.getElementById("numb1").value;
    num2=document.getElementById("numb2").value;
    actual_ans=parseInt(num1)*parseInt(num2);
    question="<h4>"+num1+"x"+num2+"</h4>";
    input= "<br> Answer: <input type='text' id='check_box'>";
check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
row=question+input+check_button;
document.getElementById("wordarea").innerHTML=row;
document.getElementById("numb1").value= "";
document.getElementById("numb2").value= "";
}

question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer=document.getElementById("check_box").value;
     if(get_answer==actual_ans)
    {
        if(answer_turn=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player_score1").innerHTML=player1_score;
        }
        else
        {
            player2_score=player2_score+1;
            document.getElementById("player_score2").innerHTML=player2_score;
        }
    }
    if (question_turn=="player1")
    {
        question_turn="player2"
        document.getElementById("playerwhoDECIDES").innerHTML="Who decides your FATE: "+player2_name;
    }
    else
    {
        question_turn="player1"
        document.getElementById("playerwhoDECIDES").innerHTML="Who decides your FATE: "+player1_name; 
    }
    if (answer_turn=="player1")
    {
        answer_turn="player2"
        document.getElementById("playerwhoDIES").innerHTML="Who DIES if not answered properly: "+player2_name;
    }
    else
    {
        answer_turn="player1"
        document.getElementById("playerwhoDIES").innerHTML="Who DIES if not answered properly: "+player1_name; 
    }
    document.getElementById("wordarea").innerHTML="";
    
}