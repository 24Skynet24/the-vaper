import Vue from "vue";
import {Navigation, Pagination, } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'


SwiperCore.use([Navigation, Pagination])
Vue.component('SwiperWrap', Swiper)
Vue.component('SwiperSlide', SwiperSlide)
