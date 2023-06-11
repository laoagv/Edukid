import React, { useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MySlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    
      return (
        <Slider {...settings}>
          <div class="swiper-slide">
                    <div class="capabilities_content_container">
                        <h3>Автопроверка тестов</h3>
                        <p>При создании теста вы сможете подключить автопроверку по фотографиям. Сервис сам распознает ответы и выставит оценку по вашим критериям.</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="capabilities_content_container">
                        <h3>Конструктор <br/> тестов и <br/>заданий</h3>
                        <p>Создавайте задания разных форматов: тесты, кроссворды, задания на поиск ошибок в тексте или заполнение пропусков. Используйте аудио- и визуальные материалы, таблицы.</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="capabilities_content_container">
                        <h3>Умные уведомления</h3>
                        <p>Настройте уведомления об оценках, домашних заданиях или приближающихся сроках и выберете куда хотите получать сообщения.</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="capabilities_content_container">
                        <h3>Режим чтения</h3>
                        <p class="selected-p">При задании дз где нужно что-либо прочитать у преподавателей будет возможность добавить файл с текстом или книгой, а у ученика в удобном режиме прочитать то, что задано в соответствии с СанПиН</p>
                    </div>
                </div>
        </Slider>
      );
    }

export default MySlider;
{/* <div class="swiper container">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="capabilities_content_container">
                        <h3>Автопроверка тестов</h3>
                        <p>При создании теста вы сможете подключить автопроверку по фотографиям. Сервис сам распознает ответы и выставит оценку по вашим критериям.</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="capabilities_content_container">
                        <h3>Конструктор <br/> тестов и <br/>заданий</h3>
                        <p>Создавайте задания разных форматов: тесты, кроссворды, задания на поиск ошибок в тексте или заполнение пропусков. Используйте аудио- и визуальные материалы, таблицы.</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="capabilities_content_container">
                        <h3>Умные уведомления</h3>
                        <p>Настройте уведомления об оценках, домашних заданиях или приближающихся сроках и выберете куда хотите получать сообщения.</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="capabilities_content_container">
                        <h3>Режим чтения</h3>
                        <p class="selected-p">При задании дз где нужно что-либо прочитать у преподавателей будет возможность добавить файл с текстом или книгой, а у ученика в удобном режиме прочитать то, что задано в соответствии с СанПиН</p>
                    </div>
                </div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    </div> */}