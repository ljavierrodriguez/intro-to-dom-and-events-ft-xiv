let colors = [];
let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

for (let i = 0; i < 10; i++) {
    let color = '#';
    colors.push(color + hex[Math.floor(Math.random() * hex.length)]+hex[Math.floor(Math.random() * hex.length)]+hex[Math.floor(Math.random() * hex.length)]+hex[Math.floor(Math.random() * hex.length)]+hex[Math.floor(Math.random() * hex.length)]+hex[Math.floor(Math.random() * hex.length)]);
}

let divColors = document.querySelector('.colors');
let divBox = document.querySelector('.box');

colors.forEach((color) => {
    let divColor = document.createElement('div'); // creando un elemento de tipo div
    divColor.classList.add('color'); // asignado class llamada color
    divColor.style.backgroundColor = color;
    divColor.innerHTML = color;

    divColor.addEventListener('click', function(){
        divBox.style.backgroundColor = color;
    })

    divColors.appendChild(divColor);
})
