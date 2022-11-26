window.addEventListener('scroll', reveal);
function reveal(){
    let reveals = document.querySelectorAll('.reveal');

    for(let i=0; i< reveals.length; i++){
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 175;

        if(revealtop < windowheight - revealpoint){ 
            reveals[i].classList.add('active');
        }
}
}







let box = document.querySelector('.box');
let h6 = document.querySelector('.h6');
let box_arrow = document.querySelector('.box_arrow');

box.addEventListener('click', ()=> {
    box.classList.toggle('active');
    box_arrow.classList.toggle('active');
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
let box_arrow1 = document.querySelector('.xd');
box1.addEventListener('click', ()=> {
    box1.classList.toggle('active');
    box_arrow1.classList.toggle('active');
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
let box_arrow2 = document.querySelector('.box_arrow2');
box2.addEventListener('click', ()=> {
    box2.classList.toggle('active');
    box_arrow2.classList.toggle('active');
        if(h62.classList.contains('active')){
            h62.classList.remove('active');
        }
        else{
            setTimeout(() => {h62.classList.add('active')},1000);
        }
})


//--------------------------------------------------------------------

/*let p = document.querySelector('.p');

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
*/