import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store=new Vuex.Store({
  state:{
    statelist:[],

  },
  mutations:{
    yujubing(state,list){
      // state.statelist=list;
      localStorage.setItem('list',JSON.stringify(list));
      state.statelist=JSON.parse(localStorage.getItem('list'))
    }
  }
});
export default store
