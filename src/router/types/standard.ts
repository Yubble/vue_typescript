// import { Interface } from "readline";
// import { string } from "postcss-selector-parser";

// export namespace routerStandard {

// }

export interface Route {
  path: string
  name?: string
  component: any
  meta: Meta
  children?: ChildRoute[]
}

interface ChildRoute {
  path: string
  name: string
  component: any
  meta: Meta
  props?: (route: any) => any
}

interface Meta {
  title: string
  icon?: string
  permission?: boolean
  show?: boolean
  hidden?: boolean
}