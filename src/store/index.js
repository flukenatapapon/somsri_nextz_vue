// Warning don't defind mutations or action with SAME Method Name
import { createStore } from "vuex";
import { SessionManager } from "@/store/modules/session_manager";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    SessionManager,
  },
});
