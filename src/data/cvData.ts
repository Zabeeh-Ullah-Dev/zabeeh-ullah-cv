export interface SocialLinkItem {
  id: 'portfolio' | 'github' | 'linkedin' | 'facebook';
  label: string;
  ariaLabel: string;
  href: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface StackTag {
  name: string;
  level?: 'Advanced' | 'Developing' | 'Beginner';
}

export interface SkillCategory {
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export type ProjectCategory = 'react-node' | 'web';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  featured?: boolean;
  kicker?: string;
  description: string;
  highlights?: string[];
  tags: string[];
  liveDemoUrl?: string;
  githubUrl: string;
}

export interface SemesterGpa {
  semester: string;
  sgpa: string;
  cgpa: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  summary?: string;
  marks?: string;
  semesters?: SemesterGpa[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface NavSectionItem {
  id: string;
  label: string;
}

export const PROFILE = {
  name: 'Zabeeh Ullah',
  headline: 'BS Computer Science Student · Aspiring MERN / Full-Stack Developer',
  location: 'Peshawar, KP, Pakistan',
  fullLocation: 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
  phoneDisplay: '+92 307 050 9981',
  phoneHref: 'tel:+923070509981',
  email: 'zabeehullah2005@gmail.com',
  emailHref: 'mailto:zabeehullah2005@gmail.com',
  photoUrl: '/assets/profile.jpg',
  atsResumePdfUrl: '/assets/Zabeeh-Ullah-ATS-Resume.pdf',
  githubProfileUrl: 'https://github.com/Zabeeh-Ullah-Dev',
  linkedinProfileUrl: 'https://www.linkedin.com/in/zabeeh-ullah-1b6094382/',
  portfolioUrl: 'https://zabeeh-ullah.netlify.app/',
  summary:
    'BS Computer Science student (5th semester) at City University of Science and Information Technology (CUSIT), Peshawar, with a CGPA of 3.72 / 4.00 and a Diploma in Information Technology (753 / 1000). Aspiring MERN Stack and Full-Stack Developer with a foundation in HTML, CSS, JavaScript, PHP, MySQL, programming fundamentals, and object-oriented design. Building practical web development projects and developing skills in React.js, Node.js, Express.js, and MongoDB. Seeking a paid remote software development internship to contribute to real-world applications, strengthen engineering practices, and learn within a collaborative development team.',
  interests:
    'Keen interest in exploring emerging technologies, solving algorithmic logic problems, playing sports (especially cricket) for teamwork and focus, and maintaining a personal commitment to continuous daily learning.',
};

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 'portfolio',
    label: 'Portfolio',
    ariaLabel: 'Personal Portfolio Website (opens in new tab)',
    href: 'https://zabeeh-ullah.netlify.app/',
  },
  {
    id: 'github',
    label: 'GitHub',
    ariaLabel: 'GitHub Profile (opens in new tab)',
    href: 'https://github.com/Zabeeh-Ullah-Dev',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    ariaLabel: 'LinkedIn Profile (opens in new tab)',
    href: 'https://www.linkedin.com/in/zabeeh-ullah-1b6094382/',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    ariaLabel: 'Facebook Profile (opens in new tab)',
    href: 'https://www.facebook.com/share/1KK7cr75io/',
  },
];

export const LANGUAGES: LanguageItem[] = [
  { name: 'Pashto', level: 'Native' },
  { name: 'Urdu', level: 'Full Professional Proficiency' },
  { name: 'English', level: 'Conversational' },
];

export const PROGRAMMING_STACK: StackTag[] = [
  { name: 'HTML5', level: 'Advanced' },
  { name: 'CSS3', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'C++', level: 'Advanced' },
  { name: 'PHP', level: 'Advanced' },
  { name: 'MySQL', level: 'Advanced' },
  { name: 'React.js', level: 'Developing' },
  { name: 'Node.js', level: 'Developing' },
  { name: 'Express.js', level: 'Developing' },
  { name: 'MongoDB', level: 'Developing' },
  { name: 'Python', level: 'Beginner' },
];

export const TOOLS_WORKFLOW: string[] = [
  'Git',
  'GitHub',
  'VS Code',
  'Tailwind CSS',
  'REST APIs',
  'Web Debugging',
  'Responsive Design',
];

export const CORE_SKILLS: string[] = [
  'Problem-Solving',
  'Teamwork & Communication',
  'Critical Thinking',
  'OOP Concepts',
  'Data Structures',
  'Continuous Learning',
];

export const NAV_SECTIONS: NavSectionItem[] = [
  { id: 'summary', label: 'Summary' },
  { id: 'skills', label: 'Technical Skills' },
  { id: 'services', label: 'Services Offered' },
  { id: 'projects', label: 'Featured Projects' },
  { id: 'education', label: 'Education & Record' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Get in Touch' },
];

export const TECHNICAL_SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    description:
      'HTML5, CSS3, JavaScript, Tailwind CSS, responsive web design, React.js (developing)',
  },
  {
    title: 'MERN Stack',
    description:
      'MongoDB, Express.js, React.js, Node.js (currently developing practical skills)',
  },
  {
    title: 'Backend & Databases',
    description: 'PHP, MySQL, database fundamentals, REST API concepts',
  },
  {
    title: 'Programming & CS Fundamentals',
    description:
      'C++, Python (beginner), object-oriented programming, data structures fundamentals, problem-solving',
  },
  {
    title: 'Tools & Workflow',
    description: 'Git, GitHub, Vite, VS Code, web application debugging',
  },
  {
    title: 'Professional Skills',
    description:
      'Teamwork, communication, critical thinking, continuous learning',
  },
];

export const SERVICES_OFFERED: ServiceItem[] = [
  {
    title: 'Front-End Development',
    description:
      'Crafting advanced, accessible, and high-performance user interfaces using semantic HTML, Tailwind CSS, React, and modern JavaScript.',
  },
  {
    title: 'Back-End Development',
    description:
      'Building robust server-side processing using PHP, Node.js fundamentals, and structured relational MySQL databases.',
  },
  {
    title: 'Full-Stack Web Development',
    description:
      'Connecting front-end user layouts with back-end database operations for complete end-to-end web applications.',
  },
  {
    title: 'Responsive Website Development',
    description:
      'Designing flexible layouts that adapt smoothly across desktop monitors, laptops, tablets, and smartphones.',
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'ctxscan',
    title: 'ctxscan — LLM Context Budget CLI',
    category: 'react-node',
    featured: true,
    kicker: 'Flagship · Node.js CLI & AI Developer Tooling',
    description:
      'A Node.js CLI and context-engineering utility that measures exact token counts across a repository, ranks source files by dependency importance, and packs a paste-ready LLM context bundle under a target token budget.',
    highlights: [
      'Analyzes import dependency graphs to prioritize core modules over lockfiles and fixtures.',
      'Generates paste-ready context bundles with exact kept/dropped token reports and browser demo support.',
    ],
    tags: ['Node.js', 'JavaScript', 'CLI', 'LLM Tools'],
    liveDemoUrl: 'https://trymuseai.im/apps/50e858621ea5f469/',
    githubUrl: 'https://github.com/Zabeeh-Ullah-Dev/ctxscan',
  },
  {
    id: 'fixnear',
    title: 'FixNear — Local Services Finder',
    category: 'react-node',
    featured: true,
    kicker: 'Flagship · React 19 Web Application',
    description:
      'A responsive React 19 and Vite local services discovery application connecting households with electricians, plumbers, mechanics, and technicians through multi-criteria search and booking flows.',
    highlights: [
      'Engineered combined trade, neighborhood, and max-price filters with sorting by rating and visit price.',
      'Built an accessible booking request dialog with client-side validation and localStorage persistence.',
    ],
    tags: ['React 19', 'Vite', 'JavaScript', 'CSS3'],
    githubUrl: 'https://github.com/Zabeeh-Ullah-Dev/FixNear',
  },
  {
    id: 'chrono-stopwatch',
    title: 'Chrono — Precision Stopwatch & Lap Analytics',
    category: 'react-node',
    featured: true,
    kicker: 'Flagship · React, Tailwind CSS & Analytics',
    description:
      'A keyboard-first React stopwatch featuring drift-free millisecond timing, lap split charts, fastest/slowest split highlighting, dark/light themes, local persistence, and one-click CSV export.',
    highlights: [
      'Derived high-precision timing from performance.now() timestamps so background tabs never drift.',
      'Implemented split visualization, keyboard shortcuts, localStorage recovery, and CSV lap export.',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    liveDemoUrl: 'https://zabeeh-ullah-dev.github.io/Chrono-Stopwatch/',
    githubUrl: 'https://github.com/Zabeeh-Ullah-Dev/Chrono-Stopwatch',
  },
  {
    id: 'academic-portfolio',
    title: 'AI & Knowledge Graph Research Portfolio',
    category: 'react-node',
    featured: true,
    kicker: 'Flagship · React 19, TypeScript & Tailwind v4',
    description:
      'A full-featured academic and research portfolio engineered for an AI PhD researcher with a searchable 32-paper publication archive, interactive research pillars, and responsive architecture.',
    highlights: [
      'Built multi-facet publication filtering by title, venue, and research topic across 32 academic works.',
      'Structured modular TypeScript-checked React 19 components styled with Tailwind CSS v4.',
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/Zabeeh-Ullah-Dev/Acadamic-Portfolio',
  },
  {
    id: 'pakistan-gk',
    title: 'Pakistan GK Challenge',
    category: 'web',
    description:
      "An interactive Pakistan General Knowledge quiz featuring questions about Pakistan's history, geography, culture, personalities, and more.",
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemoUrl: 'https://zabeeh-ullah-dev.github.io/Pakistan-GK-Challenge/',
    githubUrl: 'https://github.com/Zabeeh-Ullah-Dev/Pakistan-GK-Challenge',
  },
  {
    id: 'safar-e-pakistan',
    title: 'Safar-e-Pakistan — Travel Website',
    category: 'web',
    description:
      'A travel website showcasing tourist destinations and travel experiences across Pakistan with responsive layouts.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemoUrl:
      'https://zabeeh-ullah-dev.github.io/Safar-e-Pakistan-Travel-website/',
    githubUrl:
      'https://github.com/Zabeeh-Ullah-Dev/Safar-e-Pakistan-Travel-website',
  },
  {
    id: 'charsadda-chappal',
    title: 'Charsadda Chappal E-Commerce Website',
    category: 'web',
    description:
      'A responsive e-commerce storefront focused on traditional Charsadda Chappal with product listings and shopping cart flow.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemoUrl:
      'https://zabeeh-ullah-dev.github.io/Charsadda-Chappal-E-Commerce-Website/',
    githubUrl:
      'https://github.com/Zabeeh-Ullah-Dev/Charsadda-Chappal-E-Commerce-Website',
  },
  {
    id: 'simple-shopping-cart',
    title: 'Simple Shopping Cart',
    category: 'web',
    description:
      'A shopping cart web app demonstrating product cards, quantity controls, and real-time subtotal calculation.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemoUrl: 'https://zabeeh-ullah-dev.github.io/Simple-Shopping-Cart/',
    githubUrl: 'https://github.com/Zabeeh-Ullah-Dev/Simple-Shopping-Cart',
  },
  {
    id: 'electricity-bill',
    title: 'Electricity Bill Calculator',
    category: 'web',
    description:
      'A responsive calculator estimating electricity bills across progressive unit consumption slabs.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemoUrl:
      'https://zabeeh-ullah-dev.github.io/Electricity-Bill-Calculator/',
    githubUrl:
      'https://github.com/Zabeeh-Ullah-Dev/Electricity-Bill-Calculator',
  },
  {
    id: 'grade-calculator',
    title: 'Grade Calculator',
    category: 'web',
    description:
      'A web-based academic calculator computing student grades, percentages, and results from entered marks.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemoUrl:
      'https://zabeeh-ullah-dev.github.io/Grade-Calculator-Html-Css-JavaScript/',
    githubUrl:
      'https://github.com/Zabeeh-Ullah-Dev/Grade-Calculator-Html-Css-JavaScript',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe Game',
    category: 'web',
    description:
      'An interactive browser-based Tic-Tac-Toe game featuring Player vs Player and Player vs Computer AI modes with score tracking.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemoUrl: 'https://zabeeh-ullah-dev.github.io/Tic-Tac-Toe-Game/',
    githubUrl: 'https://github.com/Zabeeh-Ullah-Dev/Tic-Tac-Toe-Game',
  },
  {
    id: 'number-guessing',
    title: 'Number Guessing Game',
    category: 'web',
    description:
      'An interactive number guessing game with attempt tracking and instant feedback.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/Zabeeh-Ullah-Dev/Number-Guessing-Game',
  },
];

export const EDUCATION_RECORDS: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science (BS CS)',
    institution: 'City University of Science & Technology (CUSIT), Peshawar',
    period: 'Sep 2024 – Present',
    summary: 'Currently in 5th Semester · Cumulative CGPA: 3.72 / 4.00',
    semesters: [
      { semester: '1st Sem', sgpa: '3.69', cgpa: '3.69' },
      { semester: '2nd Sem', sgpa: '3.92', cgpa: '3.83' },
      { semester: '3rd Sem', sgpa: '3.39', cgpa: '3.67' },
      { semester: '4th Sem', sgpa: '3.83', cgpa: '3.72' },
    ],
  },
  {
    degree: 'Diploma in Information Technology (DIT)',
    institution: 'Charsadda Institute of Technology, Mandani',
    period: 'Jan – Dec 2024',
    marks: '753 / 1000',
  },
  {
    degree: 'FSc (Pre-Medical)',
    institution: 'MM College Peshawar, Peshawar',
    period: '2021 – 2023',
    marks: '942 / 1100',
  },
  {
    degree: 'Matriculation (Science)',
    institution: 'Hira Model High School Mandani',
    period: '2019 – 2021',
    marks: '1020 / 1100',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Google AI Professional Certificate',
    issuer: 'Google',
  },
  {
    title: 'Google AI Essentials Certificate',
    issuer: 'Google',
  },
  {
    title: 'HTML, CSS and JavaScript Coursework',
    issuer: 'IBM-authorized, via Coursera',
  },
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
  },
  {
    title: 'Aspire Leaders Program',
    issuer: 'Aspire Institute',
  },
];
