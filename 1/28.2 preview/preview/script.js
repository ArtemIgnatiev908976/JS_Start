const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

btn.onclick = function(){
    alert('Click')
}
let i = 0;

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    i++;
    if(i == 1){
        btn.removeEventListener('click',deleteElement);
    }
};



btn.addEventListener('click',deleteElement);
overlay.addEventListener('click',deleteElement);


btn.forEach(item =>{
    item.addEventListener('click', deleteElement);
});


const link = document.querySelector('a');
link.addEventListener('click', (event)=>{
    event.preventDefault();


    console.log(event.target);
})
