(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)i=s[d],o[i]&&f.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/controle-horas/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"14c8":function(t,e,n){"use strict";var a=n("c8fa"),o=n.n(a);o.a},1975:function(t,e,n){},3163:function(t,e,n){"use strict";var a=n("4d76"),o=n.n(a);o.a},"3de6":function(t,e,n){"use strict";var a=n("b669"),o=n.n(a);o.a},"467c":function(t,e,n){},"4d76":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),o=n("d437"),r=n.n(o),i=n("d421"),s=n.n(i),c=n("535c"),l=n.n(c),u=n("d0ba"),d=n.n(u),f=n("e1f0"),p=n.n(f),v=n("5d92"),b=n.n(v),m=n("6a6f"),h=n.n(m),g=n("d553"),_=n.n(g),y=n("12d0"),x=n.n(y),k=n("2330"),w=n.n(k);n("da64");a["default"].use(r.a,{components:{VApp:s.a,VNavigationDrawer:l.a,VFooter:d.a,VList:p.a,VBtn:b.a,VIcon:h.a,VGrid:_.a,VToolbar:x.a,transitions:w.a},customProperties:!0,iconfont:"md"});n("d5e8"),n("d1e7");var V=n("8c4f"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ponto"},[n("RegistraPonto"),n("ListaPonto")],1)},L=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{attrs:{persistent:""}},[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm3:""}},[n("v-text-field",{attrs:{label:"Data","prepend-icon":"event",type:"date"},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}})],1),n("v-flex",{attrs:{xs6:"",sm1:""}},[n("v-text-field",{attrs:{label:"Entrada",type:"time"},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.commitReg(e):null}},model:{value:t.ent1,callback:function(e){t.ent1=e},expression:"ent1"}})],1),n("v-flex",{attrs:{xs6:"",sm1:""}},[n("v-text-field",{attrs:{label:"Almoço",type:"time"},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.commitReg(e):null}},model:{value:t.sai1,callback:function(e){t.sai1=e},expression:"sai1"}})],1),n("v-flex",{attrs:{xs6:"",sm1:""}},[n("v-text-field",{attrs:{label:"Retorno",type:"time"},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.commitReg(e):null}},model:{value:t.ent2,callback:function(e){t.ent2=e},expression:"ent2"}})],1),n("v-flex",{attrs:{xs6:"",sm1:""}},[n("v-text-field",{attrs:{label:"Saída",type:"time"},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.commitReg(e):null}},model:{value:t.sai2,callback:function(e){t.sai2=e},expression:"sai2"}})],1),n("v-flex",{attrs:{xs12:"",sm2:""}},[n("v-text-field",{attrs:{label:"Observação"},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.commitReg(e):null}},model:{value:t.obs,callback:function(e){t.obs=e},expression:"obs"}})],1),n("v-flex",{attrs:{xs12:"",sm3:""}},[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:t.commitReg}},[n("v-icon",{attrs:{dark:""}},[t._v(t._s(t.id?"refresh":"add"))])],1),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"grey"},on:{click:t.resetForm}},[n("v-icon",{attrs:{dark:""}},[t._v("cancel")])],1)],1)],1)],1),t._v("\n  "+t._s(t.ponto)+"\n")],1)},O=[],j=n("5935"),S=n("2f62"),T=n("0ff2"),D=n("59ca"),A=n.n(D),$=(n("e71f"),{apiKey:"AIzaSyA-_Q8uTg7bUoI5j82Sr6xSD5QsDT1fOhM",authDomain:"tgm-controle-horas.firebaseapp.com",databaseURL:"https://tgm-controle-horas.firebaseio.com",projectId:"tgm-controle-horas",storageBucket:"tgm-controle-horas.appspot.com",messagingSenderId:"391575527086"}),H=$;a["default"].use(S["a"]),a["default"].use(T["a"]);var C="ponto";A.a.initializeApp(H);var E=A.a.firestore();E.settings({timestampsInSnapshots:!0});var F=function(){return{id:null,data:(new Date).toLocaleDateString().split("/").reverse().join("-"),ent1:null,sai1:null,ent2:null,sai2:null,obs:null}},I=function(t,e){t.id=e.id,t.data=e.data,t.ent1=e.ent1,t.sai1=e.sai1,t.ent2=e.ent2,t.sai2=e.sai2,t.obs=e.obs},M=F(),q=new S["a"].Store({strict:!0,state:M,mutations:{updateField:j["c"],savePonto:I},getters:{getField:j["a"]},actions:{savePonto:function(t,e){t.commit("savePonto",e.ponto)},resetPonto:function(t){t.dispatch("savePonto",{ponto:F()})}}}),B=q;function z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){G(t,e,n[e])})}return t}function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var J={name:"RegistraPonto",data:function(){return{menu:!1}},methods:{commitReg:function(){this.id?E.collection(C).doc(this.id).update(this.ponto).then(this.$store.dispatch("resetPonto")):E.collection(C).add(this.ponto).then(this.$store.dispatch("resetPonto"))},resetForm:function(){this.$store.dispatch("resetPonto")}},computed:z({},Object(j["b"])(["id","data","ent1","sai1","ent2","sai2","obs"]),{ponto:function(){return{data:this.$store.state.data,ent1:this.$store.state.ent1,sai1:this.$store.state.sai1,ent2:this.$store.state.ent2,sai2:this.$store.state.sai2,obs:this.$store.state.obs}}})},N=J,Q=(n("687d"),n("2877")),U=n("6544"),K=n.n(U),W=n("8336"),X=n("a523"),Y=n("0e8f"),Z=n("4bd4"),tt=n("132d"),et=n("a722"),nt=n("2677"),at=Object(Q["a"])(N,R,O,!1,null,null,null);at.options.__file="RegistraPonto.vue";var ot=at.exports;K()(at,{VBtn:W["a"],VContainer:X["a"],VFlex:Y["a"],VForm:Z["a"],VIcon:tt["a"],VLayout:et["a"],VTextField:nt["a"]});var rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ListaHoras",{attrs:{title:"Registro Ponto",headers:t.headers,items:t.registros,fnLoadReg:t.loadRegistro,fnDelete:t.delRegistro}})},it=[],st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[t._v("\n        "+t._s(t.title)+"\n        "),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-data-table",{attrs:{headers:t.headers,items:t.items,search:t.search,"item-key":"id"},scopedSlots:t._u([{key:"items",fn:function(e){return[t._l(t.headers,function(a,o){return n("td",{key:o},[t._v("\n                "+t._s(e.item[a.value])+"\n            ")])}),n("td",{staticClass:"justify-center layout px-0"},[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(n){t.loadReg(e.item)}}},[t._v("\n                    edit\n                ")]),n("v-icon",{attrs:{small:""},on:{click:function(n){t.delReg(e.item)}}},[t._v("\n                    delete\n                ")])],1)]}}])},[n("template",{slot:"no-data"},[n("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[t._v("\n                Sorry, nothing to display here :(\n            ")])],1)],2)],1)},ct=[];function lt(){return{search:null}}var ut={name:"ListaHoras",data:lt,props:{title:{type:String,required:!0},headers:{type:Array,required:!0},items:{type:Array,required:!1},fnLoadReg:{type:Function,required:!1},fnDelete:{type:Function,required:!1}},methods:{loadReg:function(t){this.fnLoadReg?this.fnLoadReg(t):console.log(t)},delReg:function(t){this.fnDelete?this.fnDelete(t):console.log(t)}}},dt=ut,ft=(n("7b5d"),n("0798")),pt=n("b0af"),vt=n("12b2"),bt=n("8fea"),mt=n("9910"),ht=Object(Q["a"])(dt,st,ct,!1,null,null,null);ht.options.__file="ListaHoras.vue";var gt=ht.exports;K()(ht,{VAlert:ft["a"],VCard:pt["a"],VCardTitle:vt["a"],VDataTable:bt["a"],VIcon:tt["a"],VSpacer:mt["a"],VTextField:nt["a"]});var _t=[{text:"Data",value:"data",align:"left"},{text:"Entrada",value:"ent1"},{text:"Almoço",value:"sai1"},{text:"Retorno",value:"ent2"},{text:"Saída",value:"sai2"},{text:"Observação",value:"obs"},{text:"Actions",value:"name",sortable:!1}],yt={name:"ListaPonto",components:{ListaHoras:gt},data:function(){return{search:null,headers:_t,registros:[]}},firestore:function(){return{registros:E.collection(C)}},methods:{delRegistro:function(t){E.collection(C).doc(t.id).delete()},formatData:function(t){return t&&"string"===typeof t?new Date(t).toISOString().slice(0,10).split("-").reverse().join("/"):null},loadRegistro:function(t){var e=this;E.collection(C).doc(t.id).get().then(function(t){var n=t.data();return n.id=t.id,e.$store.dispatch("savePonto",{ponto:n})})}}},xt=yt,kt=(n("db1e"),Object(Q["a"])(xt,rt,it,!1,null,null,null));kt.options.__file="ListaPonto.vue";var wt=kt.exports,Vt={name:"Ponto",components:{RegistraPonto:ot,ListaPonto:wt},data:function(){return{}}},Pt=Vt,Lt=(n("61c5"),Object(Q["a"])(Pt,P,L,!1,null,"37e554a7",null));Lt.options.__file="Ponto.vue";var Rt=Lt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ListaHoras",{attrs:{title:"Lista Horas Teste",headers:t.headers,items:t.items,fnLoadReg:t.fnLoadReg}})},jt=[],St=function(t){console.log("fnLoadReg"),console.log(t.data)},Tt={name:"ListaHorasTest",components:{ListaHoras:gt},data:function(){return{search:null,headers:[{text:"Data",value:"data",align:"left"},{text:"Entrada",value:"ent1"}],items:[{data:"2018-09-20",ent1:"11:58"},{data:"2018-09-20",ent1:"11:59"}],fnLoadReg:St}}},Dt=Tt,At=(n("9da9"),Object(Q["a"])(Dt,Ot,jt,!1,null,null,null));At.options.__file="ListaHorasTest.vue";var $t=At.exports;a["default"].use(V["a"]);var Ht=[{path:"/controle-horas/",name:"Home",component:Rt,icon:"home"},{path:"/controle-horas/ponto",name:"Ponto",component:Rt,icon:"timer"},{path:"/controle-horas/teste",name:"ListaHorasTest",component:$t,icon:"bubble_chart"}],Ct=new V["a"]({mode:"history",linkActiveClass:"active",routes:Ht}),Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("AppHeader"),n("v-content",[n("router-view")],1),n("AppFooter")],1)},Ft=[],It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"appheader"}},[n("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,a){return n("v-list-tile",{key:a,attrs:{value:"true"}},[n("router-link",{attrs:{to:e.path}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.name)}})],1)],1)],1)}))],1),n("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("web")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("web")])],1),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("menu")])],1)],1),n("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:"",app:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-tile",{on:{click:function(e){t.right=!t.right}}},[n("v-list-tile-action",[n("v-icon",[t._v("compare_arrows")])],1),n("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1)],1)},Mt=[],qt={name:"AppHeader",data:function(){return{items:Ht,fixed:!1,rightDrawer:!1,clipped:!1,drawer:!0,miniVariant:!1,right:!0,title:"Controle de Horas"}}},Bt=qt,zt=(n("3163"),n("8860")),Gt=n("ba95"),Jt=n("40fe"),Nt=n("5d23"),Qt=n("f774"),Ut=n("71d9"),Kt=n("706c"),Wt=n("2a7f"),Xt=Object(Q["a"])(Bt,It,Mt,!1,null,null,null);Xt.options.__file="AppHeader.vue";var Yt=Xt.exports;K()(Xt,{VBtn:W["a"],VIcon:tt["a"],VList:zt["a"],VListTile:Gt["a"],VListTileAction:Jt["a"],VListTileContent:Nt["a"],VListTileTitle:Nt["b"],VNavigationDrawer:Qt["a"],VSpacer:mt["a"],VToolbar:Ut["a"],VToolbarSideIcon:Kt["a"],VToolbarTitle:Wt["a"]});var Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{fixed:"",app:""}},[n("span",[t._v(" TGM - 2018")])])},te=[],ee={name:"AppFooter"},ne=ee,ae=(n("14c8"),n("553a")),oe=Object(Q["a"])(ne,Zt,te,!1,null,null,null);oe.options.__file="AppFooter.vue";var re=oe.exports;K()(oe,{VFooter:ae["a"]});var ie={name:"App",components:{AppHeader:Yt,AppFooter:re},data:function(){return{}}},se=ie,ce=(n("3de6"),n("7496")),le=n("549c"),ue=Object(Q["a"])(se,Et,Ft,!1,null,"bcf43b42",null);ue.options.__file="App.vue";var de=ue.exports;K()(ue,{VApp:ce["a"],VContent:le["a"]}),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(de)},store:B,router:Ct}).$mount("#app")},"61c5":function(t,e,n){"use strict";var a=n("ae37"),o=n.n(a);o.a},"687d":function(t,e,n){"use strict";var a=n("7fe1"),o=n.n(a);o.a},"7b5d":function(t,e,n){"use strict";var a=n("467c"),o=n.n(a);o.a},"7fe1":function(t,e,n){},"9da9":function(t,e,n){"use strict";var a=n("f2b3"),o=n.n(a);o.a},ae37:function(t,e,n){},b669:function(t,e,n){},c8fa:function(t,e,n){},db1e:function(t,e,n){"use strict";var a=n("1975"),o=n.n(a);o.a},f2b3:function(t,e,n){}});
//# sourceMappingURL=app.88254254.js.map