// bildirme
var randomImg = document.getElementById("randomImg");
var startGame = document.getElementById("startBtn");

// random resim üretme fonksiyonu

function randomPicture(){
    var pictures =[
        "img/tas.png",
        "img/kagit.png",
        "img/makas.png"
    ];
    var pictureIndex = Math.floor(Math.random()*3);
    randomImg.src = pictures[pictureIndex];
}






