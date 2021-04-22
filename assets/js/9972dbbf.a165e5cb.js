(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(246)),s=a(250),l=a(251),c={title:"Dealing with message"},i={unversionedId:"howto/message",id:"howto/message",isDocsHomePage:!1,title:"Dealing with message",description:"Mention",source:"@site/docs/howto/message.md",sourceDirName:"howto",slug:"/howto/message",permalink:"/docs/howto/message",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/message.md",version:"current",lastUpdatedBy:"Joseph Mawa",lastUpdatedAt:1619122163,formattedLastUpdatedAt:"4/22/2021",frontMatter:{title:"Dealing with message"},sidebar:"docs",previous:{title:"Listening events",permalink:"/docs/howto/event"},next:{title:"Managing contacts",permalink:"/docs/howto/contact"}},u=[{value:"Mention",id:"mention",children:[]},{value:"Self message",id:"self-message",children:[]}],m={toc:u};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"mention"},"Mention"),Object(o.b)("p",null,"Only a message in the room can mention(@) others."),Object(o.b)(s.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { Message } from 'wechaty'\n\nasync function onMessage(message: Message): Promise<void> {\n  if (await message.mentionSelf()) {\n    const room = message.room()\n    if (!room) {\n      throw new Error('Should never reach here: a mention message must in a room')\n    }\n\n    console.info(message.text())\n    // \"@bot Hello\"\n    console.info(await message.mentionList())\n    // [bot]\n    console.info(await message.mentionText())\n    // \"Hello\"\n\n    const talker = room.talker()\n    await room.say`Thanks for mention me! ${talker}`\n  }\n}\n\nbot.on('message', onMessage)\n"))),Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const { Message } = require('wechaty')\n\nasync function onMessage(message) {\n  if (await message.mentionSelf()) {\n    const room = message.room()\n    if (!room) {\n      throw new Error('Should never reach here: a mention message must in a room')\n    }\n\n    console.info(message.text())\n    // \"@bot Hello\"\n    console.info(await message.mentionList())\n    // [bot]\n    console.info(await message.mentionText())\n    // \"Hello\"\n\n    const talker = room.talker()\n    await room.say`Thanks for mention me! ${talker}`\n  }\n}\n\nbot.on('message', onMessage)\n"))),Object(o.b)(l.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-py"},"from typing import List\nfrom wechaty import Wechaty, Contact\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        contacts: List[Contact] = await self.Contact.find_all()\n        for contact in contacts:\n            print(f'id<{contact.contact_id}>, name<{contact.name}>, type<{contact.type()}>')\n"))),Object(o.b)(l.a,{value:"go",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(l.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(l.a,{value:"php",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(l.a,{value:"scala",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(l.a,{value:"csharp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(l.a,{value:"rust",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),Object(o.b)("h2",{id:"self-message"},"Self message"),Object(o.b)(s.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { Message } from 'wechaty'\n\nasync function onMessage(message: Message): Promise<void> {\n  if (message.self()) {\n    const talker = message.talker()\n    const bot = message.wechaty.userSelf()\n    assert(talker === bot, 'Message is sent from bot')\n    console.info('Message is sent from bot')\n  }\n}\n\nbot.on('message', onMessage)\n"))),Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const { Message } = require('wechaty')\n\nasync function onMessage(message) {\n  if (message.self()) {\n    const talker = message.talker()\n    const bot = message.wechaty.userSelf()\n    assert(talker === bot, 'Message is sent from bot')\n    console.info('Message is sent from bot')\n  }\n}\n\nbot.on('message', onMessage)\n"))),Object(o.b)(l.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-py"},"from typing import List, Optional\nfrom wechaty import Wechaty, Contact\nfrom wechaty_puppet.schemas.contact import ContactQueryFilter\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        # find by id\n        filehelper: Optional[Contact] = await self.Contact.find('filehelper')\n        if filehelper:\n            print(f'filehelper<{filehelper}>')\n        \n        # find by name\n        contacts: List[Contact] = await self.Contact.find_all(ContactQueryFilter(name='your-friend-name'))\n        print(f'total number of contacts: {len(contacts)}')\n\n        for contact in contacts:\n            print(contact)\n"))),Object(o.b)(l.a,{value:"go",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(l.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(l.a,{value:"php",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(l.a,{value:"scala",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(l.a,{value:"csharp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(l.a,{value:"rust",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))))}b.isMDXComponent=!0},246:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=u(a),p=n,f=m["".concat(s,".").concat(p)]||m[p]||b[p]||o;return a?r.a.createElement(f,l(l({ref:t},i),{},{components:a})):r.a.createElement(f,l({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},247:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},248:function(e,t,a){"use strict";var n=a(0),r=a(249);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},249:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},250:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(248),s=a(247),l=a(61),c=a.n(l);var i=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,m=e.values,b=e.groupId,p=e.className,f=Object(o.a)(),g=f.tabGroupChoices,d=f.setTabGroupChoices,O=Object(n.useState)(l),v=O[0],y=O[1],j=n.Children.toArray(e.children),h=[];if(null!=b){var w=g[b];null!=w&&w!==v&&m.some((function(e){return e.value===w}))&&y(w)}var T=function(e){var t=e.currentTarget,a=h.indexOf(t),n=m[a].value;y(n),null!=b&&(d(b,n),setTimeout((function(){var e,a,n,r,o,s,l,i;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,s=window,l=s.innerHeight,i=s.innerWidth,a>=0&&o<=i&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,a;switch(e.keyCode){case u:var n=h.indexOf(e.target)+1;a=h[n]||h[0];break;case i:var r=h.indexOf(e.target)-1;a=h[r]||h[h.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},p)},m.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:N,onFocus:T,onClick:T},a)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},251:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);