/*
  Edit this file to update portfolio content.
  The interface in script.js reads from window.portfolioContent and renders the site.
*/

window.portfolioContent = {
  profile: {
    name: "Goh Kai Yang",
    initials: "GKY",
    degree: "Bachelor of Computer Science (Artificial Intelligence)",
    institution: "Universiti Teknikal Malaysia Melaka (UTeM)",
    location: "Melaka, Malaysia",
    tagline: "Building human-centred AI systems that make complex decisions easier to understand.",
    intro:
      "I am a Computer Science (AI) undergraduate focused on machine learning, expert systems, software engineering, and usable interface design. My work combines technical problem solving with Human-Computer Interaction principles so AI solutions feel clear, trustworthy, and practical.",
    email: "gohkaiyang176@gmail.com",
    github: "https://github.com/JumpingLamp",
    linkedin: "https://www.linkedin.com/in/goh-kai-yang-367121104",
    resumeFile: "#"
  },

  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "academic", label: "Academic" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ],

  homeMetrics: [
    { label: "Current Track", value: "Computer Science (AI)" },
    { label: "Core Evidence", value: "3 Projects" },
    { label: "Career Focus", value: "AI, Data Science" }
  ],

  quickLinks: [
    {
      label: "Academic History",
      href: "#academic",
      detail: "STPM to UTeM learning path"
    },
    {
      label: "Competency Matrix",
      href: "#skills",
      detail: "Programming, AI, engineering, and teamwork"
    },
    {
      label: "Project Evidence",
      href: "#projects",
      detail: "Applied AI and software systems"
    },
    {
      label: "Contact Channel",
      href: "#contact",
      detail: "Email, GitHub, LinkedIn, and message form"
    }
  ],

  about: {
    biography:
      "My academic journey began with an STPM foundation that strengthened my analytical thinking and discipline. At UTeM, I am developing deeper expertise in artificial intelligence, software development, databases, and HCI. I enjoy turning vague problems into structured systems that people can actually use.",
    careerGoals:
      "My goal is to become an AI/software engineer who builds intelligent applications with transparent logic, reliable data handling, and accessible user experiences. I am especially interested in decision-support systems, predictive modelling, and AI interfaces that reduce user confusion.",
    skillsSummary:
      "Technically, I work with programming, database design, AI methods, expert-system logic, and interface prototyping. My soft-skill strengths include communication, responsibility in group work, documentation, and iterative improvement based on feedback.",
    highlights: [
      {
        label: "Analytical Foundation",
        detail: "Built mathematical reasoning and study discipline through STPM."
      },
      {
        label: "AI Direction",
        detail: "Specialised in Computer Science (AI) at UTeM."
      },
      {
        label: "Applied Systems",
        detail: "Created academic projects involving prediction, rule-based reasoning, and databases."
      },
      {
        label: "Human-Centred Mindset",
        detail: "Uses HCI principles to make technical systems easier to understand."
      }
    ]
  },

  education: [
    {
    period: "Secondary School",
    title: "SPM",
    institution: "SMJK Kwang Hua",
    description:
        "Completed secondary education with emphasis on core academic subjects including Mathematics, Sciences, and Languages. Built foundational skills in analytical thinking, problem solving, time management, and examination preparation through structured coursework and assessments.",
    tags: ["Academic Foundation", "Mathematics", "Science", "Language Skills", "Problem Solving", "Time Management"]
    },
    {
      period: "Pre-University",
      title: "STPM Background",
      institution: "SMK Tinggi Klang",
      description:
        "Completed pre-university studies with emphasis on analytical thinking, independent learning, problem solving, and preparation for computing-related higher education.",
      tags: ["Analytical thinking", "Mathematics foundation", "Study discipline"]
    },
    {
      period: "Ongoing",
      title: "Computer Science (Artificial Intelligence)",
      institution: "Universiti Teknikal Malaysia Melaka (UTeM)",
      description:
        "Currently pursuing Computer Science with AI focus, covering programming, data structures, databases, machine learning, expert systems, software engineering, and HCI.",
      tags: ["Artificial Intelligence", "Software engineering", "HCI", "Databases"]
    },
    
  ],

  skills: [
    {
      category: "Programming",
      summary: "Core languages and scripting used for academic systems and prototypes.",
      items: [
        { name: "Python", level: 88, detail: "Data processing, AI prototypes, automation" },
        { name: "Java", level: 78, detail: "Object-oriented programming and coursework" },
        { name: "C++", level: 70, detail: "Algorithms and structured problem solving" },
        { name: "HTML, CSS, JavaScript", level: 82, detail: "Responsive static interfaces" }
      ]
    },
    {
      category: "AI / Machine Learning",
      summary: "AI techniques for prediction, classification, and decision support.",
      items: [
        { name: "Machine Learning", level: 78, detail: "Model training and evaluation" },
        { name: "ANFIS", level: 74, detail: "Adaptive neuro-fuzzy prediction systems" },
        { name: "Expert Systems", level: 80, detail: "Rule-based reasoning using CLIPS" },
        { name: "Data Preprocessing", level: 76, detail: "Cleaning, transforming, and preparing data" }
      ]
    },
    {
      category: "Software Engineering",
      summary: "Methods for turning requirements into maintainable working software.",
      items: [
        { name: "Database Design", level: 82, detail: "ERD, SQL, normalisation, relationships" },
        { name: "UI Prototyping", level: 80, detail: "Layouts, flows, affordances, feedback" },
        { name: "Documentation", level: 84, detail: "Reports, diagrams, and user-oriented explanation" },
        { name: "Testing Mindset", level: 72, detail: "Checking edge cases and expected behaviour" }
      ]
    },
    {
      category: "Soft Skills",
      summary: "Collaboration behaviours that support reliable project delivery.",
      items: [
        { name: "Team Collaboration", level: 86, detail: "Coordination in group assignments" },
        { name: "Communication", level: 82, detail: "Clear explanation of technical decisions" },
        { name: "Time Management", level: 78, detail: "Balancing coursework and milestones" },
        { name: "Adaptability", level: 84, detail: "Learning tools and improving from feedback" }
      ]
    }
  ],

  projects: [
    {
      title: "ANFIS Stock Prediction System",
      category: "Fuzzy Logic and Neural Network Prediction",
      description:
        "A stock price prediction prototype using Adaptive Neuro-Fuzzy Inference System concepts to model market behaviour and compare predicted trends with actual values.",
      technologies: ["Python", "ANFIS", "Data preprocessing", "Prediction modelling", "Neural Networks"],
      mediaLabel: "Forecast Model Preview",
      links: [
          { label: "GitHub", url: "https://github.com/cheah20/FUZZY-LOGIC", uiOnly: true }
      ]
    },
    {
      title: "School Management System",
      category: "C++ and MariaDB Connection",
      description:
        "A school management system built with C++ and connected to a MariaDB database for efficient data handling and retrieval.",
      technologies: ["C++", "MariaDB", "Database connectivity", "System design", "SQL"],
      mediaLabel: "System Architecture Placeholder",
      links: [
          { label: "GitHub", url: "https://github.com/JumpingLamp/SchoolManagementSystem", uiOnly: true },
      ]
    },
    {
      title: "Hotel Management System",
      category: "Java and JDBI Integration",
      description:
        "A simple hotel management system implemented in Java with Java interface element and JDBI for CRUDS operation",
      technologies: ["SQL", "ERD", "Database design", "Normalisation"],
      mediaLabel: "Database Schema Preview",
      links: [
          { label: "GitHub", url: "https://github.com/JumpingLamp/2BAXI-OOP-Project", uiOnly: true },
      ]
    },
    {
      title: "Optimisation of Staff Scheduling Using Genetic Algorithms",
      category: "Genetic Algorithms",
      description:
        "An optimisation project for scheduling staff using genetic algorithms to improve efficiency and resource allocation.",
      technologies: ["Genetic Algorithms", "Optimisation", "Scheduling"],
      mediaLabel: "Genetic Algorithm Implementation",
      links: [
          { label: "Prototype", url: "https://github.com/JumpingLamp/EvoProject", uiOnly: true },
      ]
    }
  ],

  experience: [
    {
      title: "University Projects",
      role: "Student Developer",
      period: "2024 - Present",
      description:
        "Completed coursework systems that required planning, coding, testing, documentation, and presentation of technical decisions.",
      evidence: ["AI prediction prototype", "Expert system implementation", "Database modelling"]
    },
    {
      title: "Group Assignments",
      role: "Collaborator and Documentation Contributor",
      period: "2024 - Present",
      description:
        "Worked with teammates to divide tasks, define requirements, prepare reports, and refine deliverables before submission.",
      evidence: ["Task coordination", "Report writing", "Interface review"]
    },
    {
      title: "Competitions and Activities",
      role: "Participant",
      period: "Ongoing",
      description:
        "Interested in activities that improve algorithmic thinking, public presentation, teamwork, and practical software delivery.",
      evidence: ["Problem solving", "Presentation practice", "Continuous learning"]
    }
  ],

  contact: {
    heading: "Open to academic collaboration, internships, and AI project discussions.",
    note:
      "Use the form for a frontend-only message draft, or update the profile links in content.js with real contact destinations.",
    formSuccess:
      "Message captured on this page. Connect a real email or form service later if sending is required."
  }
};
