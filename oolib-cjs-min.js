var arraySlice,Base;arraySlice=Array.prototype.slice;function Dummy(){}function Interface(){}function createClass(){var g,d,f,b,h,e,a;g=arguments[0];if((typeof g)==="function"){d=arguments[1]}else{d=g;g=undefined}function c(){var j,k,i;if(this instanceof c){j=this;j.iface=k=new Interface();for(i in b){(function(){var l;l=b[i];k[i]=function(){return l.apply(j,arguments)}}())}if(null!=h){h.apply(j,arguments)}return k}else{return createClass(c,arguments[0])}}if(null!=g){Dummy.prototype=g.prototype;f=new Dummy();f.constructor=c;c.prototype=f;c.superclass=g}else{f=c.prototype}if(null!=d){for(e in d){a=d[e];if((null!=g)&&((typeof a)==="function")){(function(i){f[e]=function(){var j,k;j=this._super;k=this._superApply;this._super=function(l){var m;m=arraySlice.call(arguments,1);return g.prototype[l].apply(this,m)};this._superApply=function(l,m){return g.prototype[l].apply(this,m)};try{return i.apply(this,arguments)}finally{this._super=j;this._superApply=k}}}(a))}else{f[e]=a}}}b={};for(e in f){if(e.charAt(0)==="_"){continue}a=f[e];if((typeof a)!=="function"){continue}if(e==="constructor"){continue}b[e]=a}h=f._create;if((typeof h)!=="function"){h=undefined}return c}Base=createClass({_create:function(){var b,g,d,f,e;this._destroyFns=[];b=[];g=this.constructor;while(null!=g){b.push(g);g=g.superclass}for(d=b.length-1;d>=0;d--){g=b[d];f=g.prototype;if(null!=f){if(f.hasOwnProperty("_dispose")){e=f._dispose;if((typeof e)==="function"){this._addDestroyFn(e)}}if(f.hasOwnProperty("_init")){e=f._init;if((typeof e)==="function"){e.apply(this,arguments)}}}}},isInstanceOf:function(a){return(this instanceof a)},_addDestroyFn:function(a){this._destroyFns.push(a)},destroy:function(){var b,a;a=this._destroyFns;for(b=a.length-1;b>=0;b--){a[b].call(this)}delete this._destroyFns}});function isInterfaceOf(b,a){if(!(b instanceof Interface)){return false}if((typeof b.isInstanceOf)==="function"){return b.isInstanceOf(a)}}exports.createClass=createClass;exports.Interface=Interface;exports.Base=Base;exports.isInterfaceOf=isInterfaceOf;