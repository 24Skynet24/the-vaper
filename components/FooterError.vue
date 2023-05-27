<template>
  <footer>
    <div class="container flex-align-center flex-between">
      <span v-if="windowWidth > 768">
        © 2015-2023.<br>Все права защищены.
      </span>
      <span>Политика конфиденциальности</span>
      <span>Пользовательское соглашение</span>
      <span>Продукция предназначена <br> для лиц старше 18 лет.</span>
      <span v-if="windowWidth <= 768">
        © 2015-2023.<br>Все права защищены.
      </span>
    </div>
  </footer>
</template>

<script>
import clientData from "../mixins/clientData";
export default {
  name: "FooterError",
  mixins: [clientData],
}
</script>

<style scoped lang="scss">

footer {
  width: 100%;
  background: $black;
  padding: rem(20) 0 rem(50);
}

span {
  color: rgba(115, 132, 128, 1);
  @include style-font(16);

  @media screen and (max-width: 768px){
    text-align: center;
  }
}

div.container.flex-align-center.flex-between {
  @media screen and (max-width: 768px){
    flex-direction: column;
    justify-content: center !important;
    gap: rem(10);
  }
}

</style>
