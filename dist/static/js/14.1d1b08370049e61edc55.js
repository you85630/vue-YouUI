webpackJsonp([14],{"9tmW":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("3JAr"),i=a("pi6f"),l=a("nv3W"),r={components:{myTable:n.a,myButton:i.a,myTips:l.a},data:function(){return{tableTitle:[{name:1},{name:2},{name:3},{name:4},{name:"操作",width:"200px",align:"center"}],tableList:[{one:1,two:2,three:3,four:4},{one:4,two:5,three:6,four:7}],mytips:[{name:"id",explain:"当前列索引",types:"number",default:"_"},{name:"tableTitle",explain:"标题",types:"Array",default:"_"},{name:"tableList",explain:"表格内容",types:"Array",default:"_"}]}},methods:{look:function(t){console.log(t)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("my-table",{attrs:{headline:t.tableTitle,tableData:t.tableList},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"handle"},[a("my-button",{attrs:{type:"primary"},on:{click:function(a){t.look(e.id)}}},[t._v("详情")]),t._v(" "),a("my-button",{attrs:{type:"error"}},[t._v("删除")])],1)]}}])}),t._v(" "),a("my-tips",{attrs:{list:t.mytips}})],1)},staticRenderFns:[]};var s=a("VU/8")(r,o,!1,function(t){a("KDmZ")},"data-v-2eb99788",null);e.default=s.exports},KDmZ:function(t,e){}});