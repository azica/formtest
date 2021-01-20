
$(document).ready(function(){
   //Toggle menu
    $('.menu__icon').click(function(){
        $('.header__right-indent').toggleClass('header__right-indent-active');
        $(this).toggleClass('menu__icon-close');
    })
   
    // $('.pass').click(function(){
    //   $('.password__block').toggleClass('open');
    // })


    //Fixed header
    function myFunction() {
        window.onscroll = function() {myFunction()};
        var header = document.querySelector('.header');
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
          header.classList.add("header-sticky");
        } else {
          header.classList.remove("header-sticky");
        }
      }
      myFunction();

});