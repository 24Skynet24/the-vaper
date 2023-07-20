export default ($axios) => ({
  getProductDetail: async (url) => {
    return (await $axios.get(url)).data
  },
  setProductFavorite: async (body, headers) => {
    const url = '/api/favorites'
    return await $axios.post(url, body, headers)
  }
})
