export const _moduleA = {
  state: {
    count: 0,
  },
  mutations: {
    moduleAIncrement (state) {
      state.count++;
      console.log('moduleA:', state.count);
    }
  },
  actions: {},
  modules: {},
};