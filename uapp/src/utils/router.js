
export const router = {
  push({ url, query }) {
    let params = JSON.stringify(query).replace('{', '?').replace(':', '=').replace(',', '&').replace('}', '')
    let path = url + params
    return new Promise((reslove, reject) => {
      uni.navigateTo({
        url: path,
        success: reslove(),
        fail: reject()
      });
    })

  }
}