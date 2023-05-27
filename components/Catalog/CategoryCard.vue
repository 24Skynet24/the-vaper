<template>
  <article>
    <nuxt-link :to="cardInfo.url" no-prefetch exact class="flex-center flex-column">
      <div class="icon flex-center" v-html="cardInfo.icon"></div>
      <h3>{{ cardInfo.title }}</h3>
    </nuxt-link>
  </article>
</template>

<script>

export default {
  name: "CategoryCard",
  props: {
    cardInfo: {
      type: Object,
      required: true
    }
  },
}

</script>

<style scoped lang="scss">

article {
  width: rem(316);
  height: 100%;
  border: 2px solid #FFFFFF;
  box-shadow: 4px 4px 8px 2px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  background: #FFFFFF;
  transition: .25s;

  @media screen and (min-width: $laptop) {
    &:hover {
      border-color: $green;

      h3 {
        color: $green;
      }

      .icon:deep *{
        fill: $green;
        stroke: $green;
      }
    }
  }

  a {
    padding: rem(50) rem(30);
  }

  .icon {
    margin-bottom: rem(30);

    &:deep *{
      width: rem(100);
      height: rem(100);
      transition: .25s;
    }
  }

  h3 {
    color: $black;
    text-transform: uppercase;
    @include style-font(24, 750, 140%, false);
    text-align: center;
    transition: .25s;
  }
}

</style>
