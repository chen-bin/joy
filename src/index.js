
import sendMessage from './send';
import clickEvent from './modules/click';
import pluck from './pluck';      
import {config} from './config'


// 20181119
// 创建window  Joy对象
// @param obj 配置项
// @return null
window.Joy = function(obj){      

    this.config = {...config,...(obj||{})};

    // 20181119
    // 对象init启动方法
    // @param null
    // @return null
    this.init = function(){

        let config = this.config;

        let baseParams = pluck(config.global || []);

        const callback = function(params){
            sendMessage(config.url,{...baseParams,...params})
        };

        if(config.read === "pv"){
            sendMessage(config.url,{...baseParams,...{upty:'login',upval:'login'}});
        };
        
        if(config.eventType.indexOf('click') > -1){
            clickEvent(config.tag,callback);
        };
    }
    
}
