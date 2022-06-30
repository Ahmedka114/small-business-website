const imgs = document.querySelectorAll('.img');

let bars = document.querySelector('.slideshow');
let mainOpen = false;
let move = document.querySelector('.showcasenav');

const current = document.querySelector('.current');
console.log(current);

let slides = document.querySelectorAll('.slide');
let intervalTime = 3000;

const nextSlide = () => {
    const current = document.querySelector('.current');
    
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current')
    }else{
        slides[0].classList.add('current');
    }
    setTimeout(()=> current.classList.remove('current'), intervalTime);
}
setInterval(nextSlide, intervalTime);

bars.addEventListener('click', moveBox);

function moveBox(e){
    move.classList.toggle('move');
    if (!mainOpen){
        bars.classList.add('active');
        mainOpen = true;
    }else{
        bars.classList.remove('active');
        mainOpen = false;
    }
}

imgs.forEach((img)=>{
    img.addEventListener('click', ()=>{
        const active = document.querySelector('.activated');
        active.classList.remove('activated');
        img.children[1].classList.toggle('activated');
    })
})