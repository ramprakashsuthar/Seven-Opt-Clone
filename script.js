let hamburger=document.querySelector('.logo>span')
let menuBar=document.querySelector('.menuBar')
hamburger.addEventListener("click",(event)=>{
    event.preventDefault();
    menuBar.classList.toggle("menuBarShow")
})