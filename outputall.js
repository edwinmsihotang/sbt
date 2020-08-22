	!function(e,t){
		"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){
		if(!e.document)throw new Error("jQuery requires a window with a document");
		return t(e)
	}
	:t(e)
}
	("undefined"!=typeof window?window:this,function(w,e){
		function t(e,t){
		return t.toUpperCase()
	}
		var i=[],k=w.document,y=i.slice,d=i.concat,a=i.push,n=i.indexOf,o={
	}
		,r=o.toString,b=o.hasOwnProperty,$={
	}
		,f="2.2.4",T=function(e,t){
		return new T.fn.init(e,t)
	}
	,_=/^[\s﻿]+|[\s﻿]+$/g,s=/^-ms-/,l=/-([\da-z])/gi;
		function u(e){
		var t=!!e&&"length"in e&&e.length,i=T.type(e);
		return"function"!==i&&!T.isWindow(e)&&("array"===i||0===t||"number"==typeof t&&0<t&&t-1 in e)
	}
		T.fn=T.prototype={
			jquery:f,constructor:T,selector:"",length:0,toArray:function(){
			return y.call(this)
		}
			,get:function(e){
			return null!=e?e<0?this[e+this.length]:this[e]:y.call(this)
		}
			,pushStack:function(e){
			var t=T.merge(this.constructor(),e);
			return t.prevObject=this,t.context=this.context,t
		}
			,each:function(e){
			return T.each(this,e)
		}
			,map:function(i){
				return this.pushStack(T.map(this,function(e,t){
				return i.call(e,t,e)
			}
			))
		}
			,slice:function(){
			return this.pushStack(y.apply(this,arguments))
		}
			,first:function(){
			return this.eq(0)
		}
			,last:function(){
			return this.eq(-1)
		}
			,eq:function(e){
			var t=this.length,i=+e+(e<0?t:0);
			return this.pushStack(0<=i&&i<t?[this[i]]:[])
		}
			,end:function(){
			return this.prevObject||this.constructor()
		}
		,push:a,sort:i.sort,splice:i.splice
	}
		,T.extend=T.fn.extend=function(){
			var e,t,i,o,n,r,f=arguments[0]||{
		}
		,a=1,_=arguments.length,s=!1;
			for("boolean"==typeof f&&(s=f,f=arguments[a]||{
		}
			,a++),"object"==typeof f||T.isFunction(f)||(f={
		}
		),a===_&&(f=this,a--);
		a<_;
			a++)if(null!=(e=arguments[a]))for(t in e)i=f[t],f!==(o=e[t])&&(s&&o&&(T.isPlainObject(o)||(n=T.isArray(o)))?(r=n?(n=!1,i&&T.isArray(i)?i:[]):i&&T.isPlainObject(i)?i:{
		}
		,f[t]=T.extend(s,r,o)):void 0!==o&&(f[t]=o));
		return f
	}
		,T.extend({
			expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){
			throw new Error(e)
		}
			,noop:function(){
		}
			,isFunction:function(e){
			return"function"===T.type(e)
		}
			,isArray:Array.isArray,isWindow:function(e){
			return null!=e&&e===e.window
		}
			,isNumeric:function(e){
			var t=e&&e.toString();
			return!T.isArray(e)&&0<=t-parseFloat(t)+1
		}
			,isPlainObject:function(e){
			var t;
			if("object"!==T.type(e)||e.nodeType||T.isWindow(e))return!1;
				if(e.constructor&&!b.call(e,"constructor")&&!b.call(e.constructor.prototype||{
			}
			,"isPrototypeOf"))return!1;
			for(t in e);
			return void 0===t||b.call(e,t)
		}
			,isEmptyObject:function(e){
			var t;
			for(t in e)return!1;
			return!0
		}
			,type:function(e){
			return null==e?e+"":"object"==typeof e||"function"==typeof e?o[r.call(e)]||"object":typeof e
		}
			,globalEval:function(e){
			var t,i=eval;
			(e=T.trim(e))&&(1===e.indexOf("use strict")?((t=k.createElement("script")).text=e,k.head.appendChild(t).parentNode.removeChild(t)):i(e))
		}
			,camelCase:function(e){
			return e.replace(s,"ms-").replace(l,t)
		}
			,nodeName:function(e,t){
			return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
		}
			,each:function(e,t){
			var i,o=0;
			if(u(e))for(i=e.length;
			o<i&&!1!==t.call(e[o],o,e[o]);
			o++);
			else for(o in e)if(!1===t.call(e[o],o,e[o]))break;
			return e
		}
			,trim:function(e){
			return null==e?"":(e+"").replace(_,"")
		}
			,makeArray:function(e,t){
			var i=t||[];
			return null!=e&&(u(Object(e))?T.merge(i,"string"==typeof e?[e]:e):a.call(i,e)),i
		}
			,inArray:function(e,t,i){
			return null==t?-1:n.call(t,e,i)
		}
			,merge:function(e,t){
			for(var i=+t.length,o=0,n=e.length;
			o<i;
			o++)e[n++]=t[o];
			return e.length=n,e
		}
			,grep:function(e,t,i){
			for(var o=[],n=0,r=e.length,f=!i;
			n<r;
			n++)!t(e[n],n)!=f&&o.push(e[n]);
			return o
		}
			,map:function(e,t,i){
			var o,n,r=0,f=[];
			if(u(e))for(o=e.length;
			r<o;
			r++)null!=(n=t(e[r],r,i))&&f.push(n);
			else for(r in e)null!=(n=t(e[r],r,i))&&f.push(n);
			return d.apply([],f)
		}
			,guid:1,proxy:function(e,t){
			var i,o,n;
				return"string"==typeof t&&(i=e[t],t=e,e=i),T.isFunction(e)?(o=y.call(arguments,2),(n=function(){
				return e.apply(t||this,o.concat(y.call(arguments)))
			}
			).guid=e.guid=e.guid||T.guid++,n):void 0
		}
		,now:Date.now,support:$
	}
		),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=i[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){
		o["[object "+t+"]"]=t.toLowerCase()
	}
	);
		var c=function(i){
			function l(e,t,i){
			var o="0x"+t-65536;
			return o!=o||i?t:o<0?String.fromCharCode(65536+o):String.fromCharCode(o>>10|55296,1023&o|56320)
		}
			function n(){
			x()
		}
			var e,b,m,r,f,d,u,$,v,_,s,x,w,a,k,p,y,c,h,T="sizzle"+ +new Date,g=i.document,S=0,o=0,C=ne(),A=ne(),j=ne(),E=function(e,t){
			return e===t&&(s=!0),0
		}
			,N={
		}
			.hasOwnProperty,t=[],D=t.pop,L=t.push,q=t.push,H=t.slice,P=function(e,t){
			for(var i=0,o=e.length;
			i<o;
			i++)if(e[i]===t)return i;
			return-1
		}
			,M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",F="[\ \\t\\r\\n\\f]",O="(?:\\\\.|[\\w-]|[^\-\])+",B="\\["+F+"*("+O+")(?:"+F+"*([*^$|!~]?=)"+F+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+F+"*\\]",R=":("+O+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+B+")*)|.*)\\)|)",I=new RegExp(F+"+","g"),W=new RegExp("^"+F+"+|((?:^|[^\\\\])(?:\\\\.)*)"+F+"+$","g"),z=new RegExp("^"+F+"*,"+F+"*"),X=new RegExp("^"+F+"*([>+~]|"+F+")"+F+"*"),Y=new RegExp("="+F+"*([^\\]'\"]*?)"+F+"*\\]","g"),U=new RegExp(R),Q=new RegExp("^"+O+"$"),V={
			ID:new RegExp("^#("+O+")"),CLASS:new RegExp("^\\.("+O+")"),TAG:new RegExp("^("+O+"|[*])"),ATTR:new RegExp("^"+B),PSEUDO:new RegExp("^"+R),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+F+"*(even|odd|(([+-]|)(\\d*)n|)"+F+"*(?:([+-]|)"+F+"*(\\d+)|))"+F+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+F+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+F+"*((?:-\\d)?\\d*)"+F+"*\\)|)(?=[^-]|$)","i")
		}
			,G=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{
				]+\{
					\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=/'|\\/g,ie=new RegExp("\\\\([\\da-f]{
					1,6
				}
				"+F+"?|("+F+")|.)","ig");
					try{
					q.apply(t=H.call(g.childNodes),g.childNodes),t[g.childNodes.length].nodeType
				}
					catch(e){
						q={
							apply:t.length?function(e,t){
							L.apply(e,H.call(t))
						}
							:function(e,t){
							for(var i=e.length,o=0;
							e[i++]=t[o++];
							);
							e.length=i-1
						}
					}
				}
					function oe(e,t,i,o){
					var n,r,f,a,_,s,y,l,u=t&&t.ownerDocument,c=t?t.nodeType:9;
					if(i=i||[],"string"!=typeof e||!e||1!==c&&9!==c&&11!==c)return i;
						if(!o&&((t?t.ownerDocument||t:g)!==w&&x(t),t=t||w,k)){
							if(11!==c&&(s=Z.exec(e)))if(n=s[1]){
								if(9===c){
								if(!(f=t.getElementById(n)))return i;
								if(f.id===n)return i.push(f),i
							}
							else if(u&&(f=u.getElementById(n))&&h(t,f)&&f.id===n)return i.push(f),i
						}
							else{
							if(s[2])return q.apply(i,t.getElementsByTagName(e)),i;
							if((n=s[3])&&b.getElementsByClassName&&t.getElementsByClassName)return q.apply(i,t.getElementsByClassName(n)),i
						}
							if(b.qsa&&!j[e+" "]&&(!p||!p.test(e))){
							if(1!==c)u=t,l=e;
								else if("object"!==t.nodeName.toLowerCase()){
								for((a=t.getAttribute("id"))?a=a.replace(te,"\\$&"):t.setAttribute("id",a=T),r=(y=d(e)).length,_=Q.test(a)?"#"+a:"[id='"+a+"']";
								r--;
								)y[r]=_+" "+ue(y[r]);
								l=y.join(","),u=ee.test(e)&&ye(t.parentNode)||t
							}
								if(l)try{
								return q.apply(i,u.querySelectorAll(l)),i
							}
								catch(e){
							}
								finally{
								a===T&&t.removeAttribute("id")
							}
						}
					}
					return $(e.replace(W,"$1"),t,i,o)
				}
					function ne(){
					var i=[];
						function o(e,t){
						return i.push(e+" ")>m.cacheLength&&delete o[i.shift()],o[e+" "]=t
					}
					return o
				}
					function re(e){
					return e[T]=!0,e
				}
					function fe(e){
					var t=w.createElement("div");
						try{
						return!!e(t)
					}
						catch(e){
						return!1
					}
						finally{
						t.parentNode&&t.parentNode.removeChild(t),t=null
					}
				}
					function ae(e,t){
					for(var i=e.split("|"),o=i.length;
					o--;
					)m.attrHandle[i[o]]=t
				}
					function _e(e,t){
					var i=t&&e,o=i&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||1<<31)-(~e.sourceIndex||1<<31);
					if(o)return o;
					if(i)for(;
					i=i.nextSibling;
					)if(i===t)return-1;
					return e?1:-1
				}
					function se(f){
						return re(function(r){
							return r=+r,re(function(e,t){
							for(var i,o=f([],e.length,r),n=o.length;
							n--;
							)e[i=o[n]]&&(e[i]=!(t[i]=e[i]))
						}
						)
					}
					)
				}
					function ye(e){
					return e&&void 0!==e.getElementsByTagName&&e
				}
					for(e in b=oe.support={
				}
					,f=oe.isXML=function(e){
					var t=e&&(e.ownerDocument||e).documentElement;
					return!!t&&"HTML"!==t.nodeName
				}
					,x=oe.setDocument=function(e){
					var t,i,o=e?e.ownerDocument||e:g;
						return o!==w&&9===o.nodeType&&o.documentElement&&(a=(w=o).documentElement,k=!f(w),(i=w.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",n,!1):i.attachEvent&&i.attachEvent("onunload",n)),b.attributes=fe(function(e){
						return e.className="i",!e.getAttribute("className")
					}
						),b.getElementsByTagName=fe(function(e){
						return e.appendChild(w.createComment("")),!e.getElementsByTagName("*").length
					}
						),b.getElementsByClassName=K.test(w.getElementsByClassName),b.getById=fe(function(e){
						return a.appendChild(e).id=T,!w.getElementsByName||!w.getElementsByName(T).length
					}
						),b.getById?(m.find.ID=function(e,t){
							if(void 0!==t.getElementById&&k){
							var i=t.getElementById(e);
							return i?[i]:[]
						}
					}
						,m.filter.ID=function(e){
						var t=e.replace(ie,l);
							return function(e){
							return e.getAttribute("id")===t
						}
					}
						):(delete m.find.ID,m.filter.ID=function(e){
						var i=e.replace(ie,l);
							return function(e){
							var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");
							return t&&t.value===i
						}
					}
						),m.find.TAG=b.getElementsByTagName?function(e,t){
						return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):b.qsa?t.querySelectorAll(e):void 0
					}
						:function(e,t){
						var i,o=[],n=0,r=t.getElementsByTagName(e);
						if("*"!==e)return r;
						for(;
						i=r[n++];
						)1===i.nodeType&&o.push(i);
						return o
					}
						,m.find.CLASS=b.getElementsByClassName&&function(e,t){
						return void 0!==t.getElementsByClassName&&k?t.getElementsByClassName(e):void 0
					}
						,y=[],p=[],(b.qsa=K.test(w.querySelectorAll))&&(fe(function(e){
						a.appendChild(e).innerHTML="<a id='"+T+"'></a><select id='"+T+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&p.push("[*^$]="+F+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||p.push("\\["+F+"*(?:value|"+M+")"),e.querySelectorAll("[id~="+T+"-]").length||p.push("~="),e.querySelectorAll(":checked").length||p.push(":checked"),e.querySelectorAll("a#"+T+"+*").length||p.push(".#.+[+~]")
					}
						),fe(function(e){
						var t=w.createElement("input");
						t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&p.push("name"+F+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||p.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),p.push(",.*:")
					}
						)),(b.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&fe(function(e){
						b.disconnectedMatch=c.call(e,"div"),c.call(e,"[s!='']:x"),y.push("!=",R)
					}
						),p=p.length&&new RegExp(p.join("|")),y=y.length&&new RegExp(y.join("|")),t=K.test(a.compareDocumentPosition),h=t||K.test(a.contains)?function(e,t){
						var i=9===e.nodeType?e.documentElement:e,o=t&&t.parentNode;
						return e===o||!(!o||1!==o.nodeType||!(i.contains?i.contains(o):e.compareDocumentPosition&&16&e.compareDocumentPosition(o)))
					}
						:function(e,t){
						if(t)for(;
						t=t.parentNode;
						)if(t===e)return!0;
						return!1
					}
						,E=t?function(e,t){
						if(e===t)return s=!0,0;
						var i=!e.compareDocumentPosition-!t.compareDocumentPosition;
						return i||(1&(i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!b.sortDetached&&t.compareDocumentPosition(e)===i?e===w||e.ownerDocument===g&&h(g,e)?-1:t===w||t.ownerDocument===g&&h(g,t)?1:_?P(_,e)-P(_,t):0:4&i?-1:1)
					}
						:function(e,t){
						if(e===t)return s=!0,0;
						var i,o=0,n=e.parentNode,r=t.parentNode,f=[e],a=[t];
						if(!n||!r)return e===w?-1:t===w?1:n?-1:r?1:_?P(_,e)-P(_,t):0;
						if(n===r)return _e(e,t);
						for(i=e;
						i=i.parentNode;
						)f.unshift(i);
						for(i=t;
						i=i.parentNode;
						)a.unshift(i);
						for(;
						f[o]===a[o];
						)o++;
						return o?_e(f[o],a[o]):f[o]===g?-1:a[o]===g?1:0
					}
					),w
				}
					,oe.matches=function(e,t){
					return oe(e,null,null,t)
				}
					,oe.matchesSelector=function(e,t){
						if((e.ownerDocument||e)!==w&&x(e),t=t.replace(Y,"='$1']"),b.matchesSelector&&k&&!j[t+" "]&&(!y||!y.test(t))&&(!p||!p.test(t)))try{
						var i=c.call(e,t);
						if(i||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return i
					}
						catch(e){
					}
					return 0<oe(t,w,null,[e]).length
				}
					,oe.contains=function(e,t){
					return(e.ownerDocument||e)!==w&&x(e),h(e,t)
				}
					,oe.attr=function(e,t){
					(e.ownerDocument||e)!==w&&x(e);
					var i=m.attrHandle[t.toLowerCase()],o=i&&N.call(m.attrHandle,t.toLowerCase())?i(e,t,!k):void 0;
					return void 0!==o?o:b.attributes||!k?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null
				}
					,oe.error=function(e){
					throw new Error("Syntax error, unrecognized expression: "+e)
				}
					,oe.uniqueSort=function(e){
					var t,i=[],o=0,n=0;
						if(s=!b.detectDuplicates,_=!b.sortStable&&e.slice(0),e.sort(E),s){
						for(;
						t=e[n++];
						)t===e[n]&&(o=i.push(n));
						for(;
						o--;
						)e.splice(i[o],1)
					}
					return _=null,e
				}
					,r=oe.getText=function(e){
					var t,i="",o=0,n=e.nodeType;
						if(n){
							if(1===n||9===n||11===n){
							if("string"==typeof e.textContent)return e.textContent;
							for(e=e.firstChild;
							e;
							e=e.nextSibling)i+=r(e)
						}
						else if(3===n||4===n)return e.nodeValue
					}
					else for(;
					t=e[o++];
					)i+=r(t);
					return i
				}
					,(m=oe.selectors={
						cacheLength:50,createPseudo:re,match:V,attrHandle:{
					}
						,find:{
					}
						,relative:{
							">":{
							dir:"parentNode",first:!0
						}
							," ":{
							dir:"parentNode"
						}
							,"+":{
							dir:"previousSibling",first:!0
						}
							,"~":{
							dir:"previousSibling"
						}
					}
						,preFilter:{
							ATTR:function(e){
							return e[1]=e[1].replace(ie,l),e[3]=(e[3]||e[4]||e[5]||"").replace(ie,l),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
						}
							,CHILD:function(e){
							return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e
						}
							,PSEUDO:function(e){
							var t,i=!e[6]&&e[2];
							return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":i&&U.test(i)&&(t=d(i,!0))&&(t=i.indexOf(")",i.length-t)-i.length)&&(e[0]=e[0].slice(0,t),e[2]=i.slice(0,t)),e.slice(0,3))
						}
					}
						,filter:{
							TAG:function(e){
							var t=e.replace(ie,l).toLowerCase();
								return"*"===e?function(){
								return!0
							}
								:function(e){
								return e.nodeName&&e.nodeName.toLowerCase()===t
							}
						}
							,CLASS:function(e){
							var t=C[e+" "];
								return t||(t=new RegExp("(^|"+F+")"+e+"("+F+"|$)"))&&C(e,function(e){
								return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")
							}
							)
						}
							,ATTR:function(i,o,n){
								return function(e){
								var t=oe.attr(e,i);
								return null==t?"!="===o:!o||(t+="","="===o?t===n:"!="===o?t!==n:"^="===o?n&&0===t.indexOf(n):"*="===o?n&&-1<t.indexOf(n):"$="===o?n&&t.slice(-n.length)===n:"~="===o?-1<(" "+t.replace(I," ")+" ").indexOf(n):"|="===o&&(t===n||t.slice(0,n.length+1)===n+"-"))
							}
						}
							,CHILD:function(b,e,t,d,$){
							var p="nth"!==b.slice(0,3),h="last"!==b.slice(-4),g="of-type"===e;
								return 1===d&&0===$?function(e){
								return!!e.parentNode
							}
								:function(e,t,i){
								var o,n,r,f,a,_,s=p!=h?"nextSibling":"previousSibling",y=e.parentNode,l=g&&e.nodeName.toLowerCase(),u=!i&&!g,c=!1;
									if(y){
										if(p){
										for(;
										s;
											){
											for(f=e;
											f=f[s];
											)if(g?f.nodeName.toLowerCase()===l:1===f.nodeType)return!1;
											_=s="only"===b&&!_&&"nextSibling"
										}
										return!0
									}
										if(_=[h?y.firstChild:y.lastChild],h&&u){
											for(c=(a=(o=(n=(r=(f=y)[T]||(f[T]={
										}
											))[f.uniqueID]||(r[f.uniqueID]={
										}
										))[b]||[])[0]===S&&o[1])&&o[2],f=a&&y.childNodes[a];
										f=++a&&f&&f[s]||(c=a=0)||_.pop();
											)if(1===f.nodeType&&++c&&f===e){
											n[b]=[S,a,c];
											break
										}
									}
										else if(u&&(c=a=(o=(n=(r=(f=e)[T]||(f[T]={
									}
										))[f.uniqueID]||(r[f.uniqueID]={
									}
									))[b]||[])[0]===S&&o[1]),!1===c)for(;
										(f=++a&&f&&f[s]||(c=a=0)||_.pop())&&((g?f.nodeName.toLowerCase()!==l:1!==f.nodeType)||!++c||(u&&((n=(r=f[T]||(f[T]={
									}
										))[f.uniqueID]||(r[f.uniqueID]={
									}
									))[b]=[S,c]),f!==e));
									);
									return(c-=$)===d||c%d==0&&0<=c/d
								}
							}
						}
							,PSEUDO:function(e,r){
							var t,f=m.pseudos[e]||m.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);
								return f[T]?f(r):1<f.length?(t=[e,e,"",r],m.setFilters.hasOwnProperty(e.toLowerCase())?re(function(e,t){
								for(var i,o=f(e,r),n=o.length;
								n--;
								)e[i=P(e,o[n])]=!(t[i]=o[n])
							}
								):function(e){
								return f(e,0,t)
							}
							):f
						}
					}
						,pseudos:{
							not:re(function(e){
							var o=[],n=[],a=u(e.replace(W,"$1"));
								return a[T]?re(function(e,t,i,o){
								for(var n,r=a(e,null,o,[]),f=e.length;
								f--;
								)(n=r[f])&&(e[f]=!(t[f]=n))
							}
								):function(e,t,i){
								return o[0]=e,a(o,null,i,n),o[0]=null,!n.pop()
							}
						}
							),has:re(function(t){
								return function(e){
								return 0<oe(t,e).length
							}
						}
							),contains:re(function(t){
								return t=t.replace(ie,l),function(e){
								return-1<(e.textContent||e.innerText||r(e)).indexOf(t)
							}
						}
							),lang:re(function(i){
								return Q.test(i||"")||oe.error("unsupported lang: "+i),i=i.replace(ie,l).toLowerCase(),function(e){
								var t;
									do{
									if(t=k?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===i||0===t.indexOf(i+"-")
								}
								while((e=e.parentNode)&&1===e.nodeType);
								return!1
							}
						}
							),target:function(e){
							var t=i.location&&i.location.hash;
							return t&&t.slice(1)===e.id
						}
							,root:function(e){
							return e===a
						}
							,focus:function(e){
							return e===w.activeElement&&(!w.hasFocus||w.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
						}
							,enabled:function(e){
							return!1===e.disabled
						}
							,disabled:function(e){
							return!0===e.disabled
						}
							,checked:function(e){
							var t=e.nodeName.toLowerCase();
							return"input"===t&&!!e.checked||"option"===t&&!!e.selected
						}
							,selected:function(e){
							return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected
						}
							,empty:function(e){
							for(e=e.firstChild;
							e;
							e=e.nextSibling)if(e.nodeType<6)return!1;
							return!0
						}
							,parent:function(e){
							return!m.pseudos.empty(e)
						}
							,header:function(e){
							return J.test(e.nodeName)
						}
							,input:function(e){
							return G.test(e.nodeName)
						}
							,button:function(e){
							var t=e.nodeName.toLowerCase();
							return"input"===t&&"button"===e.type||"button"===t
						}
							,text:function(e){
							var t;
							return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())
						}
							,first:se(function(){
							return[0]
						}
							),last:se(function(e,t){
							return[t-1]
						}
							),eq:se(function(e,t,i){
							return[i<0?i+t:i]
						}
							),even:se(function(e,t){
							for(var i=0;
							i<t;
							i+=2)e.push(i);
							return e
						}
							),odd:se(function(e,t){
							for(var i=1;
							i<t;
							i+=2)e.push(i);
							return e
						}
							),lt:se(function(e,t,i){
							for(var o=i<0?i+t:i;
							0<=--o;
							)e.push(o);
							return e
						}
							),gt:se(function(e,t,i){
							for(var o=i<0?i+t:i;
							++o<t;
							)e.push(o);
							return e
						}
						)
					}
				}
					).pseudos.nth=m.pseudos.eq,{
					radio:!0,checkbox:!0,file:!0,password:!0,image:!0
				}
					)m.pseudos[e]=function(t){
						return function(e){
						return"input"===e.nodeName.toLowerCase()&&e.type===t
					}
				}
				(e);
					for(e in{
					submit:!0,reset:!0
				}
					)m.pseudos[e]=function(i){
						return function(e){
						var t=e.nodeName.toLowerCase();
						return("input"===t||"button"===t)&&e.type===i
					}
				}
				(e);
					function le(){
				}
					function ue(e){
					for(var t=0,i=e.length,o="";
					t<i;
					t++)o+=e[t].value;
					return o
				}
					function ce(a,e,t){
					var _=e.dir,s=t&&"parentNode"===_,y=o++;
						return e.first?function(e,t,i){
						for(;
						e=e[_];
						)if(1===e.nodeType||s)return a(e,t,i)
					}
						:function(e,t,i){
						var o,n,r,f=[S,y];
							if(i){
							for(;
							e=e[_];
							)if((1===e.nodeType||s)&&a(e,t,i))return!0
						}
						else for(;
						e=e[_];
							)if(1===e.nodeType||s){
								if((o=(n=(r=e[T]||(e[T]={
							}
								))[e.uniqueID]||(r[e.uniqueID]={
							}
							))[_])&&o[0]===S&&o[1]===y)return f[2]=o[2];
							if((n[_]=f)[2]=a(e,t,i))return!0
						}
					}
				}
					function be(n){
						return 1<n.length?function(e,t,i){
						for(var o=n.length;
						o--;
						)if(!n[o](e,t,i))return!1;
						return!0
					}
					:n[0]
				}
					function de(e,t,i,o,n){
					for(var r,f=[],a=0,_=e.length,s=null!=t;
					a<_;
					a++)(r=e[a])&&(i&&!i(r,o,n)||(f.push(r),s&&t.push(a)));
					return f
				}
					function $e(c,b,d,$,p,e){
						return $&&!$[T]&&($=$e($)),p&&!p[T]&&(p=$e(p,e)),re(function(e,t,i,o){
							var n,r,f,a=[],_=[],s=t.length,y=e||function(e,t,i){
							for(var o=0,n=t.length;
							o<n;
							o++)oe(e,t[o],i);
							return i
						}
						(b||"*",i.nodeType?[i]:i,[]),l=!c||!e&&b?y:de(y,a,c,i,o),u=d?p||(e?c:s||$)?[]:t:l;
						if(d&&d(l,u,i,o),$)for(n=de(u,_),$(n,[],i,o),r=n.length;
						r--;
						)(f=n[r])&&(u[_[r]]=!(l[_[r]]=f));
							if(e){
								if(p||c){
									if(p){
									for(n=[],r=u.length;
									r--;
									)(f=u[r])&&n.push(l[r]=f);
									p(null,u=[],n,o)
								}
								for(r=u.length;
								r--;
								)(f=u[r])&&-1<(n=p?P(e,f):a[r])&&(e[n]=!(t[n]=f))
							}
						}
						else u=de(u===t?u.splice(s,u.length):u),p?p(null,t,u,o):q.apply(t,u)
					}
					)
				}
					function pe($,p){
						function e(e,t,i,o,n){
						var r,f,a,_=0,s="0",y=e&&[],l=[],u=v,c=e||g&&m.find.TAG("*",n),b=S+=null==u?1:Math.random()||.1,d=c.length;
						for(n&&(v=t===w||t||n);
						s!==d&&null!=(r=c[s]);
							s++){
								if(g&&r){
								for(f=0,t||r.ownerDocument===w||(x(r),i=!k);
								a=$[f++];
									)if(a(r,t||w,i)){
									o.push(r);
									break
								}
								n&&(S=b)
							}
							h&&((r=!a&&r)&&_--,e&&y.push(r))
						}
							if(_+=s,h&&s!==_){
							for(f=0;
							a=p[f++];
							)a(y,l,t,i);
								if(e){
								if(0<_)for(;
								s--;
								)y[s]||l[s]||(l[s]=D.call(o));
								l=de(l)
							}
							q.apply(o,l),n&&!e&&0<l.length&&1<_+p.length&&oe.uniqueSort(o)
						}
						return n&&(S=b,v=u),y
					}
					var h=0<p.length,g=0<$.length;
					return h?re(e):e
				}
					return le.prototype=m.filters=m.pseudos,m.setFilters=new le,d=oe.tokenize=function(e,t){
					var i,o,n,r,f,a,_,s=A[e+" "];
					if(s)return t?0:s.slice(0);
					for(f=e,a=[],_=m.preFilter;
					f;
						){
							for(r in i&&!(o=z.exec(f))||(o&&(f=f.slice(o[0].length)||f),a.push(n=[])),i=!1,(o=X.exec(f))&&(i=o.shift(),n.push({
							value:i,type:o[0].replace(W," ")
						}
							),f=f.slice(i.length)),m.filter)!(o=V[r].exec(f))||_[r]&&!(o=_[r](o))||(i=o.shift(),n.push({
							value:i,type:r,matches:o
						}
						),f=f.slice(i.length));
						if(!i)break
					}
					return t?f.length:f?oe.error(e):A(e,a).slice(0)
				}
					,u=oe.compile=function(e,t){
					var i,o=[],n=[],r=j[e+" "];
						if(!r){
						for(i=(t=t||d(e)).length;
						i--;
							)(r=function e(t){
								for(var n,i,o,r=t.length,f=m.relative[t[0].type],a=f||m.relative[" "],_=f?1:0,s=ce(function(e){
								return e===n
							}
								,a,!0),y=ce(function(e){
								return-1<P(n,e)
							}
								,a,!0),l=[function(e,t,i){
								var o=!f&&(i||t!==v)||((n=t).nodeType?s:y)(e,t,i);
								return n=null,o
							}
							];
							_<r;
							_++)if(i=m.relative[t[_].type])l=[ce(be(l),i)];
								else{
									if((i=m.filter[t[_].type].apply(null,t[_].matches))[T]){
									for(o=++_;
									o<r&&!m.relative[t[o].type];
									o++);
										return $e(1<_&&be(l),1<_&&ue(t.slice(0,_-1).concat({
										value:" "===t[_-2].type?"*":""
									}
									)).replace(W,"$1"),i,_<o&&e(t.slice(_,o)),o<r&&e(t=t.slice(o)),o<r&&ue(t))
								}
								l.push(i)
							}
							return be(l)
						}
						(t[i]))[T]?o.push(r):n.push(r);
						(r=j(e,pe(n,o))).selector=e
					}
					return r
				}
					,$=oe.select=function(e,t,i,o){
					var n,r,f,a,_,s="function"==typeof e&&e,y=!o&&d(e=s.selector||e);
						if(i=i||[],1===y.length){
							if(2<(r=y[0]=y[0].slice(0)).length&&"ID"===(f=r[0]).type&&b.getById&&9===t.nodeType&&k&&m.relative[r[1].type]){
							if(!(t=(m.find.ID(f.matches[0].replace(ie,l),t)||[])[0]))return i;
							s&&(t=t.parentNode),e=e.slice(r.shift().value.length)
						}
						for(n=V.needsContext.test(e)?0:r.length;
						n--&&(f=r[n],!m.relative[a=f.type]);
							)if((_=m.find[a])&&(o=_(f.matches[0].replace(ie,l),ee.test(r[0].type)&&ye(t.parentNode)||t))){
							if(r.splice(n,1),!(e=o.length&&ue(r)))return q.apply(i,o),i;
							break
						}
					}
					return(s||u(e,y))(o,t,!k,i,!t||ee.test(e)&&ye(t.parentNode)||t),i
				}
					,b.sortStable=T.split("").sort(E).join("")===T,b.detectDuplicates=!!s,x(),b.sortDetached=fe(function(e){
					return 1&e.compareDocumentPosition(w.createElement("div"))
				}
					),fe(function(e){
					return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")
				}
					)||ae("type|href|height|width",function(e,t,i){
					return i?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)
				}
					),b.attributes&&fe(function(e){
					return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")
				}
					)||ae("value",function(e,t,i){
					return i||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue
				}
					),fe(function(e){
					return null==e.getAttribute("disabled")
				}
					)||ae(M,function(e,t,i){
					var o;
					return i?void 0:!0===e[t]?t.toLowerCase():(o=e.getAttributeNode(t))&&o.specified?o.value:null
				}
				),oe
			}
			(w);
			T.find=c,T.expr=c.selectors,T.expr[":"]=T.expr.pseudos,T.uniqueSort=T.unique=c.uniqueSort,T.text=c.getText,T.isXMLDoc=c.isXML,T.contains=c.contains;
				function p(e,t,i){
				for(var o=[],n=void 0!==i;
				(e=e[t])&&9!==e.nodeType;
					)if(1===e.nodeType){
					if(n&&T(e).is(i))break;
					o.push(e)
				}
				return o
			}
				function h(e,t){
				for(var i=[];
				e;
				e=e.nextSibling)1===e.nodeType&&e!==t&&i.push(e);
				return i
			}
			var g=T.expr.match.needsContext,m=/^<([\w-]+)\s*\/(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;
				function x(e,i,o){
					if(T.isFunction(i))return T.grep(e,function(e,t){
					return!!i.call(e,t,e)!==o
				}
				);
					if(i.nodeType)return T.grep(e,function(e){
					return e===i!==o
				}
				);
					if("string"==typeof i){
					if(v.test(i))return T.filter(i,e,o);
					i=T.filter(i,e)
				}
					return T.grep(e,function(e){
					return-1<n.call(i,e)!==o
				}
				)
			}
				T.filter=function(e,t,i){
				var o=t[0];
					return i&&(e=":not("+e+")"),1===t.length&&1===o.nodeType?T.find.matchesSelector(o,e)?[o]:[]:T.find.matches(e,T.grep(t,function(e){
					return 1===e.nodeType
				}
				))
			}
				,T.fn.extend({
					find:function(e){
					var t,i=this.length,o=[],n=this;
						if("string"!=typeof e)return this.pushStack(T(e).filter(function(){
						for(t=0;
						t<i;
						t++)if(T.contains(n[t],this))return!0
					}
					));
					for(t=0;
					t<i;
					t++)T.find(e,n[t],o);
					return(o=this.pushStack(1<i?T.unique(o):o)).selector=this.selector?this.selector+" "+e:e,o
				}
					,filter:function(e){
					return this.pushStack(x(this,e||[],!1))
				}
					,not:function(e){
					return this.pushStack(x(this,e||[],!0))
				}
					,is:function(e){
					return!!x(this,"string"==typeof e&&g.test(e)?T(e):e||[],!1).length
				}
			}
			);
			var S,C=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
				(T.fn.init=function(e,t,i){
				var o,n;
				if(!e)return this;
				if(i=i||S,"string"!=typeof e)return e.nodeType?(this.context=this[0]=e,this.length=1,this):T.isFunction(e)?void 0!==i.ready?i.ready(e):e(T):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),T.makeArray(e,this));
				if(!(o="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:C.exec(e))||!o[1]&&t)return!t||t.jquery?(t||i).find(e):this.constructor(t).find(e);
					if(o[1]){
					if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(o[1],t&&t.nodeType?t.ownerDocument||t:k,!0)),m.test(o[1])&&T.isPlainObject(t))for(o in t)T.isFunction(this[o])?this[o](t[o]):this.attr(o,t[o]);
					return this
				}
				return(n=k.getElementById(o[2]))&&n.parentNode&&(this.length=1,this[0]=n),this.context=k,this.selector=e,this
			}
			).prototype=T.fn,S=T(k);
				var A=/^(?:parents|prev(?:Until|All))/,j={
				children:!0,contents:!0,next:!0,prev:!0
			};
				function E(e,t){
				for(;
				(e=e[t])&&1!==e.nodeType;
				);
				return e
			}
				T.fn.extend({
					has:function(e){
					var t=T(e,this),i=t.length;
						return this.filter(function(){
						for(var e=0;
						e<i;
						e++)if(T.contains(this,t[e]))return!0
					}
					)
				}
					,closest:function(e,t){
					for(var i,o=0,n=this.length,r=[],f=g.test(e)||"string"!=typeof e?T(e,t||this.context):0;
					o<n;
					o++)for(i=this[o];
					i&&i!==t;
						i=i.parentNode)if(i.nodeType<11&&(f?-1<f.index(i):1===i.nodeType&&T.find.matchesSelector(i,e))){
						r.push(i);
						break
					}
					return this.pushStack(1<r.length?T.uniqueSort(r):r)
				}
					,index:function(e){
					return e?"string"==typeof e?n.call(T(e),this[0]):n.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
				}
					,add:function(e,t){
					return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))
				}
					,addBack:function(e){
					return this.add(null==e?this.prevObject:this.prevObject.filter(e))
				}
			}
				),T.each({
					parent:function(e){
					var t=e.parentNode;
					return t&&11!==t.nodeType?t:null
				}
					,parents:function(e){
					return p(e,"parentNode")
				}
					,parentsUntil:function(e,t,i){
					return p(e,"parentNode",i)
				}
					,next:function(e){
					return E(e,"nextSibling")
				}
					,prev:function(e){
					return E(e,"previousSibling")
				}
					,nextAll:function(e){
					return p(e,"nextSibling")
				}
					,prevAll:function(e){
					return p(e,"previousSibling")
				}
					,nextUntil:function(e,t,i){
					return p(e,"nextSibling",i)
				}
					,prevUntil:function(e,t,i){
					return p(e,"previousSibling",i)
				}
					,siblings:function(e){
						return h((e.parentNode||{
					}
					).firstChild,e)
				}
					,children:function(e){
					return h(e.firstChild)
				}
					,contents:function(e){
					return e.contentDocument||T.merge([],e.childNodes)
				}
			}
				,function(o,n){
					T.fn[o]=function(e,t){
					var i=T.map(this,n,e);
					return"Until"!==o.slice(-5)&&(t=e),t&&"string"==typeof t&&(i=T.filter(t,i)),1<this.length&&(j[o]||T.uniqueSort(i),A.test(o)&&i.reverse()),this.pushStack(i)
				}
			}
			);
			var N,D=/\S+/g;
				function L(){
				k.removeEventListener("DOMContentLoaded",L),w.removeEventListener("load",L),T.ready()
			}
				T.Callbacks=function(o){
				var e,i;
					o="string"==typeof o?(e=o,i={
				}
					,T.each(e.match(D)||[],function(e,t){
					i[t]=!0
				}
					),i):T.extend({
				}
				,o);
					function n(){
					for(a=o.once,f=r=!0;
					s.length;
					y=-1)for(t=s.shift();
					++y<_.length;
					)!1===_[y].apply(t[0],t[1])&&o.stopOnFalse&&(y=_.length,t=!1);
					o.memory||(t=!1),r=!1,a&&(_=t?[]:"")
				}
					var r,t,f,a,_=[],s=[],y=-1,l={
						add:function(){
							return _&&(t&&!r&&(y=_.length-1,s.push(t)),function i(e){
								T.each(e,function(e,t){
								T.isFunction(t)?o.unique&&l.has(t)||_.push(t):t&&t.length&&"string"!==T.type(t)&&i(t)
							}
							)
						}
						(arguments),t&&!r&&n()),this
					}
						,remove:function(){
							return T.each(arguments,function(e,t){
							for(var i;
							-1<(i=T.inArray(t,_,i));
							)_.splice(i,1),i<=y&&y--
						}
						),this
					}
						,has:function(e){
						return e?-1<T.inArray(e,_):0<_.length
					}
						,empty:function(){
						return _=_&&[],this
					}
						,disable:function(){
						return a=s=[],_=t="",this
					}
						,disabled:function(){
						return!_
					}
						,lock:function(){
						return a=s=[],t||(_=t=""),this
					}
						,locked:function(){
						return!!a
					}
						,fireWith:function(e,t){
						return a||(t=[e,(t=t||[]).slice?t.slice():t],s.push(t),r||n()),this
					}
						,fire:function(){
						return l.fireWith(this,arguments),this
					}
						,fired:function(){
						return!!f
					}
				};
				return l
			}
				,T.extend({
					Deferred:function(e){
						var r=[["resolve","done",T.Callbacks("once memory"),"resolved"],["reject","fail",T.Callbacks("once memory"),"rejected"],["notify","progress",T.Callbacks("memory")]],n="pending",f={
							state:function(){
							return n
						}
							,always:function(){
							return a.done(arguments).fail(arguments),this
						}
							,then:function(){
							var n=arguments;
								return T.Deferred(function(o){
									T.each(r,function(e,t){
									var i=T.isFunction(n[e])&&n[e];
										a[t[1]](function(){
										var e=i&&i.apply(this,arguments);
										e&&T.isFunction(e.promise)?e.promise().progress(o.notify).done(o.resolve).fail(o.reject):o[t[0]+"With"](this===f?o.promise():this,i?[e]:arguments)
									}
									)
								}
								),n=null
							}
							).promise()
						}
							,promise:function(e){
							return null!=e?T.extend(e,f):f
						}
					}
						,a={
					};
						return f.pipe=f.then,T.each(r,function(e,t){
						var i=t[2],o=t[3];
							f[t[1]]=i.add,o&&i.add(function(){
							n=o
						}
							,r[1^e][2].disable,r[2][2].lock),a[t[0]]=function(){
							return a[t[0]+"With"](this===a?f:this,arguments),this
						}
						,a[t[0]+"With"]=i.fireWith
					}
					),f.promise(a),e&&e.call(a,a),a
				}
					,when:function(e){
						function t(t,i,o){
							return function(e){
							i[t]=this,o[t]=1<arguments.length?y.call(arguments):e,o===n?s.notifyWith(i,o):--_||s.resolveWith(i,o)
						}
					}
					var n,i,o,r=0,f=y.call(arguments),a=f.length,_=1!==a||e&&T.isFunction(e.promise)?a:0,s=1===_?e:T.Deferred();
					if(1<a)for(n=new Array(a),i=new Array(a),o=new Array(a);
					r<a;
					r++)f[r]&&T.isFunction(f[r].promise)?f[r].promise().progress(t(r,i,n)).done(t(r,o,f)).fail(s.reject):--_;
					return _||s.resolveWith(o,f),s.promise()
				}
			}
				),T.fn.ready=function(e){
				return T.ready.promise().done(e),this
			}
				,T.extend({
					isReady:!1,readyWait:1,holdReady:function(e){
					e?T.readyWait++:T.ready(!0)
				}
					,ready:function(e){
					(!0===e?--T.readyWait:T.isReady)||((T.isReady=!0)!==e&&0<--T.readyWait||(N.resolveWith(k,[T]),T.fn.triggerHandler&&(T(k).triggerHandler("ready"),T(k).off("ready"))))
				}
			}
				),T.ready.promise=function(e){
				return N||(N=T.Deferred(),"complete"===k.readyState||"loading"!==k.readyState&&!k.documentElement.doScroll?w.setTimeout(T.ready):(k.addEventListener("DOMContentLoaded",L),w.addEventListener("load",L))),N.promise(e)
			}
			,T.ready.promise();
				function q(e){
				return 1===e.nodeType||9===e.nodeType||!+e.nodeType
			}
				var H=function(e,t,i,o,n,r,f){
				var a=0,_=e.length,s=null==i;
				if("object"===T.type(i))for(a in n=!0,i)H(e,t,a,i[a],!0,r,f);
					else if(void 0!==o&&(n=!0,T.isFunction(o)||(f=!0),s&&(t=f?(t.call(e,o),null):(s=t,function(e,t,i){
					return s.call(T(e),i)
				}
				)),t))for(;
				a<_;
				a++)t(e[a],i,f?o:o.call(e[a],a,t(e[a],i)));
				return n?e:s?t.call(e):_?t(e[0],i):r
			};
				function P(){
				this.expando=T.expando+P.uid++
			}
				P.uid=1,P.prototype={
					register:function(e,t){
						var i=t||{
					};
						return e.nodeType?e[this.expando]=i:Object.defineProperty(e,this.expando,{
						value:i,writable:!0,configurable:!0
					}
					),e[this.expando]
				}
					,cache:function(e){
						if(!q(e))return{
					};
					var t=e[this.expando];
						return t||(t={
					}
						,q(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{
						value:t,configurable:!0
					}
					))),t
				}
					,set:function(e,t,i){
					var o,n=this.cache(e);
					if("string"==typeof t)n[t]=i;
					else for(o in t)n[o]=t[o];
					return n
				}
					,get:function(e,t){
					return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][t]
				}
					,access:function(e,t,i){
					var o;
					return void 0===t||t&&"string"==typeof t&&void 0===i?void 0!==(o=this.get(e,t))?o:this.get(e,T.camelCase(t)):(this.set(e,t,i),void 0!==i?i:t)
				}
					,remove:function(e,t){
					var i,o,n,r=e[this.expando];
						if(void 0!==r){
						if(void 0===t)this.register(e);
							else{
							i=(o=T.isArray(t)?t.concat(t.map(T.camelCase)):(n=T.camelCase(t),t in r?[t,n]:(o=n)in r?[o]:o.match(D)||[])).length;
							for(;
							i--;
							)delete r[o[i]]
						}
						void 0!==t&&!T.isEmptyObject(r)||(e.nodeType?e[this.expando]=void 0:delete e[this.expando])
					}
				}
					,hasData:function(e){
					var t=e[this.expando];
					return void 0!==t&&!T.isEmptyObject(t)
				}
			};
				var M=new P,F=new P,O=/^(?:\{
				[\w\W]*\
			}
			|\[[\w\W]*\])$/,B=/[A-Z]/g;
				function R(e,t,i){
				var o;
					if(void 0===i&&1===e.nodeType)if(o="data-"+t.replace(B,"-$&").toLowerCase(),"string"==typeof(i=e.getAttribute(o))){
						try{
						i="true"===i||"false"!==i&&("null"===i?null:+i+""===i?+i:O.test(i)?T.parseJSON(i):i)
					}
						catch(e){
					}
					F.set(e,t,i)
				}
				else i=void 0;
				return i
			}
				T.extend({
					hasData:function(e){
					return F.hasData(e)||M.hasData(e)
				}
					,data:function(e,t,i){
					return F.access(e,t,i)
				}
					,removeData:function(e,t){
					F.remove(e,t)
				}
					,_data:function(e,t,i){
					return M.access(e,t,i)
				}
					,_removeData:function(e,t){
					M.remove(e,t)
				}
			}
				),T.fn.extend({
					data:function(o,e){
					var t,i,n,r=this[0],f=r&&r.attributes;
						if(void 0!==o)return"object"==typeof o?this.each(function(){
						F.set(this,o)
					}
						):H(this,function(t){
						var e,i;
							if(r&&void 0===t){
							if(void 0!==(e=F.get(r,o)||F.get(r,o.replace(B,"-$&").toLowerCase())))return e;
							if(i=T.camelCase(o),void 0!==(e=F.get(r,i)))return e;
							if(void 0!==(e=R(r,i,void 0)))return e
						}
							else i=T.camelCase(o),this.each(function(){
							var e=F.get(this,i);
							F.set(this,i,t),-1<o.indexOf("-")&&void 0!==e&&F.set(this,o,t)
						}
						)
					}
					,null,e,1<arguments.length,null,!0);
						if(this.length&&(n=F.get(r),1===r.nodeType&&!M.get(r,"hasDataAttrs"))){
						for(t=f.length;
						t--;
						)f[t]&&(0===(i=f[t].name).indexOf("data-")&&(i=T.camelCase(i.slice(5)),R(r,i,n[i])));
						M.set(r,"hasDataAttrs",!0)
					}
					return n
				}
					,removeData:function(e){
						return this.each(function(){
						F.remove(this,e)
					}
					)
				}
			}
				),T.extend({
					queue:function(e,t,i){
					var o;
					return e?(t=(t||"fx")+"queue",o=M.get(e,t),i&&(!o||T.isArray(i)?o=M.access(e,t,T.makeArray(i)):o.push(i)),o||[]):void 0
				}
					,dequeue:function(e,t){
					t=t||"fx";
					var i=T.queue(e,t),o=i.length,n=i.shift(),r=T._queueHooks(e,t);
						"inprogress"===n&&(n=i.shift(),o--),n&&("fx"===t&&i.unshift("inprogress"),delete r.stop,n.call(e,function(){
						T.dequeue(e,t)
					}
					,r)),!o&&r&&r.empty.fire()
				}
					,_queueHooks:function(e,t){
					var i=t+"queueHooks";
						return M.get(e,i)||M.access(e,i,{
							empty:T.Callbacks("once memory").add(function(){
							M.remove(e,[t+"queue",i])
						}
						)
					}
					)
				}
			}
				),T.fn.extend({
					queue:function(t,i){
					var e=2;
						return"string"!=typeof t&&(i=t,t="fx",e--),arguments.length<e?T.queue(this[0],t):void 0===i?this:this.each(function(){
						var e=T.queue(this,t,i);
						T._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&T.dequeue(this,t)
					}
					)
				}
					,dequeue:function(e){
						return this.each(function(){
						T.dequeue(this,e)
					}
					)
				}
					,clearQueue:function(e){
					return this.queue(e||"fx",[])
				}
					,promise:function(e,t){
						function i(){
						--n||r.resolveWith(f,[f])
					}
					var o,n=1,r=T.Deferred(),f=this,a=this.length;
					for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";
					a--;
					)(o=M.get(f[a],e+"queueHooks"))&&o.empty&&(n++,o.empty.add(i));
					return i(),r.promise(t)
				}
			}
			);
				function I(e,t){
				return e=t||e,"none"===T.css(e,"display")||!T.contains(e.ownerDocument,e)
			}
			var W=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,z=new RegExp("^(?:([+-])=|)("+W+")([a-z%]*)$","i"),X=["Top","Right","Bottom","Left"];
				function Y(e,t,i,o){
					var n,r=1,f=20,a=o?function(){
					return o.cur()
				}
					:function(){
					return T.css(e,t,"")
				}
				,_=a(),s=i&&i[3]||(T.cssNumber[t]?"":"px"),y=(T.cssNumber[t]||"px"!==s&&+_)&&z.exec(T.css(e,t));
				if(y&&y[3]!==s)for(s=s||y[3],i=i||[],y=+_||1;
				y/=r=r||".5",T.style(e,t,y+s),r!==(r=a()/_)&&1!==r&&--f;
				);
				return i&&(y=+y||+_||0,n=i[1]?y+(i[1]+1)*i[2]:+i[2],o&&(o.unit=s,o.start=y,o.end=n)),n
			}
				var U=/^(?:checkbox|radio)$/i,Q=/<([\w:-]+)/,V=/^$|\/(?:java|ecma)script/i,G={
				option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]
			};
				function J(e,t){
				var i=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[];
				return void 0===t||t&&T.nodeName(e,t)?T.merge([e],i):i
			}
				function K(e,t){
				for(var i=0,o=e.length;
				i<o;
				i++)M.set(e[i],"globalEval",!t||M.get(t[i],"globalEval"))
			}
			G.optgroup=G.option,G.tbody=G.tfoot=G.colgroup=G.caption=G.thead,G.th=G.td;
			var Z,ee,te=/<|&#?\w+;
			/;
				function ie(e,t,i,o,n){
				for(var r,f,a,_,s,y,l=t.createDocumentFragment(),u=[],c=0,b=e.length;
				c<b;
				c++)if((r=e[c])||0===r)if("object"===T.type(r))T.merge(u,r.nodeType?[r]:r);
					else if(te.test(r)){
					for(f=f||l.appendChild(t.createElement("div")),a=(Q.exec(r)||["",""])[1].toLowerCase(),_=G[a]||G._default,f.innerHTML=_[1]+T.htmlPrefilter(r)+_[2],y=_[0];
					y--;
					)f=f.lastChild;
					T.merge(u,f.childNodes),(f=l.firstChild).textContent=""
				}
				else u.push(t.createTextNode(r));
				for(l.textContent="",c=0;
				r=u[c++];
				)if(o&&-1<T.inArray(r,o))n&&n.push(r);
				else if(s=T.contains(r.ownerDocument,r),f=J(l.appendChild(r),"script"),s&&K(f),i)for(y=0;
				r=f[y++];
				)V.test(r.type||"")&&i.push(r);
				return l
			}
			Z=k.createDocumentFragment().appendChild(k.createElement("div")),(ee=k.createElement("input")).setAttribute("type","radio"),ee.setAttribute("checked","checked"),ee.setAttribute("name","t"),Z.appendChild(ee),$.checkClone=Z.cloneNode(!0).cloneNode(!0).lastChild.checked,Z.innerHTML="<textarea>x</textarea>",$.noCloneChecked=!!Z.cloneNode(!0).lastChild.defaultValue;
			var oe=/^key/,ne=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,re=/^([^.]*)(?:\.(.+)|)/;
				function fe(){
				return!0
			}
				function ae(){
				return!1
			}
				function _e(){
					try{
					return k.activeElement
				}
					catch(e){
				}
			}
				function se(e,t,i,o,n,r){
				var f,a;
					if("object"==typeof t){
					for(a in"string"!=typeof i&&(o=o||i,i=void 0),t)se(e,a,i,o,t[a],r);
					return e
				}
				if(null==o&&null==n?(n=i,o=i=void 0):null==n&&("string"==typeof i?(n=o,o=void 0):(n=o,o=i,i=void 0)),!1===n)n=ae;
				else if(!n)return e;
					return 1===r&&(f=n,(n=function(e){
					return T().off(e),f.apply(this,arguments)
				}
					).guid=f.guid||(f.guid=T.guid++)),e.each(function(){
					T.event.add(this,t,n,o,i)
				}
				)
			}
				T.event={
					global:{
				}
					,add:function(t,e,i,o,n){
					var r,f,a,_,s,y,l,u,c,b,d,$=M.get(t);
						if($)for(i.handler&&(i=(r=i).handler,n=r.selector),i.guid||(i.guid=T.guid++),(_=$.events)||(_=$.events={
					}
						),(f=$.handle)||(f=$.handle=function(e){
						return void 0!==T&&T.event.triggered!==e.type?T.event.dispatch.apply(t,arguments):void 0
					}
					),s=(e=(e||"").match(D)||[""]).length;
					s--;
						)c=d=(a=re.exec(e[s])||[])[1],b=(a[2]||"").split().sort(),c&&(l=T.event.special[c]||{
					}
						,c=(n?l.delegateType:l.bindType)||c,l=T.event.special[c]||{
					}
						,y=T.extend({
						type:c,origType:d,data:o,handler:i,guid:i.guid,selector:n,needsContext:n&&T.expr.match.needsContext.test(n),namespace:b.join()
					}
					,r),(u=_[c])||((u=_[c]=[]).delegateCount=0,l.setup&&!1!==l.setup.call(t,o,b,f)||t.addEventListener&&t.addEventListener(c,f)),l.add&&(l.add.call(t,y),y.handler.guid||(y.handler.guid=i.guid)),n?u.splice(u.delegateCount++,0,y):u.push(y),T.event.global[c]=!0)
				}
					,remove:function(e,t,i,o,n){
					var r,f,a,_,s,y,l,u,c,b,d,$=M.hasData(e)&&M.get(e);
						if($&&(_=$.events)){
						for(s=(t=(t||"").match(D)||[""]).length;
						s--;
							)if(c=d=(a=re.exec(t[s])||[])[1],b=(a[2]||"").split().sort(),c){
								for(l=T.event.special[c]||{
							}
							,u=_[c=(o?l.delegateType:l.bindType)||c]||[],a=a[2]&&new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"),f=r=u.length;
							r--;
							)y=u[r],!n&&d!==y.origType||i&&i.guid!==y.guid||a&&!a.test(y.namespace)||o&&o!==y.selector&&("**"!==o||!y.selector)||(u.splice(r,1),y.selector&&u.delegateCount--,l.remove&&l.remove.call(e,y));
							f&&!u.length&&(l.teardown&&!1!==l.teardown.call(e,b,$.handle)||T.removeEvent(e,c,$.handle),delete _[c])
						}
						else for(c in _)T.event.remove(e,c+t[s],i,o,!0);
						T.isEmptyObject(_)&&M.remove(e,"handle events")
					}
				}
					,dispatch:function(e){
					e=T.event.fix(e);
						var t,i,o,n,r,f=[],a=y.call(arguments),_=(M.get(this,"events")||{
					}
						)[e.type]||[],s=T.event.special[e.type]||{
					};
						if((a[0]=e).delegateTarget=this,!s.preDispatch||!1!==s.preDispatch.call(this,e)){
						for(f=T.event.handlers.call(this,e,_),t=0;
						(n=f[t++])&&!e.isPropagationStopped();
						)for(e.currentTarget=n.elem,i=0;
						(r=n.handlers[i++])&&!e.isImmediatePropagationStopped();
							)e.rnamespace&&!e.rnamespace.test(r.namespace)||(e.handleObj=r,e.data=r.data,void 0!==(o=((T.event.special[r.origType]||{
						}
						).handle||r.handler).apply(n.elem,a))&&!1===(e.result=o)&&(e.preventDefault(),e.stopPropagation()));
						return s.postDispatch&&s.postDispatch.call(this,e),e.result
					}
				}
					,handlers:function(e,t){
					var i,o,n,r,f=[],a=t.delegateCount,_=e.target;
					if(a&&_.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;
					_!==this;
						_=_.parentNode||this)if(1===_.nodeType&&(!0!==_.disabled||"click"!==e.type)){
						for(o=[],i=0;
						i<a;
						i++)void 0===o[n=(r=t[i]).selector+" "]&&(o[n]=r.needsContext?-1<T(n,this).index(_):T.find(n,this,null,[_]).length),o[n]&&o.push(r);
							o.length&&f.push({
							elem:_,handlers:o
						}
						)
					}
						return a<t.length&&f.push({
						elem:this,handlers:t.slice(a)
					}
					),f
				}
					,props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{
				}
					,keyHooks:{
						props:"char charCode key keyCode".split(" "),filter:function(e,t){
						return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
					}
				}
					,mouseHooks:{
						props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){
						var i,o,n,r=t.button;
						return null==e.pageX&&null!=t.clientX&&(o=(i=e.target.ownerDocument||k).documentElement,n=i.body,e.pageX=t.clientX+(o&&o.scrollLeft||n&&n.scrollLeft||0)-(o&&o.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(o&&o.scrollTop||n&&n.scrollTop||0)-(o&&o.clientTop||n&&n.clientTop||0)),e.which||void 0===r||(e.which=1&r?1:2&r?3:4&r?2:0),e
					}
				}
					,fix:function(e){
					if(e[T.expando])return e;
					var t,i,o,n=e.type,r=e,f=this.fixHooks[n];
						for(f||(this.fixHooks[n]=f=ne.test(n)?this.mouseHooks:oe.test(n)?this.keyHooks:{
					}
					),o=f.props?this.props.concat(f.props):this.props,e=new T.Event(r),t=o.length;
					t--;
					)e[i=o[t]]=r[i];
					return e.target||(e.target=k),3===e.target.nodeType&&(e.target=e.target.parentNode),f.filter?f.filter(e,r):e
				}
					,special:{
						load:{
						noBubble:!0
					}
						,focus:{
							trigger:function(){
							return this!==_e()&&this.focus?(this.focus(),!1):void 0
						}
						,delegateType:"focusin"
					}
						,blur:{
							trigger:function(){
							return this===_e()&&this.blur?(this.blur(),!1):void 0
						}
						,delegateType:"focusout"
					}
						,click:{
							trigger:function(){
							return"checkbox"===this.type&&this.click&&T.nodeName(this,"input")?(this.click(),!1):void 0
						}
							,_default:function(e){
							return T.nodeName(e.target,"a")
						}
					}
						,beforeunload:{
							postDispatch:function(e){
							void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)
						}
					}
				}
			}
				,T.removeEvent=function(e,t,i){
				e.removeEventListener&&e.removeEventListener(t,i)
			}
				,T.Event=function(e,t){
				return this instanceof T.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?fe:ae):this.type=e,t&&T.extend(this,t),this.timeStamp=e&&e.timeStamp||T.now(),void(this[T.expando]=!0)):new T.Event(e,t)
			}
				,T.Event.prototype={
					constructor:T.Event,isDefaultPrevented:ae,isPropagationStopped:ae,isImmediatePropagationStopped:ae,isSimulated:!1,preventDefault:function(){
					var e=this.originalEvent;
					this.isDefaultPrevented=fe,e&&!this.isSimulated&&e.preventDefault()
				}
					,stopPropagation:function(){
					var e=this.originalEvent;
					this.isPropagationStopped=fe,e&&!this.isSimulated&&e.stopPropagation()
				}
					,stopImmediatePropagation:function(){
					var e=this.originalEvent;
					this.isImmediatePropagationStopped=fe,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()
				}
			}
				,T.each({
				mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"
			}
				,function(e,n){
					T.event.special[e]={
						delegateType:n,bindType:n,handle:function(e){
						var t,i=e.relatedTarget,o=e.handleObj;
						return i&&(i===this||T.contains(this,i))||(e.type=o.origType,t=o.handler.apply(this,arguments),e.type=n),t
					}
				}
			}
				),T.fn.extend({
					on:function(e,t,i,o){
					return se(this,e,t,i,o)
				}
					,one:function(e,t,i,o){
					return se(this,e,t,i,o,1)
				}
					,off:function(e,t,i){
					var o,n;
					if(e&&e.preventDefault&&e.handleObj)return o=e.handleObj,T(e.delegateTarget).off(o.namespace?o.origType++o.namespace:o.origType,o.selector,o.handler),this;
						if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(i=t,t=void 0),!1===i&&(i=ae),this.each(function(){
						T.event.remove(this,e,i,t)
					}
					);
					for(n in e)this.off(n,t,e[n]);
					return this
				}
			}
			);
			var ye=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,le=/<script|<style|<link/i,ue=/checked\s*(?:[^=]|=\s*.checked.)/i,ce=/^true\/(.*)/,be=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
				function de(e,t){
				return T.nodeName(e,"table")&&T.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
			}
				function $e(e){
				return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e
			}
				function pe(e){
				var t=ce.exec(e.type);
				return t?e.type=t[1]:e.removeAttribute("type"),e
			}
				function he(e,t){
				var i,o,n,r,f,a,_,s;
					if(1===t.nodeType){
						if(M.hasData(e)&&(r=M.access(e),f=M.set(t,r),s=r.events))for(n in delete f.handle,f.events={
					}
					,s)for(i=0,o=s[n].length;
					i<o;
					i++)T.event.add(t,n,s[n][i]);
						F.hasData(e)&&(a=F.access(e),_=T.extend({
					}
					,a),F.set(t,_))
				}
			}
				function ge(i,o,n,r){
				o=d.apply([],o);
				var e,t,f,a,_,s,y=0,l=i.length,u=l-1,c=o[0],b=T.isFunction(c);
					if(b||1<l&&"string"==typeof c&&!$.checkClone&&ue.test(c))return i.each(function(e){
					var t=i.eq(e);
					b&&(o[0]=c.call(this,e,t.html())),ge(t,o,n,r)
				}
				);
					if(l&&(t=(e=ie(o,i[0].ownerDocument,!1,i,r)).firstChild,1===e.childNodes.length&&(e=t),t||r)){
					for(a=(f=T.map(J(e,"script"),$e)).length;
					y<l;
					y++)_=e,y!==u&&(_=T.clone(_,!0,!0),a&&T.merge(f,J(_,"script"))),n.call(i[y],_,y);
					if(a)for(s=f[f.length-1].ownerDocument,T.map(f,pe),y=0;
					y<a;
					y++)_=f[y],V.test(_.type||"")&&!M.access(_,"globalEval")&&T.contains(s,_)&&(_.src?T._evalUrl&&T._evalUrl(_.src):T.globalEval(_.textContent.replace(be,"")))
				}
				return i
			}
				function me(e,t,i){
				for(var o,n=t?T.filter(t,e):e,r=0;
				null!=(o=n[r]);
				r++)i||1!==o.nodeType||T.cleanData(J(o)),o.parentNode&&(i&&T.contains(o.ownerDocument,o)&&K(J(o,"script")),o.parentNode.removeChild(o));
				return e
			}
				T.extend({
					htmlPrefilter:function(e){
					return e.replace(ye,"<$1></$2>")
				}
					,clone:function(e,t,i){
					var o,n,r,f,a,_,s,y=e.cloneNode(!0),l=T.contains(e.ownerDocument,e);
					if(!($.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||T.isXMLDoc(e)))for(f=J(y),o=0,n=(r=J(e)).length;
					o<n;
					o++)a=r[o],_=f[o],"input"===(s=_.nodeName.toLowerCase())&&U.test(a.type)?_.checked=a.checked:"input"!==s&&"textarea"!==s||(_.defaultValue=a.defaultValue);
					if(t)if(i)for(r=r||J(e),f=f||J(y),o=0,n=r.length;
					o<n;
					o++)he(r[o],f[o]);
					else he(e,y);
					return 0<(f=J(y,"script")).length&&K(f,!l&&J(e,"script")),y
				}
					,cleanData:function(e){
					for(var t,i,o,n=T.event.special,r=0;
					void 0!==(i=e[r]);
						r++)if(q(i)){
							if(t=i[M.expando]){
							if(t.events)for(o in t.events)n[o]?T.event.remove(i,o):T.removeEvent(i,o,t.handle);
							i[M.expando]=void 0
						}
						i[F.expando]&&(i[F.expando]=void 0)
					}
				}
			}
				),T.fn.extend({
					domManip:ge,detach:function(e){
					return me(this,e,!0)
				}
					,remove:function(e){
					return me(this,e)
				}
					,text:function(e){
						return H(this,function(e){
							return void 0===e?T.text(this):this.empty().each(function(){
							1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)
						}
						)
					}
					,null,e,arguments.length)
				}
					,append:function(){
						return ge(this,arguments,function(e){
						1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||de(this,e).appendChild(e)
					}
					)
				}
					,prepend:function(){
						return ge(this,arguments,function(e){
						var t;
						1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(t=de(this,e)).insertBefore(e,t.firstChild)
					}
					)
				}
					,before:function(){
						return ge(this,arguments,function(e){
						this.parentNode&&this.parentNode.insertBefore(e,this)
					}
					)
				}
					,after:function(){
						return ge(this,arguments,function(e){
						this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
					}
					)
				}
					,empty:function(){
					for(var e,t=0;
					null!=(e=this[t]);
					t++)1===e.nodeType&&(T.cleanData(J(e,!1)),e.textContent="");
					return this
				}
					,clone:function(e,t){
						return e=null!=e&&e,t=null==t?e:t,this.map(function(){
						return T.clone(this,e,t)
					}
					)
				}
					,html:function(e){
						return H(this,function(e){
							var t=this[0]||{
						}
						,i=0,o=this.length;
						if(void 0===e&&1===t.nodeType)return t.innerHTML;
							if("string"==typeof e&&!le.test(e)&&!G[(Q.exec(e)||["",""])[1].toLowerCase()]){
							e=T.htmlPrefilter(e);
								try{
								for(;
								i<o;
									i++)1===(t=this[i]||{
								}
								).nodeType&&(T.cleanData(J(t,!1)),t.innerHTML=e);
								t=0
							}
								catch(e){
							}
						}
						t&&this.empty().append(e)
					}
					,null,e,arguments.length)
				}
					,replaceWith:function(){
					var i=[];
						return ge(this,arguments,function(e){
						var t=this.parentNode;
						T.inArray(this,i)<0&&(T.cleanData(J(this)),t&&t.replaceChild(e,this))
					}
					,i)
				}
			}
				),T.each({
				appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"
			}
				,function(e,f){
					T.fn[e]=function(e){
					for(var t,i=[],o=T(e),n=o.length-1,r=0;
					r<=n;
					r++)t=r===n?this:this.clone(!0),T(o[r])[f](t),a.apply(i,t.get());
					return this.pushStack(i)
				}
			}
			);
				var ve,xe={
				HTML:"block",BODY:"block"
			};
				function we(e,t){
				var i=T(t.createElement(e)).appendTo(t.body),o=T.css(i[0],"display");
				return i.detach(),o
			}
				function ke(e){
				var t=k,i=xe[e];
				return i||("none"!==(i=we(e,t))&&i||((t=(ve=(ve||T("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),t.close(),i=we(e,t),ve.detach()),xe[e]=i),i
			}
				function Te(e,t,i,o){
					var n,r,f={
				};
				for(r in t)f[r]=e.style[r],e.style[r]=t[r];
				for(r in n=i.apply(e,o||[]),t)e.style[r]=f[r];
				return n
			}
				var Se,Ce,Ae,je,Ee,Ne,De=/^margin/,Le=new RegExp("^("+W+")(?!px)[a-z%]+$","i"),qe=function(e){
				var t=e.ownerDocument.defaultView;
				return t&&t.opener||(t=w),t.getComputedStyle(e)
			}
			,He=k.documentElement;
				function Pe(){
				Ne.style.cssText="-webkit-box-sizing:border-box;
				-moz-box-sizing:border-box;
				box-sizing:border-box;
				position:relative;
				display:block;
				margin:auto;
				border:1px;
				padding:1px;
				top:1%;
				width:50%",Ne.innerHTML="",He.appendChild(Ee);
				var e=w.getComputedStyle(Ne);
				Se="1%"!==e.top,je="2px"===e.marginLeft,Ce="4px"===e.width,Ne.style.marginRight="50%",Ae="4px"===e.marginRight,He.removeChild(Ee)
			}
				function Me(e,t,i){
				var o,n,r,f,a=e.style;
				return""!==(f=(i=i||qe(e))?i.getPropertyValue(t)||i[t]:void 0)&&void 0!==f||T.contains(e.ownerDocument,e)||(f=T.style(e,t)),i&&!$.pixelMarginRight()&&Le.test(f)&&De.test(t)&&(o=a.width,n=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=f,f=i.width,a.width=o,a.minWidth=n,a.maxWidth=r),void 0!==f?f+"":f
			}
				function Fe(e,t){
					return{
						get:function(){
						return e()?void delete this.get:(this.get=t).apply(this,arguments)
					}
				}
			}
			Ee=k.createElement("div"),(Ne=k.createElement("div")).style&&(Ne.style.backgroundClip="content-box",Ne.cloneNode(!0).style.backgroundClip="",$.clearCloneStyle="content-box"===Ne.style.backgroundClip,Ee.style.cssText="border:0;
			width:8px;
			height:0;
			top:0;
			left:-9999px;
			padding:0;
			margin-top:1px;
				position:absolute",Ee.appendChild(Ne),T.extend($,{
					pixelPosition:function(){
					return Pe(),Se
				}
					,boxSizingReliable:function(){
					return null==Ce&&Pe(),Ce
				}
					,pixelMarginRight:function(){
					return null==Ce&&Pe(),Ae
				}
					,reliableMarginLeft:function(){
					return null==Ce&&Pe(),je
				}
					,reliableMarginRight:function(){
					var e,t=Ne.appendChild(k.createElement("div"));
					return t.style.cssText=Ne.style.cssText="-webkit-box-sizing:content-box;
					box-sizing:content-box;
					display:block;
					margin:0;
					border:0;
					padding:0",t.style.marginRight=t.style.width="0",Ne.style.width="1px",He.appendChild(Ee),e=!parseFloat(w.getComputedStyle(t).marginRight),He.removeChild(Ee),Ne.removeChild(t),e
				}
			}
			));
				var Oe=/^(none|table(?!-c[ea]).+)/,Be={
				position:"absolute",visibility:"hidden",display:"block"
			}
				,Re={
				letterSpacing:"0",fontWeight:"400"
			}
			,Ie=["Webkit","O","Moz","ms"],We=k.createElement("div").style;
				function ze(e){
				if(e in We)return e;
				for(var t=e[0].toUpperCase()+e.slice(1),i=Ie.length;
				i--;
				)if((e=Ie[i]+t)in We)return e
			}
				function Xe(e,t,i){
				var o=z.exec(t);
				return o?Math.max(0,o[2]-(i||0))+(o[3]||"px"):t
			}
				function Ye(e,t,i,o,n){
				for(var r=i===(o?"border":"content")?4:"width"===t?1:0,f=0;
				r<4;
				r+=2)"margin"===i&&(f+=T.css(e,i+X[r],!0,n)),o?("content"===i&&(f-=T.css(e,"padding"+X[r],!0,n)),"margin"!==i&&(f-=T.css(e,"border"+X[r]+"Width",!0,n))):(f+=T.css(e,"padding"+X[r],!0,n),"padding"!==i&&(f+=T.css(e,"border"+X[r]+"Width",!0,n)));
				return f
			}
				function Ue(e,t,i){
				var o=!0,n="width"===t?e.offsetWidth:e.offsetHeight,r=qe(e),f="border-box"===T.css(e,"boxSizing",!1,r);
					if(n<=0||null==n){
					if(((n=Me(e,t,r))<0||null==n)&&(n=e.style[t]),Le.test(n))return n;
					o=f&&($.boxSizingReliable()||n===e.style[t]),n=parseFloat(n)||0
				}
				return n+Ye(e,t,i||(f?"border":"content"),o,r)+"px"
			}
				function Qe(e,t){
				for(var i,o,n,r=[],f=0,a=e.length;
				f<a;
				f++)(o=e[f]).style&&(r[f]=M.get(o,"olddisplay"),i=o.style.display,t?(r[f]||"none"!==i||(o.style.display=""),""===o.style.display&&I(o)&&(r[f]=M.access(o,"olddisplay",ke(o.nodeName)))):(n=I(o),"none"===i&&n||M.set(o,"olddisplay",n?i:T.css(o,"display"))));
				for(f=0;
				f<a;
				f++)(o=e[f]).style&&(t&&"none"!==o.style.display&&""!==o.style.display||(o.style.display=t?r[f]||"":"none"));
				return e
			}
				function Ve(e,t,i,o,n){
				return new Ve.prototype.init(e,t,i,o,n)
			}
				T.extend({
					cssHooks:{
						opacity:{
							get:function(e,t){
								if(t){
								var i=Me(e,"opacity");
								return""===i?"1":i
							}
						}
					}
				}
					,cssNumber:{
					animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0
				}
					,cssProps:{
					float:"cssFloat"
				}
					,style:function(e,t,i,o){
						if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
						var n,r,f,a=T.camelCase(t),_=e.style;
						return t=T.cssProps[a]||(T.cssProps[a]=ze(a)||a),f=T.cssHooks[t]||T.cssHooks[a],void 0===i?f&&"get"in f&&void 0!==(n=f.get(e,!1,o))?n:_[t]:("string"===(r=typeof i)&&(n=z.exec(i))&&n[1]&&(i=Y(e,t,n),r="number"),void(null!=i&&i==i&&("number"===r&&(i+=n&&n[3]||(T.cssNumber[a]?"":"px")),$.clearCloneStyle||""!==i||0!==t.indexOf("background")||(_[t]="inherit"),f&&"set"in f&&void 0===(i=f.set(e,i,o))||(_[t]=i))))
					}
				}
					,css:function(e,t,i,o){
					var n,r,f,a=T.camelCase(t);
					return t=T.cssProps[a]||(T.cssProps[a]=ze(a)||a),(f=T.cssHooks[t]||T.cssHooks[a])&&"get"in f&&(n=f.get(e,!0,i)),void 0===n&&(n=Me(e,t,o)),"normal"===n&&t in Re&&(n=Re[t]),""===i||i?(r=parseFloat(n),!0===i||isFinite(r)?r||0:n):n
				}
			}
				),T.each(["height","width"],function(e,f){
					T.cssHooks[f]={
						get:function(e,t,i){
							return t?Oe.test(T.css(e,"display"))&&0===e.offsetWidth?Te(e,Be,function(){
							return Ue(e,f,i)
						}
						):Ue(e,f,i):void 0
					}
						,set:function(e,t,i){
						var o,n=i&&qe(e),r=i&&Ye(e,f,i,"border-box"===T.css(e,"boxSizing",!1,n),n);
						return r&&(o=z.exec(t))&&"px"!==(o[3]||"px")&&(e.style[f]=t,t=T.css(e,f)),Xe(0,t,r)
					}
				}
			}
				),T.cssHooks.marginLeft=Fe($.reliableMarginLeft,function(e,t){
					return t?(parseFloat(Me(e,"marginLeft"))||e.getBoundingClientRect().left-Te(e,{
					marginLeft:0
				}
					,function(){
					return e.getBoundingClientRect().left
				}
				))+"px":void 0
			}
				),T.cssHooks.marginRight=Fe($.reliableMarginRight,function(e,t){
					return t?Te(e,{
					display:"inline-block"
				}
				,Me,[e,"marginRight"]):void 0
			}
				),T.each({
				margin:"",padding:"",border:"Width"
			}
				,function(n,r){
					T.cssHooks[n+r]={
						expand:function(e){
							for(var t=0,i={
						}
						,o="string"==typeof e?e.split(" "):[e];
						t<4;
						t++)i[n+X[t]+r]=o[t]||o[t-2]||o[0];
						return i
					}
				}
				,De.test(n)||(T.cssHooks[n+r].set=Xe)
			}
				),T.fn.extend({
					css:function(e,t){
						return H(this,function(e,t,i){
							var o,n,r={
						}
						,f=0;
							if(T.isArray(t)){
							for(o=qe(e),n=t.length;
							f<n;
							f++)r[t[f]]=T.css(e,t[f],!1,o);
							return r
						}
						return void 0!==i?T.style(e,t,i):T.css(e,t)
					}
					,e,t,1<arguments.length)
				}
					,show:function(){
					return Qe(this,!0)
				}
					,hide:function(){
					return Qe(this)
				}
					,toggle:function(e){
						return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){
						I(this)?T(this).show():T(this).hide()
					}
					)
				}
			}
				),(T.Tween=Ve).prototype={
					constructor:Ve,init:function(e,t,i,o,n,r){
					this.elem=e,this.prop=i,this.easing=n||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=o,this.unit=r||(T.cssNumber[i]?"":"px")
				}
					,cur:function(){
					var e=Ve.propHooks[this.prop];
					return e&&e.get?e.get(this):Ve.propHooks._default.get(this)
				}
					,run:function(e){
					var t,i=Ve.propHooks[this.prop];
					return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):Ve.propHooks._default.set(this),this
				}
			}
				,Ve.prototype.init.prototype=Ve.prototype,Ve.propHooks={
					_default:{
						get:function(e){
						var t;
						return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=T.css(e.elem,e.prop,""))&&"auto"!==t?t:0
					}
						,set:function(e){
						T.fx.step[e.prop]?T.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[T.cssProps[e.prop]]&&!T.cssHooks[e.prop]?e.elem[e.prop]=e.now:T.style(e.elem,e.prop,e.now+e.unit)
					}
				}
			}
				,Ve.propHooks.scrollTop=Ve.propHooks.scrollLeft={
					set:function(e){
					e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
				}
			}
				,T.easing={
					linear:function(e){
					return e
				}
					,swing:function(e){
					return.5-Math.cos(e*Math.PI)/2
				}
				,_default:"swing"
			}
				,T.fx=Ve.prototype.init,T.fx.step={
			};
			var Ge,Je,Ke,Ze,et,tt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;
				function ot(){
					return w.setTimeout(function(){
					Ge=void 0
				}
				),Ge=T.now()
			}
				function nt(e,t){
					var i,o=0,n={
					height:e
				};
				for(t=t?1:0;
				o<4;
				o+=2-t)n["margin"+(i=X[o])]=n["padding"+i]=e;
				return t&&(n.opacity=n.width=e),n
			}
				function rt(e,t,i){
				for(var o,n=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),r=0,f=n.length;
				r<f;
				r++)if(o=n[r].call(i,t,e))return o
			}
				function ft(r,e,t){
					var i,f,o=0,n=ft.prefilters.length,a=T.Deferred().always(function(){
					delete _.elem
				}
					),_=function(){
					if(f)return!1;
					for(var e=Ge||ot(),t=Math.max(0,s.startTime+s.duration-e),i=1-(t/s.duration||0),o=0,n=s.tweens.length;
					o<n;
					o++)s.tweens[o].run(i);
					return a.notifyWith(r,[s,i,t]),i<1&&n?t:(a.resolveWith(r,[s]),!1)
				}
					,s=a.promise({
						elem:r,props:T.extend({
					}
						,e),opts:T.extend(!0,{
							specialEasing:{
						}
						,easing:T.easing._default
					}
						,t),originalProperties:e,originalOptions:t,startTime:Ge||ot(),duration:t.duration,tweens:[],createTween:function(e,t){
						var i=T.Tween(r,s.opts,e,t,s.opts.specialEasing[e]||s.opts.easing);
						return s.tweens.push(i),i
					}
						,stop:function(e){
						var t=0,i=e?s.tweens.length:0;
						if(f)return this;
						for(f=!0;
						t<i;
						t++)s.tweens[t].run(1);
						return e?(a.notifyWith(r,[s,1,0]),a.resolveWith(r,[s,e])):a.rejectWith(r,[s,e]),this
					}
				}
				),y=s.props;
					for(function(e,t){
					var i,o,n,r,f;
					for(i in e)if(n=t[o=T.camelCase(i)],r=e[i],T.isArray(r)&&(n=r[1],r=e[i]=r[0]),i!==o&&(e[o]=r,delete e[i]),(f=T.cssHooks[o])&&"expand"in f)for(i in r=f.expand(r),delete e[o],r)i in e||(e[i]=r[i],t[i]=n);
					else t[o]=n
				}
				(y,s.opts.specialEasing);
				o<n;
				o++)if(i=ft.prefilters[o].call(s,r,y,s.opts))return T.isFunction(i.stop)&&(T._queueHooks(s.elem,s.opts.queue).stop=T.proxy(i.stop,i)),i;
					return T.map(y,rt,s),T.isFunction(s.opts.start)&&s.opts.start.call(r,s),T.fx.timer(T.extend(_,{
					elem:r,anim:s,queue:s.opts.queue
				}
				)),s.progress(s.opts.progress).done(s.opts.done,s.opts.complete).fail(s.opts.fail).always(s.opts.always)
			}
				T.Animation=T.extend(ft,{
					tweeners:{
						"*":[function(e,t){
						var i=this.createTween(e,t);
						return Y(i.elem,e,z.exec(t),i),i
					}
					]
				}
					,tweener:function(e,t){
					for(var i,o=0,n=(e=T.isFunction(e)?(t=e,["*"]):e.match(D)).length;
					o<n;
					o++)i=e[o],ft.tweeners[i]=ft.tweeners[i]||[],ft.tweeners[i].unshift(t)
				}
					,prefilters:[function(t,e,i){
						var o,n,r,f,a,_,s,y=this,l={
					}
					,u=t.style,c=t.nodeType&&I(t),b=M.get(t,"fxshow");
						for(o in i.queue||(null==(a=T._queueHooks(t,"fx")).unqueued&&(a.unqueued=0,_=a.empty.fire,a.empty.fire=function(){
						a.unqueued||_()
					}
						),a.unqueued++,y.always(function(){
							y.always(function(){
							a.unqueued--,T.queue(t,"fx").length||a.empty.fire()
						}
						)
					}
						)),1===t.nodeType&&("height"in e||"width"in e)&&(i.overflow=[u.overflow,u.overflowX,u.overflowY],"inline"===("none"===(s=T.css(t,"display"))?M.get(t,"olddisplay")||ke(t.nodeName):s)&&"none"===T.css(t,"float")&&(u.display="inline-block")),i.overflow&&(u.overflow="hidden",y.always(function(){
						u.overflow=i.overflow[0],u.overflowX=i.overflow[1],u.overflowY=i.overflow[2]
					}
						)),e)if(n=e[o],tt.exec(n)){
							if(delete e[o],r=r||"toggle"===n,n===(c?"hide":"show")){
							if("show"!==n||!b||void 0===b[o])continue;
							c=!0
						}
						l[o]=b&&b[o]||T.style(t,o)
					}
					else s=void 0;
					if(T.isEmptyObject(l))"inline"===("none"===s?ke(t.nodeName):s)&&(u.display=s);
						else for(o in b?"hidden"in b&&(c=b.hidden):b=M.access(t,"fxshow",{
					}
						),r&&(b.hidden=!c),c?T(t).show():y.done(function(){
						T(t).hide()
					}
						),y.done(function(){
						var e;
						for(e in M.remove(t,"fxshow"),l)T.style(t,e,l[e])
					}
					),l)f=rt(c?b[o]:0,o,y),o in b||(b[o]=f.start,c&&(f.end=f.start,f.start="width"===o||"height"===o?1:0))
				}
					],prefilter:function(e,t){
					t?ft.prefilters.unshift(e):ft.prefilters.push(e)
				}
			}
				),T.speed=function(e,t,i){
					var o=e&&"object"==typeof e?T.extend({
				}
					,e):{
					complete:i||!i&&t||T.isFunction(e)&&e,duration:e,easing:i&&t||t&&!T.isFunction(t)&&t
				};
					return o.duration=T.fx.off?0:"number"==typeof o.duration?o.duration:o.duration in T.fx.speeds?T.fx.speeds[o.duration]:T.fx.speeds._default,null!=o.queue&&!0!==o.queue||(o.queue="fx"),o.old=o.complete,o.complete=function(){
					T.isFunction(o.old)&&o.old.call(this),o.queue&&T.dequeue(this,o.queue)
				}
				,o
			}
				,T.fn.extend({
					fadeTo:function(e,t,i,o){
						return this.filter(I).css("opacity",0).show().end().animate({
						opacity:t
					}
					,e,i,o)
				}
					,animate:function(t,e,i,o){
						function n(){
							var e=ft(this,T.extend({
						}
						,t),f);
						(r||M.get(this,"finish"))&&e.stop(!0)
					}
					var r=T.isEmptyObject(t),f=T.speed(e,i,o);
					return n.finish=n,r||!1===f.queue?this.each(n):this.queue(f.queue,n)
				}
					,stop:function(n,e,r){
						function f(e){
						var t=e.stop;
						delete e.stop,t(r)
					}
						return"string"!=typeof n&&(r=e,e=n,n=void 0),e&&!1!==n&&this.queue(n||"fx",[]),this.each(function(){
						var e=!0,t=null!=n&&n+"queueHooks",i=T.timers,o=M.get(this);
						if(t)o[t]&&o[t].stop&&f(o[t]);
						else for(t in o)o[t]&&o[t].stop&&it.test(t)&&f(o[t]);
						for(t=i.length;
						t--;
						)i[t].elem!==this||null!=n&&i[t].queue!==n||(i[t].anim.stop(r),e=!1,i.splice(t,1));
						!e&&r||T.dequeue(this,n)
					}
					)
				}
					,finish:function(f){
						return!1!==f&&(f=f||"fx"),this.each(function(){
						var e,t=M.get(this),i=t[f+"queue"],o=t[f+"queueHooks"],n=T.timers,r=i?i.length:0;
						for(t.finish=!0,T.queue(this,f,[]),o&&o.stop&&o.stop.call(this,!0),e=n.length;
						e--;
						)n[e].elem===this&&n[e].queue===f&&(n[e].anim.stop(!0),n.splice(e,1));
						for(e=0;
						e<r;
						e++)i[e]&&i[e].finish&&i[e].finish.call(this);
						delete t.finish
					}
					)
				}
			}
				),T.each(["toggle","show","hide"],function(e,o){
				var n=T.fn[o];
					T.fn[o]=function(e,t,i){
					return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(nt(o,!0),e,t,i)
				}
			}
				),T.each({
					slideDown:nt("show"),slideUp:nt("hide"),slideToggle:nt("toggle"),fadeIn:{
					opacity:"show"
				}
					,fadeOut:{
					opacity:"hide"
				}
					,fadeToggle:{
					opacity:"toggle"
				}
			}
				,function(e,o){
					T.fn[e]=function(e,t,i){
					return this.animate(o,e,t,i)
				}
			}
				),T.timers=[],T.fx.tick=function(){
				var e,t=0,i=T.timers;
				for(Ge=T.now();
				t<i.length;
				t++)(e=i[t])()||i[t]!==e||i.splice(t--,1);
				i.length||T.fx.stop(),Ge=void 0
			}
				,T.fx.timer=function(e){
				T.timers.push(e),e()?T.fx.start():T.timers.pop()
			}
				,T.fx.interval=13,T.fx.start=function(){
				Je=Je||w.setInterval(T.fx.tick,T.fx.interval)
			}
				,T.fx.stop=function(){
				w.clearInterval(Je),Je=null
			}
				,T.fx.speeds={
				slow:600,fast:200,_default:400
			}
				,T.fn.delay=function(o,e){
					return o=T.fx&&T.fx.speeds[o]||o,e=e||"fx",this.queue(e,function(e,t){
					var i=w.setTimeout(e,o);
						t.stop=function(){
						w.clearTimeout(i)
					}
				}
				)
			}
			,Ke=k.createElement("input"),Ze=k.createElement("select"),et=Ze.appendChild(k.createElement("option")),Ke.type="checkbox",$.checkOn=""!==Ke.value,$.optSelected=et.selected,Ze.disabled=!0,$.optDisabled=!et.disabled,(Ke=k.createElement("input")).value="t",Ke.type="radio",$.radioValue="t"===Ke.value;
			var at,_t=T.expr.attrHandle;
				T.fn.extend({
					attr:function(e,t){
					return H(this,T.attr,e,t,1<arguments.length)
				}
					,removeAttr:function(e){
						return this.each(function(){
						T.removeAttr(this,e)
					}
					)
				}
			}
				),T.extend({
					attr:function(e,t,i){
					var o,n,r=e.nodeType;
					if(3!==r&&8!==r&&2!==r)return void 0===e.getAttribute?T.prop(e,t,i):(1===r&&T.isXMLDoc(e)||(t=t.toLowerCase(),n=T.attrHooks[t]||(T.expr.match.bool.test(t)?at:void 0)),void 0!==i?null===i?void T.removeAttr(e,t):n&&"set"in n&&void 0!==(o=n.set(e,i,t))?o:(e.setAttribute(t,i+""),i):n&&"get"in n&&null!==(o=n.get(e,t))?o:null==(o=T.find.attr(e,t))?void 0:o)
				}
					,attrHooks:{
						type:{
							set:function(e,t){
								if(!$.radioValue&&"radio"===t&&T.nodeName(e,"input")){
								var i=e.value;
								return e.setAttribute("type",t),i&&(e.value=i),t
							}
						}
					}
				}
					,removeAttr:function(e,t){
					var i,o,n=0,r=t&&t.match(D);
					if(r&&1===e.nodeType)for(;
					i=r[n++];
					)o=T.propFix[i]||i,T.expr.match.bool.test(i)&&(e[o]=!1),e.removeAttribute(i)
				}
			}
				),at={
					set:function(e,t,i){
					return!1===t?T.removeAttr(e,i):e.setAttribute(i,i),i
				}
			}
				,T.each(T.expr.match.bool.source.match(/\w+/g),function(e,t){
				var r=_t[t]||T.find.attr;
					_t[t]=function(e,t,i){
					var o,n;
					return i||(n=_t[t],_t[t]=o,o=null!=r(e,t,i)?t.toLowerCase():null,_t[t]=n),o
				}
			}
			);
			var st=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;
				T.fn.extend({
					prop:function(e,t){
					return H(this,T.prop,e,t,1<arguments.length)
				}
					,removeProp:function(e){
						return this.each(function(){
						delete this[T.propFix[e]||e]
					}
					)
				}
			}
				),T.extend({
					prop:function(e,t,i){
					var o,n,r=e.nodeType;
					if(3!==r&&8!==r&&2!==r)return 1===r&&T.isXMLDoc(e)||(t=T.propFix[t]||t,n=T.propHooks[t]),void 0!==i?n&&"set"in n&&void 0!==(o=n.set(e,i,t))?o:e[t]=i:n&&"get"in n&&null!==(o=n.get(e,t))?o:e[t]
				}
					,propHooks:{
						tabIndex:{
							get:function(e){
							var t=T.find.attr(e,"tabindex");
							return t?parseInt(t,10):st.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1
						}
					}
				}
					,propFix:{
					for:"htmlFor",class:"className"
				}
			}
				),$.optSelected||(T.propHooks.selected={
					get:function(e){
					var t=e.parentNode;
					return t&&t.parentNode&&t.parentNode.selectedIndex,null
				}
					,set:function(e){
					var t=e.parentNode;
					t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)
				}
			}
				),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){
				T.propFix[this.toLowerCase()]=this
			}
			);
			var lt=/[\t\r\n\f]/g;
				function ut(e){
				return e.getAttribute&&e.getAttribute("class")||""
			}
				T.fn.extend({
					addClass:function(t){
					var e,i,o,n,r,f,a,_=0;
						if(T.isFunction(t))return this.each(function(e){
						T(this).addClass(t.call(this,e,ut(this)))
					}
					);
					if("string"==typeof t&&t)for(e=t.match(D)||[];
					i=this[_++];
						)if(n=ut(i),o=1===i.nodeType&&(" "+n+" ").replace(lt," ")){
						for(f=0;
						r=e[f++];
						)o.indexOf(" "+r+" ")<0&&(o+=r+" ");
						n!==(a=T.trim(o))&&i.setAttribute("class",a)
					}
					return this
				}
					,removeClass:function(t){
					var e,i,o,n,r,f,a,_=0;
						if(T.isFunction(t))return this.each(function(e){
						T(this).removeClass(t.call(this,e,ut(this)))
					}
					);
					if(!arguments.length)return this.attr("class","");
					if("string"==typeof t&&t)for(e=t.match(D)||[];
					i=this[_++];
						)if(n=ut(i),o=1===i.nodeType&&(" "+n+" ").replace(lt," ")){
						for(f=0;
						r=e[f++];
						)for(;
						-1<o.indexOf(" "+r+" ");
						)o=o.replace(" "+r+" "," ");
						n!==(a=T.trim(o))&&i.setAttribute("class",a)
					}
					return this
				}
					,toggleClass:function(n,t){
					var r=typeof n;
						return"boolean"==typeof t&&"string"==r?t?this.addClass(n):this.removeClass(n):T.isFunction(n)?this.each(function(e){
						T(this).toggleClass(n.call(this,e,ut(this),t),t)
					}
						):this.each(function(){
						var e,t,i,o;
						if("string"==r)for(t=0,i=T(this),o=n.match(D)||[];
						e=o[t++];
						)i.hasClass(e)?i.removeClass(e):i.addClass(e);
						else void 0!==n&&"boolean"!=r||((e=ut(this))&&M.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==n&&M.get(this,"__className__")||""))
					}
					)
				}
					,hasClass:function(e){
					for(var t,i=0,o=" "+e+" ";
					t=this[i++];
					)if(1===t.nodeType&&-1<(" "+ut(t)+" ").replace(lt," ").indexOf(o))return!0;
					return!1
				}
			}
			);
			var ct=/\r/g,bt=/[ \t\r\n\f]+/g;
				T.fn.extend({
					val:function(i){
					var o,e,n,t=this[0];
						return arguments.length?(n=T.isFunction(i),this.each(function(e){
						var t;
							1===this.nodeType&&(null==(t=n?i.call(this,e,T(this).val()):i)?t="":"number"==typeof t?t+="":T.isArray(t)&&(t=T.map(t,function(e){
							return null==e?"":e+""
						}
						)),(o=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in o&&void 0!==o.set(this,t,"value")||(this.value=t))
					}
					)):t?(o=T.valHooks[t.type]||T.valHooks[t.nodeName.toLowerCase()])&&"get"in o&&void 0!==(e=o.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(ct,""):null==e?"":e:void 0
				}
			}
				),T.extend({
					valHooks:{
						option:{
							get:function(e){
							var t=T.find.attr(e,"value");
							return null!=t?t:T.trim(T.text(e)).replace(bt," ")
						}
					}
						,select:{
							get:function(e){
							for(var t,i,o=e.options,n=e.selectedIndex,r="select-one"===e.type||n<0,f=r?null:[],a=r?n+1:o.length,_=n<0?a:r?n:0;
							_<a;
								_++)if(((i=o[_]).selected||_===n)&&($.optDisabled?!i.disabled:null===i.getAttribute("disabled"))&&(!i.parentNode.disabled||!T.nodeName(i.parentNode,"optgroup"))){
								if(t=T(i).val(),r)return t;
								f.push(t)
							}
							return f
						}
							,set:function(e,t){
							for(var i,o,n=e.options,r=T.makeArray(t),f=n.length;
							f--;
							)((o=n[f]).selected=-1<T.inArray(T.valHooks.option.get(o),r))&&(i=!0);
							return i||(e.selectedIndex=-1),r
						}
					}
				}
			}
				),T.each(["radio","checkbox"],function(){
					T.valHooks[this]={
						set:function(e,t){
						return T.isArray(t)?e.checked=-1<T.inArray(T(e).val(),t):void 0
					}
				}
					,$.checkOn||(T.valHooks[this].get=function(e){
					return null===e.getAttribute("value")?"on":e.value
				}
				)
			}
			);
			var dt=/^(?:focusinfocus|focusoutblur)$/;
				T.extend(T.event,{
					trigger:function(e,t,i,o){
					var n,r,f,a,_,s,y=[i||k],l=b.call(e,"type")?e.type:e,u=b.call(e,"namespace")?e.namespace.split():[],c=r=i=i||k;
						if(3!==i.nodeType&&8!==i.nodeType&&!dt.test(l+T.event.triggered)&&(-1<l.indexOf()&&(l=(u=l.split()).shift(),u.sort()),a=l.indexOf(":")<0&&"on"+l,(e=e[T.expando]?e:new T.Event(l,"object"==typeof e&&e)).isTrigger=o?2:3,e.namespace=u.join(),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+u.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:T.makeArray(t,[e]),s=T.event.special[l]||{
					}
						,o||!s.trigger||!1!==s.trigger.apply(i,t))){
							if(!o&&!s.noBubble&&!T.isWindow(i)){
							for(f=s.delegateType||l,dt.test(f+l)||(c=c.parentNode);
							c;
							c=c.parentNode)y.push(c),r=c;
							r===(i.ownerDocument||k)&&y.push(r.defaultView||r.parentWindow||w)
						}
						for(n=0;
						(c=y[n++])&&!e.isPropagationStopped();
							)e.type=1<n?f:s.bindType||l,(_=(M.get(c,"events")||{
						}
						)[e.type]&&M.get(c,"handle"))&&_.apply(c,t),(_=a&&c[a])&&_.apply&&q(c)&&(e.result=_.apply(c,t),!1===e.result&&e.preventDefault());
						return e.type=l,o||e.isDefaultPrevented()||s._default&&!1!==s._default.apply(y.pop(),t)||!q(i)||a&&T.isFunction(i[l])&&!T.isWindow(i)&&((r=i[a])&&(i[a]=null),i[T.event.triggered=l](),T.event.triggered=void 0,r&&(i[a]=r)),e.result
					}
				}
					,simulate:function(e,t,i){
						var o=T.extend(new T.Event,i,{
						type:e,isSimulated:!0
					}
					);
					T.event.trigger(o,null,t)
				}
			}
				),T.fn.extend({
					trigger:function(e,t){
						return this.each(function(){
						T.event.trigger(e,t,this)
					}
					)
				}
					,triggerHandler:function(e,t){
					var i=this[0];
					return i?T.event.trigger(e,t,i,!0):void 0
				}
			}
				),T.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,i){
					T.fn[i]=function(e,t){
					return 0<arguments.length?this.on(i,null,e,t):this.trigger(i)
				}
			}
				),T.fn.extend({
					hover:function(e,t){
					return this.mouseenter(e).mouseleave(t||e)
				}
			}
				),$.focusin="onfocusin"in w,$.focusin||T.each({
				focus:"focusin",blur:"focusout"
			}
				,function(i,o){
					function n(e){
					T.event.simulate(o,e.target,T.event.fix(e))
				}
					T.event.special[o]={
						setup:function(){
						var e=this.ownerDocument||this,t=M.access(e,o);
						t||e.addEventListener(i,n,!0),M.access(e,o,(t||0)+1)
					}
						,teardown:function(){
						var e=this.ownerDocument||this,t=M.access(e,o)-1;
						t?M.access(e,o,t):(e.removeEventListener(i,n,!0),M.remove(e,o))
					}
				}
			}
			);
			var $t=w.location,pt=T.now(),ht=/\?/;
				T.parseJSON=function(e){
				return JSON.parse(e+"")
			}
				,T.parseXML=function(e){
				var t;
				if(!e||"string"!=typeof e)return null;
					try{
					t=(new w.DOMParser).parseFromString(e,"text/xml")
				}
					catch(e){
					t=void 0
				}
				return t&&!t.getElementsByTagName("parsererror").length||T.error("Invalid XML: "+e),t
			};
				var gt=/#.*$/,mt=/([?&])_=[^&]*/,vt=/^(.*?):[ \t]*([^\r\n]*)$/gm,xt=/^(?:GET|HEAD)$/,wt=/^\/\//,kt={
			}
				,Tt={
			}
			,St="*/".concat("*"),Ct=k.createElement("a");
				function At(r){
					return function(e,t){
					"string"!=typeof e&&(t=e,e="*");
					var i,o=0,n=e.toLowerCase().match(D)||[];
					if(T.isFunction(t))for(;
					i=n[o++];
					)"+"===i[0]?(i=i.slice(1)||"*",(r[i]=r[i]||[]).unshift(t)):(r[i]=r[i]||[]).push(t)
				}
			}
				function jt(t,n,r,f){
					var a={
				}
				,_=t===Tt;
					function s(e){
					var o;
						return a[e]=!0,T.each(t[e]||[],function(e,t){
						var i=t(n,r,f);
						return"string"!=typeof i||_||a[i]?_?!(o=i):void 0:(n.dataTypes.unshift(i),s(i),!1)
					}
					),o
				}
				return s(n.dataTypes[0])||!a["*"]&&s("*")
			}
				function Et(e,t){
					var i,o,n=T.ajaxSettings.flatOptions||{
				};
					for(i in t)void 0!==t[i]&&((n[i]?e:o=o||{
				}
				)[i]=t[i]);
				return o&&T.extend(!0,e,o),e
			}
				Ct.href=$t.href,T.extend({
					active:0,lastModified:{
				}
					,etag:{
				}
					,ajaxSettings:{
					url:$t.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test($t.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded;
						 charset=UTF-8",accepts:{
						"*":St,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"
					}
						,contents:{
						xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/
					}
						,responseFields:{
						xml:"responseXML",text:"responseText",json:"responseJSON"
					}
						,converters:{
						"* text":String,"text html":!0,"text json":T.parseJSON,"text xml":T.parseXML
					}
						,flatOptions:{
						url:!0,context:!0
					}
				}
					,ajaxSetup:function(e,t){
					return t?Et(Et(e,T.ajaxSettings),t):Et(T.ajaxSettings,e)
				}
					,ajaxPrefilter:At(kt),ajaxTransport:At(Tt),ajax:function(e,t){
						"object"==typeof e&&(t=e,e=void 0),t=t||{
					};
						var y,l,u,i,c,o,b,n,d=T.ajaxSetup({
					}
						,t),$=d.context||d,p=d.context&&($.nodeType||$.jquery)?T($):T.event,h=T.Deferred(),g=T.Callbacks("once memory"),m=d.statusCode||{
					}
						,r={
					}
						,f={
					}
						,v=0,a="canceled",x={
							readyState:0,getResponseHeader:function(e){
							var t;
								if(2===v){
									if(!i)for(i={
								};
								t=vt.exec(u);
								)i[t[1].toLowerCase()]=t[2];
								t=i[e.toLowerCase()]
							}
							return null==t?null:t
						}
							,getAllResponseHeaders:function(){
							return 2===v?u:null
						}
							,setRequestHeader:function(e,t){
							var i=e.toLowerCase();
							return v||(e=f[i]=f[i]||e,r[e]=t),this
						}
							,overrideMimeType:function(e){
							return v||(d.mimeType=e),this
						}
							,statusCode:function(e){
							var t;
							if(e)if(v<2)for(t in e)m[t]=[m[t],e[t]];
							else x.always(e[x.status]);
							return this
						}
							,abort:function(e){
							var t=e||a;
							return y&&y.abort(t),_(0,t),this
						}
					};
						if(h.promise(x).complete=g.add,x.success=x.done,x.error=x.fail,d.url=((e||d.url||$t.href)+"").replace(gt,"").replace(wt,$t.protocol+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=T.trim(d.dataType||"*").toLowerCase().match(D)||[""],null==d.crossDomain){
						o=k.createElement("a");
							try{
							o.href=d.url,o.href,d.crossDomain=Ct.protocol+"//"+Ct.host!=o.protocol+"//"+o.host
						}
							catch(e){
							d.crossDomain=!0
						}
					}
					if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=T.param(d.data,d.traditional)),jt(kt,d,t,x),2===v)return x;
					for(n in(b=T.event&&d.global)&&0==T.active++&&T.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!xt.test(d.type),l=d.url,d.hasContent||(d.data&&(l=d.url+=(ht.test(l)?"&":"?")+d.data,delete d.data),!1===d.cache&&(d.url=mt.test(l)?l.replace(mt,"$1_="+pt++):l+(ht.test(l)?"&":"?")+"_="+pt++)),d.ifModified&&(T.lastModified[l]&&x.setRequestHeader("If-Modified-Since",T.lastModified[l]),T.etag[l]&&x.setRequestHeader("If-None-Match",T.etag[l])),(d.data&&d.hasContent&&!1!==d.contentType||t.contentType)&&x.setRequestHeader("Content-Type",d.contentType),x.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+St+";
					 q=0.01":""):d.accepts["*"]),d.headers)x.setRequestHeader(n,d.headers[n]);
					if(d.beforeSend&&(!1===d.beforeSend.call($,x,d)||2===v))return x.abort();
						for(n in a="abort",{
						success:1,error:1,complete:1
					}
					)x[n](d[n]);
						if(y=jt(Tt,d,t,x)){
						if(x.readyState=1,b&&p.trigger("ajaxSend",[x,d]),2===v)return x;
							d.async&&0<d.timeout&&(c=w.setTimeout(function(){
							x.abort("timeout")
						}
						,d.timeout));
							try{
							v=1,y.send(r,_)
						}
							catch(e){
							if(!(v<2))throw e;
							_(-1,e)
						}
					}
					else _(-1,"No Transport");
						function _(e,t,i,o){
						var n,r,f,a,_,s=t;
							2!==v&&(v=2,c&&w.clearTimeout(c),y=void 0,u=o||"",x.readyState=0<e?4:0,n=200<=e&&e<300||304===e,i&&(a=function(e,t,i){
							for(var o,n,r,f,a=e.contents,_=e.dataTypes;
							"*"===_[0];
							)_.shift(),void 0===o&&(o=e.mimeType||t.getResponseHeader("Content-Type"));
								if(o)for(n in a)if(a[n]&&a[n].test(o)){
								_.unshift(n);
								break
							}
							if(_[0]in i)r=_[0];
								else{
									for(n in i){
										if(!_[0]||e.converters[n+" "+_[0]]){
										r=n;
										break
									}
									f=f||n
								}
								r=r||f
							}
							return r?(r!==_[0]&&_.unshift(r),i[r]):void 0
						}
							(d,x,i)),a=function(e,t,i,o){
								var n,r,f,a,_,s={
							}
							,y=e.dataTypes.slice();
							if(y[1])for(f in e.converters)s[f.toLowerCase()]=e.converters[f];
							for(r=y.shift();
							r;
							)if(e.responseFields[r]&&(i[e.responseFields[r]]=t),!_&&o&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),_=r,r=y.shift())if("*"===r)r=_;
								else if("*"!==_&&_!==r){
									if(!(f=s[_+" "+r]||s["* "+r]))for(n in s)if((a=n.split(" "))[1]===r&&(f=s[_+" "+a[0]]||s["* "+a[0]])){
									!0===f?f=s[n]:!0!==s[n]&&(r=a[0],y.unshift(a[1]));
									break
								}
								if(!0!==f)if(f&&e.throws)t=f(t);
									else try{
									t=f(t)
								}
									catch(e){
										return{
										state:"parsererror",error:f?e:"No conversion from "+_+" to "+r
									}
								}
							}
								return{
								state:"success",data:t
							}
						}
						(d,a,x,n),n?(d.ifModified&&((_=x.getResponseHeader("Last-Modified"))&&(T.lastModified[l]=_),(_=x.getResponseHeader("etag"))&&(T.etag[l]=_)),204===e||"HEAD"===d.type?s="nocontent":304===e?s="notmodified":(s=a.state,r=a.data,n=!(f=a.error))):(f=s,!e&&s||(s="error",e<0&&(e=0))),x.status=e,x.statusText=(t||s)+"",n?h.resolveWith($,[r,s,x]):h.rejectWith($,[x,s,f]),x.statusCode(m),m=void 0,b&&p.trigger(n?"ajaxSuccess":"ajaxError",[x,d,n?r:f]),g.fireWith($,[x,s]),b&&(p.trigger("ajaxComplete",[x,d]),--T.active||T.event.trigger("ajaxStop")))
					}
					return x
				}
					,getJSON:function(e,t,i){
					return T.get(e,t,i,"json")
				}
					,getScript:function(e,t){
					return T.get(e,void 0,t,"script")
				}
			}
				),T.each(["get","post"],function(e,n){
					T[n]=function(e,t,i,o){
						return T.isFunction(t)&&(o=o||i,i=t,t=void 0),T.ajax(T.extend({
						url:e,type:n,dataType:o,data:t,success:i
					}
					,T.isPlainObject(e)&&e))
				}
			}
				),T._evalUrl=function(e){
					return T.ajax({
					url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0
				}
				)
			}
				,T.fn.extend({
					wrapAll:function(t){
					var e;
						return T.isFunction(t)?this.each(function(e){
						T(this).wrapAll(t.call(this,e))
					}
						):(this[0]&&(e=T(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){
						for(var e=this;
						e.firstElementChild;
						)e=e.firstElementChild;
						return e
					}
					).append(this)),this)
				}
					,wrapInner:function(i){
						return T.isFunction(i)?this.each(function(e){
						T(this).wrapInner(i.call(this,e))
					}
						):this.each(function(){
						var e=T(this),t=e.contents();
						t.length?t.wrapAll(i):e.append(i)
					}
					)
				}
					,wrap:function(t){
					var i=T.isFunction(t);
						return this.each(function(e){
						T(this).wrapAll(i?t.call(this,e):t)
					}
					)
				}
					,unwrap:function(){
						return this.parent().each(function(){
						T.nodeName(this,"body")||T(this).replaceWith(this.childNodes)
					}
					).end()
				}
			}
				),T.expr.filters.hidden=function(e){
				return!T.expr.filters.visible(e)
			}
				,T.expr.filters.visible=function(e){
				return 0<e.offsetWidth||0<e.offsetHeight||0<e.getClientRects().length
			};
			var Nt=/%20/g,Dt=/\[\]$/,Lt=/\r?\n/g,qt=/^(?:submit|button|image|reset|file)$/i,Ht=/^(?:input|select|textarea|keygen)/i;
				T.param=function(e,t){
					function i(e,t){
					t=T.isFunction(t)?t():null==t?"":t,n[n.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
				}
				var o,n=[];
					if(void 0===t&&(t=T.ajaxSettings&&T.ajaxSettings.traditional),T.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,function(){
					i(this.name,this.value)
				}
				);
					else for(o in e)!function i(o,e,n,r){
					var t;
						if(T.isArray(e))T.each(e,function(e,t){
						n||Dt.test(o)?r(o,t):i(o+"["+("object"==typeof t&&null!=t?e:"")+"]",t,n,r)
					}
					);
					else if(n||"object"!==T.type(e))r(o,e);
					else for(t in e)i(o+"["+t+"]",e[t],n,r)
				}
				(o,e[o],t,i);
				return n.join("&").replace(Nt,"+")
			}
				,T.fn.extend({
					serialize:function(){
					return T.param(this.serializeArray())
				}
					,serializeArray:function(){
						return this.map(function(){
						var e=T.prop(this,"elements");
						return e?T.makeArray(e):this
					}
						).filter(function(){
						var e=this.type;
						return this.name&&!T(this).is(":disabled")&&Ht.test(this.nodeName)&&!qt.test(e)&&(this.checked||!U.test(e))
					}
						).map(function(e,t){
						var i=T(this).val();
							return null==i?null:T.isArray(i)?T.map(i,function(e){
								return{
								name:t.name,value:e.replace(Lt,"\r\n")
							}
						}
							):{
							name:t.name,value:i.replace(Lt,"\r\n")
						}
					}
					).get()
				}
			}
				),T.ajaxSettings.xhr=function(){
					try{
					return new w.XMLHttpRequest
				}
					catch(e){
				}
			};
				var Pt={
				0:200,1223:204
			}
			,Mt=T.ajaxSettings.xhr();
				$.cors=!!Mt&&"withCredentials"in Mt,$.ajax=Mt=!!Mt,T.ajaxTransport(function(n){
				var r,f;
					return $.cors||Mt&&!n.crossDomain?{
						send:function(e,t){
						var i,o=n.xhr();
						if(o.open(n.type,n.url,n.async,n.username,n.password),n.xhrFields)for(i in n.xhrFields)o[i]=n.xhrFields[i];
						for(i in n.mimeType&&o.overrideMimeType&&o.overrideMimeType(n.mimeType),n.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)o.setRequestHeader(i,e[i]);
							r=function(e){
								return function(){
									r&&(r=f=o.onload=o.onerror=o.onabort=o.onreadystatechange=null,"abort"===e?o.abort():"error"===e?"number"!=typeof o.status?t(0,"error"):t(o.status,o.statusText):t(Pt[o.status]||o.status,o.statusText,"text"!==(o.responseType||"text")||"string"!=typeof o.responseText?{
									binary:o.response
								}
									:{
									text:o.responseText
								}
								,o.getAllResponseHeaders()))
							}
						}
							,o.onload=r(),f=o.onerror=r("error"),void 0!==o.onabort?o.onabort=f:o.onreadystatechange=function(){
								4===o.readyState&&w.setTimeout(function(){
								r&&f()
							}
							)
						}
						,r=r("abort");
							try{
							o.send(n.hasContent&&n.data||null)
						}
							catch(e){
							if(r)throw e
						}
					}
						,abort:function(){
						r&&r()
					}
				}
				:void 0
			}
				),T.ajaxSetup({
					accepts:{
					script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
				}
					,contents:{
					script:/\b(?:java|ecma)script\b/
				}
					,converters:{
						"text script":function(e){
						return T.globalEval(e),e
					}
				}
			}
				),T.ajaxPrefilter("script",function(e){
				void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")
			}
				),T.ajaxTransport("script",function(i){
				var o,n;
					if(i.crossDomain)return{
						send:function(e,t){
							o=T("<script>").prop({
							charset:i.scriptCharset,src:i.url
						}
							).on("load error",n=function(e){
							o.remove(),n=null,e&&t("error"===e.type?404:200,e.type)
						}
						),k.head.appendChild(o[0])
					}
						,abort:function(){
						n&&n()
					}
				}
			}
			);
			var Ft=[],Ot=/(=)\?(?=&|$)|\?\?/;
				T.ajaxSetup({
					jsonp:"callback",jsonpCallback:function(){
					var e=Ft.pop()||T.expando+"_"+pt++;
					return this[e]=!0,e
				}
			}
				),T.ajaxPrefilter("json jsonp",function(e,t,i){
				var o,n,r,f=!1!==e.jsonp&&(Ot.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ot.test(e.data)&&"data");
					return f||"jsonp"===e.dataTypes[0]?(o=e.jsonpCallback=T.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,f?e[f]=e[f].replace(Ot,"$1"+o):!1!==e.jsonp&&(e.url+=(ht.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){
					return r||T.error(o+" was not called"),r[0]
				}
					,e.dataTypes[0]="json",n=w[o],w[o]=function(){
					r=arguments
				}
					,i.always(function(){
					void 0===n?T(w).removeProp(o):w[o]=n,e[o]&&(e.jsonpCallback=t.jsonpCallback,Ft.push(o)),r&&T.isFunction(n)&&n(r[0]),r=n=void 0
				}
				),"script"):void 0
			}
				),T.parseHTML=function(e,t,i){
				if(!e||"string"!=typeof e)return null;
				"boolean"==typeof t&&(i=t,t=!1),t=t||k;
				var o=m.exec(e),n=!i&&[];
				return o?[t.createElement(o[1])]:(o=ie([e],t,n),n&&n.length&&T(n).remove(),T.merge([],o.childNodes))
			};
			var Bt=T.fn.load;
				function Rt(e){
				return T.isWindow(e)?e:9===e.nodeType&&e.defaultView
			}
				T.fn.load=function(e,t,i){
				if("string"!=typeof e&&Bt)return Bt.apply(this,arguments);
				var o,n,r,f=this,a=e.indexOf(" ");
					return-1<a&&(o=T.trim(e.slice(a)),e=e.slice(0,a)),T.isFunction(t)?(i=t,t=void 0):t&&"object"==typeof t&&(n="POST"),0<f.length&&T.ajax({
					url:e,type:n||"GET",dataType:"html",data:t
				}
					).done(function(e){
					r=arguments,f.html(o?T("<div>").append(T.parseHTML(e)).find(o):e)
				}
					).always(i&&function(e,t){
						f.each(function(){
						i.apply(this,r||[e.responseText,t,e])
					}
					)
				}
				),this
			}
				,T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){
					T.fn[t]=function(e){
					return this.on(t,e)
				}
			}
				),T.expr.filters.animated=function(t){
					return T.grep(T.timers,function(e){
					return t===e.elem
				}
				).length
			}
				,T.offset={
					setOffset:function(e,t,i){
						var o,n,r,f,a,_,s=T.css(e,"position"),y=T(e),l={
					};
						"static"===s&&(e.style.position="relative"),a=y.offset(),r=T.css(e,"top"),_=T.css(e,"left"),n=("absolute"===s||"fixed"===s)&&-1<(r+_).indexOf("auto")?(f=(o=y.position()).top,o.left):(f=parseFloat(r)||0,parseFloat(_)||0),T.isFunction(t)&&(t=t.call(e,i,T.extend({
					}
					,a))),null!=t.top&&(l.top=t.top-a.top+f),null!=t.left&&(l.left=t.left-a.left+n),"using"in t?t.using.call(e,l):y.css(l)
				}
			}
				,T.fn.extend({
					offset:function(t){
						if(arguments.length)return void 0===t?this:this.each(function(e){
						T.offset.setOffset(this,t,e)
					}
					);
						var e,i,o=this[0],n={
						top:0,left:0
					}
					,r=o&&o.ownerDocument;
						return r?(e=r.documentElement,T.contains(e,o)?(n=o.getBoundingClientRect(),i=Rt(r),{
						top:n.top+i.pageYOffset-e.clientTop,left:n.left+i.pageXOffset-e.clientLeft
					}
					):n):void 0
				}
					,position:function(){
						if(this[0]){
							var e,t,i=this[0],o={
							top:0,left:0
						};
							return"fixed"===T.css(i,"position")?t=i.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),T.nodeName(e[0],"html")||(o=e.offset()),o.top+=T.css(e[0],"borderTopWidth",!0),o.left+=T.css(e[0],"borderLeftWidth",!0)),{
							top:t.top-o.top-T.css(i,"marginTop",!0),left:t.left-o.left-T.css(i,"marginLeft",!0)
						}
					}
				}
					,offsetParent:function(){
						return this.map(function(){
						for(var e=this.offsetParent;
						e&&"static"===T.css(e,"position");
						)e=e.offsetParent;
						return e||He
					}
					)
				}
			}
				),T.each({
				scrollLeft:"pageXOffset",scrollTop:"pageYOffset"
			}
				,function(t,n){
				var r="pageYOffset"===n;
					T.fn[t]=function(e){
						return H(this,function(e,t,i){
						var o=Rt(e);
						return void 0===i?o?o[n]:e[t]:void(o?o.scrollTo(r?o.pageXOffset:i,r?i:o.pageYOffset):e[t]=i)
					}
					,t,e,arguments.length)
				}
			}
				),T.each(["top","left"],function(e,i){
					T.cssHooks[i]=Fe($.pixelPosition,function(e,t){
					return t?(t=Me(e,i),Le.test(t)?T(e).position()[i]+"px":t):void 0
				}
				)
			}
				),T.each({
				Height:"height",Width:"width"
			}
				,function(r,f){
					T.each({
					padding:"inner"+r,content:f,"":"outer"+r
				}
					,function(o,e){
						T.fn[e]=function(e,t){
						var i=arguments.length&&(o||"boolean"!=typeof e),n=o||(!0===e||!0===t?"margin":"border");
							return H(this,function(e,t,i){
							var o;
							return T.isWindow(e)?e.document.documentElement["client"+r]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+r],o["scroll"+r],e.body["offset"+r],o["offset"+r],o["client"+r])):void 0===i?T.css(e,t,n):T.style(e,t,i,n)
						}
						,f,i?e:void 0,i,null)
					}
				}
				)
			}
				),T.fn.extend({
					bind:function(e,t,i){
					return this.on(e,null,t,i)
				}
					,unbind:function(e,t){
					return this.off(e,null,t)
				}
					,delegate:function(e,t,i,o){
					return this.on(t,e,i,o)
				}
					,undelegate:function(e,t,i){
					return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",i)
				}
					,size:function(){
					return this.length
				}
			}
				),T.fn.andSelf=T.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){
				return T
			}
			);
			var It=w.jQuery,Wt=w.$;
				return T.noConflict=function(e){
				return w.$===T&&(w.$=Wt),e&&w.jQuery===T&&(w.jQuery=It),T
			}
			,e||(w.jQuery=w.$=T),T
		}
			),function(v){
				v.fn.theiaStickySidebar=function(e){
				var t,i;
					function o(e,t){
						return!0===e.initialized||!(v("body").width()<e.minWidth)&&(function(g,e){
							g.initialized=!0,0===v("#theia-sticky-sidebar-stylesheet-"+g.namespace).length&&v("head").append(v('<style id="theia-sticky-sidebar-stylesheet-'+g.namespace+'">.theiaStickySidebar:after {
							content: "";
							 display: table;
							 clear: both;
						}
						</style>'));
							e.each(function(){
								var i,e={
							};
								e.sidebar=v(this),e.options=g||{
							}
								,e.container=v(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({
								position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"
							}
								),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length&&(i=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i,e.sidebar.find("script").filter(function(e,t){
								return 0===t.type.length||t.type.match(i)
							}
							).remove(),e.stickySidebar=v("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)),e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));
							var t,o,n,r=e.stickySidebar.offset().top,f=e.stickySidebar.outerHeight();
								function h(){
									e.fixedScrollTop=0,e.sidebar.css({
									"min-height":"1px"
								}
									),e.stickySidebar.css({
									position:"static",width:"",transform:"none"
								}
								)
							}
								e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),r-=e.stickySidebar.offset().top,f=e.stickySidebar.outerHeight()-f-r,0==r?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==f?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,h(),e.onScroll=function(e){
								if(e.stickySidebar.is(":visible"))if(v("body").width()<e.options.minWidth)h();
									else{
									if(e.options.disableOnResponsiveLayouts)if(e.sidebar.outerWidth("none"==e.sidebar.css("float"))+50>e.container.width())return void h();
									var t,i,o,n,r,f,a,_,s,y,l,u,c,b,d,$=v(document).scrollTop(),p="static";
										$>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)&&(t=e.paddingTop+g.additionalMarginTop,i=e.paddingBottom+e.marginBottom+g.additionalMarginBottom,o=e.sidebar.offset().top,n=e.sidebar.offset().top+(u=e.container,c=u.height(),u.children().each(function(){
										c=Math.max(c,v(this).height())
									}
										),c),r=0+g.additionalMarginTop,f=e.stickySidebar.outerHeight()+t+i<v(window).height()?r+e.stickySidebar.outerHeight():v(window).height()-e.marginBottom-e.paddingBottom-g.additionalMarginBottom,a=o-$+e.paddingTop,_=n-$-e.paddingBottom-e.marginBottom,s=e.stickySidebar.offset().top-$,y=e.previousScrollTop-$,"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(s+=y),"stick-to-top"==e.options.sidebarBehavior&&(s=g.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(s=f-e.stickySidebar.outerHeight()),s=0<y?Math.min(s,r):Math.max(s,f-e.stickySidebar.outerHeight()),s=Math.max(s,a),s=Math.min(s,_-e.stickySidebar.outerHeight()),p=((l=e.container.height()==e.stickySidebar.outerHeight())||s!=r)&&(l||s!=f-e.stickySidebar.outerHeight())?$+s-e.sidebar.offset().top-e.paddingTop<=g.additionalMarginTop?"static":"absolute":"fixed"),"fixed"==p?(b=v(document).scrollLeft(),e.stickySidebar.css({
										position:"fixed",width:m(e.stickySidebar)+"px",transform:"translateY("+s+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-b+"px",top:"0px"
									}
										)):"absolute"==p?(d={
									}
										,"absolute"!=e.stickySidebar.css("position")&&(d.position="absolute",d.transform="translateY("+($+s-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",d.top="0px"),d.width=m(e.stickySidebar)+"px",d.left="",e.stickySidebar.css(d)):"static"==p&&h(),"static"!=p&&1==e.options.updateSidebarHeight&&e.sidebar.css({
										"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom
									}
									),e.previousScrollTop=$
								}
							}
								,e.onScroll(e),v(document).on("scroll."+e.options.namespace,(t=e,function(){
								t.onScroll(t)
							}
								)),v(window).on("resize."+e.options.namespace,(o=e,function(){
									o.stickySidebar.css({
									position:"static"
								}
								),o.onScroll(o)
							}
								)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],(n=e,function(){
								n.onScroll(n)
							}
							))
						}
						)
					}
					(e,t),!0)
				}
					function m(e){
					var t;
						try{
						t=e[0].getBoundingClientRect().width
					}
						catch(e){
					}
					return void 0===t&&(t=e.width()),t
				}
					return(e=v.extend({
					containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"
				}
					,e)).additionalMarginTop=parseInt(e.additionalMarginTop)||0,e.additionalMarginBottom=parseInt(e.additionalMarginBottom)||0,o(t=e,i=this)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),v(document).on("scroll."+t.namespace,function(t,i){
						return function(e){
						o(t,i)&&v(this).unbind(e)
					}
				}
					(t,i)),v(window).on("resize."+t.namespace,function(t,i){
						return function(e){
						o(t,i)&&v(this).unbind(e)
					}
				}
				(t,i))),this
			}
		}
			(jQuery),function(y){
				y.fn.menuify=function(){
					return this.each(function(){
					for(var e=y(this),t=e.find(".LinkList ul > li").children("a"),i=t.length,o=0;
					o<i;
						o++){
						var n,r=t.eq(o),f=r.text();
						"_"!==f.charAt(0)&&"_"===t.eq(o+1).text().charAt(0)&&(n=r.parent()).append('<ul class="sub-menu m-sub"/>'),"_"===f.charAt(0)&&(r.text(f.replace("_","")),r.parent().appendTo(n.children(".sub-menu")))
					}
					for(o=0;
					o<i;
						o++){
						var a,_=t.eq(o),s=_.text();
						"_"!==s.charAt(0)&&"_"===t.eq(o+1).text().charAt(0)&&(a=_.parent()).append('<ul class="sub-menu2 m-sub"/>'),"_"===s.charAt(0)&&(_.text(s.replace("_","")),_.parent().appendTo(a.children(".sub-menu2")))
					}
					e.find(".LinkList ul li ul").parent("li").addClass("has-sub")
				}
				)
			}
		}
			(jQuery),function(r){
				r.fn.tabify=function(n){
					return n=jQuery.extend({
					onHover:!1,animated:!0,transition:"fadeInUp"
				}
					,n),this.each(function(){
					var e,t=r(this),i=t.children("[tab-ify]"),o="tab-active";
						e=1==n.onHover?"mouseenter":"click",t.prepend('<ul class="select-tab"></ul>'),i.each(function(){
						1==n.animated&&r(this).addClass("tab-animated"),t.find(".select-tab").append('<li><a href="javascript:;
						">'+r(this).attr("tab-ify")+"</a></li>")
					}
						).eq(0).addClass(o).addClass("tab-"+n.transition),t.find(".select-tab a").on(e,function(){
						var e=r(this).parent().index();
						return r(this).closest(".select-tab").find(".active").removeClass("active"),r(this).parent().addClass("active"),i.removeClass(o).removeClass("tab-"+n.transition).eq(e).addClass(o).addClass("tab-"+n.transition),!1
					}
					).eq(0).parent().addClass("active")
				}
				)
			}
		}
			(jQuery),function(a){
				a.fn.replaceText=function(n,r,f){
					return this.each(function(){
					var e,t,i=this.firstChild,o=[];
					if(i)for(;
					3===i.nodeType&&(t=(e=i.nodeValue).replace(n,r))!==e&&(!f&&/</.test(t)?(a(i).before(t),o.push(i)):i.nodeValue=t),i=i.nextSibling;
					);
					o.length&&a(o).remove()
				}
				)
			}
		}
		(jQuery);
			var _$_obify3=["lazyify","fn","data-image","attr","width","round","height","/w","-h","-p-k-no-nu","","s72-c","match","/s72-c","replace","w72-h","/w72-h72-p-k-no-nu","load resize scroll","on","scrollTop","top","offset","onload","lazy-ify","addClass","style","background-image:url(","src",")","each","menuify","#magify-main-menu","show-menu","#magify-main-menu .widget","click","search-active","toggleClass","body",".search-toggle","text",".blog-posts-title a.more,.related-title a.more",".follow-by-email-text","trim","$ads={
			1
		}
			",'<div id="new-before-ad"/>',"replaceWith","$ads={
			2
		}
			",'<div id="new-after-ad"/>',".post-body strike","length","appendTo","#before-ad","#new-before-ad","#after-ad","#new-after-ad","#main-before-ad .widget","#main-after-ad .widget",".count","find","content","data","$","split","href","#social-counter ul.social-icons li a","//resources.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg","//img1.blogblog.com/img/blank.gif",".avatar-image-container img","/","pop","button","css","colored-button",".post-body a","html","contact-form",'<div class="contact-form"/>',"#ContactForm1","append",".contact-form","alert-success",'<div class="alert-message alert-success short-b">',"</div>","alert-info",'<div class="alert-message alert-info short-b">',"alert-warning",'<div class="alert-message alert-warning short-b">',"alert-error",'<div class="alert-message alert-error short-b">',"left-sidebar","<style>.item #main-wrapper{
			float:right
		}
			.item #sidebar-wrapper{
			float:left
		}
			</style>","right-sidebar","<style>.item #main-wrapper{
			float:left
		}
			.item #sidebar-wrapper{
			float:right
		}
			</style>","full-width","<style>.item #main-wrapper{
			width:100%
		}
			.item #sidebar-wrapper{
			display:none
		}
			</style>","code-box",'<pre class="code-box short-b">',"</pre>","b",".post-body .short-b","url","screen","_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=",",height=",",left=",",top=","open","focus",".share-links .window-ify,.entry-share .window-ify",".show-hid a","show-hidden",".share-links",'<li class="','"><a href="','" title="','" target="_blank"/></li>',".author-description span li",".author-description","show-icons",".about-author .author-description span a","a","toLowerCase","getmega","has-sub mega-menu","msimple","#magify-main-menu li","featured","#featured .HTML .widget-content",".block-posts .HTML .widget-content",".widget-ready .HTML .widget-content","data-label",".related-tag","related","getrelated",".related-content",'<span class="no-posts"><b>Error:</b> No Results Found</span>','<div class="no-posts error-503"><b>Error loading feeds!</b> Maybe because the connection failed or the blogger server did not respond to the request.</div>','<div class="loader"/>',"/feeds/posts/summary?alt=json&max-results=","recent","list","/feeds/comments/summary?alt=json&max-results=","/feeds/posts/summary/-/","?alt=json&max-results=","comments","link","rel","alternate","$t","title","media$thumbnail","img.youtube.com","/default.","/0.","https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png","name","author","postAuthor","true",'<span class="entry-author">',"</span>","published","substring"," ",", ","postDate",'<span class="entry-time"><time class="published" datetime="','">',"</time></span>",'<div class="entry-meta">',"category","term",'<span class="entry-category">',"/s113","/w55-h55-p-k-no-nu","gd$image","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg",'<article class="custom-item item-','"><a class="entry-image-link cmm-avatar" href="','"><span class="entry-thumb" data-image="','"/></a><h2 class="entry-title"><a href="','</a></h2><p class="cmm-snippet excerpt">',"</p></article>",".id-","-"," .entry-category{
			background-color:",";
			color:#fff
		}
			.id-"," .loader:after{
			border-color:",";
			border-right-color:rgba(155,155,155,0.2)
		}
			"," .title-wrap:after,.id-"," .title-wrap > a.more:hover,.id-"," .entry-header:not(.entry-info) .entry-title a:hover{
			color:","
		}
		.id-","block1","col-left","col-right","grid1","videos","geterror404","GET","json","prepend","#page-skin-2","id-"," show-ify","parent","column-left block-column id-","column-right block-column id-","show-ify",'<ul class="mega-widget">','<div class="featured-posts">','<div class="block-posts-1">','<div class="column-posts">','<div class="grid-posts-1">','<div class="block-videos">','<div class="custom-widget">','<div class="related-posts">',"entry","feed",'<article class="mega-item"><div class="mega-content"><a class="entry-image-link" href="',"</a></h2>","</div></article>",'<article class="featured-item post item-','"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="','"/></a>','<div class="entry-header entry-info"><h2 class="entry-title"><a href="',"</div></div></article>",'<article class="block-item item-','"><div class="block-inner">','<a class="entry-image-link before-mask" href="','"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="','"><a class="entry-image-link" href="','"/></a><div class="entry-header"><h2 class="entry-title"><a href="','<article class="column-item item-','"><div class="column-inner">','<article class="grid-item item-','"><div class="entry-image"><a class="entry-image-link" href="','"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="','<article class="videos-item item-','"/><span class="video-icon"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="','<article class="related-item post item-',"</ul>","/search","/search/label/","a:first","span.entry-thumb","<ul>","ajax","getfeatured","getblock","showMore",'<a class="more" href="/search/label/',"</a>",".widget-title","getwidget",'<div class="fb-comments" data-width="100%" data-href="','" order_by="time" data-numposts="5"></div>',"comments-system-","show",".entry-meta .entry-comments-link","blogger","disqus","#comments","facebook","hide","comments-system-default",".comments .toplevel-thread > ol > .comment .comment-actions .comment-reply",".comments .toplevel-thread > #top-continue",".blog-post-comments",".index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar","clone","#main-logo .header-widget a","remove","#h1-tag",".mobile-logo","#magify-main-menu-nav","id","main-mobile-nav",".getMega, .mega-widget, .mega-tab","class","sub-menu m-sub",".complex-tabs > ul.select-tab",".complex-tabs",".mega-menu > a",".mega-tabs ul li > a","nav-active",".show-mobile-menu, .hide-mobile-menu, .overlay",'<div class="submenu-toggle"/>',".mobile-menu .has-sub",".submenu-toggle",".mobile-menu .mega-menu",".mobile-menu .mega-tabs","has-sub","hasClass","preventDefault","slideToggle",".m-sub","children","> .m-sub","removeClass",".mobile-menu ul li .submenu-toggle","#mobile-menu","#about-section ul.social-footer","social-bg-hover",".social-mobile","#footer-wrapper","is-fixed","scroll","#header-wrapper .headerify","theiaStickySidebar","#main-wrapper,#sidebar-wrapper","visibility:visible!important;
		opacity:1!important;
		position:relative!important;
		z-index:1!important;
		font-size:14px!important;
		color:#fff!important;
		","","","a#sbt","a#sbt:visible","location","fadeIn","fadeOut","on-footer","animate","html, body",".back-top",'<img src="$1"/>',"replaceText",'<iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer;
		 autoplay;
		 encrypted-media;
		 gyroscope;
		 picture-in-picture" allowfullscreen></iframe>',"p.comment-content","load","#load-more-link",".blog-posts","post-animated post-fadeInUp",".index-post","#blog-pager .no-more",".index-post .entry-image-link .entry-thumb","#blog-pager .loading"],_$_obify2=[_$_obify3[0],_$_obify3[1],_$_obify3[2],_$_obify3[3],_$_obify3[4],_$_obify3[5],_$_obify3[6],_$_obify3[7],_$_obify3[8],_$_obify3[9],_$_obify3[10],_$_obify3[11],_$_obify3[12],_$_obify3[13],_$_obify3[14],_$_obify3[15],_$_obify3[16],_$_obify3[17],_$_obify3[18],_$_obify3[19],_$_obify3[20],_$_obify3[21],_$_obify3[22],_$_obify3[23],_$_obify3[24],_$_obify3[25],_$_obify3[26],_$_obify3[27],_$_obify3[28],_$_obify3[29],_$_obify3[30],_$_obify3[31],_$_obify3[32],_$_obify3[33],_$_obify3[34],_$_obify3[35],_$_obify3[36],_$_obify3[37],_$_obify3[38],_$_obify3[39],_$_obify3[40],_$_obify3[41],_$_obify3[42],_$_obify3[43],_$_obify3[44],_$_obify3[45],_$_obify3[46],_$_obify3[47],_$_obify3[48],_$_obify3[49],_$_obify3[50],_$_obify3[51],_$_obify3[52],_$_obify3[53],_$_obify3[54],_$_obify3[55],_$_obify3[56],_$_obify3[57],_$_obify3[58],_$_obify3[59],_$_obify3[60],_$_obify3[61],_$_obify3[62],_$_obify3[63],_$_obify3[64],_$_obify3[65],_$_obify3[66],_$_obify3[67],_$_obify3[68],_$_obify3[69],_$_obify3[70],_$_obify3[71],_$_obify3[72],_$_obify3[73],_$_obify3[74],_$_obify3[75],_$_obify3[76],_$_obify3[77],_$_obify3[78],_$_obify3[79],_$_obify3[80],_$_obify3[81],_$_obify3[82],_$_obify3[83],_$_obify3[84],_$_obify3[85],_$_obify3[86],_$_obify3[87],_$_obify3[88],_$_obify3[89],_$_obify3[90],_$_obify3[91],_$_obify3[92],_$_obify3[93],_$_obify3[94],_$_obify3[95],_$_obify3[96],_$_obify3[97],_$_obify3[98],_$_obify3[99],_$_obify3[100],_$_obify3[101],_$_obify3[102],_$_obify3[103],_$_obify3[104],_$_obify3[105],_$_obify3[106],_$_obify3[107],_$_obify3[108],_$_obify3[109],_$_obify3[110],_$_obify3[111],_$_obify3[112],_$_obify3[113],_$_obify3[114],_$_obify3[115],_$_obify3[116],_$_obify3[117],_$_obify3[118],_$_obify3[119],_$_obify3[120],_$_obify3[121],_$_obify3[122],_$_obify3[123],_$_obify3[124],_$_obify3[125],_$_obify3[126],_$_obify3[127],_$_obify3[128],_$_obify3[129],_$_obify3[130],_$_obify3[131],_$_obify3[132],_$_obify3[133],_$_obify3[134],_$_obify3[135],_$_obify3[136],_$_obify3[137],_$_obify3[138],_$_obify3[139],_$_obify3[140],_$_obify3[141],_$_obify3[142],_$_obify3[143],_$_obify3[144],_$_obify3[145],_$_obify3[146],_$_obify3[147],_$_obify3[148],_$_obify3[149],_$_obify3[150],_$_obify3[151],_$_obify3[152],_$_obify3[153],_$_obify3[154],_$_obify3[155],_$_obify3[156],_$_obify3[157],_$_obify3[158],_$_obify3[159],_$_obify3[160],_$_obify3[161],_$_obify3[162],_$_obify3[163],_$_obify3[164],_$_obify3[165],_$_obify3[166],_$_obify3[167],_$_obify3[168],_$_obify3[169],_$_obify3[170],_$_obify3[171],_$_obify3[172],_$_obify3[173],_$_obify3[174],_$_obify3[175],_$_obify3[176],_$_obify3[177],_$_obify3[178],_$_obify3[179],_$_obify3[180],_$_obify3[181],_$_obify3[182],_$_obify3[183],_$_obify3[184],_$_obify3[185],_$_obify3[186],_$_obify3[187],_$_obify3[188],_$_obify3[189],_$_obify3[190],_$_obify3[191],_$_obify3[192],_$_obify3[193],_$_obify3[194],_$_obify3[195],_$_obify3[196],_$_obify3[197],_$_obify3[198],_$_obify3[199],_$_obify3[200],_$_obify3[201],_$_obify3[202],_$_obify3[203],_$_obify3[204],_$_obify3[205],_$_obify3[206],_$_obify3[207],_$_obify3[208],_$_obify3[209],_$_obify3[210],_$_obify3[211],_$_obify3[212],_$_obify3[213],_$_obify3[214],_$_obify3[215],_$_obify3[216],_$_obify3[217],_$_obify3[218],_$_obify3[219],_$_obify3[220],_$_obify3[221],_$_obify3[222],_$_obify3[223],_$_obify3[224],_$_obify3[225],_$_obify3[226],_$_obify3[227],_$_obify3[228],_$_obify3[229],_$_obify3[230],_$_obify3[231],_$_obify3[232],_$_obify3[233],_$_obify3[234],_$_obify3[235],_$_obify3[236],_$_obify3[237],_$_obify3[238],_$_obify3[239],_$_obify3[240],_$_obify3[241],_$_obify3[242],_$_obify3[243],_$_obify3[244],_$_obify3[245],_$_obify3[246],_$_obify3[247],_$_obify3[248],_$_obify3[249],_$_obify3[250],_$_obify3[251],_$_obify3[252],_$_obify3[253],_$_obify3[254],_$_obify3[255],_$_obify3[256],_$_obify3[257],_$_obify3[258],_$_obify3[259],_$_obify3[260],_$_obify3[261],_$_obify3[262],_$_obify3[263],_$_obify3[264],_$_obify3[265],_$_obify3[266],_$_obify3[267],_$_obify3[268],_$_obify3[269],_$_obify3[270],_$_obify3[271],_$_obify3[272],_$_obify3[273],_$_obify3[274],_$_obify3[275],_$_obify3[276],_$_obify3[277],_$_obify3[278],_$_obify3[279],_$_obify3[280],_$_obify3[281],_$_obify3[282],_$_obify3[283],_$_obify3[284],_$_obify3[285],_$_obify3[286],_$_obify3[287],_$_obify3[288],_$_obify3[289],_$_obify3[290],_$_obify3[291],_$_obify3[292],_$_obify3[293],_$_obify3[294],_$_obify3[295],_$_obify3[296],_$_obify3[297],_$_obify3[298],_$_obify3[299],_$_obify3[300],_$_obify3[301],_$_obify3[302],_$_obify3[303],_$_obify3[304],_$_obify3[305],_$_obify3[306],_$_obify3[307],_$_obify3[308],_$_obify3[309],_$_obify3[310],_$_obify3[311],_$_obify3[312],_$_obify3[313],_$_obify3[314],_$_obify3[315],_$_obify3[316],_$_obify3[317],_$_obify3[318],_$_obify3[319],_$_obify3[320],_$_obify3[321],_$_obify3[322],_$_obify3[323],_$_obify3[324],_$_obify3[325],_$_obify3[326],_$_obify3[327],_$_obify3[328],_$_obify3[329],_$_obify3[330],_$_obify3[331],_$_obify3[332],_$_obify3[333],_$_obify3[334],_$_obify3[335],_$_obify3[336]],_$_obify1=[_$_obify2[0],_$_obify2[1],_$_obify2[2],_$_obify2[3],_$_obify2[4],_$_obify2[5],_$_obify2[6],_$_obify2[7],_$_obify2[8],_$_obify2[9],_$_obify2[10],_$_obify2[11],_$_obify2[12],_$_obify2[13],_$_obify2[14],_$_obify2[15],_$_obify2[16],_$_obify2[17],_$_obify2[18],_$_obify2[19],_$_obify2[20],_$_obify2[21],_$_obify2[22],_$_obify2[23],_$_obify2[24],_$_obify2[25],_$_obify2[26],_$_obify2[27],_$_obify2[28],_$_obify2[29],_$_obify2[30],_$_obify2[31],_$_obify2[32],_$_obify2[33],_$_obify2[34],_$_obify2[35],_$_obify2[36],_$_obify2[37],_$_obify2[38],_$_obify2[39],_$_obify2[40],_$_obify2[41],_$_obify2[42],_$_obify2[43],_$_obify2[44],_$_obify2[45],_$_obify2[46],_$_obify2[47],_$_obify2[48],_$_obify2[49],_$_obify2[50],_$_obify2[51],_$_obify2[52],_$_obify2[53],_$_obify2[54],_$_obify2[55],_$_obify2[56],_$_obify2[57],_$_obify2[58],_$_obify2[59],_$_obify2[60],_$_obify2[61],_$_obify2[62],_$_obify2[63],_$_obify2[64],_$_obify2[65],_$_obify2[66],_$_obify2[67],_$_obify2[68],_$_obify2[69],_$_obify2[70],_$_obify2[71],_$_obify2[72],_$_obify2[73],_$_obify2[74],_$_obify2[75],_$_obify2[76],_$_obify2[77],_$_obify2[78],_$_obify2[79],_$_obify2[80],_$_obify2[81],_$_obify2[82],_$_obify2[83],_$_obify2[84],_$_obify2[85],_$_obify2[86],_$_obify2[87],_$_obify2[88],_$_obify2[89],_$_obify2[90],_$_obify2[91],_$_obify2[92],_$_obify2[93],_$_obify2[94],_$_obify2[95],_$_obify2[96],_$_obify2[97],_$_obify2[98],_$_obify2[99],_$_obify2[100],_$_obify2[101],_$_obify2[102],_$_obify2[103],_$_obify2[104],_$_obify2[105],_$_obify2[106],_$_obify2[107],_$_obify2[108],_$_obify2[109],_$_obify2[110],_$_obify2[111],_$_obify2[112],_$_obify2[113],_$_obify2[114],_$_obify2[115],_$_obify2[116],_$_obify2[117],_$_obify2[118],_$_obify2[119],_$_obify2[120],_$_obify2[121],_$_obify2[122],_$_obify2[123],_$_obify2[124],_$_obify2[125],_$_obify2[126],_$_obify2[127],_$_obify2[128],_$_obify2[129],_$_obify2[130],_$_obify2[131],_$_obify2[132],_$_obify2[133],_$_obify2[134],_$_obify2[135],_$_obify2[136],_$_obify2[137],_$_obify2[138],_$_obify2[139],_$_obify2[140],_$_obify2[141],_$_obify2[142],_$_obify2[143],_$_obify2[144],_$_obify2[145],_$_obify2[146],_$_obify2[147],_$_obify2[148],_$_obify2[149],_$_obify2[150],_$_obify2[151],_$_obify2[152],_$_obify2[153],_$_obify2[154],_$_obify2[155],_$_obify2[156],_$_obify2[157],_$_obify2[158],_$_obify2[159],_$_obify2[160],_$_obify2[161],_$_obify2[162],_$_obify2[163],_$_obify2[164],_$_obify2[165],_$_obify2[166],_$_obify2[167],_$_obify2[168],_$_obify2[169],_$_obify2[170],_$_obify2[171],_$_obify2[172],_$_obify2[173],_$_obify2[174],_$_obify2[175],_$_obify2[176],_$_obify2[177],_$_obify2[178],_$_obify2[179],_$_obify2[180],_$_obify2[181],_$_obify2[182],_$_obify2[183],_$_obify2[184],_$_obify2[185],_$_obify2[186],_$_obify2[187],_$_obify2[188],_$_obify2[189],_$_obify2[190],_$_obify2[191],_$_obify2[192],_$_obify2[193],_$_obify2[194],_$_obify2[195],_$_obify2[196],_$_obify2[197],_$_obify2[198],_$_obify2[199],_$_obify2[200],_$_obify2[201],_$_obify2[202],_$_obify2[203],_$_obify2[204],_$_obify2[205],_$_obify2[206],_$_obify2[207],_$_obify2[208],_$_obify2[209],_$_obify2[210],_$_obify2[211],_$_obify2[212],_$_obify2[213],_$_obify2[214],_$_obify2[215],_$_obify2[216],_$_obify2[217],_$_obify2[218],_$_obify2[219],_$_obify2[220],_$_obify2[221],_$_obify2[222],_$_obify2[223],_$_obify2[224],_$_obify2[225],_$_obify2[226],_$_obify2[227],_$_obify2[228],_$_obify2[229],_$_obify2[230],_$_obify2[231],_$_obify2[232],_$_obify2[233],_$_obify2[234],_$_obify2[235],_$_obify2[236],_$_obify2[237],_$_obify2[238],_$_obify2[239],_$_obify2[240],_$_obify2[241],_$_obify2[242],_$_obify2[243],_$_obify2[244],_$_obify2[245],_$_obify2[246],_$_obify2[247],_$_obify2[248],_$_obify2[249],_$_obify2[250],_$_obify2[251],_$_obify2[252],_$_obify2[253],_$_obify2[254],_$_obify2[255],_$_obify2[256],_$_obify2[257],_$_obify2[258],_$_obify2[259],_$_obify2[260],_$_obify2[261],_$_obify2[262],_$_obify2[263],_$_obify2[264],_$_obify2[265],_$_obify2[266],_$_obify2[267],_$_obify2[268],_$_obify2[269],_$_obify2[270],_$_obify2[271],_$_obify2[272],_$_obify2[273],_$_obify2[274],_$_obify2[275],_$_obify2[276],_$_obify2[277],_$_obify2[278],_$_obify2[279],_$_obify2[280],_$_obify2[281],_$_obify2[282],_$_obify2[283],_$_obify2[284],_$_obify2[285],_$_obify2[286],_$_obify2[287],_$_obify2[288],_$_obify2[289],_$_obify2[290],_$_obify2[291],_$_obify2[292],_$_obify2[293],_$_obify2[294],_$_obify2[295],_$_obify2[296],_$_obify2[297],_$_obify2[298],_$_obify2[299],_$_obify2[300],_$_obify2[301],_$_obify2[302],_$_obify2[303],_$_obify2[304],_$_obify2[305],_$_obify2[306],_$_obify2[307],_$_obify2[308],_$_obify2[309],_$_obify2[310],_$_obify2[311],_$_obify2[312],_$_obify2[313],_$_obify2[314],_$_obify2[315],_$_obify2[316],_$_obify2[317],_$_obify2[318],_$_obify2[319],_$_obify2[320],_$_obify2[321],_$_obify2[322],_$_obify2[323],_$_obify2[324],_$_obify2[325],_$_obify2[326],_$_obify2[327],_$_obify2[328],_$_obify2[329],_$_obify2[330],_$_obify2[331],_$_obify2[332],_$_obify2[333],_$_obify2[334],_$_obify2[335],_$_obify2[336]];
			function regxify(e){
				return String(e[_$_obify1[12]](/[^{
				\
			}
			]+(?=
		}
		)/g))[_$_obify1[42]]()
	}
		function msgError(){
		return _$_obify1[137]
	}
		function msgServerError(){
		return _$_obify1[138]
	}
		function beforeLoader(){
		return _$_obify1[139]
	}
		function getFeedUrl(e,t,i){
		var o=_$_obify1[10];
			switch(i){
			case _$_obify1[141]:o=_$_obify1[140]+t;
			break;
			case _$_obify1[146]:o=e==_$_obify1[142]?_$_obify1[143]+t:_$_obify1[144]+i+_$_obify1[145]+t;
			break;
			default:o=_$_obify1[144]+i+_$_obify1[145]+t
		}
		return o
	}
		function getPostLink(e,t){
		for(var i=0;
		i<e[t][_$_obify1[147]][_$_obify1[49]];
			i++)if(e[t][_$_obify1[147]][i][_$_obify1[148]]==_$_obify1[149]){
			var o=e[t][_$_obify1[147]][i][_$_obify1[63]];
			break
		}
		return o
	}
		function getPostTitle(e,t){
		return e[t][_$_obify1[151]][_$_obify1[150]]
	}
		function getPostImage(e,t){
		var i,o=_$_obify1[152]in e[t]?((i=e[t][_$_obify1[152]][_$_obify1[101]])[_$_obify1[12]](_$_obify1[153])&&(i=i[_$_obify1[14]](_$_obify1[154],_$_obify1[155])),i):_$_obify1[156];
		return o
	}
		function getPostAuthor(e,t){
		var i=e[t][_$_obify1[158]][0][_$_obify1[157]][_$_obify1[150]];
		return messages[_$_obify1[159]]==_$_obify1[160]?_$_obify1[161]+i+_$_obify1[162]:_$_obify1[10]
	}
		function getPostDate(e,t){
		var i=e[t][_$_obify1[163]][_$_obify1[150]],o=i[_$_obify1[164]](0,4),n=i[_$_obify1[164]](5,7),r=i[_$_obify1[164]](8,10),f=monthFormat[parseInt(n,10)-1]+_$_obify1[165]+r+_$_obify1[166]+o,a=messages[_$_obify1[167]]==_$_obify1[160]?_$_obify1[168]+i+_$_obify1[169]+f+_$_obify1[170]:_$_obify1[10];
		return a
	}
		function getPostMeta(e,t){
		var i=messages[_$_obify1[159]]==_$_obify1[160]||messages[_$_obify1[167]]==_$_obify1[160]?_$_obify1[171]+e+t+_$_obify1[83]:_$_obify1[10],o=messages[_$_obify1[167]]==_$_obify1[160]?_$_obify1[171]+t+_$_obify1[83]:_$_obify1[10];
		return[i,o]
	}
		function getPostLabel(e,t){
		var i,o=null!=e[t][_$_obify1[172]]?(i=e[t][_$_obify1[172]][0][_$_obify1[173]],_$_obify1[174]+i+_$_obify1[162]):_$_obify1[10];
		return o
	}
		function getPostComments(e,t,i){
		var o,n=e[t][_$_obify1[158]][0][_$_obify1[157]][_$_obify1[150]],r=e[t][_$_obify1[158]][0][_$_obify1[177]][_$_obify1[27]][_$_obify1[14]](_$_obify1[175],_$_obify1[176]),f=e[t][_$_obify1[151]][_$_obify1[150]];
		return o=r[_$_obify1[12]](_$_obify1[67])?_$_obify1[178]:r,_$_obify1[179]+t+_$_obify1[180]+i+_$_obify1[181]+o+_$_obify1[182]+i+_$_obify1[169]+n+_$_obify1[183]+f+_$_obify1[184]
	}
		function getCustomStyle(e,t,i){
		return i!=_$_obify1[10]?e==_$_obify1[128]?_$_obify1[185]+e+_$_obify1[186]+t+_$_obify1[187]+i+_$_obify1[188]+e+_$_obify1[186]+t+_$_obify1[189]+i+_$_obify1[190]:_$_obify1[185]+e+_$_obify1[186]+t+_$_obify1[191]+e+_$_obify1[186]+t+_$_obify1[187]+i+_$_obify1[188]+e+_$_obify1[186]+t+_$_obify1[192]+e+_$_obify1[186]+t+_$_obify1[193]+i+_$_obify1[194]+e+_$_obify1[186]+t+_$_obify1[189]+i+_$_obify1[190]:_$_obify1[10]
	}
		function getAjax(l,u,e,c,i){
			switch(u){
			case _$_obify1[126]:case _$_obify1[128]:case _$_obify1[195]:case _$_obify1[196]:case _$_obify1[197]:case _$_obify1[198]:case _$_obify1[199]:case _$_obify1[142]:case _$_obify1[134]:null==c&&(c=_$_obify1[200]);
			var t=getFeedUrl(u,e,c);
				$[_$_obify1[249]]({
					url:t,type:_$_obify1[201],dataType:_$_obify1[202],cache:!0,beforeSend:function(e){
					var t=getCustomStyle(u,c,i);
						switch(u){
						case _$_obify1[128]:$(_$_obify1[204])[_$_obify1[203]](t),l[_$_obify1[75]](beforeLoader())[_$_obify1[207]]()[_$_obify1[24]](_$_obify1[205]+u+_$_obify1[186]+c+_$_obify1[206]);
						break;
						case _$_obify1[195]:case _$_obify1[198]:case _$_obify1[199]:$(_$_obify1[204])[_$_obify1[203]](t),l[_$_obify1[75]](beforeLoader())[_$_obify1[207]]()[_$_obify1[24]](_$_obify1[205]+u+_$_obify1[186]+c+_$_obify1[206]);
						break;
						case _$_obify1[196]:$(_$_obify1[204])[_$_obify1[203]](t),l[_$_obify1[75]](beforeLoader())[_$_obify1[207]]()[_$_obify1[24]](_$_obify1[208]+u+_$_obify1[186]+c+_$_obify1[206]);
						break;
						case _$_obify1[197]:$(_$_obify1[204])[_$_obify1[203]](t),l[_$_obify1[75]](beforeLoader())[_$_obify1[207]]()[_$_obify1[24]](_$_obify1[209]+u+_$_obify1[186]+c+_$_obify1[206]);
						break;
						case _$_obify1[142]:l[_$_obify1[75]](beforeLoader());
						break;
						case _$_obify1[134]:l[_$_obify1[75]](beforeLoader())[_$_obify1[207]]()[_$_obify1[24]](_$_obify1[210])
					}
				}
					,success:function(e){
					var t=_$_obify1[10];
						switch(u){
						case _$_obify1[126]:t=_$_obify1[211];
						break;
						case _$_obify1[128]:t=_$_obify1[212];
						break;
						case _$_obify1[195]:t=_$_obify1[213];
						break;
						case _$_obify1[196]:case _$_obify1[197]:t=_$_obify1[214];
						break;
						case _$_obify1[198]:t=_$_obify1[215];
						break;
						case _$_obify1[199]:t=_$_obify1[216];
						break;
						case _$_obify1[142]:t=_$_obify1[217];
						break;
						case _$_obify1[134]:t=_$_obify1[218]
					}
					var i=e[_$_obify1[220]][_$_obify1[219]];
					if(null!=i)for(var o=0,n=i;
					o<n[_$_obify1[49]];
						o++){
						var r=getPostLink(n,o),f=getPostTitle(n,o,r),a=getPostImage(n,o,r),_=getPostMeta(getPostAuthor(n,o),getPostDate(n,o)),s=getPostLabel(n,o),y=_$_obify1[10];
							switch(u){
							case _$_obify1[126]:y+=_$_obify1[221]+r+_$_obify1[181]+a+_$_obify1[182]+r+_$_obify1[169]+f+_$_obify1[222]+_[1]+_$_obify1[223];
							break;
								case _$_obify1[128]:switch(o){
								case 0:case 1:y+=_$_obify1[224]+o+_$_obify1[225]+r+_$_obify1[181]+a+_$_obify1[226]+s+_$_obify1[227]+r+_$_obify1[169]+f+_$_obify1[222]+_[0]+_$_obify1[228];
								break;
								default:y+=_$_obify1[224]+o+_$_obify1[225]+r+_$_obify1[181]+a+_$_obify1[226]+s+_$_obify1[227]+r+_$_obify1[169]+f+_$_obify1[222]+_[1]+_$_obify1[228]
							}
							break;
								case _$_obify1[195]:switch(o){
								case 0:y+=_$_obify1[229]+o+_$_obify1[230]+s+_$_obify1[231]+r+_$_obify1[181]+a+_$_obify1[232]+r+_$_obify1[169]+f+_$_obify1[222]+_[0]+_$_obify1[228];
								break;
								default:y+=_$_obify1[229]+o+_$_obify1[233]+r+_$_obify1[181]+a+_$_obify1[234]+r+_$_obify1[169]+f+_$_obify1[222]+_[1]+_$_obify1[223]
							}
							break;
								case _$_obify1[196]:case _$_obify1[197]:switch(o){
								case 0:y+=_$_obify1[235]+o+_$_obify1[236]+s+_$_obify1[231]+r+_$_obify1[181]+a+_$_obify1[232]+r+_$_obify1[169]+f+_$_obify1[222]+_[0]+_$_obify1[228];
								break;
								default:y+=_$_obify1[235]+o+_$_obify1[233]+r+_$_obify1[181]+a+_$_obify1[234]+r+_$_obify1[169]+f+_$_obify1[222]+_[1]+_$_obify1[223]
							}
							break;
							case _$_obify1[198]:y+=_$_obify1[237]+o+_$_obify1[238]+r+_$_obify1[181]+a+_$_obify1[239]+r+_$_obify1[169]+f+_$_obify1[222]+_[1]+_$_obify1[223];
							break;
							case _$_obify1[199]:y+=_$_obify1[240]+o+_$_obify1[238]+r+_$_obify1[181]+a+_$_obify1[241]+r+_$_obify1[169]+f+_$_obify1[222]+_[1]+_$_obify1[223];
							break;
								case _$_obify1[142]:switch(c){
								case _$_obify1[146]:y+=getPostComments(n,o,r);
								break;
								default:y+=_$_obify1[179]+o+_$_obify1[233]+r+_$_obify1[181]+a+_$_obify1[234]+r+_$_obify1[169]+f+_$_obify1[222]+_[1]+_$_obify1[223]
							}
							break;
							case _$_obify1[134]:y+=_$_obify1[242]+o+_$_obify1[238]+r+_$_obify1[181]+a+_$_obify1[239]+r+_$_obify1[169]+f+_$_obify1[222]+_[1]+_$_obify1[223]
						}
						t+=y
					}
						else switch(u){
						case _$_obify1[126]:t=_$_obify1[211]+msgError()+_$_obify1[243];
						break;
						default:t=msgError()
					}
						switch(u){
							case _$_obify1[126]:t+=_$_obify1[243],l[_$_obify1[79]](t)[_$_obify1[24]](_$_obify1[126]),l[_$_obify1[58]](_$_obify1[246])[_$_obify1[3]](_$_obify1[63],function(e,t){
								switch(c){
								case _$_obify1[141]:t=t[_$_obify1[14]](t,_$_obify1[244]);
								break;
								default:t=t[_$_obify1[14]](t,_$_obify1[245]+c)
							}
							return t
						}
						);
						break;
						case _$_obify1[195]:case _$_obify1[198]:case _$_obify1[196]:case _$_obify1[197]:case _$_obify1[199]:default:t+=_$_obify1[83],l[_$_obify1[75]](t)
					}
					l[_$_obify1[58]](_$_obify1[247])[_$_obify1[0]]()
				}
					,error:function(){
						switch(u){
						case _$_obify1[126]:l[_$_obify1[79]](_$_obify1[248]+msgServerError()+_$_obify1[243]);
						break;
						default:l[_$_obify1[75]](msgServerError())
					}
				}
			}
			)
		}
	}
		function ajaxMega(e,t,i,o,n){
			if(n[_$_obify1[12]](_$_obify1[124])){
			if(t==_$_obify1[126])return getAjax(e,t,i,o);
			e[_$_obify1[24]](_$_obify1[125])[_$_obify1[79]](_$_obify1[211]+msgError()+_$_obify1[243])
		}
	}
		function ajaxFeatured(e,t,i,o,n,r){
			if(n[_$_obify1[12]](_$_obify1[250])){
			if(t==_$_obify1[128])return getAjax(e,t,i,o,r);
				e[_$_obify1[75]](beforeLoader())[_$_obify1[207]]()[_$_obify1[24]](_$_obify1[210]),setTimeout(function(){
				e[_$_obify1[75]](msgError())
			}
			,500)
		}
	}
		function ajaxBlock(e,t,i,o,n,r){
			if(n[_$_obify1[12]](_$_obify1[251])){
				if(t==_$_obify1[195]||t==_$_obify1[196]||t==_$_obify1[197]||t==_$_obify1[198]||t==_$_obify1[199]){
				var f=showMoreText,a=_$_obify1[10],a=f!=_$_obify1[10]?f:messages[_$_obify1[252]];
				return e[_$_obify1[207]]()[_$_obify1[58]](_$_obify1[255])[_$_obify1[79]](_$_obify1[253]+o+_$_obify1[169]+a+_$_obify1[254]),getAjax(e,t,i,o,r)
			}
			e[_$_obify1[75]](msgError())[_$_obify1[207]]()[_$_obify1[24]](_$_obify1[210])
		}
	}
		function ajaxWidget(e,t,i,o,n){
			if(n[_$_obify1[12]](_$_obify1[256])){
			if(t==_$_obify1[142])return getAjax(e,t,i,o);
			e[_$_obify1[75]](msgError())
		}
	}
		function ajaxRelated(e,t,i,o,n){
		if(n[_$_obify1[12]](_$_obify1[135]))return getAjax(e,t,i,o)
	}
		!function(a){
			a[_$_obify1[1]][_$_obify1[0]]=function(){
				return this[_$_obify1[29]](function(){
				var o=a(this),e=o[_$_obify1[3]](_$_obify1[2]),t=Math[_$_obify1[5]](o[_$_obify1[4]]()),i=Math[_$_obify1[5]](o[_$_obify1[6]]()),n=_$_obify1[7]+t+_$_obify1[8]+i+_$_obify1[9],r=_$_obify1[10];
					function f(){
					var e,t=a(window)[_$_obify1[6]](),i=a(window)[_$_obify1[19]]();
						o[_$_obify1[21]]()[_$_obify1[20]]<i+t&&((e=new Image)[_$_obify1[22]]=function(){
						o[_$_obify1[3]](_$_obify1[25],_$_obify1[26]+this[_$_obify1[27]]+_$_obify1[28])[_$_obify1[24]](_$_obify1[23])
					}
					,e[_$_obify1[27]]=r)
				}
				r=e[_$_obify1[12]](_$_obify1[11])?e[_$_obify1[14]](_$_obify1[13],n):e[_$_obify1[12]](_$_obify1[15])?e[_$_obify1[14]](_$_obify1[16],n):e,a(window)[_$_obify1[18]](_$_obify1[17],f),f()
			}
			)
		}
	}
		(jQuery),$(_$_obify1[31])[_$_obify1[30]](),$(_$_obify1[33])[_$_obify1[24]](_$_obify1[32]),$(_$_obify1[38])[_$_obify1[18]](_$_obify1[34],function(){
		$(_$_obify1[37])[_$_obify1[36]](_$_obify1[35])
	}
		),$(_$_obify1[40])[_$_obify1[29]](function(){
		var e=$(this),t=showMoreText;
		t!=_$_obify1[10]&&e[_$_obify1[39]](t)
	}
		),$(_$_obify1[41])[_$_obify1[29]](function(){
		var e=$(this),t=followByEmailText;
		t!=_$_obify1[10]&&e[_$_obify1[39]](t)
	}
		),$(_$_obify1[48])[_$_obify1[29]](function(){
		var e=$(this),t=e[_$_obify1[39]]()[_$_obify1[42]]();
		t==_$_obify1[43]&&e[_$_obify1[45]](_$_obify1[44]),t==_$_obify1[46]&&e[_$_obify1[45]](_$_obify1[47])
	}
		),$(_$_obify1[52])[_$_obify1[29]](function(){
		var e=$(this);
		e[_$_obify1[49]]&&$(_$_obify1[51])[_$_obify1[50]](e)
	}
		),$(_$_obify1[54])[_$_obify1[29]](function(){
		var e=$(this);
		e[_$_obify1[49]]&&$(_$_obify1[53])[_$_obify1[50]](e)
	}
		),$(_$_obify1[55])[_$_obify1[29]](function(){
		var e=$(this);
		e[_$_obify1[49]]&&e[_$_obify1[50]]($(_$_obify1[51]))
	}
		),$(_$_obify1[56])[_$_obify1[29]](function(){
		var e=$(this);
		e[_$_obify1[49]]&&e[_$_obify1[50]]($(_$_obify1[53]))
	}
		),$(_$_obify1[64])[_$_obify1[29]](function(){
		var e=$(this),t=e[_$_obify1[58]](_$_obify1[57]),i=e[_$_obify1[60]](_$_obify1[59])[_$_obify1[42]]()[_$_obify1[62]](_$_obify1[61]),o=i[0],n=i[1];
		e[_$_obify1[3]](_$_obify1[63],o),t[_$_obify1[39]](n)
	}
		),$(_$_obify1[68])[_$_obify1[3]](_$_obify1[27],function(e,t){
		return t=(t=t[_$_obify1[14]](_$_obify1[65],_$_obify1[66]))[_$_obify1[14]](_$_obify1[67],_$_obify1[66])
	}
		),$(_$_obify1[74])[_$_obify1[29]](function(){
		var e=$(this),t=e[_$_obify1[39]]()[_$_obify1[42]](),i=t[_$_obify1[62]](_$_obify1[69]),o=i[0],n=i[1],r=i[_$_obify1[70]]();
			t[_$_obify1[12]](_$_obify1[71])&&(e[_$_obify1[24]](_$_obify1[71])[_$_obify1[39]](o),n!=_$_obify1[71]&&e[_$_obify1[24]](n),r!=_$_obify1[71]&&e[_$_obify1[24]](_$_obify1[73])[_$_obify1[72]]({
			"background-color":r
		}
		))
	}
		),$(_$_obify1[48])[_$_obify1[29]](function(){
		var e=$(this),t=e[_$_obify1[39]]()[_$_obify1[42]](),i=e[_$_obify1[75]]();
			t[_$_obify1[12]](_$_obify1[76])&&(e[_$_obify1[45]](_$_obify1[77]),$(_$_obify1[80])[_$_obify1[79]]($(_$_obify1[78]))),t[_$_obify1[12]](_$_obify1[81])&&e[_$_obify1[45]](_$_obify1[82]+i+_$_obify1[83]),t[_$_obify1[12]](_$_obify1[84])&&e[_$_obify1[45]](_$_obify1[85]+i+_$_obify1[83]),t[_$_obify1[12]](_$_obify1[86])&&e[_$_obify1[45]](_$_obify1[87]+i+_$_obify1[83]),t[_$_obify1[12]](_$_obify1[88])&&e[_$_obify1[45]](_$_obify1[89]+i+_$_obify1[83]),t[_$_obify1[12]](_$_obify1[90])&&e[_$_obify1[45]](_$_obify1[91]),t[_$_obify1[12]](_$_obify1[92])&&e[_$_obify1[45]](_$_obify1[93]),t[_$_obify1[12]](_$_obify1[94])&&e[_$_obify1[45]](_$_obify1[95]),t[_$_obify1[12]](_$_obify1[96])&&e[_$_obify1[45]](_$_obify1[97]+i+_$_obify1[98]),$(_$_obify1[100])[_$_obify1[58]](_$_obify1[99])[_$_obify1[29]](function(){
			var e=$(this),t=e[_$_obify1[39]]()[_$_obify1[42]]();
			(t[_$_obify1[12]](_$_obify1[81])||t[_$_obify1[12]](_$_obify1[84])||t[_$_obify1[12]](_$_obify1[86])||t[_$_obify1[12]](_$_obify1[88])||t[_$_obify1[12]](_$_obify1[96]))&&e[_$_obify1[45]](_$_obify1[10])
		}
		)
	}
		),$(_$_obify1[110])[_$_obify1[18]](_$_obify1[34],function(){
		var e=$(this),t=e[_$_obify1[60]](_$_obify1[101]),i=e[_$_obify1[60]](_$_obify1[4]),o=e[_$_obify1[60]](_$_obify1[6]),n=window[_$_obify1[102]][_$_obify1[4]],r=window[_$_obify1[102]][_$_obify1[6]],f=Math[_$_obify1[5]](n/2-i/2),a=Math[_$_obify1[5]](r/2-o/2);
		window[_$_obify1[108]](t,_$_obify1[103],_$_obify1[104]+i+_$_obify1[105]+o+_$_obify1[106]+f+_$_obify1[107]+a)[_$_obify1[109]]()
	}
		),$(_$_obify1[113])[_$_obify1[29]](function(){
		var e=$(this);
			e[_$_obify1[58]](_$_obify1[111])[_$_obify1[18]](_$_obify1[34],function(){
			e[_$_obify1[36]](_$_obify1[112])
		}
		)
	}
		),$(_$_obify1[121])[_$_obify1[29]](function(){
		var e=$(this),t=e[_$_obify1[39]]()[_$_obify1[42]](),i=e[_$_obify1[3]](_$_obify1[63]);
		e[_$_obify1[45]](_$_obify1[114]+t+_$_obify1[115]+i+_$_obify1[116]+t+_$_obify1[117]),$(_$_obify1[119])[_$_obify1[79]]($(_$_obify1[118])),$(_$_obify1[119])[_$_obify1[24]](_$_obify1[120])
	}
		),$(_$_obify1[127])[_$_obify1[29]](function(e){
		var t=$(this),i=t,o=t[_$_obify1[58]](_$_obify1[122])[_$_obify1[3]](_$_obify1[63])[_$_obify1[42]](),n=o[_$_obify1[123]](),r=o[_$_obify1[62]](_$_obify1[61]);
		e=null!=r[1]?regxify(r[1]):_$_obify1[10],n[_$_obify1[12]](_$_obify1[124])&&i[_$_obify1[24]](_$_obify1[125]),ajaxMega(i,_$_obify1[126],5,e,n)
	}
		),$(_$_obify1[129])[_$_obify1[29]](function(e,t){
		var i=$(this),o=i[_$_obify1[39]]()[_$_obify1[42]](),n=o[_$_obify1[123]](),r=o[_$_obify1[62]](_$_obify1[61]);
		e=null!=r[1]?regxify(r[1]):_$_obify1[10],t=null!=r[2]?regxify(r[2]):_$_obify1[10],ajaxFeatured(i,_$_obify1[128],4,e,n,t)
	}
		),$(_$_obify1[130])[_$_obify1[29]](function(e,t,i,o){
		var n=$(this),r=n[_$_obify1[39]]()[_$_obify1[42]](),f=r[_$_obify1[123]](),a=r[_$_obify1[62]](_$_obify1[61]);
		e=null!=a[1]?regxify(a[1]):_$_obify1[10],t=null!=a[2]?regxify(a[2]):_$_obify1[10],ajaxBlock(n,null!=a[3]?regxify(a[3]):_$_obify1[10],e,t,f,null!=a[4]?regxify(a[4]):_$_obify1[10])
	}
		),$(_$_obify1[131])[_$_obify1[29]](function(e,t,i){
		var o=$(this),n=o[_$_obify1[39]]()[_$_obify1[42]](),r=n[_$_obify1[123]](),f=n[_$_obify1[62]](_$_obify1[61]);
		e=null!=f[1]?regxify(f[1]):_$_obify1[10],t=null!=f[2]?regxify(f[2]):_$_obify1[10],ajaxWidget(o,null!=f[3]?regxify(f[3]):_$_obify1[10],e,t,r)
	}
		),$(_$_obify1[136])[_$_obify1[29]](function(){
		var e=$(this),t=e[_$_obify1[58]](_$_obify1[133])[_$_obify1[3]](_$_obify1[132]),i=relatedPostsNum;
		ajaxRelated(e,_$_obify1[134],i,t,_$_obify1[135])
	}
		),$(_$_obify1[270])[_$_obify1[29]](function(){
		var e=$(this),t=commentsSystem,i=_$_obify1[257]+disqus_blogger_current_url+_$_obify1[258],o=_$_obify1[259]+t;
			switch(t){
			case _$_obify1[262]:e[_$_obify1[24]](o)[_$_obify1[260]](),$(_$_obify1[261])[_$_obify1[24]](_$_obify1[260]);
			break;
			case _$_obify1[263]:e[_$_obify1[24]](o)[_$_obify1[260]]();
			break;
			case _$_obify1[265]:e[_$_obify1[24]](o)[_$_obify1[58]](_$_obify1[264])[_$_obify1[75]](i),e[_$_obify1[260]]();
			break;
			case _$_obify1[266]:e[_$_obify1[266]]();
			break;
			default:e[_$_obify1[24]](_$_obify1[267])[_$_obify1[260]](),$(_$_obify1[261])[_$_obify1[24]](_$_obify1[260])
		}
		var n=e[_$_obify1[58]](_$_obify1[268]),r=e[_$_obify1[58]](_$_obify1[269]);
			n[_$_obify1[18]](_$_obify1[34],function(){
			r[_$_obify1[260]]()
		}
			),r[_$_obify1[18]](_$_obify1[34],function(){
			r[_$_obify1[266]]()
		}
		)
	}
		),$(function(){
			$(_$_obify1[271])[_$_obify1[0]](),$(_$_obify1[276])[_$_obify1[29]](function(){
			var e=$(this),t=$(_$_obify1[273])[_$_obify1[272]]();
			t[_$_obify1[58]](_$_obify1[275])[_$_obify1[274]](),t[_$_obify1[50]](e)
		}
			),$(_$_obify1[303])[_$_obify1[29]](function(){
			var e=$(this),t=$(_$_obify1[277])[_$_obify1[272]]();
				t[_$_obify1[3]](_$_obify1[278],_$_obify1[279]),t[_$_obify1[58]](_$_obify1[280])[_$_obify1[274]](),t[_$_obify1[58]](_$_obify1[284])[_$_obify1[45]](t[_$_obify1[58]](_$_obify1[283])[_$_obify1[3]](_$_obify1[281],_$_obify1[282])),t[_$_obify1[58]](_$_obify1[285])[_$_obify1[29]](function(){
				var e=$(this);
				e[_$_obify1[3]](_$_obify1[63])[_$_obify1[42]]()[_$_obify1[123]]()[_$_obify1[12]](_$_obify1[124])&&e[_$_obify1[3]](_$_obify1[63],_$_obify1[244])
			}
				),t[_$_obify1[58]](_$_obify1[286])[_$_obify1[29]](function(){
				var e=$(this),t=e[_$_obify1[39]]()[_$_obify1[42]]();
				e[_$_obify1[3]](_$_obify1[63],_$_obify1[245]+t)
			}
				),t[_$_obify1[50]](e),$(_$_obify1[288])[_$_obify1[18]](_$_obify1[34],function(){
				$(_$_obify1[37])[_$_obify1[36]](_$_obify1[287])
			}
				),$(_$_obify1[290])[_$_obify1[79]](_$_obify1[289]),$(_$_obify1[292])[_$_obify1[58]](_$_obify1[291])[_$_obify1[274]](),$(_$_obify1[293])[_$_obify1[79]](_$_obify1[289]),$(_$_obify1[302])[_$_obify1[18]](_$_obify1[34],function(e){
				$(this)[_$_obify1[207]]()[_$_obify1[295]](_$_obify1[294])&&(e[_$_obify1[296]](),$(this)[_$_obify1[207]]()[_$_obify1[295]](_$_obify1[260])?$(this)[_$_obify1[207]]()[_$_obify1[301]](_$_obify1[260])[_$_obify1[58]](_$_obify1[300])[_$_obify1[297]](170):$(this)[_$_obify1[207]]()[_$_obify1[24]](_$_obify1[260])[_$_obify1[299]](_$_obify1[298])[_$_obify1[297]](170))
			}
			)
		}
			),$(_$_obify1[306])[_$_obify1[29]](function(){
			var e=$(this),t=$(_$_obify1[304])[_$_obify1[272]]();
			t[_$_obify1[301]](_$_obify1[305]),t[_$_obify1[50]](e)
		}
			),$(_$_obify1[310])[_$_obify1[29]](function(){
			var t,e,i,o,n=$(this);
				1==fixedMenu&&0<n[_$_obify1[49]]&&(t=$(document)[_$_obify1[19]](),e=n[_$_obify1[21]]()[_$_obify1[20]],i=n[_$_obify1[6]](),o=e+i,$(window)[_$_obify1[309]](function(){
				var e=$(document)[_$_obify1[19]]();
				e<$(_$_obify1[307])[_$_obify1[21]]()[_$_obify1[20]]-i&&(o<e?n[_$_obify1[24]](_$_obify1[308]):e<=0&&n[_$_obify1[301]](_$_obify1[308]),t<e?n[_$_obify1[301]](_$_obify1[260]):n[_$_obify1[24]](_$_obify1[260]),t=$(document)[_$_obify1[19]]())
			}
			))
		}
			),$(_$_obify1[312])[_$_obify1[29]](function(){
				1==fixedSidebar&&$(this)[_$_obify1[311]]({
				additionalMarginTop:30,additionalMarginBottom:30
			}
			)
		}
			),$(_$_obify1[316])[_$_obify1[3]](_$_obify1[63],_$_obify1[315])[_$_obify1[39]](_$_obify1[314])[_$_obify1[3]](_$_obify1[25],_$_obify1[313]),setInterval(function(){
			$(_$_obify1[317])[_$_obify1[49]]||(window[_$_obify1[318]][_$_obify1[63]]=_$_obify1[315])
		}
			,1e3),$(_$_obify1[324])[_$_obify1[29]](function(){
			var e=$(this);
				$(window)[_$_obify1[18]](_$_obify1[309],function(){
				100<=$(this)[_$_obify1[19]]()?e[_$_obify1[319]](250):e[_$_obify1[320]](250),e[_$_obify1[21]]()[_$_obify1[20]]>=$(_$_obify1[307])[_$_obify1[21]]()[_$_obify1[20]]-32?e[_$_obify1[24]](_$_obify1[321]):e[_$_obify1[301]](_$_obify1[321])
			}
				),e[_$_obify1[34]](function(){
					$(_$_obify1[323])[_$_obify1[322]]({
					scrollTop:0
				}
				,500)
			}
			)
		}
			),$(_$_obify1[328])[_$_obify1[29]](function(){
			var e=$(this);
			e[_$_obify1[326]](/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,_$_obify1[325]),e[_$_obify1[326]](/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,_$_obify1[327])
		}
			),$(_$_obify1[330])[_$_obify1[29]](function(){
			var i=$(this)[_$_obify1[60]](_$_obify1[329]);
				i&&$(_$_obify1[330])[_$_obify1[260]](),$(_$_obify1[330])[_$_obify1[18]](_$_obify1[34],function(e){
					$(_$_obify1[330])[_$_obify1[266]](),$[_$_obify1[249]]({
						url:i,success:function(e){
						var t=$(e)[_$_obify1[58]](_$_obify1[331]);
						t[_$_obify1[58]](_$_obify1[333])[_$_obify1[24]](_$_obify1[332]),$(_$_obify1[331])[_$_obify1[79]](t[_$_obify1[75]]()),(i=$(e)[_$_obify1[58]](_$_obify1[330])[_$_obify1[60]](_$_obify1[329]))?$(_$_obify1[330])[_$_obify1[260]]():($(_$_obify1[330])[_$_obify1[266]](),$(_$_obify1[334])[_$_obify1[24]](_$_obify1[260])),$(_$_obify1[335])[_$_obify1[0]]()
					}
						,beforeSend:function(){
						$(_$_obify1[336])[_$_obify1[260]]()
					}
						,complete:function(){
						$(_$_obify1[336])[_$_obify1[266]]()
					}
				}
				),e[_$_obify1[296]]()
			}
			)
		}
		)
	}
	);
	
