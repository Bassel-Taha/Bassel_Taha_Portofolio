const projectsData = {
  "ddc-tasks-manager": {
    "id": "ddc-tasks-manager",
    "title": "DDC Tasks Manager",
    "category": "Full Stack",
    "catClass": "cat-fs",
    "impactVal": "Task",
    "impactLbl": "Platform",
    "role": "Fullstack Developer Lead",
    "fullHtml": "\n            Led the end-to-end architecture and development of an enterprise-grade task and workload management platform (DDC Tasks Manager). The application streamlines project coordination, team management, and agile workflows through advanced features like Kanban boards, calendar views, and centralized analytics, seamlessly integrating with Autodesk Platform Services (APS).<br/><br/>\n<strong>Key Responsibilities & Achievements:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem;\">\n<li><strong>Technical Leadership & Architecture:</strong> Architected a scalable client-server architecture using a modern monolithic repository, driving the adoption of clean code practices, modular design, and robust API standards.</li>\n<li><strong>Frontend Development (React/TypeScript):</strong> Directed the creation of a highly responsive, single-page application (SPA) using React, Vite, and Tailwind CSS. Implemented complex UI components including interactive Kanban boards, searchable multi-select dropdowns, unified modals, and custom markdown editors.</li>\n<li><strong>Backend Engineering (Node.js/Express):</strong> Engineered a secure, high-performance RESTful API using Node.js, Express, and MongoDB (Mongoose). Implemented robust authentication, role-based access control (RBAC), and session management optimized for cross-origin requests.</li>\n<li><strong>Third-Party Integrations:</strong> Successfully spearheaded the backend integration with Autodesk Platform Services (APS) for specialized service coordination and data syncing.</li>\n<li><strong>API Design & Documentation:</strong> Designed the system's data models and routing, ensuring comprehensive API documentation using Swagger/OpenAPI for seamless team collaboration and future scalability.</li>\n<li><strong>Team & Quality Management:</strong> Established development standards, enforced TypeScript types for type safety, and implemented error-boundary handling to ensure high application reliability and maintainability.</li>\n</ul>\n",
    "tags": [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "APS"
    ]
  },
  "bim-toolkit": {
    "id": "bim-toolkit",
    "title": "BIM Toolkit",
    "category": "BIM / AEC",
    "catClass": "cat-bim",
    "impactVal": "WASM",
    "impactLbl": "BIM Parsing",
    "role": "Full Stack Developer",
    "fullHtml": "\n            Developed a comprehensive, web-based Building Information Modeling (BIM) platform designed to parse, manipulate, and visualize complex 3D engineering models. The application provides advanced utilities for managing IFC (Industry Foundation Classes) and PCF files, including 3D viewing, file merging, property editing, and format conversion.<br/><br/>\n<strong>Key Responsibilities & Achievements:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem;\">\n<li><strong>Full Stack Development:</strong> Architected and developed features across a .NET backend and a React/TypeScript frontend, ensuring seamless data flow between the UI and server-side processing.</li>\n<li><strong>Clean Architecture Backend:</strong> Built a scalable, maintainable REST API using C# and .NET following Domain-Driven Design (DDD) and Clean Architecture principles (segregating API, Application, Domain, and Infrastructure layers).</li>\n<li><strong>Real-time Processing Updates:</strong> Implemented WebSockets using SignalR (JobHub) to provide clients with real-time status updates on background processing jobs for heavy file operations.</li>\n<li><strong>Complex Data Visualization:</strong> Integrated web-ifc and WebAssembly (WASM) with Web Workers on the frontend to efficiently parse and render large 3D architectural models directly in the browser without freezing the UI.</li>\n<li><strong>Tooling & Features:</strong> Developed distinct end-to-end modules including an IFC Cleaner, IFC Merger, IFC Property Editor, and a PCF to IFC converter.</li>\n<li><strong>Security & File Management:</strong> Designed and implemented secure user authentication (with token refresh middleware) alongside a robust file upload and storage management system.</li>\n</ul>\n",
    "tags": [
      "C#",
      ".NET Core",
      "React",
      "TypeScript",
      "Vite",
      "WebAssembly",
      "SignalR"
    ]
  },
  "autospool-automated-piping-spool-generation-engine": {
    "id": "autospool-automated-piping-spool-generation-engine",
    "title": "AutoSpool Engine",
    "category": "Desktop",
    "catClass": "cat-dt",
    "impactVal": "O(1)",
    "impactLbl": "Graph Routing",
    "role": "Lead Software Engineer",
    "fullHtml": "\n            Developed a high-performance, automated piping spool generation engine that parses Plant Component Files (PCF) to mathematically segment complex 3D piping networks into optimized, transportable spools for industrial construction.<br/><br/>\n<strong>Key Responsibilities & Achievements:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem;\">\n<li><strong>Graph-Based Topology:</strong> Implemented a custom graph-based topology model utilizing spatial hashing to achieve O(1) adjacency lookups, allowing for highly efficient traversal and processing of connected piping systems.</li>\n<li><strong>3D Geometric Validation:</strong> Engineered 3D geometric validation algorithms to calculate precise bounding boxes (accounting for pipe coordinates, insulation, and undimensioned items) and strictly enforce shipping/logistics constraints.</li>\n<li><strong>Fabrication Business Logic:</strong> Integrated advanced, industry-standard fabrication rules (ASME B31.3, PFI ES-7) directly into the business logic to prioritize shop welding over field welding, automatically designate field fit welds (FFW), and optimize material usage.</li>\n<li><strong>Modular Architecture:</strong> Built a modular, highly testable architecture using Dependency Injection (DI) to compose core services including PCF parsing, graph building, geometric math, and strict data validation.</li>\n<li><strong>Batch Processing & GUI:</strong> Created both a robust Command-Line Interface (CLI) for batch processing and a Windows Presentation Foundation (WPF) GUI (AutoSpool.GUI) to visualize spool structures and streamline workflows.</li>\n</ul>\n",
    "tags": [
      "C#",
      ".NET 8",
      "WPF",
      "Graph Theory",
      "3D Geometry"
    ]
  },
  "ifc-manager-application-autonomous-pcf-to-ifc-transformation-engine": {
    "id": "ifc-manager-application-autonomous-pcf-to-ifc-transformation-engine",
    "title": "IFC Manager Application",
    "category": "BIM / AEC",
    "catClass": "cat-bim",
    "impactVal": "80%",
    "impactLbl": "Time Saved",
    "role": "Backend Developer & Algorithm Engineer",
    "fullHtml": "\n            The IFC Manager is a robust Windows desktop toolkit designed for BIM managers to seamlessly process, validate, and manipulate IFC models according to Saipem's strict project protocols.<br/><br/>\n<strong>Core Features:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem;\">\n<li>Automated batch processing of IFC files leveraging parallel computing</li>\n<li>A customizable validation engine to ensure compliance with specific BIM project standards</li>\n<li>Tools for the bulk editing and enrichment of element property sets</li>\n<li>Seamless conversion mechanisms between IFC versions (IFC2x3 and IFC4)</li>\n<li>Geometry optimization functions tailored for handling massive BIM models</li>\n<li>Direct integration with the Saipem DDC Platform's REST API</li>\n</ul>\n",
    "tags": [
      "C#",
      "ASP.NET Core",
      "IFC\n                Standards",
      "PCF Protocol"
    ]
  },
  "saipem-data-driven-construction-ddc-platform": {
    "id": "saipem-data-driven-construction-ddc-platform",
    "title": "Saipem Data-Driven Construction (DDC) Platform",
    "category": "Cloud",
    "catClass": "cat-cloud",
    "impactVal": "\u2605",
    "impactLbl": "Lead Architect",
    "role": "Lead Architect & Full-Stack Developer",
    "fullHtml": "\n            The Data-Driven Construction (DDC) Platform serves as Saipem's primary enterprise intelligence system. It brings together BIM data, project metrics, and advanced analytics in a centralized ecosystem designed to manage multiple simultaneous megaprojects.<br/><br/>\n<strong>Key Contributions:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem; margin-bottom: 0.5rem;\">\n<li>Engineered full-stack solutions utilizing an ASP.NET Core 10 backend and a React TypeScript frontend</li>\n<li>Developed a web-based IFC Viewer for exploring 3D models directly in the browser</li>\n<li>Leveraged Autodesk Platform Services (APS) for handling model derivatives and data extraction</li>\n<li>Structured Oracle databases to manage complex BIM data and project metadata</li>\n<li>Integrated Azure CosmosDB to support high-speed storage of BIM element properties</li>\n<li>Orchestrated deployment on Azure Kubernetes Service (AKS), ensuring multi-tenant isolation</li>\n<li>Created custom embedded Power BI dashboards featuring interactive d3.js visualizations</li>\n</ul>\n<strong>Project Impact:</strong><br/>\n            The platform successfully processes millions of BIM components across diverse active projects, consistently delivering sub-second response times even for complex spatial data queries.\n          ",
    "tags": [
      ".NET 10",
      "React TS",
      "Azure\n                AKS",
      "Cosmos DB",
      "APS"
    ]
  },
  "web-based-bim-editor-viewer": {
    "id": "web-based-bim-editor-viewer",
    "title": "Web-Based IFC 3D Viewer",
    "category": "BIM / AEC",
    "catClass": "cat-bim",
    "impactVal": "0",
    "impactLbl": "Desktop Deps",
    "role": "Lead Developer / Front-End Engineer",
    "fullHtml": "\n            Designed and developed a high-performance web application tailored for the visualization and manipulation of BIM (Building Information Modeling) models using the Industry Foundation Classes (IFC) standard.<br/><br/>\n<strong>Key Responsibilities & Achievements:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem;\">\n<li><strong>3D Visualization & Architecture:</strong> Engineered an interactive 3D rendering environment using Three.js and That Open Engine, allowing users to upload, navigate (orbit, pan, zoom), and inspect complex BIM models seamlessly in the browser.</li>\n<li><strong>BIM Property Management & Change Tracking:</strong> Built a custom data-handling system that parses complex IFC elements into an interactive properties panel and hierarchy tree.</li>\n<li><strong>In-Memory File Modification:</strong> Authored an advanced property-editing engine that tracks all metadata revisions in-memory. Implemented an export pipeline leveraging web-ifc to pack and download the modified IFC files with all aggregated property changes applied.</li>\n<li><strong>DOM & UI Development:</strong> Built a responsive, modern glass-morphism user interface using Vanilla JS, HTML, and CSS (incorporating Saipem branding). Created custom interactive components like drag-and-drop upload areas, loading overlays with progress bars, and floating toolbars.</li>\n<li><strong>Build configuration:</strong> Configured a modern Vite-based build system utilizing ES Modules, customized to handle web-worker and WebAssembly dependencies required by the Web-IFC parsers.</li>\n<li><strong>Element Isolation & Raycasting:</strong> Developed selection logic using Three.js raycasting to identify 3D meshes clicked by users, mapping fragmented geometries back to their IFC local IDs to retrieve and manipulate relational metadata.</li>\n</ul>\n",
    "tags": [
      "JavaScript",
      "Vite",
      "Three.js",
      "@thatopen/components",
      "web-ifc (WASM)"
    ]
  },
  "autonavis-autospool-automation-tools-ai-orchestrated-navisworks-automation": {
    "id": "autonavis-autospool-automation-tools-ai-orchestrated-navisworks-automation",
    "title": "AutoNavis & AutoSpool Automation Tools",
    "category": "AI",
    "catClass": "cat-ai",
    "impactVal": "Days\u2192Hrs",
    "impactLbl": "Task Speed",
    "role": "Lead AI & Automation Engineer",
    "fullHtml": "\n            Developed two highly specialized plugins for Autodesk Navisworks to streamline and automate complex BIM data workflows specifically within structural and piping disciplines at Saipem.<br/><br/>\n<strong>AutoNavis Overview:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem; margin-bottom: 0.5rem;\">\n<li>Automated extraction and reporting of clash detection results based on logic-driven filtering rules</li>\n<li>Batch generation of annotated viewpoints to accelerate the clash review process</li>\n<li>Seamless REST API integration connecting Navisworks with enterprise project management systems</li>\n<li>Dynamic administration of custom search sets and selection trees</li>\n</ul>\n<strong>AutoSpool Overview:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem;\">\n<li>Automated generation of spool sheets directly from Navisworks data</li>\n<li>Streamlined extraction of ISO drawings and associated material take-offs (MTO)</li>\n<li>Advanced tracking mechanisms for monitoring pipe spool statuses through fabrication</li>\n</ul>\n",
    "tags": [
      ".NET",
      "Navisworks API",
      "Azure AI\n                Foundry",
      "Sequential Agents"
    ]
  },
  "chat-ddc-ask-db-ai-ask-table-ai-conversational-database-interface": {
    "id": "chat-ddc-ask-db-ai-ask-table-ai-conversational-database-interface",
    "title": "Chat DDC (Ask DB AI / Ask Table AI)",
    "category": "AI",
    "catClass": "cat-ai",
    "impactVal": "NLQ",
    "impactLbl": "No SQL Needed",
    "role": "Lead AI Integration Specialist",
    "fullHtml": "\n            Chat DDC provides an AI-driven, natural language interface that allows construction stakeholders to directly interrogate project databases without requiring any SQL knowledge.<br/><br/>\n<strong>Core Components:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem; margin-bottom: 0.5rem;\">\n<li>Ask DB AI: A dynamic natural language-to-SQL pipeline powered by LangChain agents and schema-aware prompting techniques</li>\n<li>Ask Table AI: A Retrieval-Augmented Generation (RAG) system for querying user-uploaded project data in Excel or CSV formats</li>\n<li>Core processing handled by OpenAI's GPT-4, with Hugging Face models serving as fallbacks</li>\n<li>Specialized vector indexing for accurate construction domain data retrieval</li>\n<li>Integrated security layer to block any destructive or unauthorized SQL commands</li>\n</ul>\n<strong>Technical Strategy:</strong><br/>\n            Implements an advanced two-tier RAG pipeline: initially fetching pertinent schemas and data samples, followed by formulating contextually accurate SQL queries. The architecture gracefully manages multi-table joins, complex aggregations, and temporal queries essential for construction management.\n          ",
    "tags": [
      "Azure OpenAI",
      "SQL Server",
      "Oracle\n                DB",
      "Python/C#"
    ]
  },
  "ifc-data-processing-library-suite-proprietary-bim-nuget-ecosystem": {
    "id": "ifc-data-processing-library-suite-proprietary-bim-nuget-ecosystem",
    "title": "IFC Data Processing Library Suite",
    "category": "BIM / AEC",
    "catClass": "cat-bim",
    "impactVal": "Lib",
    "impactLbl": "NuGet Suite",
    "role": "Library Creator & Maintainer",
    "fullHtml": "\n            A comprehensive collection of cross-platform libraries engineered for processing Industry Foundation Classes (IFC) data, deployed as open-source packages across NuGet, npm, and other registries.<br/><br/>\n<strong>Available Packages:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem; margin-bottom: 0.5rem;\">\n<li>.NET Toolset: Delivered via NuGet, this library utilizes XBIM for high-performance IFC parsing alongside a fluid LINQ querying interface</li>\n<li>Python Tools: Built upon IfcOpenShell, offering deep integration with pandas DataFrames for robust data manipulation</li>\n<li>n8n Integration: A custom node enabling no-code automation for repetitive IFC processing workflows</li>\n</ul>\n<strong>Key Capabilities:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem;\">\n<li>Efficient extraction and modification of BIM element properties</li>\n<li>Navigation of complex spatial hierarchies (Site \u2192 Building \u2192 Floor \u2192 Space \u2192 Element)</li>\n<li>Construction of relationship graphs mapping containment, aggregation, and association</li>\n<li>Automated routines for precise quantity takeoffs</li>\n<li>Export pipelines transforming IFC data into structured JSON and CSV formats</li>\n</ul>\n",
    "tags": [
      ".NET Standard",
      "NuGet",
      "IFC",
      "C#"
    ]
  },
  "power-bi-aps-viewer-data-connectors-enterprise-bi-architecture": {
    "id": "power-bi-aps-viewer-data-connectors-enterprise-bi-architecture",
    "title": "Power BI APS Viewer & Data Connectors",
    "category": "Cloud",
    "catClass": "cat-cloud",
    "impactVal": "RT",
    "impactLbl": "Real-Time BI",
    "role": "BI Developer & Data Engineer",
    "fullHtml": "\n            Engineered a suite of custom Power BI visual components that seamlessly connect 3D BIM models with high-level business intelligence dashboards, delivering powerful cross-filtering between spatial objects and tabular datasets.<br/><br/>\n<strong>APS Viewer Component:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem; margin-bottom: 0.5rem;\">\n<li>Integrates the Autodesk Platform Services (APS) Viewer natively within Power BI reports</li>\n<li>Supports bi-directional filtering: highlighting chart metrics isolates 3D objects, and vice versa</li>\n<li>Features a dynamic property panel that displays granular details of selected BIM elements</li>\n<li>Synchronizes camera angles and viewpoints seamlessly across different report pages</li>\n</ul>\n<strong>Custom Data Connector:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem;\">\n<li>A specialized Power BI connector designed to extract BIM metadata directly via the APS API</li>\n<li>Automatically maps out property schemas based on the underlying 3D model structure</li>\n<li>Features full support for scheduled, incremental data refreshes</li>\n</ul>\n",
    "tags": [
      "Power BI",
      "Microsoft Fabric",
      "DAX",
      "Oracle DB",
      "MSSQL"
    ]
  },
  "llama-3-business-conversational-agent": {
    "id": "llama-3-business-conversational-agent",
    "title": "Llama 3 Business Conversational Agent",
    "category": "AI",
    "catClass": "cat-ai",
    "impactVal": "RAG",
    "impactLbl": "Context-Aware",
    "role": "Lead AI Developer",
    "fullHtml": "Context-aware chatbot for business collaboration using conversational memory and RAG via\n            Embedchain. The Llama 3 model retains context across long sessions and provides accurate, domain-specific\n            responses.",
    "tags": [
      "Python",
      "Llama 3",
      "Embedchain",
      "Vector DB"
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
    "fullHtml": "\n            A comprehensive academic showcase applying advanced project management methodologies to a major national wastewater treatment facility handling massive capacities in Egypt.<br/><br/>\n<strong>Project Scope:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem; margin-bottom: 0.5rem;\">\n<li>Evaluated real-world joint venture planning and execution</li>\n<li>Structured around an enormous 64.8 m\u00b3/second processing capacity</li>\n<li>Documented full lifecycle management strategies under rigorous government oversight</li>\n</ul>\n<strong>Implementation Strategy:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem;\">\n<li>Comprehensive BIM Modeling across disciplines using Autodesk Revit</li>\n<li>Applied 4D scheduling principles via Navisworks, Synchro Pro, and Fuzor</li>\n<li>Structured deep project timelines using MS Project, WBS Schedule Pro, and Primavera P6</li>\n<li>Managed reporting and analytics utilizing dynamic Power BI dashboards</li>\n<li>Outlined robust field operations logic</li>\n</ul>\n",
    "tags": [
      "BIM",
      "Navisworks",
      "Primavera P6",
      "Power BI",
      "MS Project"
    ]
  },
  "angular-clips-video-processing-platform": {
    "id": "angular-clips-video-processing-platform",
    "title": "Angular-Clips (Video Streaming & Management Platform)",
    "category": "Full Stack",
    "catClass": "cat-fs",
    "impactVal": "WASM",
    "impactLbl": "Client Processing",
    "role": "Full-Stack Architect",
    "fullHtml": "\n            Developed a full-stack, server-side rendered (SSR) video upload and streaming application using Angular 17 and Firebase. The platform allows users to securely authenticate, drop-and-upload video clips, autogenerate thumbnails, and manage their content via a dedicated dashboard.<br/><br/>\n<strong>Key Responsibilities & Technical Highlights:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem;\">\n<li><strong>Client-Side Video Processing (WASM):</strong> Integrated FFmpeg via WebAssembly (WASM) to process video files locally within the browser. Efficiently extracted video frames to generate dynamic thumbnails locally before uploading, significantly minimizing backend processing costs and latency.</li>\n<li><strong>Advanced Asynchronous Operations (RxJS):</strong> Leveraged powerful RxJS operators (forkJoin, combineLatest, switchMap) to coordinate complex parallel workflows, such as simultaneously uploading videos and locally generated thumbnails to Firebase Storage while calculating and displaying a unified real-time progress bar.</li>\n<li><strong>Authentication & Route Protection:</strong> Integrated Firebase Authentication for secure user registration and login. Implemented custom Angular Route Guards (AuthGuard) to secure user-specific dashboards (/manage, /upload) and automatically handle unauthorized application redirects.</li>\n<li><strong>Custom Form Validation:</strong> Built highly interactive Angular Reactive Forms featuring custom Synchronous and Asynchronous Validators. Engineered async validators to query Firebase in real-time to check for email exact-matches/availability without submitting the form, alongside cross-field validators for password confirmation.</li>\n<li><strong>Scalable Component Architecture:</strong> Designed a highly reusable UI library (including Modals and Tab systems) using advanced Angular concepts like Content Projection (@ContentChildren, ng-content) and standalone components for clean, modular code.</li>\n<li><strong>Optimized Data Fetching & Pagination:</strong> Implemented infinite-scroll-friendly database queries using Firestore. Fetched video clips in limited batches using document snapshot cursors (startAt) resulting in reduced database reads and optimized application load times.</li>\n<li><strong>Routing & State Management:</strong> Utilized ActivatedRoute to deeply link dashboard states (like video sorting preferences) to query parameters (e.g., ?sort=), maintaining sync between the UI state and the URL. Built custom Event Blocker directives to intuitively handle Drag-and-Drop native browser events.</li>\n</ul>\n",
    "tags": [
      "Angular 17",
      "RxJS",
      "Firebase",
      "WASM",
      "FFmpeg",
      "Tailwind CSS"
    ]
  },
  "wasm-image-effects-engine": {
    "id": "wasm-image-effects-engine",
    "title": "Image Processing Web Application (Rust & WebAssembly)",
    "category": "WASM",
    "catClass": "cat-dt",
    "impactVal": "Rust",
    "impactLbl": "Native Speed",
    "role": "Rust & WebAssembly Engineer",
    "fullHtml": "\n            Developed a high-performance web-based image editor leveraging WebAssembly (WASM) to perform computationally intensive image processing directly in the browser.<br/><br/>\n<strong>Key Contributions & Technologies:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem;\">\n<li><strong>Core Technologies:</strong> Rust, WebAssembly (WASM), JavaScript, HTML5, Webpack.</li>\n<li><strong>Image Processing Engine:</strong> Engineered the core image manipulation logic using Rust and the image crate. The module efficiently decodes Base64 image data, applies complex transformations (Grayscale conversion and Gaussian Blur for lens depth effects), and re-encodes the output to be rendered on the frontend.</li>\n<li><strong>WASM Integration:</strong> Utilized wasm-bindgen to facilitate seamless memory and data bridging between JavaScript and Rust, ensuring zero-latency image handoffs.</li>\n<li><strong>Frontend & Build Tooling:</strong> Configured a modern build pipeline using Webpack and @wasm-tool/wasm-pack-plugin to automatically compile Rust into a WebAssembly module and bundle the JavaScript frontend.</li>\n<li><strong>Browser API Interop:</strong> Implemented web-sys to securely invoke JavaScript browser APIs (like console.log) directly from Rust for advanced debugging and logging.</li>\n</ul>\n<strong>Impact:</strong><br/>\n            Demonstrated the capability to push the boundaries of browser performance by offloading heavy pixel manipulations from JavaScript to a compiled near-native speed WebAssembly environment, resulting in faster processing times and a smooth user experience.\n          ",
    "tags": [
      "Rust",
      "WebAssembly",
      "Webpack",
      "JavaScript"
    ]
  },
  "mango-microservices-commerce-system": {
    "id": "mango-microservices-commerce-system",
    "title": "E-Commerce Microservices Application",
    "category": "Cloud",
    "catClass": "cat-cloud",
    "impactVal": "\u03bcSVC",
    "impactLbl": "Microservices",
    "role": "Full Stack .NET Developer (Personal Project)",
    "fullHtml": "\n            Designed and developed a scalable, full-stack e-commerce platform built from the ground up using a Microservices Architecture. The system breaks down core business domains—Authentication, Product Catalog, Shopping Cart, Coupon/Discount Engine, Order Processing, and Email Notifications—into independent, loosely coupled RESTful APIs.<br/><br/>\n<strong>Key Achievements & Features:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem;\">\n<li><strong>Microservices Implementation:</strong> Architected and deployed isolated microservices (AuthAPI, ProductAPI, ShoppingCartAPI, CouponAPI, OrderAPI, EmailsAPI) using .NET 8 and ASP.NET Core Web API.</li>\n<li><strong>Asynchronous Messaging:</strong> Integrated Azure Service Bus to establish a pub/sub event-driven architecture, decoupling checkout from background tasks.</li>\n<li><strong>Security & Authentication:</strong> Implemented centralized Identity management using ASP.NET Core Identity and JWT.</li>\n<li><strong>Payment Integration:</strong> Integrated Stripe Payment Gateway to handle secure checkout sessions and asynchronous validation.</li>\n<li><strong>Data Access:</strong> Leveraged Entity Framework Core (Code-First) across multiple SQL Server databases.</li>\n<li><strong>Frontend Web App:</strong> Developed the consumer-facing frontend using ASP.NET Core MVC, Razor Views, jQuery, and Toastr.</li>\n</ul>\n",
    "tags": [
      ".NET 8",
      "Microservices",
      "Azure Service Bus",
      "EF Core",
      "Stripe"
    ]
  },
  "revit-automation-plastering-extension": {
    "id": "revit-automation-plastering-extension",
    "title": "Revit Automation: Plastering Extension",
    "category": "BIM / AEC",
    "catClass": "cat-bim",
    "impactVal": "Auto",
    "impactLbl": "Revit Plugin",
    "role": "BIM Tool Developer",
    "fullHtml": "Custom Revit extension automating wall finish modeling. Algorithmically detects room\n            boundaries and generates plastering layers, eliminating repetitive manual work for BIM modelers.",
    "tags": [
      "C#",
      "Autodesk Revit API"
    ]
  },
  "wpf-mvvm-architecture-suite": {
    "id": "wpf-mvvm-architecture-suite",
    "title": "WPF & MVVM Architecture Suite",
    "category": "Desktop",
    "catClass": "cat-dt",
    "impactVal": "UI/UX",
    "impactLbl": "Cross-Platform",
    "role": "Architectural Lead & Software Engineer",
    "fullHtml": "\n            A comprehensive collection of WPF projects utilizing the full capabilities of the WPF and MVVM design architecture. This suite includes multiple desktop applications with clean architecture, various plugins for Autodesk applications featuring intuitive WPF user interfaces for enhanced user experience, and the strategic implementation of MVVM principles across modern web applications.<br/><br/>\n<strong>Key Features:</strong>\n<ul style=\"padding-left: 1.2rem; margin-top: 0.3rem;\">\n<li><strong>Multiple WPF Desktop Projects:</strong> Developed several standalone desktop applications leveraging the full power of XAML, data binding, and asynchronous programming.</li>\n<li><strong>MVVM Architecture:</strong> Implemented consistent MVVM design patterns across desktop and web-based environments to ensure clean separation of concerns.</li>\n<li><strong>Autodesk Plugin Suite:</strong> Engineered multiple plugins for Autodesk software (Revit, Navisworks) utilizing WPF for highly-responsive and user-friendly command interfaces.</li>\n<li><strong>Multimodal UI/UX:</strong> Focused on creating seamless user experiences through advanced WPF styling, control templating, and custom behaviors.</li>\n</ul>\n",
    "tags": [
      "C#",
      "WPF",
      "MVVM",
      "Autodesk API",
      "XAML"
    ]
  },
  "hotel-listing-restful-api": {
    "id": "hotel-listing-restful-api",
    "title": "Hotel Listing RESTful API",
    "category": "Full Stack",
    "catClass": "cat-fs",
    "impactVal": "API",
    "impactLbl": "Redis Cached",
    "role": "Lead API Developer",
    "fullHtml": "Robust RESTful API for hotel management with advanced performance optimizations using\n            response caching to minimize load times. Entity Framework Core with MySQL for efficient data handling.",
    "tags": [
      ".NET Core",
      "EF Core",
      "MySQL",
      "Redis"
    ]
  }
};