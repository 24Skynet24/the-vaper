<template>
  <div class="page-background">
    <div class="bread-crumbs container" v-if="(productsEmpty && windowWidth <= 768) || windowWidth > 768">
      <bread-crumbs :bread-crumbs="breadCrumbsCart"/>
    </div>

    <main v-if="productsEmpty" class="flex-center container">
      <cart-non/>
    </main>

    <custom-section v-else :section-info="sectionInfo">
      <div class="container">
        <main class="flex">
          <section class="flex-column">
            <cart-card
              v-for="(item, id) in cartCards"
              :key="`cart_card_${id}`"
              :card-info="item"
            />
          </section>
          <aside>
            <h3><b>Детали заказа</b></h3>

            <div class="price-info flex-column">
              <div class="flex-align-center">
                <span class="title">4 позиции в заказе</span>
              </div>
              <div class="flex-align-center flex-between">
                <span class="title">Скидка</span>
                <span>
                  -400
                  <svg class="rub-very-small" fill="none" height="11" viewBox="0 0 9 11" width="9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.46904 11V0H4.64353C6.1182 0 7.21013 0.272176 7.91932 0.816527C8.63977 1.36088 9 2.15173 9 3.18908C9 3.88749 8.82552 4.48833 8.47655 4.9916C8.12758 5.48459 7.60976 5.86461 6.92308 6.13165C6.24765 6.39869 5.40901 6.53221 4.40713 6.53221H2.98874V11H1.46904ZM0 8.90476V7.90336H5.77486V8.90476H0ZM0 6.53221V5.36134H3.86679V6.53221H0ZM4.18762 5.36134C4.8743 5.36134 5.45403 5.29458 5.92683 5.16106C6.41088 5.02754 6.78236 4.80672 7.04128 4.4986C7.30019 4.19048 7.42964 3.76937 7.42964 3.23529C7.42964 2.53688 7.19325 2.01821 6.72045 1.67927C6.24765 1.34034 5.51032 1.17087 4.50844 1.17087H2.98874V5.36134H4.18762Z" fill="#0B0B0B"/>
                  </svg>
                </span>
              </div>
              <div class="flex-align-center flex-between">
                <span class="bold"><b>Итого</b></span>
                <span class="bold">
                  <b>6150</b>
                  <svg class="rub-bold" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.80872 17V17.15H2.95872H4.98499H5.13499V17V14.1024H8.69981H8.84981V13.9524V12.4958V12.3458H8.69981H5.13499V10.6514H6.15572H6.30572H6.87617C8.22526 10.6514 9.36499 10.4554 10.2897 10.0567C11.228 9.65856 11.9438 9.08815 12.4279 8.34216L12.4287 8.34097C12.9117 7.58102 13.15 6.67806 13.15 5.63866C13.15 4.09568 12.6572 2.89861 11.655 2.0723C10.6704 1.24812 9.17284 0.85 7.19137 0.85H2.95872H2.80872V1V8.64832H1H0.85V8.79832V10.5014V10.6514H1H2.80872V12.3458H1H0.85V12.4958V13.9524V14.1024H1H2.80872V17ZM5.13499 8.64832V2.85308H7.01126C8.33409 2.85308 9.27673 3.09818 9.86819 3.56074C10.4527 4.01786 10.7562 4.72254 10.7562 5.70588C10.7562 6.4618 10.5882 7.03819 10.2695 7.45188C9.9469 7.87075 9.48048 8.17642 8.85922 8.36336L8.85828 8.36365C8.24653 8.55212 7.48944 8.64832 6.58349 8.64832H6.30572H6.15572H5.13499Z" fill="#0B0B0B" stroke="#0B0B0B" stroke-width="0.3"/>
                  </svg>
                </span>
              </div>
            </div>

            <div class="btn-info">
              <div class="flex-align-center ">
                <span class="bold"><b>+185</b></span>
                <span>бонусов</span>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.00065 4.16669C7.18954 4.16669 7.34798 4.23069 7.47598 4.35869C7.60398 4.48669 7.66776 4.64491 7.66732 4.83335V7.50002C7.66732 7.68891 7.60332 7.84735 7.47532 7.97535C7.34732 8.10335 7.1891 8.16713 7.00065 8.16669C6.81176 8.16669 6.65332 8.10269 6.52532 7.97469C6.39732 7.84669 6.33354 7.68846 6.33398 7.50002V4.83335C6.33398 4.64446 6.39798 4.48602 6.52598 4.35802C6.65398 4.23002 6.81221 4.16624 7.00065 4.16669ZM7.00065 9.50002C7.18954 9.50002 7.34798 9.56402 7.47598 9.69202C7.60398 9.82002 7.66776 9.97824 7.66732 10.1667C7.66732 10.3556 7.60332 10.514 7.47532 10.642C7.34732 10.77 7.1891 10.8338 7.00065 10.8334C6.81176 10.8334 6.65332 10.7694 6.52532 10.6414C6.39732 10.5134 6.33354 10.3551 6.33398 10.1667C6.33398 9.9778 6.39798 9.81935 6.52598 9.69135C6.65398 9.56335 6.81221 9.49958 7.00065 9.50002ZM7.00065 0.833353C6.07843 0.833353 5.21176 1.00846 4.40065 1.35869C3.58954 1.70891 2.88398 2.1838 2.28398 2.78335C1.68398 3.38335 1.2091 4.08891 0.859318 4.90002C0.50954 5.71113 0.334429 6.5778 0.333984 7.50002C0.333984 8.42224 0.509096 9.28891 0.859318 10.1C1.20954 10.9111 1.68443 11.6167 2.28398 12.2167C2.88398 12.8167 3.58954 13.2916 4.40065 13.6414C5.21176 13.9911 6.07843 14.1662 7.00065 14.1667C7.92287 14.1667 8.78954 13.9916 9.60065 13.6414C10.4118 13.2911 11.1173 12.8162 11.7173 12.2167C12.3173 11.6167 12.7924 10.9111 13.1427 10.1C13.4929 9.28891 13.6678 8.42224 13.6673 7.50002C13.6673 6.5778 13.4922 5.71113 13.142 4.90002C12.7918 4.08891 12.3169 3.38335 11.7173 2.78335C11.1173 2.18335 10.4118 1.70824 9.60065 1.35802C8.78954 1.0078 7.92287 0.832909 7.00065 0.833353ZM7.00065 2.16669C8.48954 2.16669 9.75065 2.68335 10.784 3.71669C11.8173 4.75002 12.334 6.01113 12.334 7.50002C12.334 8.98891 11.8173 10.25 10.784 11.2834C9.75065 12.3167 8.48954 12.8334 7.00065 12.8334C5.51176 12.8334 4.25065 12.3167 3.21732 11.2834C2.18398 10.25 1.66732 8.98891 1.66732 7.50002C1.66732 6.01113 2.18398 4.75002 3.21732 3.71669C4.25065 2.68335 5.51176 2.16669 7.00065 2.16669Z" fill="#8A928F"/>
                </svg>
              </div>
              <button class="btn-green" @click="redirectPage('/cart/order')">
                Перейти к оформлению
              </button>
              <p>
                Доступные способы доставки будут показаны при оформлении заказа
              </p>
            </div>
          </aside>
        </main>

        <article class="additional-info flex-align-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33268 11.6667L1.66602 20V23.3333H3.33268V33.3333H19.9993V23.3333H26.666V33.3333H29.9993V23.3333H31.666V20L29.9993 11.6667H3.33268ZM16.666 30H6.66602V23.3333H16.666V30ZM29.9993 9.99999H3.33268V6.66666H29.9993V9.99999ZM38.3327 11.6667V21.6667H34.9994V11.6667H38.3327ZM34.9994 25H38.3327V28.3333H34.9994V25Z" fill="#00A689"/>
          </svg>

          <p>
            <b>
              Обратите внимание: в корзине есть товары, для которых доступен только самовывоз.
            </b>
          </p>
        </article>
      </div>
    </custom-section>
  </div>
</template>

<script>
import BreadCrumbs from "../../components/BreadCrumbs";
import CartNon from "../../components/Cart/CartNon";
import CustomSection from "../../components/CustomSection";
import CartCard from "../../components/Cart/CartCard";
import clientData from "../../mixins/clientData";

export default {
  name: "cart",
  components: {CartCard, CustomSection, CartNon, BreadCrumbs},
  mixins: [clientData],
  data() {
    return {
      breadCrumbsCart: [
        {
          url: '/',
          title: 'Главная',
        },
        {
          url: this.$route.fullPath,
          title: 'Корзина',
        },
      ],
      sectionInfo: {
        url: this.$route.fullPath,
        title: 'Корзина'
      },
      cartCards: [
        {
          title: 'Жидкость Hangsen Salt Strawberry Watermelon 30 мл',
          like: true,
          price: {
            price: 2000,
            discount: 1000,
          },
          quantity: 1,
          img: '',
        },
        {
          title: 'Жидкость Hangsen Salt Strawberry Watermelon 30 мл',
          like: true,
          price: {
            price: 2000,
            discount: 1000,
          },
          quantity: 1,
          img: '',
        },
        {
          title: 'Жидкость Hangsen Salt Strawberry Watermelon 30 мл',
          like: true,
          price: {
            price: 2000,
            discount: 1000,
          },
          quantity: 1,
          img: '',
        },
        {
          title: 'Жидкость Hangsen Salt Strawberry Watermelon 30 мл',
          like: true,
          price: {
            price: 2000,
            discount: 1000,
          },
          quantity: 1,
          img: '',
        },
        {
          title: 'Жидкость Hangsen Salt Strawberry Watermelon 30 мл',
          like: true,
          price: {
            price: 2000,
            discount: 1000,
          },
          quantity: 1,
          img: '',
        },
        {
          title: 'Жидкость Hangsen Salt Strawberry Watermelon 30 мл',
          like: true,
          price: {
            price: 2000,
            discount: 1000,
          },
          quantity: 1,
          img: '',
        },
        {
          title: 'Жидкость Hangsen Salt Strawberry Watermelon 30 мл',
          like: true,
          price: {
            price: 2000,
            discount: 1000,
          },
          quantity: 1,
          img: '',
        },
      ],
      productsEmpty: 0,
    }
  },
  methods: {
    redirectPage(path){
      this.$router.push(path)
    },
  },
}
</script>

<style lang="scss" scoped>

.page-section {
  padding: rem(150) 0 0;

  @media screen and (max-width: 768px) {
    padding: rem(80) 0 0;
  }
}

.page-background {
  position: relative;
  // FIX
  overflow: visible;
  padding: 0 0 rem(180);

  @media screen and (max-width: 768px) {
    padding: 0 0 rem(30);
    overflow: hidden;
  }
}

main.flex-center {
  padding-top: rem(60);

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
}

.container {
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
}

main.flex {
  justify-content: space-between;
  margin-bottom: rem(30);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
    justify-content: flex-start;
    gap: rem(20);
  }

  section {
    width: rem(876);
    gap: rem(20);

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
}

aside {
  width: rem(428);
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  padding: rem(30) rem(40) rem(40);
  margin-bottom: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 3%;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: rem(20) rem(30) rem(30);
  }

  * {
    color: $black;
  }

  h3 {
    @include style-font(20);
    margin-bottom: rem(30);

    @media screen and (max-width: 768px) {
      @include style-font();
      margin-bottom: rem(10);
    }
  }

  .price-info {
    margin-bottom: rem(40);
    gap: rem(10);

    @media screen and (max-width: 768px) {
      gap: rem(4);
      margin-bottom: rem(10);
    }

    span {
      @include style-font();

      @media screen and (max-width: 768px) {
        @include style-font(16);
      }
    }

    span.title {
      color: rgba(138, 146, 143, 1);
    }

    span.bold {
      @include style-font(20);

      @media screen and (max-width: 768px) {
        @include style-font(18);
      }
    }
  }

  .btn-info {
    button {
      color: #FFFFFF;
      width: 100%;
      margin-bottom: rem(10);
    }

    p {
      color: rgba(138, 146, 143, 1);
      text-align: center;
      @include style-font(16);
      padding: 0 rem(10);

      @media screen and (max-width: 768px) {
        @include style-font(14);
      }
    }

    .flex-align-center {
      span {
        @include style-font(14);
        color: rgba(138, 146, 143, 1);
      }

      span.bold {
        @include style-font();
        text-transform: uppercase;
        margin-right: rem(4);
      }

      svg {
        width: rem(14);
        height: rem(14);
        margin-left: rem(5);
      }
    }
  }
}

.additional-info {
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  padding: rem(30) rem(40);
  width: rem(876);

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: rem(14) rem(20) rem(20) rem(30);
    align-items: center;
    justify-content: center;
    margin-bottom: rem(30);
  }

  p {
    @include style-font(16);

    @media screen and (max-width: 768px) {
      @include style-font(14);
      width: 90%;
    }
  }

  svg {
    width: rem(40);
    height: rem(40);
    margin-right: rem(10);

    //@media screen and (max-width: 768px) {
    //  @include style-font(14);
    //}
  }
}

</style>
