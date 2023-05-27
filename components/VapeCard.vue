<template>
  <article
    :class="[{'large-card' : largeCard}, {'hide-card' : !showAddInfo}]"
    @mouseleave="addInfo = false"
    @mousemove="addInfo = true"
  >
    <svg v-if="!likeState" class="like" @click="changeState" fill="none" height="26" viewBox="0 0 28 26" width="28"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.9686 1C23.7307 1 25.9875 2.71137 26.699 4.97127L26.8966 5.87837C27.1411 7.00057 26.9613 8.67219 26.2593 10.7056C25.5662 12.7133 24.3982 14.9733 22.7972 17.2241L22.7971 17.2242C19.9318 21.2533 16.546 24.0376 14.0004 24.9464C11.4549 24.0376 8.06905 21.2533 5.2038 17.2242L5.20374 17.2241C3.6027 14.9733 2.43396 12.7125 1.74047 10.7044C1.03801 8.67035 0.858634 6.99943 1.10404 5.87955L1.11246 5.84113L1.11784 5.80217C1.48543 3.13803 3.87557 1 7.03519 1C10.194 1 12.6936 3.23968 12.9742 5.97377L13.0663 6.87171H13.9689H14.0348H14.9367L15.0295 5.97463C15.3119 3.24553 17.8781 1 20.9686 1Z"
        stroke="#00A689" stroke-width="2"/>
    </svg>
    <svg v-else class="like" fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"
         @click="changeState">
      <path
        d="M39.8236 9.84452C39.1935 5.41846 35.0203 2 29.9551 2C24.8899 2 20.5366 5.56938 20.0497 10.1301H19.9556C19.4728 5.56938 15.2218 2 10.0503 2C4.87871 2 0.811827 5.41846 0.181746 9.84452C-0.681545 13.6628 1.56056 20.2345 6.2698 26.6513C10.6067 32.5622 15.8928 36.7762 20.0006 38C24.1084 36.7762 29.3946 32.5622 33.7315 26.6513C38.4407 20.2345 40.6787 13.6668 39.8195 9.84452H39.8236Z"
        fill="#00A689"/>
    </svg>
    <nuxt-link :to="cardInfo.url" exact no-prefetch>
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
      <div class="card-container">
        <p :class="{'ellipsis' : ellipsisCheck(cardInfo.title)}">
          {{ cardInfo.title }}
        </p>
        <div class="flex-between flex-align-end">
          <div class="price flex-column">
            <del class="price-discount" v-if="cardInfo.price.discount">{{ cardInfo.price.discount }}</del>
            <p class="price-text">
              <b><span>{{ cardInfo.price.price }}</span></b> ₽
            </p>
          </div>
          <svg class="cart" fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.934082 23.2928L6.10078 39.1321C6.26963 39.6485 6.75468 40 7.30113 40H32.7109C33.2574 40 33.7424 39.6485 33.9113 39.1321L39.078 23.2928H0.934082ZM19.5256 25.7009H23.0284L19.2217 34.27L17.6253 30.2055L19.5256 25.7009ZM14.0335 37.5888V27.6904L17.9047 37.5888H14.0335ZM25.9755 37.5888H23.9064L25.9755 33.0109V37.5888ZM20.6031 37.5888H18.7857L14.0335 25.7009H15.0926L19.1818 36.0852L23.8327 25.7009H25.9786L20.6062 37.5888H20.6031Z"
              fill="#0B0B0B"/>
            <path
              d="M3.11692 20.5179L3.16297 20.5546C3.6603 20.9305 4.36945 20.8296 4.74706 20.3345L19.0345 1.50952C19.1542 1.35061 19.1235 1.12751 18.9639 1.00833L17.739 0.0884678C17.5517 -0.0521085 17.2847 -0.0154305 17.1434 0.170986L2.89589 18.944C2.51829 19.4391 2.61959 20.145 3.11692 20.5209V20.5179Z"
              fill="#00A689"/>
            <path
              d="M36.7173 20.5148L36.6712 20.5515C36.1739 20.9274 35.4648 20.8265 35.0872 20.3315L20.7997 1.50647C20.68 1.34755 20.7107 1.12446 20.8703 1.00528L22.0952 0.085416C22.2825 -0.0551603 22.5496 -0.0184823 22.6908 0.167934L36.9383 18.941C37.3159 19.4361 37.2146 20.142 36.7173 20.5179V20.5148Z"
              fill="#00A689"/>
            <path
              d="M38.7465 18.9899H37.6843C37.9391 19.7081 37.7212 20.5362 37.0796 21.0191C36.2844 21.6181 35.1547 21.4592 34.553 20.6677L33.279 18.9899H6.55522L5.27813 20.6707C4.67643 21.4622 3.5467 21.6181 2.75158 21.0221C2.1069 20.5393 1.892 19.7081 2.14681 18.9899H1.26267C0.406155 18.9899 -0.201693 19.8212 0.0623213 20.631L0.510529 22.0093H39.4894L39.9377 20.631C40.2017 19.8212 39.5938 18.9899 38.7404 18.9899H38.7465Z"
              fill="black"/>
          </svg>
        </div>
      </div>
    </nuxt-link>
    <div class="mobile-btn flex-column">
      <div class="mobile-border">
        <svg class="mobile-btn-like" v-if="!likeState" @click="changeState" fill="none" height="26" viewBox="0 0 28 26" width="28"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.9686 1C23.7307 1 25.9875 2.71137 26.699 4.97127L26.8966 5.87837C27.1411 7.00057 26.9613 8.67219 26.2593 10.7056C25.5662 12.7133 24.3982 14.9733 22.7972 17.2241L22.7971 17.2242C19.9318 21.2533 16.546 24.0376 14.0004 24.9464C11.4549 24.0376 8.06905 21.2533 5.2038 17.2242L5.20374 17.2241C3.6027 14.9733 2.43396 12.7125 1.74047 10.7044C1.03801 8.67035 0.858634 6.99943 1.10404 5.87955L1.11246 5.84113L1.11784 5.80217C1.48543 3.13803 3.87557 1 7.03519 1C10.194 1 12.6936 3.23968 12.9742 5.97377L13.0663 6.87171H13.9689H14.0348H14.9367L15.0295 5.97463C15.3119 3.24553 17.8781 1 20.9686 1Z"
            stroke="#00A689" stroke-width="2"/>
        </svg>
        <svg class="mobile-btn-like" v-else @click="changeState" fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M39.8236 9.84452C39.1935 5.41846 35.0203 2 29.9551 2C24.8899 2 20.5366 5.56938 20.0497 10.1301H19.9556C19.4728 5.56938 15.2218 2 10.0503 2C4.87871 2 0.811827 5.41846 0.181746 9.84452C-0.681545 13.6628 1.56056 20.2345 6.2698 26.6513C10.6067 32.5622 15.8928 36.7762 20.0006 38C24.1084 36.7762 29.3946 32.5622 33.7315 26.6513C38.4407 20.2345 40.6787 13.6668 39.8195 9.84452H39.8236Z"
            fill="#00A689"/>
        </svg>

        <svg class="cart" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.934082 23.2928L6.10078 39.1321C6.26963 39.6485 6.75468 40 7.30113 40H32.7109C33.2574 40 33.7424 39.6485 33.9113 39.1321L39.078 23.2928H0.934082ZM19.5256 25.7009H23.0284L19.2217 34.27L17.6253 30.2055L19.5256 25.7009ZM14.0335 37.5888V27.6904L17.9047 37.5888H14.0335ZM25.9755 37.5888H23.9064L25.9755 33.0109V37.5888ZM20.6031 37.5888H18.7857L14.0335 25.7009H15.0926L19.1818 36.0852L23.8327 25.7009H25.9786L20.6062 37.5888H20.6031Z"
            fill="#0B0B0B"/>
          <path
            d="M3.11692 20.5179L3.16297 20.5546C3.6603 20.9305 4.36945 20.8296 4.74706 20.3345L19.0345 1.50952C19.1542 1.35061 19.1235 1.12751 18.9639 1.00833L17.739 0.0884678C17.5517 -0.0521085 17.2847 -0.0154305 17.1434 0.170986L2.89589 18.944C2.51829 19.4391 2.61959 20.145 3.11692 20.5209V20.5179Z"
            fill="#00A689"/>
          <path
            d="M36.7173 20.5148L36.6712 20.5515C36.1739 20.9274 35.4648 20.8265 35.0872 20.3315L20.7997 1.50647C20.68 1.34755 20.7107 1.12446 20.8703 1.00528L22.0952 0.085416C22.2825 -0.0551603 22.5496 -0.0184823 22.6908 0.167934L36.9383 18.941C37.3159 19.4361 37.2146 20.142 36.7173 20.5179V20.5148Z"
            fill="#00A689"/>
          <path
            d="M38.7465 18.9899H37.6843C37.9391 19.7081 37.7212 20.5362 37.0796 21.0191C36.2844 21.6181 35.1547 21.4592 34.553 20.6677L33.279 18.9899H6.55522L5.27813 20.6707C4.67643 21.4622 3.5467 21.6181 2.75158 21.0221C2.1069 20.5393 1.892 19.7081 2.14681 18.9899H1.26267C0.406155 18.9899 -0.201693 19.8212 0.0623213 20.631L0.510529 22.0093H39.4894L39.9377 20.631C40.2017 19.8212 39.5938 18.9899 38.7404 18.9899H38.7465Z"
            fill="black"/>
        </svg>
      </div>
    </div>
    <transition name="drop">
      <div v-if="addInfo && showAddInfo" class="add-info card-container">
        <p>Крепкость:</p>
        <div
          class="flex-align-center flex-between"
          v-for="(item, id) in cardInfo.fortress"
          :key="`card_fortress_${id}`"
        >
          <div class="flex-center">{{ item.min }}мг salt</div>
          <div class="flex-center">{{ item.max }}мг strong</div>
        </div>
        <p>В наличии:</p>
        <ul>
          <li class="flex-align-center" v-for="(item, id) in cardInfo.stock" :key="`card_stock_${id}`">
            <span></span>
            <p>{{ item.title }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </article>
</template>

<script>
export default {
  name: "VapeCard",
  props: {
    cardInfo: {type: Object, required: true,},
    largeCard: {type: Boolean, required: false, default: false},
    showAddInfo: {type: Boolean, required: false, default: true},
  },
  data() {
    return {
      addInfo: false,
      likeState: this.cardInfo.like
    }
  },
  methods: {
    ellipsisCheck(text) {
      if (!text) return false
      return text.length === 30
    },
    changeState() {
      this.likeState = !this.likeState
      this.cardInfo.like = this.likeState
    }
  }
}
</script>

<style lang="scss" scoped>

.flex-align-end {
  align-items: flex-end;
}

.card-container {
  padding: 0 rem(20);

  @media screen and (max-width: 768px) {
    padding: 0;
    min-width: rem(140);
    margin-left: rem(5);

    .cart {
      display: none;
    }
  }
}

article {
  width: rem(248);
  min-height: rem(450);
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 2px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  position: relative;
  transition: .25s;

  @media screen and (min-width: $laptop) {
    &:hover a {
      border-color: $green;
      border-radius: 10px 10px 0 0;
      border-bottom: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: rem(315);
    height: rem(127);
    min-height: auto;
    border-radius: 18px;
    box-shadow: 0 2px 6px 2px rgba(77, 102, 91, 0.3);
  }

  @media screen and (max-width: 560px) {
    box-shadow: 0 0 6px 1px rgba(77, 102, 91, 0.3);
  }

  .like {
    width: rem(28);
    height: rem(26);
    position: absolute;
    top: 5%;
    right: 7%;
    z-index: 2;
    cursor: pointer;
    transition: .25s;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  a {
    border-radius: 10px;
    display: block;
    width: 100%;
    height: 100%;
    padding-bottom: rem(20);
    border: 2px solid #FFFFFF;

    @media screen and (max-width: 768px) {
      display: flex;
      align-items: center;
      border-radius: 18px;
      padding: rem(15) rem(65) rem(15) rem(10);
    }

  }
}

.large-card {
  width: rem(306);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

.img-wrap {
  width: 100%;
  height: rem(300);
  margin-bottom: 6px;

  img {
    height: 100%;
    width: auto;
  }

  svg {
    width: rem(78);
    height: rem(78);

    @media screen and (max-width: 768px) {
      width: rem(45);
      height: rem(45);
    }
  }

  @media screen and (max-width: 768px) {
    width: rem(80);
    height: rem(90);
    margin-bottom: 0;
  }
}

p {
  @include style-font();
  color: $black;
  margin-bottom: rem(20);

  @media screen and (max-width: 768px) {
    margin-bottom: rem(25);
    @include style-font(14);
    max-width: rem(145);
    max-height: rem(40);
    overflow: hidden;
    text-overflow: ellipsis;
    //white-space: nowrap;
  }
}

.cart {
  width: rem(40);
  height: rem(40);

  @media screen and (max-width: 768px) {
    width: rem(27);
    height: rem(30);
    margin-bottom: rem(-7);
  }
}

.mobile-btn   {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: rem(15) 0;
  display: none !important;

  @media screen and (max-width: 768px){
    display: flex !important;
  }

  .mobile-border {
    border-left: 1px solid #8A928F;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    padding: rem(10) rem(20);
  }

  &-like {
    width: rem(28);
    height: rem(26);

    @media screen and (max-width: 768px){
      width: rem(22);
      height: rem(20);
      margin-top: rem(-4);
    }
  }
}

.price {
  @media screen and (max-width: 768px){
    flex-direction: row !important;
  }

  p {
    margin-bottom: 0;
  }

  &-text {
    @include style-font(20);
    color: $black;

    @media screen and (max-width: 768px){
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
    text-decoration: none;

    @media screen and (max-width: 768px){
      @include style-font(14);
      margin-right: rem(4);
    }

    &:before {
      content: "";
      border-bottom: 1px solid $green;
      position: absolute;
      left: -7%;
      width: 65%;
      height: 50%;
      transform: rotate(-14deg);

      @media screen and (max-width: 768px){
        width: 110%;
        top: -10%;
      }
    }
  }
}

.add-info {
  margin-top: rem(30);
  padding: rem(20);
  position: absolute;
  z-index: 3;
  top: 90%;
  left: 0;
  background: #FFFFFF;
  width: 100%;
  border-radius: 0 0 10px 10px;
  border: 2px solid $green;
  border-top: none;
  box-shadow: 4px 16px 8px 4px rgba(69, 99, 86, 0.3);
  transition: .25s;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }

  p {
    margin-bottom: 0;
    color: $black;
    @include style-font(16);
  }

  .flex-align-center.flex-between {
    margin: rem(10) 0;
    width: 100%;

    .flex-center {
      background: #8A928F;
      padding: rem(8) 0;
      width: 49%;
      color: #FFFFFF;
      @include style-font(16);

      &:first-child { border-radius: 8px 0 0 8px; }
      &:last-child { border-radius: 0 8px 8px 0; }

    }
  }

  ul {
    margin-top: rem(10);

    li span {
      width: 10px;
      height: 10px;
      background: $green;
      display: block;
      margin-right: rem(8);
      border-radius: 50%;
    }
  }
}

.hide-card:hover a {
  border-color: #FFFFFF !important;
  border-radius: 10px !important;
  border-bottom: 1px solid #FFFFFF !important;
}

.drop-enter {
  opacity: 0;
  transition: .25s;
  top: 80%;
}

.drop-enter-to {
  opacity: 1;
  top: 90%;
  transition: .25s
}

.drop-leave-to {
  opacity: 0;
  transition: .25s;
  top: 80%;
}

</style>
