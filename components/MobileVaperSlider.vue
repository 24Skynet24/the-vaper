<template>
  <div class="parent">
    <swiper-wrap
      class="mobile-slider"
      :slides-per-view="1"
      @slideChange="onSwiper($event)"
      @swiper="swiperInit($event)"
    >
      <swiper-slide v-for="id in Math.ceil(cardsInfo.length / 3)" :key="`mobile_slider_${id}`" class="mobile-slide">
        <vape-card v-if="!!cardsInfo[(id - 1) * 3]" :card-info="cardsInfo[(id - 1) * 3]"/>
        <vape-card v-if="!!cardsInfo[(id - 1) * 3 + 1]" :card-info="cardsInfo[(id - 1) * 3 + 1]"/>
        <vape-card v-if="!!cardsInfo[(id - 1) * 3 + 2]" :card-info="cardsInfo[(id - 1) * 3 + 2]"/>
      </swiper-slide>
    </swiper-wrap>

    <div class="mobile-slider-pagination">
      <span
        v-for="i in slidesLength"
        :key="`mobile_slider_pagination_${i}`"
        :class="{'active-pag' : activeSlide === i - 1}"
        @click="setToSlide(i)"
      >
      </span>
    </div>
    <div class="mobile-slider-navigation">
      <svg v-if="activeSlide === 1" @click="setSlide(false)" class="swiper-mobile-prev" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1720_7572)">
          <path d="M18.5313 12.1965C18.6239 12.0882 18.6239 11.9123 18.5313 11.804L16.7059 9.66642L9.01011 0.654031C8.65243 0.235412 8.16758 -2.94335e-07 7.66225 -2.50158e-07L5.03817 -2.07536e-08C4.82718 -2.30756e-09 4.72143 0.299221 4.87055 0.473726L14.5458 11.804C14.6384 11.9123 14.6384 12.0882 14.5458 12.1965L4.87055 23.5263C4.72144 23.7013 4.82718 24 5.03818 24L7.66225 24C8.16807 24 8.65292 23.7646 9.0106 23.346L16.7064 14.3336L18.5318 12.196L18.5313 12.1965Z" fill="#00A689"/>
        </g>
        <defs>
          <clipPath id="clip0_1720_7572">
            <rect width="24" height="24" fill="white" transform="matrix(-1 8.74228e-08 8.74228e-08 1 24 0)"/>
          </clipPath>
        </defs>
      </svg>

      <svg v-if="!(slidesLength === activeSlide + 1)" @click="setSlide()" class="swiper-mobile-next" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1720_7572)">
          <path d="M18.5313 12.1965C18.6239 12.0882 18.6239 11.9123 18.5313 11.804L16.7059 9.66642L9.01011 0.654031C8.65243 0.235412 8.16758 -2.94335e-07 7.66225 -2.50158e-07L5.03817 -2.07536e-08C4.82718 -2.30756e-09 4.72143 0.299221 4.87055 0.473726L14.5458 11.804C14.6384 11.9123 14.6384 12.0882 14.5458 12.1965L4.87055 23.5263C4.72144 23.7013 4.82718 24 5.03818 24L7.66225 24C8.16807 24 8.65292 23.7646 9.0106 23.346L16.7064 14.3336L18.5318 12.196L18.5313 12.1965Z" fill="#00A689"/>
        </g>
        <defs>
          <clipPath id="clip0_1720_7572">
            <rect width="24" height="24" fill="white" transform="matrix(-1 8.74228e-08 8.74228e-08 1 24 0)"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
import VapeCard from "./VapeCard";

export default {
  name: "MobileVaperSlider",
  components: {VapeCard},
  props: {
    cardsInfo: {type: Array, required: true},
  },
  data(){
    return {
      activeSlide: 0,
      mySwiper: null,
      slidesLength: Math.ceil(this.cardsInfo.length / 3)
    }
  },
  methods: {
    swiperInit(el){
      this.mySwiper = el
    },
    onSwiper(e) {
      this.activeSlide = e.activeIndex
    },
    setToSlide(index){
      this.mySwiper.slideTo(index - 1)
    },
    setSlide(state = true){
      if (state) this.mySwiper.slideNext()
      else this.mySwiper.slidePrev()
    }
  }
}
</script>

<style scoped lang="scss">

.parent {
  position: relative;
}

.mobile-slider-pagination {
  position: absolute;
  left: 50%;
  top: 107%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: rem(4);

  span {
    width: rem(10);
    height: rem(10);
    background: rgba(180, 183, 182, 1);
    border-radius: 2px;
    cursor: pointer;
    transition: .25s;
  }

  .active-pag {
    background: $green;
  }
}

.mobile-slider-navigation {
  position: absolute;
  top: 105%;
  left: 0;
  width: 100%;
}

.swiper-mobile-prev, .swiper-mobile-next {
  position: absolute;
  top: 50%;
  width: rem(40);
  height: rem(40);
}

.swiper-mobile-prev {
  transform: rotate(180deg) translateY(15%);
  left: 5%;
}

.swiper-mobile-next {
  right: 5%;
  transform: translateY(-15%);
}

</style>
