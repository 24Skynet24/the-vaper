<template>
  <article class="table" v-if="windowWidth > 768">
    <div class="table-column non-bg">
      <div class="table-item">
        <span>Оценка</span>
      </div>
      <div class="table-item">
        <span>Бренд</span>
      </div>
      <div class="table-item">
        <span>Объем</span>
      </div>
      <div class="table-item">
        <span>Тип аккумулятора</span>
      </div>
      <div class="table-item">
        <span>Тип обдува</span>
      </div>
      <div class="table-item">
        <span>Комплектация</span>
      </div>
    </div>
    <swiper-wrap
      :slides-per-view="3"
      @swiper="swiperInit($event, true)"
      @slideChange="slideChange($event)"
    >
      <swiper-slide v-for="(item, id) in tableItems" :key="`table_column_${id}`">
        <div class="table-column" >
          <div class="table-item">
            <stars-vaper :rating-reviews="item.star.reviews" :rating-stars="item.star.rating" :star-type="true"/>
          </div>
          <div class="table-item">
            <span>{{ item.brand || '-' }}</span>
          </div>
          <div class="table-item">
            <span>{{ item.volume || '-' }} мл</span>
          </div>
          <div class="table-item">
            <span>{{ item.battery_type || '-' }}</span>
          </div>
          <div class="table-item">
            <span>{{ item.blowing_type || '-' }}</span>
          </div>
          <div class="table-item">
            <span>{{ item.equipment || '-' }}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper-wrap>

  </article>
  <article class="table comparison-table" v-else>
    <client-only>
      <div class="parent">
        <swiper-wrap
          :space-between="0"
          :slides-per-view="2"
          @swiper="swiperInit($event, false)"
          @slideChange="slideChange($event)"
        >
          <swiper-slide v-for="(item, id) in tableItems" :key="`comparison_mobile_table_item_${id}`">
            <div class="table-mobile-item">
              <div class="flex-column">
                <span class="title">Оценка</span>
                <stars-vaper :rating-reviews="item.star.rating" :rating-stars="item.star.rating" :star-type="true"/>
              </div>

              <div class="flex-column">
                <span class="title">Бренд</span>
                <span>{{ item.brand }}</span>
              </div>

              <div class="flex-column">
                <span class="title">Объем</span>
                <span>{{ item.volume }} мл</span>
              </div>

              <div class="flex-column">
                <span class="title">Тип аккумулятора</span>
                <span>{{ item.battery_type }}</span>
              </div>

              <div class="flex-column">
                <span class="title">Тип обдува</span>
                <span>{{ item.blowing_type }}</span>
              </div>

              <div class="flex-column">
                <span class="title">Комплектация</span>
                <span>{{ item.equipment }}</span>
              </div>
            </div>
          </swiper-slide>
        </swiper-wrap>
      </div>
    </client-only>
  </article>
</template>

<script>
import StarsVaper from "../StarsVaper";
import clientData from "../../mixins/clientData";
export default {
  name: "ComparisonTable",
  components: {StarsVaper},
  mixins: [clientData],
  data(){
    return {
      tableItems: [
        {
          star: {
            reviews: 12,
            rating: 12,
          },
          brand: 'Geekvape',
          volume: 2,
          battery_type: 'Встроенный',
          blowing_type: 'Верхний',
          equipment: ''
        },
        {
          star: {
            reviews: 12,
            rating: 12,
          },
          brand: 'Geekvape',
          volume: 2,
          battery_type: 'Встроенный',
          blowing_type: 'Верхний',
          equipment: ''
        },
        {
          star: {
            reviews: 12,
            rating: 12,
          },
          brand: 'Geekvape',
          volume: 2,
          battery_type: 'Встроенный',
          blowing_type: 'Верхний',
          equipment: ''
        },
        {
          star: {
            reviews: 12,
            rating: 12,
          },
          brand: 'Geekvape',
          volume: 2,
          battery_type: 'Встроенный',
          blowing_type: 'Верхний',
          equipment: ''
        },
        {
          star: {
            reviews: 12,
            rating: 12,
          },
          brand: 'Geekvape',
          volume: 2,
          battery_type: 'Встроенный',
          blowing_type: 'Верхний',
          equipment: ''
        },
      ],
      tableSlide: {},
      activeSlide: 0,
      compParentTableSlider: null,
      compChildrenTableSlider: null,
    }
  },
  computed: {
    getSlides(){
      return this.$store.getters.getComparisonSlider
    }
  },
  watch: {
    getSlides(e) {
      if (e || e === 0) {
        if (this.windowWidth > 768) this.compParentTableSlider.slideTo(e)
        else this.compChildrenTableSlider.slideTo(e)
      }
    }
  },
  methods: {
    setSlide(){
      this.$store.commit('setGeneral', {path: 'comparisonSliderIndex', payload: this.activeSlide})
    },
    swiperInit(e, state = true) {
      state ? this.compParentTableSlider = e : this.compChildrenTableSlider = e
    },
    slideChange(e) {
      this.activeSlide = e.activeIndex
      this.setSlide()
    },
  }
}
</script>

<style scoped lang="scss">

.table {
  width: 100%;
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  display: flex;
  padding: rem(10) 0;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    overflow: visible;
    align-items: flex-start;
    height: auto;
    padding: 0;
  }
}

.table-column {
  display: flex;
  flex-direction: column;
  gap: rem(10);
  width: rem(336);

  &:first-child {
    .table-item * {
      color: rgba(138, 146, 143, 1);
    }
  }
}

.table-item {
  padding: rem(10) rem(20) rem(14);

  span {
    color: $black;
  }

  &:nth-child(even) {
    background: rgba(245, 245, 245, 1);
  }
}

.non-bg {
  .table-item {
    background: #FFFFFF;
  }
}

.table-mobile-item {
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  gap: rem(10);
  width: rem(140);
  padding: rem(10) 0 rem(20);

  .flex-column {
    padding-left: rem(20);
    gap: rem(8);

    @media screen and (max-width: 768px){
      gap: rem(3);
    }
  }

  span {
    color: $black;
    @include style-font(16);
  }

  .title {
    color: rgba(138, 146, 143, 1);
    @include style-font(14);
  }
}

.swiper-container {
  flex: 1;
}

.comparison-table {
  width: 100%;
  height: rem(328);
  position: relative;

  .parent {
    position: absolute;
    border-radius: 10px;
    left: 0;
    top: 0;
    overflow: visible;
    width: 100%;
    height: 100%;

    .swiper-container {
      width: auto;
      height: 100%;
      overflow: visible;
      border-radius: 10px;
    }

    .swiper-slide {
      background: #FFFFFF;

      &:first-child, &:first-child > .table-mobile-item {
        border-radius: 10px 0 0 10px;
      }

      &:last-child, &:last-child > .table-mobile-item {
        border-radius: 0 10px 10px 0;
      }
    }
  }
}

</style>
