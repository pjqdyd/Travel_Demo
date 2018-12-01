import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

//默认导出一个vuex仓库
export default new Vuex.Store({
  state: state,
  mutations: mutations
})
