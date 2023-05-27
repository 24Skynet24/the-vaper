export default {
  data() {
    return {
      windowWidth: 0,
    }
  },
  mounted() {
    if (process.client) this.windowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  methods: {
    pxToVw(pxValue) {
      return (pxValue / this.windowWidth) * 100;
    }
  }
}
