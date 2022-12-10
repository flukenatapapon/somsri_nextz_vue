// import axios from "axios";

// const BASE_URL = "http://localhost:3000/";

const state = {
  jwt: null,
  user: {
    username: null,
    nickname: null,
    role: null,
    avartar: null,
  },
};

// use mapGetters for wire getters
// ex mapGetters(["getUsername"])
// ex use {{this.getUsername}}
// map getters with state
const getters = {
  getUser(state) {
    return state.user;
  },
  getUsername(state) {
    return state.user.username;
  },
  getNickname(state) {
    return state.nickname;
  },
  getRole(state) {
    return state.role;
  },
};

// use store.dispatch("actions_name", params) in any js file except controller file (ex at line 16)
// example actions defind signIn({commit}, params)
// example call at any js file store.dispatch("signIn", params)
// example call at controller
// use mapActions(["signIn"])
// when call use => this.signIn(params)
const actions = {};

// use store.commit("mutation_name", params) in controller
// use commit("mutation_name", params) in store module
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
