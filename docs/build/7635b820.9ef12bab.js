(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(95)),i={title:"Stringify content option"},s={unversionedId:"options/stringifyContentPathRegex",id:"options/stringifyContentPathRegex",isDocsHomePage:!1,title:"Stringify content option",description:"The stringifyContentPathRegex option has been kept for backward compatibility of HTML_TRANSFORM",source:"@site/docs/options/stringifyContentPathRegex.md",slug:"/options/stringifyContentPathRegex",permalink:"/ts-jest/docs/options/stringifyContentPathRegex",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/docs/docs/options/stringifyContentPathRegex.md",version:"current"},c=[{value:"Example",id:"example",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"stringifyContentPathRegex")," option has been kept for backward compatibility of ",Object(a.b)("inlineCode",{parentName:"p"},"__HTML_TRANSFORM__"),"\nIt's a regular expression pattern used to match the path of file to be transformed.\nIf it matches, the file will be exported as a module exporting its content."),Object(a.b)("p",null,"Let's say for example that you have a file ",Object(a.b)("inlineCode",{parentName:"p"},"foo.ts")," which contains ",Object(a.b)("inlineCode",{parentName:"p"},'export default "bar"'),", and your ",Object(a.b)("inlineCode",{parentName:"p"},"stringifyContentPathRegex")," is set to ",Object(a.b)("inlineCode",{parentName:"p"},"foo\\\\.ts$"),", the resulting module won't be the result of compiling ",Object(a.b)("inlineCode",{parentName:"p"},"foo.ts")," source, but instead it'll be a module which exports the string ",Object(a.b)("inlineCode",{parentName:"p"},'"export default \\"bar\\""'),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CAUTION"),": Whatever file(s) you want to match with ",Object(a.b)("inlineCode",{parentName:"p"},"stringifyContentPathRegex")," pattern, you must ensure the Jest ",Object(a.b)("inlineCode",{parentName:"p"},"transform")," option pointing to ",Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," matches them. You may also have to add the extension(s) of this/those file(s) to ",Object(a.b)("inlineCode",{parentName:"p"},"moduleFileExtensions")," Jest option."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"jest.config.js")," version, you could do as in the ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," version of the config, but extending from the preset will ensure more compatibility without any changes when updating."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\n// Here `defaults` can be replaced with any other preset\nconst { defaults: tsjPreset } = require('ts-jest/presets');\n\nmodule.exports = {\n  // [...]\n  moduleFileExtensions: [\n    ...tsjPreset.moduleFileExtensions,\n    'html'\n  ],\n  transform: {\n    ...tsjPreset.transform,\n    '\\\\.html$': 'ts-jest'\n  },\n  globals: {\n    'ts-jest': {\n      stringifyContentPathRegex: /\\.html$/\n    }\n  }\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "moduleFileExtensions": ["js", "ts", "html"],\n    "transform": {\n      "\\\\.(html|ts|js)$": "ts-jest"\n    },\n    "globals": {\n      "ts-jest": {\n        "stringifyContentPathRegex": "\\\\.html$"\n      }\n    }\n  }\n}\n')))}l.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||a;return n?o.a.createElement(m,s(s({ref:t},p),{},{components:n})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);