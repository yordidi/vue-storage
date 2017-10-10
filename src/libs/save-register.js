/**
 * 2017.10.10.  该文件仅用来查阅
 */

window.onload = function(){
    var aInput = document.getElementsByTagName('input');
    var oT = document.getElementById('t1');
    if( window.localStorage.getItem('name') ){
        aInput[0].value = window.localStorage.getItem('name');
    }
    if( window.localStorage.getItem('sex') ){
        for(var i=1;i<aInput.length;i++){
            if( aInput[i].value == window.localStorage.getItem('sex') ){
                aInput[i].checked = true;
            }
        }
    }
    if( window.localStorage.getItem('ta') ){
        oT.value =  window.localStorage.getItem('ta');
    }
    //页面关闭前保存信息到localStorage
    window.onunload = function(){
        if( aInput[0].value ){
            window.localStorage.setItem('name', aInput[0].value);
        }
        for(var i=1;i<aInput.length;i++){
            if( aInput[i].checked == true ){
                window.localStorage.setItem('sex', aInput[i].value);
            }
        }
        if( oT.value ){
            window.localStorage.setItem('ta', oT.value);
        }
    };
};


window.onload = function(){
    var aInput = document.getElementsByTagName('input');
    aInput[0].onclick = function(){
        window.localStorage.setItem('name',aInput[3].value);
    };
    aInput[1].onclick = function(){
        alert(window.localStorage.getItem('name'));
    };
    aInput[2].onclick = function(){
        window.localStorage.removeItem('name');
    };
    //当数据有修改或删除的情况下，就会触发storage事件
    window.addEventListener('storage',function(ev){  //当前页面的事件不会触发
        //alert(123);
        console.log( ev.key );  //修改或删除的key值，如果调用clear(),key为null
        console.log( ev.newValue );   //新设置的值，如果调用removeStorage(),key为null
        console.log( ev.oldValue );  //调用改变前的value值
        console.log( ev.storageArea ); //当前的storage对象
        console.log( ev.url ); //触发该脚本变化的文档的url
    },false);
};

<input type="button" value="设置" />
<input type="button" value="获取" />
<input type="button" value="删除" />
<input type="text" />

例子 :   同步购物车

window.onload = function(){
    var aInput = document.getElementsByTagName('input');
    for(var i=0;i<aInput.length;i++){
        aInput[i].onclick = function(){
            if(this.checked){
                window.localStorage.setItem('sel',this.value);
            }
            else{
                window.localStorage.setItem('onSel',this.value);
            }
        };
    }
    window.addEventListener('storage',function(ev){  //当前页面的事件不会触发
        if( ev.key == 'sel' ){
            for(var i=0;i<aInput.length;i++){
                if( ev.newValue == aInput[i].value ){
                    aInput[i].checked = true;
                }
            }
        }
        else if( ev.key == 'onSel' ){
            for(var i=0;i<aInput.length;i++){
                if( ev.newValue == aInput[i].value ){
                    aInput[i].checked = false;
                }
            }
        }
    },false);
};
```
```html
<input type="checkbox" value="香蕉" />香蕉<br />
<input type="checkbox" value="苹果" />苹果<br />
<input type="checkbox" value="西瓜" />西瓜<br />
<input type="checkbox" value="哈密瓜" />哈密瓜<br />
```
例子：页面刷新计时器
```js
//页面刷新计时器
window.onload=function () {
    localStorage.clear();
    tj();
    function tj () {
        if (localStorage.getItem("name")) { //非空---true   空----false
            console.log(localStorage.getItem("name"));
            if(document.getElementsByTagName("span").length){
                alert(document.getElementsByTagName("span"));
                document.getElementsByTagName("span")[0].innerText=parseInt(localStorage.getItem("name"));
                localStorage.setItem("name",parseInt(span.innerText)+1);
            }else{
                var span =document.createElement("span");
                span.innerText=parseInt(localStorage.getItem("name"));
                localStorage.setItem("name",parseInt(span.innerText)+1);
                document.body.appendChild(span);
            }
        }else{
            console.log(0);
            localStorage.setItem("name",0);
        }
    }
}
```