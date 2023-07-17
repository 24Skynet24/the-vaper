<template>
  <div class="page-background" @click="buttonsMobileState = false">
    <div class="container">
      <div class="bread-crumbs">
        <bread-crumbs :bread-crumbs="breadCrumbsProduct"/>
      </div>

      <main>
        <div class="flex" v-if="windowWidth > 768">
          <product-slider :slides-content="productDetail.images"/>
          <div class="product-info">
            <article class="block margins product-info-main">
              <h1>{{ productDetail.data[0].name }}</h1>
              <div class="flex-between">
                <h3 class="price">
                  {{ productDetail.data[0].sale_price }}
                  <svg class="rub-very-bold" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.80872 17V17.15H2.95872H4.98499H5.13499V17V14.1024H8.69981H8.84981V13.9524V12.4958V12.3458H8.69981H5.13499V10.6514H6.15572H6.30572H6.87617C8.22526 10.6514 9.36499 10.4554 10.2897 10.0567C11.228 9.65856 11.9438 9.08815 12.4279 8.34216L12.4287 8.34097C12.9117 7.58102 13.15 6.67806 13.15 5.63866C13.15 4.09568 12.6572 2.89861 11.655 2.0723C10.6704 1.24812 9.17284 0.85 7.19137 0.85H2.95872H2.80872V1V8.64832H1H0.85V8.79832V10.5014V10.6514H1H2.80872V12.3458H1H0.85V12.4958V13.9524V14.1024H1H2.80872V17ZM5.13499 8.64832V2.85308H7.01126C8.33409 2.85308 9.27673 3.09818 9.86819 3.56074C10.4527 4.01786 10.7562 4.72254 10.7562 5.70588C10.7562 6.4618 10.5882 7.03819 10.2695 7.45188C9.9469 7.87075 9.48048 8.17642 8.85922 8.36336L8.85828 8.36365C8.24653 8.55212 7.48944 8.64832 6.58349 8.64832H6.30572H6.15572H5.13499Z" fill="#0B0B0B" stroke="#0B0B0B" stroke-width="0.3"/>
                  </svg>
                </h3>
                <stars-vaper :rating-stars="+productDetail.totalRating" :rating-reviews="+productDetail.totalRating" :fixed-two="false"/>
              </div>
            </article>
            <div class="margins product-info-container">
              <button
                class="block flex-center color-block"
                :class="[{'green-border' : !colorState && Object.keys(activeModifications).length}]"
                v-if="Object.keys(productDetail.modification).length"
              >
                <span @click="colorsShow" class="ellipsis">
                  {{ modificationsChar ?? 'Выбрать вариант' }}
                </span>

                <transition name="drop">
                  <div class="colors-list" v-if="colorState === true" @mouseleave="colorState = false">
                    <div class="flex-column" v-for="(modification, id) in productDetail.modification">
                      <span class="title">{{ id }}</span>
                      <ul class="flex-wrap">
                        <li v-for="(item, key) in modification" :key="`product_color_${key}`" @click="setModification(id, item, $event)">
                          <div></div>
                          <span :class="[{'green-color' : activeModifications[id] === item}]">
                            {{ item }}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <svg @click="colorState = false" width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1363_5909)">
                        <path d="M15.2454 0.0502908C15.11 -0.0167636 14.8902 -0.0167636 14.7548 0.0502908L12.083 1.37286L0.817398 6.94967C0.294102 7.20881 0 7.5602 0 7.92659L0 9.82783C0 9.98083 0.373783 10.0575 0.592233 9.94934L14.7548 2.93845C14.8902 2.87139 15.11 2.87139 15.2454 2.93845L29.4078 9.94934C29.6264 10.0575 30 9.98083 30 9.82783V7.92659C30 7.5602 29.7059 7.20881 29.1826 6.94967L17.9172 1.37286L15.2454 0.0502908Z" fill="#8B9390"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1363_5909">
                          <rect width="30" height="10" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </transition>
              </button>
              <button class="block product-info-map">
                <div class="flex-align-center product-info-map-content" @click="mapState = true">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.7671 28.6862L27.6116 11.3071C27.5154 11.6693 27.387 12.0173 27.2286 12.3494L38.0368 29.1872C38.1862 29.3937 38.0726 29.5786 38.0346 29.6303C37.9966 29.6823 37.8534 29.8451 37.6124 29.7608L27.3018 26.1615C27.2037 26.1275 27.1027 26.1088 27.0017 26.0998L24.1548 19.0517C24.0538 19.5661 23.956 20.1363 23.8661 20.701L26.1459 26.3452C26.1212 26.3635 26.0929 26.3751 26.0694 26.3953L20.6395 31.0633L14.2759 13.0005L16.2209 11.9424C16.1121 11.663 16.0225 11.3746 15.9561 11.077L13.8336 12.2318C13.7485 12.2804 13.6461 12.295 13.5514 12.269L7.52322 10.6649C7.1049 10.5546 6.66576 10.6627 6.34772 10.957L0.405799 16.4503C0.0926077 16.7404 -0.0527249 17.1647 0.0172769 17.5855L2.72773 33.9436C2.79991 34.3795 3.08694 34.7393 3.49484 34.9058C3.64962 34.9689 3.81118 35 3.97153 35C4.23386 35 4.49304 34.9167 4.71346 34.7546L12.3047 29.1706C12.4093 29.0934 12.5488 29.0766 12.668 29.1269L19.7585 32.0789C20.1994 32.2621 20.6971 32.1826 21.0597 31.8714L26.6456 27.0693C26.7459 26.9828 26.8854 26.9558 27.0109 27L37.3215 30.5993C37.8522 30.7849 38.41 30.6119 38.7453 30.16C39.0798 29.7078 39.0832 29.1213 38.7673 28.6862H38.7671ZM4.18953 34.0386C4.03839 34.1499 3.88651 34.1071 3.82838 34.0836C3.77049 34.06 3.6317 33.9844 3.60069 33.7981L0.890241 17.4394C0.86941 17.3148 0.912768 17.1892 1.00554 17.1032L6.79946 11.7468L11.8759 28.4026C11.8449 28.4216 11.8103 28.4332 11.7807 28.4549L4.18953 34.0386ZM12.7513 28.2381L7.68866 11.6275L13.3242 13.1269C13.3445 13.1325 13.3653 13.1327 13.3859 13.1371L19.714 31.0988L13.0076 28.3067C12.9247 28.2724 12.8383 28.2535 12.7516 28.2379L12.7513 28.2381Z"
                          fill="black"
                          opacity="0.7"/>
                    <path
                      d="M26.5735 9.77396C26.5735 7.13734 24.4427 5 21.8141 5C19.1855 5 17.0547 7.13734 17.0547 9.77396C17.0547 10.8877 17.4381 11.9101 18.0754 12.7221H18.0708C18.0708 12.7221 18.0846 12.7379 18.104 12.7602C18.1374 12.802 18.1721 12.8423 18.2069 12.8827C18.5618 13.3125 19.5195 14.5457 19.9291 15.7975C20.4366 17.3488 21.0145 22.0997 21.0145 22.0997V22.1305C21.0145 22.5006 21.3137 22.8004 21.6823 22.8004H21.9454C22.3143 22.8004 22.6134 22.5003 22.6134 22.1305V22.0997C22.6134 22.0997 23.1911 17.3488 23.6986 15.7975C24.1082 14.5457 25.0659 13.3125 25.4208 12.8827C25.4556 12.8421 25.4903 12.8018 25.5237 12.7602C25.5431 12.7376 25.5566 12.7221 25.5566 12.7221H25.552C26.1896 11.9098 26.573 10.8877 26.573 9.77396H26.5735ZM21.8141 12.4312C20.3174 12.4312 19.1039 11.2142 19.1039 9.71298C19.1039 8.21172 20.3172 6.99448 21.8141 6.99448C23.311 6.99448 24.5243 8.21147 24.5243 9.71298C24.5243 11.2145 23.311 12.4312 21.8141 12.4312Z"
                      fill="#01A689"/>
                  </svg>
                  <span>Наличие в магазинах</span>
                </div>

                <transition name="drop">
                  <div class="map-list" v-if="mapState === true" @mouseleave="mapState = false">
                    <div class="title">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.7" d="M38.7671 28.6862L27.6116 11.3071C27.5154 11.6693 27.387 12.0173 27.2286 12.3494L38.0368 29.1872C38.1862 29.3937 38.0726 29.5786 38.0346 29.6303C37.9966 29.6823 37.8534 29.8451 37.6124 29.7608L27.3018 26.1615C27.2037 26.1275 27.1027 26.1088 27.0017 26.0998L24.1548 19.0517C24.0538 19.5661 23.956 20.1363 23.8661 20.701L26.1459 26.3452C26.1212 26.3635 26.0929 26.3751 26.0694 26.3953L20.6395 31.0633L14.2759 13.0005L16.2209 11.9424C16.1121 11.663 16.0225 11.3746 15.9561 11.077L13.8336 12.2318C13.7485 12.2804 13.6461 12.295 13.5514 12.269L7.52322 10.6649C7.1049 10.5546 6.66576 10.6627 6.34772 10.957L0.405799 16.4503C0.0926077 16.7404 -0.0527249 17.1647 0.0172769 17.5855L2.72773 33.9436C2.79991 34.3795 3.08694 34.7393 3.49484 34.9058C3.64962 34.9689 3.81118 35 3.97153 35C4.23386 35 4.49304 34.9167 4.71346 34.7546L12.3047 29.1706C12.4093 29.0934 12.5488 29.0766 12.668 29.1269L19.7585 32.0789C20.1994 32.2621 20.6971 32.1826 21.0597 31.8714L26.6456 27.0693C26.7459 26.9828 26.8854 26.9558 27.0109 27L37.3215 30.5993C37.8522 30.7849 38.41 30.6119 38.7453 30.16C39.0798 29.7078 39.0832 29.1213 38.7673 28.6862H38.7671ZM4.18953 34.0386C4.03839 34.1499 3.88651 34.1071 3.82838 34.0836C3.77049 34.06 3.6317 33.9844 3.60069 33.7981L0.890241 17.4394C0.86941 17.3148 0.912768 17.1892 1.00554 17.1032L6.79946 11.7468L11.8759 28.4026C11.8449 28.4216 11.8103 28.4332 11.7807 28.4549L4.18953 34.0386ZM12.7513 28.2381L7.68866 11.6275L13.3242 13.1269C13.3445 13.1325 13.3653 13.1327 13.3859 13.1371L19.714 31.0988L13.0076 28.3067C12.9247 28.2724 12.8383 28.2535 12.7516 28.2379L12.7513 28.2381Z" fill="black"/>
                        <path d="M26.5735 9.77396C26.5735 7.13734 24.4427 5 21.8141 5C19.1855 5 17.0547 7.13734 17.0547 9.77396C17.0547 10.8877 17.4381 11.9101 18.0754 12.7221H18.0708C18.0708 12.7221 18.0846 12.7379 18.104 12.7602C18.1374 12.802 18.1721 12.8423 18.2069 12.8827C18.5618 13.3125 19.5195 14.5457 19.9291 15.7975C20.4366 17.3488 21.0145 22.0997 21.0145 22.0997V22.1305C21.0145 22.5006 21.3137 22.8004 21.6823 22.8004H21.9454C22.3143 22.8004 22.6134 22.5003 22.6134 22.1305V22.0997C22.6134 22.0997 23.1911 17.3488 23.6986 15.7975C24.1082 14.5457 25.0659 13.3125 25.4208 12.8827C25.4556 12.8421 25.4903 12.8018 25.5237 12.7602C25.5431 12.7376 25.5566 12.7221 25.5566 12.7221H25.552C26.1896 11.9098 26.573 10.8877 26.573 9.77396H26.5735ZM21.8141 12.4312C20.3174 12.4312 19.1039 11.2142 19.1039 9.71298C19.1039 8.21172 20.3172 6.99448 21.8141 6.99448C23.311 6.99448 24.5243 8.21147 24.5243 9.71298C24.5243 11.2145 23.311 12.4312 21.8141 12.4312Z" fill="#01A689"/>
                      </svg>
                      <span>Наличие в магазинах</span>
                    </div>
                    <ul class="flex-wrap">
                      <li v-for="(item, id) in product.availability" :key="`product_color_${id}`">
                        <div class="flex-align-center">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.48879 9.6414L11.8969 1.38484C12.1271 1.12828 12.42 1 12.7758 1C13.1315 1 13.4245 1.12828 13.6547 1.38484C13.8849 1.6414 14 1.96793 14 2.36443C14 2.76093 13.8849 3.08746 13.6547 3.34402L5.36771 12.5802C5.11659 12.8601 4.82362 13 4.48879 13C4.15396 13 3.86099 12.8601 3.60987 12.5802L0.345291 8.94169C0.115097 8.68513 0 8.3586 0 7.9621C0 7.5656 0.115097 7.23907 0.345291 6.98251C0.575485 6.72595 0.86846 6.59767 1.22422 6.59767C1.57997 6.59767 1.87294 6.72595 2.10314 6.98251L4.48879 9.6414Z" fill="#00A689"/>
                          </svg>
                          <span>{{ item.city }}</span>
                        </div>
                        <span class="address">{{ item.address }}</span>
                      </li>
                    </ul>
                    <svg @click="mapState = false" width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1363_5909)">
                        <path d="M15.2454 0.0502908C15.11 -0.0167636 14.8902 -0.0167636 14.7548 0.0502908L12.083 1.37286L0.817398 6.94967C0.294102 7.20881 0 7.5602 0 7.92659L0 9.82783C0 9.98083 0.373783 10.0575 0.592233 9.94934L14.7548 2.93845C14.8902 2.87139 15.11 2.87139 15.2454 2.93845L29.4078 9.94934C29.6264 10.0575 30 9.98083 30 9.82783V7.92659C30 7.5602 29.7059 7.20881 29.1826 6.94967L17.9172 1.37286L15.2454 0.0502908Z" fill="#8B9390"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1363_5909">
                          <rect width="30" height="10" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </transition>
              </button>
            </div>
            <div class="margins product-info-container buttons">
              <button
                class="block flex-align-center product-info-cart"
                :class="{'product-info-cart-active' : productDetail.quantity}"
                @mousemove="cartBtn = true"
                @mouseleave="cartBtn = false"
                @click="quantityShow"
              >
                <svg v-if="!productDetail.quantity && !cartBtn" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.560547 13.9757L3.66057 23.4793C3.76187 23.7891 4.0529 24 4.38077 24H19.6267C19.9545 24 20.2456 23.7891 20.3469 23.4793L23.4469 13.9757H0.560547ZM11.7155 15.4206H13.8171L11.5331 20.562L10.5753 18.1233L11.7155 15.4206ZM8.42019 22.5533V16.6143L10.7429 22.5533H8.42019ZM15.5854 22.5533H14.3439L15.5854 19.8066V22.5533ZM12.362 22.5533H11.2715L8.42019 15.4206H9.05566L11.5092 21.6512L14.2997 15.4206H15.5872L12.3638 22.5533H12.362Z" fill="#00A689"/>
                  <path d="M1.86942 12.3107L1.89705 12.3327C2.19545 12.5583 2.62094 12.4978 2.8475 12.2007L11.42 0.905711C11.4918 0.810363 11.4734 0.676508 11.3776 0.604997L10.6427 0.0530807C10.5303 -0.0312651 10.3701 -0.0092583 10.2853 0.102592L1.7368 11.3664C1.51024 11.6635 1.57102 12.087 1.86942 12.3126V12.3107Z" fill="#00A689"/>
                  <path d="M22.0298 12.3089L22.0022 12.3309C21.7038 12.5564 21.2783 12.4959 21.0518 12.1989L12.4793 0.90388C12.4074 0.808532 12.4259 0.674677 12.5216 0.603166L13.2566 0.0512496C13.3689 -0.0330962 13.5292 -0.0110894 13.6139 0.10076L22.1625 11.3646C22.389 11.6616 22.3282 12.0852 22.0298 12.3107V12.3089Z" fill="#00A689"/>
                  <path d="M23.2479 11.3939H22.6106C22.7635 11.8248 22.6327 12.3217 22.2477 12.6114C21.7707 12.9708 21.0928 12.8755 20.7318 12.4006L19.9674 11.3939H3.93313L3.16688 12.4024C2.80586 12.8773 2.12802 12.9708 1.65095 12.6132C1.26414 12.3235 1.1352 11.8248 1.28808 11.3939H0.757599C0.243693 11.3939 -0.121016 11.8927 0.0373928 12.3786L0.306317 13.2055H23.6937L23.9626 12.3786C24.121 11.8927 23.7563 11.3939 23.2442 11.3939H23.2479Z" fill="#00A689"/>
                </svg>
                <svg v-if="productDetail.quantity || cartBtn" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.560547 13.9757L3.66057 23.4793C3.76187 23.7891 4.0529 24 4.38077 24H19.6267C19.9545 24 20.2456 23.7891 20.3469 23.4793L23.4469 13.9757H0.560547ZM11.7155 15.4206H13.8171L11.5331 20.562L10.5753 18.1233L11.7155 15.4206ZM8.42019 22.5533V16.6143L10.7429 22.5533H8.42019ZM15.5854 22.5533H14.3439L15.5854 19.8066V22.5533ZM12.362 22.5533H11.2715L8.42019 15.4206H9.05566L11.5092 21.6512L14.2997 15.4206H15.5872L12.3638 22.5533H12.362Z" fill="white"/>
                  <path d="M1.86942 12.3107L1.89705 12.3327C2.19545 12.5583 2.62094 12.4978 2.8475 12.2007L11.42 0.905711C11.4918 0.810363 11.4734 0.676508 11.3776 0.604997L10.6427 0.0530807C10.5303 -0.0312651 10.3701 -0.0092583 10.2853 0.102592L1.7368 11.3664C1.51024 11.6635 1.57102 12.087 1.86942 12.3126V12.3107Z" fill="white"/>
                  <path d="M22.0298 12.3089L22.0022 12.3309C21.7038 12.5564 21.2783 12.4959 21.0518 12.1989L12.4793 0.90388C12.4074 0.808532 12.4259 0.674677 12.5216 0.603166L13.2566 0.0512496C13.3689 -0.0330962 13.5292 -0.0110894 13.6139 0.10076L22.1625 11.3646C22.389 11.6616 22.3282 12.0852 22.0298 12.3107V12.3089Z" fill="white"/>
                  <path d="M23.2479 11.3939H22.6106C22.7635 11.8248 22.6327 12.3217 22.2477 12.6114C21.7707 12.9708 21.0928 12.8755 20.7318 12.4006L19.9674 11.3939H3.93313L3.16688 12.4024C2.80586 12.8773 2.12802 12.9708 1.65095 12.6132C1.26414 12.3235 1.1352 11.8248 1.28808 11.3939H0.757599C0.243693 11.3939 -0.121016 11.8927 0.0373928 12.3786L0.306317 13.2055H23.6937L23.9626 12.3786C24.121 11.8927 23.7563 11.3939 23.2442 11.3939H23.2479Z" fill="white"/>
                </svg>

                <span>В корзину</span>

                <div class="counter" v-if="productDetail.quantity">
                  <span @click="setQuantity()" class="minus"></span>
                  <span class="count">{{ productDetail.quantity }}</span>
                  <span @click="setQuantity(true)">+</span>
                </div>
              </button>
              <button class="block product-info-btn flex-center" @click="changeLike">
                <svg v-if="!productDetail.data[0].like"  width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.9686 1C23.7307 1 25.9875 2.71137 26.699 4.97127L26.8966 5.87837C27.1411 7.00057 26.9613 8.67219 26.2593 10.7056C25.5662 12.7133 24.3982 14.9733 22.7972 17.2241L22.7971 17.2242C19.9318 21.2533 16.546 24.0376 14.0004 24.9464C11.4549 24.0376 8.06905 21.2533 5.2038 17.2242L5.20374 17.2241C3.6027 14.9733 2.43396 12.7125 1.74047 10.7044C1.03801 8.67035 0.858634 6.99943 1.10404 5.87955L1.11246 5.84113L1.11784 5.80217C1.48543 3.13803 3.87557 1 7.03519 1C10.194 1 12.6936 3.23968 12.9742 5.97377L13.0663 6.87171H13.9689H14.0348H14.9367L15.0295 5.97463C15.3119 3.24553 17.8781 1 20.9686 1Z" stroke="#00A689" stroke-width="2"/>
                </svg>
                <svg v-else width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.8236 9.84452C39.1935 5.41846 35.0203 2 29.9551 2C24.8899 2 20.5366 5.56938 20.0497 10.1301H19.9556C19.4728 5.56938 15.2218 2 10.0503 2C4.87871 2 0.811827 5.41846 0.181746 9.84452C-0.681545 13.6628 1.56056 20.2345 6.2698 26.6513C10.6067 32.5622 15.8928 36.7762 20.0006 38C24.1084 36.7762 29.3946 32.5622 33.7315 26.6513C38.4407 20.2345 40.6787 13.6668 39.8195 9.84452H39.8236Z" fill="#00A689"/>
                </svg>
              </button>
              <button class="block product-info-btn flex-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.9986 6.14074V7.54606C27.9986 7.91877 27.8506 8.27622 27.587 8.53977C27.3235 8.80332 26.9661 8.95138 26.5935 8.95138H20.2704C20.0841 8.95138 19.9054 9.02541 19.7736 9.15719C19.6418 9.28896 19.5678 9.46768 19.5678 9.65404V12.5617C19.568 12.7841 19.5022 13.0017 19.3787 13.1867C19.2552 13.3718 19.0795 13.516 18.874 13.6012C18.6685 13.6863 18.4423 13.7086 18.2242 13.6651C18.006 13.6217 17.8056 13.5145 17.6484 13.3571L11.9338 7.63881C11.7231 7.42799 11.6048 7.14215 11.6048 6.8441C11.6048 6.54606 11.7231 6.26021 11.9338 6.04939L17.6498 0.329733C17.8071 0.172238 18.0076 0.0649915 18.2259 0.021583C18.4442 -0.0218255 18.6705 0.000558406 18.8761 0.0858981C19.0816 0.171238 19.2573 0.315692 19.3807 0.500953C19.504 0.686215 19.5697 0.903945 19.5692 1.12655V4.03276C19.5692 4.21911 19.6432 4.39784 19.775 4.52961C19.9068 4.66139 20.0855 4.73542 20.2718 4.73542H26.5949C26.9675 4.73542 27.3249 4.88348 27.5884 5.14703C27.852 5.41057 28 5.76802 28 6.14074H27.9986ZM10.3502 14.6443C10.193 14.4869 9.99259 14.3797 9.77442 14.3363C9.55625 14.2928 9.33009 14.3151 9.12458 14.4002C8.91907 14.4854 8.74344 14.6296 8.61994 14.8147C8.49643 14.9997 8.4306 15.2173 8.43077 15.4398V18.3474C8.43077 18.5337 8.35675 18.7124 8.225 18.8442C8.09324 18.976 7.91454 19.05 7.72821 19.05H1.40513C1.03247 19.05 0.675065 19.1981 0.411553 19.4616C0.14804 19.7252 0 20.0826 0 20.4553V21.8607C0 22.2334 0.14804 22.5908 0.411553 22.8544C0.675065 23.1179 1.03247 23.266 1.40513 23.266H7.72821C7.91454 23.266 8.09324 23.34 8.225 23.4718C8.35675 23.6036 8.43077 23.7823 8.43077 23.9687V26.8749C8.4306 27.0973 8.49643 27.3149 8.61994 27.4999C8.74344 27.685 8.91907 27.8292 9.12458 27.9144C9.33009 27.9995 9.55625 28.0218 9.77442 27.9783C9.99259 27.9349 10.193 27.8277 10.3502 27.6703L16.0676 21.952C16.2783 21.7412 16.3966 21.4553 16.3966 21.1573C16.3966 20.8593 16.2783 20.5734 16.0676 20.3626L10.3502 14.6443Z" fill="#00A689"/>
                </svg>
              </button>
            </div>
            <article class="block product-info-additional">
              <div class="flex-column">
                <span class="title"><b>Доставка</b></span>
                <p>Возможна доставка через CDEK или Почту России</p>
              </div>
              <div class="flex-column">
                <span class="title"><b>Самовывоз</b></span>
                <p>Самостоятельно забрать из 3 магазинов сегодня или позже</p>
              </div>
            </article>
          </div>
        </div>
        <product-mobile-container
          v-else
          :product-info="productDetail"
          :buttons-state="buttonsMobileState"
          @setBtnState="buttonsMobileState = true"
        />
      </main>

      <section class="product-tabs">
        <ul class="flex-align-center">
          <li
            v-for="item in tabs" :key="`tab_product_${item.id}`"
            :class="[
              {'product-tabs-active' : item.id === activeTab},
              {'product-tabs-disable' : item.id === 4 && !productReviews.length},
              {'product-tabs-disable' : item.id === 3 && !productDetail.set.length},
              {'product-tabs-disable' : item.id === 2 && !productDetail.сharacteristics.length},
              {'product-tabs-disable' : item.id === 1 && !productDetail.data[0].description}
              ]"
            @click="changeTab(item.id)"
          >
            {{ item.name }}
          </li>
        </ul>

        <div class="product-tabs-container">
          <product-description :description-text="productDetail.data[0].description" v-if="activeTab === 1"/>
          <product-specifications :product-specifications="productDetail.сharacteristics"  v-if="activeTab === 2"/>
          <product-equipment :product-equipment="productDetail.set" v-if="activeTab === 3"/>
          <product-reviews-container :product-reviews="productReviews.data" v-if="activeTab === 4"/>
        </div>
      </section>

      <feedback-cmp/>

      <recommendation-products :rec-items="recommendationProducts"/>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "../../components/BreadCrumbs";
import CustomSection from "../../components/CustomSection";
import ProductSlider from "../../components/Product/ProductSlider";
import StarsVaper from "../../components/StarsVaper";
import FeedbackCmp from "../../components/Product/FeedbackCmp";
import RecommendationProducts from "../../components/RecommendationProducts";
import ProductDescription from "../../components/Product/ProductDescription";
import ProductEquipment from "../../components/Product/ProductEquipment";
import ProductSpecifications from "../../components/Product/ProductSpecifications";
import ProductReviewsContainer from "../../components/Product/ProductReviewsContainer";
import clientData from "../../mixins/clientData";
import ProductMobileContainer from "../../components/Product/ProductMobileContainer";

export default {
  name: "ProductId",
  components: {
    ProductMobileContainer,
    ProductReviewsContainer,
    ProductSpecifications,
    ProductEquipment,
    ProductDescription,
    RecommendationProducts, FeedbackCmp, StarsVaper, ProductSlider, CustomSection, BreadCrumbs
  },
  mixins: [clientData],
  async asyncData({ store, $services, route, $toast }){
    try {
      const url = `/api/product/${route.params.id}`
      const res = await $services.CategoriesServices.getProductDetail(url)
      res.data[0].like = false
      res.quantity = 0
      store.commit('setGeneral', {payload: res, path: 'productDetail'})
    } catch (e) {
      $toast.error('Ошибка загрузки товара!')
      console.error('Product ', e)
    }

    try {
      const url = `/api/product/review/${route.params.id}?limit=10&offset=0`
      const res = await $services.CategoriesServices.getProductDetail(url)
      store.commit('setGeneral', {payload: res, path: 'productReviews'})
    } catch (e) {
      $toast.error('Ошибка загрузки Отзывов!')
      console.error('Product ', e)
    }
  },
  data(){
    return {
      tabs: [
        {
          id: 1,
          name: 'Описание'
        },
        {
          id: 2,
          name: 'Характеристики'
        },
        {
          id: 3,
          name: 'Комплектация'
        },
        {
          id: 4,
          name: 'Отзывы'
        },
      ],
      breadCrumbsProduct: [
        {
          url: '/',
          title: 'Главная',
        },
        {
          url: '/catalog',
          title: 'Каталог',
        },
        {
          url: this.$route.fullPath,
          title: 'Товар',
        },
      ],
      recommendationProducts: [
        {
          like: false,
          url: '/product',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
        },
        {
          like: false,
          url: '/product',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
        },
        {
          like: false,
          url: '/product',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
        },
        {
          like: false,
          url: '/product',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
        },
        {
          like: false,
          url: '/product',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
        },
        {
          like: false,
          url: '/product',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
        },
      ],

      cartBtn: false,
      activeTab: 1,

      quantityState: false,
      colorState: false,
      mapState: false,
      buttonsMobileState: false,

      activeModifications: {},
      modificationsChar: 'Выбрать вариант',

      product: {
        title: 'GEEKVAPE B100 BOOST PRO MAX 21700 KIT 100W',
        price: {
          price: 4000,
          discount: 0,
        },
        rating: {
          star: 4,
          reviews: 4.5,
        },
        quantity: 0,
        colors: [
          {
            id: 1,
            title: 'Black'
          },
          {
            id: 2,
            title: 'Classic Blue'
          },
          {
            id: 3,
            title: 'Moon White'
          },
          {
            id: 4,
            title: 'Green'
          },
          {
            id: 5,
            title: 'Mint Blue'
          },
          {
            id: 6,
            title: 'Tropical Orange'
          },
          {
            id: 7,
            title: 'Obsidian Gray'
          },
          {
            id: 8,
            title: 'Lemon Yellow'
          },
          {
            id: 9,
            title: 'Golden Red'
          },
          {
            id: 10,
            title: 'Cranberry'
          },
          {
            id: 11,
            title: 'Forest Green'
          },
          {
            id: 12,
            title: 'Walnut Wood'
          },
        ],
        availability: [
          {
            city: 'г. Липецк',
            address: 'ул. Зои Космодемьянской, 1'
          },
          {
            city: 'г. Липецк',
            address: 'ул. Зои Космодемьянской, 1'
          },
          {
            city: 'г. Липецк',
            address: 'ул. Зои Космодемьянской, 1'
          },
        ],
        images: [
          {
            img: require('@/assets/img/test-product.png')
          },
          {
            img: require('@/assets/img/test-product.png')
          },
          {
            img: require('@/assets/img/test-product.png')
          },
          {
            img: require('@/assets/img/test-product.png')
          },
          {
            img: require('@/assets/img/test-product.png')
          },
          {
            img: require('@/assets/img/test-product.png')
          },
        ],
        like: false,
        status: 'Новинка',

        description: [
          {
            title: 'Внешность',
            text: 'Алюминиевый корпус Вапорессо Хрос 3 сохраняет свою строгость. Минимализм дизайна традиционно разбавляет круглая кнопка Fire на лицевой стороне и небольшой слайдер регулировки обдува на тыльной.',
          },
          {
            title: 'Внешность',
            text: 'Алюминиевый корпус Вапорессо Хрос 3 сохраняет свою строгость. Минимализм дизайна традиционно разбавляет круглая кнопка Fire на лицевой стороне и небольшой слайдер регулировки обдува на тыльной.',
          },
          {
            title: 'Внешность',
            text: 'Алюминиевый корпус Вапорессо Хрос 3 сохраняет свою строгость. Минимализм дизайна традиционно разбавляет круглая кнопка Fire на лицевой стороне и небольшой слайдер регулировки обдува на тыльной.',
          },
        ],
        equipment: [
          {
            title: 'Батарейный блок',
          },
          {
            title: 'Батарейный блок',
          },
          {
            title: 'Батарейный блок',
          },
          {
            title: 'Батарейный блок',
          },
          {
            title: 'Батарейный блок',
          },
        ],
        specifications: {
          volume: '6 мл',
          serviced: 'Имеется RBA база-испаритель',
          battery_capacity: '1000 мАч',
          puff_type: 'Кальянная',
          battery_type: 'Встроенный',
          resistance_range: '0.1 - 3.0 Ом',
          charge_current: '2 А',
          battery_format: '18650 / 21700',
          number_of_batteries: '1',
          evaporator_type: 'Картриджи Boost Pro и Boost Plus',
          charger_connector: 'USB Type C',
          weight: '370 г',
          country: 'Китай',
        },
        reviews: [
          {
            rating: 3,
            date: '2023-02-16',
            pluses: 'Не течёт, удобный фильтр с верхней заправкой, подходят фильтры со всех зеро.',
            minuses: 'Нет кнопки велючить и выключить как на обычной зеро.',
            comment: '',
            name: 'Анна С.',
          },
          {
            rating: 3,
            date: '2023-02-16',
            pluses: 'Не течёт, удобный фильтр с верхней заправкой, подходят фильтры со всех зеро.',
            minuses: 'Нет кнопки велючить и выключить как на обычной зеро.',
            comment: '',
            name: 'Анна С.',
          },
          {
            rating: 3,
            date: '2023-02-16',
            pluses: 'Не течёт, удобный фильтр с верхней заправкой, подходят фильтры со всех зеро.',
            minuses: 'Нет кнопки велючить и выключить как на обычной зеро.',
            comment: '',
            name: 'Анна С.',
          },
          {
            rating: 3,
            date: '2023-02-16',
            pluses: 'Не течёт, удобный фильтр с верхней заправкой, подходят фильтры со всех зеро.',
            minuses: 'Нет кнопки велючить и выключить как на обычной зеро.',
            comment: '',
            name: 'Анна С.',
          },
          {
            rating: 3,
            date: '2023-02-16',
            pluses: 'Не течёт, удобный фильтр с верхней заправкой, подходят фильтры со всех зеро.',
            minuses: 'Нет кнопки велючить и выключить как на обычной зеро.',
            comment: '',
            name: 'Анна С.',
          },
          {
            rating: 3,
            date: '2023-02-16',
            pluses: 'Не течёт, удобный фильтр с верхней заправкой, подходят фильтры со всех зеро.',
            minuses: 'Нет кнопки велючить и выключить как на обычной зеро.',
            comment: '',
            name: 'Анна С.',
          },
          {
            rating: 3,
            date: '2023-02-16',
            pluses: 'Не течёт, удобный фильтр с верхней заправкой, подходят фильтры со всех зеро.',
            minuses: 'Нет кнопки велючить и выключить как на обычной зеро.',
            comment: '',
            name: 'Анна С.',
          },
        ],
      },
    }
  },
  computed: {
    pageId() {
      return this.$route.params.id
    },
    productDetail() {
      return this.$store.state.productDetail
    },
    productReviews() {
      return this.$store.state.productReviews
    },
  },
  mounted() {
    if (!this.productDetail.data[0].description) this.activeTab = 0
  },
  methods: {
    changeTab(tabId){
      if (tabId === 4 && !this.productReviews.length) return
      if (tabId === 3 && !this.productDetail.set.length) return
      if (tabId === 2 && !this.productDetail.сharacteristics.length) return
      if (tabId === 1 && !this.productDetail.data[0].description) return
      this.activeTab = tabId
    },
    quantityShow(){
      if (!this.quantityState && !this.productDetail.quantity) {
        this.quantityState = true
        this.$store.commit('changeProductQuantity', this.productDetail.quantity + 1)
      }
      else if (this.quantityState && !this.productDetail.quantity) this.quantityState = false
    },
    colorsShow(){
      if (!Object.keys(this.productDetail.modification).length) return
      if (!this.colorState) this.colorState = true
    },
    setQuantity(state = false){
      if (state) this.$store.commit('changeProductQuantity', this.productDetail.quantity + 1)
      else {
        this.$store.commit('changeProductQuantity', this.productDetail.quantity - 1)
        if (this.productDetail.quantity < 0) this.quantityState = false
      }
    },
    setModification(modification, item, $event) {
      const parent = $event.target.parentNode.parentNode
      Array.from(parent.children).map(el => {el.children[1].classList.remove('green-color')})
      $event.target.classList.toggle('green-color')
      this.activeModifications[modification] = item
      if (Object.keys(this.productDetail.modification).length === 1) this.colorState = false

      let char = ''
      for (let i in this.activeModifications) {
        char += `${i}: ${this.activeModifications[i]}; `
      }
      this.modificationsChar = char
    },
    changeLike(){
      this.$store.commit('changeProductLike', !this.productDetail.data[0].like)
    },
  }
}
</script>

<style scoped lang="scss">

* {
  color: $black;
}

button {
  border: none;
}

.page-background {
  padding-bottom: rem(180);

  @media screen and (max-width: 768px){
    padding-bottom: rem(32);
  }
}

.block {
  padding: rem(10) rem(40);
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 10px;

  span {
    @include style-font(20);
    color: $black;
  }
}

.margins {
  margin-bottom: rem(30);
}

.product-info {
  margin-left: rem(20);

  &-container {
    display: flex;
    align-items: stretch;
    gap: rem(20);
  }


  &-main {
    width: rem(652);
    padding: rem(30) rem(40) rem(27);

    h1 {
      @include style-font(24, 750, 140%, false);
      margin-bottom: rem(10);
      text-transform: uppercase;
      max-width: rem(425);
    }

    h3 {
      @include style-font(32, 750, 140%, false);
      color: rgba(22, 22, 22, 1);
      text-transform: uppercase;
    }

    .flex-between {
      align-items: flex-end;
    }
  }

  &-map {
    gap: rem(10);
    width: rem(332);

    svg {
      width: rem(40);
      height: rem(40);
    }
  }

  &-cart {
    padding: rem(18) rem(40) rem(18) rem(34);
    gap: rem(10);
    transition: .25s;

    &:hover {
      background: $green;

      span {
        color: #FFFFFF;
      }
    }

    svg {
      width: rem(24);
      height: rem(24);
      transition: .25s;
    }

    span {
      @include style-font(20, 750, 140%, false);
      color: $green;
      transition: .25s;
    }

    .counter {
      display: flex;
      align-items: center;
      gap: rem(4);

      span {
        color: #FFFFFF;
        width: rem(20);
        @include style-font(20, 750, 140%, false);
      }

      .minus {
        display: block;
        margin-bottom: rem(-3);
        width: rem(10);
        padding: rem(5);
        position: relative;

        &::after {
          content: '';
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%);
          width: 100%;
          height: 2px;
          background: #FFFFFF;
        }
      }

      .count {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  &-cart-active {
    background: $green;

    span {
      color: #FFFFFF;
    }
  }

  &-btn {
    padding: rem(16) rem(18);
    width: rem(68);
    //height: rem(60);

    svg {
      width: rem(28);
      height: rem(28);
    }
  }

  &-additional {
    width: rem(379);
    height: rem(169);
    padding: rem(20) rem(40) rem(30);

    .flex-column {
      margin-bottom: rem(20);
    }

    span {
      * {
        color: rgba(85, 92, 90, 1);
      }
      @include style-font(14, 400);
      margin-bottom: rem(4);
    }

    p {
      color: rgba(138, 146, 143, 1);
      @include style-font(12);
    }
  }
}

.product-tabs {
  margin-top: rem(111);

  @media screen and (max-width: 768px) {
    margin-top: rem(30);
  }

  ul {
    width: 100%;
    gap: rem(10);
    margin-bottom: rem(30);

    @media screen and (max-width: 768px) {
      margin-bottom: rem(20);
      overflow-x: auto;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  li {
    padding: rem(10) rem(20);
    background: #FFFFFF;
    border-radius: 10px;
    color: rgba(138, 146, 143, 1);
    @include style-font(16);
    cursor: pointer;
    transition: .25s;

    @media screen and (max-width: 768px) {
      padding: rem(8) rem(18);
    }

    &:hover {
      background: $green;
      color: #FFFFFF;
    }
  }

  & &-active {
    background: $green;
    color: #FFFFFF;
  }

  & &-disable {
    background: rgba(255, 255, 255, .4);
    cursor: default;

    &:hover {
      color: rgba(138, 146, 143, 1);
      background: rgba(255, 255, 255, .4);
    }
  }

  &-container {
    width: 100%;
  }
}

.color-block {
  flex: 1;
  position: relative;
  padding: 0;
  border: 1px solid #FFFFFF;
  transition: .25s;
  max-width: 42%;
  justify-content: flex-start !important;

  span {
    padding: rem(15) rem(40);
    width: 100%;
    height: rem(60);
    text-align: left;
  }

  .colors-list {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 4;
    background: #FFFFFF;
    width: 220%;
    box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
    border-radius: 8px;
    padding: rem(15) 0 rem(17) rem(20);
    cursor: default;

    span {
      @include style-font(20);
      display: block;
      text-align: left;
      transition: .25s;
      height: auto;
      padding: 0;
    }

    .title {
      margin-bottom: rem(15);
    }

    ul {
      width: 100%;
      gap: rem(5);
      padding-bottom: rem(30);
      justify-content: space-between;

      li {
        width: 49%;
        cursor: pointer;
        transition: .25s;
        display: flex;
        align-items: center;
        gap: rem(4);

        &:hover span {
          color: $green;
        }

        div {
          width: rem(10);
          height: rem(10);
          background: $green;
          border-radius: 2px;
        }
      }
    }

    svg {
      width: rem(30);
      height: rem(10);
      cursor: pointer;
      position: absolute;
      left: 50%;
      bottom: 5%;
      transform: translateX(-50%);
    }
  }
}

.product-info-map {
  position: relative;
  border: 1px solid #FFFFFF;
  transition: .25s;
  padding: 0;

  .product-info-map-content {
    width: 100%;
    padding: 0;
    justify-content: center;
    height: rem(60);
    gap: rem(10);
  }

  .map-list {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 4;
    background: #FFFFFF;
    width: rem(421);
    box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
    border-radius: 8px;
    padding: rem(10) rem(40) rem(17);
    cursor: default;

    span {
      @include style-font(20);
      color: $black;
      text-align: left;
    }

    .title {
      display: flex;
      align-items: center;

      svg {
        width: rem(40);
        height: rem(40);
        margin-right: rem(10);
      }
    }

    svg {
      cursor: pointer;
      width: rem(30);
      height: rem(14);
    }

    ul {
      gap: rem(20);
      padding-bottom: rem(30);
      margin-top: rem(10);
    }

    li {
      display: flex;
      flex-direction: column;
      //align-items: flex-start;
      width: 100%;
      gap: rem(8);

      svg {
        width: rem(14);
        height: rem(14);
        margin-right: rem(4);
        cursor: default;
      }
    }

    .address {
      padding-left: rem(18);
    }
  }
}

.drop-enter {
  opacity: 0;
  transition: .25s;
  top: -10%;
}

.drop-enter-to {
  opacity: 1;
  top: 0%;
  transition: .25s
}

.drop-leave-to {
  opacity: 0;
  transition: .25s;
  top: -10%;
}

.green-border {
  border-color: $green;
}

.green-color {
  color: $green !important;
}

.active-color span{
  text-align: left;
  justify-content: flex-start !important;
}

.color-disable {
  cursor: default;
  background: rgba(255, 255, 255, .3);
}

</style>
