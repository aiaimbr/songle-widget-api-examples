/**
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license Songle Widget API Examples
 *
 * Visit http://songle.jp/info/Credit.html OR http://widget.songle.jp/docs/v1 for documentation.
 * Copyright (c) 2015 National Institute of Advanced Industrial Science and Technology (AIST)
 *
 * Distributed under the terms of the MIT license only for non-commercial purposes.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of this Songle Widget API Examples.
 * If you are interested in commercial use of Songle Widget API, please contact "songle-ml@aist.go.jp".
 */
(function(){if(window.__swExtra__==null){window.__swExtra__={}}__swExtra__.initializeAllModule=function(a){if(__swExtra__.modules==null){__swExtra__.modules=[]}__swExtra__.modules.push(a);window.onSongleWidgetCreate=function(c,b){return __swExtra__.initializeCreateModule(b)};window.onSongleWidgetError=function(c,b){return __swExtra__.initializeErrorModule(b)};return window.onSongleWidgetReady=function(c,b){return __swExtra__.initializeReadyModule(b)}};__swExtra__.initializeCreateModule=function(b,c){var f,a,e,g,d;if(c==null){c={}}if(c.force==null){c.force=false}g=__swExtra__.modules;d=[];for(f=0,a=g.length;f<a;f++){e=g[f];if(!e.__wasCreated__||c.force){e.onCreate&&e.onCreate(b)}d.push(e.__wasCreated__=true)}return d};__swExtra__.initializeErrorModule=function(b,c){var f,a,e,g,d;if(c==null){c={}}if(c.force==null){c.force=false}g=__swExtra__.modules;d=[];for(f=0,a=g.length;f<a;f++){e=g[f];if(!e.__wasErrored__||c.force){e.onError&&e.onError(b)}d.push(e.__wasErrored__=true)}return d};__swExtra__.initializeReadyModule=function(b,c){var f,a,e,g,d;if(c==null){c={}}if(c.force==null){c.force=false}g=__swExtra__.modules;d=[];for(f=0,a=g.length;f<a;f++){e=g[f];if(!e.__wasReadied__||c.force){e.onReady&&e.onReady(b)}d.push(e.__wasReadied__=true)}return d};__swExtra__.random=function(b,a){if(b==null){b=0}if(a==null){a=2147483647}return Math.floor(Math.random()*((a-b)+1)+b)}}).call(this);(function(){var a;__swExtra__.initializeAllModule({onReady:function(c){var e,d,b;if(!window.createjs){d=0;e=document.createElement("script");e.async=false;e.defer=false;e.src="https://code.createjs.com/easeljs-0.8.1.min.js";e.type="text/javascript";e.addEventListener("load",function(){++d;if(d>=2){return a(c)}},false);document.body.appendChild(e);b=document.createElement("script");b.async=false;b.defer=false;b.src="https://code.createjs.com/tweenjs-0.6.1.min.js";b.type="text/javascript";b.addEventListener("load",function(){++d;if(d>=2){return a(c)}},false);return document.body.appendChild(b)}else{return a(c)}}});a=function(j){var e,q,p,k,i,n,b,m,h,g,f,r,l,s,d,o,c;c=document.querySelector("[class*=sw-extra-visualizer");setTimeout(function(){var t,u;u=document.createElement("canvas");u.className="sw-extra-visualizer";u.width=m();u.height=b();u.style.position="absolute";u.style.left=0+"px";u.style.top=0+"px";u.style.zIndex=-1;if(!c){document.body.appendChild(u)}else{c.appendChild(u)}addEventListener("scroll",function(){u.style.top=window.scrollY+"px";u.width=m();return u.height=b()},false);addEventListener("resize",function(){u.style.top=window.scrollY+"px";u.width=m();return u.height=b()},false);t=new createjs.Stage(u);createjs.Ticker.addEventListener("tick",function(v){return t.update(v)});createjs.Ticker.setFPS(60);j.on("beatPlay",function(v){if(v.beat.position===1){switch(__swExtra__.random(q,e)){case 1:return s(t);case 2:return l(t);case 3:return h(t);case 4:return g(t);case 5:return f(t)}}});j.on("chordPlay",function(A){var x,y,C,v,B,w,z;B=A.chord.prev;y=A.chord;if(B){x=B.name.match(/^([A-G#]{1,2})/)||[];z=x[1]||"N"}else{z="N"}w=p[z];if(y){x=y.name.match(/^([A-G#]{1,2})/)||[];v=x[1]||"N"}else{v="N"}C=p[v];return createjs.Tween.get(w).to(C,250).addEventListener("change",function(E){var D;D=E.target.target;D.r=Math.floor(D.r);D.g=Math.floor(D.g);D.b=Math.floor(D.b);return u.style.backgroundColor="rgb("+D.r+","+D.g+","+D.b+")"})});j.on("chorusSegmentEnter",function(v){return d(t,{color:k,direction:"L"})});j.on("repeatSegmentEnter",function(v){return d(t,{color:i,direction:"R"})});j.on("play",function(){return o(t)});j.on("seek",function(){return o(t)});return j.on("finish",function(){return o(t)})},0);q=1;e=5;n="#e17";p={A:{r:204,g:204,b:238},"A#":{r:204,g:204,b:255},B:{r:204,g:238,b:204},C:{r:204,g:238,b:238},"C#":{r:204,g:255,b:255},D:{r:238,g:204,b:204},"D#":{r:255,g:204,b:204},E:{r:238,g:204,b:238},F:{r:238,g:238,b:204},"F#":{r:255,g:255,b:204},G:{r:238,g:238,b:238},"G#":{r:255,g:255,b:255},N:{r:255,g:255,b:255}};k="#f84";i="#48f";m=function(){if(c){return c.clientWidth}else{return window.innerWidth}};b=function(){if(c){return c.clientHeight}else{return window.innerHeight}};r=function(u,t){var v;if(t==null){t={}}if(t.r==null){t.r=0}if(t.vertexCount==null){t.vertexCount=0}v=new createjs.Shape;v.graphics.beginStroke(n).drawPolyStar(0,0,20,t.vertexCount,t.r,__swExtra__.random(0,360));v.x=__swExtra__.random(0,m());v.y=__swExtra__.random(0,b());createjs.Tween.get(v).to({alpha:0,scaleX:20,scaleY:20},2000);return u.addChild(v)};s=function(t){return r(t,{vertexCount:3})};l=function(t){return r(t,{vertexCount:4})};h=function(t){return r(t,{r:0.2,vertexCount:5})};g=function(t){return r(t,{r:0.2,vertexCount:7})};f=function(t){return r(t,{vertexCount:100})};d=function(v,u){var x,t,w;if(u==null){u={}}if(u.color==null){u.color=n}if(u.direction==null){u.direction="L"}w=[];for(t=x=0;x<10;t=++x){w.push((function(y){var z;z=new createjs.Shape;z.graphics.beginStroke(u.color).drawCircle(0,0,20);switch(u.direction){case"L":z.x=m()/10*y;z.y=b()/2;break;case"R":z.x=m()/10*(10-y);z.y=b()/2}return setTimeout(function(){createjs.Tween.get(z).to({alpha:0,scaleX:20,scaleY:20},2000);return v.addChild(z)},200*y)})(t))}return w};return o=function(t){return t.removeAllChildren()}}}).call(this);