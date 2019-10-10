const path = require('path')
module.exports = {
    mode:'development',
    // 入口文件
    entry: {    
        main:'./src/index.js'
    }, 
    //出口文件配置
    output: {
      path: path.resolve(__dirname, './dist'), // 必须使用绝对地址，输出文件夹
      filename: "joy.js" // 打包后输出文件的文件名
    },
    // moudle:{},
    // plugins:[],
    // devServer:{}
  }