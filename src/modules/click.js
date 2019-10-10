


const init = function(tag,callback){
    let reportTag = tag;
    // 20181119
    // 判断是否含有tag标记
    // @param el dom节点
    // @return false||obj
    function haveTag(el){
        let obj = {};
        for (var i = reportTag.length - 1; i >= 0; i--) {
            let x = el.getAttribute(reportTag[i].key) || '';
            let j = 1;
            while(!x && j < 5){
                el = el.parentNode;
                if(!el || el.nodeName == 'BODY'){
                    break;
                };
                x = el.getAttribute(reportTag[i].key) || '';
                j++;
            };

            if(x){
                let index = x.lastIndexOf('_');
                
                let val = index > -1 ? x.substring(index+1) : x;
                let menu = index > -1 ? x.substring(0,index) : '';
                obj['udty'] = reportTag[i].type;
                obj['menu'] = menu;
                obj['udval'] = val;
            }
        };
        if(Object.keys(obj).length == 0)return false;
        else return obj;
    };
    // 20181119
    // 判断是否含为上报节点
    // @param el dom节点
    // @return false||obj
    function isReportElement(element){
        if(element && element.tagName){
            let tagName = element.tagName.toLowerCase();
            if(tagName === 'html' || tagName === 'body')return false;
            let re = haveTag(element);
            if(re)return re; 
        }
        return false;
    };
    // 20181119
    // click事件
    // @param el 
    // @return null
    function clickEvent(e){
        if( !e.clientX && !e.clientY && !e.pageX && !e.pageY ) { return; }
        let el = e.srcElement || e.target;
        let re = isReportElement(el);
        if(re) callback(re);
    };
    
    window.document.body.addEventListener('mousedown',clickEvent,false);
}
export default init;