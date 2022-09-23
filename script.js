
var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
    const navBtn = document.getElementById('nav-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const sideNav = document.getElementById('sidenav');
    const modal = document.getElementById('modal');
    
    navBtn.addEventListener("click", function(){
        sideNav.classList.add('show');
        modal.classList.add('showModal');
    });
    
    cancelBtn.addEventListener('click', function(){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    });
    
    window.addEventListener('click', function(event){
        if(event.target === modal){
            sideNav.classList.remove('show');
            modal.classList.remove('showModal');
        }
    });