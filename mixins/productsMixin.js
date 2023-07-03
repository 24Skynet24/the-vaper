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
    normalCategories(category = []){
      category.map(el => {
        let checkCategory = this.categoryNames.filter(i => i.toLocaleLowerCase() === el.title.toLocaleLowerCase())[0]
        checkCategory = checkCategory ? checkCategory.toLocaleLowerCase() : ''
        let categoryIconId = this.categoryNames.indexOf(checkCategory)
        categoryIconId = categoryIconId === -1 ? 0 : categoryIconId
        el.icon = require(`@/assets/img/catalog/icon-${categoryIconId}.svg?raw`)
        el.url = `/catalog/${el.slug}/${el.id}?page=1`
      })
      return category
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
