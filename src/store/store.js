import {_moduleA} from './module/moduleA';
export const _store = {
  state: {
    count: 0,
  },
  mutations: {
    increment (state) {
      state.count++;
      console.log('root:', state.count);
    }
  },
  actions: {},
  modules: {
    moduleA: _moduleA
  },
};