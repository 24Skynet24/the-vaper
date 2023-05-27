<template>
  <div class="main">
    <section>
      <header class="flex-align-center">
        <div class="flex-align-center" @click="$emit('closeFilters')">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9.70342L2.03802 15.6654C1.81496 15.8885 1.53105 16 1.18631 16C0.841571 16 0.557667 15.8885 0.3346 15.6654C0.111533 15.4423 0 15.1584 0 14.8137C0 14.4689 0.111533 14.185 0.3346 13.962L6.29658 8L0.3346 2.03802C0.111533 1.81496 0 1.53105 0 1.18631C0 0.841572 0.111533 0.557669 0.3346 0.334601C0.557667 0.111534 0.841571 0 1.18631 0C1.53105 0 1.81496 0.111534 2.03802 0.334601L8 6.29658L13.962 0.334601C14.185 0.111534 14.4689 0 14.8137 0C15.1584 0 15.4423 0.111534 15.6654 0.334601C15.8885 0.557669 16 0.841572 16 1.18631C16 1.53105 15.8885 1.81496 15.6654 2.03802L9.70342 8L15.6654 13.962C15.8885 14.185 16 14.4689 16 14.8137C16 15.1584 15.8885 15.4423 15.6654 15.6654C15.4423 15.8885 15.1584 16 14.8137 16C14.4689 16 14.185 15.8885 13.962 15.6654L8 9.70342Z" fill="#00A689"/>
          </svg>

          <b>Фильтры</b>
        </div>
      </header>
      <ul class="flex-column">
        <li v-for="(item, id) in filters" :key="`catalog_mobile_filter_${id}`">
          <div v-if="item.type === 'range'">
            <div class="title flex-align-center flex-between" @click="item.active = !item.active">
              <span><b>{{ item.title }}</b></span>

              <svg :class="{'active-filter' : item.active}" fill="none" height="8" viewBox="0 0 14 8" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.999999L7 7L13 1" stroke="#00A689" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"/>
              </svg>
            </div>

            <div class="custom-range" v-if="item.active">
              <div class="custom-range-score">
                <input
                  type="number"
                  :value="item.price.minValue"
                  :min="+item.price.min"
                  :max="+item.price.max"
                  @input="setPrice($event, item.price, true)"
                >

                <span class="line"></span>

                <input
                  type="number"
                  :value="+item.price.maxValue"
                  :min="+item.price.min"
                  :max="+item.price.max"
                  @input="setPrice($event, item.price)"
                >
              </div>
              <client-only>
                <multi-range-slider
                  class="range-slider"
                  :max="+item.price.max"
                  :min="+item.price.min"
                  :max-value="+item.price.maxValue"
                  :min-value="+item.price.minValue"
                  :step="1"
                  @input="changeRange($event, item.price)"
                />
              </client-only>
            </div>
          </div>

          <div v-if="item.type === 'radio'">
            <div class="title flex-align-center flex-between" @click="item.active = !item.active">
              <span><b>{{ item.title }}</b></span>

              <svg :class="{'active-filter' : item.active}" fill="none" height="8" viewBox="0 0 14 8" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.999999L7 7L13 1" stroke="#00A689" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
            </div>

            <div class="list" v-if="item.active">
              <label class="list-item custom-radio" v-for="(el, i) in item.children" :key="`catalog_mobile_radio_${i}`" @click="radioId = el.id">
                <div :class="['radio', {'active' : el.id === radioId}]">
                  <span></span>
                </div>
                <span>{{ el.title }}</span>
              </label>
            </div>
          </div>

          <div v-if="item.type === 'checkbox'">
            <div class="title flex-align-center flex-between" @click="item.active = !item.active">
              <span><b>{{ item.title }}</b></span>

              <svg :class="{'active-filter' : item.active}" fill="none" height="8" viewBox="0 0 14 8" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.999999L7 7L13 1" stroke="#00A689" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"/>
              </svg>
            </div>
            <div class="list" v-if="item.active">
              <div class="list-item custom-checkbox" v-for="(el, i) in item.children" :key="`catalog_mobile_checkbox_${i}`" @click="el.active = !el.active">
                <div :class="{'active-checkbox' : el.active}" class="checkbox">
                  <svg fill="none" height="14" viewBox="0 0 17 14" width="17" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 7.5L6 12L16 1" stroke="white" stroke-width="2"/>
                  </svg>
                </div>
                <span>{{ el.title }}</span>
              </div>
            </div>
          </div>
        </li>

      </ul>
      <div class="buttons flex-align-center flex-between">
        <button @click="$emit('closeFilters')">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9.70342L2.03802 15.6654C1.81496 15.8885 1.53105 16 1.18631 16C0.841571 16 0.557667 15.8885 0.3346 15.6654C0.111533 15.4423 0 15.1584 0 14.8137C0 14.4689 0.111533 14.185 0.3346 13.962L6.29658 8L0.3346 2.03802C0.111533 1.81496 0 1.53105 0 1.18631C0 0.841572 0.111533 0.557669 0.3346 0.334601C0.557667 0.111534 0.841571 0 1.18631 0C1.53105 0 1.81496 0.111534 2.03802 0.334601L8 6.29658L13.962 0.334601C14.185 0.111534 14.4689 0 14.8137 0C15.1584 0 15.4423 0.111534 15.6654 0.334601C15.8885 0.557669 16 0.841572 16 1.18631C16 1.53105 15.8885 1.81496 15.6654 2.03802L9.70342 8L15.6654 13.962C15.8885 14.185 16 14.4689 16 14.8137C16 15.1584 15.8885 15.4423 15.6654 15.6654C15.4423 15.8885 15.1584 16 14.8137 16C14.4689 16 14.185 15.8885 13.962 15.6654L8 9.70342Z" fill="#8A928F"/>
          </svg>

          <span>Сбросить</span>
        </button>
        <button @click="$emit('closeFilters')">
          Применить
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MobileFilters",
  data(){
    return {
      filters: [
        {
          title: 'Цена',
          active: true,
          type: 'range',
          price: {
            min: 0,
            max: 200,
            minValue: 0,
            maxValue: 200,
          }
        },
        {
          title: 'Наличие',
          active: false,
          type: 'radio',
          children: [
            {
              title: 'В наличии',
              id: 0,
            },
            {
              title: 'Под заказ',
              id: 1,
            },
          ],
        },
        {
          title: 'Бренд',
          active: false,
          type: 'checkbox',
          children: [
            {
              title: 'Voopoo',
              active: false,
            },
            {
              title: 'Voopoo',
              active: false,
            },
            {
              title: 'Voopoo',
              active: false,
            },
          ],
        },
      ],
      radioId: 0,
    }
  },
  methods: {
    changeRange(event, item){
      item.minValue = event.minValue
      item.maxValue = event.maxValue
    },

    setPrice(event, item, state){
      let value = +event.srcElement.value;

      if (value < item.min) {
        event.srcElement.value = item.minValue
        return
      }
      if (value > item.max) {
        event.srcElement.value = item.maxValue
        return
      }

      if (state) {
        if (+item.min > +event.srcElement.value) value = +item.minValue
        if (value > +item.maxValue) value = +item.maxValue
        item.minValue = value
      }
      else {
        if (item.max < value) value = +item.maxValue
        if (value < +item.min) value = +item.minValue
        item.maxValue = value
      }
    },
  }
}
</script>

<style scoped lang="scss">

.main {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: -1%;
  z-index: 10;
}

section {
  width: 100%;
  min-height: 30%;
  background: #FFFFFF;
  box-shadow: 4px 4px 8px rgba(69, 99, 86, 0.3);
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
}

header {
  padding: rem(14) rem(21);
  border-bottom: 1px solid #E3E6E4;

  .flex-align-center {
    gap: rem(8);
  }

  svg {
    width: rem(12);
    height: rem(12);
  }

  b {
    @include style-font(16);
  }
}

ul {
  padding: rem(20);
  gap: rem(20);
  margin-bottom: rem(36);
}

.buttons {
  padding: rem(20);
  justify-content: space-between;
  gap: rem(20);
  margin-top: auto;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #E3E6E4;
    border-radius: 8px;
    background: none;
    @include style-font(14);
    color: rgba(138, 146, 143, 1);
    height: rem(44);
    flex: 1;
    gap: rem(8);

    span {
      @include style-font(14);
    }

    svg {
      width: rem(10);
      height: rem(10);
    }
  }
}

li {
  width: 100%;
  transition: .25s;

  span {
    @include style-font(16);
    max-width: 80%;
    color: $black;
  }

  svg {
    width: rem(15);
    height: rem(8);
    transition: .25s;
  }

  .active-filter {
    transform: rotate(180deg);
  }
}

.list {
  display: flex;
  flex-direction: column;
  gap: rem(10);
  margin-top: rem(20);
}

</style>
