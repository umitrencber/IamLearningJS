// bildirme
var pictureIndex,pictures;
pictures =[
    "img/tas.png",
    "img/kagit.png",
    "img/makas.png"
];
var randomImg = document.getElementById("randomImg");
var startGame = document.getElementById("startBtn").onclick = randomPicture;
var rock = document.getElementById("rock").onclick = selectRock;
var paper = document.getElementById("paper").onclick = selectPaper;
var scissors = document.getElementById("scissors").onclick = selectScissors;
var selectedImg = document.getElementById("selectedImg");
var True = document.getElementById("true");
var False = document.getElementById("false");
var message = document.getElementById("message");
// klavye kısayolu ile resim atama yap:
document.addEventListener("keydown",function(event){
    if(event.key == "Enter"){
        randomPicture();
    }
})


var pc;
// random resim üretme fonksiyonu
function randomPicture(){
    pictureIndex = Math.floor(Math.random()*3);
    randomImg.src = pictures[pictureIndex];
    pc = pictureIndex;

 }

function selectRock(){
    var me = 0;
    selectedImg.src = pictures[0];
    if(pc == 0 && me == 0){
        message.textContent = "BERABERE";
    }
    else if(pc == 1 && me == 0){
        message.textContent = "YANLIŞ";
        False.textContent =Number(False.textContent)+1
    }
    else if(pc == 2 && me == 0){
        message.textContent = "DOĞRU";
        True.textContent =Number(True.textContent)+1
    }

}
function selectPaper(){
    var me = 1;
    selectedImg.src = pictures[1];
    if(pc == 0 && me == 1){
        message.textContent = "DOĞRU";
        True.textContent =Number(True.textContent)+1
    }
    else if(pc == 1 && me == 1){
        message.textContent = "BERABERE";
    }
    else if(pc == 2 && me == 1){
        message.textContent = "YANLIŞ";
        False.textContent =Number(False.textContent)+1
    }
}
function selectScissors(){
    var me = 2;
    selectedImg.src = pictures[2];
    selectedImg
    if(pc == 0 && me == 2){
        message.textContent = "YANLIŞ";
        False.textContent =Number(False.textContent)+1;
    }
    else if(pc == 1 && me == 2){
        message.textContent = "DOĞRU";
        True.textContent =Number(True.textContent)+1
    }
    else if(pc == 2 && me == 2){
        message.textContent = "BERABERE";
    }
}























