export interface BlogSection {
  id: string;
  heading: string;
  body: string[];
  code?: { lang: string; snippet: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  authorBio: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  sections: BlogSection[];
  relatedSlugs: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: "building-hackportal",
    title: "How We Built HackPortal in 3 Weeks",
    excerpt: "From napkin sketch to production: a behind-the-scenes look at how our team shipped an open-source hackathon platform in 21 days — what worked, what didn't, and what we'd do differently.",
    category: "DEVLOG",
    author: "Alex Chen",
    authorRole: "President · DevSoc",
    authorBio: "3rd year CS student, open source enthusiast, and fullstack developer. Leads the HackPortal project team.",
    date: "12 MAR 2025",
    readTime: "8 min read",
    featured: true,
    tags: ["next.js", "open source", "hackathon"],
    sections: [
      {
        id: "the-problem",
        heading: "The Problem We Were Solving",
        body: [
          "Every year DevSoc ran a hackathon and every year we cobbled together a registration system from Google Forms, a spreadsheet for teams, and a separate judging spreadsheet. It worked — barely — but it meant the organisers were spending the first six hours of the event manually matching people into teams and emailing PDFs to judges.",
          "We needed something purpose-built: a single platform where participants register, form teams, submit projects, and judges score submissions — all in real time. Nothing off-the-shelf quite fit a small university society's needs and budget, so we decided to build our own and open-source it so other societies could use it too.",
        ],
      },
      {
        id: "choosing-the-stack",
        heading: "Choosing the Stack",
        body: [
          "We had three weeks and a team of four. That meant every architectural decision needed to minimise friction. We landed on Next.js 14 with the App Router for the frontend — our team already knew React, the file-based routing removes a class of decisions, and server components meant we could avoid over-fetching on the dashboard views.",
          "For the backend we chose Supabase: it gave us a PostgreSQL database, real-time subscriptions (critical for the live leaderboard), row-level security, and auth — all with a generous free tier. The alternative was building a REST API from scratch, which would have consumed a week on its own.",
        ],
        code: {
          lang: "typescript",
          snippet: `// Registration form type — strict from day one
interface RegistrationPayload {
  firstName: string;
  lastName: string;
  email: string;
  university: string;
  yearOfStudy: 1 | 2 | 3 | 4 | "postgrad";
  dietaryRequirements?: string;
  teamCode?: string; // optional — can join later
}`,
        },
      },
      {
        id: "week-one",
        heading: "Week 1: Scaffolding & Auth",
        body: [
          "Week one was all about foundations. We set up the monorepo, configured CI with GitHub Actions (lint, typecheck, Playwright smoke tests), and got auth working with Supabase's email magic link. Magic links were a deliberate choice — no passwords to forget, no OAuth complexity, and participants only need to log in once.",
          "The biggest time sink was row-level security policies. Getting Supabase RLS right is non-trivial when you have three user roles (participant, organiser, judge) and complex team-level permissions. We ended up pairing on it for a full afternoon, but the investment paid off — we never had a security incident or data leak across the entire event.",
        ],
      },
      {
        id: "week-two",
        heading: "Week 2: Registration & Teams",
        body: [
          "Week two built the core participant journey: registration form, email confirmation, team creation, and the team invite system. The trickiest part was team invites — we wanted participants to be able to share a six-character code and have their friends join instantly without a second email confirmation round.",
          "We shipped a real-time team roster using Supabase's PostgreSQL changes subscription. When someone joins your team, everyone already on the team sees the roster update live. It sounds simple but it was the feature participants talked about most on the day — small UX touches like that matter more than you expect.",
        ],
      },
      {
        id: "week-three",
        heading: "Week 3: Judging & Leaderboard",
        body: [
          "The judging interface was week three's main task. Judges needed to score projects across four criteria, leave notes, and see an aggregated ranking. We built a simple scoring rubric component and a live leaderboard that updated as judges submitted scores. Twenty-four hours before the event, we found a bug where the average score calculation broke on ties — fixed it with a tense midnight PR.",
          "Deployment was on Vercel with a Supabase project in the same region. Zero-downtime deploys meant we could push patches during the event without participants noticing. We ended up pushing three small fixes during the 48 hours — that ability to iterate in production was invaluable.",
        ],
        code: {
          lang: "typescript",
          snippet: `// Aggregating judge scores — the bug was here
function aggregateScores(scores: JudgeScore[]): number {
  if (scores.length === 0) return 0;
  const total = scores.reduce((sum, s) =>
    sum + s.innovation + s.technical + s.design + s.impact, 0
  );
  // Was missing division by criteria count — fixed
  return total / (scores.length * 4);
}`,
        },
      },
      {
        id: "what-we-shipped",
        heading: "What We Actually Shipped",
        body: [
          "In 21 days we shipped: participant registration with email confirmation, team creation and invite codes, a project submission form with GitHub link and demo URL, a judge scoring interface with four criteria, a live public leaderboard, and an organiser dashboard for managing participants and triggering announcements.",
          "The event ran with 200 registrations, 47 teams, and 12 judges. The platform handled the load without breaking a sweat. Post-event survey: 94% of participants rated the registration experience as 'smooth' or 'very smooth'. That's the number we're most proud of.",
        ],
      },
      {
        id: "lessons-learned",
        heading: "Lessons Learned",
        body: [
          "Three things we'd do differently. First: wire up auth in day one, not day three. Everything downstream depends on knowing who the user is and what role they have — delaying auth created awkward refactors in week two. Second: write integration tests for the real-time features earlier. Unit tests alone don't catch subscription race conditions.",
          "Third, and most importantly: talk to your users before you build. We assumed judges wanted a complex rubric — they actually wanted a simple 1–10 score and a text field. We over-engineered the scoring UI and had to simplify it in week three. The best features came from a 20-minute conversation, not a whiteboard session.",
        ],
      },
    ],
    relatedSlugs: ["contributing-to-oss", "typescript-tips-2025"],
  },
  {
    slug: "typescript-tips-2025",
    title: "10 TypeScript Patterns We Actually Use",
    excerpt: "Forget theoretical type gymnastics. These are the patterns our dev team reaches for every single day when building real production apps.",
    category: "TUTORIAL",
    author: "Maya Patel",
    authorRole: "Frontend Lead · DevSoc",
    authorBio: "2nd year CS student specialising in frontend. Leads the DevSoc App project team and runs the web development workshop series.",
    date: "5 MAR 2025",
    readTime: "6 min read",
    featured: false,
    tags: ["typescript", "web dev", "patterns"],
    sections: [
      {
        id: "discriminated-unions",
        heading: "1. Discriminated Unions for State Machines",
        body: [
          "When you have a value that can be in one of several mutually exclusive states, reach for a discriminated union rather than a nullable mess. The compiler will tell you when you've forgotten to handle a case.",
        ],
        code: {
          lang: "typescript",
          snippet: `type FetchState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

// Now TypeScript narrows correctly in each branch
function render<T>(state: FetchState<T>) {
  if (state.status === "success") {
    return state.data; // typed as T ✓
  }
}`,
        },
      },
      {
        id: "const-assertion",
        heading: "2. Const Assertions for Config Objects",
        body: [
          "When you have a configuration object and you want its values to be literal types rather than broadened primitives, use `as const`. This is especially useful for route definitions and event names.",
        ],
        code: {
          lang: "typescript",
          snippet: `const ROUTES = {
  home: "/",
  events: "/events",
  blog: "/blog",
} as const;

type Route = typeof ROUTES[keyof typeof ROUTES];
// Route = "/" | "/events" | "/blog"`,
        },
      },
      {
        id: "satisfies-operator",
        heading: "3. The satisfies Operator",
        body: [
          "Introduced in TypeScript 4.9, `satisfies` lets you validate that a value matches a type while keeping the narrowest possible type inference. Use it when you want type safety without losing specificity.",
        ],
        code: {
          lang: "typescript",
          snippet: `type NavItem = { href: string; label: string };

const nav = {
  home: { href: "/", label: "Home" },
  blog: { href: "/blog", label: "Blog" },
} satisfies Record<string, NavItem>;

// nav.home.href is still typed as "/" not string ✓`,
        },
      },
      {
        id: "template-literals",
        heading: "4. Template Literal Types",
        body: [
          "Template literal types let you construct union types from string patterns. They're great for event names, CSS property keys, and anything else with a predictable naming convention.",
        ],
        code: {
          lang: "typescript",
          snippet: `type Direction = "top" | "right" | "bottom" | "left";
type Padding = \`padding\${Capitalize<Direction>}\`;
// "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft"

type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<"click">; // "onClick"`,
        },
      },
      {
        id: "generic-constraints",
        heading: "5. Generic Constraints with keyof",
        body: [
          "When you write a generic function that operates on object properties, use `keyof` constraints to get type-safe property access. This is the pattern behind most utility types in TypeScript's standard library.",
        ],
        code: {
          lang: "typescript",
          snippet: `function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as Pick<T, K>);
}

const result = pick({ a: 1, b: "hello", c: true }, ["a", "b"]);
// { a: number; b: string } ✓`,
        },
      },
    ],
    relatedSlugs: ["building-hackportal", "devops-for-students"],
  },
  {
    slug: "contributing-to-oss",
    title: "Your First Open Source Contribution — A Practical Guide",
    excerpt: "Open source feels intimidating from the outside. Here's the exact process we use to onboard new DevSoc members into their first PR — from choosing an issue to getting merged.",
    category: "OPEN SOURCE",
    author: "Dev Kapoor",
    authorRole: "Open Source Lead · DevSoc",
    authorBio: "Final year software engineering student with 50+ merged PRs across 12 open source projects. Runs DevSoc's OSS sprint program.",
    date: "28 FEB 2025",
    readTime: "5 min read",
    featured: false,
    tags: ["git", "oss", "beginners"],
    sections: [
      {
        id: "picking-a-project",
        heading: "Picking the Right First Project",
        body: [
          "The worst thing you can do is randomly pick a massive project and try to fix something complex. Start with a project you actually use. When you use it daily, you'll notice rough edges naturally — missing docs, confusing error messages, small UX annoyances. Those are your contribution opportunities.",
          "Look for projects with a `good first issue` or `help wanted` label on GitHub. These are explicitly flagged by maintainers as appropriate entry points. Our own projects — HackPortal, OpenLMS — always have a backlog of labelled issues specifically for new contributors.",
        ],
      },
      {
        id: "finding-an-issue",
        heading: "Finding an Issue You Can Actually Fix",
        body: [
          "Read the issue thoroughly. Read the comments. Check if there's already a PR open for it — nothing worse than spending a week on something that's already been solved. If there's no activity for a few days, leave a comment saying you'd like to work on it. Maintainers appreciate the heads up and it prevents duplicate work.",
          "Don't be afraid of issues that seem slightly above your current level. The best way to learn is to attempt the fix, get stuck, and ask a specific question in the issue. 'I tried X, got error Y, here's my code' is always welcome. 'How do I fix this?' is not.",
        ],
      },
      {
        id: "making-the-pr",
        heading: "Making Your First PR",
        body: [
          "Fork the repo, create a branch with a descriptive name (`fix/registration-email-typo`, not `patch-1`), and make the smallest change that solves the problem. Resist the urge to clean up unrelated code — reviewers will ask you to split it out and now you have two PRs to manage.",
          "Write a PR description that explains what the problem was, what your solution is, and how you tested it. Include a screenshot if it's a visual change. Maintainers review dozens of PRs — make theirs easy and they'll prioritise yours.",
        ],
      },
      {
        id: "after-the-merge",
        heading: "After the Merge",
        body: [
          "Congratulations — your code ships to every user of that project. Now do it again. The second contribution is always easier than the first because you understand the codebase and the maintainer knows you write clean PRs. Most of our team's best OSS relationships started with a one-line typo fix.",
          "Add it to your CV immediately. 'Contributed to [project name] — [brief description]' is a genuine differentiator when you're applying for internships. Hiring managers who care about open source will ask about it in interviews, and you'll have a real story to tell.",
        ],
      },
    ],
    relatedSlugs: ["why-open-source", "building-hackportal"],
  },
  {
    slug: "tech-interview-prep",
    title: "How DevSoc Members Land Tech Internships",
    excerpt: "Data from 40+ member internship cycles: which companies recruit from universities, what they actually test, and how building society projects gives you an edge in interviews.",
    category: "CAREER",
    author: "Priya Sharma",
    authorRole: "Vice President · DevSoc",
    authorBio: "3rd year software engineering student, incoming SWE intern at a top-tier tech company. Leads DevSoc's career mentorship program.",
    date: "20 FEB 2025",
    readTime: "10 min read",
    featured: false,
    tags: ["internships", "interviews", "career"],
    sections: [
      {
        id: "what-the-data-shows",
        heading: "What the Data Actually Shows",
        body: [
          "Over three years we've tracked internship outcomes for DevSoc members who went through our career prep program. The headline number: 73% of members who completed at least one society project and attended two or more career events landed a technical internship within six months of applying. The number for members who didn't engage with projects: 31%.",
          "The gap isn't explained by intelligence or degree grade — it's almost entirely explained by having concrete work to talk about. Interviewers at every company we surveyed said the same thing: they want to hear about something you built, not what you learned in lectures.",
        ],
      },
      {
        id: "the-timeline",
        heading: "The Preparation Timeline",
        body: [
          "Applications for summer internships at large tech companies open in August and September — seven to nine months before the internship starts. Most students don't realise this and apply in February when half the spots are gone. Set a calendar reminder right now.",
          "Our recommended timeline: start a society project or personal project 3 months before applications open. Spend the month before applications doing LeetCode medium questions (aim for 40–60 solved). Apply to 15–20 companies, not 3. Referrals matter — ask your DevSoc network.",
        ],
      },
      {
        id: "the-projects-advantage",
        heading: "Why Projects Give You an Edge",
        body: [
          "Every technical interview has a behavioural component. 'Tell me about a time you had to debug a complex issue.' 'Describe a project you're proud of.' 'How did you handle a technical disagreement with a teammate?' If your only experience is coursework, your answers will be generic. If you've shipped something in a team under pressure, your answers will be specific and credible.",
          "DevSoc project teams deliberately simulate real engineering environments: code review, pull requests, planning sprints, managing scope. When you interview and say 'in my last team we used a feature flag to roll out gradually and caught an edge case before it hit all users', that lands differently than 'in my algorithms assignment I...'.",
        ],
      },
      {
        id: "behavioral-rounds",
        heading: "Nailing the Behavioural Round",
        body: [
          "Use the STAR format but keep it tight: Situation (one sentence), Task (one sentence), Action (two to three sentences on what YOU specifically did), Result (one sentence with a number if possible). Practice out loud, not just in your head. Record yourself once — the gap between how you think you sound and how you actually sound is always humbling.",
          "Prepare five strong STAR stories and you can answer 80% of behavioural questions. The stories that work best: shipped something under a deadline, debugged something that stumped the team, disagreed with a technical decision and handled it well, helped an onboarding teammate, and a project you're genuinely proud of.",
        ],
      },
    ],
    relatedSlugs: ["contributing-to-oss", "why-open-source"],
  },
  {
    slug: "react-vs-vue-2025",
    title: "React vs Vue in 2025 — An Honest Take",
    excerpt: "We've shipped projects in both. Here's an opinionated comparison based on actual developer experience, not benchmarks from a blog post with an agenda.",
    category: "OPINION",
    author: "Liam Nguyen",
    authorRole: "Mobile Lead · DevSoc",
    authorBio: "Final year CS student, mobile developer, and occasional frontend contrarian.",
    date: "14 FEB 2025",
    readTime: "7 min read",
    featured: false,
    tags: ["react", "vue", "frontend"],
    sections: [
      {
        id: "the-honest-answer",
        heading: "The Honest Answer: It Depends Less Than You Think",
        body: [
          "Both React and Vue will let you ship a good product. The real differentiators are your team's existing knowledge and your hiring constraints. If your team knows React, use React. If you're a solo developer or a small team with no strong preference, Vue's gentler learning curve makes it the faster path to shipping.",
          "That said, the ecosystem gap is real. React's library ecosystem is larger, its community is bigger, and more job descriptions ask for it. If you're a student building projects to get hired, React is the pragmatic choice in 2025.",
        ],
      },
      {
        id: "where-vue-wins",
        heading: "Where Vue Actually Wins",
        body: [
          "Vue's single-file components are genuinely better than React's JSX for developers coming from an HTML background. The template syntax is more readable for people who think in HTML first. Vue's built-in state management with Pinia is more approachable than Redux or Zustand for beginners.",
          "For internal tools, admin dashboards, and content-heavy sites where a large team doesn't need to onboard quickly, Vue is a joy. We used it for our internal event management dashboard and the team was productive from day one.",
        ],
      },
      {
        id: "our-verdict",
        heading: "Our Verdict for DevSoc Projects",
        body: [
          "We default to React for all public-facing projects because it maximises the number of members who can contribute and it mirrors what most of them will use in internships. We don't have a strong religious opinion — we've shipped good products in both.",
          "The wrong choice is spending two weeks arguing about the framework instead of building the thing. Pick one, commit, ship. The framework matters far less than the quality of your architecture and the consistency of your team.",
        ],
      },
    ],
    relatedSlugs: ["typescript-tips-2025", "building-hackportal"],
  },
  {
    slug: "postgres-for-beginners",
    title: "PostgreSQL for Students Who Only Know MySQL",
    excerpt: "Coming from a database course that only covered MySQL? Here's everything you need to be productive with PostgreSQL in your first DevSoc project team.",
    category: "TUTORIAL",
    author: "Chris Wong",
    authorRole: "Backend Lead · DevSoc",
    authorBio: "3rd year CS student, backend developer, and database nerd. Maintains UniTrack's database architecture.",
    date: "6 FEB 2025",
    readTime: "9 min read",
    featured: false,
    tags: ["postgresql", "databases", "backend"],
    sections: [
      {
        id: "key-differences",
        heading: "The Key Differences That Will Bite You",
        body: [
          "Most MySQL habits transfer fine to PostgreSQL, but a few will cause confusing bugs. The biggest: PostgreSQL is case-sensitive for identifiers by default. If you CREATE TABLE User, you must always quote it as `\"User\"` in queries. The convention in Postgres is snake_case for everything — `user`, `created_at`, `team_member`.",
          "String quoting is different too. PostgreSQL uses single quotes for string literals and double quotes for identifiers. MySQL lets you use either interchangeably. Writing `WHERE name = \"alex\"` in Postgres will fail with a confusing error about a missing column named `alex`.",
        ],
      },
      {
        id: "postgres-superpowers",
        heading: "Postgres Features You'll Actually Use",
        body: [
          "The JSONB column type is genuinely useful for semi-structured data that doesn't warrant a separate table. We use it in UniTrack to store flexible metadata on student profiles without schema migrations every time the product team has a new idea.",
          "Common Table Expressions (CTEs) with `WITH` make complex queries readable. Instead of nesting five subqueries, you write a CTE that's almost readable prose. Once you learn them you'll wonder how you survived without them.",
        ],
        code: {
          lang: "sql",
          snippet: `-- CTE to find team members with more than 2 submissions
WITH active_teams AS (
  SELECT team_id, COUNT(*) as submission_count
  FROM submissions
  GROUP BY team_id
  HAVING COUNT(*) > 2
)
SELECT u.email, t.name
FROM users u
JOIN team_members tm ON u.id = tm.user_id
JOIN active_teams at ON tm.team_id = at.team_id
JOIN teams t ON t.id = at.team_id;`,
        },
      },
      {
        id: "migrations",
        heading: "Managing Migrations",
        body: [
          "Never alter a production database by hand. Use a migration tool — we use Supabase's built-in migrations, but Flyway and Liquibase are solid choices for self-hosted setups. Every schema change goes through a migration file that's committed to Git alongside the application code.",
          "Write your migrations to be reversible where possible. A `down` migration that can undo a `up` migration has saved us twice in production. The five minutes it takes to write the reverse migration is worth it every single time.",
        ],
      },
    ],
    relatedSlugs: ["building-hackportal", "devops-for-students"],
  },
  {
    slug: "devops-for-students",
    title: "DevOps Without the Overwhelm",
    excerpt: "CI/CD, containers, cloud — it sounds like a lot. But for a student side project or society app, you only need a small fraction of it. Here's what matters and in what order.",
    category: "TUTORIAL",
    author: "Aisha Okonkwo",
    authorRole: "DevOps Lead · DevSoc",
    authorBio: "3rd year CS student, cloud infrastructure enthusiast, and the person responsible for DevSoc's GitHub Actions pipelines.",
    date: "28 JAN 2025",
    readTime: "8 min read",
    featured: false,
    tags: ["devops", "docker", "github actions"],
    sections: [
      {
        id: "start-here",
        heading: "Start With Automated Tests and CI",
        body: [
          "Before containers, before Kubernetes, before anything else: set up a GitHub Actions workflow that runs your tests on every push. This single change will prevent more bugs from reaching production than any other DevOps investment. It takes 20 minutes to set up and pays dividends for the entire life of the project.",
          "A basic workflow: checkout the code, install dependencies, run linting, run type checking, run tests. If any step fails, the PR is blocked. No configuration, no infrastructure — just a YAML file in `.github/workflows/`. Start here.",
        ],
        code: {
          lang: "yaml",
          snippet: `name: CI
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm run test`,
        },
      },
      {
        id: "docker-basics",
        heading: "Docker: When You Actually Need It",
        body: [
          "You don't need Docker for a Next.js app deployed to Vercel. You do need it when your app has infrastructure dependencies that are hard to install locally (PostgreSQL, Redis, a specific version of a CLI tool), or when you're deploying to a VPS rather than a managed platform.",
          "The mental model: a Dockerfile describes an environment, a container is a running instance of that environment, and Docker Compose lets you define multiple containers that work together. For most student projects, `docker-compose up` to spin up a local database is the only Docker you'll need.",
        ],
      },
      {
        id: "deployment",
        heading: "Deployment: The Simplest Path",
        body: [
          "Vercel for frontend (Next.js, React). Railway or Render for backend APIs and databases. Both have free tiers that are generous enough for society projects. Connect your GitHub repo, push to main, and it deploys automatically. That's your entire CD pipeline.",
          "Add secrets as environment variables in the platform's dashboard, never in your code. Check the deployment logs when something breaks. Understand that your free-tier database goes to sleep after 15 minutes of inactivity — not a bug, a cost optimisation you need to work around in development.",
        ],
      },
    ],
    relatedSlugs: ["building-hackportal", "postgres-for-beginners"],
  },
  {
    slug: "why-open-source",
    title: "Why Every CS Student Should Contribute to Open Source",
    excerpt: "The portfolio argument is real, but it's not even the best reason. Open source teaches you something no lecture or tutorial can: how professional software is actually written.",
    category: "OPINION",
    author: "Jordan Lee",
    authorRole: "Secretary · DevSoc",
    authorBio: "2nd year CS student, open source advocate, and maintainer of two small npm packages.",
    date: "15 JAN 2025",
    readTime: "4 min read",
    featured: false,
    tags: ["oss", "students", "growth"],
    sections: [
      {
        id: "beyond-the-portfolio",
        heading: "Beyond the Portfolio Argument",
        body: [
          "Yes, open source contributions improve your CV. But that framing undersells the real benefit. The thing you can't get from tutorials, courses, or even university projects is exposure to code written by professionals at scale over years — the kind of code that has survived edge cases you haven't imagined yet.",
          "Reading a mature open source codebase is like doing a reading comprehension exercise where the answer key is the git history. Why is this abstracted? Because it wasn't always. Why is there a comment saying 'do not change this'? Because someone changed it and broke production in 2019. That context is priceless.",
        ],
      },
      {
        id: "what-you-learn",
        heading: "What You Actually Learn",
        body: [
          "Code review. Not the kind where your lecturer says 'good work', but the kind where a maintainer explains why your naming is confusing, why your abstraction leaks, and why the approach you thought was clever is actually a known anti-pattern. It stings the first time. It makes you permanently better.",
          "You also learn how distributed teams collaborate: async communication, descriptive commit messages, issues as long-form technical discussions. These are skills that the classroom cannot teach because they require a real asynchronous team.",
        ],
      },
      {
        id: "just-start",
        heading: "Just Start — The Bar is Lower Than You Think",
        body: [
          "The most common reason students don't contribute is the belief that their code isn't good enough. It isn't yet — and that's fine. Nobody's first PR is impressive. The bar for a first contribution is: does it solve a documented problem without breaking anything else? That's it.",
          "Start with documentation fixes. They don't require understanding the whole codebase, they're always needed, and maintainers are often more grateful for them than for code contributions. A clear explanation of a confusing API can help thousands of developers. Your first PR doesn't have to be heroic.",
        ],
      },
    ],
    relatedSlugs: ["contributing-to-oss", "tech-interview-prep"],
  },
];

export default blogPosts;
