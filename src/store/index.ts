import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types'
import tags from './modules/tages';

Vue.use(Vuex);

// StoreOptions 用来标定根store的
// RootState 代表全局store
const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    tags
  }
}

export default new Vuex.Store<RootState>(store)
