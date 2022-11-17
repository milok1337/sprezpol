window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0; i< reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 175;

        if(revealtop < windowheight - revealpoint){ 
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
}
}

let box = document.querySelector('.box');
let h6 = document.querySelector('.h6');

box.addEventListener('click', ()=> {
    box.classList.toggle('active');
        if(h6.classList.contains('active')){
            h6.classList.remove('active');
        }
        else{
            setTimeout(() => {h6.classList.add('active')},1000);
        }
})
//--------------------------------------------------------------------

let box1 = document.querySelector('.box1');
let h61 = document.querySelector('.h61');

box1.addEventListener('click', ()=> {
    box1.classList.toggle('active');
        if(h61.classList.contains('active')){
            h61.classList.remove('active');
        }
        else{
            setTimeout(() => {h61.classList.add('active')},1000);
        }
})
//--------------------------------------------------------------------

let box2 = document.querySelector('.box2');
let h62 = document.querySelector('.h62');

box2.addEventListener('click', ()=> {
    box2.classList.toggle('active');
        if(h62.classList.contains('active')){
            h62.classList.remove('active');
        }
        else{
            setTimeout(() => {h62.classList.add('active')},1000);
        }
})

//--------------------------------------------------------------------

let p = document.querySelector('.p');

p.addEventListener('click', ()=> {
    box.classList.toggle('active');
    box1.classList.toggle('active');
    box2.classList.toggle('active');
    if(h6.classList.contains('active') || h61.classList.contains('active') || h62.classList.contains('active')){
        h6.classList.remove('active');
        h61.classList.remove('active');
        h62.classList.remove('active');
    }
    else{
        setTimeout(() => {h6.classList.add('active')},1000);
        setTimeout(() => {h61.classList.add('active')},1000);
        setTimeout(() => {h62.classList.add('active')},1000);
    }
})
