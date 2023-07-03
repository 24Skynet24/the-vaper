export default {
  data(){
    return {
      categoryNames: [
        'одноразовые pod-системы',
        'жидкости для pod-системы',
        'pod-системы',
        'расходники',
        'жидкости',
        'бокс-моды',
        'атомайзеры',
      ],
    }
  },
  methods: {
    normalCategories(categories = [], childrenCheck = false){
      categories.map(category => {
        if (!childrenCheck) {
          let checkCategory = this.categoryNames.filter(i => i.toLocaleLowerCase() === category.title.toLocaleLowerCase())[0]
          checkCategory = checkCategory ? checkCategory.toLocaleLowerCase() : ''
          let categoryIconId = this.categoryNames.indexOf(checkCategory)
          categoryIconId = categoryIconId === -1 ? 0 : categoryIconId
          category.icon = require(`@/assets/img/catalog/icon-${categoryIconId}.svg?raw`)
        }
        category.url = `/catalog/${category.slug}/${category.id}?page=1`

        if (category.children.length)
          this.normalCategories(category.children, true)
      })
      return categories
    },
    normalProducts(products = []) {
      return products.map(el => {
        el.price = {
          price: el.sale_price,
          discount: 0
        }
        el.like = false
        el.url = `/product/${el.moysklad_id}`
        el.img = ''
        el.title = el.name
      })
    },
  }
}
