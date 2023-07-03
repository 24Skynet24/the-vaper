<template>
  <article @mouseover="$emit('catalogMove')" @mouseleave="$emit('catalogLeave')">
    <ul class="list main-list flex-column">
      <li
        v-for="(item, id) in mainList"
        :key="`catalog_list_${id}`" :class="{'active': mainId === item.id}"
        @mouseenter="mainMove(item)"
      >
        <nuxt-link :to="item.url" class="flex-align-center catalog-link" exact no-prefetch>
          <div class="icon flex-center" v-html="item.icon"></div>
          <p>{{ item.title }}</p>
        </nuxt-link>
      </li>
    </ul>
    <ul v-if="listType === 0" class="list main-list flex-column">
      <li
        v-for="(item, id) in titlesList"
        :key="`title_${id}`" :class="{'active': subId === item.id}"
        @mouseenter="linksList = item.children; subId = item.id"
      >
        <nuxt-link :to="item.url" class="title" exact no-prefetch>
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
    <ul v-if="listType === 0" class="list main-list flex-column">
      <li v-for="(item, id) in linksList" :key="`title_${id}`">
        <nuxt-link :to="item.url" class="link" exact no-prefetch>
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>

    <div v-if="listType === 1" class="list sub-list flex-wrap">
      <div v-for="(list, id) in allList" :key="`sbu_list_${id}`" class="flex-column list-item">
        <nuxt-link :to="list.url" exact no-prefetch>
          {{ list.title }}
        </nuxt-link>
        <ul class="flex-column">
          <li v-for="(item, key) in list.children" :key="`sbu_list_item_${key}`">
            <nuxt-link :to="item.url" exact no-prefetch>
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  name: 'HeaderCatalog',
  data() {
    return {
      listType: null,
      mainList: [
        {
          icon: require('@/assets/img/catalog/icon-0.svg?raw'),
          url: '/catalog',
          title: 'Одноразовые POD-системы',
          type: 0,
          id: 0,
          children: [
            {
              title: 'Щелочные',
              url: '/catalog',
              id: 12,
              children: [
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
              ]
            },
            {
              title: 'Щелочные',
              url: '/catalog',
              id: 1554,
              children: [
                {
                  title: 'Солевые',
                  url: '/catalog',
                },
              ]
            },
          ],
        },
        {
          icon: require('@/assets/img/catalog/icon-1.svg?raw'),
          url: '/catalog',
          title: 'Одноразовые POD-системы',
          type: 1,
          id: 1,
          children: [
            {
              title: 'Наборы',
              url: '/catalog',
              children: [
                {
                  title: 'Щелочные',
                  url: '/'
                },
                {
                  title: 'Солевые',
                  url: '/'
                },
                {
                  title: 'Предзаправленные наборы',
                  url: '/'
                },
                {
                  title: 'Расходники',
                  url: '/'
                },
                {
                  title: 'Жидкости',
                  url: '/'
                },
                {
                  title: 'Бокс-моды',
                  url: '/'
                },
                {
                  title: 'Атомайзеры',
                  url: '/'
                },
              ]
            },
            {
              title: 'Основы',
              url: '/catalog',
              children: [
                {
                  title: 'Eleaf',
                  url: '/'
                },
                {
                  title: 'GeekVape',
                  url: '/'
                },
                {
                  title: 'IJOY',
                  url: '/'
                },
                {
                  title: 'Voopoo',
                  url: '/'
                },
              ]
            },
          ],
        },
        {
          icon: require('@/assets/img/catalog/icon-3.svg?raw'),
          url: '/catalog',
          title: 'Жидкости для POD-системы',
          type: 0,
          id: 2,
          children: [
            {
              title: 'Щелочные',
              url: '/catalog',
              id: 12,
              children: [
                {
                  title: 'Солевые',
                  url: '/catalog',
                }
              ]
            }
          ],
        },
        {
          icon: require('@/assets/img/catalog/icon-2.svg?raw'),
          url: '/catalog',
          title: 'POD-системы',
          type: 0,
          id: 3,
          children: [
            {
              title: 'Щелочные',
              url: '/catalog',
              id: 12,
              children: [
                {
                  title: 'Солевые',
                  url: '/catalog',
                }
              ]
            }
          ],
        },
        {
          icon: require('@/assets/img/catalog/icon-4.svg?raw'),
          url: '/catalog',
          title: 'Расходники',
          type: 0,
          id: 4,
          children: [
            {
              title: 'Щелочные',
              url: '/catalog',
              id: 12,
              children: [
                {
                  title: 'Солевые',
                  url: '/catalog',
                }
              ]
            }
          ],
        },
        {
          icon: require('@/assets/img/catalog/icon-5.svg?raw'),
          url: '/catalog',
          title: 'Жидкости',
          type: 0,
          id: 5,
          children: [
            {
              title: 'Щелочные',
              url: '/catalog',
              id: 12,
              children: [
                {
                  title: 'Солевые',
                  url: '/catalog',
                }
              ]
            }
          ],
        },
        {
          icon: require('@/assets/img/catalog/icon-6.svg?raw'),
          url: '/catalog',
          title: 'Бокс-моды',
          type: 0,
          id: 6,
          children: [
            {
              title: 'Щелочные',
              url: '/catalog',
              id: 12,
              children: [
                {
                  title: 'Солевые',
                  url: '/catalog',
                }
              ]
            }
          ],
        },
      ],
      titlesList: [],
      linksList: [],
      allList: [],
      mainId: null,
      subId: null,
    }
  },
  created() {
    this.listType = this.mainList[0].type
    this.titlesList = this.mainList[0].children
    this.linksList = this.titlesList[0].children
    this.mainId = this.mainList[0].id
    this.subId = this.mainList[0].children[0].id
  },
  methods: {
    mainMove(item){
      this.listType = item.type
      !item.type ? this.titlesList = item.children : this.allList = item.children
      this.mainId = item.id
      this.subId = item.children[0].id
      this.titlesList = item.children
      this.linksList = item.children[0].children
    },
  },
}

</script>

<style lang="scss" scoped>

article {
  width: rem(1324);
  height: rem(600);
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  display: flex;

  * {
    color: $black;
  }
}

.list {
  height: 100%;
  padding: rem(30);
  border-right: 1px solid #8A928F;
  overflow-y: auto;

  &:last-child {
    border-right: none;
  }
}

.main-list {
  width: rem(480);
  gap: rem(30);

  &:last-child {
    margin-right: rem(32);
  }

  .icon {
    width: rem(40);
    height: rem(40);
    margin-right: rem(30);

    &:deep svg {
      height: 100%;
      width: auto;

      * {
        transition: .25s;
      }
    }
  }

  p {
    @include style-font(20, 600);
    transition: .25s;
  }

  a {
    width: 100%;
    transition: .25s;
    display: block;

    &:hover {
      color: $green;

      p {
        color: $green
      }

      .icon:deep svg * {
        fill: $green;
      }
    }
  }

  .title {
    @include style-font(20, 600);
  }

  .link {
    @include style-font();
  }

  .active {
    * {
      color: $green !important;
    }

    .icon:deep * {
      fill: $green;
    }
  }
}

.sub-list {
  border-right: none;
  gap: rem(30);
  overflow-y: auto;

  * {
    color: $black;
  }

  .list-item {
    width: rem(230);
  }

  ul {
    gap: rem(10);
  }

  a {
    transition: .25s;
    @include style-font(20, 600);
    margin-bottom: rem(20);
    margin-right: auto;

    &:hover {
      color: $green;
    }
  }

  li a {
    @include style-font();
    margin-bottom: 0;

  }

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: #8A928F;
  }

  &::-webkit-scrollbar-thumb {
    background: $green;
  }
}

</style>
