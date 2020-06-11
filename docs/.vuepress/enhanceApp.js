// .vuepress/enhanceApp.js
import MeUi from '../../src/components/index.js'
export default ({ Vue, options, router }) => {
  Vue.use(MeUi)
}