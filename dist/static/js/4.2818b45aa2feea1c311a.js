webpackJsonp([4],{"eit+":function(t,a){},o09e:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.alertBox.show?e("div",{staticClass:"alert-box"},[e("div",{staticClass:"alert-main"},[e("div",{staticClass:"headline"},[t.alertBox.title?e("h2",[t._v(t._s(t.alertBox.title))]):e("h2",[t._v("提示：")]),t._v(" "),e("div",{staticClass:"close",on:{click:function(a){t.alertBox.show=!t.alertBox.show}}},[t._v("×")])]),t._v(" "),e("div",{staticClass:"main"},[t._t("default")],2),t._v(" "),e("div",{staticClass:"btn"},[t.cancel?e("button",{staticClass:"cancel"},[t._v("取消")]):t._e(),t._v(" "),t.primary?e("button",{on:{click:function(a){t.alertBox.show=!t.alertBox.show}}},[t._v("确定")]):t._e()])])]):t._e()},staticRenderFns:[]};var i=e("VU/8")({props:["value","cancel","primary"],data:function(){return{alertBox:this.value}}},n,!1,function(t){e("eit+")},"data-v-9882c578",null).exports,l=e("pi6f"),s=e("nv3W"),o={components:{alertBox:i,myButton:l.a,myTips:s.a},data:function(){return{boxMain:{title:"这里是标题",main:"这里显示内容",show:!1},tableList:[{name:"boxMain",explain:"内部包含title标题，main主体内容，和show是否显示",types:"Array",default:"_"},{name:"primary",explain:"开启后显示确定按钮",types:"Boolean",default:"false"},{name:"cancel",explain:"开启后显示取消按钮",types:"Boolean",default:"false"}]}},methods:{alert:function(){this.boxMain={title:"这里是标题",main:"这里显示内容",show:!0}}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("my-button",{attrs:{type:"primary"},on:{click:t.alert}},[t._v("点击弹窗")]),t._v(" "),t.boxMain.show?e("alert-box",{attrs:{primary:!0},model:{value:t.boxMain,callback:function(a){t.boxMain=a},expression:"boxMain"}},[e("p",[t._v(t._s(t.boxMain.main))])]):t._e(),t._v(" "),e("my-tips",{attrs:{value:t.tableList}})],1)},staticRenderFns:[]};var c=e("VU/8")(o,r,!1,function(t){e("vDBJ")},"data-v-86e272e4",null);a.default=c.exports},vDBJ:function(t,a){}});