var arr = new Array();
let x = 0;
function input() {
    let element = document.getElementById("input").value;
    arr[x] = element;
    x++;
    document.getElementById("input").value = "";
}
function output() {
    let gachdong = "<hr>";
    for (x = 0; x < arr.length; x++) {
        gachdong += "Phần tử " + x + " = " + arr[x] + "<br>";
    } 
    document.getElementById("output").innerHTML = gachdong;  
}
