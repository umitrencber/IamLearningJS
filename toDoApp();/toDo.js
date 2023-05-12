// bildirimler
var addTodo = document.getElementById("addToDo");
document.getElementById("todayBtn").onclick = todayBtn;
document.getElementById("tommorrowBtn").onclick = tommorrowBtn;
document.getElementById("nextWeekBtn").onclick = nextWeekBtn;
var ctrl = document.getElementById("checkBoxCtrl");
var todays = document.getElementById("todays");
// var today1 = document.getElementById("today1");
// var today2 = document.getElementById("today2");
// var today3 = document.getElementById("today3");
// var today4 = document.getElementById("today4");
// var tommorrow1 = document.getElementById("tommorrow1");
// var tommorrow2 = document.getElementById("tommorrow2");
// var tommorrow3 = document.getElementById("tommorrow3");
// var tommorrow4 = document.getElementById("tommorrow4");

var today1,today1Label;



function todayBtn(){
    today1 = document.createElement("input");
    today1.type = "checkbox";
    today1.value = true;
    today1Label = document.createElement("label");
    today1Label.textContent += addTodo.value;
    todays.appendChild(today1);
    todays.appendChild(today1Label);
    todays.appendChild(document.createElement("br"));



}
function tommorrowBtn(){
    switch(""){
        case tommorrow1.textContent:tommorrow1.textContent += addTodo.value;
        break;
        case tommorrow2.textContent: tommorrow2.textContent += addTodo.value;
        break;
        case tommorrow3.textContent: tommorrow3.textContent += addTodo.value;
        break;
        case tommorrow4.textContent: tommorrow4 .textContent += addTodo.value;
        break;
        default : alert("wromg");
    }
}
function nextWeekBtn(){
    switch(""){
        case nextWeek1.textContent: nextWeek1.textContent += addTodo.value;
        break;
        case nextWeek2.textContent: nextWeek2.textContent += addTodo.value;
        break;
        case nextWeek3.textContent: nextWeek3.textContent += addTodo.value;
        break;
        case nextWeek4.textContent: nextWeek4 .textContent += addTodo.value;
        break;
        default : alert("wromg");
    }
}
