document.querySelectorAll('.menu-container img').forEach(image =>{
    image.onclick =() =>{
        document.querySelector('.changing-image').style.display = 'block'; 
        document.querySelector('.changing-image img').src = image.getAttribute('src');
    }
})