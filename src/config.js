
const config = {
    tag:[{
            type:'hxtag',     //埋點分類
            key:'hxtag'     // 埋點值
        }],
    eventType:['click'],    //事件類型
    global:[],            //附加全局參數
    url:'http://172.18.237.20/log',
    read:'pv'      // 用來判斷首次進入頁面是否記錄
};
module.exports = {
    config:config
}
