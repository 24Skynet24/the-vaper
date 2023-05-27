<template>
  <div class="page-background">
    <div class="bread-crumbs container">
      <bread-crumbs :bread-crumbs="breadCrumbsUser"/>
    </div>

    <custom-section :section-info="sectionInfo" :adaptive-style="true">
      <main class="container">
        <div class="flex content-wrap">
          <div class="aside-container flex-column">
            <aside class="flex-column profile">
              <nuxt-link active-class="active-link" exact no-prefetch to="/profile/user">Личные данные</nuxt-link>
              <nuxt-link active-class="active-link" exact no-prefetch to="/profile/favorites">Избранное</nuxt-link>
              <nuxt-link active-class="active-link" exact no-prefetch to="/profile/comparison">Сравнение</nuxt-link>
              <div class="exit flex-align-center" @click="logoutProfile">
                <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.21 13.29C9.82 13.68 9.19 13.68 8.8 13.29L5.21 9.7C5.1173 9.60749 5.04375 9.4976 4.99357 9.37662C4.94339 9.25565 4.91756 9.12597 4.91756 8.995C4.91756 8.86403 4.94339 8.73435 4.99357 8.61338C5.04375 8.4924 5.1173 8.38251 5.21 8.29L8.8 4.7C8.98698 4.51302 9.24057 4.40798 9.505 4.40798C9.76943 4.40798 10.023 4.51302 10.21 4.7C10.397 4.88698 10.502 5.14057 10.502 5.405C10.502 5.66943 10.397 5.92302 10.21 6.11L8.33 8H17C17.55 8 18 8.45 18 9C18 9.55 17.55 10 17 10H8.33L10.21 11.88C10.6 12.27 10.59 12.91 10.21 13.29ZM2 0H16C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V5C18 5.55 17.55 6 17 6C16.45 6 16 5.55 16 5V3C16 2.45 15.55 2 15 2H3C2.45 2 2 2.45 2 3V15C2 15.55 2.45 16 3 16H15C15.55 16 16 15.55 16 15V13C16 12.45 16.45 12 17 12C17.55 12 18 12.45 18 13V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0Z"
                    fill="#8A928F"/>
                </svg>

                <span>Выйти</span>
              </div>
            </aside>

            <ul class="list flex-column">
              <li class="list-item" v-for="(item, id) in radio" :key="`radio_comp_${id}`" @click="radioId = id">
                <label class="custom-radio">
                  <div :class="['radio', {'active' : id === radioId}]"><span></span></div>
                  <span>{{ item }}</span>
                </label>
              </li>
              <li class="del">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 18C2.45 18 1.979 17.804 1.587 17.412C1.195 17.02 0.999333 16.5493 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.804 17.021 14.412 17.413C14.02 17.805 13.5493 18.0007 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z" fill="#8A928F"/>
                </svg>

                <span>Очистить раздел</span>
              </li>
            </ul>

            <div class="comparison-buttons">
              <client-only v-if="windowWidth > 768">
                <!-- SLIDER NEED FIX -->
                <hooper-wrap :items-to-show="3" :itemsToSlide="3">
                  <hooper-slide v-for="(item, id) in buttons" :key="`comparison_button_${id}`">
                    <button class="active-btn">
                      {{ item }}
                    </button>
                  </hooper-slide>
                </hooper-wrap>
              </client-only>
              <div class="comparison-buttons-wrapper" v-else>
                <button class="active-btn" v-for="(item, id) in buttons" :key="`comparison_button_mobile_${id}`">
                  {{ item }}
                </button>
              </div>
            </div>
          </div>
          <div class="comparison-content">
            <comparison-container :comparison-cards="cards"/>
          </div>
        </div>

       <comparison-table/>
      </main>
    </custom-section>
  </div>
</template>

<script>
import BreadCrumbs from "../../components/BreadCrumbs";
import CustomSection from "../../components/CustomSection";
import StarsVaper from "../../components/StarsVaper";
import profile from "../../mixins/profile";
import ComparisonTable from "../../components/Comparison/ComparisonTable";
import ComparisonContainer from "../../components/Comparison/ComparisonContainer";
import clientData from "../../mixins/clientData";

export default {
  name: "comparison",
  components: {ComparisonContainer, ComparisonTable, StarsVaper, CustomSection, BreadCrumbs},
  mixins: [profile, clientData],
  data(){
    return {
      sectionInfo: {
        url: this.$route.fullPath,
        title: 'Сравнение товаров'
      },
      breadCrumbsUser: [
        {
          url: '/',
          title: 'Главная',
        },
        {
          url: this.$route.fullPath,
          title: 'Сравнение товаров',
        },
      ],
      cards: [
        {
          img: require("@/assets/img/cards/photo.png"),
          price: {
            price: 2000,
            discount: 0
          },
          title: 'Voopoo Argus Air Pod Kit (80W, 3000 mAh) с атомайзером'
        },
        {
          img: '',
          price: {
            price: 2000,
            discount: 0
          },
          title: 'Voopoo Argus Air Pod Kit (80W, 3000 mAh) с атомайзером'
        },
        {
          img: require('@/assets/img/cards/test-photo.png'),
          price: {
            price: 2000,
            discount: 3000
          },
          title: 'Voopoo Argus Air Pod Kit (80W, 3000 mAh) с атомайзером'
        },
        {
          img: require('@/assets/img/cards/test-photo.png'),
          price: {
            price: 2000,
            discount: 3000
          },
          title: 'Voopoo Argus Air Pod Kit (80W, 3000 mAh) с атомайзером'
        },
        {
          img: require('@/assets/img/cards/test-photo.png'),
          price: {
            price: 2000,
            discount: 3000
          },
          title: 'Voopoo Argus Air Pod Kit (80W, 3000 mAh) с атомайзером'
        },
      ],
      buttons: ['Наборы', 'Аккумулятор', 'Жидкость'],
      radio: ['Все параметры', 'Только различия'],
      radioId: 0,
    }
  },
}
</script>

<style scoped lang="scss">

.page-section {
  padding: rem(150) 0 rem(182);

  @media screen and (max-width: 768px) {
    padding: 0 0 rem(30);
  }
}

.content-wrap {
  gap: rem(18);
  margin-bottom: rem(20);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: rem(20);
    margin-bottom: rem(10);
  }
}

.aside-container {
  width: rem(316);

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
    background: #FFFFFF;
    box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
    border-radius: 8px;
  }
}

.list, .comparison-buttons {
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    box-shadow: none;
    border-radius: 0;
  }
}

.list {
  margin: rem(40) 0 rem(20);
  padding: rem(20);
  gap: rem(20);

  @media screen and (max-width: 768px) {
    margin: 0;
    border-radius: 0 0 8px 8px;
    padding: 0 rem(20) rem(20) rem(20);
    gap: rem(10);
  }

  li {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .del {
    gap: rem(14);

    span {
      @include style-font(16);
      color: rgba(138, 146, 143, 1);
    }

    svg {
      width: rem(16);
      height: rem(18);
    }
  }
}

.comparison-buttons {
  width: 100%;
  height: rem(80);
  overflow-x: auto;
  overflow-y: hidden;
  padding: rem(20);
  display: flex;
  align-items: center;
  gap: rem(20);

  .comparison-buttons-wrapper {
    display: flex;
    align-items: center;
    gap: rem(20);
  }

  @media screen and (max-width: 768px) {
    border-radius: 8px 8px 0 0;
    gap: 0;
    scrollbar-width: none;
    scrollbar-height: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  button {
    background: rgba(227, 229, 228, 1);
    padding: rem(8) rem(20);
    color: #FFFFFF;
    @include style-font(16);
    border-radius: 10px;
    border: none;
    transition: .25s;

    &:hover {
      background: $green;
    }
  }

  .active-btn {
    background: $green;
  }
}

.comparison-content {
  flex: 1;
  width: 100%;
  max-width: rem(988);
  height: rem(452);
  background: #FFFFFF;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    overflow: visible;
    max-width: none;
    height: rem(255);
  }
}


</style>
