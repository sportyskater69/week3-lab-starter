import type { Program } from "../types/program";

export const programs: Program[] = [
  {
    ID: "SAIT-SD-220",
    name: "Software Development",
    credential: "Diploma",
    school: "School for Advanced Digital Technology",
    length: "2 years",
    credit: 60,
    method: "In-person",
    careerPath: [
      "Junior Software Developer",
      "Web Developer",
      "Application Support Analyst"
    ],
    note: "Industry-focused program with strong emphasis on programming fundamentals and applied projects."
  },
  {
    ID: "SAIT-ITN-215",
    name: "Information Technology – Network Systems",
    credential: "Diploma",
    school: "School for Advanced Digital Technology",
    length: "2 years",
    credit: 64,
    method: "In-person",
    careerPath: [
      "Network Administrator",
      "IT Support Specialist",
      "Systems Technician"
    ],
    note: "Prepares students for managing and supporting enterprise network environments."
  },
  {
    ID: "SAIT-BADM-201",
    name: "Business Administration",
    credential: "Diploma",
    school: "School of Business",
    length: "2 years",
    credit: 60,
    method: "Blended",
    careerPath: [
      "Business Analyst",
      "Operations Coordinator",
      "Office Manager"
    ],
    note: "Broad business program covering accounting, marketing, and management fundamentals."
  },
  {
    ID: "SAIT-UX-110",
    name: "User Experience (UX) Design",
    credential: "Certificate",
    school: "School for Advanced Digital Technology",
    length: "1 year",
    credit: 30,
    method: "Online",
    careerPath: [
      "UX Designer",
      "UI Designer",
      "Product Design Assistant"
    ],
    note: "Focused on user-centered design, usability testing, and digital interface design."
  },
  {
    ID: "SAIT-DM-145",
    name: "Digital Marketing",
    credential: "Certificate",
    school: "School of Business",
    length: "1 year",
    credit: 30,
    method: "Blended",
    careerPath: [
      "Digital Marketing Coordinator",
      "Social Media Strategist",
      "Content Marketing Specialist"
    ],
    note: "Covers SEO, social media, analytics, and digital campaign strategies."
  }
];
