var x,y;
var add,sub,multi,division;
var forP,forOperation;

createNumber();
check();


function createNumber(){
  // degrees of difficulty
  var easyOption = document.getElementById("easyOption");
  var mediumOption = document.getElementById("mediumOption");
  var hardOption = document.getElementById("hardOption");
  var extraHardOption = document.getElementById("extraHardOption");
  // arithmetic operations
   add = document.getElementById("addition");
   sub = document.getElementById("subtraction");
   multi = document.getElementById("multiplication");
   division = document.getElementById("division");



if(easyOption.checked == true || mediumOption.checked == true || hardOption.checked == true || extraHardOption.checked == true){
    if(add.checked == true || sub.checked == true || multi.checked == true || division.checked == true){
      // kesin burada bir kod ameleliği yaptım.Daha kolayını bulunca düzeltirim
        if(easyOption.checked && add.checked){
          forP = "+";
          x = Math.round(Math.random()*11);
          y = Math.round(Math.random()*11);
          document.getElementById("createdNumbers").innerHTML = x + forP + y +"= ?";
          forOperation = x+y;     
        }
        else if(easyOption.checked && sub.checked){
          forP = "-";
          x = Math.round(Math.random()*11);
          y = Math.round(Math.random()*11);
          document.getElementById("createdNumbers").innerHTML = x + forP + y +"= ?";
          forOperation = x-y; 
        }
        else if(easyOption.checked && multi.checked){
          forP = "x";
          x = Math.round(Math.random()*11);
          y = Math.round(Math.random()*11);
          document.getElementById("createdNumbers").innerHTML = x + forP + y +"= ?";
          forOperation = x*y; 
        }
        else if(easyOption.checked && division.checked){
          forP = "/";
          x = Math.round(Math.random()*11);
          y = Math.round(Math.random()*11);
          document.getElementById("createdNumbers").innerHTML = x + forP + y +"= ?";
          forOperation =(x/y).toFixed(1);
        }
        else if(mediumOption.checked && add.checked ){
          forP = "+";
          x = Math.round(Math.random()*101);
          y = Math.round(Math.random()*101);
          document.getElementById("createdNumbers").innerHTML =  x + forP + y +"= ?"; 
          forOperation = x+y;
          
        }
        else if(mediumOption.checked && sub.checked ){
          forP = "-";
          x = Math.round(Math.random()*101);
          y = Math.round(Math.random()*101);
          document.getElementById("createdNumbers").innerHTML =  x + forP + y +"= ?"; 
          forOperation = x-y;
          
        }
        else if(mediumOption.checked && multi.checked ){
          forP = "x";
          x = Math.round(Math.random()*101);
          y = Math.round(Math.random()*101);
          document.getElementById("createdNumbers").innerHTML =  x + forP + y +"= ?"; 
          forOperation = x*y;
          
        }
        else if(mediumOption.checked && division.checked ){
          forP = "/";
          x = Math.round(Math.random()*101);
          y = Math.round(Math.random()*101);
          document.getElementById("createdNumbers").innerHTML =  x + forP + y +"= ?"; 
          forOperation = (x/y).toFixed(1);
          
        }
        else if(hardOption.checked && add.checked){
          forP = "+";
          x = Math.round(Math.random()*1001);
          y = Math.round(Math.random()*1001);
          document.getElementById("createdNumbers").innerHTML =  x + forP + y +"= ?"; 
          forOperation = x+y;
          
        }
        else if(hardOption.checked && sub.checked){
          forP = "-";
          x = Math.round(Math.random()*1001);
          y = Math.round(Math.random()*1001);
          document.getElementById("createdNumbers").innerHTML =  x + forP + y +"= ?"; 
          forOperation = x-y;
          
        }
        else if(hardOption.checked && multi.checked){
          forP = "x";
          x = Math.round(Math.random()*1001);
          y = Math.round(Math.random()*1001);
          document.getElementById("createdNumbers").innerHTML =  x + forP + y +"= ?"; 
          forOperation = x*y;
          
        }
        else if(hardOption.checked && division.checked){
          forP = "/";
          x = Math.round(Math.random()*1001);
          y = Math.round(Math.random()*1001);
          document.getElementById("createdNumbers").innerHTML =  x + forP + y +"= ?"; 
          forOperation = (x/y).toFixed(1);
          
        }
        else if(extraHardOption.checked && add.checked){
          forP = "+";
          x = Math.round(Math.random()*10001);
          y = Math.round(Math.random()*10001);
          document.getElementById("createdNumbers").innerHTML =  x + forP + y +"= ?";
          forOperation = x+y;
         
        }
        else if(extraHardOption.checked && sub.checked){
          forP = "-";
          x = Math.round(Math.random()*10001);
          y = Math.round(Math.random()*10001);
          document.getElementById("createdNumbers").innerHTML =  x + forP + y +"= ?";
          forOperation = x-y;
         
        }
        else if(extraHardOption.checked && multi.checked){
          forP = "x";
          x = Math.round(Math.random()*10001);
          y = Math.round(Math.random()*10001);
          document.getElementById("createdNumbers").innerHTML =  x + forP + y +"= ?";
          forOperation = x*y;
         
        }
        else if(extraHardOption.checked && division.checked){
          forP = "/";
          x = Math.round(Math.random()*10001);
          y = Math.round(Math.random()*10001);
          document.getElementById("createdNumbers").innerHTML =  x + forP + y +"= ?";
          forOperation = (x/y).toFixed(1);
         
        }
    }else{
      alert("PLEASE,YOU SELECT ONE OF OPERATİONS");
      }
    
 }else{
    alert("PLEASE,FİRSTLY YOU SELECT DEGREES OF DİFFİCULTY");
  }
}

function check(){
    if(forOperation == document.getElementById("enteredNumber").value){
        document.body.style.backgroundColor = "#00FF00";
        document.getElementById("enteredNumber").value = "";
        
        
    }
    else{
        document.body.style.backgroundColor = "#FFA500";
        document.getElementById("enteredNumber").value = "";
    }
}
