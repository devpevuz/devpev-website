export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  tags: string[];
  url?: string;
}

export const positions: Job[] = [
  {
    id: "frontend-techcorp",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Tashkent, Uzbekistan",
    type: "Full-time",
    tags: ["react", "typescript", "next.js"],
    url: "https://techcorp.uz/jobs",
  },
  {
    id: "backend-startupxyz",
    title: "Backend Developer",
    company: "StartupXYZ",
    location: "Remote",
    type: "Full-time",
    tags: ["node.js", "postgresql"],
    url: "https://startupxyz.com/jobs",
  },
  {
    id: "devops-enterprise",
    title: "DevOps Engineer",
    company: "Enterprise Inc",
    location: "Tashkent, Uzbekistan",
    type: "Part-time",
    tags: ["docker", "kubernetes", "aws"],
  },
];

export const freelanceJobs: Job[] = [
  {
    id: "react-client",
    title: "React Developer",
    company: "Client Project",
    location: "Remote",
    type: "Freelance",
    tags: ["react", "javascript"],
  },
  {
    id: "ui-design-agency",
    title: "UI Designer",
    company: "Design Agency",
    location: "Remote",
    type: "Freelance",
    tags: ["figma", "tailwind"],
  },
];
