webpackJsonp([16],{"1cYd":function(e,n){},c3Vg:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"tree"},e._l(e.tree,function(n){return t("div",{key:n.index,staticClass:"list"},[t("div",{class:["lev-"+n.indent],on:{click:function(e){n.expanded=!n.expanded}}},[n.children?t("i",{staticClass:"fa",class:[n.expanded?"fa-caret-down":"fa-caret-right"]}):e._e(),e._v("\n        "+e._s(n.name)+"\n      ")]),e._v(" "),t("tree",{directives:[{name:"show",rawName:"v-show",value:n.expanded,expression:"li.expanded"}],attrs:{tree:n.children}})],1)}))},staticRenderFns:[]};var d={components:{myTree:t("VU/8")({name:"tree",props:["tree"]},a,!1,function(e){t("dFU9")},"data-v-14f8dbfa",null).exports,myTips:t("nv3W").a},data:function(){return{list:[{name:"第一级1",indent:"1",expanded:!0,children:[{name:"第二级1-1",indent:"2",expanded:!0,children:[{name:"第三级1-1-1",indent:"3",expanded:!0},{name:"第三级1-1-2",indent:"3",expanded:!0,children:[{name:"第四级1-1-1-1",indent:"4",expanded:!0}]},{name:"第三级1-1-3",indent:"3",expanded:!0}]},{name:"第二级1-2",indent:"2",expanded:!0}]},{name:"第一级2",indent:"1",expanded:!0}],tableList:[{name:"value",explain:"树形组件数据",types:"Array",default:"_"}]}}},i={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("my-tree",{attrs:{tree:this.list}}),this._v(" "),n("my-tips",{attrs:{value:this.tableList}})],1)},staticRenderFns:[]};var r=t("VU/8")(d,i,!1,function(e){t("1cYd")},"data-v-84112e3a",null);n.default=r.exports},dFU9:function(e,n){}});