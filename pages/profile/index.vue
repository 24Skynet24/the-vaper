<template>
  <div class="page-background">
    <custom-section :section-info="sectionInfo">
      <div class="container">
        <aside class="flex-column profile">
          <nuxt-link active-class="active-link" exact no-prefetch to="/profile/user">
            Личные данные
            <svg fill="none" height="14" viewBox="0 0 8 14" width="8" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.999999 13L7 7L1 1" stroke="#8A928F" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
            </svg>
          </nuxt-link>
          <nuxt-link active-class="active-link" exact no-prefetch to="/profile/favorites">
            Избранное
            <svg fill="none" height="14" viewBox="0 0 8 14" width="8" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.999999 13L7 7L1 1" stroke="#8A928F" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
            </svg>

          </nuxt-link>
          <nuxt-link exact no-prefetch to="/profile/comparison">
            Сравнение
            <svg fill="none" height="14" viewBox="0 0 8 14" width="8" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.999999 13L7 7L1 1" stroke="#8A928F" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
            </svg>

          </nuxt-link>
          <div class="exit flex-align-center" @click="logoutProfile">
            <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.21 13.29C9.82 13.68 9.19 13.68 8.8 13.29L5.21 9.7C5.1173 9.60749 5.04375 9.4976 4.99357 9.37662C4.94339 9.25565 4.91756 9.12597 4.91756 8.995C4.91756 8.86403 4.94339 8.73435 4.99357 8.61338C5.04375 8.4924 5.1173 8.38251 5.21 8.29L8.8 4.7C8.98698 4.51302 9.24057 4.40798 9.505 4.40798C9.76943 4.40798 10.023 4.51302 10.21 4.7C10.397 4.88698 10.502 5.14057 10.502 5.405C10.502 5.66943 10.397 5.92302 10.21 6.11L8.33 8H17C17.55 8 18 8.45 18 9C18 9.55 17.55 10 17 10H8.33L10.21 11.88C10.6 12.27 10.59 12.91 10.21 13.29ZM2 0H16C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V5C18 5.55 17.55 6 17 6C16.45 6 16 5.55 16 5V3C16 2.45 15.55 2 15 2H3C2.45 2 2 2.45 2 3V15C2 15.55 2.45 16 3 16H15C15.55 16 16 15.55 16 15V13C16 12.45 16.45 12 17 12C17.55 12 18 12.45 18 13V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0Z"
                fill="#8A928F"/>
            </svg>

            <span>Выйти</span>
          </div>
        </aside>
      </div>
    </custom-section>
  </div>
</template>

<script>
import profile from "../../mixins/profile";
import CustomSection from "../../components/CustomSection";

export default {
  name: "index",
  components: {CustomSection},
  middleware: ['windowWidth'],
  // mixins: [profile],
  data() {
    return {
      sectionInfo: {
        url: this.$route.fullPath,
        title: 'Профиль'
      },
    }
  },
}
</script>

<style lang="scss" scoped>

@media screen and (max-width: 768px) {
  aside {
    display: flex !important;
    margin: 0 auto;
    width: rem(300);
    padding: 0;
    height: auto;

    .exit {
      padding: rem(15) rem(20);
    }

    a {
      padding: rem(15) rem(20);
      border-bottom: 1px solid rgba(227, 229, 228, 1);
      display: flex;
      align-items: center;
      justify-content: space-between;


      svg {
        width: rem(12);
        height: rem(12);
      }
    }
  }
}


</style>
