<template>
  <modal-wrap class="flex-center" @closeModal="$emit('closeCartModal')" @click="$emit('closeCartModal')">
    <form @click.stop>
      <svg @click="$emit('closeCartModal')" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9.70342L2.03802 15.6654C1.81496 15.8885 1.53105 16 1.18631 16C0.841571 16 0.557667 15.8885 0.3346 15.6654C0.111533 15.4423 0 15.1584 0 14.8137C0 14.4689 0.111533 14.185 0.3346 13.962L6.29658 8L0.3346 2.03802C0.111533 1.81496 0 1.53105 0 1.18631C0 0.841572 0.111533 0.557669 0.3346 0.334601C0.557667 0.111534 0.841571 0 1.18631 0C1.53105 0 1.81496 0.111534 2.03802 0.334601L8 6.29658L13.962 0.334601C14.185 0.111534 14.4689 0 14.8137 0C15.1584 0 15.4423 0.111534 15.6654 0.334601C15.8885 0.557669 16 0.841572 16 1.18631C16 1.53105 15.8885 1.81496 15.6654 2.03802L9.70342 8L15.6654 13.962C15.8885 14.185 16 14.4689 16 14.8137C16 15.1584 15.8885 15.4423 15.6654 15.6654C15.4423 15.8885 15.1584 16 14.8137 16C14.4689 16 14.185 15.8885 13.962 15.6654L8 9.70342Z" fill="#8A928F"/>
      </svg>

      <h3><b>Адрес доставки</b></h3>
      <span>Для доставки доступны 2 товара из 4</span>

      <div class="flex-wrap">
        <input class="input" type="text" required placeholder="Улица, дом">
        <input class="input" type="text" required placeholder="Подъезд">
        <input class="input" type="text" required placeholder="Этаж">
        <input class="input" type="text" required placeholder="Квартира">
      </div>

      <textarea class="input" placeholder="Комментарий к заказу"/>

      <button class="btn-green" type="submit">Сохранить</button>
    </form>
  </modal-wrap>
</template>

<script>
import ModalWrap from "./ModalWrap";

export default {
  name: "CartAddress",
  components: {ModalWrap}
}
</script>

<style scoped lang="scss">

form {
  background: #FFFFFF;
  box-shadow: 4px 4px 8px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  padding: rem(30) rem(60) rem(50);
  position: relative;

  @media screen and (max-width: 768px){
    width: 90%;
    height: 90%;
    overflow-y: auto;
    padding: rem(20) rem(30) rem(30);
  }

  * {
    color: $black;
  }
}

h3 {
  @include style-font(20);
  margin-bottom: rem(10);

  @media screen and (max-width: 768px){
    @include style-font();
  }
}

span {
  display: block;
  @include style-font();
  color: rgba(138, 146, 143, 1);
  margin-bottom: rem(30);

  @media screen and (max-width: 768px){
    @include style-font(16);
    margin-bottom: rem(20);
  }
}

.flex-wrap {
  gap: rem(20);
  margin-bottom: rem(30);
}

input {
  width: 48%;

  @media screen and (max-width: 768px){
    width: 100%;
  }
}

textarea {
  margin-bottom: rem(30);
  overflow: hidden;
}

button {
  color: #ffffff;
  width: rem(400);

  @media screen and (max-width: 768px){
    width: 100%;
  }
}

svg {
  position: absolute;
  cursor: pointer;
  right: 3%;
  top: 3%;
  width: rem(16);
  height: rem(16);
}

</style>
