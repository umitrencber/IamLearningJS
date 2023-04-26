var boxes =[box1,box2,box3,box4,box5];

for(var i=1; i<6; i++){
    var number = prompt("Enter anythink number");
    document.getElementById("box"+i).innerHTML = number;
    boxes[i-1]=number;
    //  boxes[i] = Number(document.getElementById("box"+i).value);
}
var bigFromSmall = document.getElementById("bigFromSmall");
var smallFromBig = document.getElementById("smallFromBig");

function Sort(){

    if(bigFromSmall.checked == true){
        boxes.sort(function (a,b){
            return a-b;
        })
        for(var i = 1; i<6; i++){
            document.getElementById("box"+i).innerHTML = boxes[i-1];
        }
    }
    else if(smallFromBig.checked == true){
        boxes.sort(function (a,b){
            return b-a;
        })
        for(var i = 1; i<6; i++){
            document.getElementById("box"+i).innerHTML = boxes[i-1];

        }
    }
}





