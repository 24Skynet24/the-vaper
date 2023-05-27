export const state = () => {
  return {
    ageVerificationModal: false,
    cookiesModal: false,
    signInModal: false,
    passRecoveryModal: false,
    profile: null,
    profileAuth: false,

    comparisonSliderIndex: null,
  }
}


export const mutations = {
  setGeneral(state, {path, payload}){
    state[path] = payload
  },
  setProfileAttribute(state, { key, value }) {
    state.profile[key] = value;
  }
}


export const getters = {
  getComparisonSlider: s => s.comparisonSliderIndex,
}


