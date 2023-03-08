const DEFAULT_STATE = {
  alertData: {
    state: false,
    type: "alert",
    title: null,
    msg: null,
    classNm:null,
    btn: {
      link: '',
      name: "확인",
      fnName: null,
    }
  }
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
    setAlertData({ commit }, payload) {
      commit('UPDATE_STATE', { alertData: payload });
    },
  },
};
