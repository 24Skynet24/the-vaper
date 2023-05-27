<template>
  <article class="product-block">
    <div class="flex-column" v-for="(item, id) in descriptionText" :key="`descriptionText_${id}`">
      <h6>
        <b>
          {{ item.title }}
        </b>
      </h6>
      <p>{{ item.text }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProductDescription",
  props: {
    descriptionText: { type: Array, required: true },
  }
}
</script>

<style scoped lang="scss">

.flex-column {
  margin-bottom: rem(20);
  gap: rem(4);

  @media screen and (max-width: 768px) {
    margin-bottom: rem(10);
  }
}

h6 {
  @include style-font(20);

  @media screen and (max-width: 768px) {
    @include style-font();
  }
}

p {
  @include style-font();

  @media screen and (max-width: 768px) {
    @include style-font(16);
  }
}

</style>
