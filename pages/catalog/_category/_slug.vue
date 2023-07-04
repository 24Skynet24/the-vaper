<template>
  <div class="page-background product-page" @click="setSortActive = false; mobileMenu = false">
    <div class="bread-crumbs container" v-if="windowWidth > 768">
      <bread-crumbs :bread-crumbs="breadCrumbsUser"/>
    </div>

    <custom-section :section-info="catalogInfo">
      <div class="container">
        <div @click.stop style="height: 100%;">
          <transition name="drop-right">
            <mobile-filters
              v-if="windowWidth <= 768 && mobileMenu"
              @closeFilters="mobileMenu = false"
            />
          </transition>
        </div>

        <div class="sort-wrap flex-align-center" @click.stop>
          <div class="sort-text">
            <div
              class="title flex-align-center"
              :class="[{'active-title' : setSortActive}]"
              @click="setSortActive = !setSortActive"
            >
              <span>{{  activeSort.title }}</span>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.999999L7 7L13 1" stroke="#00A689" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <transition name="drop">
              <ul class="body" v-if="setSortActive" @mousemove="setSortActive = true" @mouseleave="setSortActive = false">
                <li
                  v-for="item in sortList"
                  :key="`sort_${item.id}`"
                  :class="[{'active-sort' : item.id === activeSort.id}]"
                  @click="setSortItem(item)"
                >
                  {{ item.title }}
                </li>
              </ul>
            </transition>
          </div>
          <div class="filters" v-if="windowWidth <= 768" @click="mobileMenu = true; setSortActive = false">
            <span>Фильтры</span>
            <span class="num">4</span>
          </div>
          <div class="icons" v-if="windowWidth > 768">
            <svg :class="{'active-icon' : !catalogWrap}" @click="catalogWrap = false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6H21" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 12H21" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 18H21" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 6H3.01" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 12H3.01" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 18H3.01" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg :class="{'active-icon' : catalogWrap}" @click="catalogWrap = true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3H3V10H10V3Z" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 3H14V10H21V3Z" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 14H14V21H21V14Z" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 14H3V21H10V14Z" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <main class="flex">
          <aside class="flex-column" v-if="windowWidth > 768">
            <ul class="flex-column">
              <li v-for="(item, id) in filters" :key="`catalog_filter_${id}`">
                <div v-if="item.type === 'range'">
                  <div class="title flex-align-center flex-between" @click="item.active = !item.active">
                    <span><b>{{ item.title }}</b></span>

                    <svg :class="{'active-filter' : item.active}" fill="none" height="8" viewBox="0 0 14 8" width="14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 0.999999L7 7L13 1" stroke="#00A689" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </svg>
                  </div>

                  <div class="custom-range" v-if="item.active">
                    <div class="custom-range-score">
                      <input
                        type="number"
                        :value="item.price.minValue"
                        :min="+item.price.min"
                        :max="+item.price.max"
                        @input="setPrice($event, item.price, true)"
                      >

                      <span class="line"></span>

                      <input
                        type="number"
                        :value="+item.price.maxValue"
                        :min="+item.price.min"
                        :max="+item.price.max"
                        @input="setPrice($event, item.price)"
                      >
                    </div>
                    <client-only>
                      <multi-range-slider
                        class="range-slider"
                        :max="+item.price.max"
                        :min="+item.price.min"
                        :max-value="+item.price.maxValue"
                        :min-value="+item.price.minValue"
                        :step="1"
                        @input="changeRange($event, item.price)"
                      />
                    </client-only>
                  </div>
                </div>
                <div v-else-if="item.type === 'radio'">
                  <div class="title flex-align-center flex-between" @click="item.active = !item.active">
                    <span><b>{{ item.title }}</b></span>

                    <svg :class="{'active-filter' : item.active}" fill="none" height="8" viewBox="0 0 14 8" width="14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 0.999999L7 7L13 1" stroke="#00A689" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </svg>
                  </div>

                  <div class="list" v-if="item.active">
                    <label class="list-item custom-radio" v-for="(el, i) in item.children" :key="`radio_catalog_${i}`" @click="radioId = el.id">
                      <div :class="['radio', {'active' : el.id === radioId}]">
                        <span></span>
                      </div>
                      <span>{{ el.title }}</span>
                    </label>
                  </div>
                </div>
                <div v-else-if="item.type === 'checkbox'">
                  <div class="title flex-align-center flex-between" @click="item.active = !item.active">
                    <span><b>{{ item.title }}</b></span>

                    <svg :class="{'active-filter' : item.active}" fill="none" height="8" viewBox="0 0 14 8" width="14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 0.999999L7 7L13 1" stroke="#00A689" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="list" v-if="item.active">
                    <div class="list-item custom-checkbox" v-for="(el, id) in item.children" :key="`catalog_check_${id}`" @click="el.active = !el.active">
                      <div :class="{'active-checkbox' : el.active}" class="checkbox">
                        <svg fill="none" height="14" viewBox="0 0 17 14" width="17" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5 7.5L6 12L16 1" stroke="white" stroke-width="2"/>
                        </svg>
                      </div>
                      <span>{{ el.title }}</span>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <button class="res-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0002 13.022L8.42301 16.5992C8.28917 16.733 8.11883 16.8 7.91198 16.8C7.70514 16.8 7.5348 16.733 7.40096 16.5992C7.26712 16.4654 7.2002 16.295 7.2002 16.0882C7.2002 15.8813 7.26712 15.711 7.40096 15.5771L10.9781 12L7.40096 8.42276C7.26712 8.28892 7.2002 8.11858 7.2002 7.91174C7.2002 7.70489 7.26712 7.53455 7.40096 7.40071C7.5348 7.26687 7.70514 7.19995 7.91198 7.19995C8.11883 7.19995 8.28917 7.26687 8.42301 7.40071L12.0002 10.9779L15.5774 7.40071C15.7112 7.26687 15.8816 7.19995 16.0884 7.19995C16.2953 7.19995 16.4656 7.26687 16.5994 7.40071C16.7333 7.53455 16.8002 7.70489 16.8002 7.91174C16.8002 8.11858 16.7333 8.28892 16.5994 8.42276L13.0222 12L16.5994 15.5771C16.7333 15.711 16.8002 15.8813 16.8002 16.0882C16.8002 16.295 16.7333 16.4654 16.5994 16.5992C16.4656 16.733 16.2953 16.8 16.0884 16.8C15.8816 16.8 15.7112 16.733 15.5774 16.5992L12.0002 13.022Z" fill="#8A928F"/>
                  </svg>
                  <span>Сбросить фильтр</span>
                </button>
              </li>
            </ul>
          </aside>

          <div class="flex-column cards-wrap">
            <div class="flex-wrap" v-if="catalogWrap">
              <vape-card
                v-for="(item, id) in products"
                :key="`catalog_product_${id}`"
                :card-info="item"
              />
            </div>
            <div class="flex-wrap" v-else>
                <vaper-line-card
                  v-show="windowWidth > 768"
                  v-for="(item, id) in products"
                  :key="`catalog_line_card_${id}`"
                  :card-info="item"
                />
               <vape-card
                 v-show="windowWidth <= 768"
                 v-for="(item, id) in products"
                 :key="`catalog_product_${id}`"
                 :card-info="item"
               />
            </div>
            <div class="pagination flex-center">
              <svg @click="changePage(+pagePagination - 1)" class="pag-prev" width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.8295 30.4912C34.0576 30.2205 34.0576 29.7807 33.8295 29.51L29.332 24.166L10.3708 1.63508C9.48956 0.588531 8.29495 0 7.04992 0H0.584652C0.0647894 0 -0.195742 0.748051 0.171643 1.18431L24.0097 29.51C24.2378 29.7807 24.2378 30.2205 24.0097 30.4912L0.171643 58.8157C-0.195742 59.2532 0.0647894 60 0.584652 60H7.04992C8.29615 60 9.49076 59.4115 10.372 58.3649L29.3332 35.834L33.8307 30.49L33.8295 30.4912Z" fill="#00A689"/>
              </svg>

              <div class="pag-wrap flex-align-center">
                <div
                  class="pag-wrap-item"
                  @click="changePage(1)"
                  v-if="5 < +pagePagination"
                >
                  1
                </div>
                <div
                  class="pag-wrap-item"
                  v-if="5 < +pagePagination"
                >
                  ...
                </div>

                <div
                  class="pag-wrap-item"
                  :class="{'pag-wrap-item-active' : +index === +pagePagination}"
                  v-for="index in paginationTotal"
                  @click="changePage(index)"
                  v-if="+index <= +pagePagination + 4 && +index + 5 > +pagePagination"
                >
                  {{ index }}
                </div>

                <div
                  class="pag-wrap-item"
                  v-if="paginationTotal > +pagePagination + 4"
                >
                  ...
                </div>
                <div
                  class="pag-wrap-item"
                  @click="changePage(paginationTotal)"
                  v-if="paginationTotal > +pagePagination + 4"
                >
                  {{ paginationTotal }}
                </div>
              </div>

              <svg @click="changePage(+pagePagination + 1)" class="pag-next" width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.8295 30.4912C34.0576 30.2205 34.0576 29.7807 33.8295 29.51L29.332 24.166L10.3708 1.63508C9.48956 0.588531 8.29495 0 7.04992 0H0.584652C0.0647894 0 -0.195742 0.748051 0.171643 1.18431L24.0097 29.51C24.2378 29.7807 24.2378 30.2205 24.0097 30.4912L0.171643 58.8157C-0.195742 59.2532 0.0647894 60 0.584652 60H7.04992C8.29615 60 9.49076 59.4115 10.372 58.3649L29.3332 35.834L33.8307 30.49L33.8295 30.4912Z" fill="#00A689"/>
              </svg>
            </div>
          </div>
        </main>

        <recommendation-products
          :rec-items="recommendationProducts"
          :items-show="4"
          class="recommendation-container"
        />
      </div>
    </custom-section>
  </div>
</template>

<script>
import BreadCrumbs from "../../../components/BreadCrumbs";
import CustomSection from "../../../components/CustomSection";
import RecommendationProducts from "../../../components/RecommendationProducts";
import VapeCard from "../../../components/VapeCard";
import VaperLineCard from "../../../components/VaperLineCard";
import clientData from "../../../mixins/clientData";
import MobileFilters from "../../../components/Catalog/MobileFilters";
import productsMixin from "../../../mixins/productsMixin";

export default {
  name: "Catalog",
  components: {MobileFilters, VaperLineCard, VapeCard, RecommendationProducts, CustomSection, BreadCrumbs},
  mixins: [clientData, productsMixin],
  async asyncData({ store, $services, route, $toast }){
    try {
      const url = `/api/products/${route.params.slug}?limit=20&offset=${route.query.page - 1}`
      const res = await $services.CategoriesServices.getProductsCategory(url)
      store.commit('setGeneral', {path: 'catalogProducts', payload: res})
    } catch (e) {
      $toast.error('Ошибка загрузки товаров!')
      console.error('Products ', e)
    }
  },
  data() {
    return {
      catalogInfo: {
        url: this.$route.fullPath,
        title: 'Каталог'
      },
      breadCrumbsUser: [
        {
          url: '/',
          title: 'Главная',
        },
        {
          url: this.$route.fullPath,
          title: 'Каталог',
        },
      ],

      catalog: [
        {
          type: 'range',
          min_value: 0,
          max_value: 0,
        },
        {
          type: 'checkbox',
          items: [
            {
              title: 'Voopoo',
              value: false,
            }
          ],
        },
        {
          type: 'radio',
          items: [
            {
              title: 'Voopoo',
              value: false,
            }
          ],
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
          fortress: [],
          stock: [],
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
          fortress: [],
          stock: [],
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
          fortress: [],
          stock: [],
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
          fortress: [],
          stock: [],
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
          fortress: [],
          stock: [],
        },
      ],

      sortList : [
        {id: 1, title: 'Сначала высокая цена'},
        {id: 2, title: 'Сначала низкая цена'},
        {id: 3, title: 'Популярное'},
        {id: 4, title: 'Новинка'},
        {id: 5, title: 'Акция'},
      ],
      activeSort: {
        id: 1,
        title: 'Сначала высокая цена'
      },
      setSortActive: false,

      filters: [
        {
          title: 'Цена',
          active: true,
          type: 'range',
          price: {
            min: 0,
            max: 200,
            minValue: 0,
            maxValue: 200,
          }
        },
        {
          title: 'Наличие',
          active: false,
          type: 'radio',
          children: [
            {
              title: 'В наличии',
              id: 0,
            },
            {
              title: 'Под заказ',
              id: 1,
            },
          ],
        },
        {
          title: 'Бренд',
          active: false,
          type: 'checkbox',
          children: [
            {
              title: 'Voopoo',
              active: false,
            },
            {
              title: 'Voopoo',
              active: false,
            },
            {
              title: 'Voopoo',
              active: false,
            },
          ],
        },
      ],
      radioId: 0,

      catalogWrap: true,
      mobileMenu: false,

      products: [],
      pagination: {
        limit: 0,
        offset: 0,
        total: 0
      },
      pagePagination: 1,
    }
  },
  computed: {
    productsInfo(){
      return this.$store.getters.getCatalogProducts
    },
    paginationTotal() {
      return Math.ceil(this.pagination.total / 18)
    },
  },
  mounted() {
    this.pagePagination = this.$route.query.page
    this.setProductsPagination(this.productsInfo)
    this.normalProducts(this.products)
  },
  methods: {
    setSortItem(item) {
      this.setSortActive = false
      this.activeSort = item
    },
    changeRange(event, item){
      item.minValue = event.minValue
      item.maxValue = event.maxValue
    },

    setPrice(event, item, state){
      let value = +event.srcElement.value;

      if (value < item.min) {
        event.srcElement.value = item.minValue
        return
      }
      if (value > item.max) {
        event.srcElement.value = item.maxValue
        return
      }

      if (state) {
        if (+item.min > +event.srcElement.value) value = +item.minValue
        if (value > +item.maxValue) value = +item.maxValue
        item.minValue = value
      }
      else {
        if (item.max < value) value = +item.maxValue
        if (value < +item.min) value = +item.minValue
        item.maxValue = value
      }
    },

    async changePage(index){
      if (index < 1 || index > this.paginationTotal) return
      await this.$router.push(this.$route.path + `?page=${index}`)
      this.pagePagination = index

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })

      try {
        const url = `/api/products/${this.$route.params.slug}?limit=20&offset=${index - 1}`
        const res = await this.$services.CategoriesServices.getProductsCategory(url)

        this.$store.commit('setGeneral', {path: 'catalogProducts', payload: res})

        this.setProductsPagination(this.productsInfo)
        this.normalProducts(this.products)
      } catch (e) {
        this.$toast.error('Ошибка загрузки товаров!')
        console.error('Products ', e)
      }
    },

    setProductsPagination(data){
      this.products = data.data
      this.pagination = data.meta
    },
  },
}
</script>

<style lang="scss" scoped>

.page-section {
  padding: rem(110) 0 rem(182);

  @media screen and (max-width: 768px) {
    padding: rem(90) 0 rem(30);
  }
}

.container {
  position: relative;
}

.recommendation-container {
  max-width: rem(1065);
  margin-left: auto;
}

main, ul {
  gap: rem(20);
}

main {
  margin-bottom: rem(150);

  @media screen and (max-width: 768px) {
    margin-bottom: rem(30);
  }
}

aside {
  width: rem(249);
  min-height: rem(300);
  margin-bottom: auto;
  background: #FFFFFF;
  box-shadow: 4px 4px 8px rgba(69, 99, 86, 0.3);
  border-radius: 8px;
  padding: rem(20);

  * {
    color: $black;
  }
}

li {
  width: 100%;
  transition: .25s;

  .title {
    cursor: pointer;
  }

  span {
    @include style-font(16);
    max-width: 80%;
  }

  svg {
    width: rem(15);
    height: rem(8);
    transition: .25s;
  }

  .active-filter {
    transform: rotate(180deg);
  }

  button {
    border: 2px solid #E3E6E4;
    border-radius: 8px;
    padding: rem(10) rem(20);
    width: 100%;
    height: rem(45);
    background: none;
    display: flex;
    align-items: center;
    margin-top: rem(56);

    span {
      color: rgba(138, 146, 143, 1);
      @include style-font(16);
    }

    svg {
      width: rem(24);
      height: rem(24);
    }
  }
}

.res-btn span {
  max-width: none;
}

.list {
  display: flex;
  flex-direction: column;
  gap: rem(10);
  margin-top: rem(20);
}

.cards-wrap {
  flex: 1;

  .flex-wrap {
    gap: rem(20);
  }

  .pagination {
    margin-top: rem(50);

    @media screen and (max-width: 768px) {
      margin-top: rem(30);
    }

    svg {
      width: rem(23);
      height: rem(40);
      cursor: pointer;

      @media screen and (max-width: 768px) {
        width: rem(23);
        height: rem(30);
      }
    }

    .pag-prev {
      transform: rotate(180deg);
    }

    .pag-wrap {
      margin: 0 rem(28);
      gap: rem(8);

      &-item {
        width: rem(38);
        height: rem(38);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        @include style-font(16);
        background: rgba(138, 146, 143, 1);
        cursor: pointer;
        border-radius: 8px;

        @media screen and (max-width: 768px) {
          width: rem(10);
          height: rem(10);
          border-radius: 2px;
          font-size: 0;
        }
      }

      &-item-active {
        background: $green;
      }
    }
  }
}

.sort-wrap {
  margin-bottom: rem(20);
  justify-content: flex-end;
  gap: rem(30);

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }

  .sort-text {
    position: relative;

    .title {
      gap: rem(10);
      cursor: pointer;

      span {
        @include style-font(16);
        color: $black;
        transition: .25s;

        @media screen and (max-width: 768px) {
          @include style-font(14);
        }
      }

      svg {
        width: rem(16);
        height: rem(8);
        transition: .25s;
      }
    }

    .active-title svg {
      transform: rotate(180deg);
    }

    .body {
      position: absolute;
      left: 0;
      top: 125%;
      background: #FFFFFF;
      box-shadow: 4px 4px 8px rgba(69, 99, 86, 0.3);
      border-radius: 8px;
      z-index: 5;
      width: 100%;
      min-width: rem(208);

      @media screen and (max-width: 768px) {
        min-width: auto;
        width: rem(186);
      }

      li {
        padding: rem(10) rem(10) rem(10) rem(15);
        cursor: pointer;
        transition: .25s;
        @include style-font(16);
        color: $black;

        &:hover {
          color: $green;
        }

        @media screen and (max-width: 768px) {
          @include style-font(14);
          padding: rem(7) rem(5) rem(7) rem(15);
        }
      }

      .active-sort {
        color: $green;
      }
    }
  }

  .filters {
    @media screen and (max-width: 768px) {
      display: flex;
      align-items: flex-start;

      span {
        color: $green;
        @include style-font(14);
      }

      .num {
        margin-top: -(rem(5));
        margin-left: rem(4);
      }
    }
  }

  .icons {
    display: flex;
    align-items: center;
    gap: rem(20);

    svg {
      width: rem(24);
      height: rem(24);
      cursor: pointer;
    }

    .active-icon path{
      stroke: rgba(0, 166, 137, 1);
    }
  }
}

.drop-enter {
  opacity: 0;
  transition: .25s;
  top: 100%;
}

.drop-enter-to {
  opacity: 1;
  top: 125%;
  transition: .25s
}

.drop-leave-to {
  opacity: 0;
  transition: .25s;
  top: 100%;
}

.drop-right-enter {
  opacity: 0;
  transition: .25s;
  transform: translateX(50%);
}

.drop-right-enter-to {
  opacity: 1;
  transform: translateX(0);
  transition: .25s
}

.drop-right-leave-to {
  opacity: 0;
  transition: .25s;
  transform: translateX(50%);
}

</style>
