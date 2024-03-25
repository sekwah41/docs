"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8740],{25526:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(74848),o=i(28453);const r={title:"Azure OpenAI",sidebar_position:2,slug:"/guides/engines/openai",description:"A step-by-step guide on how to integrate Jan with Azure OpenAI.",keywords:["Jan","Rethink the Computer","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","integration","Azure OpenAI Service"]},s=void 0,a={id:"guides/remote-providers/openai",title:"Azure OpenAI",description:"A step-by-step guide on how to integrate Jan with Azure OpenAI.",source:"@site/docs/guides/remote-providers/openai.mdx",sourceDirName:"guides/remote-providers",slug:"/guides/engines/openai",permalink:"/guides/engines/openai",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/guides/remote-providers/openai.mdx",tags:[],version:"current",lastUpdatedBy:"Henry",lastUpdatedAt:1711369164,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:2,frontMatter:{title:"Azure OpenAI",sidebar_position:2,slug:"/guides/engines/openai",description:"A step-by-step guide on how to integrate Jan with Azure OpenAI.",keywords:["Jan","Rethink the Computer","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","integration","Azure OpenAI Service"]},sidebar:"guidesSidebar",previous:{title:"Mistral AI",permalink:"/guides/engines/mistral"},next:{title:"Remote Server Integration",permalink:"/guides/engines/remote-server"}},d={},l=[{value:"Integrate Azure OpenAI with Jan",id:"integrate-azure-openai-with-jan",level:2},{value:"Step 1: Configure Azure OpenAI Service API Key",id:"step-1-configure-azure-openai-service-api-key",level:3},{value:"Step 2: Model Configuration",id:"step-2-model-configuration",level:3},{value:"Step 3: Start the Model",id:"step-3-start-the-model",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"integrate-azure-openai-with-jan",children:"Integrate Azure OpenAI with Jan"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/overview?source=docs",children:"Azure OpenAI Service"})," offers robust APIs, making it simple for you to incorporate OpenAI's language models into your applications. You can integrate Azure OpenAI with Jan by following the steps below:"]}),"\n",(0,t.jsx)(n.h3,{id:"step-1-configure-azure-openai-service-api-key",children:"Step 1: Configure Azure OpenAI Service API Key"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set up and deploy the Azure OpenAI Service."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Once you've set up and deployed Azure OpenAI Service, you can find the endpoint and API key in ",(0,t.jsx)(n.a,{href:"https://oai.azure.com/",children:"Azure OpenAI Studio"})," under ",(0,t.jsx)(n.code,{children:"Chat"})," > ",(0,t.jsx)(n.code,{children:"View code"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set up the endpoint and API key for Azure OpenAI Service in the ",(0,t.jsx)(n.code,{children:"~/jan/engines/openai.json"})," file."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/engines/openai.json"',children:'{\n  // https://hieujan.openai.azure.com/openai/deployments/gpt-35-hieu-jan/chat/completions?api-version=2023-07-01-preview\n  "full_url": "https://<your-resource-name>.openai.azure.com/openai/deployments/<your-deployment-name>/chat/completions?api-version=<api-version>",\n  "api_key": "<your-api-key>"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-model-configuration",children:"Step 2: Model Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to the ",(0,t.jsx)(n.code,{children:"~/jan/models"})," directory."]}),"\n",(0,t.jsxs)(n.li,{children:["Make a new folder called ",(0,t.jsx)(n.code,{children:"(your-deployment-name)"}),", for example ",(0,t.jsx)(n.code,{children:"gpt-35-hieu-jan"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.code,{children:"model.json"})," file inside the folder with the specified configurations:"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Match the ",(0,t.jsx)(n.code,{children:"id"})," property with both the folder name and your deployment name."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.code,{children:"format"})," property as ",(0,t.jsx)(n.code,{children:"api"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.code,{children:"openai"})," for the ",(0,t.jsx)(n.code,{children:"engine"})," property."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.code,{children:"state"})," property as ",(0,t.jsx)(n.code,{children:"ready"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/models/gpt-35-hieu-jan/model.json"',children:'{\n  "sources": [\n    {\n      "filename": "azure_openai",\n      "url": "https://hieujan.openai.azure.com"\n    }\n  ],\n  "id": "gpt-35-hieu-jan",\n  "object": "model",\n  "name": "Azure OpenAI GPT 3.5",\n  "version": "1.0",\n  "description": "Azure Open AI GPT 3.5 model is extremely good",\n  "format": "api",\n  "settings": {},\n  "parameters": {},\n  "metadata": {\n    "author": "OpenAI",\n    "tags": ["General", "Big Context Length"]\n  },\n  "engine": "openai"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For more details regarding the ",(0,t.jsx)(n.code,{children:"model.json"})," settings and parameters fields, please see ",(0,t.jsx)(n.a,{href:"/guides/engines/remote-server/#modeljson",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-start-the-model",children:"Step 3: Start the Model"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Restart Jan and go to the Hub."}),"\n",(0,t.jsx)(n.li,{children:"Find your model in Jan application and click on the Use button."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);