/***
 * Excerpted from "Web Development Recipes",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/wbdev for more book information.
***/
// Knockout JavaScript library v1.3.0ctp
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(window,undefined){ 
function b(a){throw a;}var l=void 0,m=true,o=null,p=false,s=window.ko={};s.b=function(a,e){for(var c=a.split("."),d=window,f=0;f<c.length-1;f++)d=d[c[f]];d[c[c.length-1]]=e};s.l=function(a,e,c){a[e]=c};
s.a=new function(){function a(a,d){if(a.tagName!="INPUT"||!a.type)return p;if(d.toLowerCase()!="click")return p;var c=a.type.toLowerCase();return c=="checkbox"||c=="radio"}var e=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,c={},d={};c[/Firefox\/2/i.test(navigator.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];c.MouseEvents="click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave".split(",");for(var f in c){var g=c[f];if(g.length)for(var h=0,j=g.length;h<j;h++)d[g[h]]=
f}c=function(){for(var a=3,d=document.createElement("div"),c=d.getElementsByTagName("i");d.innerHTML="<\!--[if gt IE "+ ++a+"]><i></i><![endif]--\>",c[0];);return a>4?a:l}();return{Ba:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],n:function(a,d){for(var c=0,f=a.length;c<f;c++)d(a[c])},j:function(a,d){if(typeof a.indexOf=="function")return a.indexOf(d);for(var c=0,f=a.length;c<f;c++)if(a[c]===d)return c;return-1},Ua:function(a,d,c){for(var f=0,e=a.length;f<e;f++)if(d.call(c,a[f]))return a[f];
return o},ba:function(a,d){var c=s.a.j(a,d);c>=0&&a.splice(c,1)},ya:function(a){for(var a=a||[],d=[],c=0,f=a.length;c<f;c++)s.a.j(d,a[c])<0&&d.push(a[c]);return d},aa:function(a,d){for(var a=a||[],c=[],f=0,e=a.length;f<e;f++)c.push(d(a[f]));return c},$:function(a,d){for(var a=a||[],c=[],f=0,e=a.length;f<e;f++)d(a[f])&&c.push(a[f]);return c},F:function(a,d){for(var c=0,f=d.length;c<f;c++)a.push(d[c]);return a},extend:function(a,d){for(var c in d)d.hasOwnProperty(c)&&(a[c]=d[c]);return a},M:function(a){for(;a.firstChild;)s.removeNode(a.firstChild)},
oa:function(a,d){s.a.M(a);d&&s.a.n(d,function(d){a.appendChild(d)})},Ja:function(a,d){var c=a.nodeType?[a]:a;if(c.length>0){for(var f=c[0],e=f.parentNode,g=0,h=d.length;g<h;g++)e.insertBefore(d[g],f);g=0;for(h=c.length;g<h;g++)s.removeNode(c[g])}},La:function(a,d){navigator.userAgent.indexOf("MSIE 6")>=0?a.setAttribute("selected",d):a.selected=d},v:function(a){return(a||"").replace(e,"")},Cb:function(a,d){for(var c=[],f=(a||"").split(d),e=0,g=f.length;e<g;e++){var h=s.a.v(f[e]);h!==""&&c.push(h)}return c},
Ab:function(a,d){a=a||"";return d.length>a.length?p:a.substring(0,d.length)===d},fb:function(a){for(var d=Array.prototype.slice.call(arguments,1),c="return ("+a+")",f=0;f<d.length;f++)d[f]&&typeof d[f]=="object"&&(c="with(sc["+f+"]) { "+c+" } ");return(new Function("sc",c))(d)},cb:function(a,d){if(d.compareDocumentPosition)return(d.compareDocumentPosition(a)&16)==16;for(;a!=o;){if(a==d)return m;a=a.parentNode}return p},ga:function(a){return s.a.cb(a,document)},s:function(d,c,f){if(typeof jQuery!=
"undefined"){if(a(d,c))var e=f,f=function(a,d){var c=this.checked;if(d)this.checked=d.Wa!==m;e.call(this,a);this.checked=c};jQuery(d).bind(c,f)}else typeof d.addEventListener=="function"?d.addEventListener(c,f,p):typeof d.attachEvent!="undefined"?d.attachEvent("on"+c,function(a){f.call(d,a)}):b(Error("Browser doesn't support addEventListener or attachEvent"))},sa:function(c,f){(!c||!c.nodeType)&&b(Error("element must be a DOM node when calling triggerEvent"));if(typeof jQuery!="undefined"){var e=
[];a(c,f)&&e.push({Wa:c.checked});jQuery(c).trigger(f,e)}else if(typeof document.createEvent=="function")typeof c.dispatchEvent=="function"?(e=document.createEvent(d[f]||"HTMLEvents"),e.initEvent(f,m,m,window,0,0,0,0,0,p,p,p,p,0,c),c.dispatchEvent(e)):b(Error("The supplied element doesn't support dispatchEvent"));else if(typeof c.fireEvent!="undefined"){if(f=="click"&&c.tagName=="INPUT"&&(c.type.toLowerCase()=="checkbox"||c.type.toLowerCase()=="radio"))c.checked=c.checked!==m;c.fireEvent("on"+f)}else b(Error("Browser doesn't support triggering events"))},
d:function(a){return s.U(a)?a():a},bb:function(a,d){return s.a.j((a.className||"").split(/\s+/),d)>=0},Pa:function(a,d,c){var f=s.a.bb(a,d);if(c&&!f)a.className=(a.className||"")+" "+d;else if(f&&!c){for(var c=(a.className||"").split(/\s+/),f="",e=0;e<c.length;e++)c[e]!=d&&(f+=c[e]+" ");a.className=s.a.v(f)}},outerHTML:function(a){var d=a.outerHTML;if(typeof d=="string")return d;d=window.document.createElement("div");d.appendChild(a.cloneNode(m));return d.innerHTML},vb:function(a,d){for(var a=s.a.d(a),
d=s.a.d(d),c=[],f=a;f<=d;f++)c.push(f);return c},ka:function(a){for(var d=[],c=0,f=a.length;c<f;c++)d.push(a[c]);return d},mb:c===6,Bb:c===7,Ca:function(a,d){for(var c=s.a.ka(a.getElementsByTagName("INPUT")).concat(s.a.ka(a.getElementsByTagName("TEXTAREA"))),f=typeof d=="string"?function(a){return a.name===d}:function(a){return d.test(a.name)},e=[],g=c.length-1;g>=0;g--)f(c[g])&&e.push(c[g]);return e},sb:function(a){return typeof a=="string"&&(a=s.a.v(a))?window.JSON&&window.JSON.parse?window.JSON.parse(a):
(new Function("return "+a))():o},qa:function(a){(typeof JSON=="undefined"||typeof JSON.stringify=="undefined")&&b(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));return JSON.stringify(s.a.d(a))},tb:function(a,d,c){var c=c||{},f=c.params||{},e=c.includeFields||this.Ba,g=a;if(typeof a=="object"&&a.tagName=="FORM")for(var g=a.action,h=e.length-
1;h>=0;h--)for(var j=s.a.Ca(a,e[h]),w=j.length-1;w>=0;w--)f[j[w].name]=j[w].value;var d=s.a.d(d),u=document.createElement("FORM");u.style.display="none";u.action=g;u.method="post";for(var y in d)a=document.createElement("INPUT"),a.name=y,a.value=s.a.qa(s.a.d(d[y])),u.appendChild(a);for(y in f)a=document.createElement("INPUT"),a.name=y,a.value=f[y],u.appendChild(a);document.body.appendChild(u);c.submitter?c.submitter(u):u.submit();setTimeout(function(){u.parentNode.removeChild(u)},0)}}};
s.b("ko.utils",s.a);s.b("ko.utils.arrayForEach",s.a.n);s.b("ko.utils.arrayFirst",s.a.Ua);s.b("ko.utils.arrayFilter",s.a.$);s.b("ko.utils.arrayGetDistinctValues",s.a.ya);s.b("ko.utils.arrayIndexOf",s.a.j);s.b("ko.utils.arrayMap",s.a.aa);s.b("ko.utils.arrayPushAll",s.a.F);s.b("ko.utils.arrayRemoveItem",s.a.ba);s.b("ko.utils.extend",s.a.extend);s.b("ko.utils.fieldsIncludedWithJsonPost",s.a.Ba);s.b("ko.utils.getFormFields",s.a.Ca);s.b("ko.utils.postJson",s.a.tb);s.b("ko.utils.parseJson",s.a.sb);
s.b("ko.utils.registerEventHandler",s.a.s);s.b("ko.utils.stringifyJson",s.a.qa);s.b("ko.utils.range",s.a.vb);s.b("ko.utils.toggleDomNodeCssClass",s.a.Pa);s.b("ko.utils.triggerEvent",s.a.sa);s.b("ko.utils.unwrapObservable",s.a.d);Function.prototype.bind||(Function.prototype.bind=function(a){var e=this,c=Array.prototype.slice.call(arguments),a=c.shift();return function(){return e.apply(a,c.concat(Array.prototype.slice.call(arguments)))}});
s.a.e=new function(){var a=0,e="__ko__"+(new Date).getTime(),c={};return{get:function(a,c){var e=s.a.e.getAll(a,p);return e===l?l:e[c]},set:function(a,c,e){e===l&&s.a.e.getAll(a,p)===l||(s.a.e.getAll(a,m)[c]=e)},getAll:function(d,f){var g=d[e];if(!(g&&g!=="null")){if(!f)return;g=d[e]="ko"+a++;c[g]={}}return c[g]},clear:function(a){var f=a[e];f&&(delete c[f],a[e]=o)}}};s.b("ko.utils.domData",s.a.e);s.b("ko.utils.domData.clear",s.a.e.clear);
s.a.w=new function(){function a(a,f){var e=s.a.e.get(a,c);e===l&&f&&(e=[],s.a.e.set(a,c,e));return e}function e(d){var c=a(d,p);if(c)for(var c=c.slice(0),e=0;e<c.length;e++)c[e](d);s.a.e.clear(d);typeof jQuery=="function"&&typeof jQuery.cleanData=="function"&&jQuery.cleanData([d])}var c="__ko_domNodeDisposal__"+(new Date).getTime();return{va:function(d,c){typeof c!="function"&&b(Error("Callback must be a function"));a(d,m).push(c)},Ia:function(d,f){var e=a(d,p);e&&(s.a.ba(e,f),e.length==0&&s.a.e.set(d,
c,l))},I:function(a){if(!(a.nodeType!=1&&a.nodeType!=9)){e(a);var c=[];s.a.F(c,a.getElementsByTagName("*"));for(var a=0,g=c.length;a<g;a++)e(c[a])}},removeNode:function(a){s.I(a);a.parentNode&&a.parentNode.removeChild(a)}}};s.I=s.a.w.I;s.removeNode=s.a.w.removeNode;s.b("ko.cleanNode",s.I);s.b("ko.removeNode",s.removeNode);s.b("ko.utils.domNodeDisposal",s.a.w);s.b("ko.utils.domNodeDisposal.addDisposeCallback",s.a.w.va);s.b("ko.utils.domNodeDisposal.removeDisposeCallback",s.a.w.Ia);
(function(){function a(a){for(var a=a||"",d=[];a.match(e);)a=a.replace(e,function(a,c,f){c&&d.push(document.createTextNode(c));d.push(document.createComment(f));return""});var f=s.a.v(a).toLowerCase(),g=document.createElement("div"),f=f.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!f.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!f.indexOf("<td")||!f.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];for(g.innerHTML=f[1]+a+f[2];f[0]--;)g=g.lastChild;
return d.concat(s.a.ka(g.childNodes))}var e=/^(\s*)<\!--(.*?)--\>/;s.a.W=function(c){return typeof jQuery!="undefined"?jQuery.clean([c]):a(c)};s.a.yb=function(a,d){s.a.M(a);if(d!==o&&d!==l)if(typeof d!="string"&&(d=d.toString()),typeof jQuery!="undefined")jQuery(a).html(d);else for(var f=s.a.W(d),e=0;e<f.length;e++)a.appendChild(f[e])}})();s.b("ko.utils.parseHtmlFragment",s.a.W);
s.q=function(){function a(){return((1+Math.random())*4294967296|0).toString(16).substring(1)}function e(a,c){if(a)if(a.nodeType==8){var g=s.q.Ga(a.nodeValue);g!=o&&c.push({ab:a,qb:g})}else if(a.nodeType==1)for(var g=0,h=a.childNodes,j=h.length;g<j;g++)e(h[g],c)}var c={};return{la:function(d){typeof d!="function"&&b(Error("You can only pass a function to ko.memoization.memoize()"));var f=a()+a();c[f]=d;return"<\!--[ko_memo:"+f+"]--\>"},Qa:function(a,f){var e=c[a];e===l&&b(Error("Couldn't find any memo with ID "+
a+". Perhaps it's already been unmemoized."));try{return e.apply(o,f||[]),m}finally{delete c[a]}},Ra:function(a,c){var g=[];e(a,g);for(var h=0,j=g.length;h<j;h++){var i=g[h].ab,k=[i];c&&s.a.F(k,c);s.q.Qa(g[h].qb,k);i.nodeValue="";i.parentNode&&i.parentNode.removeChild(i)}},Ga:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:o}}}();s.b("ko.memoization",s.q);s.b("ko.memoization.memoize",s.q.la);s.b("ko.memoization.unmemoize",s.q.Qa);s.b("ko.memoization.parseMemoText",s.q.Ga);
s.b("ko.memoization.unmemoizeDomNodeAndDescendants",s.q.Ra);s.Aa={throttle:function(a,e){a.throttleEvaluation=e;var c=o;return s.h({read:a,write:function(d){clearTimeout(c);c=setTimeout(function(){a(d)},e)}})}};s.b("ko.extenders",s.Aa);s.Na=function(a,e){this.ca=a;this.$a=e;s.l(this,"dispose",this.u)};s.Na.prototype.u=function(){this.lb=m;this.$a()};
s.Q=function(){this.R=[];s.a.extend(this,s.Q.fn);s.l(this,"subscribe",this.ra);s.l(this,"extend",this.extend);s.l(this,"notifySubscribers",this.O);s.l(this,"getSubscriptionsCount",this.ib)};
s.Q.fn={ra:function(a,e){var c=e?a.bind(e):a,d=new s.Na(c,function(){s.a.ba(this.R,d)}.bind(this));this.R.push(d);return d},O:function(a){s.a.n(this.R.slice(0),function(e){e&&e.lb!==m&&e.ca(a)})},ib:function(){return this.R.length},extend:function(a){var e=this;if(a)for(var c in a){var d=s.Aa[c];typeof d=="function"&&(e=d(e,a[c]))}return e}};s.Ea=function(a){return typeof a.ra=="function"&&typeof a.O=="function"};s.b("ko.subscribable",s.Q);s.b("ko.isSubscribable",s.Ea);
s.S=function(){var a=[];return{Va:function(e){a.push({ca:e,za:[]})},end:function(){a.pop()},Ha:function(e){s.Ea(e)||b("Only subscribable things can act as dependencies");if(a.length>0){var c=a[a.length-1];s.a.j(c.za,e)>=0||(c.za.push(e),c.ca(e))}}}}();var A={undefined:m,"boolean":m,number:m,string:m};
s.z=function(a){function e(){if(arguments.length>0){if(!e.equalityComparer||!e.equalityComparer(c,arguments[0]))c=arguments[0],e.O(c);return this}else return s.S.Ha(e),c}var c=a;s.Q.call(e);e.K=function(){e.O(c)};s.a.extend(e,s.z.fn);s.l(e,"valueHasMutated",e.K);return e};s.z.fn={A:s.z,equalityComparer:function(a,e){return a===o||typeof a in A?a===e:p}};s.U=function(a){return a===o||a===l||a.A===l?p:a.A===s.z?m:s.U(a.A)};
s.N=function(a){return typeof a=="function"&&a.A===s.z?m:typeof a=="function"&&a.A===s.h&&a.jb?m:p};s.b("ko.observable",s.z);s.b("ko.isObservable",s.U);s.b("ko.isWriteableObservable",s.N);
s.P=function(a){arguments.length==0&&(a=[]);a!==o&&a!==l&&!("length"in a)&&b(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));var e=new s.z(a);s.a.extend(e,s.P.fn);s.l(e,"remove",e.remove);s.l(e,"removeAll",e.wb);s.l(e,"destroy",e.fa);s.l(e,"destroyAll",e.Za);s.l(e,"indexOf",e.indexOf);s.l(e,"replace",e.replace);return e};
s.P.fn={remove:function(a){for(var e=this(),c=[],d=typeof a=="function"?a:function(c){return c===a},f=0;f<e.length;f++){var g=e[f];d(g)&&(c.push(g),e.splice(f,1),f--)}c.length&&this.K();return c},wb:function(a){if(a===l){var e=this(),c=e.slice(0);e.splice(0,e.length);this.K();return c}return!a?[]:this.remove(function(c){return s.a.j(a,c)>=0})},fa:function(a){for(var e=this(),c=typeof a=="function"?a:function(c){return c===a},d=e.length-1;d>=0;d--)c(e[d])&&(e[d]._destroy=m);this.K()},Za:function(a){return a===
l?this.fa(function(){return m}):!a?[]:this.fa(function(e){return s.a.j(a,e)>=0})},indexOf:function(a){var e=this();return s.a.j(e,a)},replace:function(a,e){var c=this.indexOf(a);c>=0&&(this()[c]=e,this.K())}};s.a.n("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){s.P.fn[a]=function(){var e=this(),e=e[a].apply(e,arguments);this.K();return e}});s.a.n(["slice"],function(a){s.P.fn[a]=function(){var e=this();return e[a].apply(e,arguments)}});s.b("ko.observableArray",s.P);
function B(a,e,c){a&&typeof a=="object"?c=a:(c=c||{},c.read=a||c.read,c.owner=e||c.owner);typeof c.read!="function"&&b("Pass a function that returns the value of the dependentObservable");return c}
s.h=function(a,e,c){function d(){s.a.n(t,function(a){a.u()});t=[]}function f(){var a=h.throttleEvaluation;a&&a>=0?(clearTimeout(r),r=setTimeout(g,a)):g()}function g(){if(i&&typeof c.disposeWhen=="function"&&c.disposeWhen())h.u();else{try{d(),s.S.Va(function(a){t.push(a.ra(f))}),j=c.owner?c.read.call(c.owner):c.read()}finally{s.S.end()}h.O(j);i=m}}function h(){if(arguments.length>0)typeof c.write==="function"?c.write.apply(c.owner,arguments):b("Cannot write a value to a dependentObservable unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
else return i||g(),s.S.Ha(h),j}var j,i=p,c=B(a,e,c),k=typeof c.disposeWhenNodeIsRemoved=="object"?c.disposeWhenNodeIsRemoved:o,n=o;if(k){n=function(){h.u()};s.a.w.va(k,n);var q=c.disposeWhen;c.disposeWhen=function(){return!s.a.ga(k)||typeof q=="function"&&q()}}var t=[],r=o;h.hb=function(){return t.length};h.jb=typeof c.write==="function";h.u=function(){k&&s.a.w.Ia(k,n);d()};s.Q.call(h);s.a.extend(h,s.h.fn);c.deferEvaluation!==m&&g();s.l(h,"dispose",h.u);s.l(h,"getDependenciesCount",h.hb);return h};
s.h.fn={A:s.h};s.h.A=s.z;s.b("ko.dependentObservable",s.h);s.b("ko.computed",s.h);
(function(){function a(d,f,g){g=g||new c;d=f(d);if(!(typeof d=="object"&&d!==o&&d!==l))return d;var h=d instanceof Array?[]:{};g.save(d,h);e(d,function(c){var e=f(d[c]);switch(typeof e){case "boolean":case "number":case "string":case "function":h[c]=e;break;case "object":case "undefined":var k=g.get(e);h[c]=k!==l?k:a(e,f,g)}});return h}function e(a,c){if(a instanceof Array)for(var e=0;e<a.length;e++)c(e);else for(e in a)c(e)}function c(){var a=[],c=[];this.save=function(e,h){var j=s.a.j(a,e);j>=0?
c[j]=h:(a.push(e),c.push(h))};this.get=function(e){e=s.a.j(a,e);return e>=0?c[e]:l}}s.Oa=function(c){arguments.length==0&&b(Error("When calling ko.toJS, pass the object you want to convert."));return a(c,function(a){for(var c=0;s.U(a)&&c<10;c++)a=a();return a})};s.toJSON=function(a){a=s.Oa(a);return s.a.qa(a)}})();s.b("ko.toJS",s.Oa);s.b("ko.toJSON",s.toJSON);
s.k={r:function(a){return a.tagName=="OPTION"?a.__ko__hasDomDataOptionValue__===m?s.a.e.get(a,s.c.options.ma):a.getAttribute("value"):a.tagName=="SELECT"?a.selectedIndex>=0?s.k.r(a.options[a.selectedIndex]):l:a.value},Z:function(a,e){if(a.tagName=="OPTION")switch(typeof e){case "string":case "number":s.a.e.set(a,s.c.options.ma,l);"__ko__hasDomDataOptionValue__"in a&&delete a.__ko__hasDomDataOptionValue__;a.value=e;break;default:s.a.e.set(a,s.c.options.ma,e),a.__ko__hasDomDataOptionValue__=m,a.value=
""}else if(a.tagName=="SELECT")for(var c=a.options.length-1;c>=0;c--){if(s.k.r(a.options[c])==e){a.selectedIndex=c;break}}else{if(e===o||e===l)e="";a.value=e}}};s.b("ko.selectExtensions",s.k);s.b("ko.selectExtensions.readValue",s.k.r);s.b("ko.selectExtensions.writeValue",s.k.Z);
s.i=function(){function a(a,c){for(var d=o;a!=d;)d=a,a=a.replace(e,function(a,d){return c[d]});return a}var e=/\@ko_token_(\d+)\@/g,c=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,d=["true","false"];return{B:[],X:function(c){var d=s.a.v(c);if(d.length<3)return[];d.charAt(0)==="{"&&(d=d.substring(1,d.length-1));for(var c=[],e=o,j,i=0;i<d.length;i++){var k=d.charAt(i);if(e===o)switch(k){case '"':case "'":case "/":e=i,j=k}else if(k==j&&d.charAt(i-1)!=="\\"){k=d.substring(e,i+
1);c.push(k);var n="@ko_token_"+(c.length-1)+"@",d=d.substring(0,e)+n+d.substring(i+1);i-=k.length-n.length;e=o}}j=e=o;for(var q=0,t=o,i=0;i<d.length;i++){k=d.charAt(i);if(e===o)switch(k){case "{":e=i;t=k;j="}";break;case "(":e=i;t=k;j=")";break;case "[":e=i,t=k,j="]"}k===t?q++:k===j&&(q--,q===0&&(k=d.substring(e,i+1),c.push(k),n="@ko_token_"+(c.length-1)+"@",d=d.substring(0,e)+n+d.substring(i+1),i-=k.length-n.length,e=o))}j=[];d=d.split(",");e=0;for(i=d.length;e<i;e++)q=d[e],t=q.indexOf(":"),t>0&&
t<q.length-1?(k=q.substring(t+1),j.push({key:a(q.substring(0,t),c),value:a(k,c)})):j.push({unknown:a(q,c)});return j},ia:function(a){for(var e=typeof a==="string"?s.i.X(a):a,h=[],a=[],j,i=0;j=e[i];i++)if(h.length>0&&h.push(","),j.key){var k;a:{k=j.key;var n=s.a.v(k);switch(n.length&&n.charAt(0)){case "'":case '"':break a;default:k="'"+n+"'"}}j=j.value;h.push(k);h.push(":");h.push(j);n=s.a.v(j);if(s.a.j(d,s.a.v(n).toLowerCase())>=0?0:n.match(c)!==o)a.length>0&&a.push(", "),a.push(k+" : function(__ko_value) { "+
j+" = __ko_value; }")}else j.unknown&&h.push(j.unknown);e=h.join("");a.length>0&&(e=e+", '_ko_property_writers' : { "+a.join("")+" } ");return e},ob:function(a,c){for(var d=0;d<a.length;d++)if(s.a.v(a[d].key)==c)return m;return p}}}();s.b("ko.jsonExpressionRewriting",s.i);s.b("ko.jsonExpressionRewriting.bindingRewriteValidators",s.i.B);s.b("ko.jsonExpressionRewriting.parseObjectLiteral",s.i.X);s.b("ko.jsonExpressionRewriting.insertPropertyAccessorsIntoJson",s.i.ia);
(function(){function a(a){return a.nodeType==8&&a.nodeValue.match(f)}function e(a){return a.nodeType==8&&a.nodeValue.match(g)}function c(c,d){for(var f=c,g=1,h=[];f=f.nextSibling;){if(e(f)&&(g--,g===0))return h;h.push(f);a(f)&&g++}d||b(Error("Cannot find closing comment tag to match: "+c.nodeValue));return o}function d(a,d){var e=c(a,d);return e?e.length>0?e[e.length-1].nextSibling:a.nextSibling:o}var f=/^\s*ko\s+(.*\:.*)\s*$/,g=/^\s*\/ko\s*$/,h={ul:m,ol:m};s.f={C:{},childNodes:function(d){return a(d)?
c(d):d.childNodes},ha:function(c){if(a(c))for(var c=s.f.childNodes(c),d=0,e=c.length;d<e;d++)s.removeNode(c[d]);else s.a.M(c)},oa:function(c,d){if(a(c)){s.f.ha(c);for(var e=c.nextSibling,f=0,g=d.length;f<g;f++)e.parentNode.insertBefore(d[f],e)}else s.a.oa(c,d)},ub:function(c,d){a(c)?c.parentNode.insertBefore(d,c.nextSibling):c.firstChild?c.insertBefore(d,c.firstChild):c.appendChild(d)},kb:function(c,d,e){a(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):
c.appendChild(d)},nextSibling:function(c){return a(c)?d(c).nextSibling:c.nextSibling&&e(c.nextSibling)?l:c.nextSibling},ta:function(c){return(c=a(c))?c[1]:o},gb:function(a){if(s.f.ta(a)){var c;c=s.f.childNodes(a);for(var d=[],e=0,f=c.length;e<f;e++)s.a.w.I(c[e]),d.push(s.a.outerHTML(c[e]));c=String.prototype.concat.apply("",d);s.f.ha(a);(new s.m.D(a)).text(c)}},Fa:function(c){if(h[c.tagName.toLowerCase()]){var f=c.firstChild;if(f){do if(f.nodeType===1){var g;g=f.firstChild;var n=o;if(g){do if(n)n.push(g);
else if(a(g)){var q=d(g,m);q?g=q:n=[g]}else e(g)&&(n=[g]);while(g=g.nextSibling)}if(g=n){n=f.nextSibling;for(q=0;q<g.length;q++)n?c.insertBefore(g[q],n):c.appendChild(g[q])}}while(f=f.nextSibling)}}}}})();s.H=function(){};
s.a.extend(s.H.prototype,{nodeHasBindings:function(a){switch(a.nodeType){case 1:return a.getAttribute("data-bind")!=o;case 8:return s.f.ta(a)!=o;default:return p}},getBindings:function(a,e){var c=this.getBindingsString(a,e);return c?this.parseBindingsString(c,e):o},getBindingsString:function(a){switch(a.nodeType){case 1:return a.getAttribute("data-bind");case 8:return s.f.ta(a);default:return o}},parseBindingsString:function(a,e){try{var c=e.$data,d=" { "+s.i.ia(a)+" } ";return s.a.fb(d,c===o?window:
c,e)}catch(f){b(Error("Unable to parse bindings.\nMessage: "+f+";\nBindings value: "+a))}}});s.H.instance=new s.H;s.b("ko.bindingProvider",s.H);
(function(){function a(c,d,f){var g=m,h=d.nodeType==1;h&&s.f.Fa(d);if(h&&f||s.H.instance.nodeHasBindings(d))g=e(d,o,c,f).zb;if(h&&g)for(f=d.childNodes[0];d=f;)f=s.f.nextSibling(d),a(c,d,p)}function e(a,d,e,g){function h(a){return function(){return k[a]}}function j(){return k}var i=m;s.f.gb(a);var k,n;new s.h(function(){var q=e&&e instanceof s.G?e:new s.G(s.a.d(e)),t=q.$data;g&&s.Ma(a,q);if(k=(typeof d=="function"?d():d)||s.H.instance.getBindings(a,q)){if(i)for(var r in k){var v=s.c[r];v&&a.nodeType===
8&&!s.f.C[r]&&b(Error("The binding '"+r+"' cannot be used with virtual elements"));if(v&&typeof v.init=="function"&&(v=(0,v.init)(a,h(r),j,t,q))&&v.controlsDescendantBindings)n!==l&&b(Error("Multiple bindings ("+n+" and "+r+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")),n=r}for(r in k)(v=s.c[r])&&typeof v.update=="function"&&(0,v.update)(a,h(r),j,t,q)}},o,{disposeWhenNodeIsRemoved:a});i=p;return{zb:n===l}}s.c={};s.G=
function(a,d){this.$data=a;d?(this.$parent=d.$data,this.$parents=(d.$parents||[]).slice(0),this.$parents.unshift(this.$parent),this.$root=d.$root):(this.$parents=[],this.$root=a)};s.G.prototype={ea:function(a){return new s.G(a,this)}};s.Ma=function(a,d){if(arguments.length==2)s.a.e.set(a,"__ko_bindingContext__",d);else return s.a.e.get(a,"__ko_bindingContext__")};s.xa=function(a,d,f){a.nodeType===1&&s.f.Fa(a);return e(a,d,f,m)};s.wa=function(c,d){d&&d.nodeType!==1&&d.nodeType!==8&&b(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));
d=d||window.document.body;a(c,d,m)};s.da=function(a){switch(a.nodeType){case 1:case 8:var d=s.Ma(a);if(d)return d;if(a.parentNode)return s.da(a.parentNode)}};s.Ya=function(a){return(a=s.da(a))?a.$data:l};s.b("ko.bindingHandlers",s.c);s.b("ko.applyBindings",s.wa);s.b("ko.applyBindingsToNode",s.xa);s.b("ko.contextFor",s.da);s.b("ko.dataFor",s.Ya)})();s.a.n(["click"],function(a){s.c[a]={init:function(e,c,d,f){return s.c.event.init.call(this,e,function(){var d={};d[a]=c();return d},d,f)}}});
s.c.event={init:function(a,e,c,d){var f=e()||{},g;for(g in f)(function(){var f=g;typeof f=="string"&&s.a.s(a,f,function(a){var g,k=e()[f];if(k){var n=c();try{g=k.apply(d,arguments)}finally{if(g!==m)a.preventDefault?a.preventDefault():a.returnValue=p}if(n[f+"Bubble"]===p)a.cancelBubble=m,a.stopPropagation&&a.stopPropagation()}})})()}};
s.c.submit={init:function(a,e,c,d){typeof e()!="function"&&b(Error("The value for a submit binding must be a function to invoke on submit"));s.a.s(a,"submit",function(c){var g,h=e();try{g=h.call(d,a)}finally{if(g!==m)c.preventDefault?c.preventDefault():c.returnValue=p}})}};s.c.visible={update:function(a,e){var c=s.a.d(e()),d=a.style.display!="none";if(c&&!d)a.style.display="";else if(!c&&d)a.style.display="none"}};
s.c.enable={update:function(a,e){var c=s.a.d(e());if(c&&a.disabled)a.removeAttribute("disabled");else if(!c&&!a.disabled)a.disabled=m}};s.c.disable={update:function(a,e){s.c.enable.update(a,function(){return!s.a.d(e())})}};
s.c.value={init:function(a,e,c){var d=["change"],f=c().valueUpdate;f&&(typeof f=="string"&&(f=[f]),s.a.F(d,f),d=s.a.ya(d));s.a.n(d,function(d){var f=p;s.a.Ab(d,"after")&&(f=m,d=d.substring(5));var j=f?function(a){setTimeout(a,0)}:function(a){a()};s.a.s(a,d,function(){j(function(){var d=e(),f=s.k.r(a);s.N(d)?d(f):(d=c(),d._ko_property_writers&&d._ko_property_writers.value&&d._ko_property_writers.value(f))})})})},update:function(a,e){var c=s.a.d(e()),d=s.k.r(a),f=c!=d;c===0&&d!==0&&d!=="0"&&(f=m);f&&
(d=function(){s.k.Z(a,c)},d(),a.tagName=="SELECT"&&setTimeout(d,0));a.tagName=="SELECT"&&(d=s.k.r(a),d!==c&&s.a.sa(a,"change"))}};
s.c.options={update:function(a,e,c){a.tagName!="SELECT"&&b(Error("options binding applies only to SELECT elements"));var d=s.a.aa(s.a.$(a.childNodes,function(a){return a.tagName&&a.tagName=="OPTION"&&a.selected}),function(a){return s.k.r(a)||a.innerText||a.textContent}),f=a.scrollTop,g=s.a.d(e());s.a.M(a);if(g){var h=c();typeof g.length!="number"&&(g=[g]);if(h.optionsCaption){var j=document.createElement("OPTION");j.innerHTML=h.optionsCaption;s.k.Z(j,l);a.appendChild(j)}c=0;for(e=g.length;c<e;c++){var j=
document.createElement("OPTION"),i=typeof h.optionsValue=="string"?g[c][h.optionsValue]:g[c],i=s.a.d(i);s.k.Z(j,i);var k=h.optionsText,i=typeof k=="function"?k(g[c]):typeof k=="string"?g[c][k]:i;if(i===o||i===l)i="";i=s.a.d(i).toString();typeof j.innerText=="string"?j.innerText=i:j.textContent=i;a.appendChild(j)}g=a.getElementsByTagName("OPTION");c=h=0;for(e=g.length;c<e;c++)s.a.j(d,s.k.r(g[c]))>=0&&(s.a.La(g[c],m),h++);if(f)a.scrollTop=f}}};s.c.options.ma="__ko.bindingHandlers.options.optionValueDomData__";
s.c.selectedOptions={Da:function(a){for(var e=[],a=a.childNodes,c=0,d=a.length;c<d;c++){var f=a[c];f.tagName=="OPTION"&&f.selected&&e.push(s.k.r(f))}return e},init:function(a,e,c){s.a.s(a,"change",function(){var a=e();s.N(a)?a(s.c.selectedOptions.Da(this)):(a=c(),a._ko_property_writers&&a._ko_property_writers.value&&a._ko_property_writers.value(s.c.selectedOptions.Da(this)))})},update:function(a,e){a.tagName!="SELECT"&&b(Error("values binding applies only to SELECT elements"));var c=s.a.d(e());if(c&&
typeof c.length=="number")for(var d=a.childNodes,f=0,g=d.length;f<g;f++){var h=d[f];h.tagName=="OPTION"&&s.a.La(h,s.a.j(c,s.k.r(h))>=0)}}};s.c.text={update:function(a,e){var c=s.a.d(e());if(c===o||c===l)c="";typeof a.innerText=="string"?a.innerText=c:a.textContent=c}};s.c.html={init:function(){return{controlsDescendantBindings:m}},update:function(a,e){var c=s.a.d(e());s.a.yb(a,c)}};
s.c.css={update:function(a,e){var c=s.a.d(e()||{}),d;for(d in c)if(typeof d=="string"){var f=s.a.d(c[d]);s.a.Pa(a,d,f)}}};s.c.style={update:function(a,e){var c=s.a.d(e()||{}),d;for(d in c)if(typeof d=="string"){var f=s.a.d(c[d]);a.style[d]=f||""}}};s.c.uniqueName={init:function(a,e){if(e())a.name="ko_unique_"+ ++s.c.uniqueName.Xa,s.a.mb&&a.mergeAttributes(document.createElement("<input name='"+a.name+"'/>"),p)}};s.c.uniqueName.Xa=0;
s.c.checked={init:function(a,e,c){s.a.s(a,"click",function(){var d;if(a.type=="checkbox")d=a.checked;else if(a.type=="radio"&&a.checked)d=a.value;else return;var f=e();a.type=="checkbox"&&s.a.d(f)instanceof Array?(d=s.a.j(s.a.d(f),a.value),a.checked&&d<0?f.push(a.value):!a.checked&&d>=0&&f.splice(d,1)):s.N(f)?f()!==d&&f(d):(f=c(),f._ko_property_writers&&f._ko_property_writers.checked&&f._ko_property_writers.checked(d))});a.type=="radio"&&!a.name&&s.c.uniqueName.init(a,function(){return m})},update:function(a,
e){var c=s.a.d(e());if(a.type=="checkbox")a.checked=c instanceof Array?s.a.j(c,a.value)>=0:c;else if(a.type=="radio")a.checked=a.value==c}};s.c.attr={update:function(a,e){var c=s.a.d(e())||{},d;for(d in c)if(typeof d=="string"){var f=s.a.d(c[d]);f===p||f===o||f===l?a.removeAttribute(d):a.setAttribute(d,f.toString())}}};
s.c.hasfocus={init:function(a,e,c){function d(a){var d=e();a!=s.a.d(d)&&(s.N(d)?d(a):(d=c(),d._ko_property_writers&&d._ko_property_writers.hasfocus&&d._ko_property_writers.hasfocus(a)))}s.a.s(a,"focus",function(){d(m)});s.a.s(a,"focusin",function(){d(m)});s.a.s(a,"blur",function(){d(p)});s.a.s(a,"focusout",function(){d(p)})},update:function(a,e){var c=s.a.d(e());c?a.focus():a.blur();s.a.sa(a,c?"focusin":"focusout")}};
s.c["with"]={o:function(a){return function(){var e=a();return{"if":e,data:e,templateEngine:s.p.J}}},init:function(a,e){return s.c.template.init(a,s.c["with"].o(e))},update:function(a,e,c,d,f){return s.c.template.update(a,s.c["with"].o(e),c,d,f)}};s.i.B["with"]=p;s.f.C["with"]=m;s.c["if"]={o:function(a){return function(){return{"if":a(),templateEngine:s.p.J}}},init:function(a,e){return s.c.template.init(a,s.c["if"].o(e))},update:function(a,e,c,d,f){return s.c.template.update(a,s.c["if"].o(e),c,d,f)}};
s.i.B["if"]=p;s.f.C["if"]=m;s.c.ifnot={o:function(a){return function(){return{ifnot:a(),templateEngine:s.p.J}}},init:function(a,e){return s.c.template.init(a,s.c.ifnot.o(e))},update:function(a,e,c,d,f){return s.c.template.update(a,s.c.ifnot.o(e),c,d,f)}};s.i.B.ifnot=p;s.f.C.ifnot=m;
s.c.foreach={o:function(a){return function(){var e=s.a.d(a());return!e||typeof e.length=="number"?{foreach:e,templateEngine:s.p.J}:{foreach:e.data,includeDestroyed:e.includeDestroyed,afterAdd:e.afterAdd,beforeRemove:e.beforeRemove,afterRender:e.afterRender,templateEngine:s.p.J}}},init:function(a,e){return s.c.template.init(a,s.c.foreach.o(e))},update:function(a,e,c,d,f){return s.c.template.update(a,s.c.foreach.o(e),c,d,f)}};s.i.B.foreach=p;s.f.C.foreach=m;s.t=function(){};
s.t.prototype.renderTemplateSource=function(){b("Override renderTemplateSource in your ko.templateEngine subclass")};s.t.prototype.createJavaScriptEvaluatorBlock=function(){b("Override createJavaScriptEvaluatorBlock in your ko.templateEngine subclass")};
s.t.prototype.makeTemplateSource=function(a){if(typeof a=="string"){var e=document.getElementById(a);e||b(Error("Cannot find template with ID "+a));return new s.m.g(e)}else if(a.nodeType==1||a.nodeType==8)return new s.m.D(a);else b(Error("Unrecognised template type: "+a))};s.t.prototype.renderTemplate=function(a,e,c){return this.renderTemplateSource(this.makeTemplateSource(a),e,c)};s.t.prototype.isTemplateRewritten=function(a){return this.allowTemplateRewriting===p?m:this.V&&this.V[a]?m:this.makeTemplateSource(a).data("isRewritten")};
s.t.prototype.rewriteTemplate=function(a,e){var c=this.makeTemplateSource(a),d=e(c.text());c.text(d);c.data("isRewritten",m);if(typeof a=="string")this.V=this.V||{},this.V[a]=m};s.b("ko.templateEngine",s.t);
s.Y=function(){function a(a,c,e){for(var a=s.i.X(a),h=s.i.B,j=0;j<a.length;j++){var i=a[j].key;if(h.hasOwnProperty(i)){var k=h[i];typeof k==="function"?(i=k(a[j].value))&&b(Error(i)):k||b(Error("This template engine does not support the '"+i+"' binding within its templates"))}}a="ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {             return (function() { return { "+s.i.ia(a)+" } })()         })";return e.createJavaScriptEvaluatorBlock(a)+c}var e=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,
c=/<\!--\s*ko\b\s*([\s\S]*?)\s*--\>/g;return{eb:function(a,c){c.isTemplateRewritten(a)||c.rewriteTemplate(a,function(a){return s.Y.rb(a,c)})},rb:function(d,f){return d.replace(e,function(c,d,e,i,k,n,q){return a(q,d,f)}).replace(c,function(c,d){return a(d,"<\!-- ko --\>",f)})},Sa:function(a){return s.q.la(function(c,e){c.nextSibling&&s.xa(c.nextSibling,a,e)})}}}();s.b("ko.templateRewriting",s.Y);s.b("ko.templateRewriting.applyMemoizedBindingsToNextSibling",s.Y.Sa);s.m={};s.m.g=function(a){this.g=a};
s.m.g.prototype.text=function(){if(arguments.length==0)return this.g.tagName.toLowerCase()=="script"?this.g.text:this.g.innerHTML;else{var a=arguments[0];this.g.tagName.toLowerCase()=="script"?this.g.text=a:this.g.innerHTML=a}};s.m.g.prototype.data=function(a){if(arguments.length===1)return s.a.e.get(this.g,"templateSourceData_"+a);else s.a.e.set(this.g,"templateSourceData_"+a,arguments[1])};s.m.D=function(a){this.g=a};s.m.D.prototype=new s.m.g;
s.m.D.prototype.text=function(){if(arguments.length==0)return s.a.e.get(this.g,"__ko_anon_template__");else s.a.e.set(this.g,"__ko_anon_template__",arguments[0])};s.b("ko.templateSources",s.m);s.b("ko.templateSources.domElement",s.m.g);s.b("ko.templateSources.anonymousTemplate",s.m.D);
(function(){function a(a,c,e){for(var h=0;node=a[h];h++)node.parentNode===c&&(node.nodeType===1||node.nodeType===8)&&e(node)}function e(a,e,g,h,j){var j=j||{},i=j.templateEngine||c;s.Y.eb(g,i);g=i.renderTemplate(g,h,j);(typeof g.length!="number"||g.length>0&&typeof g[0].nodeType!="number")&&b("Template engine must return an array of DOM nodes");i=p;switch(e){case "replaceChildren":s.f.oa(a,g);i=m;break;case "replaceNode":s.a.Ja(a,g);i=m;break;case "ignoreTargetNode":break;default:b(Error("Unknown renderMode: "+
e))}i&&(s.ua(g,h),j.afterRender&&j.afterRender(g,h.$data));return g}var c;s.pa=function(a){a!=l&&!(a instanceof s.t)&&b("templateEngine must inherit from ko.templateEngine");c=a};s.ua=function(c,e){var g=s.a.F([],c),h=c.length>0?c[0].parentNode:o;a(g,h,function(a){s.wa(e,a)});a(g,h,function(a){s.q.Ra(a,[e])})};s.na=function(a,f,g,h,j){g=g||{};(g.templateEngine||c)==l&&b("Set a template engine before calling renderTemplate");j=j||"replaceChildren";if(h){var i=h.nodeType?h:h.length>0?h[0]:o;return new s.h(function(){var c=
f&&f instanceof s.G?f:new s.G(s.a.d(f)),n=typeof a=="function"?a(c.$data):a,c=e(h,j,n,c,g);j=="replaceNode"&&(h=c,i=h.nodeType?h:h.length>0?h[0]:o)},o,{disposeWhen:function(){return!i||!s.a.ga(i)},disposeWhenNodeIsRemoved:i&&j=="replaceNode"?i.parentNode:i})}else return s.q.la(function(c){s.na(a,f,g,c,"replaceNode")})};s.xb=function(a,c,g,h,j){function i(a,c){var d=j.ea(s.a.d(a));s.ua(c,d);g.afterRender&&g.afterRender(c,d.$data)}return new s.h(function(){var k=s.a.d(c)||[];typeof k.length=="undefined"&&
(k=[k]);k=s.a.$(k,function(a){return g.includeDestroyed||a===l||a===o||!s.a.d(a._destroy)});s.a.Ka(h,k,function(c){var f=typeof a=="function"?a(c):a;return e(o,"ignoreTargetNode",f,j.ea(s.a.d(c)),g)},g,i)},o,{disposeWhenNodeIsRemoved:h})};s.c.template={init:function(a,c){var e=s.a.d(c());typeof e!="string"&&!e.name&&a.nodeType==1&&((new s.m.D(a)).text(a.innerHTML),s.a.M(a));return{controlsDescendantBindings:m}},update:function(a,c,e,h,j){c=s.a.d(c());h=m;typeof c=="string"?e=c:(e=c.name,"if"in c&&
(h=h&&s.a.d(c["if"])),"ifnot"in c&&(h=h&&!s.a.d(c.ifnot)));var i=o;typeof c.foreach!="undefined"?i=s.xb(e||a,h&&c.foreach||[],c,a,j):h?(j=typeof c=="object"&&"data"in c?j.ea(s.a.d(c.data)):j,i=s.na(e||a,j,c,a)):s.f.ha(a);j=i;(c=s.a.e.get(a,"__ko__templateSubscriptionDomDataKey__"))&&typeof c.u=="function"&&c.u();s.a.e.set(a,"__ko__templateSubscriptionDomDataKey__",j)}};s.i.B.template=function(a){a=s.i.X(a);return a.length==1&&a[0].unknown?o:s.i.ob(a,"name")?o:"This template engine does not support anonymous templates nested within its templates"};
s.f.C.template=m})();s.b("ko.setTemplateEngine",s.pa);s.b("ko.renderTemplate",s.na);
s.a.L=function(a,e,c){if(c===l)return s.a.L(a,e,1)||s.a.L(a,e,10)||s.a.L(a,e,Number.MAX_VALUE);else{for(var a=a||[],e=e||[],d=a,f=e,g=[],h=0;h<=f.length;h++)g[h]=[];for(var h=0,j=Math.min(d.length,c);h<=j;h++)g[0][h]=h;h=1;for(j=Math.min(f.length,c);h<=j;h++)g[h][0]=h;for(var j=d.length,i,k=f.length,h=1;h<=j;h++){i=Math.max(1,h-c);for(var n=Math.min(k,h+c);i<=n;i++)g[i][h]=d[h-1]===f[i-1]?g[i-1][h-1]:Math.min(g[i-1][h]===l?Number.MAX_VALUE:g[i-1][h]+1,g[i][h-1]===l?Number.MAX_VALUE:g[i][h-1]+1)}c=
a.length;d=e.length;f=[];h=g[d][c];if(h===l)g=o;else{for(;c>0||d>0;){j=g[d][c];k=d>0?g[d-1][c]:h+1;n=c>0?g[d][c-1]:h+1;i=d>0&&c>0?g[d-1][c-1]:h+1;if(k===l||k<j-1)k=h+1;if(n===l||n<j-1)n=h+1;i<j-1&&(i=h+1);k<=n&&k<i?(f.push({status:"added",value:e[d-1]}),d--):(n<k&&n<i?f.push({status:"deleted",value:a[c-1]}):(f.push({status:"retained",value:a[c-1]}),d--),c--)}g=f.reverse()}return g}};s.b("ko.utils.compareArrays",s.a.L);
(function(){function a(a,c,d,f){var g=[],a=s.h(function(){var a=c(d)||[];g.length>0&&(s.a.Ja(g,a),f&&f(d,a));g.splice(0,g.length);s.a.F(g,a)},o,{disposeWhenNodeIsRemoved:a,disposeWhen:function(){return g.length==0||!s.a.ga(g[0])}});return{pb:g,h:a}}s.a.Ka=function(e,c,d,f,g){for(var c=c||[],f=f||{},h=s.a.e.get(e,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===l,j=s.a.e.get(e,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],i=s.a.aa(j,function(a){return a.Ta}),k=s.a.L(i,c),c=[],
n=0,q=[],i=[],t=o,r=0,v=k.length;r<v;r++)switch(k[r].status){case "retained":var x=j[n];c.push(x);x.T.length>0&&(t=x.T[x.T.length-1]);n++;break;case "deleted":j[n].h.u();s.a.n(j[n].T,function(a){q.push({element:a,index:r,value:k[r].value});t=a});n++;break;case "added":var x=k[r].value,w=a(e,d,x,g),u=w.pb;c.push({Ta:k[r].value,T:u,h:w.h});for(var w=0,y=u.length;w<y;w++){var z=u[w];i.push({element:z,index:r,value:k[r].value});t==o?s.f.ub(e,z):s.f.kb(e,z,t);t=z}g&&g(x,u)}s.a.n(q,function(a){s.I(a.element)});
d=p;if(!h){if(f.afterAdd)for(r=0;r<i.length;r++)f.afterAdd(i[r].element,i[r].index,i[r].value);if(f.beforeRemove){for(r=0;r<q.length;r++)f.beforeRemove(q[r].element,q[r].index,q[r].value);d=m}}d||s.a.n(q,function(a){s.removeNode(a.element)});s.a.e.set(e,"setDomNodeChildrenFromArrayMapping_lastMappingResult",c)}})();s.b("ko.utils.setDomNodeChildrenFromArrayMapping",s.a.Ka);s.p=function(){this.allowTemplateRewriting=p};s.p.prototype=new s.t;
s.p.prototype.renderTemplateSource=function(a){a=a.text();return s.a.W(a)};s.p.J=new s.p;s.pa(s.p.J);s.b("ko.nativeTemplateEngine",s.p);
(function(){s.ja=function(){var a=this.nb=function(){if(typeof jQuery=="undefined"||!jQuery.tmpl&&!jQuery.render)return 0;try{if(jQuery.render)return 3;if(jQuery.tmpl.tag.tmpl.open.toString().indexOf("__")>=0)return 2}catch(a){}return 1}();this.renderTemplateSource=function(c,f,g){g=g||{};a<2&&b(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));var h=c.data("precompiled");h||(h=c.text()||"",h="{{ko_with "+(a==2?"$item":"$ctx")+".koBindingContext}}"+
h+"{{/ko_with}}",h=jQuery.template(o,h),c.data("precompiled",h));c=[f.$data];f=jQuery.extend({koBindingContext:f},g.templateOptions);g=h;a<3?f=jQuery.tmpl(g,c,f):(f=jQuery.render(g,c,f),f=jQuery(s.a.W(f)));f.appendTo(document.createElement("div"));jQuery.fragments={};return f};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,c){document.write("<script type='text/html' id='"+a+"'>"+c+"<\/script>")};if(a>=2){var c=a==
2?"tmpl":"tmplSettings";jQuery[c].tag.ko_code={open:"__.push($1 || '');"};jQuery[c].tag.ko_with={open:"with($1) {",close:"} "}}};s.ja.prototype=new s.t;var a=new s.ja;a.nb>0&&s.pa(a);s.b("ko.jqueryTmplTemplateEngine",s.ja)})();
})(window);