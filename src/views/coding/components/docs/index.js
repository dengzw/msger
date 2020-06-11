const files = require.context('.', true, /\.md$/)
const modules = {}
files.keys().forEach(key => {
  if (key === './index.md') return
  modules[key.replace(/(\.\/|\.md)/g, '')] = files(key).default
})
export default modules