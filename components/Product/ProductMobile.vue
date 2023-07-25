<template>
  <article class="product-mobile-wrap">
    <header class="flex-column">
      <h1>{{ productInfo.data[0].name }}</h1>
      <div class="flex-between">
        <h3>
          <b>{{ productInfo.data[0].sale_price }}</b>
          <svg class="rub-very-bold" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.80872 17V17.15H2.95872H4.98499H5.13499V17V14.1024H8.69981H8.84981V13.9524V12.4958V12.3458H8.69981H5.13499V10.6514H6.15572H6.30572H6.87617C8.22526 10.6514 9.36499 10.4554 10.2897 10.0567C11.228 9.65856 11.9438 9.08815 12.4279 8.34216L12.4287 8.34097C12.9117 7.58102 13.15 6.67806 13.15 5.63866C13.15 4.09568 12.6572 2.89861 11.655 2.0723C10.6704 1.24812 9.17284 0.85 7.19137 0.85H2.95872H2.80872V1V8.64832H1H0.85V8.79832V10.5014V10.6514H1H2.80872V12.3458H1H0.85V12.4958V13.9524V14.1024H1H2.80872V17ZM5.13499 8.64832V2.85308H7.01126C8.33409 2.85308 9.27673 3.09818 9.86819 3.56074C10.4527 4.01786 10.7562 4.72254 10.7562 5.70588C10.7562 6.4618 10.5882 7.03819 10.2695 7.45188C9.9469 7.87075 9.48048 8.17642 8.85922 8.36336L8.85828 8.36365C8.24653 8.55212 7.48944 8.64832 6.58349 8.64832H6.30572H6.15572H5.13499Z" fill="#0B0B0B" stroke="#0B0B0B" stroke-width="0.3"/>
          </svg>
        </h3>
        <stars-vaper :rating-reviews="+productInfo.totalRating" :rating-stars="+productInfo.totalRating"/>
      </div>
    </header>
    <div class="parent">
      <client-only>
        <swiper-wrap
          @swiper="swiperInit($event)"
          @slideChange="slideChange($event)"
        >
          <swiper-slide v-for="(item, id) in productInfo.images" :key="`mobile_product_${id}`" v-show="productInfo.images.length">
            <div class="img-wrap no-selection">
              <img alt="" :src="item.path" v-if="item.path">
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
          <swiper-slide v-if="!productInfo.images.length">
            <div class="img-wrap no-selection">
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
      </client-only>
      <div class="icons">
        <div class="like" @click="changeLike">
          <svg v-if="!productInfo.data[0].like" width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9686 1C23.7307 1 25.9875 2.71137 26.699 4.97127L26.8966 5.87837C27.1411 7.00057 26.9613 8.67219 26.2593 10.7056C25.5662 12.7133 24.3982 14.9733 22.7972 17.2241L22.7971 17.2242C19.9318 21.2533 16.546 24.0376 14.0004 24.9464C11.4549 24.0376 8.06905 21.2533 5.2038 17.2242L5.20374 17.2241C3.6027 14.9733 2.43396 12.7125 1.74047 10.7044C1.03801 8.67035 0.858634 6.99943 1.10404 5.87955L1.11246 5.84113L1.11784 5.80217C1.48543 3.13803 3.87557 1 7.03519 1C10.194 1 12.6936 3.23968 12.9742 5.97377L13.0663 6.87171H13.9689H14.0348H14.9367L15.0295 5.97463C15.3119 3.24553 17.8781 1 20.9686 1Z" stroke="#00A689" stroke-width="2"/>
          </svg>
          <svg v-else width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.8236 9.84452C39.1935 5.41846 35.0203 2 29.9551 2C24.8899 2 20.5366 5.56938 20.0497 10.1301H19.9556C19.4728 5.56938 15.2218 2 10.0503 2C4.87871 2 0.811827 5.41846 0.181746 9.84452C-0.681545 13.6628 1.56056 20.2345 6.2698 26.6513C10.6067 32.5622 15.8928 36.7762 20.0006 38C24.1084 36.7762 29.3946 32.5622 33.7315 26.6513C38.4407 20.2345 40.6787 13.6668 39.8195 9.84452H39.8236Z" fill="#00A689"/>
          </svg>
        </div>
        <svg class="compare" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.9986 6.14074V7.54606C27.9986 7.91877 27.8506 8.27622 27.587 8.53977C27.3235 8.80332 26.9661 8.95138 26.5935 8.95138H20.2704C20.0841 8.95138 19.9054 9.02541 19.7736 9.15719C19.6418 9.28896 19.5678 9.46768 19.5678 9.65404V12.5617C19.568 12.7841 19.5022 13.0017 19.3787 13.1867C19.2552 13.3718 19.0795 13.516 18.874 13.6012C18.6685 13.6863 18.4423 13.7086 18.2242 13.6651C18.006 13.6217 17.8056 13.5145 17.6484 13.3571L11.9338 7.63881C11.7231 7.42799 11.6048 7.14215 11.6048 6.8441C11.6048 6.54606 11.7231 6.26021 11.9338 6.04939L17.6498 0.329733C17.8071 0.172238 18.0076 0.0649915 18.2259 0.021583C18.4442 -0.0218255 18.6705 0.000558406 18.8761 0.0858981C19.0816 0.171238 19.2573 0.315692 19.3807 0.500953C19.504 0.686215 19.5697 0.903945 19.5692 1.12655V4.03276C19.5692 4.21911 19.6432 4.39784 19.775 4.52961C19.9068 4.66139 20.0855 4.73542 20.2718 4.73542H26.5949C26.9675 4.73542 27.3249 4.88348 27.5884 5.14703C27.852 5.41057 28 5.76802 28 6.14074H27.9986ZM10.3502 14.6443C10.193 14.4869 9.99259 14.3797 9.77442 14.3363C9.55625 14.2928 9.33009 14.3151 9.12458 14.4002C8.91907 14.4854 8.74344 14.6296 8.61994 14.8147C8.49643 14.9997 8.4306 15.2173 8.43077 15.4398V18.3474C8.43077 18.5337 8.35675 18.7124 8.225 18.8442C8.09324 18.976 7.91454 19.05 7.72821 19.05H1.40513C1.03247 19.05 0.675065 19.1981 0.411553 19.4616C0.14804 19.7252 0 20.0826 0 20.4553V21.8607C0 22.2334 0.14804 22.5908 0.411553 22.8544C0.675065 23.1179 1.03247 23.266 1.40513 23.266H7.72821C7.91454 23.266 8.09324 23.34 8.225 23.4718C8.35675 23.6036 8.43077 23.7823 8.43077 23.9687V26.8749C8.4306 27.0973 8.49643 27.3149 8.61994 27.4999C8.74344 27.685 8.91907 27.8292 9.12458 27.9144C9.33009 27.9995 9.55625 28.0218 9.77442 27.9783C9.99259 27.9349 10.193 27.8277 10.3502 27.6703L16.0676 21.952C16.2783 21.7412 16.3966 21.4553 16.3966 21.1573C16.3966 20.8593 16.2783 20.5734 16.0676 20.3626L10.3502 14.6443Z" fill="#00A689"/>
        </svg>
      </div>
      <span class="status flex-center" v-if="productInfo.status">{{ productInfo.status }}</span>
      <div class="mobile-slider-pagination">
        <span
          v-for="id in productInfo.images.length"
          :key="`product_mobile_pag_${id}`"
          :class="{'active-pag' : id - 1 === activeSlide}"
          @click="setSlide(id)"
        >
        </span>
      </div>
    </div>
  </article>
</template>

<script>
import StarsVaper from "../StarsVaper";

export default {
  name: "ProductMobile",
  components: {StarsVaper},
  props: {
    productInfo: { type: Object, required: true },
  },
  data(){
    return {
      activeSlide: 0,
      prMobileSlider: null,
    }
  },
  computed: {
    authUser() {
      return this.$store.state.profileAuth
    },
  },
  methods: {
    swiperInit(e) {
      this.prMobileSlider = e
    },
    slideChange(e){
      this.activeSlide = e.activeIndex
    },
    setSlide(i){
      this.activeSlide = i - 1
      this.prMobileSlider.slideTo(i - 1)
    },
    async changeLike(){
      if (!this.authUser) {
        this.$toast.error('Сначало авторизуйтесь!').goAway(2000)
        return
      }
      try {
        const headers = new Headers()
        headers.append('Authorization', this.$cookies.get('auth.TheVaper._token.laravelJWT'))
        const res = await this.$services.ProductServices.setProductFavorite(this.productInfo.data[0].moysklad_id, headers)

        this.$store.commit('changeProductLike', !this.productInfo.data[0].like)
      }

      catch (e) {
        this.$toast.error('Ошибка добавления в избранные!').goAway(2000)
        console.error('Favorites ', e)
      }
    },
  }
}
</script>

<style lang="scss" scoped>

.parent {
  position: relative;
  width: 100%;
  height: rem(360);
}

article {
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  margin-bottom: rem(10);
}

header {
  padding: rem(20) rem(24) rem(10);
}

h1 {
  @include style-font(18, 750, 140%, false);
  margin-bottom: rem(10);
  text-transform: uppercase;
  color: $black;
}

h3 {
  @include style-font(24, 750, 140%, false);
  text-transform: uppercase;
  color: $black;
}

.img-wrap {
  height: rem(320);
  width: 100%;
  margin-right: rem(20);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  svg {
    width: rem(100);
    height: rem(100);
  }
}

.icons {
  position: absolute;
  top: 3%;
  right: calc(7% + 1px);
  display: flex;
  flex-direction: column;
  gap: rem(12);
  z-index: 4;

  .like svg{
    width: rem(28);
    height: rem(26);
  }

  .compare {
    width: rem(28);
    height: rem(28);
  }
}

.status {
  position: absolute;
  top: 3%;
  left: 5%;
  padding: rem(8) rem(20);
  @include style-font(14);
  background: rgba(138, 146, 143, 1);
  color: #FFFFFF;
  border-radius: 8px;
  z-index: 4;
}

.mobile-slider-pagination {
  position: absolute;
  left: 50%;
  bottom: 3%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: rem(6);
  z-index: 7;

  span {
    background: rgba(180, 183, 182, 1);
    width: rem(10);
    height: rem(10);
    border-radius: 2px;
    display: block;
    transition: .25s;
  }

  .active-pag {
    background: $green;
  }
}


</style>
