<template>
  <div class="page-background">
    <div class="bread-crumbs container">
      <bread-crumbs :bread-crumbs="breadCrumbsUser"/>
    </div>

    <custom-section :section-info="sectionInfo" :adaptive-style="true">
      <div class="container flex">
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
        <main>
          <section>
            <h2>Основные данные</h2>
            <form @submit.prevent="updateProfile">
              <div class="flex-wrap flex-between">
                <input class="input" placeholder="Имя" required type="text" :value="$store.state.profile.first_name" @input="changeInput($event, 'first_name')">
                <input class="input" placeholder="Телефон" v-mask="'+7 (###) ###-##-##'" :value="$store.state.profile.phone" disabled type="text">
                <input class="input" placeholder="Фамилия" required type="text" :value="$store.state.profile.last_name" @input="changeInput($event, 'last_name')">
                <input class="input" placeholder="E-mail" required type="email" :value="$store.state.profile.email" @input="changeInput($event, 'email')">
                <input class="input" placeholder="Новый пароль" type="password" @input="changeInput($event, 'password')">
                <client-only>
                  <date-picker
                    class="input date-normal"
                    placeholder="Дата рождения: дд.мм.гг"
                    lang="ru"
                    v-model="userDate"
                    :default-value="getDefaultDate"
                    :disabled-date="disabledDate"
                    valueType="format"
                    format="DD.MM.YYYY"
                    @input="changeInput($event, 'date_of_birth', true)"
                  />
                </client-only>
                <input class="input" placeholder="Подтвердить новый пароль" type="password">
              </div>

              <button class="btn-green" type="submit">
                Сохранить
              </button>
            </form>
          </section>


          <section>
            <h2>бонусные баллы</h2>
            <div class="flex lvl-wrap">
              <div class="flex-column">
                <level-cmp class="level" :lvl-name="$store.state.profile.maxma.level.name"/>
                <div class="block non-shadow">
                  <div class="block-item card flex-align-center">
                    <span>Карта лояльности</span>
                    <span class="black">№ {{  $store.state.profile.maxma.card }}</span>
                  </div>
                  <div class="block-item gift flex-align-center">
                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.86042 23.3065H13.1405C13.3775 23.3065 13.5696 23.126 13.5696 22.9022V7.59996C13.5696 7.37622 13.3775 7.19574 13.1405 7.19574H8.86042C8.6234 7.19574 8.43129 7.37622 8.43129 7.59996V22.9022C8.43129 23.126 8.6234 23.3065 8.86042 23.3065Z"
                        fill="#0B0B0B"/>
                      <path
                        d="M7.74517 22.6328H1.21215C1.00383 22.6328 0.83417 22.4646 0.83417 22.2582V8.75823C0.83417 8.55179 1.00383 8.38367 1.21215 8.38367H7.74517V7.70997H1.00008C0.533529 7.70997 0.154297 8.08453 0.154297 8.54809V22.4671C0.154297 22.9294 0.532282 23.3052 1.00008 23.3052H7.74517V22.6315V22.6328Z"
                        fill="#0B0B0B"/>
                      <path
                        d="M21.0008 7.71121H14.2557V8.38491H20.7887C20.9971 8.38491 21.1667 8.55303 21.1667 8.75947V22.2594C21.1667 22.4659 20.9971 22.634 20.7887 22.634H14.2557V23.3077H21.0008C21.4674 23.3077 21.8466 22.9332 21.8466 22.4696V8.55056C21.8466 8.08824 21.4686 7.71245 21.0008 7.71245V7.71121Z"
                        fill="#0B0B0B"/>
                      <path
                        d="M7.82748 7.03874C7.9697 6.73341 8.28032 6.51956 8.64208 6.51956H10.537L5.04188 0.68371C4.77617 0.401868 4.32957 0.385795 4.04515 0.649094L1.26702 3.21781C0.9826 3.48111 0.966383 3.92365 1.23209 4.2055L3.89919 7.0375H7.82748V7.03874Z"
                        fill="#0B0B0B"/>
                      <path
                        d="M14.1734 7.03874C14.0312 6.73341 13.7206 6.51956 13.3588 6.51956H11.4639L16.959 0.68371C17.2247 0.401868 17.6713 0.385795 17.9557 0.649094L20.7338 3.21781C21.0183 3.48111 21.0345 3.92365 20.7688 4.2055L18.1017 7.0375H14.1734V7.03874Z"
                        fill="#0B0B0B"/>
                    </svg>
                    <span class="black"><b>{{ $store.state.profile.maxma.bonuses }}</b></span>
                    <span>бонусов</span>
                  </div>
                </div>
              </div>
              <div class="flex-column">
                <div class="block text">
                  <p>
                    За оплату в офлайн-магазинах вам будут начислены виртуальные бонусы.
                  </p>
                </div>
                <div class="block text">
                  <p>
                    Накопленные бонусы можно списать при оформлении заказа.
                    Также вы можете воспользоваться бонусами при оплате заказа в любом офлайн-магазине.
                  </p>
                </div>
              </div>
            </div>
          </section>


          <section>
            <h2>мои заказы</h2>
            <table-cmp :table-data="tableData"/>
          </section>
        </main>
      </div>
    </custom-section>
  </div>
</template>

<script>
import CustomSection from "../../components/CustomSection";
import BreadCrumbs from "../../components/BreadCrumbs";
import LevelCmp from "../../components/Profile/LevelCmp";
import TableCmp from "../../components/TableCmp";
import profile from "../../mixins/profile";

export default {
  name: "user",
  components: {TableCmp, LevelCmp, BreadCrumbs, CustomSection},
  middleware: 'auth',
  mixins: [profile],
  data(){
    return {
      sectionInfo: {
        url: this.$route.fullPath,
        title: 'Профиль'
      },
      breadCrumbsUser: [
        {
          url: '/',
          title: 'Главная',
        },
        {
          url: '/profile/user',
          title: 'Профиль',
        },
        {
          url: this.$route.fullPath,
          title: 'Личные данные',
        },
      ],
      cardNumber: 3732088,
      bonusesCount: 1245,
      lvlName: 'Recruit',
      tableData: [
        {
          number: 234,
          date: '12.12.2023',
          status: 'Поулчен',
        },
        {
          number: 234,
          date: '12.12.2023',
          status: 'Поулчен',
        },
        {
          number: 234,
          date: '12.12.2023',
          status: 'Поулчен',
        },
        {
          number: 234,
          date: '12.12.2023',
          status: 'Поулчен',
        },
      ],
      userPhone: null,
      userDate: ''
    }
  },
  computed: {
    getDefaultDate(){
      let currentDate = new Date()
      let year = currentDate.getFullYear()
      let month = currentDate.getMonth()
      let day = currentDate.getDate()

      return `${year - 19}-${month}-${day}`
    },
    getUserDate(){
      return this.$store.state.profile.date_of_birth
    },
  },
  async asyncData({ store, $services, $auth, redirect }) {
    try {
      store.commit('setGeneral', {path: 'profile', payload: await $services.ProfileService.me()})
    } catch (error) {
      await $auth.logout();
      await redirect('/')
    }
  },
  created() {
    this.userDate = `${this.getDate(this.getUserDate)}`
  },
  methods: {
    getValidDate(date = ''){
      if (!date) return;
      const dateArr = date.split('.')
      return `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`
    },
    changeInput (event, key, eventNeed = false) {
      this.$store.commit('setProfileAttribute', {key, value: !eventNeed ? event.target.value : this.getValidDate(event) })
    },
    async updateProfile () {
      console.log(await this.$services.ProfileService.update(this.$store.state.profile));
    },
    disabledDate(date) {
      let day = new Date().getDate()
      let month = new Date().getMonth() + 1
      let year = new Date().getFullYear() - 18

      month = month > 10 ? month : month = `0${month}`
      day = day > 10 ? day : day = `0${day}`

      return date > new Date(`${year}-${month}-${day}`);
    },
    getDate(date){
      if (!date) return ''
      const dateNormal = date ? new Date(date) : new Date()
      const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }
      return dateNormal.toLocaleString("ru", options)
    },
  }
}
</script>

<style scoped lang="scss">

.page-section {
  padding: rem(150) 0 rem(182);

  @media screen and (max-width: 768px) {
    padding: 0 0 rem(30) ;
  }
}

main {
  background: none;
  width: rem(988);

  @media screen and (max-width: 768px) {
    width: 100%;
  }


  section {
    background: #FFFFFF;
    padding: rem(40) rem(60) rem(60);
    box-shadow: 4px 4px 8px rgba(69, 99, 86, 0.3);
    border-radius: 10px;
    margin-bottom: rem(20);
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (max-width: 768px) {
      padding: rem(30) rem(20);
      margin-bottom: rem(30);
    }

    &:nth-child(2) h2{
      @media screen and (max-width: 768px) {
        margin-bottom: rem(10) !important;
      }
    }
  }

  h2 {
    color: $black;
    @include style-font(24, 750, 140%, false);
    margin-bottom: rem(30);
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  form {
    input {
      width: rem(400);

      &:focus {
        border-color: rgba(138, 146, 143, 1);
      }

      &:invalid {
        color: rgba(214, 45, 48, 1);
        border-color: rgba(214, 45, 48, 1);
      }

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      &[type='date'] {
        &::-webkit-datetime-edit-text {
          color: rgba(227, 229, 228, 1);
        }

        &::-webkit-datetime-edit-month-field {
          color: rgba(227, 229, 228, 1);
        }

        &::-webkit-datetime-edit-day-field {
          color: rgba(227, 229, 228, 1);
        }

        &::-webkit-datetime-edit-year-field {
          color: rgba(227, 229, 228, 1);
        }
      }
    }

    .date-normal[type='date'] {
      &::-webkit-datetime-edit-text {
        color: $black;
      }

      &::-webkit-datetime-edit-month-field {
        color: $black;
      }

      &::-webkit-datetime-edit-day-field {
        color: $black;
      }

      &::-webkit-datetime-edit-year-field {
        color: $black;
      }
    }

    .flex-wrap {
      gap: rem(20);
    }

    button {
      width: rem(400);
      margin-top: rem(30);

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }

  .flex {
    gap: rem(20);
  }

  .lvl-wrap {
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .level {
    margin-bottom: rem(25);

    @media screen and (max-width: 768px) {
      margin-bottom: 0;
    }
  }

  .block {
    padding: rem(20);
    background: #FFFFFF;
    box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
    border-radius: 8px;
    margin-bottom: rem(20);

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (max-width: 768px) {
      padding: rem(20);
      box-shadow: 4px 4px 8px rgba(69, 99, 86, 0.3);
    }

    &-item {
      border: 1px solid #E3E6E4;
      border-radius: 40px;
      margin-bottom: rem(20);
      padding: rem(5) rem(20);
      gap: rem(7);

      &:last-child {
        margin-bottom: 0;
        width: rem(184);

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }

      svg {
        width: rem(21);
        height: rem(22);
      }
    }

    p {
      color: $black;
      @include style-font();

      @media screen and (max-width: 768px) {
        @include style-font(16);
      }
    }

    span {
      @include style-font(16);
      color: rgba(138, 146, 143, 1);

      @media screen and (max-width: 768px) {
        @include style-font(14);
      }
    }

    .black {
      color: $black;
    }
  }

  .non-shadow {
    width: rem(426);
    @media screen and (max-width: 768px) {
      box-shadow: none;
      width: 100%;
      padding: rem(5) rem(20) 0;
      margin-bottom: 0;
    }
  }

  .text {
    width: rem(340);

    &:last-child {
      width: 90%;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .gift {
    margin-right: auto;
    @media screen and (max-width: 768px) {
      align-items: center !important;
      justify-content: center !important;
    }
  }

  .card {
    @media screen and (max-width: 768px) {
      padding: rem(5);
      justify-content: center;
      flex-direction: column;
    }
  }
}

</style>
