const DEFAULT_STATE = {
  popupData: {
    state: false,
    type: null,
    title: null,
    cont: null,
  },
};

export default {
  namespaced: true,
  state: () => ({ ...DEFAULT_STATE }),
  mutations: {
    UPDATE_STATE(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    setPopupData({ commit }, payload) {
      commit('UPDATE_STATE', { popupData: payload });
    },
  },
};
