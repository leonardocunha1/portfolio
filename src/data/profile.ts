export const profile = {
  name: "Leonardo Cunha",
  role: "QA Engineer & Full-Stack Developer",
  shortBio:
    "QA Engineer com background dev full-stack. Automatizo testes, construo aplicações e levo qualidade para a engenharia.",
  location: "Franca, SP — Brasil",
  email: "leo.francasp97@gmail.com",
  workEmail: "leonardo.cunha@q2ingressos.com.br",
  phone: "+55 (16) 98875-3083",
  github: "https://github.com/leonardocunha1",
  linkedin: "https://www.linkedin.com/in/leonardo-cunha-8a6170263",
};

export const aboutParagraphs = [
  "Sou formado em Engenharia Civil pela UNIFRAN, mas foi na tecnologia que encontrei minha paixão, vocação e direcionei minha carreira. A migração para TI aconteceu de forma objetiva, motivada pelo interesse em lógica, sistemas, gosto por tecnologia e resolução de problemas em escala.",
  "Atualmente atuo como QA Engineer na Q2 Ingressos, com um perfil híbrido entre qualidade e desenvolvimento. Trabalho com automação de testes E2E utilizando Cypress e Playwright, testes e validações de APIs com Postman, análise e validação de dados via SQL, além do desenvolvimento e manutenção de plataformas internas em .NET e React.",
];

export type SkillCategory = {
  label: string;
  description: string;
  accent: "primary" | "accent" | "emerald";
  skills: Array<{
    name: string;
    level?: "expert" | "advanced" | "intermediate";
  }>;
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Qualidade & Automação",
    description:
      "Garantindo cobertura, prevenindo regressões e observando produção.",
    accent: "primary",
    skills: [
      { name: "Cypress", level: "advanced" },
      { name: "Playwright", level: "advanced" },
      { name: "Postman / API", level: "advanced" },
      { name: "Black-box & White-box", level: "advanced" },
      { name: "Zephyr / Jira", level: "advanced" },
      { name: "Datadog", level: "intermediate" },
    ],
  },
  {
    label: "Desenvolvimento",
    description:
      "Construindo dashboards, ferramentas internas e produtos completos.",
    accent: "accent",
    skills: [
      { name: "C# / .NET", level: "advanced" },
      { name: "Node.js", level: "advanced" },
      { name: "React", level: "advanced" },
      { name: "Next.js", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "TailwindCSS", level: "advanced" },
    ],
  },
  {
    label: "Dados & Arquitetura",
    description:
      "Modelagem, validação e princípios sólidos por trás do código.",
    accent: "emerald",
    skills: [
      { name: "PostgreSQL", level: "advanced" },
      { name: "SQL Server", level: "advanced" },
      { name: "Prisma / ORMs", level: "intermediate" },
      { name: "SOLID", level: "advanced" },
      { name: "DDD", level: "advanced" },
      { name: "Clean Architecture", level: "advanced" },
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Q2 Ingressos",
    role: "QA Engineer Jr",
    period: "fev / 2026 — atual",
    current: true,
    bullets: [
      "Criação e expansão de suítes E2E com Cypress e Playwright.",
      "Implementação de agentes de IA para geração inteligente de massa de dados, reduzindo o tempo de setup de testes.",
      "Automação de testes de API REST com Postman e validação de integridade de dados via SQL.",
      "Participação em Code Review antecipando falhas arquiteturais e de lógica.",
      "Monitoramento em produção via Datadog, acelerando diagnóstico e MTTR.",
      "Desenvolvimento de plataformas internas em .NET e React para controle de ingressos e eventos.",
    ],
  },
  {
    company: "Q2 Ingressos",
    role: "Analista de Suporte TI Pleno / Líder de Time",
    period: "ago / 2025 — fev / 2026",
    bullets: [
      "Liderança da equipe de suporte técnico com treinamentos e ritos.",
      "Ponte direta com Produto e Engenharia para priorização e refinamento de bugs críticos.",
    ],
  },
  {
    company: "Q2 Ingressos",
    role: "Analista de Suporte TI Jr",
    period: "jan / 2025 — ago / 2025",
    bullets: [
      "Investigação e diagnóstico N3 de incidentes de alta criticidade.",
      "Operações em PostgreSQL e SQL Server para triagem e correção de inconsistências.",
      "Dashboards e ferramentas internas em React, Next, .NET e Node.",
      "Rastreabilidade de requisições no Datadog reduzindo MTTR.",
    ],
  },
  {
    company: "NewSun Energy",
    role: "Full Stack Developer Jr",
    period: "out / 2024 — jan / 2025",
    bullets: [
      "Desenvolvimento e testes integrados em CRM interno com React, Node e Prisma.",
    ],
  },
  {
    company: "NewSun Energy",
    role: "Estagiário de TI",
    period: "set / 2024 — out / 2024",
    bullets: [
      "Desenvolvimento de softwares e rotinas corporativas via Google Workspace e Bitrix24.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  metrics?: Array<{ label: string; value: string }>;
  links: { github?: string; live?: string; case?: string };
  featured?: boolean;
  image?: string;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    name: "Q2 Suporte",
    tagline: "plataforma interna · operações & RBAC",
    description:
      "Plataforma interna da Q2 Ingressos para operações de eventos. Centraliza verificação de divergências financeiras (ingressos, bar, mesas), ciclo de vida de ingressos (cancelamento, reimpressão, ativação), gestão de POS/catraca, bots de automação via Selenium, RBAC granular por roles/permissões e exports em PDF/Excel.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "React Query",
      "Zustand",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "SQL Server",
      "Selenium",
    ],
    links: {},
    featured: true,
    image: "/q2support-project/img-2.png",
    gallery: [
      "/q2support-project/img-1.png",
      "/q2support-project/img-3.png",
      "/q2support-project/img-4.png",
    ],
  },
  {
    name: "Sacada Premium",
    tagline: "landing page B2B · envidraçamento premium",
    description:
      "Redesign do site institucional da Sacada Premium, fabricante do sistema Skyline® de envidraçamento de sacadas sem roldanas. Foco em vidraçarias, construtoras e arquitetos, com captura de leads, SEO técnico e estética premium inspirada em referências como Lumon, Solarlux e Linear.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Motion",
      "React Hook Form",
      "Zod",
      "Resend",
    ],
    links: { live: "https://sacadapremium-lp.vercel.app/" },
    image: "/projeto-sacada.png",
  },
  {
    name: "Residential Expenses",
    tagline: "estudo .NET · finanças residenciais",
    description:
      "Aplicação full-stack para gerenciar finanças de uma residência compartilhada — moradores registram receitas e despesas, categorizam transações e acompanham o balanço individual e coletivo via dashboard com gráficos. Backend em Clean Architecture (.NET 9 + EF Core + PostgreSQL + JWT) e frontend tipado com hooks gerados a partir da OpenAPI via Orval.",
    stack: [
      ".NET 9",
      "ASP.NET Core",
      "EF Core",
      "PostgreSQL",
      "JWT",
      "Clean Architecture",
      "React",
      "TypeScript",
      "TanStack Query",
      "Recharts",
      "Orval",
    ],
    links: { github: "https://github.com/leonardocunha1/residential-expenses" },
    image: "/residential-expenses/004.png",
    gallery: [
      "/residential-expenses/001.png",
      "/residential-expenses/002.png",
      "/residential-expenses/003.png",
      "/residential-expenses/005.png",
      "/residential-expenses/006.png",
      "/residential-expenses/007.png",
      "/residential-expenses/008.png",
    ],
  },
  {
    name: "El Bigodón Barber Shop",
    tagline: "sistema full-stack · agendamento, pontos & cupons",
    description:
      "Plataforma completa para barbearia com três perfis de acesso — cliente, profissional e admin. Inclui wizard de agendamento em 4 etapas com verificação de disponibilidade em tempo real e draft auto-salvo, sistema de pontos bônus, cupons (percentual, fixo, free) com escopo configurável, dashboards com métricas (faturamento, ticket médio, top serviços), CRUD de profissionais/serviços/horários/feriados, autenticação JWT com refresh token httpOnly e proteção de rotas por role. Backend em Clean Architecture (use-cases isolados, repository pattern, 50+ classes de erro customizadas) com hooks React Query gerados automaticamente do Swagger via Orval.",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Vitest",
      "Orval",
    ],
    links: { github: "https://github.com/leonardocunha1/web-site-barbearia" },
    image: "/el-bigodon-barbearia/home-hero.png",
    gallery: [
      "/el-bigodon-barbearia/home-full.png",
      "/el-bigodon-barbearia/booking-step4.png",
      "/el-bigodon-barbearia/client-dashboard.png",
      "/el-bigodon-barbearia/professional-overview.png",
      "/el-bigodon-barbearia/admin-overview.png",
      "/el-bigodon-barbearia/admin-coupons.png",
      "/el-bigodon-barbearia/professional-business-hours.png",
      "/el-bigodon-barbearia/login.png",
    ],
  },
];

export const education = [
  {
    school: "UNIVESP",
    degree: "Graduação em Tecnologia da Informação",
    period: "EAD · conclusão dez / 2027",
  },
  {
    school: "UNIFRAN",
    degree: "Bacharelado em Engenharia Civil",
    period: "Concluído dez / 2020",
  },
];
