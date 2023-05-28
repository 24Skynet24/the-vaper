<template>
  <section>
    <h3>Специально для вас</h3>
    <div class="recommendation-slider">
      <svg v-show="windowWidth > 768 && activeSlide > 0" @click="setSlide(false)" class="recommendation-slider-arrow prev" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.8297 30.4912C47.0578 30.2205 47.0578 29.7807 46.8297 29.51L42.3322 24.166L23.371 1.63508C22.4898 0.588531 21.2952 0 20.0502 0H13.5849C13.065 0 12.8045 0.748051 13.1719 1.18431L37.0099 29.51C37.2381 29.7807 37.2381 30.2205 37.0099 30.4912L13.1719 58.8157C12.8045 59.2532 13.065 60 13.5849 60H20.0502C21.2964 60 22.491 59.4115 23.3722 58.3649L42.3334 35.834L46.8309 30.49L46.8297 30.4912Z" fill="#00A689"/>
      </svg>

      <client-only>
        <swiper-wrap
          v-if="windowWidth > 768"
          :slides-per-view="itemsShow"
          :space-between="pxToVw(getSpaceBetween)"
          @swiper="swiperInit($event)"
          @slideChange="slideChange($event)"
          :class="[{'big-rec-slider' : itemsShow === 5}, {'small-rec-slider' : itemsShow === 4}]"
        >
          <swiper-slide v-for="(item, id) in recItems" :key="`recommendation${id}`">
            <vape-card :card-info="item" :show-add-info="false"/>
          </swiper-slide>
        </swiper-wrap>
        <mobile-vaper-slider v-else :cards-info="recItems"/>
      </client-only>

      <svg v-show="windowWidth > 768 && activeSlide + itemsShow < recItems.length" @click="setSlide(true)" class="recommendation-slider-arrow next" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.8297 30.4912C47.0578 30.2205 47.0578 29.7807 46.8297 29.51L42.3322 24.166L23.371 1.63508C22.4898 0.588531 21.2952 0 20.0502 0H13.5849C13.065 0 12.8045 0.748051 13.1719 1.18431L37.0099 29.51C37.2381 29.7807 37.2381 30.2205 37.0099 30.4912L13.1719 58.8157C12.8045 59.2532 13.065 60 13.5849 60H20.0502C21.2964 60 22.491 59.4115 23.3722 58.3649L42.3334 35.834L46.8309 30.49L46.8297 30.4912Z" fill="#00A689"/>
      </svg>
    </div>
  </section>
</template>

<script>
import VapeCard from "./VapeCard";
import clientData from "../mixins/clientData";
import MobileVaperSlider from "./MobileVaperSlider";

export default {
  name: "RecommendationProducts",
  components: {MobileVaperSlider, VapeCard},
  mixins: [clientData],
  props: {
    recItems: { type: Array, required: true },
    itemsShow: { type: Number, required: false, default: 5 }
  },
  data(){
    return {
      activeSlide: 0,
      recommendationSlider: null,
    }
  },
  computed: {
    getSpaceBetween(){
      let px = 140
      if (this.windowWidth < 1024) px = 100
      else if (this.windowWidth >= 1024) px = 140
      else if  (this.windowWidth >= 1920) px = 200
      else px = 140

      return px
    },
  },
  methods: {
    swiperInit(e) {
      this.recommendationSlider = e
    },
    slideChange(e){
      this.activeSlide = e.activeIndex
    },
    setSlide(state = true){
      state ? this.recommendationSlider.slideNext() : this.recommendationSlider.slidePrev()
    },
  }
}
</script>

<style scoped lang="scss">

section {
  width: 100%;
}

h3 {
  color: $black;
  @include style-font(36, 750, 140%, false);
  margin-bottom: rem(50);
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    text-align: center;
    @include style-font(18, 750, 140%, false);
    margin-bottom: rem(20);
  }
}

.big-rec-slider .swiper-slide {
  width: 19.3% !important;
  padding-left: 5px;
}

.small-rec-slider .swiper-slide {
  width: 24.1% !important;
  padding-left: 8px;
}

.recommendation-slider {
  height: rem(470);
  position: relative;

  .recommendation-slider-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: rem(60);
    height: rem(60);
    z-index: 3;
    cursor: pointer;
  }

  .prev {
    left: -6%;
    transform: rotate(180deg) translateY(55%);
  }
  .next {
    right: -6%;
  }
}

</style>
