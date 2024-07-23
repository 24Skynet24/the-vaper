<template>
  <article class="product-block">
    <h4>
      <b>
        Основные характеристики
      </b>
    </h4>
    <div class="flex-wrap">
      <ul class="flex-wrap">
        <li class="flex-align-center flex-between" v-for="(item, id) in productSpecifications" :key="`сharacteristic_${id}`">
          <span class="title">{{ item.label }}</span>
          <div class="line"></div>
          <span class="text">{{ item.value || '-' }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProductSpecifications",
  props: {
    productSpecifications: { type: Array, required: true },
  },
  data(){
    return {
      listKeys: {
        volume: 'Объем бака атомайзера',
        serviced: 'Обслуживаемый',
        battery_capacity: 'Ёмкость аккумулятора',
        puff_type: 'Тип затяжки',
        battery_type: 'Тип аккумулятора',
        resistance_range: 'Диапазон сопротивлений',
        charge_current: 'Ток заряда',
        battery_format: 'Формат аккумулятора',
        number_of_batteries: 'Количество аккумуляторов',
        evaporator_type: 'Тип испарителя',
        charger_connector: 'Разъем зарядного устройства',
        weight: 'Вес',
        country: 'Страна',
      }
    }
  },
}
</script>

<style scoped lang="scss">

article {
  padding: rem(30) rem(20) rem(50) rem(40);

  @media screen and (max-width: 768px) {
    padding: rem(20) rem(30);
  }
}

h4 {
  @include style-font(20);
  margin-bottom: rem(20);

  @media screen and (max-width: 768px) {
    display: none;
  }
}

.flex {
  gap: rem(30);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: rem(10);
  }
}

ul {
  gap: rem(20);

  @media screen and (max-width: 768px) {
    gap: rem(10);
    width: 100%;
  }
}

li {
  max-width: rem(617);
  width: 100%;
  align-items: baseline !important;
  gap: rem(10);

  @media screen and (max-width: 768px) {
    max-width: none;
    flex-direction: column;
    align-items: flex-start !important;
    justify-content: flex-start;
    gap: rem(3);
  }
}

span {
  @include style-font();

  @media screen and (max-width: 768px) {
    width: 100% !important;
    @include style-font(16);
  }
}

span.title {
  color: rgba(138, 146, 143, 1);
  @include style-font(16);
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    @include style-font(14);
  }
}

span.text {
  width: 30%;
}

.line {
  height: 1px;
  background: rgba(227, 229, 228, 1);
  flex: 1;

  @media screen and (max-width: 768px) {
   display: none;
  }
}

</style>
