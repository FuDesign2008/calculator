(function(t){function e(e){for(var a,c,i=e[0],u=e[1],l=e[2],m=0,p=[];m<i.length;m++)c=i[m],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);s&&s(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/calculator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"10f3":function(t,e,n){},"280f":function(t,e,n){},3037:function(t,e,n){},"3ad2":function(t,e,n){"use strict";var a=n("b4ee"),r=n.n(a);r.a},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"635f":function(t,e,n){"use strict";var a=n("9aaf"),r=n.n(a);r.a},"752f":function(t,e,n){t.exports=n.p+"img/wechat.78daf999.jpg"},"9aaf":function(t,e,n){},"9c0c":function(t,e,n){},a53a:function(t,e,n){"use strict";var a=n("280f"),r=n.n(a);r.a},b4ee:function(t,e,n){},bd50:function(t,e,n){"use strict";var a=n("3037"),r=n.n(a);r.a},bdf6:function(t,e,n){"use strict";var a=n("e487"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-alert",{attrs:{title:"计算过程在客户端进行，无后台",type:"warning",center:!0,"close-text":"了解啦"}}),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("案例")]),t._v(" | "),n("router-link",{attrs:{to:"/cal"}},[t._v("计算器")]),t._v(" | "),n("router-link",{attrs:{to:"/strategy"}},[t._v("策略")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},o=[],c=(n("5c0b"),n("2877")),i={},u=Object(c["a"])(i,r,o,!1,null,null,null),l=u.exports,s=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("calculator")],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calculator"},[n("div",{staticClass:"list"},t._l(t.dealList,(function(t){return n("deal-item",{key:t.id,attrs:{deal:t.deal,title:t.title}})})),1),n("div",{staticClass:"input"},[n("el-divider",{attrs:{"content-position":"left"}},[n("h3",[t._v("行权计算器")])]),n("el-form",{ref:"computeForm",attrs:{model:t.computeForm,"label-width":"120px",size:"small"},nativeOn:{submit:function(t){t.preventDefault()}}},[n("el-form-item",{attrs:{label:"行权价格 ($)"}},[n("el-slider",{attrs:{"show-input":""},model:{value:t.computeForm.outPriceInDollar,callback:function(e){t.$set(t.computeForm,"outPriceInDollar",e)},expression:"computeForm.outPriceInDollar"}})],1),n("el-form-item",{attrs:{label:"行权成本 ($)"}},[n("el-slider",{attrs:{min:0,max:t.inPriceInDollarMax,"show-input":""},model:{value:t.computeForm.inPriceInDollar,callback:function(e){t.$set(t.computeForm,"inPriceInDollar",e)},expression:"computeForm.inPriceInDollar"}})],1),n("el-form-item",{attrs:{label:"行权数量"}},[n("el-slider",{attrs:{min:0,max:1e6,step:100,"show-input":""},model:{value:t.computeForm.outCount,callback:function(e){t.$set(t.computeForm,"outCount",e)},expression:"computeForm.outCount"}})],1),n("el-form-item",{attrs:{label:"美元/人民币汇率"}},[n("el-slider",{attrs:{min:0,"show-input":""},model:{value:t.computeForm.exchangeRate,callback:function(e){t.$set(t.computeForm,"exchangeRate",e)},expression:"computeForm.exchangeRate"}})],1),n("el-form-item",{attrs:{label:"累计税收益总额 (RMB)"}},[n("el-slider",{attrs:{min:0,max:1e7,"show-input":""},model:{value:t.computeForm.baseEarning,callback:function(e){t.$set(t.computeForm,"baseEarning",e)},expression:"computeForm.baseEarning"}})],1),n("el-form-item",{attrs:{label:"累计已纳税总额 (RMB)"}},[n("el-slider",{attrs:{min:0,max:t.baseTaxMax,"show-input":""},model:{value:t.computeForm.baseTax,callback:function(e){t.$set(t.computeForm,"baseTax",e)},expression:"computeForm.baseTax"}})],1),n("el-form-item",{attrs:{label:"现金股票"}},[n("el-switch",{attrs:{"active-text":"现金","inactive-text":"股票"},model:{value:t.computeForm.toCash,callback:function(e){t.$set(t.computeForm,"toCash",e)},expression:"computeForm.toCash"}})],1),n("el-form-item",{attrs:{label:"保本售出数量"}},[n("el-slider",{attrs:{min:0,max:t.outForCostMax,disabled:t.isForCash,"show-input":""},model:{value:t.computeForm.outForCost,callback:function(e){t.$set(t.computeForm,"outForCost",e)},expression:"computeForm.outForCost"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("computeForm")}}},[t._v(" 计算 ")]),n("el-button",{on:{click:function(e){return t.resetForm("computeForm")}}},[t._v("重置")])],1)],1)],1),t._m(0)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"thanks"},[n("p",[t._v(" * 汇率由 "),n("a",{attrs:{href:"https://www.mycurrency.net/",target:"_blank"}},[t._v(" https://www.mycurrency.net/ ")]),t._v(" 提供 ")])])}],b=(n("d81d"),n("5530")),h=(n("96cf"),n("d4ec")),v=n("bee2"),x=n("262e"),g=n("2caf"),k=n("1da1"),_=n("9ab4"),y=n("2fe1"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"deal-item"},[n("el-divider",{attrs:{"content-position":"left"}},[n("h3",[t._v(t._s(t.title))])]),n("div",{staticClass:"table"},[n("div",{staticClass:"input"},[n("h5",[t._v("输入")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dealInput,size:"mini"}},[n("el-table-column",{attrs:{prop:"name",label:"项目"}}),n("el-table-column",{attrs:{prop:"value",label:"数值"}})],1)],1),n("div",{staticClass:"output"},[n("h5",[t._v("输出")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dealOut,size:"mini"}},[n("el-table-column",{attrs:{prop:"name",label:"项目"}}),n("el-table-column",{attrs:{prop:"value",label:"数值"}})],1)],1)]),n("div",[n("h3",[t._v("不同股价下的输出")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dealOutList,size:"small"}},[n("el-table-column",{attrs:{prop:"outPriceInDollar",label:"股价($)"}}),n("el-table-column",{attrs:{prop:"taxRate",label:"适用税率"}}),n("el-table-column",{attrs:{prop:"cash",label:"净收益现金(RMB)"}}),n("el-table-column",{attrs:{prop:"stockCount",label:"净收益等额股票"}}),n("el-table-column",{attrs:{prop:"incomeRate",label:"净收益比例"}})],1)],1)],1)},w=[],j=(n("99af"),n("caad"),n("b680"),n("b64b"),n("a9e3"),[{limit:0,taxRate:0,quickDeduction:0},{limit:36e3,taxRate:.03,quickDeduction:0},{limit:144e3,taxRate:.1,quickDeduction:2520},{limit:3e5,taxRate:.2,quickDeduction:16920},{limit:42e4,taxRate:.25,quickDeduction:31920},{limit:66e4,taxRate:.3,quickDeduction:52920},{limit:96e4,taxRate:.35,quickDeduction:85920},{limit:Number.MAX_VALUE,taxRate:.45,quickDeduction:181920}]);function F(t,e){for(var n=0,a=0,r=t+e,o=1;o<j.length;o++){var c=j[o-1],i=j[o];r>c.limit&&r<i.limit&&(n=i.taxRate,a=i.quickDeduction)}return{taxRate:n,quickDeduction:a}}function D(t){var e=t.outPriceInDollar,n=t.inPriceInDollar,a=t.outCount,r=t.exchangeRate,o=a;return(e-n)*o*r}function C(t){var e=D(t),n=F(e,t.baseEarning),a=n.taxRate*(e+t.baseEarning)-n.quickDeduction-t.baseTax;return{tax:a,taxRate:n.taxRate,quickDeduction:n.quickDeduction}}function R(t){var e=t.outPriceInDollar,n=t.inPriceInDollar,a=t.exchangeRate,r=t.outCount,o=t.outForCost,c=t.toCash,i=c?r:o;return(e-n)*i*.0207*a/1e3}function I(t){var e=t.outCount,n=t.exchangeRate,a=t.toCash,r=t.outForCost,o=a?e:r,c=.02*o,i=20;return Math.max(c,i)*n}function P(t){var e=t.exchangeRate;return 5.35*e}function S(t){var e=t.outPriceInDollar,n=t.inPriceInDollar,a=t.outCount,r=t.exchangeRate,o=e*a*r,c=n*a*r,i=o-c,u=(e-n)*a*r,l=R(t),s=I(t),m=P(t),p=0,f=l+s+m+p,d=C(t),b=d.tax,h=d.taxRate,v=d.quickDeduction,x=u-b-f,g=x/u;return{outIncome:o,inCost:c,incomeForTax:i,secFee:l,commissionFee:s,cpmFee:m,toStockFee:p,feeTotal:f,tax:b,taxRate:h,quickDeduction:v,cash:x,stock:0,incomeRate:g}}function E(t){var e=t.outPriceInDollar,n=t.inPriceInDollar,a=t.outCount,r=t.exchangeRate,o=t.outForCost,c=e*a*r,i=n*a*r,u=c-i,l=R(t),s=I(t),m=P(t),p=0,f=l+s+m+p,d=C(t),b=d.tax,h=d.taxRate,v=d.quickDeduction,x=e*o*r,g=x-i-b-f,k=1-(b+f)/(r*a*(e-n));return{outIncome:c,inCost:i,incomeForTax:u,secFee:l,commissionFee:s,cpmFee:m,toStockFee:p,feeTotal:f,tax:b,taxRate:h,quickDeduction:v,cash:g,stock:a-o,incomeRate:k}}function M(t){return t.toCash?S(t):E(t)}var $=n("60a3"),q={outPriceInDollar:"行权价格 ($)",inPriceInDollar:"行权成本 ($)",outCount:"行权数量",exchangeRate:"美元/人民币汇率",baseTax:"本财政年度累计已纳税总额 (RMB)",baseEarning:"当前财政年度已有计税收益 (RMB)",toCash:"获取现金还是股票",outForCost:"系统计算保本售出卖出数量(用于支付成本, 仅适用获取股票)"},T={outIncome:"行权总额",inCost:"行权成本",incomeForTax:"行权收益",taxRate:"适用税率",tax:"个税总额",quickDeduction:"速算扣除数",secFee:"SEC费用",commissionFee:"券商佣金",cpmFee:"CPM手续费(行权手续费)",feeTotal:"总行权费用(券商佣金、 SEC 费用、行权手续费)",cash:"净收益现金",stock:"净收益股票",incomeRate:"净收益比例"};function z(t){return!0===t?"现金":!1===t?"股票":t}var B=["outIncome","inCost","incomeForTax","tax","quickDeduction","secFee","computeSecFee","commissionFee","cpmFee","toStockFee","feeTotal","cash"];function A(t,e,n){if(B.includes(t)){var a=e.toFixed(2),r=(e/n).toFixed(2);return"".concat(a," RMB / ").concat(r," $")}return e}var L=function(t){Object(x["a"])(n,t);var e=Object(g["a"])(n);function n(){return Object(h["a"])(this,n),e.apply(this,arguments)}return Object(v["a"])(n,[{key:"fetchData",value:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){this.fetchData()}},{key:"dealInput",get:function(){var t=this.deal,e=Object.keys(q),n=e.map((function(e){return{name:q[e],value:z(t[e])}}));return n}},{key:"dealResult",get:function(){var t=this.deal,e=M(t);return e}},{key:"dealOut",get:function(){var t=this.dealResult,e=this.deal,n=Object.keys(T),a=n.map((function(n){var a=t[n];return{name:T[n],value:A(n,a,e.exchangeRate)}}));return a}},{key:"dealOutList",get:function(){var t=this.deal;if(!t.toCash)return[];for(var e=[],n=10,a=100,r=n;r<=a;r++)e.push(Object(b["a"])(Object(b["a"])({},t),{},{outPriceInDollar:r}));var o=e.map((function(t){var e=M(t);return Object(b["a"])(Object(b["a"])({},e),{},{outPriceInDollar:t.outPriceInDollar,stockCount:Math.floor(e.cash/(t.outPriceInDollar*t.exchangeRate))})}));return o}}]),n}(a["default"]);Object(_["a"])([Object($["a"])({type:Object,required:!0})],L.prototype,"deal",void 0),Object(_["a"])([Object($["a"])({type:String,required:!0})],L.prototype,"title",void 0),L=Object(_["a"])([Object(y["b"])({})],L);var V=L,N=V,U=(n("dc74"),Object(c["a"])(N,O,w,!1,null,"911ddb10",null)),J=U.exports,H=n("8dee"),Y=n.n(H),X=(n("7db0"),n("bc3a")),G=n.n(X),K=-1,Q=356;function W(t){var e=t.find((function(t){return t.id===Q}));return e?e.rate:-1}function Z(){return tt.apply(this,arguments)}function tt(){return tt=Object(k["a"])(regeneratorRuntime.mark((function t(){var e,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(-1===K){t.next=2;break}return t.abrupt("return",K);case 2:return e="https://www.mycurrency.net/US.json",n=null,t.prev=4,t.next=7,G.a.get(e);case 7:n=t.sent,t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](4);case 12:return n&&n.data&&n.data.rates&&(a=W(n.data.rates),-1!==a&&(K=a)),t.abrupt("return",K);case 14:case"end":return t.stop()}}),t,null,[[4,10]])}))),tt.apply(this,arguments)}var et=n("f171"),nt=et.data.quote.current;function at(){var t={outPriceInDollar:nt,inPriceInDollar:2.5,outCount:2e3,exchangeRate:7,toCash:!0,baseTax:0,baseEarning:0,outForCost:0};return t}function rt(){return ot.apply(this,arguments)}function ot(){return ot=Object(k["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=at(),t.next=3,Z();case 3:return n=t.sent,n&&-1!==n&&(e.exchangeRate=n),t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)}))),ot.apply(this,arguments)}var ct=function(t){Object(x["a"])(n,t);var e=Object(g["a"])(n);function n(){var t;return Object(h["a"])(this,n),t=e.apply(this,arguments),t.computeForm=at(),t.deals=[],t}return Object(v["a"])(n,[{key:"fetchData",value:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z();case 2:e=t.sent,-1!==e&&(this.computeForm.exchangeRate=e);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"resetForm",value:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,rt();case 2:this.computeForm=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"submitForm",value:function(){var t=this.computeForm,e=Object(b["a"])({},t);this.deals.push(e),this.resetForm()}},{key:"created",value:function(){this.fetchData()}},{key:"outForCostMax",get:function(){var t=this.computeForm;return t.outCount}},{key:"isForCash",get:function(){var t=this.computeForm;return!!t.toCash}},{key:"inPriceInDollarMax",get:function(){var t=this.computeForm;return t.outPriceInDollar}},{key:"baseTaxMax",get:function(){var t=this.computeForm;return t.baseEarning}},{key:"dealList",get:function(){var t=this.deals;return t.map((function(t,e){return{deal:t,title:"".concat(e+1),id:Y.a.generate()}}))}}]),n}(a["default"]);ct=Object(_["a"])([Object(y["b"])({components:{DealItem:J}})],ct);var it=ct,ut=it,lt=(n("635f"),Object(c["a"])(ut,f,d,!1,null,"b391811e",null)),st=lt.exports,mt={name:"Home",components:{Calculator:st}},pt=mt,ft=Object(c["a"])(pt,m,p,!1,null,null,null),dt=ft.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"case-view"},[n("case-list")],1)},ht=[],vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"case-list"},t._l(t.dealList,(function(t){return n("deal-item",{key:t.id,attrs:{deal:t.deal,title:t.title}})})),1)},xt=[],gt=[{title:"案例 1 期权行权：我想获得现金",deal:{outPriceInDollar:15,inPriceInDollar:2.5,outCount:2e3,exchangeRate:7,toCash:!0,baseTax:0,baseEarning:0,outForCost:0}},{title:"案例 2 期权行权：我想获得现金",deal:{outPriceInDollar:16,inPriceInDollar:2.5,outCount:2e3,exchangeRate:7,toCash:!0,baseTax:18080,baseEarning:175e3,outForCost:0}},{title:"案例 3 期权行权：我想获得股票",deal:{outPriceInDollar:20.07,inPriceInDollar:2.5,outCount:2400,exchangeRate:7,toCash:!1,baseTax:0,baseEarning:0,outForCost:662}}],kt=function(t){Object(x["a"])(n,t);var e=Object(g["a"])(n);function n(){var t;return Object(h["a"])(this,n),t=e.apply(this,arguments),t.testCases=gt,t}return Object(v["a"])(n,[{key:"fetchData",value:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){this.fetchData()}},{key:"dealList",get:function(){var t=this.testCases;return t.map((function(t){return Object(b["a"])(Object(b["a"])({},t),{},{id:Y.a.generate()})}))}}]),n}(a["default"]);kt=Object(_["a"])([Object(y["b"])({components:{DealItem:J}})],kt);var _t=kt,yt=_t,Ot=(n("bdf6"),Object(c["a"])(yt,vt,xt,!1,null,"148ff877",null)),wt=Ot.exports,jt=function(t){Object(x["a"])(n,t);var e=Object(g["a"])(n);function n(){return Object(h["a"])(this,n),e.apply(this,arguments)}return Object(v["a"])(n,[{key:"fetchData",value:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){this.fetchData()}}]),n}(a["default"]);jt=Object(_["a"])([Object(y["b"])({components:{CaseList:wt}})],jt);var Ft=jt,Dt=Ft,Ct=(n("3ad2"),Object(c["a"])(Dt,bt,ht,!1,null,"4d86bbee",null)),Rt=Ct.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-view"},[n("vue-markdown",{attrs:{source:t.markdownSource}}),t._m(0)],1)},Pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wechat"},[a("img",{attrs:{src:n("752f")}}),a("p",[t._v(":)")])])}],St=n("9ce6"),Et=n.n(St),Mt="\n\n# 项目来源\n\n## 引子\n\n收到行权邮件及其 pdf 附件后，我看了邮件及附件好几遍，但是没有看太懂（暴露智商了，哈哈）。\n\n到家后，让爱人帮忙参谋参谋，TA 说看懂了，但没有看明白细节，让我自己仔细看（锅又回来了）。\n\n于是想，我该如何去理解邮件及附件信息呢？\n\n由于缺乏期权及行权相关的背景知识，传统的阅读 + 同时大脑分析的方式，我理解信息的速率和准确率似乎有点低。\n\n有让自己更快速且准确理解信息的其他方式吗？\n\n前端开发是我擅长的，邮件及附件的核心信息似乎是一个公式计算器，如果采用日常工作中软件开发流程:\n\n1. 产品需求分析\n1. 产品拆解，模块化\n1. 写代码\n1. 测试\n1. bug fix\n\n似乎能帮助我理解邮件及附件信息。\n\n## 第一个版本\n\n说干就干，每天下班哄娃睡熟后，正好写一写。\n\n按照日常工程的开发流程， 花了两个晚上写出了 node 版本 —— 一个 ts 文件。\n\n我心里有点小愉悦:\n\n- 软件开发流程，帮助我理解了邮件及附件大部分信息，达到了预期目的\n- 软件开发流程，也许是一套思维方式，如果运用到日常生活中，可能会产生意想不到的力量\n\n## 迭代\n\n为了准确理解邮件及附件的信息，我花费了挺长时间，且其中夹杂着心烦——在未想到采用软件开发模式之前。\n\n开发完 node 版本计算器，继而的想法是:\n\n1. 其他同学是不是也要花一些时间来理解信息？是不是也有这样的心烦？\n1. 可以写一个文档，写明如何让 node 版本跑起来的详细步骤\n1. node 版本无界面，在命令行跑，展示结果比较丑陋，感觉不是很满意\n1. 不如写一个简单的网站，有良好的交互和界面——前端开发恰恰也是我擅长的\n   - 无论是开发还是非开发的同学，都能很方便地使用该网站\n   - 可以直观地看到计算和结果，并不需要去理解邮件及附件，省时省力\n   - 我对邮件及附件的理解可能存在 bug 的，如果其他同事使用该网站，能帮助我更准确理解邮件及附件的信息，并继续改善网站（即 测试 + bugfix 流程）\n\n于是，将 node 版本改成了基于 Vue 的单页面应用——即这个网站 ( https://fudesign2008.github.io/calculator/ )。\n\n## 思想收获\n\n- 软件是思考力的结晶，是可以让任何人任何时间段重复使用的工具。\n- 软件开发流程，也许是一套思维方式，如果运用到日常生活中，可能会产生意想不到的力量\n\n以上是个人一点粗浅的心得，记之。\n\n\n## Donate\n\n如果本网站或者以上的粗浅心得对你有帮助，可以扫描下面二维码进行赞助。\n\n原创不易，丰俭由君。\n\n",$t=function(t){Object(x["a"])(n,t);var e=Object(g["a"])(n);function n(){var t;return Object(h["a"])(this,n),t=e.apply(this,arguments),t.markdownSource=Mt,t}return Object(v["a"])(n,[{key:"fetchData",value:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"reloadPage",value:function(){if(localStorage){var t=localStorage.getItem("last-reload-time"),e=t?parseInt(t,10):0,n=Date.now();n-e>1e4&&(localStorage.setItem("last-reload-time","".concat(n)),window.location.reload())}}},{key:"created",value:function(){this.fetchData(),this.reloadPage()}}]),n}(a["default"]);$t=Object(_["a"])([Object(y["b"])({components:{VueMarkdown:Et.a}})],$t);var qt=$t,Tt=qt,zt=(n("a53a"),Object(c["a"])(Tt,It,Pt,!1,null,"48bc6472",null)),Bt=zt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"strategy"},[n("vue-markdown",{attrs:{source:t.markdownSource}})],1)},Lt=[],Vt="\n\n### 兑换成现金\n\n优势\n\n- 可以一次性获取大量现金\n- 免除美元转入内地兑换成 RMB 的手续\n\n劣势\n\n- 只能窗口期进行交易\n\n### 兑换成股票\n\n优势\n\n- 享受股票长期走势带来的收益\n- **似乎**不受窗口期的限制，兑换成现金时更灵活\n\n劣势\n\n- 需要自己将美元转入内地并兑换成 RMB\n\n### 行权策略\n\n如果看好股票的长期走势，兑换成现金和股票的策略是不一样的。\n\n可参考**案例** -> **案例1** -> **不同股价下的输出** 下的 **净收益现金(RMB)** 与 **净收益等额股票** 在不同股价下的对比，自行分析得出最佳策略。\n\n或者使用**计算器**结合自身实际情况，自行分析得出最佳策略。\n\n\n",Nt=function(t){Object(x["a"])(n,t);var e=Object(g["a"])(n);function n(){var t;return Object(h["a"])(this,n),t=e.apply(this,arguments),t.markdownSource=Vt,t}return Object(v["a"])(n,[{key:"fetchData",value:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){this.fetchData()}}]),n}(a["default"]);Nt=Object(_["a"])([Object(y["b"])({components:{VueMarkdown:Et.a}})],Nt);var Ut=Nt,Jt=Ut,Ht=(n("bd50"),Object(c["a"])(Jt,At,Lt,!1,null,"16419908",null)),Yt=Ht.exports;a["default"].use(s["a"]);var Xt=[{path:"/",name:"CaseView",component:Rt},{path:"/cal",name:"Home",component:dt},{path:"/strategy",name:"策略",component:Yt},{path:"/about",name:"About",component:Bt}],Gt=new s["a"]({routes:Xt}),Kt=Gt,Qt=n("2f62");a["default"].use(Qt["a"]);var Wt=new Qt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Zt=n("5c96"),te=n.n(Zt);n("0fae");a["default"].use(te.a),a["default"].config.productionTip=!1,new a["default"]({router:Kt,store:Wt,render:function(t){return t(l)}}).$mount("#app")},dc74:function(t,e,n){"use strict";var a=n("10f3"),r=n.n(a);r.a},e487:function(t,e,n){},f171:function(t){t.exports=JSON.parse('{"data":{"market":{"status_id":6,"region":"US","status":"盘后交易","time_zone":"America/New_York","time_zone_desc":null},"quote":{"current_ext":34.5,"symbol":"DAO","high52w":36.99,"percent_ext":0,"delayed":0,"type":0,"tick_size":0.01,"float_shares":null,"high":34.99,"float_market_capital":null,"timestamp_ext":1592862172035,"lot_size":1,"lock_set":null,"chg":-0.2,"eps":-0.12133452213354437,"last_close":34.7,"profit_four":-95962380.93892203,"volume":278520,"volume_ratio":0.46,"profit_forecast":-95771176.6202199,"turnover_rate":0.25,"low52w":12.01,"name":"网易有道","exchange":"NYSE","pe_forecast":-40.263,"total_shares":111767756,"status":1,"code":"DAO","goodwill_in_net_assets":null,"avg_price":34.319,"percent":-0.58,"psr":16.9,"amplitude":5.45,"current":34.5,"current_year_percent":145.03,"issue_date":1571932800000,"sub_type":"1536","low":33.1,"market_capital":3855987582,"shareholder_funds":22098442.66696815,"dividend":null,"dividend_yield":null,"currency":"USD","chg_ext":0,"navps":0.19771911477911874,"profit":-85003674.28845991,"beta":null,"timestamp":1592856001853,"pe_lyr":-45.3626,"amount":9558528,"pledge_ratio":null,"short_ratio":1.22,"inst_hld":null,"pb":174.4914,"pe_ttm":-40.182,"contract_size":100,"variable_tick_size":"0.0001 1 0.01","time":1592856001853,"open":34.97},"others":{"pankou_ratio":-33.33},"tags":[{"description":"融","value":6},{"description":"空","value":7}]},"error_code":0,"error_description":""}')}});
//# sourceMappingURL=app.d39dedb6.js.map