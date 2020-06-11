import MeCard from './card/index'
export const MeList = [
  MeCard
]

const install = function(Vue, opts = {}) {
  MeList.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  MeCard,
}
