<template>
  <article class="product-block">
    <ul class="flex-column">
      <li v-for="(item, id) in productEquipment" :key="`productEquipment_${id}`" class="flex-align-center">
        <div></div>
        <span>{{ item.label + " " + item.value }}</span>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "ProductEquipment",
  props: {
    productEquipment: { type: Array, required: true },
  }
}
</script>

<style scoped lang="scss">

ul {
  gap: rem(10);
}

li {
  gap: rem(8);
}

div {
  width: rem(10);
  height: rem(10);
  background: $green;
  border-radius: 50%;
}

span {
  @include style-font();
  @media screen and (max-width: 768px) {
    @include style-font(16);
  }
}

</style>
