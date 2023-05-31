<template>
  <div class="parent">
    <client-only>
      <swiper-wrap
        @swiper="swiperInit($event)"
        @slideChange="slideChange($event)"
        :slides-per-view="windowWidth > 768 ? 3 : 2"
      >
        <swiper-slide v-for="(item, id) in comparisonCards" :key="`comparison_Card_${id}`">
          <comparison-vape-card :card-info="item"/>
        </swiper-slide>
      </swiper-wrap>
    </client-only>

    <svg v-if="windowWidth > 768" @click="slideNext" class="nav" width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.8295 30.4912C34.0576 30.2205 34.0576 29.7807 33.8295 29.51L29.332 24.166L10.3708 1.63508C9.48956 0.588531 8.29495 0 7.04992 0H0.584652C0.0647894 0 -0.195742 0.748051 0.171643 1.18431L24.0097 29.51C24.2378 29.7807 24.2378 30.2205 24.0097 30.4912L0.171643 58.8157C-0.195742 59.2532 0.0647894 60 0.584652 60H7.04992C8.29615 60 9.49076 59.4115 10.372 58.3649L29.3332 35.834L33.8307 30.49L33.8295 30.4912Z" fill="#00A689"/>
    </svg>
  </div>
</template>

<script>
import ComparisonVapeCard from "./ComparisonVapeCard";
import clientData from "../../mixins/clientData";
export default {
  name: "ComparisonContainer",
  components: {ComparisonVapeCard},
  mixins: [clientData],
  props: {
    comparisonCards: { type: Array, required: true },
  },
  data(){
    return {
      activeSlide: 0,
      compContSlider: null,
    }
  },
  computed: {
    getSlides(){
      return this.$store.getters.getComparisonSlider
    }
  },
  watch: {
    getSlides(e) {
      if (e || e === 0) this.compContSlider.slideTo(e)
    }
  },
  methods: {
    setSlide(){
      this.$store.commit('setGeneral', {path: 'comparisonSliderIndex', payload: this.activeSlide})
    },
    swiperInit(e) {
      this.compContSlider = e
    },
    slideChange(e) {
      this.activeSlide = e.activeIndex
      this.setSlide()
    },
    slideNext(){
      this.compContSlider.slideNext()
    },
  }
}
</script>

<style scoped lang="scss">

.parent {
  position: relative;

  .nav {
    position: absolute;
    z-index: 5;
    top: 50%;
    transform: translateY(-50%);
    right: -6%;
    width: rem(34);
    height: rem(60);
    cursor: pointer;
  }
}

.swiper-container {
  border-radius: 10px;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
}

@media screen and (max-width: 768px){
  .swiper-container {
    overflow: visible;
  }

  .swiper-slide {
    background: #FFFFFF;

    &:first-child, &:first-child > article {
      border-radius: 10px 0 0 10px;
    }

    &:last-child, &:last-child > article {
      border-radius: 0 10px 10px 0;
    }
  }
}


</style>
