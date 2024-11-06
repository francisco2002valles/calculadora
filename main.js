const display = document.getElementById("display");

function appendToDisplay(input) {
    if (isNaN(Number(display.value))){
        display.value += input;
    }
    else{
        display.value += input + ("");
    }
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch (error){
        display.value = "Error"
    }
}