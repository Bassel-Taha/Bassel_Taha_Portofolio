const projectsData = {
  "ifc-to-nwc": {
    "id": "ifc-to-nwc",
    "title": "IFC to NWC Converter",
    "category": "BIM / AEC",
    "role": "Software Developer",
    "coverSrc": "assets/projects/ifc-to-nwc.svg",
    "coverSrcLight": "assets/projects/ifc-to-nwc-light.svg",
    "tags": ["C++", "Python", "IfcOpenShell", "Autodesk NWCreate", "Windows x64", "n8n"],
    "overview": "A standalone Windows x64 converter that creates Navisworks Cache (NWC) files directly from IFC models without a Navisworks installation. A desktop app and CLI support both single-file conversions and folder queues.",
    "workflow": {
      "title": "From IFC model to NWC file",
      "steps": [
        {
          "label": "Choose IFC files",
          "title": "Select one model or prepare a folder queue",
          "text": "Choose the source models and output location in the desktop app or CLI. The desktop app can preview the queue and flag existing outputs before starting."
        },
        {
          "label": "Extract model data",
          "title": "Read geometry, hierarchy, and properties",
          "text": "IfcOpenShell reads the IFC and resolves geometry and placements. The converter keeps the relevant spatial structure, element identifiers, and supported property sets for export."
        },
        {
          "label": "Write NWC",
          "title": "Generate the cache with a native writer",
          "text": "The C++ writer uses Autodesk’s NWCreate runtime to create the NWC directly. The packaged converter includes the runtime needed for export."
        },
        {
          "label": "Review outputs",
          "title": "Inspect the NWC and conversion diagnostics",
          "text": "Each conversion produces an NWC on success, along with a JSON report and log. Reports account for skipped elements, and strict mode rejects a conversion when unexpected geometry is lost."
        }
      ]
    },
    "sections": [
      {
        "title": "What the export preserves",
        "points": [
          "The NWC keeps resolved IFC model coordinates, geometry, and the spatial hierarchy for model coordination.",
          "Supported element data includes IFC GlobalIds, occurrence and type property sets, and quantities."
        ]
      },
      {
        "title": "Large models and recovery",
        "points": [
          "Checkpointed and disk-backed batch modes separate geometry extraction from NWC writing. Retained checkpoints can be reused to recover eligible jobs.",
          "The desktop app and CLI support file selection, time limits, output conflict checks, and per-file diagnostics."
        ]
      },
      {
        "title": "n8n integration",
        "points": [
          "The custom n8n node can submit an IFC to a Windows x64 worker, poll for completion, and download the NWC and diagnostics. The workflow can run from a separate n8n host."
        ]
      }
    ]
  },
  "ddc-tasks-manager": {
    "id": "ddc-tasks-manager",
    "coverSrcLight": "assets/projects/ddc-tasks-manager-light.webp",
    "title": "DDC Tasks Manager",
    "category": "Full Stack",
    "catClass": "cat-fs",
    "impactVal": "Task",
    "impactLbl": "Platform",
    "role": "Fullstack Developer Lead",
    "tags": [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "APS"
    ],
    "overview": "DDC Tasks Manager brings construction task planning, workload coordination, and project analytics into one workspace. Teams can track work through Kanban boards and calendars connected to Autodesk Platform Services (APS).",
    "sections": [
      {
        "title": "Planning and workload management",
        "points": [
          "Directed the creation of a highly responsive, single-page application (SPA) using React, Vite, and Tailwind CSS. Implemented complex UI components including interactive Kanban boards, searchable multi-select dropdowns, unified modals, and custom markdown editors."
        ]
      },
      {
        "title": "Architecture and team leadership",
        "points": [
          "Architected a scalable client-server architecture using a modern monolithic repository, driving the adoption of clean code practices, modular design, and robust API standards.",
          "Established development standards, enforced TypeScript types for type safety, and implemented error-boundary handling to ensure high application reliability and maintainability."
        ]
      },
      {
        "title": "API, access control and Autodesk integration",
        "points": [
          "Engineered a secure, high-performance RESTful API using Node.js, Express, and MongoDB (Mongoose). Implemented robust authentication, role-based access control (RBAC), and session management optimized for cross-origin requests.",
          "Successfully spearheaded the backend integration with Autodesk Platform Services (APS) for specialized service coordination and data syncing.",
          "Designed the system's data models and routing, ensuring comprehensive API documentation using Swagger/OpenAPI for seamless team collaboration and future scalability."
        ]
      }
    ]
  },
  "bim-toolkit": {
    "id": "bim-toolkit",
    "coverSrcLight": "assets/projects/bim-toolkit-light.webp",
    "title": "BIM Toolkit",
    "category": "BIM / AEC",
    "catClass": "cat-bim",
    "impactVal": "WASM",
    "impactLbl": "BIM Parsing",
    "role": "Full Stack Developer",
    "tags": [
      "C#",
      ".NET Core",
      "React",
      "TypeScript",
      "Vite",
      "WebAssembly",
      "SignalR"
    ],
    "overview": "BIM Toolkit brings 3D viewing and engineering file processing into the browser. Teams can inspect models, merge IFC files, edit properties, and convert piping files from PCF to IFC in one workspace.",
    "sections": [
      {
        "title": "Model tools and file conversion",
        "points": [
          "Developed distinct end-to-end modules including an IFC Cleaner, IFC Merger, IFC Property Editor, and a PCF to IFC converter."
        ]
      },
      {
        "title": "Responsive 3D viewing and job progress",
        "points": [
          "Integrated web-ifc and WebAssembly (WASM) with Web Workers on the frontend to efficiently parse and render large 3D architectural models directly in the browser without freezing the UI.",
          "Implemented WebSockets using SignalR (JobHub) to provide clients with real-time status updates on background processing jobs for heavy file operations."
        ]
      },
      {
        "title": "Full stack architecture and file access",
        "points": [
          "Architected and developed features across a .NET backend and a React/TypeScript frontend, ensuring seamless data flow between the UI and server-side processing.",
          "Built a scalable, maintainable REST API using C# and .NET following Domain-Driven Design (DDD) and Clean Architecture principles (segregating API, Application, Domain, and Infrastructure layers).",
          "Designed and implemented secure user authentication (with token refresh middleware) alongside a robust file upload and storage management system."
        ]
      }
    ]
  },
  "n8n-automation": {
    "id": "n8n-automation",
    "coverSrcLight": "assets/projects/n8n-automation-light.webp",
    "title": "N8N automation",
    "category": "BIM / AEC",
    "catClass": "cat-bim",
    "impactVal": "n8n",
    "impactLbl": "Orchestration",
    "role": "Workflow Automation & BIM Integration",
    "tags": [
      "n8n",
      "TypeScript",
      "Navisworks",
      "PCF / IFC",
      "Kubernetes"
    ],
    "overview": "Saipem’s self-hosted n8n platform automates the path from an incoming piping file to a processed Navisworks model. Custom TypeScript nodes connect engineering file shares, AutoSpool, model conversion, and publishing.",
    "workflow": {
      "title": "End-to-end workflow from PCF to NWD",
      "steps": [
        {
          "label": "Source PCF",
          "title": "Pick up the source PCF",
          "text": "An SMB trigger detects new piping files in a shared folder, and a download node retrieves them for processing."
        },
        {
          "label": "AutoSpool",
          "title": "Generate fabrication spools",
          "text": "The custom AutoSpool n8n node submits each PCF to the AutoSpool service, tracks the job, and retrieves the processed PCF containing the spool results."
        },
        {
          "label": "IFC4 to NWD",
          "title": "Build and publish the model",
          "text": "The PCF-to-IFC node converts the processed PCF into an IFC4 model. A Navisworks publishing step loads that model and saves the final processed NWD file."
        },
        {
          "label": "NWD delivery",
          "title": "Deliver the NWD",
          "text": "The workflow can save the finished file to a network share or publish it to Autodesk Construction Cloud."
        }
      ]
    },
    "sections": [
      {
        "title": "Monitoring and related Navisworks operations",
        "points": [
          "n8n tracks background jobs by ID and can route failures for review with diagnostic logs. The Navisworks integration also supports model property updates, model merging, and data exports in related workflows."
        ]
      }
    ]
  },
  "autospool-automated-piping-spool-generation-engine": {
    "id": "autospool-automated-piping-spool-generation-engine",
    "coverSrcLight": "assets/projects/autospool-automated-piping-spool-generation-engine-light.webp",
    "title": "AutoSpool Engine",
    "category": "Desktop",
    "catClass": "cat-dt",
    "impactVal": "O(1)",
    "impactLbl": "Graph Routing",
    "role": "Lead Software Engineer",
    "tags": [
      "C#",
      ".NET 8",
      "WPF",
      "Graph Theory",
      "3D Geometry"
    ],
    "overview": "AutoSpool turns Plant Component Files (PCF) into fabrication spools for industrial piping. The engine divides connected pipe networks into assemblies that account for welding and transport constraints.",
    "sections": [
      {
        "title": "From PCF to fabrication spools",
        "points": [
          "Implemented a custom graph-based topology model utilizing spatial hashing to achieve O(1) adjacency lookups, allowing for highly efficient traversal and processing of connected piping systems.",
          "Integrated advanced, industry-standard fabrication rules (ASME B31.3, PFI ES-7) directly into the business logic to prioritize shop welding over field welding, automatically designate field fit welds (FFW), and optimize material usage."
        ]
      },
      {
        "title": "Geometry and shipping constraints",
        "points": [
          "Engineered 3D geometric validation algorithms to calculate precise bounding boxes (accounting for pipe coordinates, insulation, and undimensioned items) and strictly enforce shipping/logistics constraints."
        ]
      },
      {
        "title": "Engine architecture and operator tools",
        "points": [
          "Built a modular, highly testable architecture using Dependency Injection (DI) to compose core services including PCF parsing, graph building, geometric math, and strict data validation.",
          "Created both a robust Command-Line Interface (CLI) for batch processing and a Windows Presentation Foundation (WPF) GUI (AutoSpool.GUI) to visualize spool structures and streamline workflows."
        ]
      }
    ]
  },
  "ifc-manager-application-autonomous-pcf-to-ifc-transformation-engine": {
    "id": "ifc-manager-application-autonomous-pcf-to-ifc-transformation-engine",
    "coverSrcLight": "assets/projects/ifc-manager-application-autonomous-pcf-to-ifc-transformation-engine-light.webp",
    "title": "IFC Manager Application",
    "category": "BIM / AEC",
    "catClass": "cat-bim",
    "impactVal": "80%",
    "impactLbl": "Time Saved",
    "role": "Backend Developer & Algorithm Engineer",
    "tags": [
      "C#",
      "ASP.NET Core",
      "IFC\n                Standards",
      "PCF Protocol"
    ],
    "overview": "IFC Manager is a Windows toolkit for BIM managers working with large batches of models. It validates and updates IFC files against Saipem’s project standards and connects the work to the DDC platform.",
    "sections": [
      {
        "title": "Batch processing and format conversion",
        "points": [
          "Automated batch processing of IFC files leveraging parallel computing.",
          "Seamless conversion mechanisms between IFC versions (IFC2x3 and IFC4).",
          "Geometry optimization functions tailored for handling massive BIM models."
        ]
      },
      {
        "title": "Model validation and property editing",
        "points": [
          "A customizable validation engine to ensure compliance with specific BIM project standards.",
          "Tools for the bulk editing and enrichment of element property sets."
        ]
      },
      {
        "title": "DDC integration",
        "points": [
          "Direct integration with the Saipem DDC Platform's REST API."
        ]
      }
    ]
  },
  "saipem-data-driven-construction-ddc-platform": {
    "id": "saipem-data-driven-construction-ddc-platform",
    "coverSrcLight": "assets/projects/saipem-data-driven-construction-ddc-platform-light.webp",
    "title": "Saipem Data-Driven Construction (DDC) Platform",
    "category": "Cloud",
    "catClass": "cat-cloud",
    "impactVal": "★",
    "impactLbl": "Lead Architect",
    "role": "Lead Architect & Full-Stack Developer",
    "tags": [
      ".NET 10",
      "React TS",
      "Azure\n                AKS",
      "Cosmos DB",
      "APS"
    ],
    "overview": "Saipem’s Data-Driven Construction platform gives teams one place to explore BIM models, monitor project metrics, and review reports across multiple megaprojects.",
    "sections": [
      {
        "title": "Browser models and Autodesk integration",
        "points": [
          "Developed a web-based IFC Viewer for exploring 3D models directly in the browser.",
          "Leveraged Autodesk Platform Services (APS) for handling model derivatives and data extraction."
        ]
      },
      {
        "title": "Application and cloud architecture",
        "points": [
          "Engineered full-stack solutions utilizing an ASP.NET Core 10 backend and a React TypeScript frontend.",
          "Structured Oracle databases to manage complex BIM data and project metadata.",
          "Integrated Azure CosmosDB to support high-speed storage of BIM element properties.",
          "Orchestrated deployment on Azure Kubernetes Service (AKS), ensuring multi-tenant isolation."
        ]
      },
      {
        "title": "Reporting and project impact",
        "points": [
          "Created custom embedded Power BI dashboards featuring interactive d3.js visualizations.",
          "The platform successfully processes millions of BIM components across diverse active projects, consistently delivering sub-second response times even for complex spatial data queries."
        ]
      }
    ]
  },
  "web-based-bim-editor-viewer": {
    "id": "web-based-bim-editor-viewer",
    "coverSrcLight": "assets/projects/web-based-bim-editor-viewer-light.webp",
    "title": "Web-Based IFC 3D Viewer",
    "category": "BIM / AEC",
    "catClass": "cat-bim",
    "impactVal": "0",
    "impactLbl": "Desktop Deps",
    "role": "Lead Developer / Front-End Engineer",
    "tags": [
      "JavaScript",
      "Vite",
      "Three.js",
      "@thatopen/components",
      "web-ifc (WASM)"
    ],
    "overview": "The IFC 3D Viewer lets engineering teams open, inspect, and edit BIM models in a browser. Users can select model elements, change their properties, and export an updated IFC file.",
    "sections": [
      {
        "title": "View and inspect a 3D model",
        "points": [
          "Engineered an interactive 3D rendering environment using Three.js and That Open Engine, allowing users to upload, navigate (orbit, pan, zoom), and inspect complex BIM models seamlessly in the browser.",
          "Developed selection logic using Three.js raycasting to identify 3D meshes clicked by users, mapping fragmented geometries back to their IFC local IDs to retrieve and manipulate relational metadata."
        ]
      },
      {
        "title": "Edit properties and export an IFC",
        "points": [
          "Built a custom data-handling system that parses complex IFC elements into an interactive properties panel and hierarchy tree.",
          "Authored an advanced property-editing engine that tracks all metadata revisions in-memory. Implemented an export pipeline leveraging web-ifc to pack and download the modified IFC files with all aggregated property changes applied."
        ]
      },
      {
        "title": "Browser interface and build tooling",
        "points": [
          "Built a responsive, modern glass-morphism user interface using Vanilla JS, HTML, and CSS (incorporating Saipem branding). Created custom interactive components like drag-and-drop upload areas, loading overlays with progress bars, and floating toolbars.",
          "Configured a modern Vite-based build system utilizing ES Modules, customized to handle web-worker and WebAssembly dependencies required by the Web-IFC parsers."
        ]
      }
    ]
  },
  "autonavis-autospool-automation-tools-ai-orchestrated-navisworks-automation": {
    "id": "autonavis-autospool-automation-tools-ai-orchestrated-navisworks-automation",
    "coverSrcLight": "assets/projects/autonavis-autospool-automation-tools-ai-orchestrated-navisworks-automation-light.webp",
    "title": "AutoNavis & AutoSpool Automation Tools",
    "category": "AI",
    "catClass": "cat-ai",
    "impactVal": "Days→Hrs",
    "impactLbl": "Task Speed",
    "role": "Lead AI & Automation Engineer",
    "tags": [
      ".NET",
      "Navisworks API",
      "Azure AI\n                Foundry",
      "Sequential Agents"
    ],
    "overview": "AutoNavis and AutoSpool are Autodesk Navisworks plugins for structural and piping teams at Saipem. They automate clash review and the preparation of fabrication deliverables.",
    "sections": [
      {
        "title": "AutoNavis for clash review",
        "points": [
          "Automated extraction and reporting of clash detection results based on logic-driven filtering rules.",
          "Batch generation of annotated viewpoints to accelerate the clash review process.",
          "Seamless REST API integration connecting Navisworks with enterprise project management systems.",
          "Dynamic administration of custom search sets and selection trees."
        ]
      },
      {
        "title": "AutoSpool for fabrication workflows",
        "points": [
          "Automated generation of spool sheets directly from Navisworks data.",
          "Streamlined extraction of ISO drawings and associated material take-offs (MTO).",
          "Advanced tracking mechanisms for monitoring pipe spool statuses through fabrication."
        ]
      }
    ]
  },
  "chat-ddc-ask-db-ai-ask-table-ai-conversational-database-interface": {
    "id": "chat-ddc-ask-db-ai-ask-table-ai-conversational-database-interface",
    "coverSrcLight": "assets/projects/chat-ddc-ask-db-ai-ask-table-ai-conversational-database-interface-light.webp",
    "title": "Chat DDC (Ask DB AI / Ask Table AI)",
    "category": "AI",
    "catClass": "cat-ai",
    "impactVal": "NLQ",
    "impactLbl": "No SQL Needed",
    "role": "Lead AI Integration Specialist",
    "tags": [
      "Azure OpenAI",
      "SQL Server",
      "Oracle\n                DB",
      "Python/C#"
    ],
    "overview": "Chat DDC lets construction teams ask plain-language questions about project databases and uploaded spreadsheets. It uses separate paths for structured SQL queries and retrieval from Excel and CSV files.",
    "sections": [
      {
        "title": "Ask DB AI for project databases",
        "points": [
          "Ask DB AI: A dynamic natural language-to-SQL pipeline powered by LangChain agents and schema-aware prompting techniques.",
          "Integrated security layer to block any destructive or unauthorized SQL commands.",
          "Implements an advanced two-tier RAG pipeline: initially fetching pertinent schemas and data samples, followed by formulating contextually accurate SQL queries. The architecture gracefully manages multi-table joins, complex aggregations, and temporal queries essential for construction management."
        ]
      },
      {
        "title": "Ask Table AI for Excel and CSV",
        "points": [
          "Ask Table AI: A Retrieval-Augmented Generation (RAG) system for querying user-uploaded project data in Excel or CSV formats.",
          "Specialized vector indexing for accurate construction domain data retrieval."
        ]
      },
      {
        "title": "Model selection and fallback",
        "points": [
          "Core processing handled by OpenAI's GPT-4, with Hugging Face models serving as fallbacks."
        ]
      }
    ]
  },
  "ifc-data-processing-library-suite-proprietary-bim-nuget-ecosystem": {
    "id": "ifc-data-processing-library-suite-proprietary-bim-nuget-ecosystem",
    "coverSrcLight": "assets/projects/ifc-data-processing-library-suite-proprietary-bim-nuget-ecosystem-light.webp",
    "title": "IFC Data Processing Library Suite",
    "category": "BIM / AEC",
    "catClass": "cat-bim",
    "impactVal": "Lib",
    "impactLbl": "NuGet Suite",
    "role": "Library Creator & Maintainer",
    "tags": [
      ".NET Standard",
      "NuGet",
      "IFC",
      "C#"
    ],
    "overview": "The IFC Data Processing Library Suite provides reusable tools for reading model geometry, editing properties, and extracting quantities. Teams can use the tools through .NET packages, Python libraries, or an n8n node.",
    "sections": [
      {
        "title": ".NET, Python and n8n packages",
        "points": [
          ".NET Toolset: Delivered via NuGet, this library utilizes XBIM for high-performance IFC parsing alongside a fluid LINQ querying interface.",
          "Python Tools: Built upon IfcOpenShell, offering deep integration with pandas DataFrames for robust data manipulation.",
          "n8n Integration: A custom node enabling no-code automation for repetitive IFC processing workflows."
        ]
      },
      {
        "title": "Model properties and relationships",
        "points": [
          "Efficient extraction and modification of BIM element properties.",
          "Navigation of complex spatial hierarchies (Site → Building → Floor → Space → Element).",
          "Construction of relationship graphs mapping containment, aggregation, and association."
        ]
      },
      {
        "title": "Quantity takeoffs and data exports",
        "points": [
          "Automated routines for precise quantity takeoffs.",
          "Export pipelines transforming IFC data into structured JSON and CSV formats."
        ]
      }
    ]
  },
  "power-bi-aps-viewer-data-connectors-enterprise-bi-architecture": {
    "id": "power-bi-aps-viewer-data-connectors-enterprise-bi-architecture",
    "coverSrcLight": "assets/projects/power-bi-aps-viewer-data-connectors-enterprise-bi-architecture-light.webp",
    "title": "Power BI APS Viewer & Data Connectors",
    "category": "Cloud",
    "catClass": "cat-cloud",
    "impactVal": "RT",
    "impactLbl": "Real-Time BI",
    "role": "BI Developer & Data Engineer",
    "tags": [
      "Power BI",
      "Microsoft Fabric",
      "DAX",
      "Oracle DB",
      "MSSQL"
    ],
    "overview": "These Power BI components connect an Autodesk Platform Services 3D viewer to report visuals. Selecting an element in the model filters the report, and selecting report data highlights the corresponding model elements.",
    "sections": [
      {
        "title": "APS Viewer and two-way filtering",
        "points": [
          "Integrates the Autodesk Platform Services (APS) Viewer natively within Power BI reports.",
          "Supports bi-directional filtering: highlighting chart metrics isolates 3D objects, and vice versa.",
          "Features a dynamic property panel that displays granular details of selected BIM elements.",
          "Synchronizes camera angles and viewpoints seamlessly across different report pages."
        ]
      },
      {
        "title": "Data connector and scheduled refreshes",
        "points": [
          "A specialized Power BI connector designed to extract BIM metadata directly via the APS API.",
          "Automatically maps out property schemas based on the underlying 3D model structure.",
          "Features full support for scheduled, incremental data refreshes."
        ]
      }
    ]
  },
  "llama-3-business-conversational-agent": {
    "id": "llama-3-business-conversational-agent",
    "coverSrcLight": "assets/projects/llama-3-business-conversational-agent-light.webp",
    "title": "Llama 3 Business Conversational Agent",
    "category": "AI",
    "catClass": "cat-ai",
    "impactVal": "RAG",
    "impactLbl": "Context-Aware",
    "role": "Lead AI Developer",
    "tags": [
      "Python",
      "Llama 3",
      "Embedchain",
      "Vector DB"
    ],
    "overview": "This Llama 3 assistant supports business collaboration by carrying context across follow-up questions and retrieving relevant information for its responses.",
    "sections": [
      {
        "title": "Conversation memory",
        "points": [
          "The Llama 3 assistant retains context across longer conversations, supporting follow-up questions in the same session."
        ]
      },
      {
        "title": "Domain-specific retrieval",
        "points": [
          "Embedchain provides retrieval-augmented generation (RAG) to bring relevant business context into the response."
        ]
      }
    ]
  },
  "angular-clips-video-processing-platform": {
    "id": "angular-clips-video-processing-platform",
    "coverSrcLight": "assets/projects/angular-clips-video-processing-platform-light.webp",
    "title": "Angular-Clips (Video Streaming & Management Platform)",
    "category": "Full Stack",
    "catClass": "cat-fs",
    "impactVal": "WASM",
    "impactLbl": "Client Processing",
    "role": "Full-Stack Architect",
    "tags": [
      "Angular 17",
      "RxJS",
      "Firebase",
      "WASM",
      "FFmpeg",
      "Tailwind CSS"
    ],
    "overview": "Angular Clips is a server-rendered Angular 17 and Firebase app for uploading, streaming, and managing videos. It creates clip thumbnails locally before uploading the video and thumbnail to Firebase.",
    "sections": [
      {
        "title": "In-browser thumbnails and streaming uploads",
        "points": [
          "Integrated FFmpeg via WebAssembly (WASM) to process video files locally within the browser. Efficiently extracted video frames to generate dynamic thumbnails locally before uploading, significantly minimizing backend processing costs and latency.",
          "Leveraged powerful RxJS operators (forkJoin, combineLatest, switchMap) to coordinate complex parallel workflows, such as simultaneously uploading videos and locally generated thumbnails to Firebase Storage while calculating and displaying a unified real-time progress bar."
        ]
      },
      {
        "title": "Authentication and form validation",
        "points": [
          "Integrated Firebase Authentication for secure user registration and login. Implemented custom Angular Route Guards (AuthGuard) to secure user-specific dashboards (/manage, /upload) and automatically handle unauthorized application redirects.",
          "Built highly interactive Angular Reactive Forms featuring custom Synchronous and Asynchronous Validators. Engineered async validators to query Firebase in real-time to check for email exact-matches/availability without submitting the form, alongside cross-field validators for password confirmation."
        ]
      },
      {
        "title": "Reusable components and clip browsing",
        "points": [
          "Designed a highly reusable UI library (including Modals and Tab systems) using advanced Angular concepts like Content Projection (@ContentChildren, ng-content) and standalone components for clean, modular code.",
          "Implemented infinite-scroll-friendly database queries using Firestore. Fetched video clips in limited batches using document snapshot cursors (startAt) resulting in reduced database reads and optimized application load times.",
          "Utilized ActivatedRoute to deeply link dashboard states (like video sorting preferences) to query parameters (e.g., ?sort=), maintaining sync between the UI state and the URL. Built custom Event Blocker directives to intuitively handle Drag-and-Drop native browser events."
        ]
      }
    ]
  },
  "wasm-image-effects-engine": {
    "id": "wasm-image-effects-engine",
    "coverSrcLight": "assets/projects/wasm-image-effects-engine-light.webp",
    "title": "Image Processing Web Application (Rust & WebAssembly)",
    "category": "WASM",
    "catClass": "cat-dt",
    "impactVal": "Rust",
    "impactLbl": "Native Speed",
    "role": "Rust & WebAssembly Engineer",
    "tags": [
      "Rust",
      "WebAssembly",
      "Webpack",
      "JavaScript"
    ],
    "overview": "This browser-based editor applies effects such as grayscale and Gaussian blur using a Rust engine compiled to WebAssembly. Image processing runs on the device.",
    "sections": [
      {
        "title": "Rust image processing and effects",
        "points": [
          "Engineered the core image manipulation logic using Rust and the image crate. The module efficiently decodes Base64 image data, applies complex transformations (Grayscale conversion and Gaussian Blur for lens depth effects), and re-encodes the output to be rendered on the frontend."
        ]
      },
      {
        "title": "WebAssembly and browser integration",
        "points": [
          "Rust, WebAssembly (WASM), JavaScript, HTML5, Webpack.",
          "Utilized wasm-bindgen to facilitate seamless memory and data bridging between JavaScript and Rust, ensuring zero-latency image handoffs.",
          "Configured a modern build pipeline using Webpack and @wasm-tool/wasm-pack-plugin to automatically compile Rust into a WebAssembly module and bundle the JavaScript frontend.",
          "Implemented web-sys to securely invoke JavaScript browser APIs (like console.log) directly from Rust for advanced debugging and logging."
        ]
      },
      {
        "title": "Processing in the browser",
        "points": [
          "Demonstrated the capability to push the boundaries of browser performance by offloading heavy pixel manipulations from JavaScript to a compiled near-native speed WebAssembly environment, resulting in faster processing times and a smooth user experience."
        ]
      }
    ]
  },
  "mango-microservices-commerce-system": {
    "id": "mango-microservices-commerce-system",
    "coverSrcLight": "assets/projects/mango-microservices-commerce-system-light.webp",
    "title": "E-Commerce Microservices Application",
    "category": "Cloud",
    "catClass": "cat-cloud",
    "impactVal": "μSVC",
    "impactLbl": "Microservices",
    "role": "Full Stack .NET Developer (Personal Project)",
    "tags": [
      ".NET 8",
      "Microservices",
      "Azure Service Bus",
      "EF Core",
      "Stripe"
    ],
    "overview": "This full stack e-commerce application separates product, cart, discount, identity, order, and email features into independent .NET services. It combines Stripe checkout with background messaging through Azure Service Bus.",
    "sections": [
      {
        "title": "Independent services and data access",
        "points": [
          "Architected and deployed isolated microservices (AuthAPI, ProductAPI, ShoppingCartAPI, CouponAPI, OrderAPI, EmailsAPI) using .NET 8 and ASP.NET Core Web API.",
          "Leveraged Entity Framework Core (Code-First) across multiple SQL Server databases."
        ]
      },
      {
        "title": "Checkout, payments and messaging",
        "points": [
          "Integrated Azure Service Bus to establish a pub/sub event-driven architecture, decoupling checkout from background tasks.",
          "Integrated Stripe Payment Gateway to handle secure checkout sessions and asynchronous validation."
        ]
      },
      {
        "title": "Authentication and storefront",
        "points": [
          "Implemented centralized Identity management using ASP.NET Core Identity and JWT.",
          "Developed the consumer-facing frontend using ASP.NET Core MVC, Razor Views, jQuery, and Toastr."
        ]
      }
    ]
  },
  "revit-automation-plastering-extension": {
    "id": "revit-automation-plastering-extension",
    "coverSrcLight": "assets/projects/revit-automation-plastering-extension-light.webp",
    "title": "Revit Automation: Plastering Extension",
    "category": "BIM / AEC",
    "catClass": "cat-bim",
    "impactVal": "Auto",
    "impactLbl": "Revit Plugin",
    "role": "BIM Tool Developer",
    "tags": [
      "C#",
      "Autodesk Revit API"
    ],
    "overview": "This Revit extension uses room boundaries to generate wall plastering layers automatically, reducing repetitive modeling work.",
    "sections": [
      {
        "title": "Detect room boundaries",
        "points": [
          "The Revit extension identifies room boundaries algorithmically so the model can drive wall finish placement."
        ]
      },
      {
        "title": "Generate plastering layers",
        "points": [
          "The extension generates plastering layers along the detected boundaries, reducing repetitive modeling work."
        ]
      }
    ]
  },
  "hotel-listing-restful-api": {
    "id": "hotel-listing-restful-api",
    "coverSrcLight": "assets/projects/hotel-listing-restful-api-light.webp",
    "title": "Hotel Listing RESTful API",
    "category": "Full Stack",
    "catClass": "cat-fs",
    "impactVal": "API",
    "impactLbl": "Redis Cached",
    "role": "Lead API Developer",
    "tags": [
      ".NET Core",
      "EF Core",
      "MySQL",
      "Redis"
    ],
    "overview": "This REST API manages hotel listing data with Entity Framework Core and MySQL. It uses Redis response caching to speed up repeated requests.",
    "sections": [
      {
        "title": "API and database",
        "points": [
          "The RESTful API handles hotel-management data through Entity Framework Core with MySQL."
        ]
      },
      {
        "title": "Response caching",
        "points": [
          "Redis response caching reduces database work for repeat requests and helps minimize load times."
        ]
      }
    ]
  },
  "construction-management-graduation-project": {
    "id": "construction-management-graduation-project",
    "title": "Construction Management Graduation Project",
    "category": "BIM / AEC",
    "catClass": "cat-bim",
    "impactVal": "4D",
    "impactLbl": "Project Planning",
    "role": "Project Manager / BIM Modeler",
    "tags": [
      "BIM",
      "Navisworks",
      "Primavera P6",
      "Power BI",
      "MS Project"
    ],
    "overview": "This graduation project applied construction management methods to a large wastewater treatment facility in Egypt, with a focus on BIM coordination, project scheduling, and reporting.",
    "sections": [
      {
        "title": "Facility scope and delivery context",
        "points": [
          "Evaluated real-world joint venture planning and execution.",
          "Structured around an enormous 64.8 m³/second processing capacity.",
          "Documented full lifecycle management strategies under rigorous government oversight."
        ]
      },
      {
        "title": "BIM models and 4D scheduling",
        "points": [
          "Comprehensive BIM Modeling across disciplines using Autodesk Revit.",
          "Applied 4D scheduling principles via Navisworks, Synchro Pro, and Fuzor.",
          "Structured deep project timelines using MS Project, WBS Schedule Pro, and Primavera P6."
        ]
      },
      {
        "title": "Reporting and field operations",
        "points": [
          "Managed reporting and analytics utilizing dynamic Power BI dashboards.",
          "Outlined robust field operations logic."
        ]
      }
    ]
  }
};
