import './App.css';
function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Ahmad Abbas</h1>
        <h2>M2 Computer Science Student | Backend, AI & Cybersecurity</h2>
        <p>
          M2 student at the University of Lille specializing in cybersecurity
          from cloud to edge. I build backend systems and applied AI projects,
          with experience in APIs, databases, distributed applications, and
          machine learning.
        </p>

        <div className="buttons">
          <a href="#projects">View Projects</a>
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
          I’m a master’s student at the University of Lille, focused on
          cybersecurity, cloud, and edge computing. My experience includes a
          backend development internship and projects in backend engineering,
          machine learning, and federated anomaly detection. I enjoy building
          reliable systems and investigating how to make them more secure.
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
              Implemented CI/CD pipelines that reduced deployment time by 75% and
              improved the release workflow.
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