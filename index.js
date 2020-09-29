let memory = 0;
let result = 0;
let upScreen = "";
let screenNum = "";
let process = "";

document.getElementById("acBtn").addEventListener("click", doAC);
document.getElementById("delBtn").addEventListener("click", doDel);
document.getElementById("one").addEventListener("click", do1);
document.getElementById("two").addEventListener("click", do2);
document.getElementById("three").addEventListener("click", do3);
document.getElementById("four").addEventListener("click", do4);
document.getElementById("five").addEventListener("click", do5);
document.getElementById("six").addEventListener("click", do6);
document.getElementById("seven").addEventListener("click", do7);
document.getElementById("eight").addEventListener("click", do8);
document.getElementById("nine").addEventListener("click", do9);
document.getElementById("zero").addEventListener("click", do0);
document.getElementById("divide").addEventListener("click", doDiv);
document.getElementById("multiply").addEventListener("click", doMult);
document.getElementById("sum").addEventListener("click", doSum);
document.getElementById("subs").addEventListener("click", doSub);
document.getElementById("dot").addEventListener("click", doDot);
document.getElementById("equal").addEventListener("click", doEqual);

function doAC(){
    memory = 0;
    result = 0;
    upScreen = "";
    screenNum = "";
    process = "";
    updateScreen();
};
function doDel(){
    screenNum = screenNum.slice(0,-1);
    updateScreen();
};
function do1(){screenNum += 1; updateScreen()};
function do2(){screenNum += 2; updateScreen()};
function do3(){screenNum += 3; updateScreen()};
function do4(){screenNum += 4; updateScreen()};
function do5(){screenNum += 5; updateScreen()};
function do6(){screenNum += 6; updateScreen()};
function do7(){screenNum += 7; updateScreen()};
function do8(){screenNum += 8; updateScreen()};
function do9(){screenNum += 9; updateScreen()};
function do0(){screenNum += 0; updateScreen()};
function doDiv(){
    completePrev();
    process = "÷";
    memory = result;
    upScreen = memory + " " + process;
    screenNum = "";
    updateScreen();
};
function doMult(){
    completePrev();
    process = "*";
    memory = result;
    upScreen = memory + " " + process;
    screenNum = "";
    updateScreen();
};
function doSum(){
    completePrev();
    process = "+";
    memory = result;
    upScreen = memory + " " + process;
    screenNum = "";
    updateScreen();
};
function doSub(){
    completePrev();
    process = "-";
    memory = result;
    upScreen = memory + " " + process;
    screenNum = "";
    updateScreen();
};
function doDot(){
    if(screenNum.includes(".")){
        return;
    }
    screenNum += "."; updateScreen()
};
function doEqual(){
    completePrev();
    memory = "";
    process = "";
    upScreen = memory + process;
    screenNum = result;
    updateScreen();
};

function updateScreen(){
    document.getElementById("upperScreen").innerHTML = upScreen;
    document.getElementById("lowerScreen").innerHTML = screenNum;
}

function completePrev(){
    result = parseFloat(screenNum);
    switch(process){
        case "÷":
            result = memory / result;
            break;
        case "*":
            result = memory * result;
            break;
        case "+":
            result = memory + result;
            break;
        case "-":
            result = memory - result;
            break;
    }
}
