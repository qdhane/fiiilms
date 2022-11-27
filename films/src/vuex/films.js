import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    film:[]
  },
  mutations: {
    SET_FILM_TO_STATE:(state, film)=>{
        state.film = film;
    }
  },
  actions: {
    GET_FILM_FROM_API({commit}){
        return axios ('http://localhost:3000/posts',{
            method: "GET"
        })
            .then((film) => {
                commit('SET_FILM_TO_STATE', film);
                return products;
            })
            .catch((error)=>{
                console.log(error)
                return error;
            })
    }
  },
  getters: {
    FILM(state){
        return state.products;
    }
  },
});

export default store;