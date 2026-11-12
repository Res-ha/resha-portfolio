import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Resha Ananda Rahman",
  initials: "RAR",
  url: "https://github.com/Res-ha",
  location: "Palangka Raya, Central Kalimantan, Indonesia",
  locationLink: "https://www.google.com/maps/place/Palangka+Raya",
  description:
    "Informatics Graduate | Technical Support | Data Analysis | Web Development",
  summary:
    "Informatics Engineering graduate with a GPA of 3.62/4.00 and practical experience in helpdesk operations, technical issue handling, escalation, and web application support. At PT Telkom Akses, handled provisioning and migration issues, maintained status records in Google Sheets, escalated system errors through internal tools, and coordinated follow-up with field technicians and operational teams. Additional experience includes basic hardware and software troubleshooting, website maintenance, and application functional testing. Interested in supporting internal users and contributing to reliable day-to-day IT operations.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    // { name: "Go", icon: Golang },
    // { name: "Postgres", icon: Postgresql },
    // { name: "Docker", icon: Docker },
    // { name: "Kubernetes", icon: Kubernetes },
    // { name: "Java", icon: Java },
    // { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "reshaanandarahman@gmail.com",
    tel: "+62 853-4605-8945",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Res-ha",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/resha-ananda-rahman/",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "PT Telkom Akses",
      href: "",
      badges: [],
      location: "Palangka Raya, Central Kalimantan, Indonesia",
      title: "Help Desk Provisioning & Migration",
      logoUrl: "/telkom-akses-logo.png",
      start: "July 2025",
      end: "August 2026",
      description:
        "Handled more than 10 provisioning and migration order issues per day through individual and group Telegram chats to support operational follow-up.\n- Recorded and updated issue, in-progress, completed, and suspected-fraud statuses in Google Sheets for traceable monitoring.\n- Escalated order issues, system bugs, and errors through the internal website and dedicated Telegram bot.\n- Coordinated follow-up between the office helpdesk, field technicians, sales staff, and GRAPARI customer service representatives.",
    },
    {
      company: "TINGANG.ID",
      href: "",
      badges: [],
      location: "Palangka Raya",
      title: "Junior WordPress Web Developer - Freelance/Part-time",
      logoUrl: "/tingang_id_logo.png",
      start: "July 2024",
      end: "August 2025",
      description:
        "Contributed to client websites using WordPress and PHP under the guidance of a Senior Web Developer.\n- Maintained websites, checked functionality, and helped resolve bugs affecting usability.\n- Adjusted website layouts and content based on project requirements in coordination with the development team.",
    },
    {
      company: "Universitas Palangka Raya",
      href: "",
      badges: [],
      location: "Palangka Raya",
      title: "Laboratory Teaching Assistant",
      logoUrl: "/universitas palangka raya_.png",
      start: "October 2023",
      end: "May 2024",
      description:
        "Assisted practical classes in Web and Mobile Programming, Network Security, and Spatial Data Analysis and Modeling.\n- Guided students in using technical tools and troubleshooting programming or networking issues.\n- Evaluated assignments and prepared progress reports to support laboratory activities.",
    },
    {
      company: "KOPERASI UPAYA UNIVERSITAS PALANGKA RAYA",
      href: "",
      badges: [],
      location: "Palangka Raya",
      title: "IT Support & Web Developer Intern",
      logoUrl: "/universitas palangka raya_.png",
      start: "August 2023",
      end: "October 2023",
      description:
        "Diagnosed and troubleshot basic hardware and software issues to support daily office activities.\n- Developed a cooperative information website using PHP, CodeIgniter 4, and MySQL.\n- Checked website functionality and layouts across browsers and devices.",
    },
  ],
  education: [
    {
      school: "Universitas Palangka Raya",
      href: "",
      degree: "Bachelor's Degree in Informatics Engineering",
      logoUrl: "/universitas palangka raya_.png",
      start: "September 2020",
      end: "June 2024",
    },
  ],
  projects: [
    {
      title: "Koperasi Upaya UPR Information System",
      href: "https://github.com/Res-ha/Koperasi-Berbasis-Website",
      dates: "",
      active: true,
      description:
        "Developed a responsive information system using PHP, CodeIgniter, and MySQL to provide organizational profile, services, announcements, and membership information. Performed functional and cross-device/browser testing.",
      technologies: [
        "PHP",
        "CodeIgniter",
        "MySQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Res-ha/Koperasi-Berbasis-Website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Live PL Tracker",
      href: "https://live-sports-tracker-zeta.vercel.app/",
      dates: "",
      active: true,
      description:
        "Developed a web application using Next.js, TypeScript, and Tailwind CSS with API integration, match and club pages, responsive testing, and Vercel deployment.",
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://live-sports-tracker-zeta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Res-ha/live-sports-tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SQL Data Analysis Portfolio",
      href: "https://github.com/Res-ha/sql-data-analysis-portfolio",
      dates: "",
      active: true,
      description:
        "Completed multiple SQL projects involving sales and customer data analysis using JOINs, subqueries, aggregate functions, GROUP BY, HAVING, CASE, and time-based analysis.",
      technologies: [
        "SQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Res-ha/sql-data-analysis-portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Python Data Engineering & ML Portfolio",
      href: "https://github.com/Res-ha/python-data-engineering-ml-portfolio",
      dates: "",
      active: true,
      description:
        "Portfolio project covering data engineering and machine learning pipelines, including data preprocessing, model training, and deployment.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "MLflow",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Res-ha/python-data-engineering-ml-portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Sentiment Analysis Berbasis Aspek & Topic Modeling",
      href: "https://github.com/Res-ha/Analisis-Sentiment-Berbasis-Aspek-Topic-Modellling",
      dates: "",
      active: true,
      description:
        "Developed an aspect-based sentiment analysis system using topic modeling techniques to analyze customer feedback and reviews.",
      technologies: [
        "Python",
        "NLTK",
        "Gensim",
        "scikit-learn",
        "Topic Modeling",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Res-ha/Analisis-Sentiment-Berbasis-Aspek-Topic-Modellling",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  certifications: [
    {
      title: "Data Analyst Python Track",
      date: "August 2026",
      issuer: "DQLab",
      url: "/certification/Data Analyst Python Track/dql_logo.png",
    },
    {
      title: "Database - SQL Track",
      date: "August 2026",
      issuer: "DQLab",
      url: "/certification/Database - SQL Track/dql_logo.png",
    },
    {
      title: "Deep Learning Track",
      date: "August 2026",
      issuer: "DQLab",
      url: "/certification/Deep Learning Track/dql_logo.png",
    },
    {
      title: "Digitalent - Big Data using Python",
      date: "September 2024",
      issuer: "Digitalent",
      url: "/certification/Digitalent/digitalent_logo.png",
    },
    {
      title: "Data Analytics Essentials",
      date: "July 2024",
      issuer: "Cisco Networking Academy",
      url: "/certification/Cisco Academy/data-analytics-essentials.png",
    },
    {
      title: "Cybersecurity Essentials",
      date: "November 2022",
      issuer: "Cisco Networking Academy",
      url: "/certification/Cisco Academy/cybersecurity-essentials.png",
    },
  ],
} as const;
