(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(246)),o={title:"Write documentation"},c={unversionedId:"contributing/documentation",id:"contributing/documentation",isDocsHomePage:!1,title:"Write documentation",description:"We place a high importance on consistency and readability of documentation.",source:"@site/docs/contributing/documentation.md",sourceDirName:"contributing",slug:"/contributing/documentation",permalink:"/docs/contributing/documentation",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/contributing/documentation.md",version:"current",lastUpdatedBy:"Joseph Mawa",lastUpdatedAt:1619122163,formattedLastUpdatedAt:"4/22/2021",frontMatter:{title:"Write documentation"},sidebar:"docs",previous:{title:"Advice for new contributors",permalink:"/docs/contributing/new-contributors"},next:{title:"Wechaty contributor program",permalink:"/docs/contributor-program/"}},s=[{value:"Getting the raw documentation",id:"getting-the-raw-documentation",children:[]},{value:"Getting started with Docusaurus",id:"getting-started-with-docusaurus",children:[]},{value:"How the documentation is organized",id:"how-the-documentation-is-organized",children:[]},{value:"Writing style",id:"writing-style",children:[]},{value:"Commonly used terms",id:"commonly-used-terms",children:[]},{value:"Wechaty-specific terminology",id:"wechaty-specific-terminology",children:[]},{value:"Guidelines for Markdown files",id:"guidelines-for-markdown-files",children:[]},{value:"Special Thanks",id:"special-thanks",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We place a high importance on consistency and readability of documentation.\nWe aim to improve it as often as possible."),Object(i.b)("p",null,"Documentation changes generally come in two forms:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"General improvements: typo corrections, error fixes and better\nexplanations through clearer writing and more examples.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"New features: documentation of features that have been added to the\nframework since the last release."))),Object(i.b)("p",null,"This section explains how writers can craft their documentation changes\nin the most useful and least error-prone ways."),Object(i.b)("h2",{id:"getting-the-raw-documentation"},"Getting the raw documentation"),Object(i.b)("p",null,"Though Wechaty's documentation is intended to be read as HTML at\n",Object(i.b)("a",{parentName:"p",href:"https://wechaty.js.org/docs/"},"https://wechaty.js.org/docs/"),", we edit it as a collection of markdown files for\nmaximum flexibility. These files live in the top-level ",Object(i.b)("inlineCode",{parentName:"p"},"docusaurus/docs/"),"\ndirectory at Wechaty Website repository at ",Object(i.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org"},"https://github.com/wechaty/wechaty.js.org"),"."),Object(i.b)("p",null,"If you'd like to start contributing to our docs, get the latest version of\nWechaty website from the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org"},"website repository"),"."),Object(i.b)("h2",{id:"getting-started-with-docusaurus"},"Getting started with Docusaurus"),Object(i.b)("p",null,"Wechaty's documentation uses the ",Object(i.b)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," documentation system v2.\nThe basic idea is that powered by markdown with JSX supported(MDX), built using React documentation."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docusaurus.io/"},"https://docusaurus.io/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mdxjs.com/"},"https://mdxjs.com/"))),Object(i.b)("p",null,"To build the documentation locally, install NPM dependencies:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),Object(i.b)("p",null,"Then build the website:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm run docusaurus:start\n")),Object(i.b)("p",null,"To get started contributing, you'll want to read the :ref:",Object(i.b)("inlineCode",{parentName:"p"},"reStructuredText\nreference <sphinx:rst-index>"),"."),Object(i.b)("p",null,"Your locally-built documentation will be themed differently than the\ndocumentation at ",Object(i.b)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus docs introduction"),".\nThis is OK! If your changes look good on your local machine, they'll look good\non the website."),Object(i.b)("h2",{id:"how-the-documentation-is-organized"},"How the documentation is organized"),Object(i.b)("p",null,"The documentation is organized into several categories:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"/docs/tutorials/"},"Tutorials")," take the reader by the hand through a series\nof steps to create something."),Object(i.b)("p",{parentName:"li"},"The important thing in a tutorial is to help the reader achieve something\nuseful, preferably as early as possible, in order to give them confidence."),Object(i.b)("p",{parentName:"li"},"Explain the nature of the problem we're solving, so that the reader\nunderstands what we're trying to achieve. Don't feel that you need to begin\nwith explanations of how things work - what matters is what the reader does,\nnot what you explain. It can be helpful to refer back to what you've done and\nexplain afterwards.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"/docs/explainations/"},"Explainations")," aim to explain a concept or subject at a\nfairly high level."),Object(i.b)("p",{parentName:"li"},"Link to reference material rather than repeat it. Use examples and don't be\nreluctant to explain things that seem very basic to you - it might be the\nexplanation someone else needs."),Object(i.b)("p",{parentName:"li"},"Providing background context helps a newcomer connect the topic to things\nthat they already know.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"/docs/references/"},"References")," contain technical reference for APIs.\nThey describe the functioning of Wechaty's internal machinery and instruct in\nits use."),Object(i.b)("p",{parentName:"li"},"Keep reference material tightly focused on the subject. Assume that the\nreader already understands the basic concepts involved but needs to know or\nbe reminded of how Wechaty does it."),Object(i.b)("p",{parentName:"li"},"Reference guides aren't the place for general explanation. If you find\nyourself explaining basic concepts, you may want to move that material to a\ntopic guide.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"/docs/howto/"},"How-to Guides")," are recipes that take the reader through\nsteps in key subjects."),Object(i.b)("p",{parentName:"li"},"What matters most in a how-to guide is what a user wants to achieve.\nA how-to should always be result-oriented rather than focused on internal\ndetails of how Wechaty implements whatever is being discussed."),Object(i.b)("p",{parentName:"li"},"These guides are more advanced than tutorials and assume some knowledge about\nhow Wechaty works. Assume that the reader has followed the tutorials and don't\nhesitate to refer the reader back to the appropriate tutorial rather than\nrepeat the same material."))),Object(i.b)("h2",{id:"writing-style"},"Writing style"),Object(i.b)("p",null,'When using pronouns in reference to a hypothetical person, such as "a user with\na session cookie", gender neutral pronouns (they/their/them) should be used.\nInstead of:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"he or she... use they."),Object(i.b)("li",{parentName:"ul"},"him or her... use them."),Object(i.b)("li",{parentName:"ul"},"his or her... use their."),Object(i.b)("li",{parentName:"ul"},"his or hers... use theirs."),Object(i.b)("li",{parentName:"ul"},"himself or herself... use themselves.")),Object(i.b)("p",null,'Try to avoid using words that minimize the difficulty involved in a task or\noperation, such as "easily", "simply", "just", "merely", "straightforward", and\nso on. People\'s experience may not match your expectations, and they may become\nfrustrated when they do not find a step as "straightforward" or "simple" as it\nis implied to be.'),Object(i.b)("h2",{id:"commonly-used-terms"},"Commonly used terms"),Object(i.b)("p",null,"Here are some style guidelines on commonly used terms throughout the\ndocumentation:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Wechaty")," ","\u2014"," when referring to the framework, capitalize Wechaty.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"email")," ","\u2014"," no hyphen.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"TypeScript/JavaScript")," ","\u2014"," when referring to the language, capitalize TypeScript/JavaScript.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"realize"),", ",Object(i.b)("strong",{parentName:"p"},"customize"),", ",Object(i.b)("strong",{parentName:"p"},"initialize"),", etc. ","\u2014",' use the American\n"ize" suffix, not "ise."')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"subclass")," ","\u2014",' it\'s a single word without a hyphen, both as a verb\n("subclass that model") and as a noun ("create a subclass").')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Web"),", ",Object(i.b)("strong",{parentName:"p"},"World Wide Web"),", ",Object(i.b)("strong",{parentName:"p"},"the Web")," ","\u2014"," note Web is always\ncapitalized when referring to the World Wide Web.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"website")," ","\u2014"," use one word, without capitalization."))),Object(i.b)("h2",{id:"wechaty-specific-terminology"},"Wechaty-specific terminology"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Puppet")," ","\u2014"," it's capitalized.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Puppet Provider")," ","\u2014"," it's capitalized.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Puppet Service")," ","\u2014"," it's capitalized.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"TOKEN")," ","\u2014"," it's all capitalized."))),Object(i.b)("h2",{id:"guidelines-for-markdown-files"},"Guidelines for Markdown files"),Object(i.b)("p",null,"These guidelines regulate the format of our MD (Markdown) and MDX (Markdown + JSX)\ndocumentation:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In section titles, capitalize only initial words and proper nouns.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Wrap the documentation at 80 characters wide, unless a code example\nis significantly less readable when split over two lines, or for another\ngood reason.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The main thing to keep in mind as you write and edit docs is that the\nmore semantic markup you can add the better. So:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-md"},"Add `django.contrib.auth` to your `INSTALLED_APPS`...\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use these heading styles::"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-md"},"# One\n\n## Two\n\n### Three\n\n#### Four\n  \n##### Five\n")))),Object(i.b)("h2",{id:"special-thanks"},"Special Thanks"),Object(i.b)("p",null,"I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from ",Object(i.b)("a",{parentName:"p",href:"https://github.com/django/django/blob/main/docs/internals/contributing/writing-documentation.txt"},"Django contributing docs")))}b.isMDXComponent=!0},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);