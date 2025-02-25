
let imageUrlInput = document.getElementById('imageUrlInput');
let addBtn = document.getElementById('addImageBtn');
let listImages = document.getElementById('list-images');

    
    listImages.addEventListener('click', function(e) {
        if (e.target.tagName ==="IMG") {
            e.target.parentNode.remove(); 
            alert("Removing clicked picture");
        }
    });

addBtn.addEventListener('click', function() {
    let imageUrl = imageUrlInput.value;

    if (imageUrl) {
        let li = document.createElement('li');
        
        let img = document.createElement('img');
        img.src = imageUrl;

        li.appendChild(img);
        listImages.appendChild(li);

    } 
    else {
        alert('Please enter image URL.');
    }
});
