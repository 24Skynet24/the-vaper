export default ($axios) => ({
  getCategories: async () => {
    const url = '/api/categories'
    return (await $axios.get(url)).data
  },
})
