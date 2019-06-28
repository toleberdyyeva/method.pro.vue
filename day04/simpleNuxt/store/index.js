import Vue from 'vue'
import Vuex from 'vuex'
import {MyPost} from './models/index'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        posts: [
            new MyPost('https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                        "simple post",
                        32),
            new MyPost('https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                        "amazing post",
                        12),
            new MyPost('https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                        "awesome post",
                        45),
        ]
    }, 
    getters: {
        getPosts(state) {
            return state.posts
        }   
    },

    mutations: {
        SAVE_POST(state, payload) {
            let post = new MyPost(payload.image,payload.title,0)
            state.posts.push(payload)
        }
    },

    actions: {
        savePost({commit}, payload){
            // some request ...
            commit('SAVE_POST', payload)
        }
    }

})

export default store