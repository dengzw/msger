/**
 * 动态加载高德地图
 * @param {*} key 高德地图key
 * @param {*} plugins 高德地图插件
 * @param {string} [v='1.4.15'] 高德地图版本
 */
export const loadMap = (key, plugins, v = '2.0') => {
  return new Promise((resolve, reject) => {
    if (typeof AMap !== 'undefined') {
      resolve(AMap)
      return true
    }
    window.onCallback = () => {
      resolve(AMap)
    }
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://webapi.amap.com/maps?v=${v}&key=${key}&plugin=${plugins}&callback=onCallback`
    script.onerror = reject
    document.head.appendChild(script)
  })
}
