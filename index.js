const display = document.getElementById("display");

function appendToDisplay(val) {
    display.value +=val;
}

function showResult(){
    try{
        display.value = eval(display.value);
    }
    catch(e){
        display.value = "Error";
    }
}

function clearAll(){
    display.value = "";
}