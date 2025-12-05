// Change Starbucks cup image on button click and change background color
let  imagem = document.querySelector('.imagem-copo');

function changeImage(img, color) {
    imagem.src = img;
    document.querySelector('.circulo').style.background = color;
}
