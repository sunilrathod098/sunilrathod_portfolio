
export const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Client Server Technology Pvt. Ltd.",
    period: "Oct 2025 — Present",
    type: "Full-time",
    image: "/projects/cst.jpg",
    bullets: [
      "Develop and maintain backend services and RESTful APIs using Java and Spring Boot, following clean coding practices and layered architecture.",
      "Work with Hibernate/JPA and relational databases, including Microsoft SQL Server and MySQL, for entity mapping, CRUD operations, queries, and data persistence.",
      "Implement and maintain authentication and authorization workflows using Spring Security, JWT access and refresh tokens, and role-based access control where applicable.",
      "Contribute to microservices-based application development, service integration, configuration management, and API design.",
      "Design, test, and document APIs using Postman and Swagger/OpenAPI to improve API reliability and maintainability.",
      "Work with Redis caching to improve response times and reduce repeated database queries where applicable.",
      "Write and optimize SQL queries, troubleshoot database issues, and support data integrity and application performance.",
      "Contribute to application modules involving user management, authentication, session handling, and audit logging.",
      "Collaborate with frontend development using React, JavaScript, HTML, CSS, and Tailwind CSS to integrate backend APIs with responsive user interfaces.",
      "Participate in Agile development, task tracking, code reviews, debugging, and sprint delivery using Jira and Git-based version control.",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "REST APIs",
      "Microservices",
      "JWT Authentication",
      "Redis",
      "Microsoft SQL Server",
      "MySQL",
      "SQL Optimization",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Swagger",
      "Postman",
      "Git",
      "Jira",
      "Agile Methodologies",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "AIHWI Technologies Pvt. Ltd.",
    period: "Apr 2024 — Oct 2024",
    type: "Internship",
    image: "/projects/aishwi.jpg",
    bullets: [
      "Developed and maintained backend services and RESTful APIs using Node.js and Express.js for company web applications.",
      "Contributed to the development of an Online Exam Portal, supporting application workflows, API integration, and backend functionality.",
      "Developed and maintained the company's official website, integrating frontend components with backend services.",
      "Implemented JWT-based authentication and authorization workflows to support secure user access and protected API endpoints.",
      "Integrated MongoDB for data modeling, CRUD operations, and application data management; worked with relational database concepts where required.",
      "Tested and debugged API endpoints using Postman and collaborated on frontend integration using React and JavaScript.",
      "Used Git and GitHub for version control, code management, and collaboration throughout the development lifecycle.",
      "Supported application testing, bug fixing, feature enhancements, and project delivery in coordination with the development team.",
    ],
    tags: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "React",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "JWT Authentication",
      "Postman",
      "Git",
      "GitHub",
      "MERN Stack",
      "Backend Development",
      "Web Development",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Unified Mentor",
    period: "Aug 2024 — Oct 2024",
    type: "Internship",
    image: "/projects/unified-mentor.jpg",
    bullets: [
      "Collected, cleaned, transformed, and validated datasets using Python, Pandas, and NumPy to improve data quality and analysis readiness.",
      "Performed exploratory data analysis (EDA) to identify trends, patterns, outliers, and actionable business insights.",
      "Created interactive dashboards, visual reports, and KPI summaries using Power BI and Tableau to communicate findings effectively.",
      "Used Microsoft Excel for data cleaning, spreadsheet analysis, data validation, and summary reporting.",
      "Analyzed business datasets to identify performance trends and support data-driven decision-making.",
      "Developed data visualizations and presented analytical findings in a clear, structured format for business stakeholders.",
      "Worked on data analytics projects involving data preprocessing, exploratory analysis, visualization, and interpretation of results.",
      "Applied analytical thinking and problem-solving techniques to convert raw data into meaningful insights.",
    ],
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Power BI",
      "Tableau",
      "Microsoft Excel",
      "Data Visualization",
      "KPI Reporting",
      "Statistical Analysis",
      "Business Intelligence",
      "Data Analytics",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Rinex Technologies",
    period: "May 2022 — Aug 2022",
    type: "Internship",
    image: "/projects/rinex.jpg",
    bullets: [
      "Explored machine-learning workflows using Python, PyTorch, and data preprocessing techniques to develop and evaluate predictive models.",
      "Worked on a Signature Forgery Detection project, exploring image preprocessing and deep-learning techniques to distinguish genuine and forged signatures.",
      "Used Python imaging tools, including PIL, to prepare and process signature images for model experimentation.",
      "Developed a Flask-based application to connect the machine-learning workflow with a simple interface for model interaction and prediction.",
      "Explored natural language processing (NLP) and text-classification concepts for identifying hate speech in textual data.",
      "Performed data preparation, model experimentation, prediction analysis, and debugging as part of machine-learning project development.",
      "Applied foundational machine-learning concepts to understand model behavior, evaluate outputs, and improve the overall workflow.",
    ],
    tags: [
      "Python",
      "PyTorch",
      "Flask",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "NLP",
      "Image Processing",
      "PIL",
      "Signature Forgery Detection",
      "Text Classification",
      "Data Preprocessing",
      "Model Evaluation",
    ],
  },
];

// Parses dates such as "Oct 2025" and "Present".
const parseExperienceDate = (text) => {
  if (!text) return null;

  const value = text.trim();

  if (value === "Present" || value === "Now") {
    return new Date();
  }

  const date = new Date(`${value} 1`);

  return Number.isNaN(date.getTime()) ? null : date;
};

// Calculates the duration of one individual company.
export const calculateCompanyExperience = (period) => {
  if (!period || !period.includes(" — ")) {
    return "Duration unavailable";
  }

  const [startText, endText] = period.split(" — ");
  const start = parseExperienceDate(startText);
  const end = parseExperienceDate(endText);

  if (!start || !end || start > end) {
    return "Duration unavailable";
  }

  // Inclusive calendar months: Oct to Oct = 1 month.
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} month${months !== 1 ? "s" : ""} experience`;
  }

  if (months === 0) {
    return `${years} year${years !== 1 ? "s" : ""} experience`;
  }

  return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""} experience`;
};

// Calculates overall experience without counting overlapping months twice.
export const calculateExperience = (experienceList) => {
  const workedMonths = new Set();

  experienceList.forEach(({ period }) => {
    if (!period || !period.includes(" — ")) return;

    const [startText, endText] = period.split(" — ");

    const start = parseExperienceDate(startText);
    const end = parseExperienceDate(endText);

    if (!start || !end || start > end) return;

    const current = new Date(
      start.getFullYear(),
      start.getMonth(),
      1
    );

    const last = new Date(
      end.getFullYear(),
      end.getMonth(),
      1
    );

    while (current <= last) {
      workedMonths.add(
        `${current.getFullYear()}-${current.getMonth()}`
      );

      current.setMonth(current.getMonth() + 1);
    }
  });

  const totalMonths = workedMonths.size;

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    totalMonths,
  };
};

const experience = calculateExperience(experiences);

export const profile = {
  name: "Sunil Rathod ",
  name: "Sunil Rathod Danavath",
  shortName: "Sunil Rathod",
  role: "Associate Software Engineer  |  Full Stack Developer",
  location: "Hyderabad, Telangana, India",
  email: "sunilrajputhrathod@gmail.com",
  avatar: "/images/sunilrathodImage.png",
  summary:
    "I specialize in building scalable backend services and developing modern, responsive web applications. I transform real-world requirements into secure, efficient REST APIs, maintainable software architectures, and intuitive user experiences. With a strong foundation in Java, Spring Boot, Node.js, React, and database management, I focus on writing clean, reliable code and delivering practical, high-quality solutions that create meaningful value.",
  availability: "Open to meaningful opportunities",
  github: "https://github.com/sunilrathod098",
  linkedin: "https://www.linkedin.com/in/sunil-rathod-683853202/",
  resume: "/Sunil_Rathod_resume.pdf",
  stats: [
    { value: "13+", label: "Projects explored" },
    { value: "4+", label: "Core stack areas" },
    { value: "2025–Now", label: "Software engineering" },
    {
      value: `${experience.years}y ${experience.months}m`,
      label: "Total experience including internships",
    },
  ],
};

export const projects = [
  {
    title: "AI Supply Chain & Demand Forecasting System",
    category: "Full Stack",
    image: "/images/forcastingimage.png",
    status: "Currently Building",
    description:
      "AI-powered supply chain management platform featuring demand forecasting, automated purchase orders, vendor scoring, and event-driven notifications using Spring Boot microservices and Kafka.",
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Apache Kafka",
      "Redis",
      "AI Forecasting",
      "React",
      "Tailwind CSS",
      "Docker",
      "AWS",
    ],
    github: "https://github.com/sunil-devops-SupplyChain",
    live: "",
  },
  {
    title: "BGC — Background Verification Platform",
    category: "Full Stack",
    image: "/images/bgc.png",
    status: "Completed",
    description:
      "Enterprise background check portal handling candidate identity screening, document validation workflows, status tracking dashboards, and automated verification reports.",
    stack: [
      "Java",
      "Spring Boot",
      "MS SQL",
      "Microservices",
      "Spring Security",
      "React",
      "Tailwind CSS",
      "AWS S3",
    ],
    github: "https://github.com/sunilrathod098",
    live: "",
  },
  {
    title: "Smart Buy — Online Shopping",
    category: "Full Stack",
    image: "/images/buuy.png",
    description:
      "Full-stack e-commerce store with product browsing, smart search filtering, cart state management, secure checkout pipelines, and responsive client-side UI.",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST API",
      "MongoDB",
    ],
    github: "https://github.com/sunilrathod098",
    live: "",
  },
  {
    title: "LMS — Learning Management System",
    category: "Backend",
    image: "/images/lms.png",
    status: "Completed",
    description:
      "Role-based learning management backend handling student enrollment, course progress tracking, certification validation, and secured JWT-based authentication.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate / JPA",
      "MySQL",
      "REST APIs",
    ],
    github: "https://github.com/sunilrathod098/LMS_Application",
    live: "",
  },
  {
    title: "YouTube Clone Backend",
    category: "Backend",
    image: "/images/youtubeclone.png",
    description:
      "Video-platform backend featuring authentication, upload workflows, cloud media storage and data aggregation.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/sunilrathod098/YouTube-Clone-Project",
    live: "",
  },
  {
    title: "Portfolio Dashboard",
    category: "Frontend",
    image: "/images/fullstackimage.png",
    description:
      "A personal dashboard showcasing projects, skills, repositories and professional information with a responsive React interface.",
    stack: ["React", "Vite", "Tailwind CSS", "GitHub API"],
    github: "https://github.com/sunilrathod098",
    live: "https://sunilrathod-dashboard-sunilrathod098s-projects.vercel.app/",
  },
  {
    title: "Online Exam Portal",
    category: "Full Stack",
    image: "/images/onlineexamportal.webp",
    description:
      "An exam portal with timed assessments, question loading and result submission backed by a database.",
    stack: ["JavaScript", "Node.js", "MySQL", "REST API"],
    github: "https://github.com/sunilrathod098",
    live: "",
  },
  {
    title: "Signature Forgery Detection",
    category: "AI / Data",
    image: "/images/forgedsignatures.jpg",
    description:
      "A machine-learning project exploring signature image analysis and forgery detection with a Python-based workflow.",
    stack: ["Python", "PyTorch", "Flask", "PIL"],
    github: "https://github.com/sunilrathod098",
    live: "",
  },
  {
    title: "Twitter Hate Speech Detection",
    category: "AI / Data",
    image: "/images/twitterhatespeechfeatured.jpg",
    description:
      "A text-classification project exploring natural-language processing for hate-speech detection.",
    stack: ["Python", "NLP", "Machine Learning"],
    github: "https://github.com/sunilrathod098",
    live: "",
  },
  {
    title: "Todo Management App",
    category: "Full Stack",
    image: "/images/todo.jpg",
    description:
      "A task management app with authentication and create, update and delete workflows.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/sunilrathod098",
    live: "",
  },
];

export const skills = [
  {
    category: "Backend",
    items: [
      ["Java", 90],
      ["Spring Boot", 86],
      ["Python", 70],
      ["Node.js", 88],
      ["Express.js", 80],
      ["REST API Design", 85],
      ["Spring Security / JWT", 80],
      ["Hibernate / JPA", 80],
      ["Microservices concepts", 70],
    ],
  },
  {
    category: "Frontend",
    items: [
      ["JavaScript", 88],
      ["React", 86],
      ["HTML & CSS", 88],
      ["Bootstrap", 80],
      ["Tailwind CSS", 82],
      ["Responsive UI", 88],
      ["Next.js", 70],
    ],
  },
  {
    category: "Databases & Cache",
    items: [
      ["Microsoft SQL Server", 82],
      ["MySQL", 84],
      ["MongoDB", 84],
      ["PostgreSQL", 70],
      ["Redis", 72],
      ["SQL optimization", 78],
      ["GraphQL basics", 60],
    ],
  },
  {
    category: "Data & AI",
    items: [
      ["Python", 80],
      ["Pandas / NumPy", 78],
      ["Data Visualization", 78],
      ["Matplotlib/Seaborn", 70],
      ["Exploratory Data Analysis", 78],
      ["Statistical Analysis", 70],
      ["Natural Language Processing", 70],
      ["Power BI", 76],
      ["Tableau", 72],
      ["PyTorch", 65],
      ["Machine Learning", 65],
      ["Deep Learning", 60],
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      ["Git & GitHub", 85],
      ["Postman", 84],
      ["Swagger / OpenAPI", 76],
      ["Jira / Agile", 76],
      ["Maven", 76],
      ["Docker basics", 60],
      ["VS Code / IntelliJ IDEA", 100],
      ["MS Office / Excel", 100],
      ["ApolloServer / GraphQL", 60],
    ],
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    institution:
      "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    period: "Jun 2020 — Jun 2024",
  },
  {
    degree: "Intermediate — MPC",
    institution: "Vagdevi Junior College",
    period: "Jun 2018 — Apr 2020",
  },
];

export const languages = ["English", "Hindi", "Telugu", "Marathi"];
