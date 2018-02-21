<?php 

// Contacts
$city = get_field("city");
$phone = get_field("phone");
$phone_link = get_field("phone_link");
$address = get_field("address");
$mail = get_field("mail");
$mail_link = get_field("mail_link");
$landmark = get_field("landmark");
$work_time = get_field("work_time");


?>
<section class="location"><a class="nav-link" id="contacts"></a>
      <div class="map-label">
        <div class="map-label__content">
          <p class="title__description title__description--right title__description--map">Hairroom <?php echo $city; ?></p>
          <p class="map-label__info-title">E-mail</p>
          <p class="map-label__info-text"><?php the_field("mail", 5); ?></p>
          <p class="map-label__info-title">Телефон</p>
          <p class="map-label__info-text"><?php the_field("phone", 5); ?></p>
          <p class="map-label__info-title">Адрес</p>
          <p class="map-label__info-text"><?php the_field("address", 5); ?><sub><?php echo $landmark;?></sub></p>
        </div>
      </div>
      <div class="location__map" id="map"></div>
</section>
<footer class="site-footer">
      <div class="site-footer__container">
        <header class="site-footer__header">
          <div class="site-footer__logo"><img src="<?php bloginfo("stylesheet_directory"); ?>/img/hr_logo_hor_black.svg" alt="Hair Room логотип"/></div>
          <p class="site-footer__title-location">HAIR ROOM. <?php the_field("city", 5); ?></p>
          <p class="site-footer__description">Ваш идеальный салон красоты. Ждем вас в гости к нам для создания вашего неповторимого образа</p>
        </header>
        <ul class="site-footer__navigation">
          <li><a class="site-footer__navigation-title" href="<?php echo esc_url(home_url("/")); ?>">Главная</a></li>
          <li><a href="<?php echo esc_url(home_url("/")); ?>#about">О Салоне</a></li>
          <li><a href="<?php echo esc_url(home_url("/")); ?>#services">Услуги</a></li>
          <li><a href="<?php echo esc_url(home_url("/")); ?>#price">Прайс-лист</a></li>
          <li><a href="<?php echo esc_url(home_url("/")); ?>#contacts">Контакты</a></li>
          <li><a href="<?php echo esc_url(home_url("/")); ?>#franschiza">Франшиза</a></li>
        </ul>
        <div class="site-footer__contacts">
          <p class="site-footer__contacts-title">Контакты</p>
          <p class="site-footer__info-title">Адрес:</p>
          <p class="site-footer__info-text"><?php the_field("address", 5); ?></p>
          <p class="site-footer__info-title">Телефон:</p><a class="site-footer__info-text" href="tel: <?php the_field("phone_link", 5); ?>"><?php the_field("phone",5) ;?></a>
          <p class="site-footer__info-title">E-mail:</p><a class="site-footer__info-text" href="mailto: <?php the_field("mail_link", 5); ?>"><?php the_field("mail",5) ;?></a>
        </div>
        <div class="site-footer__worktime">
          <p class="site-footer__contacts-title">Время работы</p>
          <p class="site-footer__info-title">Ежедневно:</p>
          <p class="site-footer__info-text"><?php the_field("work_time", 5); ?></p>
          <p class="site-footer__info-title">Воскресенье:</p>
          <p class="site-footer__info-text site-footer__info-text--bold">- выходной</p>
        </div>
        <p class="site-footer__copyright">copyright &copy; <?php echo get_the_date('Y'); ?><br><b>hairroom</b></p>
      </div>
    </footer>
    <nav class="scroll-spy">
      <ul class="scroll-spy__list">
        <li><a class="scroll-spy__link" id="about-link" data-label="Салон" href="<?php echo esc_url(home_url("/")); ?>#about">Салон</a></li>
        <li><a class="scroll-spy__link" id="services-link" data-label="Услуги" href="<?php echo esc_url(home_url("/")); ?>#services">Услуги</a></li>
        <li><a class="scroll-spy__link" id="price-link" data-label="Прайс" href="<?php echo esc_url(home_url("/")); ?>#price">Прайс</a></li>
        <li><a class="scroll-spy__link" id="gallery-link" data-label="Галлерея" href="<?php echo esc_url(home_url("/")); ?>#gallery">Галлерея</a></li>
        <li><a class="scroll-spy__link" id="contacts-link" data-label="Контакты" href="<?php echo esc_url(home_url("/")); ?>#contacts">Контакты</a></li>
      </ul>
    </nav>
    <script src="<?php bloginfo('stylesheet_directory'); ?>/map.js<?php echo '?v=' . rand(); ?>"></script>
    <script src="<?php bloginfo('stylesheet_directory'); ?>/scripts.js<?php echo '?v=' . rand(); ?>"></script>
    <script src="<?php bloginfo('stylesheet_directory'); ?>/instagram.js<?php echo '?v=' . rand(); ?>"></script>
    <script async="async" defer="defer" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBsXqiEFxIOCZHT3sEJWMMLc6HywtBL4-0&amp;callback=initMap"></script>
    <?php wp_footer(); ?>