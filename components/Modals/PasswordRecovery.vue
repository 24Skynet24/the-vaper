<template>
  <modal-wrap @closeModal="$emit('closeModal')">
    <div class="flex-center">
      <form class="sing-in-form" ref="passRecovery" @submit.prevent @click.stop>
        <svg @click="$emit('closeModal')" class="close" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9.70342L2.03802 15.6654C1.81496 15.8885 1.53105 16 1.18631 16C0.841571 16 0.557667 15.8885 0.3346 15.6654C0.111533 15.4423 0 15.1584 0 14.8137C0 14.4689 0.111533 14.185 0.3346 13.962L6.29658 8L0.3346 2.03802C0.111533 1.81496 0 1.53105 0 1.18631C0 0.841572 0.111533 0.557669 0.3346 0.334601C0.557667 0.111534 0.841571 0 1.18631 0C1.53105 0 1.81496 0.111534 2.03802 0.334601L8 6.29658L13.962 0.334601C14.185 0.111534 14.4689 0 14.8137 0C15.1584 0 15.4423 0.111534 15.6654 0.334601C15.8885 0.557669 16 0.841572 16 1.18631C16 1.53105 15.8885 1.81496 15.6654 2.03802L9.70342 8L15.6654 13.962C15.8885 14.185 16 14.4689 16 14.8137C16 15.1584 15.8885 15.4423 15.6654 15.6654C15.4423 15.8885 15.1584 16 14.8137 16C14.4689 16 14.185 15.8885 13.962 15.6654L8 9.70342Z" fill="#8A928F"/>
        </svg>

        <h3>Восстановление пароля</h3>
        <p>Введите номер телефона, который вы указывали при регистрации</p>
        <input
          type="tel" name="login"
          class="input" :class="{'invalid' : errMsg}"
          placeholder="Телефон" autofocus required minlength="4"
          v-mask="'+7 (###) ###-##-##'"
          v-model="tel"
          @invalid="invalidityInput"
        >
        <p class="error-text" v-if="errMsg">Неверно введен номер телефона</p>
        <button type="submit" class="btn-green">Получить код</button>
      </form>
    </div>
  </modal-wrap>
</template>

<script>
import ModalWrap from "./ModalWrap";
import inputInteractions from "../../mixins/inputInteractions";
export default {
  name: "PasswordRecovery",
  components: {ModalWrap},
  mixins: [inputInteractions],
  data(){
    return {
      tel: '',
      errMsg: false,
      statusCode: null,
    }
  },
}
</script>

<style scoped lang="scss">

.flex-center {
  width: 100%;
  height: 100%;
}

form {
  width: rem(688);
  height: rem(424);
  background: #FFFFFF;
  padding: rem(60) rem(70) rem(70);
  position: relative;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 10px;

  @media screen and (max-width: 768px){
    width: 85%;
    height: auto;
    padding: rem(50) rem(30);
  }

  * {
    color: $black;
  }
}

h3 {
  @include style-font(36, 750, 140%, false);
  margin-bottom: rem(10);
  text-transform: uppercase;

  @media screen and (max-width: 768px){
    @include style-font(24, 750, 140%, false);
    text-align: center;
  }
}

p {
  @include style-font(16);
  margin-bottom: rem(30);

  @media screen and (max-width: 768px){
    text-align: center;
  }
}

button {
  margin-top: rem(20);
  color: #FFFFFF;
}

</style>
