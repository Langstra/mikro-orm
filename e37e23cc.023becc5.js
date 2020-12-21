(window.webpackJsonp=window.webpackJsonp||[]).push([[896],{1086:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),i=function(e){var r=a.a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):b(b({},r),e)),t},m=function(e){var r=i(e.components);return a.a.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=i(t),p=n,d=m["".concat(s,".").concat(p)]||m[p]||u[p]||c;return t?a.a.createElement(d,b(b({ref:r},o),{},{components:t})):a.a.createElement(d,b({ref:r},o))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,s=new Array(c);s[0]=p;var b={};for(var l in r)hasOwnProperty.call(r,l)&&(b[l]=r[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,s[1]=b;for(var o=2;o<c;o++)s[o]=t[o];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},966:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return b})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return i}));var n=t(3),a=t(7),c=(t(0),t(1086)),s={id:"queryorder",title:"Enumeration: QueryOrder",sidebar_label:"QueryOrder"},b={unversionedId:"api/enums/queryorder",id:"version-4.2/api/enums/queryorder",isDocsHomePage:!1,title:"Enumeration: QueryOrder",description:"Enumeration members",source:"@site/versioned_docs/version-4.2/api/enums/queryorder.md",slug:"/api/enums/queryorder",permalink:"/docs/4.2/api/enums/queryorder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/enums/queryorder.md",version:"4.2",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1608574633,sidebar_label:"QueryOrder",sidebar:"version-4.2/API",previous:{title:"Enumeration: QueryOperator",permalink:"/docs/4.2/api/enums/queryoperator"},next:{title:"Enumeration: QueryOrderNumeric",permalink:"/docs/4.2/api/enums/queryordernumeric"}},l=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"ASC",id:"asc",children:[]},{value:"ASC_NULLS_FIRST",id:"asc_nulls_first",children:[]},{value:"ASC_NULLS_LAST",id:"asc_nulls_last",children:[]},{value:"DESC",id:"desc",children:[]},{value:"DESC_NULLS_FIRST",id:"desc_nulls_first",children:[]},{value:"DESC_NULLS_LAST",id:"desc_nulls_last",children:[]},{value:"asc",id:"asc-1",children:[]},{value:"asc_nulls_first",id:"asc_nulls_first-1",children:[]},{value:"asc_nulls_last",id:"asc_nulls_last-1",children:[]},{value:"desc",id:"desc-1",children:[]},{value:"desc_nulls_first",id:"desc_nulls_first-1",children:[]},{value:"desc_nulls_last",id:"desc_nulls_last-1",children:[]}]}],o={rightToc:l};function i(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(c.b)("h3",{id:"asc"},"ASC"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"ASC"),':  = "ASC"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L27"}),"packages/core/src/enums.ts:27"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"asc_nulls_first"},"ASC","_","NULLS","_","FIRST"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"ASC","_","NULLS","_","FIRST"),':  = "ASC NULLS FIRST"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L29"}),"packages/core/src/enums.ts:29"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"asc_nulls_last"},"ASC","_","NULLS","_","LAST"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"ASC","_","NULLS","_","LAST"),':  = "ASC NULLS LAST"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L28"}),"packages/core/src/enums.ts:28"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"desc"},"DESC"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"DESC"),':  = "DESC"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L30"}),"packages/core/src/enums.ts:30"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"desc_nulls_first"},"DESC","_","NULLS","_","FIRST"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"DESC","_","NULLS","_","FIRST"),':  = "DESC NULLS FIRST"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L32"}),"packages/core/src/enums.ts:32"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"desc_nulls_last"},"DESC","_","NULLS","_","LAST"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"DESC","_","NULLS","_","LAST"),':  = "DESC NULLS LAST"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L31"}),"packages/core/src/enums.ts:31"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"asc-1"},"asc"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"asc"),':  = "asc"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L33"}),"packages/core/src/enums.ts:33"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"asc_nulls_first-1"},"asc","_","nulls","_","first"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"asc","_","nulls","_","first"),':  = "asc nulls first"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L35"}),"packages/core/src/enums.ts:35"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"asc_nulls_last-1"},"asc","_","nulls","_","last"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"asc","_","nulls","_","last"),':  = "asc nulls last"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L34"}),"packages/core/src/enums.ts:34"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"desc-1"},"desc"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"desc"),':  = "desc"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L36"}),"packages/core/src/enums.ts:36"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"desc_nulls_first-1"},"desc","_","nulls","_","first"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"desc","_","nulls","_","first"),':  = "desc nulls first"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L38"}),"packages/core/src/enums.ts:38"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"desc_nulls_last-1"},"desc","_","nulls","_","last"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"desc","_","nulls","_","last"),':  = "desc nulls last"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L37"}),"packages/core/src/enums.ts:37"))))}i.isMDXComponent=!0}}]);