webpackJsonp([6],{"/XSH":function(e,t){},exsI:function(e,t){},"jIQ/":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"check-box"},[s("p",{class:{active:e.select},on:{click:e.checked}},[e.select?s("i",{staticClass:"fa fa-check-square"}):s("i",{staticClass:"fa fa-square-o"}),e._v(" "),e._t("default")],2)])},staticRenderFns:[]};var n={components:{checkBox:s("VU/8")({props:["value"],data:function(){return{select:!1,list:this.value}},methods:{checked:function(){this.select=!this.select;var e=this.$slots.default[0].text;if(this.select)this.list.push(e);else{var t=this.list,s=void 0;t.filter(function(t,c){t===e&&(s=c)}),t.splice(s,1)}this.$emit("input",this.list)}}},c,!1,function(e){s("exsI")},"data-v-c2a07534",null).exports},data:function(){return{select:[],checkList:[{name:"备选1"},{name:"备选2"},{name:"备选3"}]}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._l(e.checkList,function(t){return s("check-box",{key:t.index,model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[e._v(e._s(t.name))])}),e._v(" "),s("p",[e._v(e._s(e.select))])],2)},staticRenderFns:[]};var a=s("VU/8")(n,i,!1,function(e){s("/XSH")},"data-v-66140606",null);t.default=a.exports}});