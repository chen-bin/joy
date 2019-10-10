// 20181119
// 创建img标签实现跨域，发送请求
// @param url带有参数的地址
// @return null
const sendMessage = function(src){
    let imgEl = window.document.createElement("img");
        imgEl.width = 1;
        imgEl.height = 1;
        imgEl.src = src;
        imgEl.onerror = imgEl.onload = function(){
            imgEl.onerror = null;
            imgEl.onload = null;
        } 
}

// 20181119
// 拼接发送请求参数
// @param url,发送请求地址;params,参数对象                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
// @return null
const send = function(url,params){
    let req = url + '?';
    let keys = Object.keys(params),
    len = keys.length;
    for (var i = len - 1; i >= 0; i--) {
        req += keys[i]+'='+params[keys[i]]+'&'
    };
    req  +='date='+ (new Date().getTime()) ;
    req  +='&href=' + encodeURIComponent(window.location.href);
    sendMessage(req);
};
export default send;
