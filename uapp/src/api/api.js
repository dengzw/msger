import {
  get,
  post,
  del,
  put
} from './requestType'
export default {
  getEssayList: get('/api/essay'),
  addEssay: post('/api/essay'),
  updteEssay: put('/api/essay'),
  delEssay: post('/api/essay/remove'),
  githubAuth: post('/api/github/login'),
  // h获取shot
  getShot: get('/api/shot'),
  addShot: post('/api/shot'),
  //网站截图
  screenShot: post('/api/screenshot'),
  //抖音视频地址解析
  getVideo: post('/api/video'),
  //获取vlog
  getVlog: get('/api/video'),
  //管理员登录
  login: post('/api/login'),
  //travel
  addTravel: post('/api/travel'),
  getTravel: get('/api/travel'),
  delTravel: post('/api/travel/del')
}
