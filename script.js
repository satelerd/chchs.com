var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var nota = document.querySelector("ul");

function createElement() {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(input.value));
    nota.appendChild(p);
    input.value = "";    
}   

// event for clicking the button
button.addEventListener("click", function() {
    if (input.value.length > 0) {
        createElement();
    }
})

// event for pressing enter
input.addEventListener("keypress", function(ent) {
    if (input.value.length > 0 && ent.key === "Enter") {
        createElement();
    }
})