import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
    },

    getters: {
        doubleCounter() {
            return store.state.counter * 2;
        },

        stringCounter() {
            return store.state.counter + 'clicks';
        }

    },

    mutations: {
        increment(state, payload) {
            return state.counter += payload;
        },

        decrement(state, payload) {
            return state.counter += payload;
        }

    },
    actions: {
        increment({commit}, payload) {
            commit('increment', payload)
        },

        incrementAsync({commit}, payload) {

            setTimeout(() => {
                commit('increment', payload.by)
            }, payload.time);
        },


        decrement({commit}, payload) {
            commit('decrement', payload)
        },

        decrementAsync({commit}, payload) {

            setTimeout(() => {
                commit('decrement', payload.by)
            }, payload.time);
        }

    }
});
