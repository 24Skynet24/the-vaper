export const state = () => {
  return {
    ageVerificationModal: false,
    cookiesModal: false,
    signInModal: false,
    passRecoveryModal: false,
    profile: null,
    profileAuth: false,
    categories: [],

    catalogProducts: {},

    productDetail: [],
    productReviews: [],

    comparisonSliderIndex: null,
  }
}


export const mutations = {
  setGeneral(state, {path, payload}){
    state[path] = payload
  },
  setProfileAttribute(state, { key, value }) {
    state.profile[key] = value;
  },
  setCategoriesParam(state, {mainId, childrenId, param, value}){
    state.categories[mainId].children[childrenId][param] = value
  },
  changeProductLike(state, payload) {
    state.productDetail.data[0].like = payload
  },
  changeProductQuantity(state, payload) {
    state.productDetail.quantity = payload
  },
}


export const getters = {
  getComparisonSlider: s => s.comparisonSliderIndex,
  getCategories: s => s.categories,
  getCatalogProducts: s => s.catalogProducts,
}


