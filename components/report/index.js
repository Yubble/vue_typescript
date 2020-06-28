/*
 * @Author: apathyjade
 * @Date: 2020-02-04 15:09:26
 * @Last Modified by: apathyjade
 * @Last Modified time: 2020-02-10 11:10:22
 */

import report from '@/utils/report'
export default function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  Vue.report = report
  Vue.prototype.$report = report
}
