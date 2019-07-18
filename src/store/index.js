import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state ={
	count:''
}
const mutations={ // 更改数据的方法
    changeloc(state,count){
      state.count=count
    }
}

const store = new Vuex.Store({
  //strict:true,  // 开启严格模式  确保state 中的数据只能 mutations 修改
  state,
  mutations
})
export default store;
//要注意先后顺序，对象接收到的参数后要放到vuex的实例中！