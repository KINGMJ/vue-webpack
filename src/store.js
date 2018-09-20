import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        color: 'red',
        fontSize: '18px',
        hello: 'hello',
        books: ['语文', '数学', '英语']
    },
    getters: {
        //字母转大写
        upperHello: state=> {
            return state.hello.toUpperCase();
        },
        //将一个getter作为参数传进来
        helloVue: (state, getters)=> {
            return getters.upperHello + ' VUE';
        },
        //返回一个方法
        findBook: (state)=>(key)=> {
            return state.books[key];
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.amount;
        },
        decrement(state, payload) {
            state.count -= payload.amount;
        }
    },
    actions: {
        increment({commit}, payload) {
            setTimeout(()=> {
                commit('increment', payload);
            }, 1000);
        },
        decrement({commit}, payload) {
            commit('decrement', payload);
        }
    }
})
