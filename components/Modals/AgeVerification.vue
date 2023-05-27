<template>
  <modal-wrap>
    <div class="flex-center">
      <article class="flex-center flex-column" @click.stop>
        <p>Подтверждение возраста</p>
        <span>
          Сайт содержит контент, предназначенный для лиц старше 18 лет.
          Для просмотра содержимого сайта, подтвердите свой возраст.
        </span>
        <button class="flex-center" @click="$emit('closeModal')">
          Да, мне  есть 18 лет
        </button>
      </article>
    </div>
  </modal-wrap>
</template>

<script>
import ModalWrap from "./ModalWrap";

export default {
  name: "AgeVerification",
  components: {
    ModalWrap
  },
}
</script>

<style scoped lang="scss">

div.flex-center {
  width: 100%;
  height: 100%;
}

article {
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  width: rem(650);
  height: rem(254);
  padding: rem(30);

  @media screen and (max-width: 425px){
    width: 94%;
    height: rem(316);
  }

  @media (min-width: 425px) and (max-width: 768px){
    width: rem(340);
    height: rem(316);
  }

  * {
    text-align: center;
    color: $black;
  }
}

p {
  @include style-font(36, 750, 140%, false);
  text-transform: uppercase;

  @media screen and (max-width: 768px){
    @include style-font(24, 750, 140%, false);
  }
}

span {
  margin: rem(10) 0 rem(30);
  @include style-font(16);
}

button {
  width: rem(233);
  height: rem(60);
  color: #FFFFFF;
  @include style-font(16);
  background: $green;
  border: none;
  border-radius: 8px;
  transition: .25s;

  &:hover {
    background: $hoverGreen;
  }

  @media screen and (max-width: 768px){
    width: 100%;
  }
}

</style>
