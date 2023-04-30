import { createStore } from 'vuex'

//Aqui solo se setea la animacion de carga para cada vez que se haga un consulta a una ruta y/o api
export default createStore({
  state: {
    isLoading:false
  },
  getters: {
  },
  mutations: {
    setIsLoading(state,status){
      state.isLoading =status
    }
  },
  actions: {
  },
  modules: {
  }
})
