## joy
#### 配置项
    config={
        tag:[{
            type:'hxtag',     //埋點分類
            key:'hxtag'     // 埋點值
        }],
        eventType:['click'],    //事件類型
        global:[{               //附加全局參數
            type:'erp',         //传输字段
            key:'globalErp'     //全局值字段
            }],            
        url:'http://127.0.0.1/log.gif',   //接收请求地址
        read:'pv'      // 用來判斷首次進入頁面是否記錄
    }
#### 使用方法

    首先打包 npm run build;
    在dist文件会生成一个joy.js


    script 标签引入
    <script >
        (function() {
            var script = document.createElement('script');
            script.type = 'text/javascript'; script.async = true;
            script.src = "http://127.0.0.1/joy.js"
            script.onload = script.onreadystatechange = function(){
                if(  !this.readyState  || this.readyState=='loaded' || this.readyState=='complete'){ 
                    var _joy = new Joy();
                    _joy.init();
                }
            };
            var s = document.getElementsByTagName('script')[0]; 
            s.parentNode.insertBefore(script, s);
        })();
    </script>
    import 引入方法
    import '../joy.js' 本地js地址
    let _joy = new Joy();
    _joy.init();

