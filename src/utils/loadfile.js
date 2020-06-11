import fs from 'fs'
import path from 'path'

    // 我们可以规定一下， callback 中，有两个参数，第一个参数，是 失败的结果；第二个参数是成功的结果；
    // 同时，我们规定了： 如果成功后，返回的结果，应该位于 callback 参数的第二个位置，此时， 第一个位置 
    // 由于没有出错，所以，放一个 null；  如果失败了，则 第一个位置放 Error对象，第二个位置放置一个 
    // undefined
    const loadFile = (fpath, callback) => {
      fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        // 如果报错了，进入if分支后，if后面的代码就没有必要执行了
        if (err) return callback(err)  // 注意这里的return作用不是返回回调函数执行的结果,而是阻止函
        callback(null, dataStr)
      })
    }
    
    // getFileByPath(path.join(__dirname, './files/11.txt'), (err, dataStr) => {
    //   if (err) return console.log(err.message)
    //   console.log(dataStr)
    // })
export default loadFile