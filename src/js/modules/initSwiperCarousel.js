export function initSwiperCarousel() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 91,
        allowTouchMove: false,
        speed: 6000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
        },
    });
}