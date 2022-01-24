// BOM = Browser Object Model 
// window, alert(), prompt, comfirm

window.onload = function(){
    //window.open('https://google.com');
    //alert("Pagina cargada totalmente....");
    //prompt("Por favor ingresa tu nombre");
    //confirm("Desea eliminar este registro");
}

// DOM = Document Object Model
// objecto principal document

/*
 *  getElementById(id)
 *  getElementsByClassName(className)
 *  getElemnetsByTagName(tagName)
 *  getElementsByName(name)
 * 
 *  querySelector(selector);
 *  querySelectorAll(selector);
 * 
 *  createElement(element);
 *  createTextNode(texto);
 * 
 */

let p1 = document.getElementById('p1');
p1.style.color = 'red';
p1.innerHTML = "Hola desde Javascript y el DOM"
p1.style.border = '1px solid gray';
/* p1.id = "Hola"; */
console.log(p1);

let listas = document.getElementsByClassName('lista');
for(let i = 0; i < listas.length; i++){
    console.log(listas[i])
}
console.log(listas);

let lists = document.getElementsByTagName('li');
console.log(lists);

let frontend = document.getElementById('frontend');
frontend.getElementsByTagName('li');

let genero = document.getElementsByName('genero');
console.log(genero.forEach(elm => console.log(elm.checked, elm.value)));


let p1v2 = document.querySelector('#p1');
console.log(p1v2);

let newLists = document.querySelectorAll('.lista');

console.log(newLists);

let angular = document.querySelector('#frontend li:nth-child(3)');
angular.style.color = 'red';
console.log(angular);



let fend = document.querySelector('#frontend');
let li = document.createElement('li')
let textoLi = document.createTextNode('Meteor');
let iconTrash = document.createElement('i');
iconTrash.classList.add('fas', 'fa-trash');
li.appendChild(textoLi);
li.appendChild(iconTrash);
fend.appendChild(li);
li.parentNode.style.backgroundColor = 'gray';

let a = fend.childNodes;
a[3].remove()

fend.removeChild(fend.childNodes[1]);