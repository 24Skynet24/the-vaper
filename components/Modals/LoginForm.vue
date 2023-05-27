<template>
  <form @submit.prevent="authorization" ref="loginForm" class="flex-column sing-in-form">
    <input
      type="tel" name="login" class="input"
      required placeholder="Номер телефона" autofocus minlength="5"
      v-mask="'+7 (###) ###-##-##'"
      v-model="phone"
      @invalid="invalidityInput"
    >
    <input
      type="password" name="password"
      class="input"
      required placeholder="Пароль" autofocus minlength="8"
      v-model="password"
      @invalid="invalidityInput"
    >
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
      try {
        await this.$auth.loginWith("laravelJWT", {data: args})

        this.$store.commit('setGeneral', {path: "signInModal", payload: false})
        this.$store.commit('setGeneral', {payload: true, path: 'profileAuth'})
        await this.$router.push('/profile/user')
      }
      catch (e) { console.error("Auth ERROR " + e) }
    }

  }
}
</script>
