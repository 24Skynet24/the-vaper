export default ($axios) => ({
  getCategories: async () => {
    const url = '/api/categories'
    return (await $axios.get(url)).data
  },
  getProductsCategory: async (url) => {
    return (await  $axios.get(url)).data
  },
  getProductDetail: async (url) => {
    return (await $axios.get(url)).data
  },
})
