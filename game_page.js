var player_1 = localStorage.getItem("player1");
var player_2 = localStorage.getItem("player2");

console.log(player_1);
console.log(player_2);

document.getElementById("player1_name").innerHTML=player_1;
document.getElementById("player2_name").innerHTML=player_2;

player1_score=0;
player2_score=0;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("question_turn").innerHTML="question_turn :" + player_1;
document.getElementById("answer_turn").innerHTML="answer_turn :" + player_2;

function send(){
word = document.getElementById("word").value;
new_word = word.toLowerCase();

charat1=new_word.charAt(1);
console.log(charat1);

var replace1=new_word.replace(charat1,"_");
console.log(replace1);

charat2=replace1.charAt(4);
console.log(charat2);

var replace2=replace1.replace(charat2,"_");
console.log(replace2);

question = '<h1 id="word_display">Q.'+ replace2 +'</h1>';
answer = 'A. <input id="input_answer" type="text">';
button = '<button id="check" class="btn btn-success" onclick="check();">Check</button>';
row = question + answer + button;
document.getElementById("output").innerHTML = row;
}

question_turn = "player_1";
answer_turn = "player_2";

function check(){
input_answer = document.getElementById("input_answer").value;
console.log(input_answer);

if(new_word == input_answer){
    console.log("matched");

    if(answer_turn == "player_1"){
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;
        answer_turn = "player_2";
        question_turn = "player_1";
        document.getElementById("question_turn").innerHTML = "question_turn" + player_1;
        document.getElementById("answer_turn").innerHTML = "answer_turn" + player_2;
    }
    else{
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
        answer_turn = "player_1";
        question_turn = "player_2";
        document.getElementById("question_turn").innerHTML = "question_turn" + player_2;
        document.getElementById("answer_turn").innerHTML = "answer_turn" + player_1;
    }
}



}