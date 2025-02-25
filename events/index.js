let images=document.getElementById("list-images").addEventListener("click",function (e) {
    console.log(e.target.parentNode);
        console.log(e.target.tagName);
        if (e.target.tagName === "IMG") {
            e.target.parentNode.remove();
            alert("Removing clicked picture ")
        }
})
