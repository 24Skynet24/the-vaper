export default ($axios) => ({
  getProductDetail: async (url) => {
    return (await $axios.get(url)).data
  },
  setProductFavorite: async (product_id, headers) => {
    const url = `/api/favorites/${product_id}`
    return await $axios.$post(url, {}, headers)
  }
})
