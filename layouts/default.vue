<template>
  <div>
    <sign-in-modal v-if="signInModal" @closeModal="closeModal('signInModal')"/>
    <password-recovery v-if="passwordModal" @closeModal="closeModal('passRecoveryModal')"/>
    <age-verification v-if="ageModal" @closeModal="closeModal('ageVerificationModal', 'age-verification')"/>
    <cookies-modal v-if="cookiesModal" @closeCookies="closeModal('cookiesModal', 'cookies-modal')"/>


    <header-cmp/>
    <header-mobile/>
    <nuxt/>
    <footer-cmp/>
  </div>
</template>

<script>
import HeaderCmp from "../components/Header/HeaderCmp";
import FooterCmp from "../components/FooterCmp";
import HeaderMobile from "../components/Header/HeaderMobile";
import SignInModal from "../components/Modals/SignInModal";
import AgeVerification from "../components/Modals/AgeVerification";
import CookiesModal from "../components/Modals/CookiesModal";
import PasswordRecovery from "../components/Modals/PasswordRecovery";
import ProfileService from "../services/ProfileService";
export default {
  name: "default",
  components: {PasswordRecovery, CookiesModal, AgeVerification, SignInModal, HeaderMobile, FooterCmp, HeaderCmp},
  async fetch(){
    try {
      const profile = await ProfileService(this.$axios).me()
      if (Object.keys(profile).length) this.$store.commit('setGeneral', {payload: true, path: 'profileAuth'})
      else this.$store.commit('setGeneral', {payload: false, path: 'profileAuth'})
    } catch (error) {
      this.$store.commit('setGeneral', {payload: false, path: 'profileAuth'})
      await this.$auth.logout();
      // await this.$router.push('/')
    }
  },
  computed: {
    ageModal() {
      return this.$store.state.ageVerificationModal
    },
    cookiesModal() {
      return this.$store.state.cookiesModal
    },
    signInModal(){
      return this.$store.state.signInModal
    },
    passwordModal(){
      return this.$store.state.passRecoveryModal
    },
  },
  beforeCreate() {
    const ageModalData = this.$cookies.get('age-verification') ?? true
    const cookiesModalData = this.$cookies.get('cookies-modal') ?? true

    this.$store.commit('setGeneral', {path: 'ageVerificationModal', payload: ageModalData})
    this.$store.commit('setGeneral', {path: 'cookiesModal', payload: cookiesModalData})
  },
  methods: {
    closeModal(store, cookies){
      this.$store.commit('setGeneral', {path: store, payload: false})
      if (cookies) this.$cookies.set(cookies, false,  { sameSite: 'strict' })
    },
  }
}
</script>

<style scoped lang="scss">


</style>
