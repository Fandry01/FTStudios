const hamburger = document.querySelector('.header .navbars .navlist .hamburger');
const mobile_menu = document.querySelector('.header .navbars .navlist ul');
const header = document.querySelector('.header.fill')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active')
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor ="#000";
    }else{
        header.style.backgroundColor = 'transparent';
    }
});