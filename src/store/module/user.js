const state = {
  userName: 'user'
}
const getters = {
  first: state => state.userName.substr(0,1)
}
const mutations = {

}
const actions = {

}
export default {
  namespaced: true,     //命名空间
  state,
  getters,
  mutations,
  actions
}
