import React from "react";
import { ProjectItem } from "./ProjectItem";
import content from "@/content.json";

export const ProjectsSection = () => {
  const projects = content.projects;

  return (
    <section id="projects" className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-20 text-center text-pink-500">
          My Projects
        </h2>
        <div className="max-w-[1300px] mx-auto">
          <div className="space-y-40">
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
