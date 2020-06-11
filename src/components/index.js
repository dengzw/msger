import MePanel from './me-panel'
import MeCard from './me-card'
import MeLogo from './me-logo/index'
import MeBox from './me-box'
import MelightBorder from './me-light-border/index'
import { PageLayout, LayoutCard } from './page-layout/index'
import MePage from './me-page/index'
import MeLayout from './me-layout/index'
import MeMap from './map/index.js'
import MeUser from './me-user/index'
import MeEmoji from './emoji/index'

export const list = [MePanel, MeCard, PageLayout, LayoutCard, MeBox, MelightBorder, MePage, MeLayout, MeMap, MeUser, MeEmoji, MeLogo]

const install = function (Vue) {
  list.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  MePanel,
  MeCard, PageLayout, LayoutCard, MeBox, MelightBorder, MePage, MeLayout, MeMap, MeUser, MeEmoji, MeLogo
}