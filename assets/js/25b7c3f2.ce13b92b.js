"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9847],{1494:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var l=r(96540),a=r(44586),n=r(6011),s=r(51107),i=r(40961),o=r(17785),c=r(56513),d=r(22525);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},m.apply(this,arguments)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var l,a,n=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(l=r.next()).done)&&(n.push(l.value),!t||n.length!==t);s=!0);}catch(o){i=!0,a=o}finally{try{s||null==r.return||r.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}function h(e){var t,r,a=l.useRef(null),n=x(l.useState(!1),2),s=n[0],u=n[1],h=x(l.useState((null==e?void 0:e.initialQuery)||void 0),2),g=h[0],f=h[1],b=l.useCallback((function(){u(!0)}),[u]),p=l.useCallback((function(){u(!1)}),[u]),y=l.useCallback((function(e){u(!0),f(e.key)}),[u,f]);return(0,d.E)({isOpen:s,onOpen:b,onClose:p,onInput:y,searchButtonRef:a}),l.createElement(l.Fragment,null,l.createElement(o.B,{ref:a,translations:null==e||null===(t=e.translations)||void 0===t?void 0:t.button,onClick:b}),s&&(0,i.createPortal)(l.createElement(c.a,m({},e,{initialScrollY:window.scrollY,initialQuery:g,translations:null==e||null===(r=e.translations)||void 0===r?void 0:r.modal,onClose:p})),document.body))}var g=r(74848);function f(){return(0,g.jsx)("section",{className:"py-8 md:py-16 lg:py-20 flex items-center",children:(0,g.jsx)("div",{className:"container",children:(0,g.jsxs)("div",{className:"flex flex-col md:flex-row justify-between md:gap-8",children:[(0,g.jsxs)("div",{className:"w-full md:w-1/2 h-72 md:h-84 flex-1 rounded-lg p-8 relative bg-gradient-to-r from-gray-100 to-blue-400 dark:from-gray-700 dark:to-blue-800 mb-8 md:mb-0",children:[(0,g.jsxs)("div",{className:"mb-16",children:[(0,g.jsx)("p",{className:"text-lg mb-4",children:"Installation"}),(0,g.jsx)("h3",{className:"text-1xl md:text-2xl xl:text-3xl font-semibold",children:"Install Jan across multiple platforms."})]}),(0,g.jsx)("div",{children:(0,g.jsx)("a",{href:"/guides/quickstart",className:"btn bg-black hover:bg-gray-600 dark:bg-blue-500 text-normal md:text-xl text-white font-normal py-2 px-4 rounded-xl",children:"Get Started"})}),(0,g.jsx)("div",{className:"absolute right-4 bottom-4",children:(0,g.jsx)("img",{alt:"Card Image",src:"/img/homepage-new/rocket.png",className:"h-12 lg:h-24"})})]}),(0,g.jsxs)("div",{className:"w-full md:w-1/2 h-72 md:h-84 flex-1 rounded-lg p-8 relative bg-gradient-to-r from-gray-100 to-purple-400 dark:from-gray-700 dark:to-purple-800",children:[(0,g.jsxs)("div",{className:"mb-16",children:[(0,g.jsx)("p",{className:"text-lg mb-4",children:"API Reference"}),(0,g.jsx)("h3",{className:"text-1xl md:text-2xl xl:text-3xl font-semibold",children:"Interact with our API locally."})]}),(0,g.jsx)("div",{children:(0,g.jsx)("a",{href:"/api-reference",className:"btn bg-black hover:bg-gray-600 dark:bg-blue-500 text-normal md:text-xl text-white font-normal py-2 px-4 rounded-xl",children:"Get Started"})}),(0,g.jsx)("div",{className:"absolute right-4 bottom-4",children:(0,g.jsx)("img",{alt:"Card Image",src:"/img/homepage-new/chat.png",className:"h-12 lg:h-24"})})]})]})})})}function b(){return(0,g.jsx)("section",{className:"py-8 md:py-16 bg-gray-100 dark:bg-gray-800 flex items-center",children:(0,g.jsx)("div",{className:"container",children:(0,g.jsxs)("div",{className:"flex flex-col md:flex-row justify-center gap-8",children:[(0,g.jsx)(p,{imgSrc:"/img/homepage-new/bg-rocket.png",title:"Quickstart",description:"Get started quickly with our Quickstart guide, offering simple steps for a smooth setup.",href:"/guides/quickstart"}),(0,g.jsx)(p,{imgSrc:"/img/homepage-new/bg-wrench.png",title:"Integrations",description:"Learn how Jan can integrates seamlessly.",href:"/integrations/"}),(0,g.jsx)(p,{imgSrc:"/img/homepage-new/bg-book.png",title:"Extensions",description:"Discover the available Jan extensions.",href:"/extensions"})]})})})}function p(e){let{imgSrc:t,title:r,description:l,href:a}=e;return(0,g.jsxs)("div",{className:"bg-gray-200 dark:bg-gray-700 w-full rounded-lg relative flex flex-col justify-between mb-8 md:mb-0 md:mr-8 p-2",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"h-32 w-full",children:(0,g.jsx)("img",{alt:"Feature logo",src:t})}),(0,g.jsxs)("div",{className:"mt-12 p-8",children:[(0,g.jsx)("h3",{className:"text-lg font-semibold",children:r}),(0,g.jsx)("p",{children:l})]})]}),(0,g.jsx)("div",{className:"p-8 mb-2 pt-0",children:(0,g.jsx)("a",{href:a,className:"btn bg-black hover:bg-gray-600 dark:bg-blue-500 text-white font-normal py-2 px-4 rounded-xl",children:"Learn more"})})]})}const y={searchBar:"searchBar_XrmK"};function j(){const{siteConfig:e}=(0,a.A)();return(0,g.jsxs)("header",{className:"bg-white dark:bg-gray-800 py-16 h-[20%] 2xl:h-[50vh] text-center relative overflow-hidden",children:[(0,g.jsx)("div",{className:"bg-custom-img w-full h-full absolute top-0 left-0 bg-cover bg-center"}),(0,g.jsxs)("div",{className:"container relative z-10",children:[(0,g.jsx)(s.A,{as:"h1",className:"text-2xl lg:text-3xl xl:text-5xl 2xl:text-7xl font-semibold text-white dark:text-gray-200 mb-8 mt-8 2xl:mt-24 2xl:mb-16",children:"Hello, how can we help?"}),(0,g.jsx)("div",{className:y.searchBar,children:(0,g.jsx)(h,{appId:e.themeConfig.algolia.appId,apiKey:e.themeConfig.algolia.apiKey,indexName:e.themeConfig.algolia.indexName,contextualSearch:!0,insight:!0})}),(0,g.jsx)("p",{className:"text-lg md:text-xl xl:text-2xl 2xl:text-4xl text-white dark:text-gray-200 mt-8 xl:mt-12 2xl:mt-16",children:"Open-source ChatGPT alternative that runs 100% offline on your computer."})]})]})}function v(){const{siteConfig:e}=(0,a.A)();return(0,g.jsx)(n.default,{title:"Docs",description:"Description will go into a meta tag in <head />",children:(0,g.jsxs)("div",{className:"bg-white dark:bg-gray-800",children:[(0,g.jsx)(j,{}),(0,g.jsxs)("main",{className:"bg-whitesmoke dark:bg-gray-900",children:[(0,g.jsx)(f,{}),(0,g.jsx)(b,{})]})]})})}}}]);