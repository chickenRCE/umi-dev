(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{284:function(t,e,r){"use strict";r(316),r(12),r(90);e.a={methods:{buf_to_hexstring:function(t){for(var e="",i=0;i<8;++i){e+=t[i].toString(16).padStart(2,"0")+" "}return e},buf_to_utfstring:function(t){for(var e="",i=0;i<8;++i){var r=t[i],n=String.fromCharCode(r);(/[\x00-\x1F]/.test(n)||173==r||1!=n.length)&&(n="."),e+=n}return e},hex_to_buf:function(t){for(var e=[],r=0;r<t.length;r+=2){var n=parseInt(t.substr(r,2),16);e.push(n)}return e},pp:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:64;return"".concat(t.toString(16).padStart(e/4,0))}}}},292:function(t,e,r){"use strict";var n=r(9),o=r(4),c=r(92),l=r(16),h=r(13),f=r(45),d=r(183),v=r(72),_=r(5),w=r(71),x=r(70).f,O=r(34).f,I=r(15).f,N=r(185).trim,m="Number",y=o.Number,S=y.prototype,E=f(w(S))==m,T=function(t){var e,r,n,o,c,l,h,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=N(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,h=0;h<l;h++)if((code=c.charCodeAt(h))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(c(m,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var j,A=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof A&&(E?_((function(){S.valueOf.call(r)})):f(r)!=m)?d(new y(T(e)),r,A):T(e)},$=n?x(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),P=0;$.length>P;P++)h(y,j=$[P])&&!h(A,j)&&I(A,j,O(y,j));A.prototype=S,S.constructor=A,l(o,m,A)}},316:function(t,e,r){"use strict";var n=r(2),o=r(396).start;n({target:"String",proto:!0,forced:r(397)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},357:function(t,e,r){"use strict";r.r(e);r(39),r(33),r(38),r(60),r(35),r(61);var n=r(25),o=(r(292),r(94),r(21),r(284));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={props:{value:{default:""},width:{type:Number,default:32}},mixins:[o.a],computed:{listeners:function(){return l(l({},this.$listeners),{},{input:this.on_val_changed,keydown:this.validate_reg_val,blur:this.emit_reg_changed,focus:this.on_focus})}},mounted:function(){this.$refs.editable.innerText=this.pp(this.value,this.width)},watch:{value:function(t,e){this.$refs.editable.innerText=this.pp(this.value,this.width),this.new_val_text=this.pp(this.value)},width:function(t,e){this.$refs.editable.innerText=this.pp(this.value,this.width),this.new_val_text=this.pp(this.value)}},data:function(){return{new_val_text:this.pp(this.value)}},methods:{validate_reg_val:function(t){if("Enter"!=t.code){if("Escape"==t.code)return this.new_val_text=this.pp(this.value),void t.target.blur();if("Delete"!=t.code&&"Backspace"!=t.code){t.code.startsWith("Key")||t.code.startsWith("Digit")||t.preventDefault();/^[0-9A-Fa-f]+$/.test(t.key)||t.preventDefault()}}else t.target.blur()},on_val_changed:function(t){var e=t.target.innerText;e.length>16||0==e.length?t.target.innerText=this.new_val_text:this.new_val_text=t.target.innerText},on_focus:function(t){this.$refs.editable.innerText=this.pp(this.value,64)},emit_reg_changed:function(t){this.$refs.editable.innerText=this.pp(this.value,this.width),this.$parent.$parent.$emit("regValChanged",{reg_name:this.$parent.name,reg_val:BigInt("0x"+this.new_val_text)})}}},f=r(11),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",t._g({ref:"editable",attrs:{contenteditable:"",spellcheck:"false"}},t.listeners))}),[],!1,null,null,null);e.default=component.exports},396:function(t,e,r){var n=r(14),o=r(186),c=r(17),l=Math.ceil,h=function(t){return function(e,r,h){var f,d,v=String(c(e)),_=v.length,w=void 0===h?" ":String(h),x=n(r);return x<=_||""==w?v:(f=x-_,(d=o.call(w,l(f/w.length))).length>f&&(d=d.slice(0,f)),t?v+d:d+v)}};t.exports={start:h(!1),end:h(!0)}},397:function(t,e,r){var n=r(73);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)}}]);