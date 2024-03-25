"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3088],{10320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(74848),i=t(28453);const r={title:"Selecting AI Hardware"},o=void 0,a={id:"hardware/recommendations/by-hardware",title:"Selecting AI Hardware",description:"When selecting a GPU for LLMs, remember that it's not just about the GPU itself. Consider the synergy with other components in your PC:",source:"@site/docs/hardware/recommendations/by-hardware.md",sourceDirName:"hardware/recommendations",slug:"/hardware/recommendations/by-hardware",permalink:"/hardware/recommendations/by-hardware",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/hardware/recommendations/by-hardware.md",tags:[],version:"current",lastUpdatedBy:"Henry",lastUpdatedAt:1711369164,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{title:"Selecting AI Hardware"}},l={},d=[{value:"GPU Selection",id:"gpu-selection",level:2},{value:"GPU Comparison",id:"gpu-comparison",level:3},{value:"Other Considerations",id:"other-considerations",level:3},{value:"CPU Selection",id:"cpu-selection",level:2},{value:"Here are some CPU options for running LLMs:",id:"here-are-some-cpu-options-for-running-llms",level:3},{value:"RAM Selection",id:"ram-selection",level:2},{value:"Here is a general guide to RAM selection for running LLMs:",id:"here-is-a-general-guide-to-ram-selection-for-running-llms",level:3},{value:"Motherboard Selection",id:"motherboard-selection",level:2},{value:"Cooling System Selection",id:"cooling-system-selection",level:2},{value:"Use MacBook to run LLMs",id:"use-macbook-to-run-llms",level:2},{value:"Calculating vRAM Requirements for an LLM",id:"calculating-vram-requirements-for-an-llm",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"When selecting a GPU for LLMs, remember that it's not just about the GPU itself. Consider the synergy with other components in your PC:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CPU"}),": To ensure efficient processing, pair your GPU with a powerful CPU. LLMs benefit from fast processors, so having a capable CPU is essential."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"RAM"}),": Sufficient RAM is crucial for LLMs. They can be memory-intensive, and having enough RAM ensures smooth operation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cooling System"}),": LLMs can push your PC's hardware to the limit. A robust cooling system helps maintain optimal temperatures, preventing overheating and performance throttling."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By taking all of these factors into account, you can build a home PC setup that's well-equipped to handle the demands of running LLMs effectively and efficiently."}),"\n",(0,s.jsx)(n.h2,{id:"gpu-selection",children:"GPU Selection"}),"\n",(0,s.jsx)(n.p,{children:"Selecting the optimal GPU for running Large Language Models (LLMs) on your home PC is a decision influenced by your budget and the specific LLMs you intend to work with. Your choice should strike a balance between performance, efficiency, and cost-effectiveness."}),"\n",(0,s.jsx)(n.h3,{id:"gpu-comparison",children:"GPU Comparison"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"GPU"}),(0,s.jsx)(n.th,{children:"Price"}),(0,s.jsx)(n.th,{children:"Cores"}),(0,s.jsx)(n.th,{children:"VRAM (GB)"}),(0,s.jsx)(n.th,{children:"Bandwth (T/s)"}),(0,s.jsx)(n.th,{children:"Power"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nvidia H100"}),(0,s.jsx)(n.td,{children:"40000"}),(0,s.jsx)(n.td,{children:"18432"}),(0,s.jsx)(n.td,{children:"80"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nvidia A100"}),(0,s.jsx)(n.td,{children:"15000"}),(0,s.jsx)(n.td,{children:"6912"}),(0,s.jsx)(n.td,{children:"80"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nvidia A100"}),(0,s.jsx)(n.td,{children:"7015"}),(0,s.jsx)(n.td,{children:"6912"}),(0,s.jsx)(n.td,{children:"40"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nvidia A10"}),(0,s.jsx)(n.td,{children:"2799"}),(0,s.jsx)(n.td,{children:"9216"}),(0,s.jsx)(n.td,{children:"24"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nvidia RTX A6000"}),(0,s.jsx)(n.td,{children:"4100"}),(0,s.jsx)(n.td,{children:"10752"}),(0,s.jsx)(n.td,{children:"48"}),(0,s.jsx)(n.td,{children:"0.768"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nvidia RTX 6000"}),(0,s.jsx)(n.td,{children:"6800"}),(0,s.jsx)(n.td,{children:"4608"}),(0,s.jsx)(n.td,{children:"46"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nvidia RTX 4090 Ti"}),(0,s.jsx)(n.td,{children:"2000"}),(0,s.jsx)(n.td,{children:"18176"}),(0,s.jsx)(n.td,{children:"24"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nvidia RTX 4090"}),(0,s.jsx)(n.td,{children:"1800"}),(0,s.jsx)(n.td,{children:"16384"}),(0,s.jsx)(n.td,{children:"24"}),(0,s.jsx)(n.td,{children:"1.008"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nvidia RTX 3090"}),(0,s.jsx)(n.td,{children:"1450"}),(0,s.jsx)(n.td,{children:"10496"}),(0,s.jsx)(n.td,{children:"24"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nvidia RTX 3080"}),(0,s.jsx)(n.td,{children:"700"}),(0,s.jsx)(n.td,{children:"8704"}),(0,s.jsx)(n.td,{children:"12"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nvidia RTX 3070"}),(0,s.jsx)(n.td,{children:"900"}),(0,s.jsx)(n.td,{children:"6144"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nvidia L4"}),(0,s.jsx)(n.td,{children:"2711"}),(0,s.jsx)(n.td,{children:"7424"}),(0,s.jsx)(n.td,{children:"24"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nvidia T4"}),(0,s.jsx)(n.td,{children:"2299"}),(0,s.jsx)(n.td,{children:"2560"}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AMD Radeon RX 6900 XT"}),(0,s.jsx)(n.td,{children:"1000"}),(0,s.jsx)(n.td,{children:"5120"}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AMD Radeon RX 6800 XT"}),(0,s.jsx)(n.td,{children:"420"}),(0,s.jsx)(n.td,{children:"4608"}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"*Market prices as of Oct 2023 via Amazon/PCMag"}),"\n",(0,s.jsx)(n.h3,{id:"other-considerations",children:"Other Considerations"}),"\n",(0,s.jsx)(n.p,{children:"In general, the following GPU features are important for running LLMs:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"High VRAM:"}),"\xa0LLMs are typically very large and complex models, so they require a GPU with a high amount of VRAM. This will allow the model to be loaded into memory and processed efficiently."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CUDA Compatibility:"})," When running LLMs on a GPU, CUDA compatibility is paramount. CUDA is NVIDIA's parallel computing platform, and it plays a vital role in accelerating deep learning tasks. LLMs, with their extensive matrix calculations, heavily rely on parallel processing. Ensuring your GPU supports CUDA is like having the right tool for the job. It allows the LLM to leverage the GPU's parallel processing capabilities, significantly speeding up model training and inference."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Number of CUDA, Tensor, and RT Cores:"})," High-performance NVIDIA GPUs have both CUDA and Tensor cores. These cores are responsible for executing the neural network computations that underpin LLMs' language understanding and generation. The more CUDA cores your GPU has, the better equipped it is to handle the massive computational load that LLMs impose. Tensor cores in your GPU, further enhance LLM performance by accelerating the critical matrix operations integral to language modeling tasks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Generation (Series)"}),": When selecting a GPU for LLMs, consider its generation or series (e.g., RTX 30 series). Newer GPU generations often come with improved architectures and features. For LLM tasks, opting for the latest generation can mean better performance, energy efficiency, and support for emerging AI technologies. Avoid purchasing, RTX-2000 series GPUs which are much outdated nowadays."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"cpu-selection",children:"CPU Selection"}),"\n",(0,s.jsx)(n.p,{children:"Selecting the right CPU for running Large Language Models (LLMs) on your home PC is contingent on your budget and the specific LLMs you intend to work with. It's a decision that warrants careful consideration, as the CPU plays a pivotal role in determining the overall performance of your system."}),"\n",(0,s.jsx)(n.p,{children:"In general, the following CPU features are important for running LLMs:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Number of Cores and Threads:"}),"\xa0the number of CPU cores and threads influences parallel processing. More cores and threads help handle the complex computations involved in language models. For tasks like training and inference, a higher core/thread count can significantly improve processing speed and efficiency, enabling quicker results."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"High clock speed:"}),"\xa0The base clock speed, or base frequency, represents the CPU's default operating speed. So having a CPU with a high clock speed. This will allow the model to process instructions more quickly, which can further improve performance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Base Power (TDP):"})," LLMs often involve long training sessions and demanding computations. Therefore, a lower Thermal Design Power (TDP) is desirable. A CPU with a lower TDP consumes less power and generates less heat during prolonged LLM operations. This not only contributes to energy efficiency but also helps maintain stable temperatures in your system, preventing overheating and potential performance throttling."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Generation (Series):"})," Consider its generation or series (e.g., 9th Gen, 11th Gen Intel Core). Newer CPU generations often come with architectural improvements that enhance performance and efficiency. For LLM tasks, opting for a more recent generation can lead to faster and more efficient language model training and inference."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Support for AVX512:"}),"\xa0AVX512 is a set of vector instruction extensions that can be used to accelerate machine learning workloads. Many LLMs are optimized to take advantage of AVX512, so it is important to make sure that your CPU supports this instruction set."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"here-are-some-cpu-options-for-running-llms",children:"Here are some CPU options for running LLMs:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Intel Core i7-12700K"}),": Slightly less potent than the Core i9-12900K, the Intel Core i7-12700K is still a powerful CPU. With 12 cores and 20 threads, it strikes a balance between performance and cost-effectiveness. This CPU is well-suited for running mid-sized and large LLMs, making it a compelling option."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Intel Core i9-12900K"}),": Positioned as a high-end CPU, the Intel Core i9-12900K packs a formidable punch with its 16 cores and 24 threads. It's one of the fastest CPUs available, making it an excellent choice for handling large and intricate LLMs. The abundance of cores and threads translates to exceptional parallel processing capabilities, which is crucial for tasks involving massive language models."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AMD Ryzen 9 5950X"}),": Representing AMD's high-end CPU offering, the Ryzen 9 5950X boasts 16 cores and 32 threads. While it may not quite match the speed of the Core i9-12900K, it remains a robust and cost-effective choice. Its multicore prowess enables smooth handling of LLM workloads, and its affordability makes it an attractive alternative."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AMD Ryzen 7 5800X"}),": Slightly less potent than the Ryzen 9 5950X, the Ryzen 7 5800X is still a formidable CPU with 8 cores and 16 threads. It's well-suited for running mid-sized and smaller LLMs, providing a compelling blend of performance and value."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For those operating within budget constraints, there are more budget-friendly CPU options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Intel Core i5-12600K"}),": The Core i5-12600K is a capable mid-range CPU that can still handle LLMs effectively, though it may not be optimized for the largest or most complex models."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AMD Ryzen 5 5600X"}),": The Ryzen 5 5600X offers a balance of performance and affordability. It's suitable for running smaller to mid-sized LLMs without breaking the bank."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"When selecting a CPU for LLMs, consider the synergy with other components in your PC:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GPU"}),": Pair your CPU with a powerful GPU to ensure smooth processing of LLMs. Some language models, particularly those used for AI, rely on GPU acceleration for optimal performance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"RAM"}),": Adequate RAM is essential for LLMs, as these models can be memory-intensive. Having enough RAM ensures that your CPU can operate efficiently without bottlenecks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cooling System"}),": Given the resource-intensive nature of LLMs, a robust cooling system is crucial to maintain optimal temperatures and prevent performance throttling."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By carefully weighing your budget and performance requirements and considering the interplay of components in your PC, you can assemble a well-rounded system that's up to the task of running LLMs efficiently."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\ud83d\udcdd"," ",(0,s.jsx)(n.strong,{children:"Note:"})," It is important to note that these are just general recommendations. The specific CPU requirements for your LLM will vary depending on the specific model you are using and the tasks that you want to perform with it. If you are unsure what CPU to get, it is best to consult with an expert."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ram-selection",children:"RAM Selection"}),"\n",(0,s.jsx)(n.p,{children:"The amount of RAM you need to run an LLM depends on the size and complexity of the model, as well as the tasks you want to perform with it. For example, if you are simply running inference on a pre-trained LLM, you may be able to get away with using a relatively modest amount of RAM. However, if you are training a new LLM from scratch, or if you are running complex tasks like fine-tuning or code generation, you will need more RAM."}),"\n",(0,s.jsx)(n.h3,{id:"here-is-a-general-guide-to-ram-selection-for-running-llms",children:"Here is a general guide to RAM selection for running LLMs:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Capacity:"}),"\xa0The amount of RAM you need will depend on the size and complexity of the LLM model you want to run. For inference, you will need at least 16GB of RAM, but 32GB or more is ideal for larger models and more complex tasks. For training, you will need at least 64GB of RAM, but 128GB or more is ideal for larger models and more complex tasks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Speed:"}),"\xa0LLMs can benefit from having fast RAM, so it is recommended to use DDR4 or DDR5 RAM with a speed of at least 3200MHz."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Latency:"}),"\xa0RAM latency is the amount of time it takes for the CPU to access data in memory. Lower latency is better for performance, so it is recommended to look for RAM with a low latency rating."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Timing:"}),"\xa0RAM timing is a set of parameters that control how the RAM operates. It is important to make sure that the RAM timing is compatible with your motherboard and CPU."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["R",(0,s.jsx)(n.strong,{children:"ecommended RAM"})," ",(0,s.jsx)(n.strong,{children:"options for running LLMs:"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inference:"}),"\xa0For inference on pre-trained LLMs, you will need at least 16GB of RAM. However, 32GB or more is ideal for larger models and more complex tasks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Training:"}),"\xa0For training LLMs from scratch, you will need at least 64GB of RAM. However, 128GB or more is ideal for larger models and more complex tasks."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In addition to the amount of RAM, it is also important to consider the speed of the RAM. LLMs can benefit from having fast RAM, so it is recommended to use DDR4 or DDR5 RAM with a speed of at least 3200MHz."}),"\n",(0,s.jsx)(n.h2,{id:"motherboard-selection",children:"Motherboard Selection"}),"\n",(0,s.jsx)(n.p,{children:"When picking a motherboard to run advanced language models, you need to think about a few things. First, consider the specific language model you want to use, the type of CPU and GPU in your computer, and your budget. Here are some suggestions:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ASUS ROG Maximus Z790 Hero:"})," This is a top-notch motherboard with lots of great features. It works well with Intel's latest CPUs, fast DDR5 memory, and PCIe 5.0 devices. It's also good at keeping things cool, which is important for running demanding language models."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MSI MEG Z790 Ace:"})," Similar to the ASUS ROG Maximus, this motherboard is high-end and has similar features. It's good for running language models too."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gigabyte Z790 Aorus Master:"})," This one is more budget-friendly but still works great with Intel's latest CPUs, DDR5 memory, and fast PCIe 5.0 devices. It's got a strong power system, which helps with running language models."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you're on a tighter budget, you might want to check out mid-range options like the ",(0,s.jsx)(n.strong,{children:"ASUS TUF Gaming Z790-Plus WiFi"})," or the ",(0,s.jsx)(n.strong,{children:"MSI MPG Z790 Edge WiFi DDR5"}),". They offer good performance without breaking the bank."]}),"\n",(0,s.jsx)(n.p,{children:"No matter which motherboard you pick, make sure it works with your CPU and GPU. Also, check that it has the features you need, like enough slots for your GPU and storage drives."}),"\n",(0,s.jsx)(n.p,{children:"Other things to think about when choosing a motherboard for language models:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cooling:"})," Language models can make your CPU work hard, so a motherboard with good cooling is a must. This keeps your CPU from getting too hot."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Memory:"})," Language models need lots of memory, so make sure your motherboard supports a good amount of it. Check if it works with the type of memory you want to use, like DDR5 or DDR4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Storage:"})," Language models can create and store a ton of data. So, look for a motherboard with enough slots for your storage drives."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"BIOS:"})," The BIOS controls your motherboard. Make sure it's up-to-date and has the latest features, especially if you plan to overclock or undervolt your system."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"cooling-system-selection",children:"Cooling System Selection"}),"\n",(0,s.jsx)(n.p,{children:"Modern computers have two critical components, the CPU and GPU, which can heat up during high-performance tasks. To prevent overheating, they come with built-in temperature controls that automatically reduce performance when temperatures rise. To keep them cool and maintain optimal performance, you need a reliable cooling system."}),"\n",(0,s.jsx)(n.p,{children:"For laptops, the only choice is a fan-based cooling system. Laptops have built-in fans and copper pipes to dissipate heat. Many gaming laptops even have two separate fans: one for the CPU and another for the GPU."}),"\n",(0,s.jsx)(n.p,{children:"For desktop computers, you have the option to install more efficient water cooling systems. These are highly effective but can be expensive. Or you can install more cooling fans to keep you components cool."}),"\n",(0,s.jsx)(n.p,{children:"Keep in mind that dust can accumulate in fan-based cooling systems, leading to malfunctions. So periodically clean the dust to keep your cooling system running smoothly."}),"\n",(0,s.jsx)(n.h2,{id:"use-macbook-to-run-llms",children:"Use MacBook to run LLMs"}),"\n",(0,s.jsx)(n.p,{children:"An Apple MacBook equipped with either the M1 or the newer M2 Pro/Max processor. These cutting-edge chips leverage Apple's innovative Unified Memory Architecture (UMA), which revolutionizes the way the CPU and GPU interact with memory resources. This advancement plays a pivotal role in enhancing the performance and capabilities of LLMs."}),"\n",(0,s.jsxs)(n.p,{children:["Unified Memory Architecture, as implemented in Apple's M1 and M2 series processors, facilitates seamless and efficient data access for both the CPU and GPU. Unlike traditional systems where data needs to be shuttled between various memory pools, UMA offers a unified and expansive memory pool that can be accessed by both processing units without unnecessary data transfers. This transformative approach significantly minimizes latency while concurrently boosting data access bandwidth, resulting in substantial improvements in both the speed and quality of outputs.\n",(0,s.jsx)(n.img,{src:"https://media.discordapp.net/attachments/1148534242104574012/1156600109967089714/IMG_3722.webp?ex=6516380a&is=6514e68a&hm=ebe3b6ecb1edb44cde58bd8d3fdd46cef66b60aa41ea6c03b51325fa65f8517e&=&width=807&height=426",alt:"UMA"})]}),"\n",(0,s.jsx)(n.p,{children:"The M1 and M2 Pro/Max chips offer varying levels of unified memory bandwidth, further underscoring their prowess in handling data-intensive tasks like AI processing. The M1/M2 Pro chip boasts an impressive capacity of up to 200 GB/s of unified memory bandwidth, while the M1/M2 Max takes it a step further, supporting up to a staggering 400 GB/s of unified memory bandwidth. This means that regardless of the complexity and demands of the AI tasks at hand, these Apple laptops armed with M1 or M2 processors are well-equipped to handle them with unparalleled efficiency and speed."}),"\n",(0,s.jsx)(n.h2,{id:"calculating-vram-requirements-for-an-llm",children:"Calculating vRAM Requirements for an LLM"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example:"})," Calculating the VRAM required to run a 13-billion-parameter Large Language Model (LLM) involves considering the model size, batch size, sequence length, token size, and any additional overhead. Here's how you can estimate the VRAM required for a 13B LLM:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Model Size"}),": Find out the size of the 13B LLM in terms of the number of parameters. This information is typically provided in the model's documentation. A 13-billion-parameter model has 13,000,000,000 parameters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Batch Size"}),": Decide on the batch size you want to use during inference. The batch size represents how many input samples you process simultaneously. Smaller batch sizes require less VRAM."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sequence Length"}),": Determine the average length of the input text sequences you'll be working with. Sequence length can impact VRAM requirements; longer sequences need more memory."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Token Size"}),": Understand the memory required to store one token in bytes. Most LLMs use 4 bytes per token."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Overhead"}),": Consider any additional memory overhead for intermediate computations and framework requirements. Overhead can vary but should be estimated based on your specific setup."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Use the following formula to estimate the VRAM required:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VRAM Required (in gigabytes)"})," = ",(0,s.jsx)(n.code,{children:"Model Parameters x Token Size x Batch Size x Sequence Length + Overhead"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Model Parameters"}),": 13,000,000,000 parameters for a 13B LLM."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Token Size"}),": Usually 4 bytes per token."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Batch Size"}),": Choose your batch size."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sequence Length"}),": The average length of input sequences."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Overhead"}),": Any additional VRAM required based on your setup."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here's an example:"}),"\n",(0,s.jsx)(n.p,{children:"Suppose you want to run a 13B LLM with the following parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Batch Size"}),": 4"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sequence Length"}),": 512 tokens"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Token Size"}),": 4 bytes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Overhead"}),": 2 GB"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["VRAM Required (in gigabytes) = ",(0,s.jsx)(n.code,{children:"(13,000,000,000 x 4 x 4 x 512) + 2"})]}),"\n",(0,s.jsxs)(n.p,{children:["VRAM Required (in gigabytes) = ",(0,s.jsx)(n.code,{children:"(8,388,608,000) + 2,000"})]}),"\n",(0,s.jsxs)(n.p,{children:["VRAM Required (in gigabytes) \u2248 ",(0,s.jsx)(n.code,{children:"8,390,608,000 bytes"})]}),"\n",(0,s.jsxs)(n.p,{children:["To convert this to gigabytes, divide by ",(0,s.jsx)(n.code,{children:"1,073,741,824 (1 GB)"})]}),"\n",(0,s.jsxs)(n.p,{children:["VRAM Required (in gigabytes) \u2248 ",(0,s.jsx)(n.code,{children:"8,390,608,000 / 1,073,741,824 \u2248 7.8 GB"})]}),"\n",(0,s.jsx)(n.p,{children:"So, to run a 13-billion-parameter LLM with the specified parameters and overhead, you would need approximately 7.8 gigabytes of VRAM on your GPU. Make sure to have some additional VRAM for stable operation and consider testing the setup in practice to monitor VRAM usage accurately."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);