import * as flsFunctions from "./modules/functions.js";
import * as bootstrap from 'bootstrap';
import { initSwiperCarousel } from "./modules/initSwiperCarousel.js";
flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";
import { initLazyImages } from "./modules/initLazyImages.js";

const swiper = new Swiper();

document.addEventListener("DOMContentLoaded", () => {
    initLazyImages();
    initSwiperCarousel();
});