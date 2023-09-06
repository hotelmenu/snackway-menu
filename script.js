const menu = document.querySelectorAll('.menu-container img')
const changingImageDiv =  document.querySelector('.changing-image')
const changingImage = document.querySelector('.changing-image img')
const clickDiv = document.querySelectorAll('.click-link')

const changePhoto = () => {
menu.forEach(image =>{
    image.onclick =() => {
        changingImageDiv.style.display = 'block'; 
        changingImage.src = image.getAttribute('src');
    }
})} 

changePhoto(); 
