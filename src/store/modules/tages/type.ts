export interface AppState {
  tagList: Array<TagListState>,
  activeTag: any
}

export interface TagListState {
  path: string,
  name: string,
  query: any,
  params: any
}