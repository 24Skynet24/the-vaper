<template>
  <div>
    <main class="page-background">
      <banner-cmp/>

      <custom-section :section-info="categorySection">
        <div class="container">
          <client-only>
            <div class="category-swiper parent" v-if="windowWidth > 768">
              <swiper-wrap :slides-per-view="4" :space-between="pxToVw(100)" @swiper="swiperInit($event)" @slideChange="slideChange($event)">
                <swiper-slide v-for="(item, id) in this.normalCategories(this.getCategories)" :key="`index_category_card_${id}`">
                  <category-card :card-info="item"/>
                </swiper-slide>
              </swiper-wrap>

              <svg v-show="activeSlide !== 0" @click="setSlide(false)" class="category-swiper-prev" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1720_7572)">
                  <path d="M18.5313 12.1965C18.6239 12.0882 18.6239 11.9123 18.5313 11.804L16.7059 9.66642L9.01011 0.654031C8.65243 0.235412 8.16758 -2.94335e-07 7.66225 -2.50158e-07L5.03817 -2.07536e-08C4.82718 -2.30756e-09 4.72143 0.299221 4.87055 0.473726L14.5458 11.804C14.6384 11.9123 14.6384 12.0882 14.5458 12.1965L4.87055 23.5263C4.72144 23.7013 4.82718 24 5.03818 24L7.66225 24C8.16807 24 8.65292 23.7646 9.0106 23.346L16.7064 14.3336L18.5318 12.196L18.5313 12.1965Z" fill="#00A689"/>
                </g>
                <defs>
                  <clipPath id="clip0_1720_7572">
                    <rect width="24" height="24" fill="white" transform="matrix(-1 8.74228e-08 8.74228e-08 1 24 0)"/>
                  </clipPath>
                </defs>
              </svg>
              <svg v-show="activeSlide !== this.normalCategories(this.getCategories).length - 4" @click="setSlide()" class="category-swiper-next" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </client-only>

          <div class="category-cards flex-column" v-if="windowWidth <= 768">
            <!-- v-show don't working -->
            <nuxt-link
              class="flex-center"
              :to="item.url" exact no-prefetch
              v-for="(item, id) in this.normalCategories(this.getCategories)" :key="`category_card_mob_${id}`"
              v-if="5 > +id"
            >
              {{ item.title }}
            </nuxt-link>
            <!--  -->
            <nuxt-link class="flex-center btn" to="/catalog" exact no-prefetch>
              посмотреть все
            </nuxt-link>
          </div>
        </div>
      </custom-section>

      <custom-section
        v-for="(section, id) in sectionsInfo"
        :key="`main_section_${id}`"
        :section-info="section.sectionInfo"
      >
        <div class="container flex-wrap cards-container" v-if="windowWidth > 768">
          <vape-card
            v-for="(item, key) in section.cards"
            :key="`stock_vaper_card_${key}`"
            :card-info="item"
          />
        </div>

        <div class="container mobile-cards-container" v-else>
          <client-only>
            <mobile-vaper-slider :cards-info="section.cards"/>
          </client-only>
        </div>
      </custom-section>

      <custom-section :section-info="brandsSection">
        <div class="container brands-container flex-wrap">
          <nuxt-link
            to="/catalog" exact no-prefetch
            class="brands-container-item flex-center"
            v-for="(item, id) in brands" :key="`brand_${id}`"
          >
            <h4>{{ item }}</h4>
          </nuxt-link>
          <nuxt-link to="/" exact no-prefetch class="brands-container-item flex-center">
            <svg width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.8295 30.4912C34.0576 30.2205 34.0576 29.7807 33.8295 29.51L29.332 24.166L10.3708 1.63508C9.48956 0.588531 8.29495 0 7.04992 0H0.584652C0.0647894 0 -0.195742 0.748051 0.171643 1.18431L24.0097 29.51C24.2378 29.7807 24.2378 30.2205 24.0097 30.4912L0.171643 58.8157C-0.195742 59.2532 0.0647894 60 0.584652 60H7.04992C8.29615 60 9.49076 59.4115 10.372 58.3649L29.3332 35.834L33.8307 30.49L33.8295 30.4912Z" fill="#00A689"/>
            </svg>
          </nuxt-link>
        </div>
      </custom-section>
    </main>

    <footer>
      <article>Наши преимущества</article>

      <div class="flex-align-center pluses container">
        <div class="pluses-item">
          <svg class="wallet" width="104" height="90" viewBox="0 0 104 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92.8038 67.7386V85.1244C92.8038 86.2579 91.8981 87.174 90.7774 87.174H4.81521C3.69457 87.174 2.78883 86.2579 2.78883 85.1244V23.0656C2.78883 21.9321 3.69457 21.016 4.81521 21.016H90.7774C91.8981 21.016 92.8038 21.9321 92.8038 23.0656V40.6636H95.5926V21.7044C95.5926 19.7686 94.0421 18.1952 92.1232 18.1952H3.46941C1.55561 18.1952 0 19.7635 0 21.7044V86.4907C0 88.4265 1.5505 90 3.46941 90H92.1232C94.037 90 95.5926 88.4317 95.5926 86.4907V67.7438H92.8038V67.7386Z" fill="white"/>
            <path d="M101.825 43.4792H69.9252C68.7227 43.4792 67.7505 44.4626 67.7505 45.679V46.295H99.9472C100.648 46.295 101.211 46.8695 101.211 47.5786V60.8184C101.211 61.5275 100.643 62.0968 99.9472 62.0968H67.7505V62.7128C67.7505 63.9292 68.7227 64.9126 69.9252 64.9126H101.825C103.028 64.9126 104 63.9292 104 62.7128V45.6738C104 44.4574 103.028 43.474 101.825 43.474V43.4792Z" fill="white"/>
            <path d="M37.3395 15.3744L67.9961 2.47082C68.6357 2.20167 69.3112 2.06708 69.9815 2.06708C70.6519 2.06708 71.3171 2.20167 71.9516 2.46564C73.2309 2.99875 74.2236 4.00285 74.7558 5.29164L78.9057 15.3795H81.1215L76.644 4.49984C75.902 2.69864 74.5153 1.29592 72.7294 0.555769C70.9486 -0.189556 68.9837 -0.18437 67.2029 0.566131L32.0075 15.3846H37.3344L37.3395 15.3744Z" fill="white"/>
          </svg>
          <p>Оплата при получении</p>
        </div>
        <div class="pluses-item">
          <svg class="gift" width="94" height="99" viewBox="0 0 94 99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.7266 98.9947H56.2736C57.3006 98.9947 58.1331 98.2126 58.1331 97.2431V30.9332C58.1331 29.9636 57.3006 29.1816 56.2736 29.1816H37.7266C36.6995 29.1816 35.867 29.9636 35.867 30.9332V97.2431C35.867 98.2126 36.6995 98.9947 37.7266 98.9947Z" fill="white"/>
            <path d="M32.8938 96.0753H4.58405C3.68129 96.0753 2.94612 95.3468 2.94612 94.4522V35.9523C2.94612 35.0578 3.68129 34.3293 4.58405 34.3293H32.8938V31.4099H3.66508C1.64334 31.4099 0 33.033 0 35.0417V95.3576C0 97.361 1.63794 98.9894 3.66508 98.9894H32.8938V96.0699V96.0753Z" fill="white"/>
            <path d="M90.3349 31.4153H61.1062V34.3346H89.4159C90.3187 34.3346 91.0539 35.0631 91.0539 35.9577V94.4576C91.0539 95.3521 90.3187 96.0807 89.4159 96.0807H61.1062V99H90.3349C92.3567 99 94 97.3771 94 95.3683V35.0525C94 33.0491 92.3621 31.4206 90.3349 31.4206V31.4153Z" fill="white"/>
            <path d="M33.2505 28.5012C33.8667 27.1781 35.2128 26.2515 36.7804 26.2515H44.9917L21.1795 0.96277C20.0281 -0.258545 18.0928 -0.328197 16.8603 0.812768L4.82182 11.9439C3.58931 13.0849 3.51904 15.0025 4.67046 16.2238L16.2279 28.4959H33.2505V28.5012Z" fill="white"/>
            <path d="M60.7494 28.5012C60.1332 27.1781 58.7871 26.2515 57.2195 26.2515H49.0082L72.8204 0.96277C73.9718 -0.258545 75.907 -0.328197 77.1395 0.812768L89.1781 11.9439C90.4106 13.0849 90.4808 15.0025 89.3294 16.2238L77.772 28.4959H60.7494V28.5012Z" fill="white"/>
          </svg>
          <p>Программа бонусов</p>
        </div>
        <div class="pluses-item" >
          <svg class="car" width="130" height="83" viewBox="0 0 130 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M108.316 83C101.573 83 96.0904 77.4606 96.0904 70.6477C96.0904 63.8347 101.573 58.2953 108.316 58.2953C115.058 58.2953 120.541 63.8347 120.541 70.6477C120.541 77.4606 115.058 83 108.316 83ZM108.316 61.1727C103.146 61.1727 98.943 65.4242 98.943 70.6429C98.943 75.8615 103.146 80.113 108.316 80.113C113.485 80.113 117.688 75.8615 117.688 70.6429C117.688 65.4242 113.485 61.1727 108.316 61.1727Z" fill="white"/>
            <path d="M19.2948 83C12.5521 83 7.06971 77.4606 7.06971 70.6477C7.06971 63.8347 12.5521 58.2953 19.2948 58.2953C26.0376 58.2953 31.52 63.8347 31.52 70.6477C31.52 77.4606 26.0376 83 19.2948 83ZM19.2948 61.1727C14.1252 61.1727 9.92225 65.4242 9.92225 70.6429C9.92225 75.8615 14.1252 80.113 19.2948 80.113C24.4645 80.113 28.6674 75.8615 28.6674 70.6429C28.6674 65.4242 24.4645 61.1727 19.2948 61.1727Z" fill="white"/>
            <path d="M127.587 75.8998H121.735V70.6429C121.735 63.1644 115.717 57.084 108.316 57.084C103.274 57.084 98.7013 59.9088 96.3889 64.4524L96.2894 64.6486H31.3209L31.2215 64.4524C28.9044 59.9088 24.3365 57.084 19.2948 57.084C14.2532 57.084 9.68059 59.9088 7.36824 64.4524L7.26873 64.6486H0V3.24609C0 1.45548 1.44048 0 3.21265 0H99.4831C101.255 0 102.696 1.45548 102.696 3.24609V16.3597H110.391C110.997 16.3597 112.845 16.3549 114.461 16.7284C116.887 17.2886 118.432 18.969 120.133 21.4969C123.403 26.3517 126.051 32.9205 128.013 41.0165C131.363 54.8482 129.468 73.8651 129.449 74.0566C129.449 75.0572 128.615 75.895 127.591 75.895L127.587 75.8998ZM122.45 75.1816H127.587C128.217 75.1816 128.733 74.6646 128.733 74.023C128.752 73.798 130.633 54.9008 127.317 41.1936C125.379 33.1789 122.763 26.6916 119.541 21.9086C117.935 19.5243 116.499 17.9445 114.3 17.437C112.765 17.0779 110.979 17.0827 110.391 17.0875H101.98V3.25088C101.98 1.85765 100.862 0.727743 99.4831 0.727743H3.21265C1.83377 0.727743 0.715506 1.85765 0.715506 3.25088V63.9353H6.83754C9.30625 59.2672 14.0589 56.3754 19.2996 56.3754C24.5403 56.3754 29.2929 59.2672 31.7616 63.9353H95.863C98.3317 59.2672 103.084 56.3754 108.325 56.3754C116.12 56.3754 122.46 62.7814 122.46 70.6572V75.1912L122.45 75.1816Z" fill="white"/>
            <path d="M5.87564 75.8998H3.2079C1.44047 75.8998 0 74.4443 0 72.6585V65.3907H6.92757L6.7475 65.8791C6.16942 67.4303 5.87564 69.0342 5.87564 70.6477V75.9046V75.8998ZM0.710763 66.1089V72.6585C0.710763 74.0469 1.82902 75.1816 3.2079 75.1816H5.16013V70.6477C5.16013 69.1156 5.41127 67.5931 5.90407 66.1137H0.710763V66.1089Z" fill="white"/>
            <path d="M94.8964 75.8998H32.7093V70.6429C32.7093 69.0294 32.4156 67.4255 31.8375 65.8743L31.6574 65.3859H95.9483L95.7682 65.8743C95.1901 67.4255 94.8964 69.0294 94.8964 70.6429V75.8998ZM33.4248 75.1816H94.1856V70.6477C94.1856 69.1156 94.4367 67.5931 94.9295 66.1137H32.6809C33.1737 67.5931 33.4248 69.1156 33.4248 70.6477V75.1816Z" fill="white"/>
            <path d="M117.878 40.7148H101.928V24.5084H110.424C113.514 24.5084 116.314 26.4714 117.39 29.3967L120.275 37.2245C120.569 38.0193 120.455 38.9098 119.977 39.604C119.498 40.2982 118.712 40.7148 117.878 40.7148ZM117.878 39.9966C118.489 39.9966 119.043 39.7046 119.394 39.1971C119.745 38.6896 119.82 38.0624 119.607 37.4831L116.721 29.6552C115.745 27.0124 113.215 25.2314 110.424 25.2314H102.639V39.9966H117.878Z" fill="white"/>
            <path d="M15.523 3.91644H15.016V51.2H15.523V3.91644Z" fill="white"/>
            <path d="M30.3306 3.91644H29.8236V51.2H30.3306V3.91644Z" fill="white"/>
            <path d="M45.1429 3.91644H44.6359V51.2H45.1429V3.91644Z" fill="white"/>
            <path d="M91.6079 39.9393L87.6371 49.5769L84.1449 39.9393H83.1593L87.2722 51.1185H88.8785L93.5222 39.9393H91.6079Z" fill="white"/>
            <path clip-rule="evenodd" d="M93.527 46.7809L91.7216 51.1233H93.527V46.7809Z" fill="white"
                  fill-rule="evenodd"/>
            <path clip-rule="evenodd" d="M90.9729 39.9393L87.675 48.0113L86.2914 44.1859L87.9403 39.9393H90.9729Z"
                  fill="white" fill-rule="evenodd"/>
            <path clip-rule="evenodd" d="M83.1687 42.2182L86.3766 51.1233H83.1687V42.2182Z" fill="white"
                  fill-rule="evenodd"/>
            <path d="M59.9505 3.91644H59.4434V51.2H59.9505V3.91644Z" fill="white"/>
            <path d="M74.7627 3.91644H74.2558V51.2H74.7627V3.91644Z" fill="white"/>
          </svg>
          <p>доставка по россии</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import BannerCmp from "../components/BannerCmp";
import CategoryCard from "../components/Catalog/CategoryCard";
import CustomSection from "../components/CustomSection";
import VapeCard from "../components/VapeCard";
import AgeVerification from "../components/Modals/AgeVerification";
import CookiesModal from "../components/Modals/CookiesModal";
import clientData from "../mixins/clientData";
import MobileVaperSlider from "../components/MobileVaperSlider";
import categoriesMixin from "../mixins/productsMixin";

export default {
  name: "IndexPage",
  components: {
    MobileVaperSlider,
    CookiesModal,
    BannerCmp, CategoryCard,
    CustomSection, VapeCard, AgeVerification,
  },
  mixins: [clientData, categoriesMixin],
  async asyncData({ store, $services, $toast }) {
    try {
      const res = await $services.CategoriesServices.getCategories()
      store.commit('setGeneral', {path: 'categories', payload: res})
    } catch (e) {
      $toast.error('Ошибка загрузки категорий!').goAway(2000)
      console.error('Categories ', e)
    }
  },
  data() {
    return {
      categories: [],
      sectionsInfo: [
        {
          sectionInfo: {
            url: '/catalog',
            title: 'Новинки'
          },
          cards: [
        {
          like: false,
          url: '/product',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
          fortress: [
            {
              min: 20,
              max: 30,
            }
          ],
          stock: [{title: 'ул. Космонавтов, 100'}],
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
          fortress: [
            {
              min: 20,
              max: 30,
            }
          ],
          stock: [{title: 'ул. Космонавтов, 100'}],
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
          fortress: [
            {
              min: 20,
              max: 30,
            }
          ],
          stock: [{title: 'ул. Космонавтов, 100'}],
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
          fortress: [
            {
              min: 20,
              max: 30,
            }
          ],
          stock: [{title: 'ул. Космонавтов, 100'}],
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
          fortress: [
            {
              min: 20,
              max: 30,
            }
          ],
          stock: [{title: 'ул. Космонавтов, 100'}],
        },
      ],
        },
        {
          sectionInfo: {
            url: '/catalog',
            title: 'Акции'
          },
          cards: [
        {
          like: false,
          url: '/product',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
          fortress: [
            {
              min: 20,
              max: 30,
            }
          ],
          stock: [{title: 'ул. Космонавтов, 100'}],
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
          fortress: [
            {
              min: 20,
              max: 30,
            }
          ],
          stock: [{title: 'ул. Космонавтов, 100'}],
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
          fortress: [
            {
              min: 20,
              max: 30,
            }
          ],
          stock: [{title: 'ул. Космонавтов, 100'}],
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
          fortress: [
            {
              min: 20,
              max: 30,
            }
          ],
          stock: [{title: 'ул. Космонавтов, 100'}],
        },
        {
          like: false,
          url: '/product',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 400
          },
          fortress: [
            {
              min: 20,
              max: 30,
            }
          ],
          stock: [{title: 'ул. Космонавтов, 100'}],
        },
      ],
        },
      ],

      categorySection: {
        url: '/catalog',
        title: 'Категории'
      },
      brandsSection: {
        url: '/catalog',
        title: 'Бренды'
      },
      brands: [
        'voopoo',
        'Vaporesso',
        'geekvape',
        'smoant',
        'rincoe',
        'smok',
        'brusko',
      ],

      swiperData: null,
      activeSlide: 0
    }
  },
  computed: {
    getCategories(){
      return this.$store.getters.getCategories
    },
  },
  methods: {
    swiperInit(e) {
      this.swiperData = e
    },
    slideChange(e){
      this.activeSlide = e.activeIndex
    },
    setSlide(state = true){
      if (state) this.swiperData.slideNext()
      else this.swiperData.slidePrev()
    },
  },
}
</script>

<style lang="scss" scoped>

.category-swiper {
  height: rem(320);

  .swiper-container {
    padding: rem(20) 0;

    .swiper-slide {
      margin-right: 0 !important;
      width: 25.1% !important;
    }
  }

  .category-swiper-next, .category-swiper-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: rem(60);
    height: rem(60);
    cursor: pointer;
  }

  .category-swiper-prev {
    left: -6%;
    transform: rotate(180deg) translateY(50%);
  }

  .category-swiper-next {
    right: -6%;
  }
}

footer {
  width: 100%;
  position: relative;
  background: $black;
  padding-top: rem(100);

  article {
    padding: rem(20);
    width: rem(652);
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    background: $green;
    text-align: center;
    @include style-font(36, 750, 140%, false);
    color: #FFFFFF;
    border-radius: 0 0 10px 10px;
    text-transform: uppercase;

    @media screen and (max-width: 768px){
      width: rem(257);
      @include style-font(18, 450, 140%, false);
    }
  }

  .pluses {
    justify-content: center;
    padding-bottom: rem(90);
    border-bottom: 1px solid $green;

    @media screen and (max-width: 768px){
      flex-direction: column !important;
      padding-bottom: rem(20);
    }

    &-item {
      width: 33%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: rem(50) rem(40);

      @media screen and (min-width: $laptop) {
        &:hover svg path{
          fill: $green;
        }
      }

      p {
        @include style-font(36, 750, 140%, false);
        color: $green;
        text-align: center;
        margin-top: rem(40);
        text-transform: uppercase;
      }

      svg *{
        transition: .25s;
      }

      .wallet {
        width: rem(104);
        height: rem(90);
        @media screen and (max-width: 768px) {
          width: rem(64);
          height: rem(55);
        }
      }

      .gift {
        width: rem(94);
        height: rem(99);
        @media screen and (max-width: 768px) {
           width: rem(58);
          height: rem(61);
        }
      }

      .car {
        width: rem(130);
        height: rem(83);
        @media screen and (max-width: 768px) {
           width: rem(80);
          height: rem(51);
        }
      }

      @media screen and (max-width: 768px) {
        width: 100%;

        p {
          @include style-font(20, 750, 140%, false);
          max-width: rem(150);
        }
      }
    }
  }

}

.container.flex-wrap.cards-container {
  gap: rem(20);
  position: relative;

  @media screen and (max-width: 768px){
    display: none !important;
  }
}

.brands-container {
  background: $white;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);

  @media screen and (max-width: 768px){
    box-shadow: none;
    border-radius: 0;
    background: none;
    justify-content: space-between;
    gap: rem(20);
  }

  &-item {
    width: 25%;
    border: 2px solid #E3E6E4;
    padding: rem(45) rem(10);
    transition: .25s;;
    background: #FFFFFF;

    @media screen and (min-width: $laptop) {
      &:hover {
        border-color: $green;

        h4 { color: $green; }
      }
    }

    &:first-child {
      border-radius: 10px 0 0 0;
    }
    &:nth-child(4) {
      border-radius: 0 10px 0 0;
    }
    &:last-child {
      border-radius: 0 0 10px 0;
    }
    &:nth-child(5) {
      border-radius: 0 0 0 10px;
    }

    h4 {
      transition: .25s;
      @include style-font(36, 750, 140%, false);
      color: #8A928F;
      text-transform: uppercase;
    }

    svg {
      width: rem(34);
      height: rem(60);
    }

    @media screen and (max-width: 768px){
      width: calc(50% - #{rem(10)});
      border-radius: 8px !important;
      padding: rem(24) rem(10);
      height: rem(70);
      color: rgba(79, 90, 86, 1);
      box-shadow: 0px 2px 6px 2px rgba(77, 102, 91, 0.3);
      border: none;

      h4 {
        @include style-font(16, 750, 140%, false);
      }

      svg {
        width: rem(23);
        height: rem(40);
      }
    }
  }
}

.category-cards {
  gap: rem(22);
  display: none !important;

  @media screen and (max-width: 768px){
    display: flex !important;
  }

  a {
    width: 100%;
    height: calc(rem(56) + 1px);
    text-align: center;
    background: rgba(255, 255, 255, 1);
    box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
    border-radius: 8px;
    text-transform: uppercase;
    color: $black;
    @include style-font(14, 700, 140%, false);

    @media screen and (max-width: 768px){
      box-shadow: 0px 2px 6px 2px rgba(77, 102, 91, 0.3);
    }
  }

  .btn {
    width: rem(200);
    background: $green;
    color: #FFFFFF;
    margin: rem(10) auto 0;
    height: rem(50);
  }
}

.mobile-cards-container {
  height: rem(500);

  .flex-column.slide-wrap {
    gap: rem(20);
  }
}

</style>
