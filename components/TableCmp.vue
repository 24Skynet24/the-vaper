<template>
  <article class="table">
    <div class="table-item table-title">
      <div class="flex-align-center table-first">
        <span>Номер заказа</span>
        <span>Дата</span>
      </div>
      <span>Статус заказа</span>
    </div>
    <div class="table-item" :class="{'table-item-gray' : (id + 1) % 2 === 0}"
         v-for="(item, id) in tableData"
         :key="`table_item_${id}`"
    >
      <div class="flex-align-center table-first">
        <span class="green"><b>Заказ № {{ item.number }}</b></span>
        <span class="date">{{ item.date }}</span>
      </div>
      <span class="table-status">{{ item.status }}</span>
    </div>
  </article>
</template>

<script>
export default {
  name: "TableCmp",
  props: {
    tableData: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">

.table {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    box-shadow: none;
    border-radius: 0;
  }

  &-item {
    padding: rem(10) rem(20) rem(14);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;

    &:last-child {
      border-radius: 0 0 8px 8px;

      @media screen and (max-width: 768px) {
        border-radius: 0;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 0;
      margin-bottom: rem(30);

      &:last-child {
        margin-bottom: 0;
      }
    }


    span {
      @include style-font(16);
      color: $black;

      @media screen and (max-width: 768px){
        @include style-font(14);
      }
    }

    .green {
      color: $green;
    }
  }

  &-title {
    border-radius: 8px 8px 0 0;
    span {
      color: rgba(138, 146, 143, 1);
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &-first {
    width: 55%;

    @media screen and (max-width: 768px){
      flex-direction: column;
      align-items: flex-start !important;
      width: 70%;
    }

    span {
      flex: 30%;
      &:first-child {
        flex: 70%;
      }

      @media screen and (max-width: 768px){
        flex: auto !important;
      }
    }
  }

  &-item-gray {
    background: #F5F5F5;

    @media screen and (max-width: 768px) {
      background: none;
    }
  }

  &-status {
    @media screen and (max-width: 768px) {
      padding: rem(8) rem(20) rem(12);
      border: 1px solid rgba(227, 229, 228, 1);
      border-radius: 40px;
    }
  }

  .date {
    @media screen and (max-width: 768px) {
      color: rgba(138, 146, 143, 1);
    }
  }
}


</style>
