(function(e){function t(t){for(var a,c,i=t[0],u=t[1],l=t[2],m=0,p=[];m<i.length;m++)c=i[m],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/calculator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"280f":function(e,t,n){},"3ad2":function(e,t,n){"use strict";var a=n("b4ee"),r=n.n(a);r.a},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"635f":function(e,t,n){"use strict";var a=n("9aaf"),r=n.n(a);r.a},"752f":function(e,t,n){e.exports=n.p+"img/wechat.78daf999.jpg"},"7af1":function(e,t,n){},"9aaf":function(e,t,n){},"9c0c":function(e,t,n){},a53a:function(e,t,n){"use strict";var a=n("280f"),r=n.n(a);r.a},b4ee:function(e,t,n){},bdf6:function(e,t,n){"use strict";var a=n("e487"),r=n.n(a);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("案例")]),e._v(" | "),n("router-link",{attrs:{to:"/cal"}},[e._v("计算器")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},o=[],c=(n("5c0b"),n("2877")),i={},u=Object(c["a"])(i,r,o,!1,null,null,null),l=u.exports,s=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("calculator")],1)},p=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calculator"},[n("div",{staticClass:"list"},e._l(e.dealList,(function(e){return n("deal-item",{key:e.id,attrs:{deal:e.deal,title:e.title}})})),1),n("div",{staticClass:"input"},[n("el-divider",{attrs:{"content-position":"left"}},[n("h3",[e._v("行权计算器")])]),n("el-form",{ref:"computeForm",attrs:{model:e.computeForm,"label-width":"120px",size:"small"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",{attrs:{label:"行权价格 ($)"}},[n("el-slider",{attrs:{"show-input":""},model:{value:e.computeForm.outPriceInDollar,callback:function(t){e.$set(e.computeForm,"outPriceInDollar",t)},expression:"computeForm.outPriceInDollar"}})],1),n("el-form-item",{attrs:{label:"行权成本 ($)"}},[n("el-slider",{attrs:{min:0,max:e.inPriceInDollarMax,"show-input":""},model:{value:e.computeForm.inPriceInDollar,callback:function(t){e.$set(e.computeForm,"inPriceInDollar",t)},expression:"computeForm.inPriceInDollar"}})],1),n("el-form-item",{attrs:{label:"行权数量"}},[n("el-slider",{attrs:{min:0,max:1e6,step:100,"show-input":""},model:{value:e.computeForm.outCount,callback:function(t){e.$set(e.computeForm,"outCount",t)},expression:"computeForm.outCount"}})],1),n("el-form-item",{attrs:{label:"美元/人民币汇率"}},[n("el-slider",{attrs:{min:0,"show-input":""},model:{value:e.computeForm.exchangeRate,callback:function(t){e.$set(e.computeForm,"exchangeRate",t)},expression:"computeForm.exchangeRate"}})],1),n("el-form-item",{attrs:{label:"累计税收益总额 (RMB)"}},[n("el-slider",{attrs:{min:0,max:1e7,"show-input":""},model:{value:e.computeForm.baseEarning,callback:function(t){e.$set(e.computeForm,"baseEarning",t)},expression:"computeForm.baseEarning"}})],1),n("el-form-item",{attrs:{label:"累计已纳税总额 (RMB)"}},[n("el-slider",{attrs:{min:0,max:e.baseTaxMax,"show-input":""},model:{value:e.computeForm.baseTax,callback:function(t){e.$set(e.computeForm,"baseTax",t)},expression:"computeForm.baseTax"}})],1),n("el-form-item",{attrs:{label:"现金股票"}},[n("el-switch",{attrs:{"active-text":"现金","inactive-text":"股票"},model:{value:e.computeForm.toCash,callback:function(t){e.$set(e.computeForm,"toCash",t)},expression:"computeForm.toCash"}})],1),n("el-form-item",{attrs:{label:"保本售出数量"}},[n("el-slider",{attrs:{min:0,max:e.outForCostMax,disabled:e.isForCash,"show-input":""},model:{value:e.computeForm.outForCost,callback:function(t){e.$set(e.computeForm,"outForCost",t)},expression:"computeForm.outForCost"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("computeForm")}}},[e._v(" 计算 ")]),n("el-button",{on:{click:function(t){return e.resetForm("computeForm")}}},[e._v("重置")])],1)],1)],1),e._m(0)])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"thanks"},[n("p",[e._v(" * 汇率由 "),n("a",{attrs:{href:"https://www.mycurrency.net/",target:"_blank"}},[e._v(" https://www.mycurrency.net/ ")]),e._v(" 提供 ")])])}],h=(n("d81d"),n("5530")),v=(n("96cf"),n("d4ec")),b=n("bee2"),x=n("262e"),g=n("2caf"),k=n("1da1"),_=n("9ab4"),y=n("2fe1"),F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"deal-item"},[n("el-divider",{attrs:{"content-position":"left"}},[n("h3",[e._v(e._s(e.title))])]),n("div",{staticClass:"table"},[n("div",{staticClass:"input"},[n("h5",[e._v("输入")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dealInput,size:"mini"}},[n("el-table-column",{attrs:{prop:"name",label:"项目"}}),n("el-table-column",{attrs:{prop:"value",label:"数值"}})],1)],1),n("div",{staticClass:"output"},[n("h5",[e._v("结果")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dealOut,size:"mini"}},[n("el-table-column",{attrs:{prop:"name",label:"项目"}}),n("el-table-column",{attrs:{prop:"value",label:"数值"}})],1)],1)])],1)},w=[],O=(n("99af"),n("caad"),n("b680"),n("b64b"),n("a9e3"),[{limit:0,taxRate:0,quickDeduction:0},{limit:36e3,taxRate:.03,quickDeduction:0},{limit:144e3,taxRate:.1,quickDeduction:2520},{limit:3e5,taxRate:.2,quickDeduction:16920},{limit:42e4,taxRate:.25,quickDeduction:31920},{limit:66e4,taxRate:.3,quickDeduction:52920},{limit:96e4,taxRate:.35,quickDeduction:85920},{limit:Number.MAX_VALUE,taxRate:.45,quickDeduction:181920}]);function j(e,t){for(var n=0,a=0,r=e+t,o=1;o<O.length;o++){var c=O[o-1],i=O[o];r>c.limit&&r<i.limit&&(n=i.taxRate,a=i.quickDeduction)}return{taxRate:n,quickDeduction:a}}function C(e){var t=e.outPriceInDollar,n=e.inPriceInDollar,a=e.outCount,r=e.exchangeRate,o=a;return(t-n)*o*r}function D(e){var t=C(e),n=j(t,e.baseEarning),a=n.taxRate*(t+e.baseEarning)-n.quickDeduction-e.baseTax;return{tax:a,taxRate:n.taxRate,quickDeduction:n.quickDeduction}}function R(e){var t=e.outPriceInDollar,n=e.inPriceInDollar,a=e.exchangeRate,r=e.outCount,o=e.outForCost,c=e.toCash,i=c?r:o;return(t-n)*i*.0207*a/1e3}function I(e){var t=e.outCount,n=e.exchangeRate,a=e.toCash,r=e.outForCost,o=a?t:r,c=.02*o,i=20;return Math.max(c,i)*n}function P(e){var t=e.exchangeRate;return 5.35*t}function S(e){var t=e.outPriceInDollar,n=e.inPriceInDollar,a=e.outCount,r=e.exchangeRate,o=t*a*r,c=n*a*r,i=o-c,u=(t-n)*a*r,l=R(e),s=I(e),m=P(e),p=0,f=l+s+m+p,d=D(e),h=d.tax,v=d.taxRate,b=d.quickDeduction,x=u-h-f,g=x/u;return{outIncome:o,inCost:c,incomeForTax:i,secFee:l,commissionFee:s,cpmFee:m,toStockFee:p,feeTotal:f,tax:h,taxRate:v,quickDeduction:b,cash:x,stock:0,incomeRate:g}}function E(e){var t=e.outPriceInDollar,n=e.inPriceInDollar,a=e.outCount,r=e.exchangeRate,o=e.outForCost,c=t*a*r,i=n*a*r,u=c-i,l=R(e),s=I(e),m=P(e),p=0,f=l+s+m+p,d=D(e),h=d.tax,v=d.taxRate,b=d.quickDeduction,x=t*o*r,g=x-i-h-f,k=1-(h+f)/(r*a*(t-n));return{outIncome:c,inCost:i,incomeForTax:u,secFee:l,commissionFee:s,cpmFee:m,toStockFee:p,feeTotal:f,tax:h,taxRate:v,quickDeduction:b,cash:g,stock:a-o,incomeRate:k}}function q(e){return e.toCash?S(e):E(e)}var T=n("60a3"),$={outPriceInDollar:"行权价格 ($)",inPriceInDollar:"行权成本 ($)",outCount:"行权数量",exchangeRate:"美元/人民币汇率",baseTax:"本财政年度累计已纳税总额 (RMB)",baseEarning:"当前财政年度已有计税收益 (RMB)",toCash:"获取现金还是股票",outForCost:"系统计算保本售出卖出数量(用于支付成本, 仅适用获取股票)"},M={outIncome:"行权总额",inCost:"行权成本",incomeForTax:"行权收益",taxRate:"适用税率",tax:"个税总额",quickDeduction:"速算扣除数",secFee:"SEC费用",commissionFee:"券商佣金",cpmFee:"CPM手续费(行权手续费)",feeTotal:"总行权费用(券商佣金、 SEC 费用、行权手续费)",cash:"净收益现金",stock:"净收益股票",incomeRate:"净收益比例"};function z(e){return!0===e?"现金":!1===e?"股票":e}var A=["outIncome","inCost","incomeForTax","tax","quickDeduction","secFee","computeSecFee","commissionFee","cpmFee","toStockFee","feeTotal","cash"];function L(e,t,n){if(A.includes(e)){var a=t.toFixed(2),r=(t/n).toFixed(2);return"".concat(a," RMB / ").concat(r," $")}return t}var B=function(e){Object(x["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(v["a"])(this,n),t.apply(this,arguments)}return Object(b["a"])(n,[{key:"fetchData",value:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){this.fetchData()}},{key:"dealInput",get:function(){var e=this.deal,t=Object.keys($),n=t.map((function(t){return{name:$[t],value:z(e[t])}}));return n}},{key:"dealResult",get:function(){var e=this.deal,t=q(e);return t}},{key:"dealOut",get:function(){var e=this.dealResult,t=this.deal,n=Object.keys(M),a=n.map((function(n){var a=e[n];return{name:M[n],value:L(n,a,t.exchangeRate)}}));return a}}]),n}(a["default"]);Object(_["a"])([Object(T["a"])({type:Object,required:!0})],B.prototype,"deal",void 0),Object(_["a"])([Object(T["a"])({type:String,required:!0})],B.prototype,"title",void 0),B=Object(_["a"])([Object(y["b"])({})],B);var N=B,U=N,V=(n("e43d"),Object(c["a"])(U,F,w,!1,null,"c1edc91a",null)),J=V.exports,H=n("8dee"),Y=n.n(H),X=(n("7db0"),n("bc3a")),G=n.n(X),K=-1,Q=356;function W(e){var t=e.find((function(e){return e.id===Q}));return t?t.rate:-1}function Z(){return ee.apply(this,arguments)}function ee(){return ee=Object(k["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(-1===K){e.next=2;break}return e.abrupt("return",K);case 2:return t="https://www.mycurrency.net/US.json",n=null,e.prev=4,e.next=7,G.a.get(t);case 7:n=e.sent,e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](4);case 12:return n&&n.data&&n.data.rates&&(a=W(n.data.rates),-1!==a&&(K=a)),e.abrupt("return",K);case 14:case"end":return e.stop()}}),e,null,[[4,10]])}))),ee.apply(this,arguments)}var te=n("f171"),ne=te.data.quote.current;function ae(){var e={outPriceInDollar:ne,inPriceInDollar:2.5,outCount:2e3,exchangeRate:7,toCash:!0,baseTax:0,baseEarning:0,outForCost:0};return e}function re(){return oe.apply(this,arguments)}function oe(){return oe=Object(k["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=ae(),e.next=3,Z();case 3:return n=e.sent,n&&-1!==n&&(t.exchangeRate=n),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)}))),oe.apply(this,arguments)}var ce=function(e){Object(x["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(v["a"])(this,n),e=t.apply(this,arguments),e.computeForm=ae(),e.deals=[],e}return Object(b["a"])(n,[{key:"fetchData",value:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:t=e.sent,-1!==t&&(this.computeForm.exchangeRate=t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"resetForm",value:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:this.computeForm=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"submitForm",value:function(){var e=this.computeForm,t=Object(h["a"])({},e);this.deals.push(t),this.resetForm()}},{key:"created",value:function(){this.fetchData()}},{key:"outForCostMax",get:function(){var e=this.computeForm;return e.outCount}},{key:"isForCash",get:function(){var e=this.computeForm;return!!e.toCash}},{key:"inPriceInDollarMax",get:function(){var e=this.computeForm;return e.outPriceInDollar}},{key:"baseTaxMax",get:function(){var e=this.computeForm;return e.baseEarning}},{key:"dealList",get:function(){var e=this.deals;return e.map((function(e,t){return{deal:e,title:"".concat(t+1),id:Y.a.generate()}}))}}]),n}(a["default"]);ce=Object(_["a"])([Object(y["b"])({components:{DealItem:J}})],ce);var ie=ce,ue=ie,le=(n("635f"),Object(c["a"])(ue,f,d,!1,null,"b391811e",null)),se=le.exports,me={name:"Home",components:{Calculator:se}},pe=me,fe=Object(c["a"])(pe,m,p,!1,null,null,null),de=fe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"case-view"},[n("case-list")],1)},ve=[],be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"case-list"},e._l(e.dealList,(function(e){return n("deal-item",{key:e.id,attrs:{deal:e.deal,title:e.title}})})),1)},xe=[],ge=[{title:"案例 1 期权行权：我想获得现金",deal:{outPriceInDollar:15,inPriceInDollar:2.5,outCount:2e3,exchangeRate:7,toCash:!0,baseTax:0,baseEarning:0,outForCost:0}},{title:"案例 2 期权行权：我想获得现金",deal:{outPriceInDollar:16,inPriceInDollar:2.5,outCount:2e3,exchangeRate:7,toCash:!0,baseTax:18080,baseEarning:175e3,outForCost:0}},{title:"案例 3 期权行权：我想获得股票",deal:{outPriceInDollar:20.07,inPriceInDollar:2.5,outCount:2400,exchangeRate:7,toCash:!1,baseTax:0,baseEarning:0,outForCost:662}}],ke=function(e){Object(x["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(v["a"])(this,n),e=t.apply(this,arguments),e.testCases=ge,e}return Object(b["a"])(n,[{key:"fetchData",value:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){this.fetchData()}},{key:"dealList",get:function(){var e=this.testCases;return e.map((function(e){return Object(h["a"])(Object(h["a"])({},e),{},{id:Y.a.generate()})}))}}]),n}(a["default"]);ke=Object(_["a"])([Object(y["b"])({components:{DealItem:J}})],ke);var _e=ke,ye=_e,Fe=(n("bdf6"),Object(c["a"])(ye,be,xe,!1,null,"148ff877",null)),we=Fe.exports,Oe=function(e){Object(x["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(v["a"])(this,n),t.apply(this,arguments)}return Object(b["a"])(n,[{key:"fetchData",value:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){this.fetchData()}}]),n}(a["default"]);Oe=Object(_["a"])([Object(y["b"])({components:{CaseList:we}})],Oe);var je=Oe,Ce=je,De=(n("3ad2"),Object(c["a"])(Ce,he,ve,!1,null,"4d86bbee",null)),Re=De.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about-view"},[n("vue-markdown",{attrs:{source:e.markdownSource}}),e._m(0)],1)},Pe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wechat"},[a("img",{attrs:{src:n("752f")}}),a("p",[e._v(":)")])])}],Se=n("9ce6"),Ee=n.n(Se),qe="\n\n## 引子\n\n收到行权邮件及其 pdf 附件后，我看了邮件及附件好几遍，但是没有看太懂（似乎暴露智商了，哈哈)。\n\n到家后，让爱人帮忙参谋参谋，TA 说看懂了，但没有看明白细节，让我自己仔细看(锅又回来了)。\n\n于是想，我该如何去理解邮件及附件信息呢？\n\n传统的阅读 + 同时大脑分析的方式，我理解信息的速率和准确率似乎有点低。\n\n前端开发是我擅长的，邮件及附件信息似乎就是一个公式计算器，如果采用日常工作中软件开发流程:\n\n1. 产品需求分析\n1. 产品拆解，模块化\n1. 写代码\n1. 测试\n1. bug fix\n\n似乎能帮助我理解邮件及附件信息。\n\n## 第一个版本\n\n说干就干，下班哄娃睡熟后，正好写一写。\n\n按照日常工程的开发流程， 花了两个晚上写出了 node 版本 —— 一个 ts 文件。\n\n我心里有点小愉悦:\n\n- 软件开发流程，有效帮助我理解了邮件及附件信息，达到了预期目的\n- 软件开发流程，也许是一套很强大的思维方式，如果能够推广运用到日常生活中，能够产生巨大的力量\n\n## 迭代\n\n为了准确理解邮件及附件的信息，我花费了挺长时间，且其中夹杂着心烦——未想到采用软件开发模式之前。\n\n继而想法是:\n\n1. 其他同事是不是也要花一些时间来理解信息？是不是也有这样的心烦？\n1. 可以写一个文档，写明如何让 node 版本跑起来的详细步骤\n1. node 版本无界面，在命令行跑，展示结果比较丑陋，感觉不是很满意\n1. 不如写一个简单的网站，有良好的交互和界面——前端开发恰恰也是我擅长的\n   - 无论是开发还是非开发的同事，都能很方便地使用该网站\n   - 同事可以直观地看到计算和结果，并不需要去理解邮件及附件，省时省力\n   - 我对邮件及附件的理解可能存在 bug 的，如果其他同事使用该网站，能帮助我更准确理解邮件及附件的信息，并继续改善网站（即测试+bugfix 流程）\n\n于是，将 node 版本改成了基于 Vue 的单页面应用——即这个网站。\n\n## 思想收获\n\n- 软件是思考力的结晶，是可以让任何人任何时间段重复使用的工具，很强大\n- 软件开发流程，也许是一套很强大的思维方式，如果能够推广运用到日常生活中，能够产生巨大的力量\n\n以上是个人一点粗浅的心得。\n\n## Donate\n\n如果本网站或者以上的粗浅心得对你有帮助，可以**微信**扫描下面二维码进行赞助。\n\n原创不易，丰俭由君。\n\n",Te=function(e){Object(x["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(v["a"])(this,n),e=t.apply(this,arguments),e.markdownSource=qe,e}return Object(b["a"])(n,[{key:"fetchData",value:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"reloadPage",value:function(){if(localStorage){var e=localStorage.getItem("last-reload-time"),t=e?parseInt(e,10):0,n=Date.now();n-t>1e4&&(localStorage.setItem("last-reload-time","".concat(n)),window.location.reload())}}},{key:"created",value:function(){this.fetchData(),this.reloadPage()}}]),n}(a["default"]);Te=Object(_["a"])([Object(y["b"])({components:{VueMarkdown:Ee.a}})],Te);var $e=Te,Me=$e,ze=(n("a53a"),Object(c["a"])(Me,Ie,Pe,!1,null,"48bc6472",null)),Ae=ze.exports;a["default"].use(s["a"]);var Le=[{path:"/",name:"CaseView",component:Re},{path:"/cal",name:"Home",component:de},{path:"/about",name:"About",component:Ae}],Be=new s["a"]({routes:Le}),Ne=Be,Ue=n("2f62");a["default"].use(Ue["a"]);var Ve=new Ue["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Je=n("5c96"),He=n.n(Je);n("0fae");a["default"].use(He.a),a["default"].config.productionTip=!1,new a["default"]({router:Ne,store:Ve,render:function(e){return e(l)}}).$mount("#app")},e43d:function(e,t,n){"use strict";var a=n("7af1"),r=n.n(a);r.a},e487:function(e,t,n){},f171:function(e){e.exports=JSON.parse('{"data":{"market":{"status_id":5,"region":"US","status":"交易中","time_zone":"America/New_York","time_zone_desc":null},"quote":{"current_ext":24.05,"symbol":"DAO","high52w":29.5,"percent_ext":0.04,"delayed":0,"type":0,"tick_size":0.01,"float_shares":null,"high":24.14,"float_market_capital":null,"timestamp_ext":1590585153889,"lot_size":1,"lock_set":null,"chg":-0.87,"eps":-0.11872975228727649,"last_close":24.04,"profit_four":-94926748.11977522,"volume":109228,"volume_ratio":0.8,"profit_forecast":-94737607.29163754,"turnover_rate":0.1,"low52w":12.01,"name":"网易有道","exchange":"NYSE","pe_forecast":-27.335,"total_shares":111767756,"status":1,"code":"DAO","goodwill_in_net_assets":null,"avg_price":23.027,"percent":-3.62,"psr":11.8,"amplitude":7.9,"current":23.17,"current_year_percent":64.56,"issue_date":1571932800000,"sub_type":"1536","low":22.24,"market_capital":2589658907,"shareholder_funds":21859954.706852686,"dividend":null,"dividend_yield":null,"currency":"USD","chg_ext":0.01,"navps":0.19558531607347557,"profit":-84086308.60849386,"beta":null,"timestamp":1590592590376,"pe_lyr":-30.7976,"amount":2515193,"pledge_ratio":null,"short_ratio":1.81,"inst_hld":null,"pb":118.4659,"pe_ttm":-27.281,"contract_size":100,"variable_tick_size":"0.0001 1 0.01","time":1590592590376,"open":23.53},"others":{"pankou_ratio":0},"tags":[{"description":"融","value":6},{"description":"空","value":7}]},"error_code":0,"error_description":""}')}});
//# sourceMappingURL=app.9e3c972e.js.map