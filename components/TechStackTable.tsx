import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import content from "@/content.json";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiSanity,
  SiMui,
  SiFirebase,
  SiWebpack,
  SiPrisma,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const iconMap = {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiSanity,
  SiMui,
  SiFirebase,
  SiWebpack,
  SiPrisma,
  TbBrandNextjs,
};

export const TechStackTable = () => {
  const techStack = content.techStack;

  return (
    <section
      id="tech"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Tech Stack & Expertise
        </h2>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px] text-pink-500">
                Technology
              </TableHead>
              <TableHead className="text-pink-500">Skill Level</TableHead>
              <TableHead className="text-pink-500">Experience</TableHead>
              <TableHead className="text-pink-500">Last Used</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {techStack.map((tech) => {
              const IconComponent = iconMap[tech.icon];
              return (
                <TableRow
                  key={tech.name}
                  className="hover:bg-gray-800/50 transition-colors duration-200"
                >
                  <TableCell className="font-medium text-gray-200">
                    <div className="flex items-center space-x-2">
                      {IconComponent && (
                        <IconComponent className="text-2xl text-pink-500" />
                      )}
                      <span>{tech.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="default"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    >
                      {tech.skillLevel}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {tech.experience}
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {tech.lastUsed}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
