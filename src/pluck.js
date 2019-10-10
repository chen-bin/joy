
// 20181109
// 获取浏览器名称及版本
// @param null
// @return String
const getBrowser = function(){
    let userAgent = window.navigator.userAgent;
    if(!userAgent) return 'null';
    if(userAgent.indexOf('Opera') > -1){
        return 'Opera';
    }else if(userAgent.indexOf('Firefox') > -1){
        return 'Firefox';
    }else if(userAgent.indexOf('Chrome') > -1){
        return 'Chrome';
    }else if(userAgent.indexOf("Safari") > -1){
        return 'Safari';
    }else if(userAgent.indexOf('compatible')>-1&&userAgent.indexOf('MSIE')>-1){
        return 'IE';
    };
    return 'null';
};
// 20181109
// 获取屏幕浏览器分辨率
// @param null
// @return String
const getDpi = function(){
    let dpi = window.screen.height+'*'+window.screen.width;
    return dpi;
};
const init = function(obj){
    let params = {
        dpi:getDpi(),
        browser:getBrowser(),
        app:window.location.host
    };
    for (var i = obj.length - 1; i >= 0; i--) {
        let key =  obj[i].key;
        let type = obj[i].type;
        if(key.indexOf('.') > -1){ 
            let li = key.split('.');
            let val = window;
            for (var j = 0; j < li.length; j++) {
                val = val[li[j]] || {};
            };
            params[type] = typeof val != 'object' ? val : '';
        }else{
            params[type] =  window[key] || '';
        }
    }
    return params
}
export default init;

