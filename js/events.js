let divBox = document.querySelector('.box');

const cambiarFondo1 = (evento) => {
    console.log(evento.x + ',' + evento.y)
    console.log(evento.target);
    evento.target.classList.add('fondo-1');
}

divBox.addEventListener('mouseover', cambiarFondo1)

let bknd = document.getElementById('backend');

bknd.childNodes.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add('fondo-2');
    })
    item.addEventListener('mouseout', () => {
        item.classList.remove('fondo-2');
    })
});


/* divBox.addEventListener('mouseover', function(){
    cambiarFondo('fondo-1');
})

divBox.addEventListener('click', function(){
    cambiarFondo('fondo-2');
})

divBox.addEventListener('mouseout', function(){
    removeFondo();
})
 */


/* function cambiarFondo(fondo){
    console.log(fondo);
    divBox.classList.add(fondo);
}

function removeFondo(){
    divBox.classList.remove('fondo-1', 'fondo-2')
} */