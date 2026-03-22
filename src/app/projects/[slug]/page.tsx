import { notFound } from "next/navigation";
import projectDetails from "@/data/projectDetails";
import ProjectDetailView from "@/components/sections/ProjectDetailView";

export function generateStaticParams() {
  return projectDetails.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetailView project={project!} allProjects={projectDetails} />;
}
