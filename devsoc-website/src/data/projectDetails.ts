export interface ProjectSection {
  id: string;
  heading: string;
  body: string;
}

export interface ProjectDetail {
  slug: string;
  imgSrc: string;
  vectorSrc: string;
  title: string;
  subtitle: string;
  tags: string[];
  status: string;
  github: string;
  live?: string;
  desc: string;
  overview: string;
  sections: ProjectSection[];
  stats: { label: string; value: string }[];
  stackDetail: { category: string; items: string[] }[];
  team: { name: string; role: string }[];
  relatedSlugs: string[];
}

const projectDetails: ProjectDetail[] = [
  {
    slug: "unitrack",
    imgSrc: "/assets/section1/Img1.png",
    vectorSrc: "/assets/section1/vector1.png",
    title: "UNITRACK",
    subtitle: "Student academic management platform",
    tags: ["full-stack", "react", "node.js", "postgresql"],
    status: "ACTIVE",
    github: "https://github.com/devsoc-iitkgp/unitrack",
    live: "https://unitrack.devsoc.app",
    desc: "A comprehensive university student tracking platform that centralises academic progress, enrollment records, and advisor communication.",
    overview: "UniTrack was born out of a real problem: university students and advisors were managing academic progress across a patchwork of spreadsheets, emails, and separate faculty portals. UniTrack brings everything into one place — course enrollment, grade tracking, advisor notes, and milestone alerts — with a clean interface that actually gets used.",
    sections: [
      {
        id: "architecture",
        heading: "Architecture Overview",
        body: "UniTrack follows a standard three-tier architecture: a React frontend served via a CDN, a Node.js REST API layer, and a PostgreSQL database for persistent storage. The API is containerised with Docker and deployed on Railway. All inter-service communication is over HTTPS with JWT-based authentication. The frontend communicates with the API through a typed client generated from an OpenAPI spec — this has been the single biggest contributor to frontend/backend sync quality.",
      },
      {
        id: "key-features",
        heading: "Key Features",
        body: "The course enrollment module lets students search the full course catalogue, filter by department and semester, and enroll with advisor approval. The academic timeline view gives students a visual semester-by-semester map of their degree progress. Advisors have a dashboard showing all their advisees' current status, flagging anyone who is behind on units or hasn't booked a check-in. Email notifications are sent for grade updates, enrollment confirmations, and upcoming advisor deadlines.",
      },
      {
        id: "data-model",
        heading: "Data Model",
        body: "The core entities are Student, Course, Enrollment, and AdvisorRelationship. Enrollments have a status field (pending, approved, active, completed, withdrawn) and a grade field that's populated at semester end. We use PostgreSQL row-level security so advisors can only read their own advisees' data. A separate read-replica handles the analytics queries that power the admin dashboard without impacting transactional performance.",
      },
      {
        id: "contributing",
        heading: "How to Contribute",
        body: "Clone the repo and run `docker-compose up` to spin up the database and API locally. The frontend runs with `npm run dev` on port 3000. All open issues are labelled — look for `good first issue` to start. We do code review on all PRs and aim to review within 48 hours. Check CONTRIBUTING.md for our branch naming convention and commit message format before you open your first PR.",
      },
    ],
    stats: [
      { label: "Contributors", value: "18" },
      { label: "Commits", value: "340+" },
      { label: "Stars", value: "124" },
      { label: "Open issues", value: "12" },
    ],
    stackDetail: [
      { category: "Frontend", items: ["React 18", "TypeScript", "TanStack Query", "React Router v6"] },
      { category: "Backend", items: ["Node.js", "Express", "TypeScript", "Prisma ORM"] },
      { category: "Database", items: ["PostgreSQL 15", "Redis (caching)", "Row-Level Security"] },
      { category: "Infrastructure", items: ["Docker", "Railway", "Vercel", "GitHub Actions"] },
    ],
    team: [
      { name: "Alex Chen", role: "Project Lead" },
      { name: "Chris Wong", role: "Backend Lead" },
      { name: "Jordan Lee", role: "Frontend" },
      { name: "Sam Rivera", role: "Database" },
    ],
    relatedSlugs: ["hackportal", "openlms"],
  },
  {
    slug: "hackportal",
    imgSrc: "/assets/section1/Img2.png",
    vectorSrc: "/assets/section1/vector2.png",
    title: "HACKPORTAL",
    subtitle: "Open-source hackathon management system",
    tags: ["hackathon", "next.js", "typescript", "open source"],
    status: "OPEN SOURCE",
    github: "https://github.com/devsoc-iitkgp/hackportal",
    live: "https://hackportal.devsoc.app",
    desc: "An open-source hackathon registration and judging platform powering events at universities across the country.",
    overview: "HackPortal handles the full lifecycle of a hackathon: participant registration, team formation, project submission, judge scoring, and live leaderboard. It's built to be self-hosted by any student organisation — deploy to Vercel, connect a Supabase project, and you're running in under an hour. Over a dozen universities have used it to run their own events.",
    sections: [
      {
        id: "registration-flow",
        heading: "Participant Registration Flow",
        body: "Participants register with email magic link authentication — no passwords to forget. After verifying their email, they complete a profile form covering their skills, dietary requirements, and T-shirt size. They can either create a new team (generating a six-character invite code) or join an existing team using a code from a friend. The team dashboard shows real-time roster updates when new members join.",
      },
      {
        id: "project-submission",
        heading: "Project Submission",
        body: "At submission time, each team fills out a form with their project title, description, GitHub repository URL, demo URL, and the track they're competing in. Submissions are timestamped and locked at the deadline — organisers set the close time in the admin dashboard and the UI automatically updates to show the countdown. Late submissions require an organiser override.",
      },
      {
        id: "judging-system",
        heading: "Judging System",
        body: "Judges are assigned a subset of teams to review, reducing cognitive load and preventing conflicts of interest. Each judge scores on four criteria (innovation, technical execution, design, impact) with a 1–10 scale and an optional notes field. The leaderboard aggregates scores in real time as judges submit. Organisers can flag submissions for re-review and override scores with a full audit trail.",
      },
      {
        id: "self-hosting",
        heading: "Self-Hosting Guide",
        body: "Fork the repo on GitHub. Create a Supabase project and run the migration file in the `supabase/migrations/` directory. Set the environment variables in a `.env.local` file (Supabase URL, anon key, service role key). Deploy to Vercel with one click. Customise the event name, dates, and branding in `config/event.ts`. Full setup instructions are in the README — we've had teams up and running in 45 minutes.",
      },
    ],
    stats: [
      { label: "Contributors", value: "24" },
      { label: "Commits", value: "510+" },
      { label: "Stars", value: "312" },
      { label: "Open issues", value: "8" },
    ],
    stackDetail: [
      { category: "Frontend", items: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend", items: ["Supabase", "PostgreSQL", "Row-Level Security", "Edge Functions"] },
      { category: "Auth", items: ["Magic Link (Supabase Auth)", "JWT", "Role-based access"] },
      { category: "Infrastructure", items: ["Vercel", "Supabase", "GitHub Actions", "Playwright"] },
    ],
    team: [
      { name: "Alex Chen", role: "Project Lead" },
      { name: "Maya Patel", role: "Frontend Lead" },
      { name: "Dev Kapoor", role: "Open Source Lead" },
      { name: "Aisha Okonkwo", role: "DevOps" },
    ],
    relatedSlugs: ["unitrack", "devsoc-app"],
  },
  {
    slug: "devsoc-app",
    imgSrc: "/assets/section1/Img3.png",
    vectorSrc: "/assets/section1/vector3.png",
    title: "DEVSOC APP",
    subtitle: "Official DevSoc mobile companion app",
    tags: ["mobile", "react native", "expo", "firebase"],
    status: "ACTIVE",
    github: "https://github.com/devsoc-iitkgp/devsoc-app",
    desc: "The official DevSoc companion app. Browse events, discover projects, connect with members, and stay up to date.",
    overview: "The DevSoc App puts everything a member needs in their pocket: the events calendar, project showcases, member directory, and society announcements — all with push notifications so you never miss a workshop registration window. Built with React Native and Expo for a single codebase that targets both iOS and Android.",
    sections: [
      {
        id: "app-architecture",
        heading: "App Architecture",
        body: "The app is structured around five main screens: Home feed, Events, Projects, Members, and Profile. Navigation uses Expo Router's file-based system, which mirrors the Next.js App Router pattern our web team already knows. State management is a combination of React Query for server state (events, projects) and Zustand for local UI state (filters, preferences). Firebase Firestore is the primary database, with Firebase Auth handling member authentication.",
      },
      {
        id: "notifications",
        heading: "Push Notifications",
        body: "Push notifications are handled through Expo Notifications with an Expo push token registered at app launch. The notification service is a small Node.js server that listens to Firestore changes (new events, announcements) and fans out push notifications to relevant subscribers. Members can configure their notification preferences per category — events, project updates, announcements — in the Profile screen.",
      },
      {
        id: "offline-support",
        heading: "Offline Support",
        body: "The events and projects screens cache their last-known data with React Query's persistence plugin, so core content is readable without a network connection. The cache is invalidated on app foreground with a stale-time of 5 minutes. The member directory is not cached due to privacy considerations — it requires an active session to load.",
      },
      {
        id: "contributing",
        heading: "Contributing to the App",
        body: "Install Expo CLI and Expo Go on your phone. Clone the repo, run `npm install`, then `npx expo start` to launch the dev server. Scan the QR code with Expo Go and the app runs on your device with hot reload. Most contributions don't require understanding the full Firebase setup — UI components and screens can be developed with mock data defined in `__mocks__/`.",
      },
    ],
    stats: [
      { label: "Contributors", value: "11" },
      { label: "Commits", value: "280+" },
      { label: "App rating", value: "4.6★" },
      { label: "Active users", value: "200+" },
    ],
    stackDetail: [
      { category: "Mobile", items: ["React Native", "Expo SDK 51", "Expo Router", "TypeScript"] },
      { category: "Backend", items: ["Firebase Firestore", "Firebase Auth", "Firebase Storage"] },
      { category: "State", items: ["React Query", "Zustand", "Expo Notifications"] },
      { category: "Tooling", items: ["EAS Build", "EAS Submit", "GitHub Actions"] },
    ],
    team: [
      { name: "Liam Nguyen", role: "Mobile Lead" },
      { name: "Sofia Martinez", role: "Design Lead" },
      { name: "Jordan Lee", role: "Frontend" },
      { name: "Sam Rivera", role: "Backend" },
    ],
    relatedSlugs: ["hackportal", "openlms"],
  },
  {
    slug: "openlms",
    imgSrc: "/assets/section1/Img4.png",
    vectorSrc: "/assets/section1/vector4.png",
    title: "OPENLMS",
    subtitle: "Open-source learning management system for workshops",
    tags: ["education", "django", "python", "open source"],
    status: "OPEN SOURCE",
    github: "https://github.com/devsoc-iitkgp/openlms",
    desc: "A lightweight, open-source learning management system designed for student-run workshops and bootcamps.",
    overview: "OpenLMS is the platform that powers DevSoc's workshop series. Facilitators can create courses with structured modules, exercises, and quizzes. Students track their progress, submit exercises, and get feedback from facilitators. It's intentionally simple — we stripped away every LMS feature that doesn't matter for a 6-week bootcamp — and built to be extended by any developer who wants to add functionality.",
    sections: [
      {
        id: "course-structure",
        heading: "Course Structure",
        body: "A Course contains a sequence of Modules. Each Module contains a mix of Lessons (markdown content with embedded code snippets), Exercises (code challenges with a test harness), and Quizzes (multiple-choice assessments). Students progress through modules linearly by default, but facilitators can unlock modules out of order for self-paced tracks. Module completion is tracked in the database and surfaced as a progress bar on the student dashboard.",
      },
      {
        id: "exercise-runner",
        heading: "The Exercise Runner",
        body: "Exercises run in a sandboxed environment using Django's subprocess module with strict resource limits (CPU time, memory, no network). Students write code in a Monaco editor embedded in the page, click 'Run Tests', and see results within two seconds. The test harness is defined by the facilitator in Python using pytest — the same format our CS students already use in coursework, reducing friction for first-time contributors.",
      },
      {
        id: "extending",
        heading: "Extending OpenLMS",
        body: "OpenLMS is intentionally modular. The Django app is structured as a collection of independent apps (courses, exercises, quizzes, progress) with clean internal APIs. Adding a new content type means creating a new Django app, registering it in settings, and adding a template — no core code changes required. We've had contributors add peer review, a discussion forum, and a certificate generator without touching the original codebase.",
      },
      {
        id: "deployment",
        heading: "Running Your Own Instance",
        body: "OpenLMS is deployed as a Docker container. The `docker-compose.yml` in the repo spins up the Django app, a PostgreSQL database, and an Nginx reverse proxy. Set your environment variables (secret key, database URL, email credentials), run `docker-compose up -d`, and the platform is running. We include a seed command (`python manage.py seed_demo`) that populates a demo course so you can see the full experience immediately.",
      },
    ],
    stats: [
      { label: "Contributors", value: "15" },
      { label: "Commits", value: "420+" },
      { label: "Stars", value: "198" },
      { label: "Courses run", value: "12" },
    ],
    stackDetail: [
      { category: "Backend", items: ["Django 4.2", "Python 3.12", "Django REST Framework", "Celery"] },
      { category: "Frontend", items: ["HTMX", "Alpine.js", "Monaco Editor", "Tailwind CSS"] },
      { category: "Database", items: ["PostgreSQL", "Redis (task queue)", "Django ORM"] },
      { category: "Infrastructure", items: ["Docker", "Nginx", "GitHub Actions", "DigitalOcean"] },
    ],
    team: [
      { name: "Dev Kapoor", role: "Open Source Lead" },
      { name: "Chris Wong", role: "Backend" },
      { name: "Aisha Okonkwo", role: "DevOps" },
      { name: "Maya Patel", role: "Frontend" },
    ],
    relatedSlugs: ["unitrack", "hackportal"],
  },
];

export default projectDetails;
