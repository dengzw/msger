import qs from 'qs'
// import store from '../store/index'
import settings from '../config.js'
const config = {
	baseUrl: settings.host,
	header: {
		'content-type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest',
	},
	method: 'GET',
	dataType: 'json',
	responseType: 'text'
}
//请求拦截
const requestCheck = (options) => {
	// if (store.state.token) {
	// 	options.header.token = `${store.state.token}`
	// }
	return options
}
const requestRes = (res) => {
	if (res.data.ret == 401) {
		// store.commit('setLogin', false)
		return false
	}
	return res.data
}

const MeRequest = (options = {}) => {
	options.baseURL = options.baseURL || config.baseURL
	options.dataType = options.dataType || config.dataType
	options.url = config.baseUrl + options.url
	options.data = options.data
	options.header = {
		...options.header,
		...config.header
	}
	options.method = options.method || config.method

	options = {
		...options,
		...requestCheck(options)
	}
	return new Promise((resolve, reject) => {
		options.success = function (res) {
			resolve(requestRes(res))
		}
		options.fail = function (err) {
			reject(requestRes(err))
		}
		uni.request(options)
	})
}
const Request = {
	get: (url, data, options = {}) => {
		options.url = url
		options.data = data
		options.method = 'GET'
		return MeRequest(options)
	},
	post: (url, data, options = {}) => {
		options.url = url
		options.data = data
		options.method = 'POST'
		return MeRequest(options)
	},
	put: (url, data, options = {}) => {
		options.url = url
		options.data = data
		options.method = 'PUT'
		return MeRequest(options)
	},
	del: (url, data, options = {}) => {
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return MeRequest(options)
	}
}
export default Request