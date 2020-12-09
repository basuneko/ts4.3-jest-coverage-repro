(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(95)),o={title:"Installation"},c={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"ts-jest is a Typescript preprocessor for Jest pre-processor. You'll need both Jest and TypeScript installed inside your project.",source:"@site/docs/installation.md",slug:"/installation",permalink:"/ts-jest/docs/installation",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/docs/docs/installation.md",version:"current",sidebar:"docs",next:{title:"Presets",permalink:"/ts-jest/docs/presets"}},l=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Jest config file",id:"jest-config-file",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ts-jest")," is a Typescript preprocessor for Jest pre-processor. You'll need both Jest and TypeScript installed inside your project."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Tip: If you get an error with the following ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," commands such as ",Object(i.b)("inlineCode",{parentName:"p"},"npx: command not found"),", you can replace ",Object(i.b)("inlineCode",{parentName:"p"},"npx XXX")," with ",Object(i.b)("inlineCode",{parentName:"p"},"node node_modules/.bin/XXX")," from the root of your project.")),Object(i.b)("h3",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"You can install ",Object(i.b)("inlineCode",{parentName:"p"},"ts-jest")," and dependencies all at once with the following commands."),Object(i.b)("h4",{id:"npm"},"NPM"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev jest typescript ts-jest\n")),Object(i.b)("h4",{id:"yarn"},"Yarn"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev jest typescript ts-jest\n")),Object(i.b)("h3",{id:"jest-config-file"},"Jest config file"),Object(i.b)("h4",{id:"creating"},"Creating"),Object(i.b)("p",null,"By default Jest can run without any config files, but it will not compile ",Object(i.b)("inlineCode",{parentName:"p"},".ts")," files.\nTo make it transpile TypeScript with ",Object(i.b)("inlineCode",{parentName:"p"},"ts-jest"),", we will need to create a configuration file."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ts-jest")," can create the configuration file for you automatically:"),Object(i.b)("h4",{id:"npm-1"},"NPM"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx ts-jest config:init\n")),Object(i.b)("h4",{id:"yarn-1"},"Yarn"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn ts-jest config:init\n")),Object(i.b)("p",null,"This will create a basic Jest configuration file which will make Jest know about your ",Object(i.b)("inlineCode",{parentName:"p"},".ts")," files and handle them correctly."),Object(i.b)("p",null,"You can also use the ",Object(i.b)("inlineCode",{parentName:"p"},"jest --init")," command (prefixed with either ",Object(i.b)("inlineCode",{parentName:"p"},"npx")," or ",Object(i.b)("inlineCode",{parentName:"p"},"yarn")," depending on what you're using) to have more options related to Jest.\nHowever, answer ",Object(i.b)("inlineCode",{parentName:"p"},"no")," to the Jest question about whether or not to enable Typescript. Instead, add the line: ",Object(i.b)("inlineCode",{parentName:"p"},'preset: "ts-jest"')," to the ",Object(i.b)("inlineCode",{parentName:"p"},"jest.config.js")," file afterwards."),Object(i.b)("h4",{id:"customizing"},"Customizing"),Object(i.b)("p",null,"For customizing jest, please follow their ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration.html"}),"official guide online"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ts-jest")," specific options can be found ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"options"}),"here"),"."))}p.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,j=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(j,c(c({ref:t},s),{},{components:n})):a.a.createElement(j,c({ref:t},s))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);