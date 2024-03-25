"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1908],{40417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(74848),i=t(28453);const r={title:"OpenRouter",slug:"/integrations/openrouter",sidebar_position:2,description:"A step-by-step guide on how to integrate Jan with OpenRouter.",keywords:["Jan","Rethink the Computer","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","OpenRouter integration","OpenRouter"]},s=void 0,a={id:"guides/integrations/router",title:"OpenRouter",description:"A step-by-step guide on how to integrate Jan with OpenRouter.",source:"@site/docs/guides/integrations/router.mdx",sourceDirName:"guides/integrations",slug:"/integrations/openrouter",permalink:"/integrations/openrouter",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/guides/integrations/router.mdx",tags:[],version:"current",lastUpdatedBy:"Henry",lastUpdatedAt:1711369164,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:2,frontMatter:{title:"OpenRouter",slug:"/integrations/openrouter",sidebar_position:2,description:"A step-by-step guide on how to integrate Jan with OpenRouter.",keywords:["Jan","Rethink the Computer","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","OpenRouter integration","OpenRouter"]},sidebar:"guidesSidebar",previous:{title:"Raycast",permalink:"/integrations/raycast"},next:{title:"Continue Integration",permalink:"/integrations/continue"}},d={},l=[{value:"Integrate OpenRouter with Jan",id:"integrate-openrouter-with-jan",level:2},{value:"Step 1: Configure OpenRouter API key",id:"step-1-configure-openrouter-api-key",level:3},{value:"Step 2: Model Configuration",id:"step-2-model-configuration",level:3},{value:"Step 3 : Start the Model",id:"step-3--start-the-model",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"integrate-openrouter-with-jan",children:"Integrate OpenRouter with Jan"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://openrouter.ai/docs#quick-start",children:"OpenRouter"})," is a tool that gathers AI models. Developers can utilize its API to engage with diverse large language models, generative image models, and generative 3D object models."]}),"\n",(0,o.jsx)(n.p,{children:"To connect Jan with OpenRouter for accessing remote Large Language Models (LLMs) through OpenRouter, you can follow the steps below:"}),"\n",(0,o.jsx)(n.h3,{id:"step-1-configure-openrouter-api-key",children:"Step 1: Configure OpenRouter API key"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Find your API keys in the ",(0,o.jsx)(n.a,{href:"https://openrouter.ai/keys",children:"OpenRouter API Key"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Set the OpenRouter API key in ",(0,o.jsx)(n.code,{children:"~/jan/engines/openai.json"})," file."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"step-2-model-configuration",children:"Step 2: Model Configuration"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Go to the directory ",(0,o.jsx)(n.code,{children:"~/jan/models"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Make a new folder called ",(0,o.jsx)(n.code,{children:"openrouter-(modelname)"}),", like ",(0,o.jsx)(n.code,{children:"openrouter-dolphin-mixtral-8x7b"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Inside the folder, create a ",(0,o.jsx)(n.code,{children:"model.json"})," file with the following settings:"]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Set the ",(0,o.jsx)(n.code,{children:"id"})," property to the model id obtained from OpenRouter."]}),"\n",(0,o.jsxs)(n.li,{children:["Set the ",(0,o.jsx)(n.code,{children:"format"})," property to ",(0,o.jsx)(n.code,{children:"api"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Set the ",(0,o.jsx)(n.code,{children:"engine"})," property to ",(0,o.jsx)(n.code,{children:"openai"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Ensure the ",(0,o.jsx)(n.code,{children:"state"})," property is set to ",(0,o.jsx)(n.code,{children:"ready"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/models/openrouter-dolphin-mixtral-8x7b/model.json"',children:'{\n  "sources": [\n    {\n      "filename": "openrouter",\n      "url": "https://openrouter.ai/"\n    }\n  ],\n  "id": "cognitivecomputations/dolphin-mixtral-8x7b",\n  "object": "model",\n  "name": "Dolphin 2.6 Mixtral 8x7B",\n  "version": "1.0",\n  "description": "This is a 16k context fine-tune of Mixtral-8x7b. It excels in coding tasks due to extensive training with coding data and is known for its obedience, although it lacks DPO tuning. The model is uncensored and is stripped of alignment and bias. It requires an external alignment layer for ethical use. Users are cautioned to use this highly compliant model responsibly, as detailed in a blog post about uncensored models at erichartford.com/uncensored-models.",\n  "format": "api",\n  "settings": {},\n  "parameters": {},\n  "metadata": {\n    "tags": ["General", "Big Context Length"]\n  },\n  "engine": "openai"\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["For more details regarding the ",(0,o.jsx)(n.code,{children:"model.json"})," settings and parameters fields, please see ",(0,o.jsx)(n.a,{href:"/guides/engines/remote-server/#modeljson",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"step-3--start-the-model",children:"Step 3 : Start the Model"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Restart Jan and go to the ",(0,o.jsx)(n.strong,{children:"Hub"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Find your model and click on the ",(0,o.jsx)(n.strong,{children:"Use"})," button."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);