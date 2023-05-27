<template>
  <div class="page">
    <div class="flex-center flex-column">
      <div class="flex-align-center">
        <span class="err">404</span>
        <span>error</span>
      </div>
      <h1>страница не найдена</h1>
      <p>Простите, но мы не можем найти запрашиваемую страницу.</p>
      <nuxt-link to="/" exact no-prefetch class="btn-green flex-center">
        Вернуться в каталог
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  layout: 'errors',
}
</script>

<style scoped lang="scss">

* {
  color: #FFFFFF;
}

.page {
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: rem(100) 0;
  }
}

div.flex-center {
  width: rem(876);
  height: 100%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 rem(20);
  }
}

h1 {
  @include style-font(54, 750, 120%, false);
  margin-top: rem(10);
  text-transform: uppercase;
  text-align: center;

  @media screen and (max-width: 768px) {
    @include style-font(24, 750, 140%, false);
  }
}

p {
  text-align: center;
  @include style-font();
  margin-bottom: rem(50);

  @media screen and (max-width: 768px) {
    @include style-font(14);
    margin-bottom: rem(30);
    max-width: 70%;
  }
}

a {
  width: rem(280);
  height: rem(60);

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: rem(320);
  }
}

div.flex-align-center {
  span {
    color: $green;
    @include style-font(21, 750, 140%, false);
    margin-left: rem(10);
    text-transform: uppercase;
  }

  .err {
    padding: rem(4) rem(10);
    background: #FFFFFF;
    border-radius: 10px;
  }
}

</style>
