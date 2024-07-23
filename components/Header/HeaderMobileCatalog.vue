<template>
  <article>
    <div class="flex-column catalog">
      <div class="flex-align-center main-btn" @click="$emit('closeCatalog')">
        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 11.2776L5.52852 15.749C5.36122 15.9164 5.14829 16 4.88973 16C4.63118 16 4.41825 15.9164 4.25095 15.749C4.08365 15.5817 4 15.3688 4 15.1103C4 14.8517 4.08365 14.6388 4.25095 14.4715L8.72243 10L4.25095 5.52852C4.08365 5.36122 4 5.14829 4 4.88973C4 4.63118 4.08365 4.41825 4.25095 4.25095C4.41825 4.08365 4.63118 4 4.88973 4C5.14829 4 5.36122 4.08365 5.52852 4.25095L10 8.72243L14.4715 4.25095C14.6388 4.08365 14.8517 4 15.1103 4C15.3688 4 15.5817 4.08365 15.749 4.25095C15.9163 4.41825 16 4.63118 16 4.88973C16 5.14829 15.9163 5.36122 15.749 5.52852L11.2776 10L15.749 14.4715C15.9163 14.6388 16 14.8517 16 15.1103C16 15.3688 15.9163 15.5817 15.749 15.749C15.5817 15.9164 15.3688 16 15.1103 16C14.8517 16 14.6388 15.9164 14.4715 15.749L10 11.2776Z"
            fill="#00A689"/>
        </svg>
        <span>Каталог</span>
      </div>

      <div
        v-for="(item, id) in mobileCatalogMenu"
        :key="`mobile_catalog_${id}`"
        class="catalog-item"
        @click="changeMenu(item, id)"
        v-show="childrenShow === false"
      >
        <nuxt-link :to="item.url" class="flex-align-center catalog-link" v-if="!item.children.length" @click.native="$emit('closeCatalog')">
          <div class="icon" v-html="item.icon"></div>
          <span>{{ item.title }}</span>
        </nuxt-link>

        <div class="flex-align-center" v-if="item.children.length">
          <div class="icon" v-html="item.icon"></div>
          <span>{{ item.title }}</span>
        </div>
        <svg v-if="item.children.length" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="#8A928F" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
      </div>

      <div class="flex-column" v-if="childrenShow">
        <div class="flex-align-center catalog-subitem-main" @click="backMainMenu">
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#8A928F" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
          <div class="icon" v-html="childrenCategory.icon"></div>
          <span>{{ childrenCategory.title }}</span>
        </div>
        <div
          v-for="(item, id) in childrenCategory.children"
          :key="`childrenCategory_${id}`"
          class="catalog-subitem"
        >
          <div
            v-if="item.children.length"
            class="title"
            :class="{'active-title' : item.active}"
            @click="openChildren(item, id)"
          >
            <nuxt-link :to="item.url" @click.native="$emit('closeCatalog')">
              {{ item.title }}
            </nuxt-link>
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#8A928F" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
          </div>
          <nuxt-link
            v-else
            :to="item.url"
            class="title"
            @click.native="$emit('closeCatalog')"
          >
            <span>{{ item.title }}</span>
          </nuxt-link>

          <ul v-show="item.active">
            <li v-for="(el, i) in item.children" :key="`child_childrenCategory_${i}`">
              <nuxt-link :to="el.url" @click.native="$emit('closeCatalog')">
                {{ el.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "HeaderMobileCatalog",
  props: {
    mobileCatalogMenu: {type: Array, required: true}
  },
  data() {
    return {
      childrenCategory: {},
      childrenShow: false,

      mainId: null,
      childrenId: null,
    }
  },
  methods: {
    changeMenu(item, id){
      if (!item.children.length) return
      this.childrenCategory = item
      this.mainId = id
      this.childrenShow = true
    },
    backMainMenu(){
      this.childrenCategory = {}
      this.childrenShow = false
      this.mainId = null
      this.childrenId = null
    },
    openChildren(item, id) {
      this.childrenId = id
      this.$store.commit('setCategoriesParam', {
        mainId: this.mainId,
        childrenId: this.childrenId,
        param: 'active',
        value: !item.active
      })
    },
  },
}
</script>

<style lang="scss" scoped>

article {
  position: absolute;
  left: 5%;
  top: 54%;
  width: 90% !important;
  background: #FFFFFF;
  border-radius: 10px;
  z-index: 5;
  padding: rem(10) 0;
  max-height: rem(410);
  overflow-y: auto;
}

span, a {
  @include style-font(14);
  color: $black;
  transition: .25s;
}

.main-btn {
  padding: rem(15) rem(20);
  gap: rem(20);
  border-bottom: 1px solid rgba(227, 229, 228, 1);

  svg {
    width: rem(20);
    height: rem(20);
  }

  span {
    @include style-font(16);
  }
}

.catalog-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: rem(5) rem(10);
  border-bottom: 1px solid rgba(227, 229, 228, 1);

  svg {
    width: rem(24);
    height: rem(24);
  }

  .icon :deep *{
    width: rem(30);
    height: rem(30);
    margin-right: rem(10);
  }

  a.catalog-link {
    width: 100%;
  }
}

.catalog-subitem-main {
  padding: rem(5) rem(10);
  border-bottom: 1px solid rgba(227, 229, 228, 1);

  svg:first-child {
    width: rem(24);
    height: rem(24);
    transform: rotate(180deg);
  }
  .icon:deep {
    margin-right: rem(10);
    * {
      width: rem(40);
      height: rem(40);
    }
  }
}

.catalog-subitem {
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: rem(13) rem(20);
    border-bottom: 1px solid rgba(227, 229, 228, 1);
    transition: .25s;

    svg {
      width: rem(24);
      height: rem(24);
      transform: rotate(90deg);
      transition: .25s;
    }
  }

  .active-title {
    border-bottom: none;

    svg {
      transform: rotate(270deg);
    }
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      align-items: center;
      padding: rem(8) rem(20);
    }

    a {
      width: 100%;
      height: 100%;
    }
  }
}

</style>
