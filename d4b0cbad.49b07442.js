(window.webpackJsonp=window.webpackJsonp||[]).push([[832],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return o}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),O=l(a),m=n,o=O["".concat(c,".").concat(m)]||O[m]||j[m]||b;return a?r.a.createElement(o,i(i({ref:t},s),{},{components:a})):r.a.createElement(o,i({ref:t},s))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<b;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},902:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),b=(a(0),a(1086)),c={id:"eventmanager",title:"Class: EventManager",sidebar_label:"EventManager"},i={unversionedId:"api/classes/eventmanager",id:"version-4.2/api/classes/eventmanager",isDocsHomePage:!1,title:"Class: EventManager",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/eventmanager.md",slug:"/api/classes/eventmanager",permalink:"/docs/4.2/api/classes/eventmanager",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/eventmanager.md",version:"4.2",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1608574633,sidebar_label:"EventManager",sidebar:"version-4.2/API",previous:{title:"Class: EnumArrayType<T>",permalink:"/docs/4.2/api/classes/enumarraytype"},next:{title:"Class: ExceptionConverter",permalink:"/docs/4.2/api/classes/exceptionconverter"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"entities",id:"entities",children:[]},{value:"listeners",id:"listeners",children:[]}]},{value:"Methods",id:"methods",children:[{value:"dispatchEvent",id:"dispatchevent",children:[]},{value:"getSubscribedEntities",id:"getsubscribedentities",children:[]},{value:"hasListeners",id:"haslisteners",children:[]},{value:"registerSubscriber",id:"registersubscriber",children:[]}]}],s={rightToc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"EventManager"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new EventManager"),"(",Object(b.b)("inlineCode",{parentName:"p"},"subscribers"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/eventsubscriber"}),"EventSubscriber"),"[]): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/eventmanager"}),"EventManager")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/events/EventManager.ts#L9"}),"packages/core/src/events/EventManager.ts:9"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"subscribers")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/eventsubscriber"}),"EventSubscriber"),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/eventmanager"}),"EventManager")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"entities"},"entities"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"entities"),": Map","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/eventsubscriber"}),"EventSubscriber"),", string[]> = new Map()"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/events/EventManager.ts#L9"}),"packages/core/src/events/EventManager.ts:9"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"listeners"},"listeners"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"listeners"),": Partial","<","Record","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/enums/eventtype"}),"EventType"),", ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/eventsubscriber"}),"EventSubscriber"),"[]>>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/events/EventManager.ts#L8"}),"packages/core/src/events/EventManager.ts:8"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"dispatchevent"},"dispatchEvent"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"dispatchEvent"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"event"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/enums/eventtype#oninit"}),"onInit"),", ",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Partial","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/eventargs"}),"EventArgs"),"<","T>>): unknown"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/events/EventManager.ts#L25"}),"packages/core/src/events/EventManager.ts:25"))),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"event")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/enums/eventtype#oninit"}),"onInit"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Partial","<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/eventargs"}),"EventArgs"),"<","T>>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," unknown"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"dispatchEvent"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"event"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/enums/eventtype"}),"EventType"),", ",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Partial","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/eventargs"}),"EventArgs"),"<","T> ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/flusheventargs"}),"FlushEventArgs"),">): Promise","<","unknown>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/events/EventManager.ts#L26"}),"packages/core/src/events/EventManager.ts:26"))),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"event")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/enums/eventtype"}),"EventType"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Partial","<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/eventargs"}),"EventArgs"),"<","T> ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/flusheventargs"}),"FlushEventArgs"),">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","unknown>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getsubscribedentities"},"getSubscribedEntities"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getSubscribedEntities"),"(",Object(b.b)("inlineCode",{parentName:"p"},"listener"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/eventsubscriber"}),"EventSubscriber"),"): string[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/events/EventManager.ts#L69"}),"packages/core/src/events/EventManager.ts:69"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"listener")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/eventsubscriber"}),"EventSubscriber"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string[]"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"haslisteners"},"hasListeners"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hasListeners"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"event"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/enums/eventtype"}),"EventType"),", ",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/events/EventManager.ts#L50"}),"packages/core/src/events/EventManager.ts:50"))),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"event")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/enums/eventtype"}),"EventType"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"registersubscriber"},"registerSubscriber"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"registerSubscriber"),"(",Object(b.b)("inlineCode",{parentName:"p"},"subscriber"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/eventsubscriber"}),"EventSubscriber"),"): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/events/EventManager.ts#L15"}),"packages/core/src/events/EventManager.ts:15"))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"subscriber")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/eventsubscriber"}),"EventSubscriber"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"))}l.isMDXComponent=!0}}]);