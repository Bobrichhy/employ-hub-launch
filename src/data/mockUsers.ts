
export interface EmployerProfile {
  id: string;
  name: string;
  email: string;
  company: string;
  position: string;
  website?: string;
  location: string;
  about?: string;
  jobs: string[]; // IDs of jobs
}

export interface EmployeeProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  location: string;
  title?: string;
  skills: string[];
  experience: {
    title: string;
    company: string;
    startDate: string;
    endDate?: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  resume?: string; // URL to resume file
  applications: string[]; // IDs of jobs applied to
}

export interface AdminProfile {
  id: string;
  name: string;
  email: string;
  role: "admin";
}

export const mockEmployers: EmployerProfile[] = [
  {
    id: "emp1",
    name: "Jennifer Chen",
    email: "jennifer@technova.com",
    company: "TechNova Solutions",
    position: "HR Director",
    website: "https://technova.example.com",
    location: "San Francisco, CA",
    about: "TechNova Solutions is a leading software development company specializing in enterprise applications and digital transformation.",
    jobs: ["1", "3"]
  },
  {
    id: "emp2",
    name: "Marcus Johnson",
    email: "marcus@designpulse.com",
    company: "DesignPulse",
    position: "Talent Acquisition Lead",
    website: "https://designpulse.example.com",
    location: "Remote",
    about: "DesignPulse is a creative agency focused on delivering exceptional digital experiences for brands across industries.",
    jobs: ["2"]
  },
  {
    id: "emp3",
    name: "Sarah Williams",
    email: "sarah@dataflow.com",
    company: "DataFlow Systems",
    position: "Recruiting Manager",
    website: "https://dataflow.example.com",
    location: "Austin, TX",
    about: "DataFlow Systems builds enterprise data management solutions for Fortune 500 companies.",
    jobs: ["4", "7"]
  }
];

export const mockEmployees: EmployeeProfile[] = [
  {
    id: "ee1",
    name: "David Park",
    email: "david@example.com",
    phone: "555-123-4567",
    location: "Seattle, WA",
    title: "Senior Frontend Developer",
    skills: ["React", "TypeScript", "CSS", "JavaScript", "UI/UX Design"],
    experience: [
      {
        title: "Frontend Developer",
        company: "WebTech Solutions",
        startDate: "2019-06",
        endDate: "2023-03",
        description: "Developed responsive web applications using React and TypeScript. Collaborated with designers to implement UI components."
      },
      {
        title: "Junior Developer",
        company: "CodeCraft",
        startDate: "2017-02",
        endDate: "2019-05",
        description: "Worked on frontend features for e-commerce websites. Maintained and improved existing codebase."
      }
    ],
    education: [
      {
        degree: "B.S. Computer Science",
        institution: "University of Washington",
        year: "2017"
      }
    ],
    applications: ["1", "4"]
  },
  {
    id: "ee2",
    name: "Maya Rodriguez",
    email: "maya@example.com",
    phone: "555-987-6543",
    location: "Chicago, IL",
    title: "UX/UI Designer",
    skills: ["User Research", "Wireframing", "Prototyping", "Figma", "Adobe XD"],
    experience: [
      {
        title: "UI Designer",
        company: "DesignHub",
        startDate: "2020-03",
        endDate: "2023-01",
        description: "Created user interfaces for web and mobile applications. Conducted user research and usability testing."
      },
      {
        title: "Graphic Designer",
        company: "Creative Solutions",
        startDate: "2018-05",
        endDate: "2020-02",
        description: "Designed marketing materials and brand assets for clients across various industries."
      }
    ],
    education: [
      {
        degree: "B.F.A. Graphic Design",
        institution: "School of the Art Institute of Chicago",
        year: "2018"
      }
    ],
    applications: ["2", "5"]
  },
  {
    id: "ee3",
    name: "James Wilson",
    email: "james@example.com",
    phone: "555-456-7890",
    location: "Austin, TX",
    title: "Backend Engineer",
    skills: ["Node.js", "Python", "AWS", "MongoDB", "Docker"],
    experience: [
      {
        title: "Software Engineer",
        company: "CloudTech",
        startDate: "2018-08",
        endDate: "2023-02",
        description: "Built scalable backend services using Node.js and AWS. Designed and optimized database schemas."
      },
      {
        title: "Junior Backend Developer",
        company: "DataSoft",
        startDate: "2016-11",
        endDate: "2018-07",
        description: "Developed RESTful APIs and implemented authentication systems. Worked with SQL and NoSQL databases."
      }
    ],
    education: [
      {
        degree: "B.S. Computer Engineering",
        institution: "University of Texas at Austin",
        year: "2016"
      }
    ],
    applications: ["3", "7"]
  }
];

export const mockAdmins: AdminProfile[] = [
  {
    id: "admin1",
    name: "Admin User",
    email: "admin@employhub.com",
    role: "admin"
  }
];
