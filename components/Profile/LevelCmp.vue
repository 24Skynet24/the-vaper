<template>
  <article class="flex-column flex-center">
    <p>Ваш текущий уровень</p>
    <div class="square flex-center">
      <svg v-if="lvlName === 'recruit'" class="logo" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1218_4931)">
          <path d="M40 0H0V40H40V0Z" fill="#0B0B0B"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60449 4.22723L16.8549 35.4148H21.5351L35.3816 4.22723H29.8538L17.8723 31.4666L7.33468 4.22723H4.60449Z" fill="#8A928F"/>
          <path d="M21.6028 35.5188H16.7842L4.45215 4.12343H7.40602L17.8786 31.1946L29.7862 4.12343H35.5416L21.6028 35.5188ZM16.9258 35.3109H21.4677L35.222 4.33126H29.9219L17.8663 31.7387L7.26359 4.33126H4.75707L16.9258 35.3109Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.548 23.3376L30.1348 35.534H35.548V23.3376Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8908 4.12144L17.9949 26.7979L13.8418 16.0422L18.7859 4.12144H27.8908Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.47949 10.5191L14.095 35.5353H4.47949V10.5191Z" fill="white"/>
        </g>
        <rect x="0.1" y="0.1" width="39.8" height="39.8" stroke="white" stroke-width="0.2"/>
        <defs>
          <clipPath id="clip0_1218_4931">
            <rect width="40" height="40" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <svg v-else class="logo" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_601_2314)">
          <path d="M0.1 39.9V0.1H39.9V39.9H0.1Z" fill="#0B0B0B" stroke="white" stroke-width="0.2"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60477 4.22729L16.8551 35.4149H21.5354L35.3819 4.22729H29.8541L17.8726 31.4666L7.33496 4.22729H4.60477Z" fill="#00A689"/>
          <path d="M21.6029 35.5188H16.7843L4.45227 4.12347H7.40614L17.8787 31.1947L29.7863 4.12347H35.5418L21.6029 35.5188ZM16.926 35.311H21.4678L35.2221 4.3313H29.922L17.8665 31.7387L7.26371 4.3313H4.75719L16.926 35.311Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5481 23.3376L30.1349 35.534H35.5481V23.3376Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8914 4.12146L17.9955 26.7979L13.8424 16.0423L18.7864 4.12146H27.8914Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.47983 10.5192L14.0954 35.5353H4.47983V10.5192Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_601_2314">
            <rect width="40" height="40" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      <div class="bg" v-html="lvls[lvlName.toLocaleLowerCase()] || lvls['первый']"></div>

      <span>{{ lvlName }}</span>
    </div>
  </article>
</template>

<script>
export default {
  name: "LevelCmp",
  props: {
    lvlName: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      lvls: {
        'первый': require("@/assets/img/profile/bg-1.svg?raw"),
        'второй': require("@/assets/img/profile/bg-0.svg?raw"),
        'третий': require("@/assets/img/profile/bg-0.svg?raw"),
      },
    }
  },
}
</script>

<style scoped lang="scss">

article {
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 8px;
  padding: rem(30) rem(80);
  width: rem(426);
  height: rem(280);

  @media screen and (max-width: 768px) {
    width: 100%;
    height: rem(210);
    padding: rem(20) rem(20) rem(10);
    box-shadow: none;
  }
}

p {
  margin-bottom: rem(40);
  @include style-font(14, 750, 140%, false);
  color: rgba(138, 146, 143, 1);
  text-transform: uppercase;

  @media screen and (max-width: 768px){
    margin-bottom: rem(30);
  }
}

.square {
  position: relative;
  width: 100%;
  height: rem(180);

  @media screen and (max-width: 768px) {
    height: 70%;
  }
}

div.bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  &::v-deep svg {
    width: 100%;
    height: 100%;
  }
}

svg.logo {
  position: absolute;
  left: 50%;
  top: 0;
  z-index: 1;
  transform: translateX(-50%) translateY(-25%);
  width: rem(40);
  height: rem(40);
}

span {
  color: #FFFFFF;
  z-index: 2;
  text-transform: uppercase;
  @include style-font(32, 750, 140%, false);
  margin-bottom: rem(10);

  @media screen and (max-width: 768px){
    @include style-font(24, 750, 140%, false);
  }
}

</style>
