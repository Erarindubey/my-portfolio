import { Project } from "@/types";

export interface CapabilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tools: string[];
  year: number;
}

export const projects: Project[] = [
  {
    slug: "relu-ai",
    title: "Relu AI Admin",
    description: "A React and Django-powered AI administrative interface featuring map visualizations, query management, and JWT-secured API interactions.",
    contribution: "Developed the internal administrative portal utilizing a Vite/React frontend and a Django REST Framework backend.",
    keyWork: [
      "Configured Django 5.1 backend with Psycopg3 and SimpleJWT.",
      "Integrated TanStack Query for robust data fetching.",
      "Implemented D3 Maps Atlas for geographic data visualization.",
      "Built resilient Vite frontend with Base-UI components."
    ],
    category: "Internal Admin Platform",
    tags: ["React", "Vite", "Django", "PostgreSQL", "TanStack Query"],
    featured: true,
    year: 2024,
    role: "Full-Stack Engineer",
  },
  {
    slug: "security-hrms",
    title: "Security HRMS",
    description: "An enterprise-grade workforce management system designed for security operations, featuring strict role-based access control and shift tracking.",
    contribution: "Implemented the comprehensive authorization architecture (Phases 0 through 1H) for managing sites, shifts, and employees.",
    keyWork: [
      "Engineered multi-tiered Role-Based Access Control (RBAC).",
      "Built strict portal boundary security and panic alert modules.",
      "Developed shift scheduling and patrol tracking foundations.",
      "Cleared all static security review requirements for Phase 1."
    ],
    category: "Enterprise Workforce Platform",
    tags: ["Role-Based Access", "Shift Scheduling", "Tracking & Reports", "Security Operations"],
    featured: true,
    year: 2024,
    role: "Systems Authorization Engineer",
  },
  {
    slug: "treadmill-tracker",
    title: "Treadmill Tracker",
    description: "A verified treadmill leaderboard mobile app utilizing React Native, Expo, and Supabase for real-time runner rankings.",
    contribution: "Contributed to a premium dark-mode iOS/Android mobile application and engineered its backend challenge-seeding service.",
    keyWork: [
      "Integrated Google and Apple mobile authentication.",
      "Developed Node.js/TSX backend scripts for database seeding.",
      "Configured Supabase client for live leaderboard synchronization.",
      "Built native navigation flows using React Navigation."
    ],
    category: "Fitness Leaderboard App",
    tags: ["React Native", "Expo", "Supabase", "Node.js", "Authentication"],
    featured: false,
    year: 2024,
    role: "Mobile & Backend Engineer",
  },
  {
    slug: "fursa-live",
    title: "Fursa Mobile",
    description: "A cross-platform React Native networking application incorporating LiveKit WebRTC for real-time communications and Supabase for structured data.",
    contribution: "Refactored and optimized a complex React Native Expo codebase, focusing on database rules, geographic triggers, and list performance.",
    keyWork: [
      "Implemented robust Supabase RLS policies and Chat Folders.",
      "Optimized React Native FlatLists for performance.",
      "Integrated LiveKit WebRTC for live video/audio networking.",
      "Fixed Supabase geocoding and notification database triggers."
    ],
    category: "Social Networking App",
    tags: ["React Native", "Expo", "LiveKit WebRTC", "Supabase", "Optimization"],
    featured: false,
    year: 2023,
    role: "Mobile Optimization Engineer",
  },
  {
    slug: "pivot-guard",
    title: "Pivot Security Mobile",
    description: "The field-operations mobile counterpart to Security HRMS, built in Flutter for cross-platform incident logging and guard tracking.",
    contribution: "Developed the Flutter-based frontend application designed specifically for security guards deployed in the field.",
    keyWork: [
      "Configured GoRouter for reliable deep linking and app routing.",
      "Integrated Riverpod for structured application state management.",
      "Implemented flutter_dotenv for environment-specific configurations.",
      "Built responsive layouts leveraging device_preview."
    ],
    category: "Mobile Field Application",
    tags: ["Flutter", "Dart", "GoRouter", "Riverpod"],
    featured: false,
    year: 2023,
    role: "Flutter Engineer",
  },
  {
    slug: "kreditcall-loan-lending",
    title: "KreditCall",
    description: "A secure fintech mobile application built in Flutter, featuring strict mTLS certificate validation for encrypted backend communications.",
    contribution: "Migrated the KreditCall mobile client to Flutter 3.41, establishing a secure Android/iOS update path and implementing critical mTLS security.",
    keyWork: [
      "Engineered mTLS security layer using client.p12 certificates.",
      "Automated build pipelines using Azure Pipelines (Android/iOS).",
      "Migrated global state management to Riverpod 3.",
      "Configured Dio for authenticated secure API interactions."
    ],
    category: "Fintech Mobile Application",
    tags: ["Flutter", "Riverpod", "mTLS Security", "Azure Pipelines", "Dio"],
    featured: false,
    year: 2024,
    role: "Flutter Migration & Security Engineer",
  },
];

export const automationCapability: CapabilityItem = {
  id: "automation-lead-gen-data",
  title: "Automation, Lead Generation & Data Engineering",
  category: "Capability / Engineering Practice",
  description: "Engineering resilient data extraction pipelines, targeted web scrapers, and autonomous n8n workflows that eliminate operational bottlenecks and fuel business growth.",
  highlights: [
    "High-throughput web scraping with headless browser clusters and anti-detection evasion",
    "Intelligent lead enrichment pipelines aggregating distributed data points",
    "Automated orchestration using n8n for continuous CRM, database, and webhook synchronizations",
    "Structured data cleaning, schema validation, and warehousing readiness",
  ],
  tools: ["n8n", "Puppeteer / Playwright", "Python Scrapers", "Data Pipelines", "Webhook Orchestration"],
  year: 2024,
};
