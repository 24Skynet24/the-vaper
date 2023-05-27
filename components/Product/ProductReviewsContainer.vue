<template>
  <section class="product-reviews-container">
    <div class="product-reviews-slider" v-if="windowWidth > 768">
      <svg v-show="activeSlide" class="product-reviews-slider-arrow prev" @click="setSlide(false)"
           width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.8297 30.4912C47.0578 30.2205 47.0578 29.7807 46.8297 29.51L42.3322 24.166L23.371 1.63508C22.4898 0.588531 21.2952 0 20.0502 0H13.5849C13.065 0 12.8045 0.748051 13.1719 1.18431L37.0099 29.51C37.2381 29.7807 37.2381 30.2205 37.0099 30.4912L13.1719 58.8157C12.8045 59.2532 13.065 60 13.5849 60H20.0502C21.2964 60 22.491 59.4115 23.3722 58.3649L42.3334 35.834L46.8309 30.49L46.8297 30.4912Z" fill="#00A689"/>
      </svg>
      <client-only>
        <swiper-wrap
          :slides-per-view="getShowItems"
          @swiper="swiperInit($event)"
          @slideChange="slideChange($event)"
        >
          <swiper-slide v-for="(item, id) in productReviews" :key="`productReview_${id}`">
            <product-reviews :product-review="item"/>
          </swiper-slide>
        </swiper-wrap>
      </client-only>
      <svg v-show="!(activeSlide === productReviews.length + 1 - Math.ceil(getShowItems))" class="product-reviews-slider-arrow next" @click="setSlide()"
           width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.8297 30.4912C47.0578 30.2205 47.0578 29.7807 46.8297 29.51L42.3322 24.166L23.371 1.63508C22.4898 0.588531 21.2952 0 20.0502 0H13.5849C13.065 0 12.8045 0.748051 13.1719 1.18431L37.0099 29.51C37.2381 29.7807 37.2381 30.2205 37.0099 30.4912L13.1719 58.8157C12.8045 59.2532 13.065 60 13.5849 60H20.0502C21.2964 60 22.491 59.4115 23.3722 58.3649L42.3334 35.834L46.8309 30.49L46.8297 30.4912Z" fill="#00A689"/>
      </svg>
    </div>

    <div class="product-reviews-container-mobile flex-column" v-else>
      <product-reviews
        v-for="(item, id) in productReviews"
        :key="`mobile_review_${id}`"
        :product-review="item"
      />
    </div>
  </section>
</template>

<script>
import ProductReviews from "./ProductReviews";
import clientData from "../../mixins/clientData";
export default {
  name: "ProductReviewsContainer",
  components: {ProductReviews},
  mixins: [clientData],
  props: {
    productReviews: { type: Array, required: true },
  },
  data(){
    return {
      activeSlide: 0,
      prRwSlider: null,
    }
  },
  computed: {
    getShowItems(){
      let showItems = 2.4

      if (this.windowWidth >= 1440) showItems = 2.4
      else if (this.windowWidth >= 1280) showItems = 2.3
      else if (this.windowWidth >= 768) showItems = 2.2
      else showItems = 2.4

      return showItems
    },
  },
  methods: {
    swiperInit(e) {
      this.prRwSlider = e
    },
    slideChange(e){
      this.activeSlide = e.activeIndex
    },
    setSlide(state = true){
      state ? this.prRwSlider.slideNext() : this.prRwSlider.slidePrev()
    },
  }
}
</script>

<style scoped lang="scss">

.product-reviews-container-mobile {
  gap: rem(10);
  width: 100%;
}

.product-reviews-slider {
  height: rem(570);
  position: relative;

  .swiper-container {
    padding: rem(12) 0;
  }
}

.product-reviews-slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: rem(60);
  height: rem(60);
  z-index: 3;
  cursor: pointer;
}

.prev {
  left: -5%;
  transform: rotate(180deg) translateY(55%);
}
.next {
  right: -5%;
}

</style>
