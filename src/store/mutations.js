const mutations = {
  SET_APPNAME: (state,params) => {
    state.appName = params.appName
  },
  SET_INPUT_VALUE: (state, val) => {
    state.stateValue = val
  }
}
export default mutations
