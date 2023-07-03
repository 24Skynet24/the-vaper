<template>
  <article @mouseover="$emit('catalogMove')" @mouseleave="$emit('catalogLeave')">
    <ul class="list main-list flex-column">
      <li
        v-for="(item, id) in categories"
        :key="`catalog_list_${id}`"
        :class="{'active': mainListId === item.id}"
        @mouseenter="linkMove(item, true)"
      >
        <nuxt-link
          :to="item.url"
          class="flex-align-center catalog-link"
          exact no-prefetch
          @click.native="$emit('catalogLeave')"
        >
          <div class="icon flex-center" v-html="item.icon"></div>
          <p>{{ item.title }}</p>
        </nuxt-link>
      </li>
    </ul>
    <ul class="list main-list flex-column">
      <li
        v-for="(item, id) in subList"
        :key="`title_${id}`"
        :class="{'active': subListId === item.id}"
        @mouseenter="linkMove(item, false)"
      >
        <nuxt-link :to="item.url" class="title" exact no-prefetch  @click.native="$emit('catalogLeave')">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
    <ul class="list main-list flex-column" v-if="thirdList.length">
      <li v-for="(item, id) in thirdList" :key="`title_${id}`">
        <nuxt-link :to="item.url" class="link" exact no-prefetch @click.native="$emit('catalogLeave')">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </article>
</template>

<script>

export default {
  name: 'HeaderCatalog',
  data() {
    return {
      mainListId: null,
      subListId: null,

      subList: [],
      thirdList: [],
    }
  },
  computed: {
    categories(){
      return this.$store.getters.getCategories
    },
  },
  created() {
    this.mainListId = this.categories[0].id
  },
  destroyed() {
    this.mainListId = null
    this.subListId = null
    this.subList = []
    this.thirdList = []
  },
  methods: {
    linkMove(listParams = {}, parent = false){
      if (parent) {
        this.subList = listParams.children
        this.mainListId = listParams.id
      }
      else {
        this.thirdList = listParams.children
        this.subListId = listParams.id
      }
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
