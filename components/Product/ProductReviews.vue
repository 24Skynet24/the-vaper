<template>
  <article class="product-block flex-column">
    <header class="flex-between">
      <stars-vaper :rating-stars="productReview.rating"/>
      <span class="date">{{ normalDate(productReview.date) }}</span>
    </header>
    <div class="flex-column" v-if="productReview.pluses">
      <h6>
        <b>
          Плюсы
        </b>
      </h6>
      <p>{{ productReview.pluses || '-' }}</p>
    </div>
    <div class="flex-column" v-if="productReview.minuses">
      <h6>
        <b>
          Минусы
        </b>
      </h6>
      <p>{{ productReview.minuses || '-' }}</p>
    </div>
    <div class="flex-column" v-if="productReview.comment">
      <h6>
        <b>
          Комментарий
        </b>
      </h6>
      <p>{{ productReview.comment || '-' }}</p>
    </div>
    <span class="name">{{ productReview.name }}</span>
  </article>
</template>

<script>
import StarsVaper from "../StarsVaper";
import {normalDate} from "../../utils/date";

export default {
  name: "ProductReviews",
  components: {StarsVaper},
  props: {
    productReview: { type: Object, required: true },
  },
  data(){
    return {
      normalDate: normalDate,
    }
  },
}
</script>

<style scoped lang="scss">

article {
  width: rem(540);
  height: rem(540);
  padding: rem(30) rem(40) rem(40);
  gap: rem(20);
  box-shadow: 4px 4px 8px 2px rgba(69, 99, 86, 0.3);

  @media screen and (max-width: 768px){
    width: 100%;
    height: auto;
    padding: rem(20) rem(30);
    gap: rem(10);
  }
}

header {
  align-items: flex-end;
}

span {
  @include style-font(16);
  color: rgba(138, 146, 143, 1);

  @media screen and (max-width: 768px){
    @include style-font(14);
  }
}

h6 {
  @include style-font(20);
  margin-bottom: rem(4);

  @media screen and (max-width: 768px){
    @include style-font();
    margin-bottom: 0;
  }
}

p {
  @include style-font(16);
}

.name {
  margin-top: auto;
}

</style>
