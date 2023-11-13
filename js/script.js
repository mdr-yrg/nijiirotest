(() => {
    document.addEventListener("DOMContentLoaded", function () {

        const hamburger = document.querySelector('#js-hamburger');
        const nav = document.querySelector('#js-slide-menu');

        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active')

        });

        nav.addEventListener('click', function () {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });


       
     const show = document.querySelectorAll('.item');

     show.forEach(function(fadeIn){
        const windowHeight = window.innerHeight;

        window.addEventListener('scroll',function(){
            const offset = fadeIn.getBoundingClientRect().top;
            const scroll = this.window.scrollY;

            if(scroll > offset - windowHeight + 250){
                fadeIn.classList.add('show');
            }
            else{
                fadeIn.classList.remove('show');
            }
        });

     });

    });
})();