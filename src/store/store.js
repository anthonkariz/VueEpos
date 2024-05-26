
import {createStore} from 'vuex'
export default createStore({
  state: { 
    theTotal :10,
    todo:[
      {id:1, title:'todo 1', done:false},
      {id:2, title:'todo 2', done:true},
      {id:3, title:'todo 3', done:false},
      {id:4, title:'todo 4', done:true},
      {id:5, title:'todo 5', done:false},
      {id:6, title:'todo 6', done:true},
    ]
  },
  mutations: { 
    increment(state){
      state.theTotal++;
    },
    decrement(state){
      state.theTotal--;
    }
  },
  actions: { 
  },
  modules: { }
})