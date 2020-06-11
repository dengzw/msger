import { get, post, put, del } from './foo'
export default {
  login: get('/login/cellphone'),
  loginRefresh: get('/login/refresh'),
  logout: get('/logout'),
  getUserDetail: get('/user/detail'),
  getUserSubcount: get('/user/subcount'),
  getUserPlaylist: get('/user/playlist'),
  getUserFollows: get('/user/follows'),
  getUserFuns: get('/user/followeds'),
  //私信
  getMsgPrivate: get('/msg/private'),
  getMsgHistory: get('/msg/private/history'),
  getMsgNotice: get('/msg/notices'),
  getMsgComments: get('/msg/comments'),
  getMsgForwards: get('/msg/forwards'),
  // 热评
  getHotWall: get('/comment/hotwall/list'),
  //搜索
  search: get('/search'),
  hotSearch: get('/search/hot'),
  hotSearchDetail: get('/search/hot/detail'),
  searchSuggest: get('/search/suggest'),
  searchMultimatch: get('/search/multimatch'),
  //banner
  getBanners: get('/banner'),

  //排行榜
  getTopList: get('/top/list'),
  getTopArtist: get('/toplist/artist'),
  //每日推荐
  recommendResource: get('/recommend/resource'),
  recommendSongs: get('/recommend/songs'),
  getSimiSong: get('/simi/song'),
  getSimiUser: get('/simi/user'),
  //新碟
  getAlbumList: get('/album/newest'),
  getAlbumDetail: get('/album'),
  //动态
  getEvent: get('/event'),
  getEventComment: get('/comment/event'),
  getUserEvent: get('/user/event'),
  //mv
  getTopMv: get('/top/mv'),
  getMvList: get('/mv/first'),
  getMvDetail: get('/mv/detail'),
  getMvUrl: get('/mv/url'),
  getMvAll: get('/mv/all'),
  getMvRcmd: get('/mv/exclusive/rcmd'),
  getMvPersonalized: get('/personalized/mv'),
  getArtistMv: get('/artist/mv'),
  getMvComment: get('/comment/mv'),
  //视频
  getVideoList: get('/video/group/list'),
  getVideo: get('/video/group'),
  getRelatedVideo: get('/related/allvideo'),
  getVideoDetail: get('/video/detail'),
  getVideoUrl: get('/video/url'),
  getVideoComment: get('/comment/video'),
  //推荐
  getPersonalized: get('/personalized'),
  getPersonalizedNewsong: get('/personalized/newsong'),
  //话题
  getHotTopic: get('/hot/topic'),
  getActEvent: get('/act/event'),
  getTopicDetail: get('/hot/topic/detail'),
  //歌曲url
  getSongUrl: get('/song/url'),
}
