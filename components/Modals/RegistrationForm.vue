<template>
  <form v-if="phoneForm" @submit.prevent="phoneVerification" ref="regFormNumber" class="flex-column sing-in-form">
    <p>Подтверждение телефона</p>
    <input
      :class="{'invalid' : errMsg}" class="input"
      name="phone" type="tel"
      placeholder="Телефон" required autofocus minlength="11"
      v-mask="'+7 (###) ###-##-##'"
      v-model="tel"
      @invalid="invalidityInput"
    >
    <p v-if="errMsg" class="error-text">Такой номер уже используеться</p>
    <button type="submit" class="flex-center btn-green">
      Подтвердить
    </button>
  </form>

  <form v-else @submit.prevent="registration" ref="regForm" class="flex-column sing-in-form">
    <input type="text" name="first_name" class="input" v-model="first_name" required placeholder="Имя" autofocus minlength="2" @invalid="invalidityInput">
    <input type="text"  name="last_name" class="input" v-model="last_name" required placeholder="Фамилия" minlength="4" @invalid="invalidityInput">
    <input type="tel"  name="login" class="input" v-model="tel" required placeholder="Телефон" minlength="5" @invalid="invalidityInput">
    <input type="number"  name="confirmation_code" class="input" v-model="confirmation_code" required placeholder="Код подтверждения" minlength="1" maxlength="3" @invalid="invalidityInput">
    <!-- Required -->
    <input type="email"  name="email" class="input" v-model="email" placeholder="E-mail" minlength="4" @invalid="invalidityInput">
    <!--  -->
    <input type="password"  name="password" class="input" v-model="password" required placeholder="Пароль" minlength="8" @invalid="invalidityInput">
    <input type="password"  name="repeated_password" class="input" v-model="repeated_password" required placeholder="Повторите пароль" minlength="8" @invalid="invalidityInput">
    <div class="custom-checkbox" @click="checkbox = !checkbox">
      <div class="checkbox" :class="{'active-checkbox' : checkbox}">
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 7.5L6 12L16 1" stroke="white" stroke-width="2"/>
        </svg>
      </div>
      <span>Согласен с условиями обработки персональных данных</span>
    </div>
    <button type="submit" class="flex-center btn-green">
      Зарегестрироваться
    </button>
  </form>
</template>

<script>
import inputInteractions from "../../mixins/inputInteractions";

export default {
  name: "RegistrationForm",
  mixins: [inputInteractions],
  data(){
    return {
      first_name: '',
      last_name: '',
      tel: '',
      email: '',
      password: '',
      repeated_password: '',
      checkbox: false,
      phoneForm: true,
      confirmation_code: '',

      errMsg: false,
      statusesCode: {
        phone: null,
        reg: null,
      },
    }
  },
  watch: {
    statusesCode: {
      deep: true,
      handler(e) {
        this.errMsg = e.phone === 422
      }
    },
  },
  methods: {
    async phoneVerification() {
      this.statusesCode.phone = null
      try {
        const formData = new FormData()
        formData.append('phone', this.phoneFilter(this.tel))

        await this.$axios.$post('/api/auth/verification-code', formData)
        this.phoneForm = false
      }
      catch (e) {
        this.statusesCode.phone = e.response.status
        console.error('Phone Verification ' + e)
      }
    },
    async registration() {
      if (!this.checkbox || this.password !== this.repeated_password) return

      try {
        const formData = new FormData(/*this.$refs.regForm*/)
        formData.append('login', this.phoneFilter(this.tel))
        formData.append('password', this.password)
        formData.append('confirmation_code', this.confirmation_code)
        formData.append('first_name', this.first_name)
        formData.append('last_name', this.last_name)
        formData.append('email', this.email)

        const res = await this.$axios.$post('/api/auth/registration', formData)

        await this.$auth.setUserToken(res.access_token, res.refresh_token)
        this.$store.commit('setGeneral', {path: "signInModal", payload: false})
        this.$store.commit('setGeneral', {payload: true, path: 'profileAuth'})
        await this.$router.push('/profile/user')
      }
      catch (e) {
        this.statusesCode.reg = e.response.status
        console.error('Registration ' + e)
      }
    },
  }
}
</script>

<style lang="scss" scoped>

p {
  @include style-font(20);
  margin-bottom: rem(20);

  @media screen and (max-width: 768px){
    @include style-font(16);
    margin-bottom: rem(30);
  }
}

.custom-checkbox {
  margin: rem(25) 0 rem(35);

  @media screen and (max-width: 768px){
    margin: rem(30) auto;
  }
}

</style>
