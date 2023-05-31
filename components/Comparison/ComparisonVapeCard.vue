<template>
  <article>
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
    <h4>{{ cardInfo.title }}</h4>
    <div class="flex-align-center additional flex-between">
      <div class="price">
        <div class="price-discount" v-if="cardInfo.price.discount">
          {{ cardInfo.price.discount }}
          <svg class="rub-very-small" width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.46904 11V0H4.64353C6.1182 0 7.21013 0.272176 7.91932 0.816527C8.63977 1.36088 9 2.15173 9 3.18908C9 3.88749 8.82552 4.48833 8.47655 4.9916C8.12758 5.48459 7.60976 5.86461 6.92308 6.13165C6.24765 6.39869 5.40901 6.53221 4.40713 6.53221H2.98874V11H1.46904ZM0 8.90476V7.90336H5.77486V8.90476H0ZM0 6.53221V5.36134H3.86679V6.53221H0ZM4.18762 5.36134C4.8743 5.36134 5.45403 5.29458 5.92683 5.16106C6.41088 5.02754 6.78236 4.80672 7.04128 4.4986C7.30019 4.19048 7.42964 3.76937 7.42964 3.23529C7.42964 2.53688 7.19325 2.01821 6.72045 1.67927C6.24765 1.34034 5.51032 1.17087 4.50844 1.17087H2.98874V5.36134H4.18762Z" fill="#0B0B0B"/>
          </svg>
        </div>
        <span class="price-text">
          <b class="green">{{ cardInfo.price.price }} </b>
          <svg class="rub-small" fill="none" height="11" viewBox="0 0 9 11" width="9" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.46904 11V0H4.64353C6.1182 0 7.21013 0.272176 7.91932 0.816527C8.63977 1.36088 9 2.15173 9 3.18908C9 3.88749 8.82552 4.48833 8.47655 4.9916C8.12758 5.48459 7.60976 5.86461 6.92308 6.13165C6.24765 6.39869 5.40901 6.53221 4.40713 6.53221H2.98874V11H1.46904ZM0 8.90476V7.90336H5.77486V8.90476H0ZM0 6.53221V5.36134H3.86679V6.53221H0ZM4.18762 5.36134C4.8743 5.36134 5.45403 5.29458 5.92683 5.16106C6.41088 5.02754 6.78236 4.80672 7.04128 4.4986C7.30019 4.19048 7.42964 3.76937 7.42964 3.23529C7.42964 2.53688 7.19325 2.01821 6.72045 1.67927C6.24765 1.34034 5.51032 1.17087 4.50844 1.17087H2.98874V5.36134H4.18762Z" fill="#0B0B0B"/>
          </svg>
        </span>
      </div>
      <svg class="cart" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.934082 23.2928L6.10078 39.1321C6.26963 39.6485 6.75468 40 7.30113 40H32.7109C33.2574 40 33.7424 39.6485 33.9113 39.1321L39.078 23.2928H0.934082ZM19.5256 25.7009H23.0284L19.2217 34.27L17.6253 30.2055L19.5256 25.7009ZM14.0335 37.5888V27.6904L17.9047 37.5888H14.0335ZM25.9755 37.5888H23.9064L25.9755 33.0109V37.5888ZM20.6031 37.5888H18.7857L14.0335 25.7009H15.0926L19.1818 36.0852L23.8327 25.7009H25.9786L20.6062 37.5888H20.6031Z" fill="#0B0B0B"/>
        <path d="M3.11692 20.5179L3.16297 20.5546C3.6603 20.9305 4.36945 20.8296 4.74706 20.3345L19.0345 1.50952C19.1542 1.35061 19.1235 1.12751 18.9639 1.00833L17.739 0.0884678C17.5517 -0.0521085 17.2847 -0.0154305 17.1434 0.170986L2.89589 18.944C2.51829 19.4391 2.61959 20.145 3.11692 20.5209V20.5179Z" fill="#00A689"/>
        <path d="M36.7173 20.5148L36.6712 20.5515C36.1739 20.9274 35.4648 20.8265 35.0872 20.3315L20.7997 1.50647C20.68 1.34755 20.7107 1.12446 20.8703 1.00528L22.0952 0.085416C22.2825 -0.0551603 22.5496 -0.0184823 22.6908 0.167934L36.9383 18.941C37.3159 19.4361 37.2146 20.142 36.7173 20.5179V20.5148Z" fill="#00A689"/>
        <path d="M38.7465 18.9899H37.6843C37.9391 19.7081 37.7212 20.5362 37.0796 21.0191C36.2844 21.6181 35.1547 21.4592 34.553 20.6677L33.279 18.9899H6.55522L5.27813 20.6707C4.67643 21.4622 3.5467 21.6181 2.75158 21.0221C2.1069 20.5393 1.892 19.7081 2.14681 18.9899H1.26267C0.406155 18.9899 -0.201693 19.8212 0.0623213 20.631L0.510529 22.0093H39.4894L39.9377 20.631C40.2017 19.8212 39.5938 18.9899 38.7404 18.9899H38.7465Z" fill="black"/>
      </svg>
    </div>

    <svg class="close" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 9.70342L2.03802 15.6654C1.81496 15.8885 1.53105 16 1.18631 16C0.841571 16 0.557667 15.8885 0.3346 15.6654C0.111533 15.4423 0 15.1584 0 14.8137C0 14.4689 0.111533 14.185 0.3346 13.962L6.29658 8L0.3346 2.03802C0.111533 1.81496 0 1.53105 0 1.18631C0 0.841572 0.111533 0.557669 0.3346 0.334601C0.557667 0.111534 0.841571 0 1.18631 0C1.53105 0 1.81496 0.111534 2.03802 0.334601L8 6.29658L13.962 0.334601C14.185 0.111534 14.4689 0 14.8137 0C15.1584 0 15.4423 0.111534 15.6654 0.334601C15.8885 0.557669 16 0.841572 16 1.18631C16 1.53105 15.8885 1.81496 15.6654 2.03802L9.70342 8L15.6654 13.962C15.8885 14.185 16 14.4689 16 14.8137C16 15.1584 15.8885 15.4423 15.6654 15.6654C15.4423 15.8885 15.1584 16 14.8137 16C14.4689 16 14.185 15.8885 13.962 15.6654L8 9.70342Z" fill="#E3E6E4"/>
    </svg>
  </article>
</template>

<script>
export default {
  name: "ComparisonVapeCard",
  props: {
    cardInfo: { type: Object, required: true },
  }
}
</script>

<style scoped lang="scss">

.green {
  color: $green;
}

article {
  width: rem(316);
  background: #FFFFFF;
  border-radius: 10px;
  height: rem(452);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: .25s;
  border: 2px solid #FFFFFF;

  @media screen and (max-width: 768px) {
    width: rem(146);
    height: rem(255);
    border: none;
  }

  @media screen and (min-width: $laptop) {
    &:hover {
      border-color: $green;

      svg.close path{
        fill: $green;
      }
    }
  }
}

.img-wrap {
  width: 100%;
  height: rem(300);
  margin-bottom: rem(6);

  @media screen and (max-width: 768px) {
    height: rem(150);
    border-radius: 10px;
    margin-bottom: rem(10);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  svg {
    width: rem(100);
    height: rem(100);

    @media screen and (max-width: 768px) {
      width: rem(70);
      height: rem(70);
      margin-bottom: 0;
    }
  }
}

h4 {
  color: $black;
  @include style-font();
  height: rem(60);
  margin-bottom: rem(10);
  padding: 0 rem(20);

  @media screen and (max-width: 768px) {
    @include style-font(14);
    text-align: center;
    padding: 0 rem(10);
    margin-bottom: rem(10);
    height: rem(40);
    //white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.additional {
  padding: 0 rem(20);

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.price {
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: row !important;
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

    @media screen and (max-width: 768px){
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
      transform: matrix(0.89, -0.20, 0.31, 1, -5, 9);

      @media (min-width: 991px) and (max-width: 1400px){
        transform: matrix(0.89, -0.20, 0.31, 1, -5, 7);
      }

      @media (min-width: 769px) and (max-width: 990px){
        transform: matrix(0.89, -0.20, 0.31, 1, -5, 5);
      }

      @media (min-width: 521px) and (max-width: 768px){
        transform: matrix(1.2, -0.20, 0.31, 1, -5, 12);
      }

      @media screen and (max-width: 520px){
        transform: matrix(1.2, -0.20, 0.31, 1, -5, 10);
      }
    }
  }
}

.cart {
  width: rem(40);
  height: rem(40);
  cursor: pointer;

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 7%;
    top: 40%;
    width: rem(30);
    height: rem(30);
    transform: translateY(-10%);
  }
}

.close {
  position: absolute;
  top: 5%;
  right: 5%;
  width: rem(24);
  height: rem(24);
  z-index: 2;
  transition: .25s;

  @media screen and (max-width: 768px) {
    padding: rem(3);
    width: rem(30);
    height: rem(30);
    right: 6%;
    top: 3%;
  }
}

</style>
