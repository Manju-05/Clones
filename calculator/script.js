//Calculator

const display = document.getElementById("display");

function AppendToDisplay(input) {
    display.value += input;


}

function Clear() {
    display.value = "";
}

function DEL(input) {
    let currentvalue = display.value;
    if (currentvalue > 0) {
        display.value = currentvalue.slice(0, -1);
    }
    
    else {
        display.value = "";
    }
}


function Calculate() {
    try {
        display.value = eval(display.value);
    }

    catch (error) {
        display.value = "error";

    }
}