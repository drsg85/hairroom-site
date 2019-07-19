<?php
/*
    Template Name: Franshize Page

*/
    // Social
    $social_in = get_field("social_in");
    $social_fb = get_field("social_fb");
    $social_vk = get_field("social_vk");

?>
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>

    <?php // Favicon ?>
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="./img/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="./img/favicon-16x16.png"/>
    <link rel="manifest" href="/site.webmanifest"/>
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>

    <?php // Address Bar ?>
    <meta name="msapplication-TileColor" content="#da532c"/>
    <meta name="theme-color" content="#ee7aad"/>

    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800" rel="stylesheet"/>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?><?php echo '?v=' . rand(); ?>"/>

    <title>HairRoom Franshize</title>
  </head>
  <body>
    <header class="site-header site-header--franshize" id="franshize">
      <div class="hero hero--franshize">
        <nav class="main-nav main-nav--franshize">
          <div class="logo logo--franshize"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/hr_logo_vr_white-bg.svg" alt="HairRoom logo"/></div>
          <div class="franshise__button"><a class="button button--franshize" href="<?php echo esc_url(home_url("/")); ?>">На&nbsp;главную</a></div>
          <div class="menu-icon menu-icon--franshize">
            <div class="menu-icon__middle"></div>
          </div>
          <div class="main-menu--blackout"></div>
          <nav class="main-menu main-menu--franshize">
            <ul>
              <li><a href="#about">Салон</a></li>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#price">Прайс</a></li>
              <li><a href="#gallery">Галлерея</a></li>
              <li><a href="#contacts">Контакты</a></li>
              <div class="main-menu__franchise">
                <a href="franshize.html">Франшиза</a>
              </div>
            </ul>
          </nav>
          <div class="be-friends be-friends--franshize"><a href="http://instagram.com">
              <p class="be-friends__text">Давайте дружить</p>
              <p class="be-friends__social">instagram</p></a>
          </div>
        </nav>
        <div class="hero--franshize__content">
          <div class="hero__img hero__img--franshize">
            <picture>
              <source media="(min-width: 700px)" srcset="<?php bloginfo('stylesheet_directory'); ?>/img/hero_franshize-img.jpg"/>
              <source media="(min-width: 1200px)" srcset="<?php bloginfo('stylesheet_directory'); ?>/img/hero_franshize-img.jpg"/>
              <img src="<?php bloginfo('stylesheet_directory'); ?>/img/hero_franshize-img.jpg" alt="HairRoom Image"/>
            </picture>
          </div>
          <h4 class="form__img-title">Мечтаешь<br> о собственном<br>салоне красоты?</h4>
          <p class="title__description title__description--right title__description--franshize">Франшиза Hair Room</p>
          <div class="hero__form">
            <header class="form__header"><sup class="form__suptitle">франшиза</sup>
              <h2 class="form__title">откройте собственный<br>салон hair room<br> у себя в городе</h2>
              <p class="form__call">Заполните форму и наш<br>менеджер с вами свяжется</p>
            </header>
            <form class="form__content" id="franshize-form" method="POST" action="http://localhost/HairRoom/mail.php">
              <div class="form__group">
                <input class="form__group-input" type="text" name="имя" placeholder="Имя"/>
                <input class="form__group-input" type="phone" name="телефон" placeholder="Телефон"/>
              </div>
              <div class="form__group form__group--full">
                <input class="form__group-input" type="text" name="город" placeholder="Желаемый город"/>
              </div>
              <div class="form__group form__group--full">
                <input class="form__group-input" type="email" name="электронная почта" placeholder="E-mail"/>
              </div>
              <p class="form__policy">Заполняя контактную форму<br>вы соглашаетесь с <a href="<?php echo esc_url(home_url("/"));?>/policy">политикой&nbsp;конфиденциальности</a></p>
              <div class="form__button"><input type="submit" id="franshize-submit" value="Оставить заявку" class="button button--form" /></div>
            </form>
          </div>
        </div>
        <ul class="socials socials--franchise">
          <li class="socials__item"><a class="socials__icon socials__icon--vk" href="https://vk.com/hrkgd"></a></li>
          <li class="socials__item"><a class="socials__icon socials__icon--inst" href="https://www.instagram.com/hairroomkaliningrad/"></a></li>
        </ul>
        <div class="order-popup" id="order-popup">
          <div class="order-popup__content">
            <h2 class="order-popup__title">Спасибо за заявку!</h2><a class="button order-popup__button" href="#" hidden="hidden">ОК</a>
          </div>
        </div>
      </div>
    </header>
    <footer class="site-footer site-footer--franshize">
      <div class="site-footer__container">
        <header class="site-footer__header">
          <div class="site-footer__logo"><img src="<?php bloginfo('stylesheet_directory') ;?>/img/hr_logo_hor_black.svg" alt="Hair Room логотип"/></div>
          <p class="site-footer__title-location">HAIR ROOM. Калининград</p>
          <p class="site-footer__description">Ваш идеальный салон красоты. Ждем вас в гости к нам для создания вашего неповторимого образа</p>
        </header>
        <ul class="site-footer__navigation">
          <li><a class="site-footer__navigation-title" href="#">Главная</a></li>
          <li><a href="<?php echo esc_url(home_url("/#about")); ?>">О Салоне</a></li>
          <li><a href="<?php echo esc_url(home_url("/#services")); ?>">Услуги</a></li>
          <li><a href="<?php echo esc_url(home_url("/#price")); ?>">Прайс-лист</a></li>
          <li><a href="<?php echo esc_url(home_url("/#contacts")); ?>">Контакты</a></li>
          <li><a href="">Франшиза</a></li>
        </ul>
        <div class="site-footer__contacts">
          <p class="site-footer__contacts-title">Контакты</p>
          <p class="site-footer__info-title">Адрес:</p>
          <p class="site-footer__info-text">г. Калининград ул. Иванникова, д. 12</p>
          <p class="site-footer__info-title">Телефон:</p><a class="site-footer__info-text" href="tel: 523776">+ 7 4012 52 37 76</a>
          <p class="site-footer__info-title">E-mail:</p><a class="site-footer__info-text" href="mailto: info@hairrooms.ru">info@hairrooms.ru</a>
        </div>
        <div class="site-footer__worktime">
          <p class="site-footer__contacts-title">Время работы</p>
          <p class="site-footer__info-title">Ежедневно:</p>
          <p class="site-footer__info-text">С 10 <sup>00</sup> до 20<sup>00</sup></p>
          <p class="site-footer__info-title">Воскресенье:</p>
          <p class="site-footer__info-text site-footer__info-text--bold">- выходной</p>
        </div>
        <p class="site-footer__copyright">copyright &copy; 2018<br><b>hairroom</b></p>
      </div>
    </footer>
    <script src="<?php bloginfo('stylesheet_directory'); ?>/scripts.js"></script>
  </body>
</html>