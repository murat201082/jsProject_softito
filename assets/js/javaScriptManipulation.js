let size = 16;
function sizePlus(){
    size += 2;
    sizeProcess(size)
}

function sizeMinus(){
size -= 2
sizeProcess(size)
}

function sizeProcess(value){
    document.getElementById("text").style.fontSize = value + "px";
}

let red = 0, green = 0, blue = 0;

function colorRed(){
    red += 50;
    document.getElementById("color").style.color = `rgb(${red}, ${green}, ${blue})`;
}
function colorGreen(){
    green += 50;
    document.getElementById("color").style.color = `rgb(${red}, ${green}, ${blue})`;
}
function colorBlue(){
    blue += 50;
    document.getElementById("color").style.color = `rgb(${red}, ${green}, ${blue})`;
}