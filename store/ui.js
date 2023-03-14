const DEFAULT_STATE = {
  url: "https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/openip/img",
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
