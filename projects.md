# Projects Portfolio


## 1. Saipem Data-Driven Construction (DDC) Platform 
- **Context:** Saipem (Active)
- **Tech Stack / Tags:** ASP.NET Core 10, React TypeScript, APS, Oracle DB, CosmosDB, Azure AKS, Docker, Power BI

The Data-Driven Construction (DDC) Platform serves as Saipem's primary enterprise intelligence system. It brings together BIM data, project metrics, and advanced analytics in a centralized ecosystem designed to manage multiple simultaneous megaprojects.

**Key Contributions:**
- Engineered full-stack solutions utilizing an ASP.NET Core 10 backend and a React TypeScript frontend
- Developed a web-based IFC Viewer for exploring 3D models directly in the browser
- Leveraged Autodesk Platform Services (APS) for handling model derivatives and data extraction
- Structured Oracle databases to manage complex BIM data and project metadata
- Integrated Azure CosmosDB to support high-speed storage of BIM element properties
- Orchestrated deployment on Azure Kubernetes Service (AKS), ensuring multi-tenant isolation
- Created custom embedded Power BI dashboards featuring interactive d3.js visualizations

**Project Impact:**
The platform successfully processes millions of BIM components across diverse active projects, consistently delivering sub-second response times even for complex spatial data queries.

---

## 2. Chat DDC (Ask DB AI / Ask Table AI)
- **Context:** Saipem (Ongoing) 
- **Tech Stack / Tags:** Python, LangChain, RAG, OpenAI API, Hugging Face, SQL, LLM

Chat DDC provides an AI-driven, natural language interface that allows construction stakeholders to directly interrogate project databases without requiring any SQL knowledge.

**Core Components:**
- Ask DB AI: A dynamic natural language-to-SQL pipeline powered by LangChain agents and schema-aware prompting techniques
- Ask Table AI: A Retrieval-Augmented Generation (RAG) system for querying user-uploaded project data in Excel or CSV formats
- Core processing handled by OpenAI's GPT-4, with Hugging Face models serving as fallbacks
- Specialized vector indexing for accurate construction domain data retrieval
- Integrated security layer to block any destructive or unauthorized SQL commands

**Technical Strategy:**
Implements an advanced two-tier RAG pipeline: initially fetching pertinent schemas and data samples, followed by formulating contextually accurate SQL queries. The architecture gracefully manages multi-table joins, complex aggregations, and temporal queries essential for construction management.

---

## 3. IFC Manager Application
- **Context:** Saipem (Ongoing)
- **Tech Stack / Tags:** C#, IfcOpenShell, XBIM, .NET, WPF, IFC

The IFC Manager is a robust Windows desktop toolkit designed for BIM managers to seamlessly process, validate, and manipulate IFC models according to Saipem's strict project protocols.

**Core Features:**
- Automated batch processing of IFC files leveraging parallel computing
- A customizable validation engine to ensure compliance with specific BIM project standards
- Tools for the bulk editing and enrichment of element property sets
- Seamless conversion mechanisms between IFC versions (IFC2x3 and IFC4)
- Geometry optimization functions tailored for handling massive BIM models
- Direct integration with the Saipem DDC Platform's REST API

---

## 4. IFC Data Processing Library Suite
- **Context:** Saipem / Open Source (Released)
- **Tech Stack / Tags:** C#, Python, IfcOpenShell, XBIM, NuGet, npm, n8n

A comprehensive collection of cross-platform libraries engineered for processing Industry Foundation Classes (IFC) data, deployed as open-source packages across NuGet, npm, and other registries.

**Available Packages:**
- .NET Toolset: Delivered via NuGet, this library utilizes XBIM for high-performance IFC parsing alongside a fluid LINQ querying interface
- Python Tools: Built upon IfcOpenShell, offering deep integration with pandas DataFrames for robust data manipulation
- n8n Integration: A custom node enabling no-code automation for repetitive IFC processing workflows

**Key Capabilities:**
- Efficient extraction and modification of BIM element properties
- Navigation of complex spatial hierarchies (Site → Building → Floor → Space → Element)
- Construction of relationship graphs mapping containment, aggregation, and association
- Automated routines for precise quantity takeoffs
- Export pipelines transforming IFC data into structured JSON and CSV formats

---

## 5. AutoNavis & AutoSpool Automation Tools
- **Context:** Saipem (Active)
- **Tech Stack / Tags:** C#, Navisworks API, .NET, BIM Automation, WPF

Developed two highly specialized plugins for Autodesk Navisworks to streamline and automate complex BIM data workflows specifically within structural and piping disciplines at Saipem.

**AutoNavis Overview:**
- Automated extraction and reporting of clash detection results based on logic-driven filtering rules
- Batch generation of annotated viewpoints to accelerate the clash review process
- Seamless REST API integration connecting Navisworks with enterprise project management systems
- Dynamic administration of custom search sets and selection trees

**AutoSpool Overview:**
- Automated generation of spool sheets directly from Navisworks data
- Streamlined extraction of ISO drawings and associated material take-offs (MTO)
- Advanced tracking mechanisms for monitoring pipe spool statuses through fabrication

---

## 6. Power BI APS Viewer & Data Connectors
- **Context:** Saipem 
- **Tech Stack / Tags:** TypeScript, d3.js, Power BI SDK, APS API, REST API, Custom Visuals

Engineered a suite of custom Power BI visual components that seamlessly connect 3D BIM models with high-level business intelligence dashboards, delivering powerful cross-filtering between spatial objects and tabular datasets.

**APS Viewer Component:**
- Integrates the Autodesk Platform Services (APS) Viewer natively within Power BI reports
- Supports bi-directional filtering: highlighting chart metrics isolates 3D objects, and vice versa
- Features a dynamic property panel that displays granular details of selected BIM elements
- Synchronizes camera angles and viewpoints seamlessly across different report pages

**Custom Data Connector:**
- A specialized Power BI connector designed to extract BIM metadata directly via the APS API
- Automatically maps out property schemas based on the underlying 3D model structure
- Features full support for scheduled, incremental data refreshes

---
## 7. Construction Management Graduation Project
- **Context:** Personal & Freelance / Port Said University
- **Tech Stack / Tags:** BIM, Navisworks, Primavera P6, Power BI, Construction Management, MS Project

A comprehensive academic showcase applying advanced project management methodologies to a major national wastewater treatment facility handling massive capacities in Egypt.

**Project Scope:**
- Evaluated real-world joint venture planning and execution
- Structured around an enormous 64.8 m³/second processing capacity
- Documented full lifecycle management strategies under rigorous government oversight

**Implementation Strategy:**
- Comprehensive BIM Modeling across disciplines using Autodesk Revit
- Applied 4D scheduling principles via Navisworks, Synchro Pro, and Fuzor
- Structured deep project timelines using MS Project, WBS Schedule Pro, and Primavera P6
- Managed reporting and analytics utilizing dynamic Power BI dashboards
- Outlined robust field operations logic

---

## 8. DDC Tasks Manager
- **Context:** SAIPEM (Active)
- **Tech Stack / Tags:** React, TypeScript, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, Autodesk Platform Services (APS), Swagger UI

**Project Overview:**
Led the end-to-end architecture and development of an enterprise-grade task and workload management platform (DDC Tasks Manager). The application streamlines project coordination, team management, and agile workflows through advanced features like Kanban boards, calendar views, and centralized analytics, seamlessly integrating with Autodesk Platform Services (APS).

**Key Responsibilities & Achievements:**
- **Technical Leadership & Architecture:** Architected a scalable client-server architecture using a modern monolithic repository, driving the adoption of clean code practices, modular design, and robust API standards.
- **Frontend Development (React/TypeScript):** Directed the creation of a highly responsive, single-page application (SPA) using React, Vite, and Tailwind CSS. Implemented complex UI components including interactive Kanban boards, searchable multi-select dropdowns, unified modals, and custom markdown editors.
- **Backend Engineering (Node.js/Express):** Engineered a secure, high-performance RESTful API using Node.js, Express, and MongoDB (Mongoose). Implemented robust authentication, role-based access control (RBAC), and session management optimized for cross-origin requests.
- **Third-Party Integrations:** Successfully spearheaded the backend integration with Autodesk Platform Services (APS) for specialized service coordination and data syncing.
- **API Design & Documentation:** Designed the system's data models and routing, ensuring comprehensive API documentation using Swagger/OpenAPI for seamless team collaboration and future scalability.
- **Team & Quality Management:** Established development standards, enforced TypeScript types for type safety, and implemented error-boundary handling to ensure high application reliability and maintainability.

---

## 9. AutoSpool (Automated Piping Spool Generation Engine)
- **Context:** SAIPEM / Engineering
- **Tech Stack / Tags:** C#, .NET 8, WPF, Graph Theory, 3D Geometry

**Project Overview:**
Developed a high-performance, automated piping spool generation engine that parses Plant Component Files (PCF) to mathematically segment complex 3D piping networks into optimized, transportable spools for industrial construction.

**Key Responsibilities & Achievements:**
- **Graph-Based Topology:** Implemented a custom graph-based topology model utilizing spatial hashing to achieve O(1) adjacency lookups, allowing for highly efficient traversal and processing of connected piping systems.
- **3D Geometric Validation:** Engineered 3D geometric validation algorithms to calculate precise bounding boxes (accounting for pipe coordinates, insulation, and undimensioned items) and strictly enforce shipping/logistics constraints.
- **Fabrication Business Logic:** Integrated advanced, industry-standard fabrication rules (ASME B31.3, PFI ES-7) directly into the business logic to prioritize shop welding over field welding, automatically designate field fit welds (FFW), and optimize material usage.
- **Modular Architecture:** Built a modular, highly testable architecture using Dependency Injection (DI) to compose core services including PCF parsing, graph building, geometric math, and strict data validation.
- **Batch Processing & GUI:** Created both a robust Command-Line Interface (CLI) for batch processing and a Windows Presentation Foundation (WPF) GUI (AutoSpool.GUI) to visualize spool structures and streamline workflows.

---
+
## 10. WPF & MVVM Architecture Suite
+- **Context:** ATLAS / Desktop Development
+- **Tech Stack / Tags:** C#, WPF, MVVM, Autodesk API (Revit/Navisworks), XAML, Clean Architecture
+
+A comprehensive collection of WPF projects utilizing the full capabilities of the WPF and MVVM design architecture. This suite includes multiple desktop applications with clean architecture, various plugins for Autodesk applications featuring intuitive WPF user interfaces for enhanced user experience, and the strategic implementation of MVVM principles across modern web applications.
+
+**Key Features:**
+- **Multiple WPF Desktop Projects:** Developed several standalone desktop applications leveraging the full power of XAML, data binding, and asynchronous programming.
+- **MVVM Architecture:** Implemented consistent MVVM design patterns across desktop and web-based environments to ensure clean separation of concerns.
+- **Autodesk Plugin Suite:** Engineered multiple plugins for Autodesk software (Revit, Navisworks) utilizing WPF for highly-responsive and user-friendly command interfaces.
- **Multimodal UI/UX:** Focused on creating seamless user experiences through advanced WPF styling, control templating, and custom behaviors.

---

## 11. E-Commerce Microservices Application
- **Context:** Personal & Freelance / Personal Project
- **Tech Stack / Tags:** C#, .NET 8, ASP.NET Core Web API, Microservices, Azure Service Bus, MS SQL Server, EF Core, Stripe API

**Project Overview:**
Designed and developed a scalable, full-stack e-commerce platform built from the ground up using a Microservices Architecture. The system breaks down core business domains—Authentication, Product Catalog, Shopping Cart, Coupon/Discount Engine, Order Processing, and Email Notifications—into independent, loosely coupled RESTful APIs. This project demonstrates strong proficiency in backend system design, secure inter-service communication, asynchronous event-driven messaging, and third-party API integration.

**Key Achievements & Features:**
- **Microservices Implementation:** Architected and deployed isolated microservices (AuthAPI, ProductAPI, ShoppingCartAPI, CouponAPI, OrderAPI, EmailsAPI) using .NET 8 and ASP.NET Core Web API, each maintaining its own independent database to ensure data autonomy.
- **Asynchronous Messaging:** Integrated Azure Service Bus to establish a pub/sub event-driven architecture, successfully decoupling the checkout process from background tasks like sending order confirmation emails.
- **Security & Authentication:** Implemented centralized Identity management using ASP.NET Core Identity and JWT (JSON Web Tokens). Secured cross-service API calls by utilizing DelegatingHandler and IHttpClientFactory to seamlessly forward bearer tokens.
- **Payment Integration:** Integrated the Stripe Payment Gateway (Stripe.net) to handle secure checkout sessions, securely process user payments, and validate payment status asynchronously.
- **Data Access & ORM:** Leveraged Entity Framework Core (EF Core) with the Code-First mechanism to manage schemas, database migrations, and queries across multiple SQL Server databases.
- **Clean Code & Tooling:** Extensively used AutoMapper to map domain Models to DTOs, separating database entities from API payloads. Implemented Swagger/OpenAPI to serve automatically generated interactive documentation for all microservices.

---

## 12. Web-Based IFC 3D Viewer
- **Context:** SAIPEM
- **Tech Stack / Tags:** JavaScript (ES6+), HTML5, CSS3, Vite, Three.js, @thatopen/components, @thatopen/fragments, web-ifc (WebAssembly)

**Project Overview:**
Designed and developed a high-performance web application tailored for the visualization and manipulation of BIM (Building Information Modeling) models using the Industry Foundation Classes (IFC) standard.

**Key Responsibilities & Achievements:**
- **3D Visualization & Architecture:** Engineered an interactive 3D rendering environment using Three.js and That Open Engine, allowing users to upload, navigate (orbit, pan, zoom), and inspect complex BIM models seamlessly in the browser.
- **BIM Property Management & Change Tracking:** Built a custom data-handling system that parses complex IFC elements into an interactive properties panel and hierarchy tree.
- **In-Memory File Modification:** Authored an advanced property-editing engine that tracks all metadata revisions in-memory. Implemented an export pipeline leveraging web-ifc to pack and download the modified IFC files with all aggregated property changes applied.
- **DOM & UI Development:** Built a responsive, modern glass-morphism user interface using Vanilla JS, HTML, and CSS (incorporating Saipem branding). Created custom interactive components like drag-and-drop upload areas, loading overlays with progress bars, and floating toolbars.
- **Build configuration:** Configured a modern Vite-based build system utilizing ES Modules, customized to handle web-worker and WebAssembly dependencies required by the Web-IFC parsers.
- **Element Isolation & Raycasting:** Developed selection logic using Three.js raycasting to identify 3D meshes clicked by users, mapping fragmented geometries back to their IFC local IDs to retrieve and manipulate relational metadata.

---

## 13. Image Processing Web Application (Rust & WebAssembly)
- **Context:** Personal & Freelance
- **Tech Stack / Tags:** Rust, WebAssembly (WASM), JavaScript, HTML5, Webpack

**Project Overview:**
Developed a high-performance web-based image editor leveraging WebAssembly (WASM) to perform computationally intensive image processing directly in the browser. Deployed on Vercel.

**Key Contributions & Technologies:**
- **Core Technologies:** Rust, WebAssembly (WASM), JavaScript, HTML5, Webpack.
- **Image Processing Engine:** Engineered the core image manipulation logic using Rust and the image crate. The module efficiently decodes Base64 image data, applies complex transformations (Grayscale conversion and Gaussian Blur for lens depth effects), and re-encodes the output to be rendered on the frontend.
- **WASM Integration:** Utilized wasm-bindgen to facilitate seamless memory and data bridging between JavaScript and Rust, ensuring zero-latency image handoffs.
- **Frontend & Build Tooling:** Configured a modern build pipeline using Webpack and @wasm-tool/wasm-pack-plugin to automatically compile Rust into a WebAssembly module and bundle the JavaScript frontend.
- **Browser API Interop:** Implemented web-sys to securely invoke JavaScript browser APIs (like console.log) directly from Rust for advanced debugging and logging.

**Impact:**
Demonstrated the capability to push the boundaries of browser performance by offloading heavy pixel manipulations from JavaScript to a compiled near-native speed WebAssembly environment, resulting in faster processing times and a smooth user experience.

---

## 14. Angular-Clips (Video Streaming & Management Platform)
- **Context:** Personal & Freelance
- **Tech Stack / Tags:** Angular 17, Firebase, WebAssembly (WASM), FFmpeg, RxJS, Tailwind CSS

**Project Overview:**
Developed a full-stack, server-side rendered (SSR) video upload and streaming application using Angular 17 and Firebase. The platform allows users to securely authenticate, drop-and-upload video clips, autogenerate thumbnails, and manage their content via a dedicated dashboard.

**Key Responsibilities & Technical Highlights:**
- **Client-Side Video Processing (WASM):** Integrated FFmpeg via WebAssembly (WASM) to process video files locally within the browser. Efficiently extracted video frames to generate dynamic thumbnails locally before uploading, significantly minimizing backend processing costs and latency.
- **Advanced Asynchronous Operations (RxJS):** Leveraged powerful RxJS operators (forkJoin, combineLatest, switchMap) to coordinate complex parallel workflows, such as simultaneously uploading videos and locally generated thumbnails to Firebase Storage while calculating and displaying a unified real-time progress bar.
- **Authentication & Route Protection:** Integrated Firebase Authentication for secure user registration and login. Implemented custom Angular Route Guards (AuthGuard) to secure user-specific dashboards (/manage, /upload) and automatically handle unauthorized application redirects.
- **Custom Form Validation:** Built highly interactive Angular Reactive Forms featuring custom Synchronous and Asynchronous Validators. Engineered async validators to query Firebase in real-time to check for email exact-matches/availability without submitting the form, alongside cross-field validators for password confirmation.
- **Scalable Component Architecture:** Designed a highly reusable UI library (including Modals and Tab systems) using advanced Angular concepts like Content Projection (@ContentChildren, ng-content) and standalone components for clean, modular code.
- **Optimized Data Fetching & Pagination:** Implemented infinite-scroll-friendly database queries using Firestore. Fetched video clips in limited batches using document snapshot cursors (startAt) resulting in reduced database reads and optimized application load times.
- **Routing & State Management:** Utilized ActivatedRoute to deeply link dashboard states (like video sorting preferences) to query parameters (e.g., ?sort=), maintaining sync between the UI state and the URL. Built custom Event Blocker directives to intuitively handle Drag-and-Drop native browser events.

---

## 15. N8N automation

- **Context:** Saipem
- **Tech Stack / Tags:** n8n, TypeScript, Navisworks, PCF / IFC, Kubernetes

Saipem’s self-hosted n8n platform connects engineering file shares, BIM tools, and backend processing services. Custom TypeScript nodes make file intake, model processing, and delivery reusable across workflows.

**End-to-end workflow from PCF to NWD**

1. **Pick up the source PCF.** An SMB trigger detects new piping files in a shared folder, and a download node retrieves them for processing.
2. **Generate fabrication spools.** The custom AutoSpool n8n node submits each PCF to the AutoSpool service, tracks the job, and retrieves the processed PCF containing the spool results.
3. **Build and publish the model.** The PCF-to-IFC node converts the processed PCF into an IFC4 model. A Navisworks publishing step loads that model and saves the final processed NWD file.
4. **Deliver the NWD.** The workflow can save the finished file to a network share or publish it to Autodesk Construction Cloud.

n8n tracks background jobs by ID and can route failures for review with diagnostic logs. The Navisworks integration also supports model property updates, model merging, and data exports in related workflows.
