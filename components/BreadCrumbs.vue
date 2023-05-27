<template>
  <ul class="flex-align-center">
    <li v-for="(item, id) in breadCrumbs" :key="`bread_crumb_${id}`">
      <nuxt-link :to="item.url" no-prefetch exact>
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: {
    breadCrumbs: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped lang="scss">

ul {
  gap: 0 !important;

  li {
    display: flex;
    align-items: center;

    a {
      color: $black;
      @include style-font(16);
      margin-right: rem(8);

      @media screen and (max-width: 768px){
        @include style-font(14);
      }
    }

    &:last-child a{
      margin-right: 0;
      color: #8A928F;
    }

    &::after {
      content: '/';
      display: block;
      margin-right: rem(8);
    }

    &:last-child::after {
      display: none;
    }
  }
}


</style>
