<template>
  <div class="page-section" :class="{'hide-line' : adaptiveStyle}">
    <span class="page-line" :class="{'green-background' : hoverState}">
      <div class="container parent">
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
    </span>
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
        .page-link::before {
          width: ${beforeWidth}px !important;
        }
        .page-link::after {
          width: ${afterWidth - .4}px !important;
        }
        `
      }
    },
  }
}
</script>

<style scoped lang="scss">

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
  }

  &::before {
    content: '';
    display: block;
    width: 50rem;
    height: rem(10);
    background: $white;
    position: absolute;
    left: 0;
    top: calc(15% + 1px);
    transform: translateX(-100%);
    border-radius: 0 10px 0 0;
    z-index: 2;

    @media screen and (max-width: 768px) {
      width: 100%;
      top: 15%;
      height: rem(7);
      left: 0;
    }
  }

  &::after {
    content: '';
    display: block;
    width: rem(4000);
    height: rem(10);
    background: $white;
    position: absolute;
    left: 100%;
    top: calc(15% + 1px);
    border-radius: 10px 0 0 0;
    z-index: 2;

    @media screen and (max-width: 768px) {
      width: 100%;
      top: 15%;
      height: rem(7);
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
