export default {
  methods: {
    async logoutProfile(){
      await this.$auth.logout()
      this.$store.commit('setGeneral', {payload: false, path: 'profileAuth'})
    },
  }
}
