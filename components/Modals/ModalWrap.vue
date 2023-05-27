<template>
  <div class="modal" @click="$emit('closeModal')">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "ModalWrap",
  mounted() {
    document.body.style.overflow = 'hidden'
  },
  destroyed() {
    document.body.style.overflow = 'auto'
  },
}
</script>

<style scoped lang="scss">

.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35));
  z-index: 5;
}

</style>
