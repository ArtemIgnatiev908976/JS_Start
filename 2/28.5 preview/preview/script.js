//console.log(document.body)

// console.log(document.body.childNodes); //получить все узлы

//
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.firstElementChild);
//console.log(document.querySelector('#current').parentNode.parentNode); получение элемента детей

// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);  // получение следующего элемента

for (let node of document.body.childNodes){
if (node.nodeName == '#text'){
    continue;
}
    console.log(node)
}

