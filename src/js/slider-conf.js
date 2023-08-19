//https://swiperjs.com/get-started
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.cards .swiper', {
    // Optional parameters
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
        el: '.cards .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.cards .swiper-button-next',
        prevEl: '.cards .swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        480: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 2,
        },
    }
});