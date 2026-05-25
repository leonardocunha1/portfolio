import type { ComponentType, SVGProps } from "react";
import {
  SiCypress,
  SiPostman,
  SiDatadog,
  SiDotnet,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiJira,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import {
  Database,
  ClipboardCheck,
  Box,
  Layers3,
  Boxes,
  TestTube2,
} from "lucide-react";

type IconComp = ComponentType<SVGProps<SVGSVGElement>>;

const map: Record<string, IconComp> = {
  Cypress: SiCypress,
  Playwright: TestTube2,
  Postman: SiPostman,
  Datadog: SiDatadog,
  ".NET": SiDotnet,
  "C# / .NET": TbBrandCSharp,
  "C#": TbBrandCSharp,
  "Node.js": SiNodedotjs,
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  PostgreSQL: SiPostgresql,
  "SQL Server": Database,
  Prisma: SiPrisma,
  "Prisma / ORMs": SiPrisma,
  Jira: SiJira,
  "Zephyr / Jira": SiJira,
  Zephyr: ClipboardCheck,
  "Postman / API": SiPostman,
  "Black-box & White-box": ClipboardCheck,
  SOLID: Box,
  DDD: Layers3,
  "Clean Architecture": Boxes,
};

export function getTechIcon(name: string): IconComp | null {
  return map[name] ?? null;
}
