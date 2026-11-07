import './App.css';
import portswiggerProgress from './assets/portswigger-progress.png';

const ragBadgeUrl = 'https://www.credly.com/badges/e40e7446-b4d1-4c4e-9ed4-aece0450f8f7';

// Published investigation repositories.
const ransomwareRepositoryUrl = 'https://github.com/ahmadabbass11/linux-ransomware-analysis';
const botnetRepositoryUrl = 'https://github.com/ahmadabbass11/linux-botnet-forensics';

// Set to your CV PDF path (for example, /Ahmad-Abbas-CV.pdf) when available.
const cvUrl = null;

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Ahmad Abbas</h1>
        <h2>M2 Cybersecurity Student | Application Security, Reverse Engineering &amp; Applied AI</h2>
        <p>
          I’m a master’s student at the University of Lille, specializing in
          cybersecurity, cloud, and edge computing. I investigate application
          vulnerabilities, develop exploits in controlled labs, and analyze Linux
          binaries and process memory, building on a background in backend development.
          I also build applied AI projects involving machine learning, RAG, and LLM applications.
        </p>
        <p><strong>Seeking a final-year internship in application security, offensive security, reverse engineering, or applied AI.</strong></p>
        <nav className="buttons" aria-label="Portfolio navigation">
          <a href="#security-projects">Security Projects</a>
          <a href="#security-practice">AppSec Labs</a>
          <a href="#challenge-profiles">Challenge Profiles</a>
          <a href="#ai-practice">AI Practice</a>
          <a href="#projects">Other Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certificates</a>
          <a href="https://github.com/ahmadabbass11" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ahmad-abbass" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {cvUrl && <a href={cvUrl} target="_blank" rel="noopener noreferrer">Download CV</a>}
          <a href="mailto:ahmadabs183@gmail.com">Contact Me</a>
        </nav>
      </header>
      <section id="security-projects">
        <h2>Featured Security Projects</h2>
        <p>Academic investigations and controlled exploitation labs, with code and technical reports.</p>
        <div className="project">
          <h3>Binary Exploitation &amp; Reverse Engineering</h3>
          <p><strong>Tools:</strong> C, Python, pwntools, GDB, pwndbg, Ghidra, x86 / x86-64</p>
          <p>Controlled challenges exploring memory corruption, exploit development, and binary protections.</p>
          <ul>
            <li>Solved 32-bit and 64-bit challenges involving stack buffer overflows, format strings, ret2win, and return-oriented programming.</li>
            <li>Analyzed NX, ASLR, PIE, stack canaries, and RELRO, and practiced mitigation bypasses in controlled labs.</li>
            <li>Used information leaks, GOT/PLT analysis, and ret2libc techniques to understand memory-corruption vulnerabilities.</li>
            <li>Inspected assembly, stack layouts, and process memory mappings to debug and explain exploit behavior.</li>
          </ul>


           <a
            href="https://github.com/ahmadabbass11/binary-exploitation-labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            View sample reports on GitHub →
          </a>
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
      </section>
      <section id="security-practice">
        <h2>Application Security &amp; DevSecOps Labs</h2>
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
              Solved PortSwigger Web Security Academy and OWASP WebGoat challenges, practicing vulnerability identification and exploitation in controlled lab environments.
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
          <h3>PortSwigger Web Security Academy — Ongoing Practice</h3>

          <p>
            Practicing web application vulnerability identification and exploitation
            using Burp Suite in controlled lab environments.
          </p>

          <p>
            <strong>24 labs completed:</strong> 5 Apprentice, 18 Practitioner,
            and 1 Expert.
          </p>

          <ul>
            <li>
              Practicing SQL injection, including blind techniques and
              response-based inference.
            </li>
            <li>
              Investigating authentication weaknesses through intercepted
              and modified HTTP requests.
            </li>
            <li>
              Recording successful approaches, troubleshooting steps,
              and lessons learned.
            </li>
          </ul>

          <a
            href={portswiggerProgress}
            target="_blank"
            rel="noopener noreferrer"
          >
            View progress screenshot →
          </a>

          <p>
            <small>Last updated: November 7, 2026</small>
          </p>
        </div>

      </section>
      <section id="challenge-profiles">
        <h2>Challenge Profiles</h2>
        <p>My public profiles provide a view of my challenge practice and progress.</p>
        <div className="buttons">
          <a href="https://www.root-me.org/Ahmad-Abbas?lang=fr" target="_blank" rel="noopener noreferrer">Root-Me</a>
          <a href="https://pwn.college/hacker/ahmadabs183" target="_blank" rel="noopener noreferrer">pwn.college</a>
          <a href="https://learn.cylabacademy.org/users/ahmadabs183" target="_blank" rel="noopener noreferrer">CyLab Academy</a>
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
      <section id="projects">
        <h2>Selected Backend &amp; Systems Projects</h2>
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
        <details>
          <summary>More systems, software &amp; AI projects</summary>
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
          <h3>Linux Systems Programming</h3>
          <p><strong>Tools:</strong> Linux, C</p>
          <ul>
            <li>Implemented a Linux character-device exercise with a ring buffer, sysfs configuration, and spinlock synchronization.</li>
          </ul>
        </div>
        </details>
      </section>
      <section id="skills">
        <h2>Skills</h2>
<h3>Security</h3>
        <div className="skills">
          <span>Application Security</span>
          <span>Binary Exploitation</span>
          <span>Reverse Engineering</span>
          <span>Memory Forensics</span>
          <span>SAST</span>
          <span>DAST</span>
          <span>OWASP Top 10</span>
          <span>CVSS Scoring</span>
          <span>ISO 27001 Fundamentals</span>
          <span>Burp Suite</span>
          <span>OWASP ZAP</span>
          <span>CodeQL</span>
          <span>Semgrep</span>
          <span>SpotBugs</span>
          <span>Bandit</span>
          <span>Ghidra</span>
          <span>GDB</span>
          <span>pwndbg</span>
          <span>pwntools</span>
          <span>Volatility 3</span>
          <span>ROP</span>
        </div>

        <h3>Languages &amp; Systems</h3>
        <div className="skills">
          <span>Python</span>
          <span>C</span>
          <span>C++</span>
          <span>Rust</span>
          <span>Java</span>
          <span>PHP</span>
          <span>JavaScript</span>
          <span>x86 / x86-64 Assembly</span>
          <span>Linux</span>
          <span>Git</span>
          <span>Docker</span>
        </div>

        <h3>Backend</h3>
        <div className="skills">
          <span>Laravel</span>
          <span>Lumen</span>
          <span>FastAPI</span>
          <span>Django</span>
          <span>REST APIs</span>
          <span>JWT Authentication</span>
          <span>Role-Based Access Control</span>
          <span>MySQL</span>
          <span>PostgreSQL</span>
          <span>MongoDB</span>
          <span>Redis</span>
          <span>WebSockets</span>
          <span>Pydantic</span>
          <span>CI/CD</span>
          <span>GitHub Actions</span>
        </div>

        <h3>AI</h3>
        <div className="skills">
          <span>Machine Learning</span>
          <span>Federated Learning</span>
          <span>Generative AI</span>
          <span>RAG</span>
          <span>LangChain</span>
          <span>LangGraph</span>
          <span>LlamaIndex</span>
          <span>Embeddings</span>
          <span>ChromaDB</span>
          <span>Semantic Search</span>
          <span>Prompt Engineering</span>
          <span>LLM Tool Calling</span>
          <span>Structured LLM Outputs</span>
          <span>Gradio</span>
        </div>
      </section>
      <section id="certifications">
        <h2>Certificates &amp; Badges</h2>

        <div className="project">
          <h3>Application Security Testing and Debugging for Developers</h3>
          <p>Starweaver · Coursera · Completed November 2026</p>
          <a
            href="https://coursera.org/verify/4IZ25X53L33Q"
            target="_blank"
            rel="noreferrer"
          >
            Verify certificate
          </a>
        </div>

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
      <section id="contact">
        <h2>Contact</h2>
        <p>For internship opportunities or questions about my work:</p>
        <div className="buttons">
          <a href="mailto:ahmadabs183@gmail.com">ahmadabs183@gmail.com</a>
          <a href="https://github.com/ahmadabbass11" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ahmad-abbass" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}

export default App;
