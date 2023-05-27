<template>
  <div class="page">
    <header-error/>
    <nuxt/>
    <footer-error/>
  </div>
</template>

<script>
import FooterError from "../components/FooterError";
import HeaderError from "../components/Header/HeaderError";
export default {
  name: "errors",
  components: {HeaderError, FooterError}
}
</script>

<style scoped lang="scss">

.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: $black;
}

</style>
