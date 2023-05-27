<template functional>
  <article class="flex-center flex-column">
    <h2>
      В корзине нет товаров
    </h2>
    <p>
      Вы еще ничего не добавили в корзину.
    </p>
    <nuxt-link to="/catalog">
      <button class="btn-green">
        Перейти в каталог
      </button>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  name: "CartNon"
}
</script>

<style scoped lang="scss">

article {
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  width: rem(652);
  height: rem(342);

  * {
    color: $black;
  }

  @media screen and (max-width: 768px) {
    padding: rem(30);
    width: 100%;
    height: rem(272);
  }
}

h2 {
  @include style-font(36, 750, 140%, false);
  margin-bottom: rem(10);
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    @include style-font(24, 750, 140%, false);
  }
}

p {
  @include style-font(16);
  margin-bottom: rem(30);
  text-align: center;
}

button {
  width: rem(222);
  color: #FFFFFF;
}

</style>
