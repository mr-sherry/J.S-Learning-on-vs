document.getElementById("myButton").addEventListener("click", function(event) {
    console.log("client X and Y",event.clientX, event.clientY); 
});

document.getElementById("myButton").addEventListener("click", function(event) {
    console.log("screen X and Y",event.screenX, event.screenY); 
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
    console.log(event.toElement); 
});
