
import { JobData } from "@/components/jobs/JobCard";

export const mockJobs: JobData[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechNova Solutions",
    location: "San Francisco, CA",
    salary: "$120K - $150K",
    type: "Full-time",
    posted: "2 days ago",
    description: "We're looking for a Senior Frontend Developer to join our growing team. You'll be responsible for building beautiful, responsive web applications using React, TypeScript, and modern CSS frameworks."
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "DesignPulse",
    location: "Remote",
    salary: "$90K - $120K",
    type: "Full-time",
    posted: "1 week ago",
    description: "DesignPulse is seeking a talented UX/UI Designer to create exceptional user experiences for our digital products. You'll collaborate with our product and engineering teams to turn complex problems into simple, intuitive designs."
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "DataFlow Systems",
    location: "Austin, TX",
    salary: "$110K - $140K",
    type: "Full-time",
    posted: "3 days ago",
    description: "Join our backend engineering team to build scalable APIs and services that power our suite of enterprise applications. You'll work with technologies like Node.js, Python, and AWS."
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudScale",
    location: "Remote",
    salary: "$130K - $160K",
    type: "Full-time",
    posted: "5 days ago",
    description: "We're looking for a DevOps Engineer to help automate our infrastructure and improve our CI/CD pipelines. Experience with Kubernetes, Docker, and major cloud platforms required."
  },
  {
    id: "5",
    title: "Product Manager",
    company: "InnovateCorp",
    location: "New York, NY",
    salary: "$115K - $145K",
    type: "Full-time",
    posted: "1 day ago",
    description: "Lead product development for our flagship SaaS platform. You'll work closely with engineering, design, and customer success teams to define product strategy and roadmap."
  },
  {
    id: "6",
    title: "Marketing Specialist",
    company: "GrowthLabs",
    location: "Chicago, IL",
    salary: "$70K - $90K",
    type: "Full-time",
    posted: "2 weeks ago",
    description: "Join our marketing team to develop and execute campaigns that drive user acquisition and engagement. Experience with digital marketing channels and analytics tools preferred."
  },
  {
    id: "7",
    title: "Data Scientist",
    company: "Analytics AI",
    location: "Boston, MA",
    salary: "$125K - $155K",
    type: "Full-time",
    posted: "4 days ago",
    description: "We're seeking a Data Scientist to help extract insights from complex datasets. You'll develop machine learning models and work with stakeholders to solve business problems."
  },
  {
    id: "8",
    title: "Customer Success Manager",
    company: "SupportHero",
    location: "Denver, CO",
    salary: "$80K - $100K",
    type: "Full-time",
    posted: "1 week ago",
    description: "Build relationships with our enterprise customers and ensure they get maximum value from our platform. You'll be their advocate and help drive customer satisfaction and retention."
  },
  {
    id: "9",
    title: "QA Engineer",
    company: "QualityFirst",
    location: "Seattle, WA",
    salary: "$90K - $110K",
    type: "Full-time",
    posted: "6 days ago",
    description: "Join our quality assurance team to ensure our software meets the highest standards. You'll develop and execute test plans, automate tests, and identify and report bugs."
  },
  {
    id: "10",
    title: "Content Writer",
    company: "WordCraft",
    location: "Remote",
    salary: "$60K - $80K",
    type: "Contract",
    posted: "3 days ago",
    description: "Create compelling content for our blog, website, and marketing materials. You'll work with our marketing team to develop content that educates and engages our target audience."
  },
  {
    id: "11",
    title: "Sales Representative",
    company: "RevenuePro",
    location: "Los Angeles, CA",
    salary: "$70K - $90K + Commission",
    type: "Full-time",
    posted: "5 days ago",
    description: "Drive new business and expand our customer base. You'll prospect, qualify, and close deals while providing exceptional customer service throughout the sales cycle."
  },
  {
    id: "12",
    title: "Mobile App Developer",
    company: "AppWorks",
    location: "Portland, OR",
    salary: "$100K - $130K",
    type: "Full-time",
    posted: "1 week ago",
    description: "Build native mobile applications for iOS and Android. You'll work with our design and backend teams to create seamless, intuitive mobile experiences for our users."
  }
];

export const featuredJobs = mockJobs.slice(0, 3);
