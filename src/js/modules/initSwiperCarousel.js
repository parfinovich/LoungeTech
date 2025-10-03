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

    new Swiper('.team-swiper', {
        slidesPerView: 1,
        spaceBetween: 38,
        loop: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
        },
    });

    new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 128,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            768: { slidesPerView: 1 },
            992: { slidesPerView: 2 }
        },
    });
}