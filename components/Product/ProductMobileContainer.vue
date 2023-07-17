<template>
  <div class="product-mobile flex-column" @click.stop="$emit('close')">
    <product-mobile :product-info="productInfo"/>
    <div class="product-mobile-buttons flex-column">
      <button
        class="color no-selection"
        :class="[{'green-border' : Object.keys(activeModifications).length && !colorState}]"
        v-if="Object.keys(productInfo.modification).length"
      >
        <span class="ellipsis" @click="openModifications">
          {{ modificationsChar }}
        </span>

        <div class="list" v-if="colorState && buttonsState">
          <div class="flex-column" v-for="(modification, id) in productInfo.modification" :key="`modification_mobile_${id}`">
            <div class="title">
              <span>{{ id }}</span>
            </div>
            <ul>
              <li v-for="(item, key) in modification" :key="`product_mobile_color_${key}`" @click="changeModification(item, id, $event)">
                <div class="green"></div>
                <span :class="{'color-green' : item === activeModifications[id]}">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </button>

      <button class="map no-selection">
        <div class="flex-align-center map-content" @click="mapState = true; colorState = false; $emit('setBtnState')">
          <svg class="map" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.7" d="M38.7671 28.6862L27.6116 11.3071C27.5154 11.6693 27.387 12.0173 27.2286 12.3494L38.0368 29.1872C38.1862 29.3937 38.0726 29.5786 38.0346 29.6303C37.9966 29.6823 37.8534 29.8451 37.6124 29.7608L27.3018 26.1615C27.2037 26.1275 27.1027 26.1088 27.0017 26.0998L24.1548 19.0517C24.0538 19.5661 23.956 20.1363 23.8661 20.701L26.1459 26.3452C26.1212 26.3635 26.0929 26.3751 26.0694 26.3953L20.6395 31.0633L14.2759 13.0005L16.2209 11.9424C16.1121 11.663 16.0225 11.3746 15.9561 11.077L13.8336 12.2318C13.7485 12.2804 13.6461 12.295 13.5514 12.269L7.52322 10.6649C7.1049 10.5546 6.66576 10.6627 6.34772 10.957L0.405799 16.4503C0.0926077 16.7404 -0.0527249 17.1647 0.0172769 17.5855L2.72773 33.9436C2.79991 34.3795 3.08694 34.7393 3.49484 34.9058C3.64962 34.9689 3.81118 35 3.97153 35C4.23386 35 4.49304 34.9167 4.71346 34.7546L12.3047 29.1706C12.4093 29.0934 12.5488 29.0766 12.668 29.1269L19.7585 32.0789C20.1994 32.2621 20.6971 32.1826 21.0597 31.8714L26.6456 27.0693C26.7459 26.9828 26.8854 26.9558 27.0109 27L37.3215 30.5993C37.8522 30.7849 38.41 30.6119 38.7453 30.16C39.0798 29.7078 39.0832 29.1213 38.7673 28.6862H38.7671ZM4.18953 34.0386C4.03839 34.1499 3.88651 34.1071 3.82838 34.0836C3.77049 34.06 3.6317 33.9844 3.60069 33.7981L0.890241 17.4394C0.86941 17.3148 0.912768 17.1892 1.00554 17.1032L6.79946 11.7468L11.8759 28.4026C11.8449 28.4216 11.8103 28.4332 11.7807 28.4549L4.18953 34.0386ZM12.7513 28.2381L7.68866 11.6275L13.3242 13.1269C13.3445 13.1325 13.3653 13.1327 13.3859 13.1371L19.714 31.0988L13.0076 28.3067C12.9247 28.2724 12.8383 28.2535 12.7516 28.2379L12.7513 28.2381Z" fill="black"/>
            <path d="M26.5735 9.77396C26.5735 7.13734 24.4427 5 21.8141 5C19.1855 5 17.0547 7.13734 17.0547 9.77396C17.0547 10.8877 17.4381 11.9101 18.0754 12.7221H18.0708C18.0708 12.7221 18.0846 12.7379 18.104 12.7602C18.1374 12.802 18.1721 12.8423 18.2069 12.8827C18.5618 13.3125 19.5195 14.5457 19.9291 15.7975C20.4366 17.3488 21.0145 22.0997 21.0145 22.0997V22.1305C21.0145 22.5006 21.3137 22.8004 21.6823 22.8004H21.9454C22.3143 22.8004 22.6134 22.5003 22.6134 22.1305V22.0997C22.6134 22.0997 23.1911 17.3488 23.6986 15.7975C24.1082 14.5457 25.0659 13.3125 25.4208 12.8827C25.4556 12.8421 25.4903 12.8018 25.5237 12.7602C25.5431 12.7376 25.5566 12.7221 25.5566 12.7221H25.552C26.1896 11.9098 26.573 10.8877 26.573 9.77396H26.5735ZM21.8141 12.4312C20.3174 12.4312 19.1039 11.2142 19.1039 9.71298C19.1039 8.21172 20.3172 6.99448 21.8141 6.99448C23.311 6.99448 24.5243 8.21147 24.5243 9.71298C24.5243 11.2145 23.311 12.4312 21.8141 12.4312Z" fill="#01A689"/>
          </svg>
          <span>Наличие в магазинах</span>
        </div>

        <div class="list" v-if="mapState && buttonsState">
          <div class="title">
            <svg class="map" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.7" d="M38.7671 28.6862L27.6116 11.3071C27.5154 11.6693 27.387 12.0173 27.2286 12.3494L38.0368 29.1872C38.1862 29.3937 38.0726 29.5786 38.0346 29.6303C37.9966 29.6823 37.8534 29.8451 37.6124 29.7608L27.3018 26.1615C27.2037 26.1275 27.1027 26.1088 27.0017 26.0998L24.1548 19.0517C24.0538 19.5661 23.956 20.1363 23.8661 20.701L26.1459 26.3452C26.1212 26.3635 26.0929 26.3751 26.0694 26.3953L20.6395 31.0633L14.2759 13.0005L16.2209 11.9424C16.1121 11.663 16.0225 11.3746 15.9561 11.077L13.8336 12.2318C13.7485 12.2804 13.6461 12.295 13.5514 12.269L7.52322 10.6649C7.1049 10.5546 6.66576 10.6627 6.34772 10.957L0.405799 16.4503C0.0926077 16.7404 -0.0527249 17.1647 0.0172769 17.5855L2.72773 33.9436C2.79991 34.3795 3.08694 34.7393 3.49484 34.9058C3.64962 34.9689 3.81118 35 3.97153 35C4.23386 35 4.49304 34.9167 4.71346 34.7546L12.3047 29.1706C12.4093 29.0934 12.5488 29.0766 12.668 29.1269L19.7585 32.0789C20.1994 32.2621 20.6971 32.1826 21.0597 31.8714L26.6456 27.0693C26.7459 26.9828 26.8854 26.9558 27.0109 27L37.3215 30.5993C37.8522 30.7849 38.41 30.6119 38.7453 30.16C39.0798 29.7078 39.0832 29.1213 38.7673 28.6862H38.7671ZM4.18953 34.0386C4.03839 34.1499 3.88651 34.1071 3.82838 34.0836C3.77049 34.06 3.6317 33.9844 3.60069 33.7981L0.890241 17.4394C0.86941 17.3148 0.912768 17.1892 1.00554 17.1032L6.79946 11.7468L11.8759 28.4026C11.8449 28.4216 11.8103 28.4332 11.7807 28.4549L4.18953 34.0386ZM12.7513 28.2381L7.68866 11.6275L13.3242 13.1269C13.3445 13.1325 13.3653 13.1327 13.3859 13.1371L19.714 31.0988L13.0076 28.3067C12.9247 28.2724 12.8383 28.2535 12.7516 28.2379L12.7513 28.2381Z" fill="black"/>
              <path d="M26.5735 9.77396C26.5735 7.13734 24.4427 5 21.8141 5C19.1855 5 17.0547 7.13734 17.0547 9.77396C17.0547 10.8877 17.4381 11.9101 18.0754 12.7221H18.0708C18.0708 12.7221 18.0846 12.7379 18.104 12.7602C18.1374 12.802 18.1721 12.8423 18.2069 12.8827C18.5618 13.3125 19.5195 14.5457 19.9291 15.7975C20.4366 17.3488 21.0145 22.0997 21.0145 22.0997V22.1305C21.0145 22.5006 21.3137 22.8004 21.6823 22.8004H21.9454C22.3143 22.8004 22.6134 22.5003 22.6134 22.1305V22.0997C22.6134 22.0997 23.1911 17.3488 23.6986 15.7975C24.1082 14.5457 25.0659 13.3125 25.4208 12.8827C25.4556 12.8421 25.4903 12.8018 25.5237 12.7602C25.5431 12.7376 25.5566 12.7221 25.5566 12.7221H25.552C26.1896 11.9098 26.573 10.8877 26.573 9.77396H26.5735ZM21.8141 12.4312C20.3174 12.4312 19.1039 11.2142 19.1039 9.71298C19.1039 8.21172 20.3172 6.99448 21.8141 6.99448C23.311 6.99448 24.5243 8.21147 24.5243 9.71298C24.5243 11.2145 23.311 12.4312 21.8141 12.4312Z" fill="#01A689"/>
            </svg>
            <span>Наличие в магазинах</span>
          </div>
          <ul>
            <li v-for="(item, id) in productInfo.availability" :key="`product_mobile_color_${id}`">
              <div class="flex-align-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.48879 9.6414L11.8969 1.38484C12.1271 1.12828 12.42 1 12.7758 1C13.1315 1 13.4245 1.12828 13.6547 1.38484C13.8849 1.6414 14 1.96793 14 2.36443C14 2.76093 13.8849 3.08746 13.6547 3.34402L5.36771 12.5802C5.11659 12.8601 4.82362 13 4.48879 13C4.15396 13 3.86099 12.8601 3.60987 12.5802L0.345291 8.94169C0.115097 8.68513 0 8.3586 0 7.9621C0 7.5656 0.115097 7.23907 0.345291 6.98251C0.575485 6.72595 0.86846 6.59767 1.22422 6.59767C1.57997 6.59767 1.87294 6.72595 2.10314 6.98251L4.48879 9.6414Z" fill="#00A689"/>
                </svg>
                <span>{{ item.city }}</span>
              </div>
              <span class="address">{{ item.address }}</span>
            </li>
          </ul>
        </div>
      </button>

      <button @click="quantityShow" :class="{'cart-active' : productInfo.quantity}">
        <svg v-if="!productInfo.quantity" class="cart" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.560547 13.9757L3.66057 23.4793C3.76187 23.7891 4.0529 24 4.38077 24H19.6267C19.9545 24 20.2456 23.7891 20.3469 23.4793L23.4469 13.9757H0.560547ZM11.7155 15.4206H13.8171L11.5331 20.562L10.5753 18.1233L11.7155 15.4206ZM8.42019 22.5533V16.6143L10.7429 22.5533H8.42019ZM15.5854 22.5533H14.3439L15.5854 19.8066V22.5533ZM12.362 22.5533H11.2715L8.42019 15.4206H9.05566L11.5092 21.6512L14.2997 15.4206H15.5872L12.3638 22.5533H12.362Z" fill="#00A689"/>
          <path d="M1.86942 12.3107L1.89705 12.3327C2.19545 12.5583 2.62094 12.4978 2.8475 12.2007L11.42 0.905711C11.4918 0.810363 11.4734 0.676508 11.3776 0.604997L10.6427 0.0530807C10.5303 -0.0312651 10.3701 -0.0092583 10.2853 0.102592L1.7368 11.3664C1.51024 11.6635 1.57102 12.087 1.86942 12.3126V12.3107Z" fill="#00A689"/>
          <path d="M22.0298 12.3089L22.0022 12.3309C21.7038 12.5564 21.2783 12.4959 21.0518 12.1989L12.4793 0.90388C12.4074 0.808532 12.4259 0.674677 12.5216 0.603166L13.2566 0.0512496C13.3689 -0.0330962 13.5292 -0.0110894 13.6139 0.10076L22.1625 11.3646C22.389 11.6616 22.3282 12.0852 22.0298 12.3107V12.3089Z" fill="#00A689"/>
          <path d="M23.2479 11.3939H22.6106C22.7635 11.8248 22.6327 12.3217 22.2477 12.6114C21.7707 12.9708 21.0928 12.8755 20.7318 12.4006L19.9674 11.3939H3.93313L3.16688 12.4024C2.80586 12.8773 2.12802 12.9708 1.65095 12.6132C1.26414 12.3235 1.1352 11.8248 1.28808 11.3939H0.757599C0.243693 11.3939 -0.121016 11.8927 0.0373928 12.3786L0.306317 13.2055H23.6937L23.9626 12.3786C24.121 11.8927 23.7563 11.3939 23.2442 11.3939H23.2479Z" fill="#00A689"/>
        </svg>

        <svg v-else class="cart" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.560547 13.9757L3.66057 23.4793C3.76187 23.7891 4.0529 24 4.38077 24H19.6267C19.9545 24 20.2456 23.7891 20.3469 23.4793L23.4469 13.9757H0.560547ZM11.7155 15.4206H13.8171L11.5331 20.562L10.5753 18.1233L11.7155 15.4206ZM8.42019 22.5533V16.6143L10.7429 22.5533H8.42019ZM15.5854 22.5533H14.3439L15.5854 19.8066V22.5533ZM12.362 22.5533H11.2715L8.42019 15.4206H9.05566L11.5092 21.6512L14.2997 15.4206H15.5872L12.3638 22.5533H12.362Z" fill="white"/>
          <path d="M1.86942 12.3107L1.89705 12.3327C2.19545 12.5583 2.62094 12.4978 2.8475 12.2007L11.42 0.905711C11.4918 0.810363 11.4734 0.676508 11.3776 0.604997L10.6427 0.0530807C10.5303 -0.0312651 10.3701 -0.0092583 10.2853 0.102592L1.7368 11.3664C1.51024 11.6635 1.57102 12.087 1.86942 12.3126V12.3107Z" fill="white"/>
          <path d="M22.0298 12.3089L22.0022 12.3309C21.7038 12.5564 21.2783 12.4959 21.0518 12.1989L12.4793 0.90388C12.4074 0.808532 12.4259 0.674677 12.5216 0.603166L13.2566 0.0512496C13.3689 -0.0330962 13.5292 -0.0110894 13.6139 0.10076L22.1625 11.3646C22.389 11.6616 22.3282 12.0852 22.0298 12.3107V12.3089Z" fill="white"/>
          <path d="M23.2479 11.3939H22.6106C22.7635 11.8248 22.6327 12.3217 22.2477 12.6114C21.7707 12.9708 21.0928 12.8755 20.7318 12.4006L19.9674 11.3939H3.93313L3.16688 12.4024C2.80586 12.8773 2.12802 12.9708 1.65095 12.6132C1.26414 12.3235 1.1352 11.8248 1.28808 11.3939H0.757599C0.243693 11.3939 -0.121016 11.8927 0.0373928 12.3786L0.306317 13.2055H23.6937L23.9626 12.3786C24.121 11.8927 23.7563 11.3939 23.2442 11.3939H23.2479Z" fill="white"/>
        </svg>

        <span class="title">В корзину</span>

        <div class="counter" v-if="productInfo.quantity">
          <span @click="setQuantity()" class="minus"></span>
          <span class="count">{{ productInfo.quantity }}</span>
          <span @click="setQuantity(true)">+</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import ProductMobile from "./ProductMobile";
export default {
  name: "ProductMobileContainer",
  components: {ProductMobile},
  props: {
    productInfo: { type: Object, required: true },
    buttonsState: { type: Boolean, required: false, default: true },
  },
  data(){
    return {
      quantityState: false,
      colorState: false,
      mapState: false,
      activeModifications: {},
      modificationsChar: 'Выбрать вариант',
    }
  },
  watch: {
    buttonsState(e) {
      if (!e) this.mapState = false
    }
  },
  methods: {
    openModifications(){
      this.$emit('setBtnState')
      if (!Object.keys(this.productInfo.modification).length) return
      this.colorState = true
      this.mapState = false
    },
    changeModification(modification, id, $event){
      let parent = $event.target.parentNode
      if (parent.children.length === 2) parent = parent.parentNode
      Array.from(parent.children).map(el => {el.children[1].classList.remove('color-green')})

      if ($event.target.children.length === 0) $event.target.classList.toggle('color-green')
      else $event.target.children[1].classList.toggle('color-green')

      this.activeModifications[id] = modification
      if (Object.keys(this.productInfo.modification).length === 1) this.colorState = false

      let char = ''
      for (let i in this.activeModifications) {
        char += `${i}: ${this.activeModifications[i]}; `
      }
      this.modificationsChar = char
    },
    quantityShow(){
      if (!this.quantityState && !this.productInfo.quantity) {
        this.quantityState = true
        this.$store.commit('changeProductQuantity', this.productInfo.quantity + 1)
      }
      else if (this.quantityState && !this.productInfo.quantity) this.quantityState = false
    },
    setQuantity(state = false){
      if (state) this.$store.commit('changeProductQuantity', this.productInfo.quantity + 1)
      else {
        this.$store.commit('changeProductQuantity', this.productInfo.quantity - 1)
        if (this.productInfo.quantity < 0) this.quantityState = false
      }
    },
  }
}
</script>

<style scoped lang="scss">

.product-mobile, .product-mobile-buttons {
  width: 100%;
  gap: rem(10);
}

button {
  width: 100%;
  height: rem(60);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #FFFFFF;
  gap: rem(10);
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  position: relative;
  border-radius: 8px;

  span {
    @include style-font(20);
    color: $black;
  }

  .title {
    @include style-font(20, 750, 140%, false);
    color: $green;
  }

  svg.map {
    width: rem(40);
    height: rem(40);
    margin-right: rem(8);
  }

  .cart {
    width: rem(24);
    height: rem(24);
  }
}

.minus {
  display: flex;
  align-items: center;
  justify-content: center;
  height: rem(10);
  width: rem(10);
  margin-bottom: rem(-3);
  position: relative;

  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background: #FFFFFF;
  }
}

.counter {
  gap: rem(10);
  display: flex;
  align-items: center;
}

.cart-active {
  background: $green;

  span {
    color: #FFFFFF;
  }
}

.list {
  position: absolute;
  left: -1px;
  top: 0;
  width: calc(100% + 2px);
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 8px;
  z-index: 5;
  padding: rem(10) rem(34) rem(20);
  gap: rem(25);
  display: flex;
  flex-direction: column;

  span {
    @include style-font(20);
    color: $black;
  }

  .title {
    margin-bottom: rem(14);
    display: flex;
    align-items: center;
    gap: rem(8);

    svg {
      width: rem(40);
      height: rem(40);
      margin-right: 0;
    }
  }

  .green {
    width: rem(10);
    height: rem(10);
    border-radius: 2px;
    background: $green;
    margin-right: rem(4);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: rem(20);
  }

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      width: auto;
      @include style-font();
    }
  }
}

.color {
  border: 1px solid #FFFFFF;
  span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .list {
    padding: rem(15) 0;

    ul {
      gap: rem(15);

      li {
        padding: 0 rem(20);
      }
    }
  }
}

.green-border {
  border-color: $green;
}

.map {
  .map-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  li {
    flex-direction: column;
    align-items: flex-start;
    svg {
      width: rem(14);
      height: rem(14);
      margin-right: rem(4);
    }
  }

  .address {
    padding-left: rem(18);
    padding-right: 0;
  }
}

.color-green {
  color: $green !important;
}

.color-disable {
  cursor: default;
  background: rgba(255, 255, 255, .3);
}


</style>
