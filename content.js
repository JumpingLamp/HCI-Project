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
    email: "student.email@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-profile",
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
    { label: "Current Track", value: "AI Undergraduate" },
    { label: "Core Evidence", value: "4 Projects" },
    { label: "Design Lens", value: "HCI Focus" }
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
      period: "Pre-University",
      title: "STPM Background",
      institution: "STPM",
      description:
        "Completed pre-university studies with emphasis on analytical thinking, independent learning, problem solving, and preparation for computing-related higher education.",
      tags: ["Analytical thinking", "Mathematics foundation", "Study discipline"]
    },
    {
      period: "University",
      title: "Computer Science (Artificial Intelligence)",
      institution: "Universiti Teknikal Malaysia Melaka (UTeM)",
      description:
        "Currently pursuing Computer Science with AI focus, covering programming, data structures, databases, machine learning, expert systems, software engineering, and HCI.",
      tags: ["Artificial Intelligence", "Software engineering", "HCI", "Databases"]
    },
    {
      period: "Ongoing",
      title: "Project-Based Learning",
      institution: "Academic Coursework and Group Projects",
      description:
        "Developing practical systems through individual and team assignments, with attention to documentation, usability, testing, and presentation quality.",
      tags: ["Teamwork", "Prototype design", "Documentation", "Evaluation"]
    }
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
      category: "AI Prediction",
      description:
        "A stock price prediction prototype using Adaptive Neuro-Fuzzy Inference System concepts to model market behaviour and compare predicted trends with actual values.",
      technologies: ["Python", "ANFIS", "Data preprocessing", "Prediction modelling"],
      mediaLabel: "Forecast Model Preview",
      links: [
        { label: "GitHub", url: "#", uiOnly: true },
        { label: "Demo", url: "#", uiOnly: true }
      ]
    },
    {
      title: "Stress & Burnout Expert System",
      category: "Rule-Based AI",
      description:
        "A CLIPS-based expert system that evaluates user responses and provides structured stress or burnout guidance through transparent rule-based reasoning.",
      technologies: ["CLIPS", "Expert system", "Rule base", "Decision support"],
      mediaLabel: "Inference Flow Placeholder",
      links: [
        { label: "GitHub", url: "#", uiOnly: true },
        { label: "Case Study", url: "#", uiOnly: true }
      ]
    },
    {
      title: "Blood Bank Database System",
      category: "Database System",
      description:
        "A database design and implementation project for managing donors, blood inventory, requests, and hospital-related records with a structured relational model.",
      technologies: ["SQL", "ERD", "Database design", "Normalisation"],
      mediaLabel: "Database Schema Preview",
      links: [
        { label: "GitHub", url: "#", uiOnly: true },
        { label: "Diagram", url: "#", uiOnly: true }
      ]
    },
    {
      title: "AI Study Planner Prototype",
      category: "AI + HCI",
      description:
        "A concept prototype for a study planning assistant that prioritises tasks, explains recommendations, and keeps the interface simple for students under workload pressure.",
      technologies: ["JavaScript", "HCI", "Heuristics", "AI concept design"],
      mediaLabel: "Planner Interface Placeholder",
      links: [
        { label: "Prototype", url: "#", uiOnly: true },
        { label: "Report", url: "#", uiOnly: true }
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
