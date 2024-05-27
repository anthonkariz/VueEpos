
import {createStore} from 'vuex'
export default createStore({
  state: { 
    theTotal :0.00,
    menu: [],
    addToCart: [],
    filtered:[],
    categories: [],
    menuCopy: [],
    selected: null,
    itemSelected: null,
    
  },
  mutations: { 
 
    total(state,total){
    
      state.theTotal =total.toFixed(2);
    },
    setMenu(state, data) {
      state.menu = data;
    },
    setMenuCopy(state, data) {
      state.menuCopy = data;
    },
    increaseQuantity(state, id){
    let index = state.addToCart.findIndex((item) => item.id == id);
    state.addToCart[index].quantity += 1;
    },
    decreaseQuantity(state, id){
      let index = state.addToCart.findIndex((item) => item.id == id);
      if (state.addToCart[index].quantity > 1) {
        state.addToCart[index].quantity -= 1;
        
        return;
      }
      state.addToCart.splice(index, 1);
      },
    removeItem(state, id){
      let index = state.addToCart.findIndex((item) => item.id == id);
      state.addToCart.splice(index, 1);
    },
    setCategories(state, data) {
      state.categories = data;
    },
    filteredMenu(state, data){
      state.menu = state.menuCopy.filter((item) => item.categoryId === data);
     state.selected = data;
     
    },
    addToCart(state, data){
      let item = state.menu.find((item) => item.id == data);
      let index = state.addToCart.findIndex((item) => item.id == data);
      if (index > -1) {
        state.addToCart[index].quantity += 1;
      
        return;
      }
      state.addToCart.push({ ...item, quantity: 1 });
    
     
    },
   
  },
  actions: { 
    async loadData ({commit}) {
      let response = await fetch(
        "http://localhost:8888/devthatched/wp-json/resto/food"
      );
      let data = await response.json();
   
      if (response.ok) {
      
       commit('setMenu',data );
        commit('setMenuCopy',data );
        let categoriesArray = [];
        
        Object.entries(data).forEach(([key, value]) => {
          categoriesArray.push({ category: value.category, id: value.categoryId });
        });
        let uniqueCategories = [
          ...new Map(categoriesArray.map((item) => [item["id"], item])).values(),
        ];
        commit("setCategories", uniqueCategories);
        
      }else{
        commit('setMenu',[{'error':12}] );
      }
    },

    total({ commit, state }){
      console.log('state catrt',state.addToCart)
      let total = state.addToCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      console.log('total',total)
      commit('total',total)
    },
  
 
  },
  modules: { }
})