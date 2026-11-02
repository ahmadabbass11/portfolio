import './App.css';

const ragBadgeUrl = 'https://www.credly.com/badges/e40e7446-b4d1-4c4e-9ed4-aece0450f8f7';

// Add the published repository URLs here to display project links.
const ransomwareRepositoryUrl = 'https://github.com/ahmadabbass11/linux-ransomware-analysis';
const botnetRepositoryUrl = 'https://github.com/ahmadabbass11/linux-botnet-forensics';

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Ahmad Abbas</h1>
        <h2>M2 Computer Science Student | Backend, AI & Cybersecurity</h2>

        <div className="buttons">
          <a href="#projects">View Projects</a>
          <a href="#ai-practice">AI Practice</a>
          <a href="#security-practice">Security Labs</a>
          <a href="#certifications">Certificates</a>
          <a href="https://github.com/ahmadabbass11" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ahmad-abbass" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I’m a master’s student at the University of Lille, specializing in cybersecurity, cloud, and edge computing. My background combines a backend development internship with projects in software engineering, applied AI, and security. I’m particularly interested in application security, binary exploitation, and reverse engineering—understanding how systems work, identifying their weaknesses, and investigating how those weaknesses can be exploited and addressed.
        </p>
        <p>
          My hands-on security practice includes analyzing Linux binaries with Ghidra, GDB, and pwndbg, developing exploits for memory-corruption challenges, and investigating process memory with Volatility. My academic projects include recovering an AES key from a ransomware sample through predictable pseudorandom generation and analyzing a Linux botnet’s runtime configuration and credential table. I also practice web application security testing with Burp Suite and OWASP ZAP, investigating authentication flows, access controls, and injection vulnerabilities in controlled lab environments.
        </p>
        <p>         
          Alongside security, I build backend systems involving APIs, databases, authentication, and distributed components. My AI work includes machine learning, federated network anomaly detection, and practical exercises with LangChain, LangGraph, and LlamaIndex for document retrieval, tool calling, and structured LLM outputs. I enjoy connecting these areas to build useful applications, understand their attack surfaces, and improve their reliability and security.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills">
          <span>Java</span>
          <span>Python</span>
          <span>PHP</span>
          <span>Rust</span>
          <span>C</span>
          <span>C++</span>
          <span>JavaScript</span>
          <span>Laravel</span>
          <span>FastAPI</span>
          <span>Django</span>
          <span>Spring Boot</span>
          <span>REST APIs</span>
          <span>Machine Learning</span>
          <span>Federated Learning</span>
          <span>MySQL</span>
          <span>PostgreSQL</span>
          <span>MongoDB</span>
          <span>Redis</span>
          <span>Docker</span>
          <span>Linux</span>
          <span>Git</span>
          <span>CI/CD</span>
          <span>Ghidra</span>
          <span>pwndbg</span>
          <span>Volatility</span>
          <span>Generative AI</span>
          <span>RAG</span>
          <span>LangChain</span>
          <span>LangGraph</span>
          <span>LlamaIndex</span>
          <span>Embeddings</span>
          <span>Chroma</span>
          <span>Prompt Engineering</span>
          <span>LLM Tool Calling</span>
          <span>Pydantic</span>
          <span>Gradio</span>
          <span>Binary Exploitation</span>
          <span>Reverse Engineering</span>
          <span>Memory Forensics</span>
          <span>pwntools</span>
          <span>GDB</span>
          <span>x86 / x86-64</span>
          <span>ROP</span>
        </div>
      </section>

      <section id="ai-practice">
        <h2>Generative AI &amp; RAG Practice</h2>
        <p>Hands-on learning through focused prototypes and practical exercises.</p>
        <div className="project">
          <h3>LLM Integration &amp; Tool Calling</h3>
          <p><strong>Tech:</strong> Python, FastAPI, Pydantic, LLM APIs, LangChain, LangGraph</p>
          <ul>
            <li>Built a FastAPI job-analysis prototype with structured outputs for skill matching and candidate fit.</li>
            <li>Integrated a project-lookup tool to provide relevant candidate project information during analysis.</li>
            <li>Practiced prompt templates, output parsing, streaming, and input validation.</li>
            <li>Explored LangGraph state, message history, conditional routing, and tool execution.</li>
          </ul>
        </div>
        <div className="project">
          <h3>Document Retrieval &amp; RAG</h3>
          <p><strong>Tech:</strong> LangChain, LlamaIndex, Chroma, embeddings, Gradio</p>
          <ul>
            <li>Practiced loading PDFs, splitting text into overlapping chunks, generating embeddings, and indexing content.</li>
            <li>Used vector similarity search to retrieve relevant passages for LLM question answering.</li>
            <li>Explored parent-document retrieval: searching smaller chunks and returning larger passages as context.</li>
            <li>Worked with LlamaIndex documents, nodes, vector indexes, and query engines.</li>
            <li>Experimented with Gradio interfaces for document question answering.</li>
          </ul>
        </div>


        <div className="project">
          <h3>Food Recommendation System — ChromaDB &amp; RAG</h3>
          <p>
            A food recommendation project exploring semantic search, structured
            filtering, and conversational explanations based on food descriptions,
            nutritional information, and user preferences.
          </p>
          <p>
            <strong>Focus:</strong> ChromaDB, embeddings, NLP, semantic search,
            metadata filtering, RAG, LLMs, interactive CLI
          </p>
          <ul>
            <li>
              Explored vector similarity search to retrieve foods matching
              natural-language preferences.
            </li>
            <li>
              Combined semantic retrieval with metadata filters for criteria
              such as cuisine, calories, and nutritional values.
            </li>
            <li>
              Organized food descriptions, ingredients, cooking methods, and
              taste profiles into searchable content and structured metadata.
            </li>
            <li>
              Explored a RAG chatbot that uses retrieved food records to
              explain recommendations through an interactive CLI.
            </li>
          </ul>
        </div>
      </section>

      <section id="security-practice">
        <h2>Security Labs &amp; Systems Practice</h2>

        <div className="project">
          <h3>Application Security &amp; DevSecOps</h3>
          <p>
            <strong>Tools:</strong> CodeQL, GitHub Actions, OWASP ZAP, Burp Suite
          </p>
          <p>
            <strong>Focus:</strong> SAST, DAST, authentication, access control,
            CI/CD security
          </p>
          <ul>
            <li>
              Integrated CodeQL static application security testing (SAST) into
              GitHub Actions workflows to identify potential vulnerabilities
              in source code.
            </li>
            <li>
              Practiced dynamic application security testing (DAST) with OWASP ZAP and Burp Suite,
              combining application exploration, passive analysis, and targeted
              active scans in controlled labs.
            </li>
            <li>
              Intercepted and modified HTTP requests to investigate authentication
              flows, parameter handling, SQL injection, and potential access
              control weaknesses.
            </li>
            <li>
              Investigated JWT security, including token manipulation and weak
              signing secrets, in lab environments.
            </li>
            <li>
              Combined automated findings with manual validation to assess
              application behavior, distinguish false positives, and document
              security issues.
            </li>
          </ul>
        </div>
        
        <div className="project">
          <h3>Binary Exploitation &amp; Reverse Engineering</h3>
          <p><strong>Tools:</strong> C, Python, pwntools, GDB, pwndbg, Ghidra, x86 / x86-64</p>
          <p><strong>Practice platforms:</strong> Root-Me, pwn.college, Hack The Box (HTB)</p>
          <ul>
            <li>Solved 32-bit and 64-bit challenges involving stack buffer overflows, format strings, ret2win, and return-oriented programming.</li>
            <li>Analyzed NX, ASLR, PIE, stack canaries, and RELRO, and practiced mitigation bypasses in controlled labs.</li>
            <li>Used information leaks, GOT/PLT analysis, and ret2libc techniques to understand memory-corruption vulnerabilities.</li>
            <li>Inspected assembly, stack layouts, and process memory mappings to debug and explain exploit behavior.</li>
          </ul>
        </div>
        <div className="project">
          <h3>Linux Ransomware Analysis</h3>
          <p>
            An academic reverse engineering investigation into a Linux ransomware
            sample and the recovery of an encrypted challenge file.
          </p>
          <p><strong>Tools:</strong> Ghidra, C, GCC, OpenSSL, Linux</p>
          <ul>
            <li>Reconstructed the encryption workflow and file format, identifying AES-128-CBC encryption and RSA-2048 key wrapping.</li>
            <li>Identified a timestamp-seeded custom PRNG used to generate per-file AES keys and IVs.</li>
            <li>Implemented a C recovery tool to search candidate seeds and generator positions, recover the AES key, and decrypt the challenge file.</li>
            <li>Documented the investigation, failed initial assumptions, recovery method, and validation results.</li>
          </ul>
          {ransomwareRepositoryUrl && (
            <a href={ransomwareRepositoryUrl} target="_blank" rel="noreferrer">
              View Repository &amp; Technical Report
            </a>
          )}
        </div>
        <div className="project">
          <h3>Linux Botnet Memory Forensics</h3>
          <p>
            An academic investigation combining Linux memory forensics and reverse
            engineering to examine suspected botnet activity and recover configuration data.
          </p>
          <p><strong>Tools:</strong> Volatility 3, Ghidra, Python, Linux</p>
          <ul>
            <li>Investigated process names, parent-child relationships, and extracted executable mappings from a Linux memory image.</li>
            <li>Analyzed socket-related code and decoded an XOR-obfuscated hostname and destination port.</li>
            <li>Compared parent and child process memory to locate an initialized runtime credential table.</li>
            <li>Used Python to extract table entries and decode a selected credential pair, documenting evidence and remaining uncertainties.</li>
          </ul>
          {botnetRepositoryUrl && (
            <a href={botnetRepositoryUrl} target="_blank" rel="noreferrer">
              View Repository &amp; Technical Report
            </a>
          )}
        </div>
        <div className="project">
          <h3>Linux Systems Programming</h3>
          <p><strong>Tools:</strong> Volatility, Linux, C</p>
          <ul>
            <li>Implemented a Linux character-device exercise with a ring buffer, sysfs configuration, and spinlock synchronization.</li>
          </ul>
        </div>
      </section>

      <section id="certifications">
        <h2>Certificates &amp; Badges</h2>
        <div className="project">
          <h3>Develop Generative AI Applications: Get Started</h3>
          <p>IBM · Coursera · Completed October 19, 2026</p>
          <a href="https://coursera.org/verify/6K18O8I1KDCD" target="_blank" rel="noreferrer">Verify certificate</a>
        </div>
        <div className="project">
          <h3>Build RAG Applications: Get Started</h3>
          <p>IBM · Coursera · Completed October 21, 2026</p>
          <a href="https://coursera.org/verify/8S09G8C9K8VA" target="_blank" rel="noreferrer">Verify certificate</a>
        </div>
        <div className="project">
          <h3>Vector Databases for RAG: An Introduction</h3>
          <p>IBM · Coursera · Completed October 23, 2026</p>
          <a href="https://coursera.org/verify/MXOLJCAH7IXA" target="_blank" rel="noreferrer">Verify certificate</a>
        </div>
        <div className="project">
          <h3>RAG Digital Badge</h3>
          <p>Credly</p>
          {ragBadgeUrl && (
            <a href={ragBadgeUrl} target="_blank" rel="noreferrer">View badge on Credly</a>
          )}
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="project">
          <h3>Team Collaboration Tool</h3>
          <p>
            A full-stack collaboration platform designed to help teams communicate,
            share files, manage tasks, and collaborate in real time.
          </p>
          <p>
            <strong>Tech:</strong> Laravel, PHP, MySQL, Redis, WebSockets, JWT, Docker
          </p>
          <ul>
            <li>
              Designed RESTful APIs for messaging, authentication, file sharing, and
              task management.
            </li>
            <li>
              Implemented Redis-powered real-time messaging using WebSockets to enable
              instant team communication.
            </li>
            <li>
              Developed secure JWT authentication with two-level role-based access
              control.
            </li>
            <li>
              Containerized the application using Docker to simplify development and
              deployment.
            </li>
          </ul>
        </div>

        <div className="project">
          <h3>Multi-Threaded FTP Server & Client</h3>
          <p>
            A Java-based FTP system that includes both a server and a client,
            supporting concurrent users and secure file isolation.
          </p>
          <p>
            <strong>Tech:</strong> Java, Networking, ExecutorService, FTP, File Systems
          </p>
          <ul>
            <li>
              Designed and implemented a functional FTP server following RFC 959
              specifications.
            </li>
            <li>
              Used ExecutorService thread pools to handle multiple client connections
              concurrently.
            </li>
            <li>
              Built a Virtual File System with per-user isolation, similar to a
              chroot-style sandbox.
            </li>
            <li>
              Developed a Java FTP client supporting bidirectional file transfers
              between client and server.
            </li>
          </ul>
        </div>

        <div className="project">
          <h3>JavaScript to x86-64 Compiler</h3>
          <p>
            A compiler project that translates JavaScript-like code into x86-64
            assembly while handling scopes, values, stack management, and closures.
          </p>
          <p>
            <strong>Tech:</strong> Python, C, x86-64 Assembly, Compiler Design
          </p>
          <ul>
            <li>
              Implemented AST transformations, scope analysis, and lexical environment
              handling.
            </li>
            <li>
              Developed NaN-boxing value representation to encode numbers, booleans,
              strings, objects, and null in 64 bits.
            </li>
            <li>
              Generated optimized assembly with proper stack management, calling
              conventions, and label handling.
            </li>
            <li>
              Implemented closure support using lexical environment chaining.
            </li>
          </ul>
        </div>

        <div className="project">
          <h3>Sound Processor</h3>
          <p>
            A high-performance real-time audio processing application built in Rust,
            focused on memory safety, low latency, and modular digital signal
            processing.
          </p>
          <p>
            <strong>Tech:</strong> Rust, DSP, FFT, CPAL, Symphonia, Multithreading
          </p>
          <ul>
            <li>
              Built a real-time audio processor using Rust ownership and zero-cost
              abstractions for safe and efficient performance.
            </li>
            <li>
              Implemented a modular DSP pipeline supporting FFT-based frequency
              analysis, audio filtering, dynamic effects, and WAV processing.
            </li>
            <li>
              Designed a multithreaded architecture separating audio I/O, signal
              processing, and user interaction.
            </li>
            <li>
              Added audio encoding and decoding using Symphonia and CPAL with strong
              error handling for different audio formats.
            </li>
            <li>
              Created unit and integration tests to validate DSP algorithms and
              reliability under concurrent workloads.
            </li>
          </ul>
        </div>

        <div className="project">
          <h3>Blockchain Platform</h3>
          <p>
            A Java blockchain platform implementing core blockchain concepts such as
            Proof-of-Work, wallets, UTXO transactions, mining rewards, and persistent
            ledger storage.
          </p>
          <p>
            <strong>Tech:</strong> Java, MongoDB, REST APIs, Proof-of-Work, UTXO
          </p>
          <ul>
            <li>
              Developed a blockchain platform in Java with Proof-of-Work consensus,
              UTXO-based transactions, and wallet management.
            </li>
            <li>
              Designed RESTful APIs for wallet creation, balance queries, transaction
              submission, and blockchain inspection.
            </li>
            <li>
              Integrated MongoDB to persist blocks, transactions, and UTXOs.
            </li>
            <li>
              Implemented transaction validation, digital signatures, mining rewards,
              and block verification to ensure ledger integrity.
            </li>
            <li>
              Applied object-oriented design principles to create a modular and
              extensible blockchain architecture.
            </li>
          </ul>
        </div>

        <div className="project">
          <h3>End-to-End Machine Learning Framework</h3>
          <p>
            A machine learning framework built to implement, compare, and visualize
            multiple algorithms from scratch using real-world datasets.
          </p>
          <p>
            <strong>Tech:</strong> Python, NumPy, Streamlit, Machine Learning, Data Analysis
          </p>
          <ul>
            <li>
              Implemented K-Nearest Neighbors, Naive Bayes, K-Means, and Logistic
              Regression from scratch using Python and NumPy.
            </li>
            <li>
              Tested models on multiple datasets to compare accuracy, scalability, and
              performance.
            </li>
            <li>
              Built an interactive Streamlit frontend for dataset exploration, model
              comparison, and real-time predictions.
            </li>
            <li>
              Designed the project with a modular structure to make algorithms easier
              to test, extend, and reuse.
            </li>
          </ul>
        </div>

        <div className="project">
          <h3>Rhapsody Radio Station Database</h3>
          <p>
            A database system designed for a radio station to manage programs, hosts,
            schedules, songs, listeners, and station operations.
          </p>
          <p>
            <strong>Tech:</strong> SQL, MySQL, Database Design, ER Diagrams, Relational Models
          </p>
          <ul>
            <li>
              Designed a complete relational database schema using ER diagrams and
              normalized relational models.
            </li>
            <li>
              Created SQL tables, relationships, constraints, and queries to manage
              radio station data.
            </li>
            <li>
              Implemented database queries for retrieving schedules, program details,
              host information, and song records.
            </li>
            <li>
              Applied database design principles to improve data consistency,
              organization, and query reliability.
            </li>
          </ul>
        </div>

        <div className="project">
          <h3>Football Club Management System</h3>
          <p>
            A web-based management system built to help a football club manage players,
            teams, staff, matches, and internal operations.
          </p>
          <p>
            <strong>Tech:</strong> Django, Python, SQL, HTML, CSS, Web Development
          </p>
          <ul>
            <li>
              Developed a Django-based web application to centralize football club
              management operations.
            </li>
            <li>
              Designed backend models and database relationships for players, teams,
              matches, and administrative records.
            </li>
            <li>
              Built user-facing pages and backend logic to support data creation,
              updates, and retrieval.
            </li>
            <li>
              Improved organization and communication by replacing manual tracking with
              a structured web-based system.
            </li>
          </ul>
        </div>


        <div className="project">
          <h3>AI-Powered Resume Analyzer</h3>
          <p>
            An AI application that analyzes resumes, classifies candidate profiles, and
            compares resumes with job descriptions using semantic similarity.
          </p>
          <p>
            <strong>Tech:</strong> Python, scikit-learn, TF-IDF, Sentence-BERT,
            BART, spaCy, Streamlit
          </p>
          <ul>
            <li>Built a resume analysis application using a dataset of 962 resumes.</li>
            <li>Implemented resume classification with TF-IDF features and an SVM classifier.</li>
            <li>Used Sentence-BERT embeddings to compare resumes with job descriptions.</li>
            <li>Integrated BART summarization and spaCy extraction of named entities and skills.</li>
            <li>Created a Streamlit interface for resume uploads, candidate matching, and results.</li>
          </ul>
        </div>

        <div className="project">
          <h3>Context-Aware Federated Anomaly Detection</h3>
          <p>
            A federated network anomaly-detection project exploring whether contextual
            traffic features improve detection while keeping raw client data decentralized.
          </p>
          <p>
            <strong>Methods:</strong> FedML, federated autoencoders, network traffic
            feature engineering, validation-based evaluation
          </p>
          <ul>
            <li>Adapted a FedML federated autoencoder pipeline from BaIoT/N-BaIoT to ToN_IoT.</li>
            <li>Engineered contextual features for protocols, services, ports, DNS activity, and client behavior.</li>
            <li>Compared traffic-only and context-aware models using precision, recall, F1, detection rate, and false-positive rate.</li>
            <li>Implemented validation-only selection and a separate final-test evaluation to prevent test-set leakage.</li>
          </ul>
        </div>

        <div className="project">
          <h3>ArcVault - Intelligent Message Classification and Routing</h3>
          <p>
            An AI workflow that turns unstructured messages into structured requests with
            a category, priority, urgency level, and summary.
          </p>
          <p>
            <strong>Focus:</strong> Information extraction, prioritization, department routing, escalation rules
          </p>
          <ul>
            <li>Extracted requirements and identifiers from incoming messages.</li>
            <li>Routed requests to the appropriate department.</li>
            <li>Triggered escalation rules based on request priority.</li>
            <li>Produced structured records for request tracking and automated processing.</li>
          </ul>
        </div>

        <div className="project">
          <h3>ContractFlow - Contract Management Platform</h3>
          <p>
            A SaaS platform for organizations to centralize contracts, manage members and
            roles, and securely track contract information.
          </p>
          <p>
            <strong>Tech:</strong> FastAPI, SQLAlchemy, Pydantic, PostgreSQL,
            Alembic, JWT, Docker Compose
          </p>
          <ul>
            <li>Designed a modular REST API organized into API, service, schema, and model layers.</li>
            <li>Designed a multi-organization PostgreSQL data model and managed migrations with Alembic.</li>
            <li>Implemented JWT authentication and role-based access control.</li>
            <li>Containerized the API and database with Docker Compose.</li>
          </ul>
        </div>


      </section>



      <section id="experience">
        <h2>Experience</h2>

        <div className="project">
          <h3>PHP Backend Developer Intern — Foo.mobi</h3>
          <p>
            <strong>Location:</strong> Beirut, Lebanon
          </p>
          <p>
            <strong>Duration:</strong> April 2024 – September 2024
          </p>
          <p>
            Worked as a backend developer intern on production backend systems,
            focusing on API development, performance optimization, deployment
            workflows, and backend stability.
          </p>

          <p>
            <strong>Tech:</strong> Laravel, Lumen, PHP, MySQL, Redis, Docker, CI/CD,
            REST APIs
          </p>

          <ul>
            <li>
              Designed and developed RESTful APIs using Laravel and PHP to support
              application features and frontend integrations.
            </li>
            <li>
              Optimized backend performance using Laravel Octane and Redis, reaching
              over 1800 requests per second in performance testing.
            </li>
            <li>
              Built Docker-based development environments to make local setup more
              consistent and easier for developers.
            </li>
            <li>
              Debugged production issues, improved backend stability, and helped
              maintain reliable application behavior.
            </li>
            <li>
              Collaborated with frontend developers to integrate APIs, test features,
              and resolve implementation issues.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: ahmadabs183@gmail.com</p>
        <p>GitHub: https://github.com/ahmadabbass11</p>
        <p>LinkedIn: www.linkedin.com/in/ahmad-abbass</p>
      </section>
    </div>
  );
}

export default App;