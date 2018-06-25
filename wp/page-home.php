<?php
/*

  Template Name: Home Page

*/

// Info
$address = get_field("address");
$phone = get_field("phone");
$phone_link = get_field("phone_link");

// Slogan
$social_network = get_field("social_network");

// Hero
$hero_title = get_field("hero_title");
$hero_description = get_field("hero_description");

// City
$city = get_field("city");

// Social
$social_in = get_field("social_in");
$social_fb = get_field("social_fb");
$social_vk = get_field("social_vk");

?>

<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="<?php bloginfo("stylesheet_directory"); ?>/img/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="<?php bloginfo("stylesheet_directory"); ?>/img/favicon-16x16.png"/>
    <link rel="manifest" href="/site.webmanifest"/>
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
    <meta name="msapplication-TileColor" content="#da532c"/>
    <meta name="theme-color" content="#ee7aad"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?><?php echo '?v=' . rand(); ?>"/>
    <title>HairRoom</title>
    <?php wp_head(); ?>
  </head>
  <body>
    <header class="site-header nav-link" id="about">
      <nav class="main-nav">
        <div class="logo"><img src="<?php bloginfo("stylesheet_directory"); ?>/img/hr_logo_think.svg" alt="HairRoom Logo"/></div>
        <div class="info">
          <p class="info__address"><?php echo $address; ?></p><a class="info__phone" href="tel:<?php echo $phone_link; ?>" onClick="yaCounter38952955('Call')"><?php echo $phone; ?></a>
        </div>
        <div class="menu-icon">
          <div class="menu-icon__middle"></div>
        </div>
        <div class="main-menu--blackout"></div>
        <nav class="main-menu">
          <ul>
            <li><a href="<?php echo esc_url(home_url("/")); ?>#about">Салон</a></li>
            <li><a href="<?php echo esc_url(home_url("/")); ?>#services">Услуги</a></li>
            <li><a href="<?php echo esc_url(home_url("/")); ?>#price">Прайс</a></li>
            <li><a href="<?php echo esc_url(home_url("/")); ?>#gallery">Галлерея</a></li>
            <li><a href="<?php echo esc_url(home_url("/")); ?>#contacts">Контакты</a></li>
            <div class="main-menu__franchise"><a href="<?php echo esc_url(home_url("/franshize")); ?>">Франшиза</a></div>
          </ul>
          <div class="be-friends"><a href="http://instagram.com">
              <p class="be-friends__text">Давайте дружить</p>
              <p class="be-friends__social"><?php echo $social_network;?></p></a></div>
        </nav>
      </nav>
      <section class="hero">
        <header class="hero__header">
          <h1 class="hero__title"><?php echo $hero_title; ?></h1>
        </header>
        <p class="hero__copy"><?php echo $hero_description; ?></p>
        <div class="hero__img">
          <picture>
            <source media="(min-width: 700px)" srcset="<?php bloginfo("stylesheet_directory"); ?>/img/women-lg.png"/>
            <source media="(min-width: 1200px)" srcset="<?php bloginfo("stylesheet_directory"); ?>/img/women-lg.png"/>
            <img src="<?php bloginfo("stylesheet_directory"); ?>/img/women.png" alt="Hair Room девушка"/>
          </picture>
        </div>
        <div class="hero__button"><a class="button button--online-record ms_booking" href="#">online&nbsp;запись</a></div>
        <p class="title__description title__description--right">Hair Room <?php echo $city; ?></p>
        <ul class="socials">
          <li><a href="<?php echo $social_in; ?>" target="_blank">instagram</a></li>
          <li><a href="<?php echo $social_fb; ?>" target="_blank">facebook</a></li> 
          <li><a href="<?php echo $social_vk; ?>" target="_blank">vkontakte</a></li>
        </ul>
      </section>
    </header>
    <section class="about">
      <div class="about__img">
        <picture>
          <source media="(min-width: 700px)" srcset="<?php bloginfo("stylesheet_directory"); ?>/img/about_img-md.jpg"/>
          <source media="(min-width: 1200px)" srcset="<?php bloginfo("stylesheet_directory"); ?>/img/about_img-lg.jpg"/><img src="<?php bloginfo("stylesheet_directory"); ?>/img/about_img-sm.jpg" alt="HairRoom изображение"/>
        </picture>
      </div>
      <div class="about__board">
        <header class="about__header"><sup class="about__suptitle">О салоне</sup>
          <h2 class="about__title">HAIR ROOM — салон<br> с&nbsp;вашим характером</h2>
        </header>
        <div class="about__content">
          <div class="tabs">
            <ul class="tabs__list" id="tabs" role="tablist">
              <li class="tabs__list-item tabs__list-item--current" data-tab="tab-1"><a class="tabs__link">Миссия</a></li>
              <li class="tabs__list-item" data-tab="tab-2"><a class="tabs__link" >Подход</a></li>
              <li class="tabs__list-item" data-tab="tab-3"><a class="tabs__link" >Мастера</a></li>
            </ul>
            <div class="tabs__content tabs__content--current" id="tab-1">
              <p class="tabs__copy">Наш салон предлагает уникальные услуги европейского уровня качества, поэтому мы всегда гарантируем отменное качество вашего неповторимого образа. Уникальное оборудование и профессиональные мастера — это залог упеха студии HAIR ROOM.</p>
              <p class="tabs__copy">Позвольте себе удовольствие наслаждаться своей красотой и дарить ее любимым.</p>
            </div>
            <div class="tabs__content" id="tab-2">
              <p class="tabs__copy">Текст вкладки "подход"</p>
              <p class="tabs__copy">Наш салон предлагает уникальные услуги европейского уровня качества, поэтому мы всегда гарантируем отменное качество вашего неповторимого образа. Уникальное оборудование и профессиональные мастера — это залог упеха студии HAIR ROOM.</p>
              <p class="tabs__copy">Позвольте себе успех</p>
            </div>
            <div class="tabs__content" id="tab-3">
              <p class="tabs__copy">Текст вкладки "мастера"</p>
              <p class="tabs__copy">Наш салон предлагает уникальные услуги европейского уровня качества, поэтому мы всегда гарантируем отменное качество вашего неповторимого образа. Уникальное оборудование и профессиональные мастера — это залог упеха студии HAIR ROOM.</p>
              <p class="tabs__copy">Позвольте себе успех</p>
            </div>
          </div>
        </div>
        <div class="about__buttons"><a class="button button--pink ms_booking" href="#">Online Запись</a><a class="button button--ghost" href="#price">Прайс-Лист</a></div>
        <div class="about__logo"><img src="<?php bloginfo("stylesheet_directory"); ?>/img/hr_logo_black.svg" alt="Hairroom logo"/></div>
      </div>
    </section>
    <section class="services"><a class="nav-link" id="services"></a>
      <header class="services__header">
        <p class="services__suptitle">Мы предлагаем</p>
        <h2 class="services__title-section">Услуги</h2>
      </header>
      <div class="card__container">
        <?php 
          $args = array(
            'category_name'=> 'services_cards'
          );

          query_posts($args);

          if(have_posts()) {
            while(have_posts()) {
              the_post();
              
              // vars
              $card_title= get_field("card_title");
              $card_img = get_field("card_img");
              $card_description = get_field("card_description");
              $card_ribbon = get_field("card_ribbon");
              
        ?>
        <article class="card">
          <header class="card__title"><?php echo $card_title; ?></header>
          <div class="services__wrapper">
            <?php 
              switch ($card_ribbon) {
                case 'trend':
            ?>
                <div class="card__ribbons">
                  <p class="card__ribbon">Trend</p>
                </div>
            <?php
                break;
            ?>
              <?php 
                case 'new':
              ?>
                <div class="card__ribbons">
                <p class="card__ribbon">New</p>
                </div>

              <?php 
                break;
              ?>
              <?php 
                case 'no':
              ?>

              <?php 
                break;
                 }
              ?>
              
            <img class="card__img" src="<?php echo $card_img; ?>"/>
            <div class="card__content">
              <!-- changes class-->
              <p class="title__description title__description--left">Hair Room Услуги</p>
              <p class="card__description"><?php echo $card_description; ?></p>
              <div class="card__buttons"><a class="button button--pink button--card ms_booking" href="#">Записаться</a></div>
            </div>
          </div>
        </article>
        <?php
          }
        }
        ?>
      </div>
    </section>
    <section class="price"><a class="nav-link" id="price"></a>
      <div class="price__board">
        <header class="price__header">
          <p class="price__suptitle">Цены на услуги</p>
          <h2 class="price__section-title">Прайс -&nbsp;лист</h2>
        </header>
        <div class="price__content">
          <div class="price__group price__group--big">
            <h3 class="price__group-title">Уход<br>за волосами</h3>
            <div class="price__container">
              <div class="price-inner__column">
              <?php 
                    $args = array(
                      'category_name'=> 'keratin_rectification'
                    );

                    query_posts($args);

                    
                    if(have_posts()) {
                      while(have_posts()) {
                        the_post();
                        
                        // vars
                        $price_name = get_field("price_name");
                        $price_description = get_field("price_description");
              ?>

                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <caption class="price__column-description"><?php echo $price_description; ?></caption>
                  <tr>
                    <td>Короткие</td>
                    <td><b>2000 - 2500</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>До плеч</td>
                    <td><b>2500 - 3000</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>До лопаток</td>
                    <td><b>3000 - 3500</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>Середина спины</td>
                    <td><b>4000 - 4500</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php
                      }
                    }
                ?>
              </div>
              <div class="price-inner__column">
              <?php 
                $args = array(
                  'category_name'=> 'tinting'
                );
                query_posts($args);

                if(have_posts()) {
                  while(have_posts()) {
                    the_post();
                    
                    // vars
                    $price_name = get_field("price_name");
                    $price_description = get_field("price_description");
                  
              ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <caption class="price__column-description"><?php echo $price_description; ?></caption>
                  <tr>
                    <td>короткие</td>
                    <td><b>1500</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>Средние</td>
                    <td><b>2000</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>Длинные</td>
                    <td><b>3000</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php
                  }
                }
                ?>
              </div>
              <div class="price-inner__column">
              <?php
                $args = array(
                  'category_name'=> 'botox'
                );
                query_posts($args);

                if(have_posts()) {
                  while(have_posts()) {
                    the_post();
                    
                    // vars
                    $price_name = get_field("price_name");
                    $price_description = get_field("price_description");

              ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <caption class="price__column-description"><?php echo $price_description; ?></caption>
                  <tr>
                    <td>Короткие</td>
                    <td><b>2000</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>До плеч</td>
                    <td><b>2500 - 3000</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>До лопаток</td>
                    <td><b>3000 - 3500</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>Середина спины</td>
                    <td><b>4000 - 4500</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php
                  }
                }
                ?>
              </div>
              <div class="price-inner__column">
              <?php 
                $args = array(
                  'category_name'=> 'express_care'
                );

                query_posts($args);

                if(have_posts()) {
                  while(have_posts()) {
                    the_post();
                    
                    // vars
                    $price_name = get_field("price_name");
                    $price_description = get_field("price_description");
              ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <caption class="price__column-description"><?php echo $price_description; ?></caption>
                  <tr>
                    <td>Короткие</td>
                    <td><b>2000</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>Средние</td>
                    <td><b>2000</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>Длинные</td>
                    <td><b>3000</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php 
                  }
                }
                ?>
              </div>
              <div class="price-inner__column">
              <?php 
              $args = array(
                'category_name'=> 'stowage'
              );
                
              query_posts($args);

                if(have_posts()) {
                  while(have_posts()) {
                    the_post();
                    
                    // vars
                    $price_name = get_field("price_name");
                    $price_description = get_field("price_description");
              ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <caption class="price__column-description"><?php echo $price_description; ?></caption>
                  <tr>
                    <td>Любой длины</td>
                    <td><b>800 - 2000</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php 
                  }
                }
                ?>
              </div>
            </div>
          </div>
          <div class="price__group">
            <h3 class="price__group-title">наращивание волос</h3>
            <div class="price__container">
              <div class="price-inner__column price-inner__column--right">
                <?php
                  $args = array(
                    'category_name'=> 'hair_extension-hair_extension'
                  );
                  
                  query_posts($args);

                  if(have_posts()) {
                    while(have_posts()) {
                      the_post();
                      // vars
                      $price_name = get_field("price_name");
                      $price_description = get_field("price_description");
                ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <caption class="price__column-description"><?php echo $price_description; ?></caption>
                  <tr>
                    <td>до 150 капсул</td>
                    <td><b>4000</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>до 200 капсул</td>
                    <td><b>4500</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php
                    }
                  }
                ?>
              </div>
              <div class="price-inner__column price-inner__column--right">
              <?php
                $args = array(
                  'category_name'=> 'correction'
                );
                
                query_posts($args);
                if(have_posts()) {
                  while(have_posts()) {
                    the_post();
                    // vars
                    $price_name = get_field("price_name");
                    $price_description = get_field("price_description");
              ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name;?></caption>
                  <caption class="price__column-description"><?php echo $price_description; ?></caption>
                  <tr>
                    <td>до 150 капсул</td>
                    <td><b>4000 - 5000</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>до 200 капсул</td>
                    <td><b>5000 - 5500</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php 
                  }
                }
                ?>
              </div>
              <div class="price-inner__column price-inner__column--right">
              <?php 
                $args = array(
                  'category_name'=> 'hair_removal'
                );

                query_posts($args);

                if(have_posts()) {
                  while(have_posts()) {
                    the_post();
                    // vars
                    $price_name = get_field("price_name");
                    $price_description = get_field("price_description");
                
              ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <caption class="price__column-description"><?php echo $price_description; ?></caption>
                  <tr>
                    <td>до 150 капсул</td>
                    <td><b>2000 - 3000</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>до 200 капсул</td>
                    <td><b>3000</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php
                  }
                }
                ?>
              </div>
            </div>
          </div>
          <div class="price__group price__group--big">
            <h3 class="price__group-title">Услуги маникюра</h3>
            <div class="price__container">
              <div class="price-inner__column">
                <?php
                  $args = array(
                    'category_name'=> 'manicure_combined'
                  );
  
                  query_posts($args);
  
                  if(have_posts()) {
                    while(have_posts()) {
                      the_post();
                      // vars
                      $price_name = get_field("price_name");
                      $price_description = get_field("price_description");
                
                ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <tr>
                    <td>Без последующего покрытия</td>
                    <td><b>400</b>&nbsp;<span>руб.</span></td>
                  </tr>
                </table>
                <?php
                    }
                  }
                ?>
              </div>
              <div class="price-inner__column">
              <?php
                $args = array(
                  'category_name'=> 'gel-varnish_coating'
                );
                query_posts($args);

                if(have_posts()) {
                  while(have_posts()) {
                    the_post();

                      // vars
                      $price_name = get_field("price_name");
                      $price_description = get_field("price_description");
              ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <tr>
                    <td>Без последующего покрытия</td>
                    <td><b>1000</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php
                  }
                }
                ?>
              </div>
              <div class="price-inner__column">
              <?php 
                $args = array(
                  'category_name'=> 'express_manicure_coverage'
                );
                  query_posts($args);
                  
                  if(have_posts()) {
                    while(have_posts()) {
                      the_post();
  
                        // vars
                        $price_name = get_field("price_name");
                        $price_description = get_field("price_description");
              ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <caption class="price__column-description"><?php echo $price_description; ?></caption>
                  <tr>
                    <td>Однотонное покрытие</td>
                    <td><b>800</b><span>руб.</span></td>
                  </tr>
                </table>
                <?php 
                    }
                  }
                ?>
              </div>
              <div class="price-inner__column price-inner__column--pd">
              <?php 
                $args = array(
                  'category_name'=> 'nail_design'
                );
                  query_posts($args);
                    
                  if(have_posts()) {
                    while(have_posts()) {
                      the_post();

                      // vars
                      $price_name = get_field("price_name");
                      $price_description = get_field("price_description");
                
              ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <caption class="price__column-description"><?php echo $price_description; ?></caption>
                  <tr>
                    <td>Cтоимость работ</td>
                    <td><b>50 - 1000</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php 
                    }
                  }
                ?>
              </div>
              <div class="price-inner__column price-inner__column--right">
              <?php 
               $args = array(
                'category_name'=> 'additional_services'
              );
                query_posts($args);
                  
                if(have_posts()) {
                  while(have_posts()) {
                    the_post();

                    // vars
                    $price_name = get_field("price_name");
                    $price_description = get_field("price_description");
              
              ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <tr>
                    <td>Снятие покрытия</td>
                    <td><b>100</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>Ремонт ногтя</td>
                    <td><b>100</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>Укрепление акрилом</td>
                    <td><b>100</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php 
                  }
                }
                ?>
              </div>
            </div>
          </div>
          <div class="price__group price__group--big">
            <h3 class="price__group-title">наращивание ресниц</h3>
            <div class="price__container">
              <div class="price-inner__column">
                <?php
                  $args = array(
                    'category_name'=> 'eyelash_extension-eyelash_extension'
                  );
                  query_posts($args);
                  
                  if(have_posts()) {
                    while(have_posts()) {
                      the_post();

                      // vars
                      $price_name = get_field("price_name");
                      $price_description = get_field("price_description");
                ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <tr>
                    <td>Неполные обьем</td>
                    <td><b>1000</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>Классический обьем</td>
                    <td><b>1200</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>Полуторный обьем</td>
                    <td><b>1400</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php 
                    }
                  }
                ?>
              </div>
              <div class="price-inner__column">
                  <?php 
                    $args = array(
                      'category_name'=> 'amount'
                    );
                    query_posts($args);
                    
                    if(have_posts()) {
                      while(have_posts()) {
                        the_post();
  
                        // vars
                        $price_name = get_field("price_name");
                        $price_description = get_field("price_description");
                  ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <tr>
                    <td>2D обьем</td>
                    <td><b>1000</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>3D обьем</td>
                    <td><b>1500</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>5D обьем</td>
                    <td><b>1800</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php 
                      }
                    }
                ?>
              </div>
            </div>
          </div>
          <div class="price__group">
            <h3 class="price__group-title">Дополнительные услуги</h3>
            <div class="price__container">
              <div class="price-inner__column price-inner__column--right">
                <?php 
                  $args = array(
                    'category_name'=> 'staining_eyebrow_correction'
                  );
                  query_posts($args);
                  
                  if(have_posts()) {
                    while(have_posts()) {
                      the_post();

                      // vars
                      $price_name = get_field("price_name");
                      $price_description = get_field("price_description");
                
                ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <tr>
                    <td>Обычное</td>
                    <td><b>500</b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>Хной</td>
                    <td><b>700</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php
                    }
                  }
                ?>
              </div>
              <div class="price-inner__column price-inner__column--right">
                <?php
                  $args = array(
                    'category_name'=> 'makeup'
                  );
                  query_posts($args);
                  
                  if(have_posts()) {
                    while(have_posts()) {
                      the_post();

                      // vars
                      $price_name = get_field("price_name");
                      $price_description = get_field("price_description");
                ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <tr>
                    <td>Дневной</td>
                    <td><b>800 - 1000 </b> <span>руб.</span></td>
                  </tr>
                  <tr>
                    <td>Вечерний</td>
                    <td><b>1500 - 2000</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php
                  }
                }
                ?>
              </div>
              <div class="price-inner__column price-inner__column--right">
                <?php 
                   $args = array(
                    'category_name'=> 'wax_removal'
                  );
                  query_posts($args);
                  
                  if(have_posts()) {
                    while(have_posts()) {
                      the_post();

                      // vars
                      $price_name = get_field("price_name");
                      $price_description = get_field("price_description");
                
                ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <caption class="price__column-description"><?php echo $price_description; ?></caption>
                  <tr>
                    <td>Одна зона</td>
                    <td><b>150 - 200</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php 
                    }
                  }
                ?>
              </div>
              <div class="price-inner__column price-inner__column--right">
                <?php 
                    $args = array(
                      'category_name'=> 'haircut'
                    );
                    query_posts($args);
                    
                    if(have_posts()) {
                      while(have_posts()) {
                        the_post();

                        // vars
                        $price_name = get_field("price_name");
                        $price_description = get_field("price_description");
                  ?>
                <table class="price__table">
                  <caption class="price__caption"><?php echo $price_name; ?></caption>
                  <tr>
                    <td>Женская</td>
                    <td><b>300 - 1200</b> <span>руб.</span></td>
                  </tr>
                </table>
                <?php
                    }
                  }
                ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="shares">
      <div class="shares__content">
      <?php 
        $args = array(
          'category_name'=> 'offers'
        );

        query_posts($args);

        
        if(have_posts()) {
          while(have_posts()) {
            the_post();
            
            // vars
            $shares_title = get_field("shares_name");
            $shares_image = get_field("shares_img");
      
      ?>
        <article class="shares__card">
          <div class="shares__img">
            <img src="<?php echo $shares_image; ?>" alt="HairRoom скидки"/>
          </div>
          <header class="shares__header">
            <p class="shares__offers">Акции</p>
            <p class="shares__text"><?php echo $shares_title; ?></p>
          </header>
        </article>
      <?php
          }
        }
      ?>
      </div>
    </section>
    <section class="gallery"><a class="nav-link" id="gallery"></a>
      <header class="gallery__header">
        <h3 class="gallery__suptitle">Социальные сети</h3>
        <h4 class="gallery__title">Следите за HAIR ROOM<br>в социальных сетях</h4>
      </header>
      <div class="gallery__subscribe">
        <p class="gallery__slogan">Давайте дружить</p>
        <div class="gallery__content">
          <div class="gallery__logo"><img src="<?php bloginfo("stylesheet_directory"); ?>/img/insta_logo.png" alt="instagram logo"/></div>
          <p class="gallery__text">Для подписчиков нашей группы в Instagramv мы проводим регулярные розыгрыши призов и сертификатов на улуги нашего салона.</p><a class="button button--subscribe" href="https://www.instagram.com/hairroomkaliningrad/">Подписаться</a>
        </div>
      </div>
      <div class="instafeed" id="instafeed"></div>
    </section>
    <?php get_footer(); ?>
  </body>
</html>