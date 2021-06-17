
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var reset = document.querySelector("#reset");

var player1PointLabel = document.querySelector("#player1Point");
var player2PointLabel = document.querySelector("#player2Point");


var player1Point = 0;
var player2Point = 0;

//Select Value 
var selectValueLable = document.querySelector("select");

let isGameOver = false;


player1.addEventListener("click", () => {
      
    //If Any Bug happens here, Put "<" here
    if(player1Point != selectValueLable.value){
        player1Point++;
        player1PointLabel.innerHTML = player1Point;  
        
        console.log("Player1 Value: " + player1Point);
    }else if(player1Point == selectValueLable.value){
            
            player1PointLabel.style.color = "green";
            player2PointLabel.style.color = "red";
        
            player1Point = 0;
            player2Point = 0;
            player1.disabled = true;
            player2.disabled = true;
            
            console.log("Player 1 Won!!!!!!");
//            alert("Player 1 Won!!!!!!");
    }
});


player2.addEventListener("click", () => {

    //If Any Bug happens here, Put "<" here
    if(player2Point != selectValueLable.value){
        player2Point++;
        player2PointLabel.innerHTML = player2Point;  
        
        console.log("Player2 Value: " + player2Point);
    }else if(player2Point == selectValueLable.value){
         player1PointLabel.style.color = "red";
         player2PointLabel.style.color = "green";
        
         player2Point = 0;
         player1Point = 0;
         
        
         player1.disabled = true;
         player2.disabled = true;
        
         console.log("Player 2 Won!!!!!!");
//        alert("Player 2 Won!!!!!!");
    }
});


reset.addEventListener("click", () => {
    player1PointLabel.innerHTML = 0;
    player2PointLabel.innerHTML = 0;
    
    player1PointLabel.style.color = "";
    player2PointLabel.style.color = "";
    
    player1.disabled = false;
    player2.disabled = false;
});
