const bar = document.querySelector('.bar');
const content = document.querySelector('.content');
const navBar = document.querySelector('.nav-bar');


bar.addEventListener('click', function(){
content.classList.toggle('nav-content');
})

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () =>{
    if(lastScrollY < window.scrollY){
        navBar.classList.add('nav-hidden')
    }
    else{
        navBar.classList.remove('nav-hidden')
    }
    lastScrollY = window.scrollY
})

console.log('hey')