<template>
  <section>
    <h3>Оставить отзыв</h3>
    <form class="flex-column" @submit.prevent>
      <div class="flex-align-center rating">
        <p>
          <b>
            Ваша оценка
          </b>
        </p>
        <put-rating @resultRating="setRating"/>
      </div>

      <div class="flex-column">
        <textarea
          type="text"
          placeholder="Общий комментарий"
          name="comment"
          v-model="form.comment"
          class="feed-input"
        />

        <input
          type="text"
          placeholder="Напишите плюсы"
          name="pluses"
          v-model="form.pluses"
          class="feed-input"
          v-if="windowWidth > 768"
        >
        <textarea
          type="text"
          placeholder="Напишите плюсы"
          name="pluses"
          v-model="form.pluses"
          class="feed-input"
          v-else
        />

        <input
          type="text"
          placeholder="Напишите минусы"
          name="minuses"
          v-model="form.minuses"
          class="feed-input"
          v-if="windowWidth > 768"
        >
        <textarea
          type="text"
          placeholder="Напишите минусы"
          name="minuses"
          v-model="form.minuses"
          class="feed-input"
          v-else
        />

      </div>

      <button type="submit" class="btn-green">
        Отправить
      </button>
    </form>
  </section>
</template>

<script>
import PutRating from "../PutRating";
import clientData from "../../mixins/clientData";
export default {
  name: "FeedbackCmp",
  components: {PutRating},
  mixins: [clientData],
  data(){
    return {
      form: {
        pluses: '',
        minuses: '',
        comment: '',
        rating: 0
      },
    }
  },
  methods: {
    setRating(data){
      this.form.rating = data
    },
  }
}
</script>

<style scoped lang="scss">

section {
  margin: rem(80) 0 rem(150);
  width: 100%;
  height: rem(534);
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  padding: rem(30) rem(64) rem(50) rem(40);

  @media screen and (max-width: 768px){
    padding: rem(20) rem(30);
    margin: rem(30) 0;
    height: rem(515);
  }
}

h3 {
  text-transform: uppercase;
  color: $black;
  @include style-font(24, 750, 140%, false);
  margin-bottom: rem(20);

  @media screen and (max-width: 768px){
    @include style-font(18, 750, 140%, false);
    margin-bottom: rem(14);
  }
}

.rating {
  margin-bottom: rem(20);

  @media screen and (max-width: 768px){
    margin-bottom: rem(14);
  }

  p {
    @include style-font(16);
    margin-right: rem(10);
    color: $black;
  }
}

.feed-input {
  width: 100%;
  height: rem(44);
  padding: rem(8) rem(20) rem(12);
  margin-bottom: rem(20);
  border: 1px solid #E3E6E4;
  border-radius: 10px;
  @include style-font(16);
  color: $black;

  @media screen and (max-width: 768px){
    @include style-font(14);
    height: rem(80);
    padding: rem(15);
    margin-bottom: rem(10);
    vertical-align: top;
  }

  &::placeholder {
    color: rgba(138, 146, 143, 1);
  }

  &:first-child {
    height: rem(140);
    vertical-align: top;

    @media screen and (max-width: 768px){
      height: rem(140);
    }
  }

  &:last-child {
    margin-bottom: rem(30);

    @media screen and (max-width: 768px){
      margin-bottom: rem(20);
    }
  }
}

button {
  margin-left: auto;
  width: rem(300);

  @media screen and (max-width: 768px){
    width: 100%;
  }
}

</style>
