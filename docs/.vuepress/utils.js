// const 
const files = require.context('../ui/', true, /\.md$/)
const modules = {}
files.keys().forEach(key => {
  if (key === './README.md') return
  modules[key.replace(/(\.\/|\.md)/g, '')] = files(key).default
})
export default modules
