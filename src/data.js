export const profile = {
  name: 'Sri Nivaspanneer L M',
  title: 'AI Engineer',
  tagline:
    'Building AI-driven platforms that solve real-world problems — from enterprise multi-agent systems to award-winning hardware.',
  location: 'Tirunelveli, Tamil Nadu',
  phone: '+91 77087 80835',
  email: 'Srinivaspanneerlm@gmail.com',
  github: 'https://github.com/srinivaspanneerlm-cyber',
  githubAegis: 'https://github.com/srinivaspanneerlm-cyber/Aegis-Insurance-Agent',
  linkedin: 'https://www.linkedin.com/in/sri-nivaspanneer-l-m-3100812a5/',
  resume: '/Sri_resume.pdf',
}

export const about = [
  'Final-year Computer Science Engineering student with experience building AI-driven platforms, developing award-winning hardware projects, and leading peer-learning initiatives.',
  'Currently building Aegis AI, an enterprise multi-agent insurance intelligence platform integrating LLMs, knowledge graphs, and graph neural networks.',
  'Conducted a tech bootcamp training 72 students in Cloud & DevOps and Python, and deployed infrastructure solutions across 30+ laboratory systems.',
  'Strong interest in AI system architecture, multi-agent systems, enterprise software engineering, and building production-ready products that solve real-world problems.',
]

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Node.js', 'Express.js', 'Next.js', 'REST API'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'SQL'],
  },
  {
    category: 'DevOps & Infra',
    items: ['Docker', 'Git', 'GitHub', 'Bash', 'Linux (Parrot OS)', 'Devstack', 'VSCode'],
  },
  {
    category: 'AI & Machine Learning',
    items: [
      'Artificial Intelligence',
      'Machine Learning',
      'Large Language Models (LLMs)',
      'Prompt Engineering',
      'Multi-Agent AI Systems',
      'Knowledge Graphs',
      'Explainable AI (XAI)',
    ],
  },
]

export const languages = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Professional' },
]

export const projects = [
  {
    name: 'Aegis AI',
    subtitle: 'Enterprise Multi-Agent Insurance Intelligence Platform (Ongoing)',
    link: 'https://github.com/srinivaspanneerlm-cyber/Aegis-Insurance-Agent',
    tech: [
      'FastAPI',
      'Next.js',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'LLMs',
      'Knowledge Graphs',
      'GNNs',
      'Docker',
      'NGINX',
    ],
    points: [
      'Built a production-track multi-agent AI platform for the insurance domain — a five-agent system (Alex · Motor, Sarah · Health, Luna · Property, Ethan · Travel, plus an Executive orchestrator) with enforced memory isolation and user-consented cross-agent transfers.',
      'Architected an AI engine in FastAPI, a strict-TypeScript Express API with a domain service layer, and a decomposed Next.js frontend delivering a multilingual, voice-first experience over secure real-time streaming.',
      'Implemented AI pipelines for Need Analysis (Temporal Fusion Transformer), Premium Prediction (CatBoost), Risk Categorization (HDBSCAN + GNNs), personalized policy recommendations with LLM re-ranking, and fraud detection (Isolation Forest + Graph Transformer).',
      'Reached 94% enterprise readiness: 557-test automated suite gated by CI, Docker/Compose/NGINX edge, Prometheus metrics, structured logging with secret redaction, verified backup/restore, and health-gated deploy/rollback pipelines.',
    ],
  },
  {
    name: 'Cobot Factory Layout Simulator',
    subtitle: '4th Place — TN-IMPACT 2026 (Cash Prize) · TANCAM',
    tech: ['Python', 'PyQt6', 'NumPy', 'SciPy', 'Matplotlib', 'ReportLab'],
    points: [
      'Designed and delivered a 2D factory layout simulation tool for SMEs to evaluate collaborative robot deployments before hardware purchase.',
      'Built a three-zone proximity safety system with speed reduction and emergency-stop zones.',
      'Implemented ROI estimation, task execution analysis, out-of-reach alerting, and PDF report generation.',
      'Built and submitted within 2 weeks under national competition constraints — awarded 4th Place and a shared cash prize.',
    ],
  },
  {
    name: 'PeltierPulse Air Conditioner',
    subtitle: '2nd Place — Inter-College Hackathon 2024',
    link: 'https://github.com/srinivaspanneerlm-cyber/PeltierPulse-Air-Conditioner',
    tech: ['Raspberry Pi Pico', 'Peltier Module', 'DC Motor', 'Python', 'Embedded C'],
    points: [
      'Built a thermoelectric air conditioning system using Peltier modules, Raspberry Pi Pico, and DC motor with smart automation, real-time sensing, and adaptive speed control.',
      'Achieved 60% energy savings, 75% cost reduction, and 65% environmental improvement through efficient thermal management, buck/boost converters, and overcurrent protection.',
      'Awarded 2nd Place at Inter-College Hackathon 2024 for the innovative thermoelectric cooling approach.',
    ],
  },
]

export const experience = [
  {
    role: 'AI Engineering Intern',
    company: 'CubeAI Solutions · Namakkal · 1 Month',
    points: [
      'Learned RAG (Retrieval-Augmented Generation) pipelines for enterprise document processing.',
      'Implemented OCR solutions using computer vision and deep learning techniques.',
      'Worked on fine-tuning LLMs for domain-specific tasks and applications.',
    ],
  },
  {
    role: 'Founder & Lead Instructor',
    company: 'Skill Forge — Peer-Learning Bootcamp · Thamirabharani Engineering College',
    points: [
      'Founded and led a student-driven tech bootcamp guiding 72 members through structured sessions in Cloud & DevOps and Python programming.',
      'Taught Cloud & DevOps fundamentals including AWS/Azure/GCP networking, VPC/subnets, load balancing, VPNs, Terraform, Docker, and Infrastructure as Code.',
      'Delivered hands-on Python curriculum covering core programming, automation scripting, and real-world problem-solving for infrastructure and cloud automation.',
      'Designed curriculum, created learning materials, produced YouTube tutorials, and built a certificate verification platform for the student community.',
    ],
  },
]

export const education = [
  {
    school: 'Thamirabharani Engineering College',
    degree: 'B.E. Computer Science & Engineering',
    detail: 'CGPA: 8.4 / 10 · Expected Graduation: May 2027',
    extras: [
      'Relevant Coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, DBMS, Embedded Systems, IoT',
      'Active member of coding club and participated in multiple hackathons and technical symposiums.',
      'Peer mentor for junior students in programming fundamentals.',
    ],
  },
  {
    school: 'Schaffter Higher Secondary School',
    degree: 'Tamil Nadu State Board',
    detail: '2017 — 2023',
  },
]

export const achievements = [
  '2nd Place — PeltierPulse Air Conditioner, Inter-College Hackathon 2024',
  'NPTEL — Cloud Computing (Elite + Silver)',
  'Founder — Skill Forge Tech Bootcamp',
]

export const certifications = [
  {
    name: 'NPTEL — Cloud Computing',
    issuer: 'Elite + Silver',
  },
  {
    name: 'TN-IMPACT 2026',
    issuer: '4th Place · Cobot Factory Layout Simulator · TANCAM',
  },
  {
    name: 'Inter-College Hackathon 2024',
    issuer: '2nd Place · PeltierPulse Air Conditioner',
  },
]
