<template>
  <article class="flex-align-center">
    <div class="text">
      <p>
        Мы используем cookie-файлы, чтобы ваше посещение сайта было удобным и персонализированным.
      </p>
      <a href="/">
        Согласие на обработку персональных данных.
      </a>
    </div>
    <button class="flex-center" @click="$emit('closeCookies')">
      Хорошо
    </button>
  </article>
</template>

<script>
export default {
  name: "CookiesModal"
}
</script>

<style scoped lang="scss">

article {
  position: fixed;
  bottom: 3%;
  left: 7%;
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  padding: rem(30);
  width: rem(650);
  height: rem(136);
  z-index: 4;

  @media screen and (max-width: 768px){
    width: 85%;
    height: auto;
    flex-direction: column;
    align-items: flex-start !important;
  }

  .text {
    width: rem(431);

    @media screen and (max-width: 768px){
      width: 100%;
    }
  }

  * {
    @include style-font(16);
  }

  p {
    color: $black;
    margin-bottom: rem(10);
  }

  a {
    color: #8A928F;
    text-decoration: underline;

    @media screen and (max-width: 768px){
      @include style-font(12);
    }
  }

  button {
    width: rem(139);
    height: rem(60);
    background: $green;
    border: none;
    color: #FFFFFF;
    border-radius: 8px;

    @media screen and (max-width: 768px){
      width: 100%;
      margin-top: rem(20);
    }
  }
}

</style>
