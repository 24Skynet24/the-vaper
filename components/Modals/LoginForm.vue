<template>
  <form @submit.prevent="authorization" ref="loginForm" class="flex-column sing-in-form">
    <input
      type="tel" name="login"
      class="input" :class="{'invalid' : errMsg}"
      required placeholder="Номер телефона" autofocus minlength="5"
      v-mask="'+7 (###) ###-##-##'"
      v-model="phone"
      ref="loginForm_login"
      @invalid="invalidityInput"
    >
    <input
      type="password" name="password"
      class="input password" :class="{'invalid' : errMsg}"
      required placeholder="Пароль" autofocus minlength="8"
      v-model="password"
      ref="loginForm_password"
      @invalid="invalidityInput"
    >
    <p class="error-text" v-if="errMsg">Неверно введен логин или пароль</p>
    <span class="form-text" @click="openModal('passRecoveryModal')">Забыли пароль?</span>
    <button type="submit" class="flex-center btn-green">
      Войти
    </button>
  </form>
</template>

<script>
import inputInteractions from "../../mixins/inputInteractions";
export default {
  name: "LoginForm",
  mixins: [inputInteractions],
  data(){
    return {
      phone: '',
      password: '',
      errMsg: false,

      statusCode: null,
    }
  },
  watch: {
    statusCode(e) {
      this.errMsg = e === 422
    }
  },
  methods: {
    openModal(path){
      this.$store.commit('setGeneral', {path: 'signInModal', payload: false})
      this.$store.commit('setGeneral', {path: path, payload: true})
    },
    async authorization() {
      const args = new FormData(/*this.$refs.loginForm*/)
      args.append('login', this.phoneFilter(this.phone))
      args.append('password', this.password)
      this.statusCode = null
      try {
        await this.$auth.loginWith("laravelJWT", {data: args})
        this.$store.commit('setGeneral', {path: "signInModal", payload: false})
        this.$store.commit('setGeneral', {payload: true, path: 'profileAuth'})
        await this.$router.push('/profile/user')
      }
      catch (e) {
        this.statusCode = e.response.status
        console.error("Auth ERROR " + e)
      }
    }

  }
}
</script>

<style scoped lang="scss">

.password {
  margin-bottom: rem(25);
}

</style>
