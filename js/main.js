  const burger = document.querySelector('.burger-menu');
  const menuList = document.querySelector('.menu__list');
  const body = document.querySelector('body');

  burger.addEventListener('click', function () {
    this.classList.toggle('burger-menu--active');
    menuList.classList.toggle('open');
    body.classList.toggle('lock');

  });

  $(document).ready(function () {

    $(".menu a, .header__link, .logo").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({
        scrollTop: top
      }, 1000);
    });

    $('.menu__link').click(function (e) {
      e.preventDefault();

      $('body').removeClass('lock');
      $('.menu__list').removeClass('open');
      $('.burger-menu').removeClass('burger-menu--active');

      var target = $(this).attr('href');

    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $('.header__top').addClass('header__top--scrolled');
        $('.logo').addClass('logo--scrolled');
      } else {
        $('.header__top').removeClass('header__top--scrolled');
        $('.logo').removeClass('logo--scrolled');
      }
    });
  });

  var mixer = mixitup('.works__content');