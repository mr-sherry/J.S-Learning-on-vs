document.getElementById("myButton").addEventListener("click", function(event) {
    console.log(event.clientX, event.clientY); 
});

document.getElementById("myButton").addEventListener("click", function(event) {
    console.log(event.screenX, event.screenY); 
});

document.addEventListener("keydown", function(event) {
    if (event.altKey) {
        console.log("Alt key was pressed!");
    }
    if (event.ctrlKey) {
        console.log("Ctrl key was pressed!");
    }
    if (event.shiftKey) {
        console.log("Shift key was pressed!");
    }
});


document.addEventListener("keydown", function(event) {
    console.log(event.keyCode); 
});

document.getElementById("hello").addEventListener("mouseover", function(event) {
    console.log(event.toElement);  // Output: <div> or another element within #myDiv
});
