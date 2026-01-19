import type { Staff } from "../types/staff";

export const staff: Staff[] = [
  {
    id: "STF-1001",
    name: "Alex Chen",
    role: "Instructor",
    school: "School for Advanced Digital Technology",
    office: "MC 415",
    email: "alex.chen@sait.ca",
    startYear: 2019,
    specialties: ["Web Development", "TypeScript", "React"],
    funFact: "Once built a full-stack app during a 24-hour hackathon.",
    courseIds: ["CPRG-210", "CPRG-306"]
  },
  {
    id: "STF-1002",
    name: "Maria Gonzalez",
    role: "Program Chair",
    school: "School of Business",
    office: "NN 210",
    email: "maria.gonzalez@sait.ca",
    startYear: 2015,
    specialties: ["Strategic Management", "Entrepreneurship"],
    courseIds: ["MGMT-201", "MGMT-305"]
  },
  {
    id: "STF-1003",
    name: "Jordan Patel",
    role: "Coordinator",
    school: "School of Health and Public Safety",
    email: "jordan.patel@sait.ca",
    specialties: ["Program Scheduling", "Student Support"],
    funFact: "Volunteers as a first aid trainer on weekends."
  },
  {
    id: "STF-1004",
    name: "Samantha Lee",
    role: "Advisor",
    school: "School of Hospitality and Tourism",
    office: "HT 118",
    startYear: 2021,
    specialties: ["Academic Advising", "Career Planning"],
    funFact: "Has visited over 25 countries."
  },
  {
    id: "STF-1005",
    name: "Robert McNeil",
    role: "Instructor",
    school: "School of Manufacturing and Automation",
    office: "WA 302",
    email: "robert.mcneil@sait.ca",
    startYear: 2012,
    specialties: ["PLC Programming", "Robotics", "Automation Systems"],
    courseIds: ["MACH-240", "AUTO-330"]
  }
];
