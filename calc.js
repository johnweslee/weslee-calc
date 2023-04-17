var inputDisplay = document.getElementById("display");

function calcFunc(inputvalue){
    inputDisplay.value += inputvalue;
}

function resultFunc(){
    var inputnumber1 = inputDisplay.value;
    var inputnumber2 = eval(inputnumber1);
    inputDisplay.value = inputnumber2;
}

function clearAll(){
    inputDisplay.value = '';
}

function clearOne(){
    inputDisplay.value = inputDisplay.value.slice(0,-1);
}