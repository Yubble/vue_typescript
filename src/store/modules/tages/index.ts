import { MutationTree, Module, GetterTree } from 'vuex'
import { AppState, TagListState } from './type'
import { RootState } from '@/store/types';

// 绑定的state
const state: AppState = {
  tagList: [],
  activeTag: {}
}

// 绑定的mutation
const mutations: MutationTree<AppState> = {
  ADD_TAG(state, tag) {
    if (state.tagList.some(item => {return item.name === tag.name})) return
    state.tagList.push(tag)
  }
}

// 绑定getter
const getters: GetterTree<AppState, RootState> = {
  getTags(state): Array<TagListState> {
    return state.tagList
  }
}

const namespaced: boolean = true

const tags: Module<AppState, RootState> = {
  namespaced,
  state,
  actions: {},
  mutations,
  getters
}

export default tags