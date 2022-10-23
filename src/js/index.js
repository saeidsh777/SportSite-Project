let containerHederMenu = document.querySelector('.containerHederMenu');

window.addEventListener('scroll',function(){
  
    containerHederMenu.classList.toggle('sticky',window.scrollY>350)
   
})


