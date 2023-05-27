<template>
  <section class="banner">
    <client-only>
      <div class="parent banner-wrap">
        <swiper-wrap :loop="true" @swiper="swiperInit($event)" @slideChange="slideChange($event)">
          <swiper-slide
            v-for="(item, key) in slides"
            :key="`banner_slide_${key}`"
            class="banner-slide"
          >
            <div class="container">
              <h2>{{ item.title }}</h2>
              <p>{{ item.txt }}</p>
            </div>
            <div class="triangle"></div>
          </swiper-slide>
        </swiper-wrap>

        <div class="banner-pagination">
          <span
            class="banner-pagination-item"
            :class="{'active-pag' : item === activeSlide || item === activeSlide - slides.length || activeSlide + slides.length === item}"
            style="color: #FFFFFF"
            v-for="(item, id) in slides.length"
            :key="`banner_slide_${id}`"
            @click="setToSlide(item)"
          >
          </span>
        </div>
      </div>
    </client-only>
  </section>
</template>

<script>

export default {
  name: "BannerCmp",
  data(){
    return {
      slides: [
        {
          title: '1 Новый магазин!',
          txt: 'Воронеж \n ул. Куколкина, 32',
        },
        {
          title: '2 Новый магазин!',
          txt: 'Воронеж \n ул. Куколкина, 32',
        },
        {
          title: '3 Новый магазин!',
          txt: 'Воронеж \n ул. Куколкина, 32',
        },
      ],
      bannerSwiper: null,
      activeSlide: null,
    }
  },
  methods: {
    swiperInit(e){
      this.bannerSwiper = e
    },
    slideChange(e){
      this.activeSlide = e.activeIndex
    },
    setToSlide(index) {
      this.bannerSwiper.slideTo(index)
    }
  },
}

</script>

<style scoped lang="scss">

section {
  width: 100%;
  height: rem(800);
  position: relative;

  @media screen and (max-width: 768px) {
    height: rem(360);
  }
}

.banner-wrap, .banner-slide {
  width: 100%;
  height: 100%;
}

.banner-slide {
  background-image: url("../assets/img/testBanner.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #FFFFFF;
  position: relative;
  background-color: $black;


  @media screen and (max-width: 768px) {
    background: no-repeat linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url("../assets/img/testBanner.png");
    background-size: 100% 100%;
  }

  .container {
    position: absolute;
    z-index: 2;
    left: 10%;
    transform: translateX(-2%);
    top: 20%;
  }

  h2 {
    @include style-font(64, 750, 140%, false);
    max-width: rem(764);

    @media screen and (max-width: 768px) {
      @include style-font(28, 700, 140%, false);
    }
  }

  p {
    max-width: rem(654);
    @include style-font(54, 750, 140%, false);

    @media screen and (max-width: 768px) {
      max-width: 60%;
      @include style-font(24, 700, 140%, false);
    }
  }

  .triangle {
    position: absolute;
    left: 0;
    top: 8%;
    width: 0;
    height: 0;
    border-top: rem(736) solid rgba(11, 11, 11, 0.8);
    border-right: rem(1350) solid transparent;
    filter: blur(7px);
    z-index: 1;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}

.banner-pagination {
  position: absolute;
  bottom: 6%;
  left: 9%;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: rem(10);

  @media screen and (max-width: 768px){
    display: none;
  }

  span {
    width: rem(20);
    height: rem(20);
    background: #FFFFFF;
    border-radius: 2px;
    transition: .25s;
    cursor: pointer;
  }

  .active-pag {
    background: $black;
  }
}


</style>
