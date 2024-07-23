<template>
  <div class="product-slider" :class="{'product-slider-unchildren' : !slidesContent.length}">
    <client-only>
      <div class="parent-slider">
        <swiper-wrap
          @slideChange="slideChange($event, true)"
          @swiper="swiperInit($event, true)"
        >
          <swiper-slide v-for="(item, id) in slidesContent" :key="`product_1_slide_${id}`" v-show="slidesContent.length">
            <div class="img-wrap flex-center">
              <img v-if="slidesContent.length" :src="item.path" alt="" style="height: auto;">
              <svg v-else fill="none" height="79" viewBox="0 0 78 79" width="78" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M0.511963 0.567993L31.1379 78.5369H42.8385L77.4548 0.567993H63.6353L33.6815 68.6664L7.33744 0.567993H0.511963Z"
                      fill="#8A928F"
                      fill-rule="evenodd"/>
                <path
                  d="M43.0073 78.7968H30.9609L0.130737 0.308472H7.51541L33.6969 67.9864L63.4659 0.308472H77.8544L43.0073 78.7968ZM31.3149 78.2772H42.6696L77.0553 0.828047H63.805L33.6662 69.3466L7.15933 0.828047H0.893042L31.3149 78.2772Z"
                  fill="#8A928F"/>
                <path clip-rule="evenodd" d="M77.8702 48.3439L64.3372 78.8349H77.8702V48.3439Z" fill="#8A928F"
                      fill-rule="evenodd"/>
                <path clip-rule="evenodd" d="M58.7285 0.303589L33.9888 56.9946L23.606 30.1056L35.9661 0.303589H58.7285Z"
                      fill="#8A928F" fill-rule="evenodd"/>
                <path clip-rule="evenodd" d="M0.199707 16.2979L24.2385 78.8382H0.199707V16.2979Z" fill="#8A928F"
                      fill-rule="evenodd"/>
              </svg>
            </div>
          </swiper-slide>
          <swiper-slide v-if="!slidesContent.length">
            <div class="img-wrap flex-center">
              <svg fill="none" height="79" viewBox="0 0 78 79" width="78" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M0.511963 0.567993L31.1379 78.5369H42.8385L77.4548 0.567993H63.6353L33.6815 68.6664L7.33744 0.567993H0.511963Z"
                      fill="#8A928F"
                      fill-rule="evenodd"/>
                <path
                  d="M43.0073 78.7968H30.9609L0.130737 0.308472H7.51541L33.6969 67.9864L63.4659 0.308472H77.8544L43.0073 78.7968ZM31.3149 78.2772H42.6696L77.0553 0.828047H63.805L33.6662 69.3466L7.15933 0.828047H0.893042L31.3149 78.2772Z"
                  fill="#8A928F"/>
                <path clip-rule="evenodd" d="M77.8702 48.3439L64.3372 78.8349H77.8702V48.3439Z" fill="#8A928F"
                      fill-rule="evenodd"/>
                <path clip-rule="evenodd" d="M58.7285 0.303589L33.9888 56.9946L23.606 30.1056L35.9661 0.303589H58.7285Z"
                      fill="#8A928F" fill-rule="evenodd"/>
                <path clip-rule="evenodd" d="M0.199707 16.2979L24.2385 78.8382H0.199707V16.2979Z" fill="#8A928F"
                      fill-rule="evenodd"/>
              </svg>
            </div>
          </swiper-slide>
        </swiper-wrap>
      </div>
      <div class="children-slider" v-show="slidesContent.length">
        <svg @click="setSlideIndex('', false, false)" class="children-slider-arrow prev" fill="none" height="40" viewBox="0 0 40 40" width="40"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.11573 20.3275C8.96142 20.147 8.96142 19.8538 9.11573 19.6733L12.1581 16.1107L24.9845 1.09005C25.5806 0.392354 26.3887 0 27.2309 0L31.6043 0C31.956 0 32.1322 0.498701 31.8837 0.789543L15.7584 19.6733C15.604 19.8538 15.604 20.147 15.7584 20.3275L31.8837 39.2105C32.1322 39.5021 31.956 40 31.6043 40H27.2309C26.3879 40 25.5798 39.6076 24.9836 38.9099L12.1573 23.8893L9.11492 20.3267L9.11573 20.3275Z"
            fill="#8A928F"/>
        </svg>

        <div class="children-slider-pag">
          <swiper-wrap
            :slides-per-view="5"
            :space-between="10"
            @slideChange="slideChange($event, false)"
            @swiper="swiperInit($event, false)"
          >
            <swiper-slide v-for="(item, id) in slidesContent" :key="`product_pag_item_${id}`">
              <div
                :class="{'green-border' : id === activeSlide}"
                class="children-slider-pag-item img-wrap flex-center"
                @click="setSlideIndex(id)"
              >
                <img v-if="item.path" :src="item.path" alt="">
                <svg v-else fill="none" height="79" viewBox="0 0 78 79" width="78" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd"
                        d="M0.511963 0.567993L31.1379 78.5369H42.8385L77.4548 0.567993H63.6353L33.6815 68.6664L7.33744 0.567993H0.511963Z"
                        fill="#8A928F"
                        fill-rule="evenodd"/>
                  <path
                    d="M43.0073 78.7968H30.9609L0.130737 0.308472H7.51541L33.6969 67.9864L63.4659 0.308472H77.8544L43.0073 78.7968ZM31.3149 78.2772H42.6696L77.0553 0.828047H63.805L33.6662 69.3466L7.15933 0.828047H0.893042L31.3149 78.2772Z"
                    fill="#8A928F"/>
                  <path clip-rule="evenodd" d="M77.8702 48.3439L64.3372 78.8349H77.8702V48.3439Z" fill="#8A928F"
                        fill-rule="evenodd"/>
                  <path clip-rule="evenodd"
                        d="M58.7285 0.303589L33.9888 56.9946L23.606 30.1056L35.9661 0.303589H58.7285Z"
                        fill="#8A928F" fill-rule="evenodd"/>
                  <path clip-rule="evenodd" d="M0.199707 16.2979L24.2385 78.8382H0.199707V16.2979Z" fill="#8A928F"
                        fill-rule="evenodd"/>
                </svg>
              </div>
            </swiper-slide>
          </swiper-wrap>
        </div>

        <svg @click="setSlideIndex('', false)" class="children-slider-arrow next" fill="none" height="40" viewBox="0 0 40 40" width="40"
             xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1173_4427)">
            <path
              d="M30.8843 20.3275C31.0386 20.147 31.0386 19.8538 30.8843 19.6733L27.8419 16.1107L15.0155 1.09005C14.4194 0.392354 13.6113 -4.90558e-07 12.7691 -4.1693e-07L8.39566 -3.45893e-08C8.04399 -3.84593e-09 7.86775 0.498701 8.11627 0.789543L24.2416 19.6733C24.396 19.8538 24.396 20.147 24.2416 20.3275L8.11628 39.2105C7.86776 39.5021 8.044 40 8.39566 40L12.7691 40C13.6121 40 14.4202 39.6076 15.0164 38.9099L27.8427 23.8893L30.8851 20.3267L30.8843 20.3275Z"
              fill="#8A928F"/>
          </g>
          <defs>
            <clipPath id="clip0_1173_4427">
              <rect fill="white" height="40" transform="matrix(-1 8.74228e-08 8.74228e-08 1 40 0)" width="40"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "ProductSlider",
  props: {
    slidesContent: {type: Array, required: true},
  },
  data() {
    return {
      activeSlide: 0,
      parentSlider: null,
      childrenSlider: null,
    }
  },
  methods: {
    swiperInit(e, state = true) {
      state ? this.parentSlider = e : this.childrenSlider = e
    },
    slideChange(e, state = true) {
      this.activeSlide = e.activeIndex
      state ? this.childrenSlider.slideTo(this.activeSlide) : this.parentSlider.slideTo(this.activeSlide)
    },
    setSlideIndex(index, state = true, direction = true) {
      if (state) {
        this.activeSlide = index
        this.childrenSlider.slideTo(index)
        this.parentSlider.slideTo(index)
      }
      else {
        if (direction) {
          if (this.slidesContent.length - 1 > this.activeSlide) ++this.activeSlide
          this.childrenSlider.slideTo(this.activeSlide)
          this.parentSlider.slideTo(this.activeSlide)
        }
        else {
          if (0 < this.activeSlide) --this.activeSlide
          this.childrenSlider.slideTo(this.activeSlide)
          this.parentSlider.slideTo(this.activeSlide)
        }
      }
    },
  }
}
</script>

<style scoped lang="scss">

.product-slider {
  width: rem(652);
  height: rem(760);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-slider-unchildren {
  height: rem(650);
}

.parent-slider {
  width: 100%;
  height: rem(650);
  border-radius: 10px;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);

  .swiper-container {
    border-radius: 10px;
  }
}

.children-slider {
  width: 100%;
  height: rem(90);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .children-slider-pag {
    height: 100%;
    width: 77%;
    margin: 0 auto;
  }

  .children-slider-pag-item {
    width: rem(92);
    height: 100%;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid #FFFFFF;

    img {
      border-radius: 10px;
    }
  }

  .green-border {
    border-color: $green;
  }

  .children-slider-arrow {
    cursor: pointer;
    width: rem(40);
    height: rem(40);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 4;
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }
}

.img-wrap {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
}

img {
  width: 100%;
  height: auto;
  max-height: 100%;
  user-select: none !important;
}

</style>
