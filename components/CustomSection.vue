<template>
  <div class="page-section" :class="{'hide-line' : adaptiveStyle}">
    <div :class="{'green-background' : hoverState}" class="page-line">
      <div class="container parent custom-parent">
        <nuxt-link
          class="page-link flex-center"
          exact no-prefetch :to="sectionInfo.url"
          @mousemove.native="hoverState = true"
          @mouseleave.native="hoverState = false"
          :class="{'green-background' : hoverState}"
        >
          <h2>{{ sectionInfo.title }}</h2>
        </nuxt-link>
      </div>
    </div>
    <slot/>
  </div>
</template>

<script>
import clientData from "../mixins/clientData";

export default {
  name: "CustomSection",
  props: {
    sectionInfo: {type: Object, required: true},
    adaptiveStyle: {type: Boolean, required: false, default: false},
  },
  mixins: [clientData],
  data() {
    return {
      hoverState: false,
    }
  },
  watch: {
    windowWidth() {
      this.pageLineNormal()
    },
  },
  mounted() {
    setTimeout(this.pageLineNormal, 0)
  },
  methods: {
    pageLineNormal() {
      if (this.windowWidth > 768) {
        const link = document.querySelector('.page-link')

        const linkWidth = link.getBoundingClientRect().width
        const beforeWidth = link.getBoundingClientRect().x + 0.5
        const afterWidth = window.innerWidth - (beforeWidth + linkWidth)

        let styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = `
        .custom-parent::before {
          width: ${beforeWidth}px !important;
        }
        .custom-parent::after {
          width: ${afterWidth}px !important;
          left: calc(${beforeWidth + linkWidth}px - 6.5%) !important;
        }
        `
      }
    },
  }
}
</script>

<style scoped lang="scss">

.custom-parent {
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 50rem;
    height: rem(15);
    background: $white;
    position: absolute;
    left: 0;
    top: rem(15);
    transform: translateX(-100%);
    border-radius: 0 10px 0 0;
    z-index: 2;

    @media screen and (max-width: 768px) {
      display: none;
      width: 20%;
      background: red;
      left: 0;
    }
  }

  &::after {
    content: '';
    display: block;
    width: rem(4000);
    height: rem(15);
    background: $white;
    position: absolute;
    left: 0;
    top: rem(15);
    border-radius: 10px 0 0 0;
    z-index: 2;

    @media screen and (max-width: 768px) {
      display: none;
      //top: rem(8);
      background: red;
      width: 20%;
      left: 0;
    }
  }
}

.page-background {
  background: $white;
}

.page-section {
  position: relative;
  padding: rem(200) 0 rem(180);

  @media screen and (max-width: 768px) {
    padding: rem(83) 0 rem(30);
  }
}

.page-line {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: rem(25);
  background: $black;
  transition: .25s;

  @media screen and (max-width: 768px){
    height: rem(15);

    /*&::before {
      content: '';
      display: block;
      width: 50%;
      height: rem(15);
      background: $white;
      position: absolute;
      left: 0;
      top: rem(7);
      border-radius: 0 10px 0 0;
      z-index: 2;
    }

    &::after {
      content: '';
      display: block;
      width: 50%;
      height: rem(15);
      background: $white;
      position: absolute;
      left: 0;
      top: rem(7);
      border-radius: 8px 0 0 0;
      z-index: 2;
    }*/
  }
}

.page-link {
  position: absolute;
  top: 0;
  left: 0;
  min-width: rem(336);
  padding: rem(26) rem(50);
  background: $black;
  border-radius: 10px;
  transition: .25s;

  @media screen and (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    padding: rem(20) rem(10) rem(10);
    min-width: rem(160);

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: rem(15);
      background: $white;
      position: absolute;
      right: 100%;
      top: 14%;
      border-radius: 0 10px 0 0;
      z-index: 2;
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: rem(15);
      background: $white;
      position: absolute;
      left: 100%;
      top: 14%;
      border-radius: 10px 0 0 0;
      z-index: 2;
    }
  }

  h2 {
    color: #FFFFFF;
    @include style-font(36, 750, 140%, false);
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      @include style-font(18, 450, 140%, false);
    }
  }
}

.green-background {
  background: $green;
}

.hide-line {
  @media screen and (max-width: 768px) {
    padding-top: 0;

    .page-line, .page-link {
      display: none !important;
    }
  }
}

</style>
