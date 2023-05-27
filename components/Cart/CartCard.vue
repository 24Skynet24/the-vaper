<template>
  <article class="flex">
    <div class="img-wrap flex-center">
      <img v-if="cardInfo.img" :src="cardInfo.img" alt="">
      <svg v-else fill="none" height="79" viewBox="0 0 78 79" width="78" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd"
              d="M0.511963 0.567993L31.1379 78.5369H42.8385L77.4548 0.567993H63.6353L33.6815 68.6664L7.33744 0.567993H0.511963Z"
              fill="#8A928F"
              fill-rule="evenodd"/>
        <path
          d="M43.0073 78.7968H30.9609L0.130737 0.308472H7.51541L33.6969 67.9864L63.4659 0.308472H77.8544L43.0073 78.7968ZM31.3149 78.2772H42.6696L77.0553 0.828047H63.805L33.6662 69.3466L7.15933 0.828047H0.893042L31.3149 78.2772Z"
          fill="#8A928F"/>
        <path clip-rule="evenodd" d="M77.8702 48.3439L64.3372 78.8349H77.8702V48.3439Z" fill="#8A928F"
              fill-rule="evenodd"/>
        <path clip-rule="evenodd" d="M58.7285 0.303589L33.9888 56.9946L23.606 30.1056L35.9661 0.303589H58.7285Z"
              fill="#8A928F" fill-rule="evenodd"/>
        <path clip-rule="evenodd" d="M0.199707 16.2979L24.2385 78.8382H0.199707V16.2979Z" fill="#8A928F"
              fill-rule="evenodd"/>
      </svg>
    </div>

    <div class="additional flex-align-center">
      <h4>{{ cardInfo.title }}</h4>

      <div class="buttons">
        <button @click="cardInfo.quantity > 0 ? --cardInfo.quantity : ''">
          <span></span>
        </button>
        <input v-model="cardInfo.quantity" type="number">
        <button @click="++cardInfo.quantity">+</button>
      </div>

      <div class="price">
        <div v-if="cardInfo.price.discount" class="price-discount">
          {{ cardInfo.price.discount }}
        </div>
        <span class="price-text"><b class="green">{{ cardInfo.price.price }} </b>₽</span>
      </div>
    </div>

    <div class="icons flex-align-center">
      <div class="like">
        <svg v-if="cardInfo.like" fill="none" height="26" viewBox="0 0 28 26" width="28" xmlns="http://www.w3.org/2000/svg"
             @click="cardInfo.like = false">
          <path
            d="M20.9686 1C23.7307 1 25.9875 2.71137 26.699 4.97127L26.8966 5.87837C27.1411 7.00057 26.9613 8.67219 26.2593 10.7056C25.5662 12.7133 24.3982 14.9733 22.7972 17.2241L22.7971 17.2242C19.9318 21.2533 16.546 24.0376 14.0004 24.9464C11.4549 24.0376 8.06905 21.2533 5.2038 17.2242L5.20374 17.2241C3.6027 14.9733 2.43396 12.7125 1.74047 10.7044C1.03801 8.67035 0.858634 6.99943 1.10404 5.87955L1.11246 5.84113L1.11784 5.80217C1.48543 3.13803 3.87557 1 7.03519 1C10.194 1 12.6936 3.23968 12.9742 5.97377L13.0663 6.87171H13.9689H14.0348H14.9367L15.0295 5.97463C15.3119 3.24553 17.8781 1 20.9686 1Z"
            stroke="#00A689" stroke-width="2"/>
        </svg>
        <svg v-else fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"
             @click="cardInfo.like = true">
          <path
            d="M39.8236 9.84452C39.1935 5.41846 35.0203 2 29.9551 2C24.8899 2 20.5366 5.56938 20.0497 10.1301H19.9556C19.4728 5.56938 15.2218 2 10.0503 2C4.87871 2 0.811827 5.41846 0.181746 9.84452C-0.681545 13.6628 1.56056 20.2345 6.2698 26.6513C10.6067 32.5622 15.8928 36.7762 20.0006 38C24.1084 36.7762 29.3946 32.5622 33.7315 26.6513C38.4407 20.2345 40.6787 13.6668 39.8195 9.84452H39.8236Z"
            fill="#00A689"/>
        </svg>
      </div>
      <div class="del">
        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"
             @click="$emit('delCard')">
          <path
            d="M8 9.70342L2.03802 15.6654C1.81496 15.8885 1.53105 16 1.18631 16C0.841571 16 0.557667 15.8885 0.3346 15.6654C0.111533 15.4423 0 15.1584 0 14.8137C0 14.4689 0.111533 14.185 0.3346 13.962L6.29658 8L0.3346 2.03802C0.111533 1.81496 0 1.53105 0 1.18631C0 0.841572 0.111533 0.557669 0.3346 0.334601C0.557667 0.111534 0.841571 0 1.18631 0C1.53105 0 1.81496 0.111534 2.03802 0.334601L8 6.29658L13.962 0.334601C14.185 0.111534 14.4689 0 14.8137 0C15.1584 0 15.4423 0.111534 15.6654 0.334601C15.8885 0.557669 16 0.841572 16 1.18631C16 1.53105 15.8885 1.81496 15.6654 2.03802L9.70342 8L15.6654 13.962C15.8885 14.185 16 14.4689 16 14.8137C16 15.1584 15.8885 15.4423 15.6654 15.6654C15.4423 15.8885 15.1584 16 14.8137 16C14.4689 16 14.185 15.8885 13.962 15.6654L8 9.70342Z"
            fill="#E3E6E4"/>
        </svg>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "CartCard",
  props: {
    cardInfo: {type: Object, required: true},
  },
}
</script>

<style lang="scss" scoped>

.green {
  color: $green;
}

* {
  color: $black;
}

article {
  width: 100%;
  height: rem(160);
  padding: rem(20);
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: rem(20) rem(10);
    border-radius: 18px;
    height: rem(169);
  }
}

.img-wrap {
  width: rem(120);
  height: 100%;

  @media screen and (max-width: 768px) {
    width: rem(90);
    height: rem(80);
  }

  img {
    width: 100%;
    height: 100%;
  }

  svg {
    width: rem(100);
    height: rem(100);

    @media screen and (max-width: 768px) {
      width: rem(60);
      height: rem(60);
    }
  }
}

h4 {
  padding: rem(5) 0;
  @include style-font();
  width: rem(298);
  margin: 0 rem(20);

  @media screen and (max-width: 768px) {
    margin: 0 0 rem(10) 0;
    @include style-font(14);
    padding: 0;
    width: 100%;
    min-width: rem(130);
  }
}

.additional {
  @media screen and (max-width: 768px) {
    width: rem(130);
    margin: 0 rem(10);
    flex-direction: column !important;
    align-items: center;
    padding: rem(20) 0;
    flex: 1;
  }
}

.buttons {
  margin-right: rem(40);
  padding: rem(18) rem(20);
  height: rem(60);
  display: flex;
  align-items: center;
  gap: rem(10);

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-right: 0;
    height: rem(24);
    margin-bottom: rem(10);
  }

  button {
    border: none;
    background: none;
    @include style-font(24);
    padding: rem(5);
    display: flex;
    align-items: center;
    justify-content: center;


    &:last-child {
      color: rgba(0, 166, 137, 1);
    }

    span {
      display: block;
      width: rem(14);
      height: rem(2);
      background: rgba(138, 146, 143, 1);
      margin-bottom: rem(-3);

      @media screen and (max-width: 768px){
        margin-bottom: rem(-4);
      }
    }
  }

  input {
    border: none;
    background: none;
    width: rem(24);
    text-align: center;
    @include style-font();
  }
}

.price {
  margin-right: rem(40);
  padding-left: rem(20);
  padding-bottom: rem(24);

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row !important;
    margin-right: 0;
    padding-left: 0;
    padding-bottom: 0;
  }

  &-text {
    @include style-font(20);
    color: $black;

    @media screen and (max-width: 768px) {
      @include style-font(18);
    }

    span {
      color: $green;
    }
  }

  &-discount {
    color: $black;
    @include style-font(16);
    position: relative;

    @media screen and (max-width: 768px) {
      @include style-font(14);
      margin-right: rem(4);
    }

    &::after {
      display: block;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 75%;
      height: 1px;
      border-radius: 10px;
      background: $green;
      z-index: 2;
      transform: matrix(0.89, -0.20, 0.31, 1, -3, 12);

      @media screen and (min-width: 1921px){
        transform: matrix(0.89, -0.20, 0.31, 1, -4, 17);
      }

      @media (min-width: 991px) and (max-width: 1450px){
        transform: matrix(0.89, -0.20, 0.31, 1, -3, 8);
      }

      @media (min-width: 769px) and (max-width: 990px){
        transform: matrix(0.89, -0.25, 0.31, 1, -1, 6);
      }

      @media (min-width: 521px) and (max-width: 768px){
        transform: matrix(1.5, -0.5, 0.31, 1, 5, 12);
      }

      @media screen and (max-width: 520px){
        transform: matrix(1.5, -0.5, 0.31, 1, 5, 10);
      }
    }
  }
}

.icons {
  gap: rem(20);

  @media screen and (max-width: 768px) {
    padding: rem(10) rem(10) rem(10) rem(20);
    border-left: 1px solid rgba(180, 183, 182, 1);
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
  }

  div {
    width: rem(30);
    height: rem(30);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .like svg {
    width: rem(28);
    height: rem(26);
  }

  .del svg {
    width: rem(24);
    height: rem(24);
    padding-right: 1px;
  }

  svg {
    cursor: pointer;
  }
}

</style>
