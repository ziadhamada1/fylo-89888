// alert('Hello, my frind please click here');
const mneu = document.getElementById('menu');
const action = document.getElementById('actions');

menu.addEventListener('click', ()=> {
    ziad();
});

function ziad(){

    menu.classList.toggle('is-active');
    actions.classList.toggle('is-active');
    
}

let btn =document.querySelector('.up');

window.onscroll = function (){
if (window.scrollY>=600){
    btn.style.display='block'; 
}else{
    btn.style.display='none'; 
}

}
btn.onclick = function () {
window.scrollTo({
 left: 0,
    top: 0 ,
    behavior:"smooth",
});

};