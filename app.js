//Number printing
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let number4 = document.getElementById("number4");
let number5 = document.getElementById("number5");
let number6 = document.getElementById("number6");
let number7 = document.getElementById("number7");
let number8 = document.getElementById("number8");
let number9 = document.getElementById("number9");
let number0 = document.getElementById("number0");
//displayElement
let displayElement = document.getElementById("display");

number0.addEventListener("click", printDisplay);
number1.addEventListener("click", printDisplay);
number2.addEventListener("click", printDisplay);
number3.addEventListener("click", printDisplay);
number4.addEventListener("click", printDisplay);
number5.addEventListener("click", printDisplay);
number6.addEventListener("click", printDisplay);
number7.addEventListener("click", printDisplay);
number8.addEventListener("click", printDisplay);
number9.addEventListener("click", printDisplay);

//data storing variables
let preDisplay = [];
let actualDisplay= [];
let defaultValue = 0;

function printDisplay(e){
    let newDisplayText = e.target;
        if(displayElement.textContent === "0"){
            displayElement.textContent="";
            displayElement.textContent += newDisplayText.textContent;
        }
        else {
            displayElement.textContent += newDisplayText.textContent;
        }
        defaultValue=displayElement.textContent;
}

//Operators printing 
let equalSign = document.getElementById("equal");
let divideSign = document.getElementById("divide");
let multiplySign = document.getElementById("mult");
let addSign = document.getElementById("addition");
let minusPlus = document.getElementById("invert");
let decimalDot = document.getElementById("dot");
let backSpace = document.getElementById("back");
let clear = document.getElementById("clear");
let minus = document.getElementById("minus");

divideSign.addEventListener("click", printDisplay);
multiplySign.addEventListener("click", printDisplay);
addSign.addEventListener("click", printDisplay);
decimalDot.addEventListener("click", printDisplay);
clear.addEventListener("click", printDisplay);
minus.addEventListener("click", printDisplay);

//operations
function calculate(operator,a,b){
    switch(operator){
        case `+`:
         return Number(a) + Number(b)
        break;
        case `-`:
          if((a-b)<0){
              return ~Math.abs(a-b) + 1;
          }
          else{
             return Number(a)-Number(b)
          }  
        break;
        case `*`:
           return Number(a) * Number(b)
        break;
        case `/`:
            if(b===`0`){
                alert(`not today dear friend.`)
            }
            else{
               return Number(a)/Number(b)
            }
        break; 
    }
}

//operators logic

equalSign.addEventListener("click", operatorButtons);
backSpace.addEventListener("click", operatorButtons);
minusPlus.addEventListener("click", operatorButtons);
divideSign.addEventListener("click", operatorButtons);
multiplySign.addEventListener("click", operatorButtons);
addSign.addEventListener("click", operatorButtons);
decimalDot.addEventListener("click", operatorButtons);
clear.addEventListener("click", operatorButtons);
minus.addEventListener("click", operatorButtons);



function operatorButtons(e){
    let id = e.target.textContent;
    switch(id){
        case `+`:
            preDisplay=displayElement.textContent;
            displayElement.textContent = `0`;
            equalSign.addEventListener("click",function(){
                let r =calculate(`+`,preDisplay.slice(0,-1),defaultValue)
                displayElement.textContent= r;
            });
        return 

        break;
        case `-`:
                preDisplay=displayElement.textContent;
                displayElement.textContent = `0`;
                equalSign.addEventListener("click",function(){
                    let r =calculate(`-`,preDisplay.slice(0,-1),defaultValue)
                    displayElement.textContent= r;
                });
                
        return
        break;
        case `/`:
                preDisplay=displayElement.textContent;
                displayElement.textContent = `0`;
                equalSign.addEventListener("click",function(){
                    let r =calculate(`/`,preDisplay.slice(0,-1),defaultValue)
                    displayElement.textContent= r;
                });
                
        return
        break;
        case `*`:
                preDisplay=displayElement.textContent;
                displayElement.textContent = `0`;
                equalSign.addEventListener("click",function(){
                    let r =calculate(`*`,preDisplay.slice(0,-1),defaultValue)
                    displayElement.textContent= r;
                });
                
        return
        break;
        case `Clear`:
                displayElement.textContent = `0`;
                preDisplay= [];
                actualDisplay= [];
        return
        break;
        case `CE`:
            let actualLenght = defaultValue.lenght;
            defaultValue = defaultValue.slice(0, actualLenght-1);
            if(defaultValue===""){
                defaultValue= "0"

                displayElement.textContent = defaultValue
            }
        
        return
        break;
        case `.`:
                if(!displayElement.textContent.includes(`.`)){
                   preDisplay= displayElement.textContent += `.`;
                   displayElement.textContent = preDisplay;
                 
                }
                

        return
        break;
    }

}




