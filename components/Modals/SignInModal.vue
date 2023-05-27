<template>
  <modal-wrap @closeModal="$emit('closeModal')">
    <div class="flex-center">
      <article @click.stop>
        <svg @click="$emit('closeModal')" class="close" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9.70342L2.03802 15.6654C1.81496 15.8885 1.53105 16 1.18631 16C0.841571 16 0.557667 15.8885 0.3346 15.6654C0.111533 15.4423 0 15.1584 0 14.8137C0 14.4689 0.111533 14.185 0.3346 13.962L6.29658 8L0.3346 2.03802C0.111533 1.81496 0 1.53105 0 1.18631C0 0.841572 0.111533 0.557669 0.3346 0.334601C0.557667 0.111534 0.841571 0 1.18631 0C1.53105 0 1.81496 0.111534 2.03802 0.334601L8 6.29658L13.962 0.334601C14.185 0.111534 14.4689 0 14.8137 0C15.1584 0 15.4423 0.111534 15.6654 0.334601C15.8885 0.557669 16 0.841572 16 1.18631C16 1.53105 15.8885 1.81496 15.6654 2.03802L9.70342 8L15.6654 13.962C15.8885 14.185 16 14.4689 16 14.8137C16 15.1584 15.8885 15.4423 15.6654 15.6654C15.4423 15.8885 15.1584 16 14.8137 16C14.4689 16 14.185 15.8885 13.962 15.6654L8 9.70342Z" fill="#8A928F"/>
        </svg>

        <div class="flex-align-center flex-between">
          <p :class="{'active-tab' : !modalsActive}" @click="modalsActive = false">Войти</p>
          <p :class="{'active-tab' : modalsActive}" @click="modalsActive = true">регистрация</p>
        </div>

        <login-form v-if="!modalsActive"/>
        <registration-form v-else/>
      </article>
    </div>
  </modal-wrap>
</template>

<script>
import ModalWrap from "./ModalWrap";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
export default {
  name: "SignInModal",
  components: {RegistrationForm, LoginForm, ModalWrap},
  data() {
    return {
      modalsActive: false
    }
  }
}
</script>

<style scoped lang="scss">

*::-webkit-scrollbar-track {
  border-radius: 20px;
}

.flex-center {
  width: 100%;
  height: 100%;
}

article {
  width: rem(652);
  //min-height: rem(511);
  max-height: rem(700);
  overflow-y: auto;
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  padding: rem(60) rem(70) rem(70);
  position: relative;

  @media screen and (max-width: 768px){
    max-width: rem(320);
    max-height: 80%;
    padding: rem(40) rem(20);
  }
}

p {
  @include style-font(24, 750, 140%, false);
  color: #8A928F;
  text-transform: uppercase;
  transition: .4s;
  cursor: pointer;
  order: 1;

  @media screen and (max-width: 768px){
    @include style-font(18, 750, 140%, false);
  }
}

.active-tab {
  color: $black;
  @include style-font(36, 750, 140%, false);
  order: 0;

  @media screen and (max-width: 768px){
    @include style-font(24, 750, 140%, false);
  }
}

.flex-between.flex-align-center {
  margin-bottom: rem(40);
}

</style>

