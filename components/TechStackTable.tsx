// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import content from "@/content.json"; // Importing the content from content.json
// import { IconType } from "react-icons";

// // Function to load icons dynamically based on the icon name
// const loadIcon = async (iconName: string): Promise<IconType | null> => {
//   try {
//     if (iconName.startsWith("Fa")) {
//       const iconModule = await import("react-icons/fa");
//       return iconModule[iconName as keyof typeof iconModule] as IconType;
//     } else if (iconName.startsWith("Si")) {
//       const iconModule = await import("react-icons/si");
//       return iconModule[iconName as keyof typeof iconModule] as IconType;
//     } else if (iconName.startsWith("Tb")) {
//       const iconModule = await import("react-icons/tb");
//       return iconModule[iconName as keyof typeof iconModule] as IconType;
//     }
//     return null;
//   } catch (error) {
//     console.error(`Icon ${iconName} could not be loaded`, error);
//     return null;
//   }
// };

// // Function to map and load icons for the tech stack
// const loadIconsForTechStack = async (): Promise<
//   Record<string, IconType | null>
// > => {
//   const iconsMap: Record<string, IconType | null> = {};
//   for (const tech of content.techStack) {
//     const iconName = tech.icon;
//     const IconComponent = await loadIcon(iconName);
//     iconsMap[iconName] = IconComponent;
//   }
//   return iconsMap;
// };

// export const TechStackTable = async () => {
//   // Load icons before rendering the component
//   const icons = await loadIconsForTechStack();

//   // Tech Stack Content Data from content.json
//   const techStackContent = content.techStack;

//   return (
//     <section
//       id="tech"
//       className="py-20 bg-gradient-to-b from-gray-900 to-black"
//     >
//       <div className="container mx-auto px-4 sm:px-0 w-[100%] sm:w-[90%] max-w-[1300px]">
//         <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
//           Tech Stack & Expertise
//         </h2>

//         {/* Desktop View */}
//         <div className="hidden md:block">
//           <Table>
//             <TableHeader>
//               <TableRow className="border-b border-hsl(300, 100%, 50%)">
//                 <TableHead className="text-pink-500">Technology</TableHead>
//                 <TableHead className="text-pink-500">Skill Level</TableHead>
//                 <TableHead className="text-pink-500">Experience</TableHead>
//                 <TableHead className="text-pink-500">How I Used It</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {techStackContent.map((tech, index) => {
//                 const IconComponent = icons[tech.icon]; // Retrieve dynamically loaded icon
//                 return (
//                   <TableRow
//                     key={tech.name}
//                     className="border-b border-hsl(300, 100%, 50%)"
//                   >
//                     <TableCell className="font-medium text-gray-200">
//                       <div className="flex items-center space-x-2">
//                         {IconComponent && (
//                           <IconComponent className="text-2xl text-pink-500" />
//                         )}
//                         <span>{tech.name}</span>
//                       </div>
//                     </TableCell>
//                     <TableCell>
//                       <Badge
//                         variant="default"
//                         className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
//                       >
//                         {tech.skillLevel}
//                       </Badge>
//                     </TableCell>
//                     <TableCell className="text-gray-300 text-center">
//                       {tech.experience}
//                     </TableCell>
//                     {tech.howUsed ? (
//                       <TableCell className="text-gray-300">
//                         <p className="whitespace-normal break-words">
//                           {tech.howUsed}
//                         </p>
//                       </TableCell>
//                     ) : null}
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </div>

//         {/* Mobile View */}
//         <div className="md:hidden space-y-8">
//           {techStackContent.map((tech, index) => {
//             const IconComponent = icons[tech.icon]; // Retrieve dynamically loaded icon for mobile
//             return (
//               <div
//                 key={tech.name}
//                 className="space-y-4 border-b border-hsl(300, 100%, 50%) pb-4"
//               >
//                 {/* Row with logo and tech name */}
//                 <div className="flex justify-between">
//                   <div className="flex flex-col items-start justify-between">
//                     {IconComponent && (
//                       <IconComponent className="text-4xl text-pink-500" />
//                     )}
//                     <div className="font-medium text-gray-200">
//                       <span>{tech.name}</span>
//                     </div>
//                   </div>

//                   {/* Skill Level and Experience */}
//                   <div className="flex flex-col items-start justify-between">
//                     <p className="text-sm text-pink-500">Skill Level</p>
//                     <p className="font-medium text-gray-200 break-all">
//                       {tech.skillLevel}
//                     </p>
//                   </div>
//                   <div className="flex flex-col items-start justify-between">
//                     <p className="text-sm text-pink-500">Experience</p>
//                     <p className="font-medium text-gray-200 ml-2">
//                       {tech.experience}
//                     </p>
//                   </div>
//                 </div>

//                 {/* How I Used It */}
//                 {tech.howUsed ? (
//                   <div className="p-4 bg-gray-800 rounded-lg">
//                     <p className="text-pink-500 font-semibold">
//                       How I Used It:
//                     </p>
//                     <p className="mt-2 text-gray-300 leading-relaxed">
//                       {tech.howUsed}
//                     </p>
//                   </div>
//                 ) : null}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";
import { FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiReact,
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
  SiNodedotjs,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import content from "@/content.json"; // Importing the content from content.json

// Predefined icon mapping
const iconMap = {
  SiReact,
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
  SiNodedotjs,
};

export const TechStackTable = () => {
  // Tech Stack Content Data from content.json
  const techStackContent = content.techStack;

  return (
    <section
      id="tech"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4 sm:px-0 w-[100%] sm:w-[90%] max-w-[1300px]">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Tech Stack & Expertise
        </h2>

        {/* Desktop View */}
        <div className="hidden md:block">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-hsl(300, 100%, 50%)">
                <TableHead className="text-pink-500">Technology</TableHead>
                <TableHead className="text-pink-500">Skill Level</TableHead>
                <TableHead className="text-pink-500">Experience</TableHead>
                <TableHead className="text-pink-500">How I Used It</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {techStackContent.map((tech, index) => {
                const IconComponent = iconMap[tech.icon]; // Retrieve icon from the static map
                return (
                  <TableRow
                    key={tech.name}
                    className="border-b border-hsl(300, 100%, 50%)"
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
                    <TableCell className="text-gray-300 text-center">
                      {tech.experience}
                    </TableCell>
                    {tech.howUsed ? (
                      <TableCell className="text-gray-300">
                        <p className="whitespace-normal break-words">
                          {tech.howUsed}
                        </p>
                      </TableCell>
                    ) : null}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {techStackContent.map((tech, index) => {
            const IconComponent = iconMap[tech.icon]; // Retrieve icon for mobile
            return (
              <div
                key={tech.name}
                className="space-y-4 border-b border-hsl(300, 100%, 50%) pb-4"
              >
                {/* Row with logo and tech name */}
                <div className="flex justify-between">
                  <div className="flex flex-col items-start justify-between">
                    {IconComponent && (
                      <IconComponent className="text-4xl text-pink-500" />
                    )}
                    <div className="font-medium text-gray-200">
                      <span>{tech.name}</span>
                    </div>
                  </div>

                  {/* Skill Level and Experience */}
                  <div className="flex flex-col items-start justify-between">
                    <p className="text-sm text-pink-500">Skill Level</p>
                    <p className="font-medium text-gray-200 break-all">
                      {tech.skillLevel}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-between">
                    <p className="text-sm text-pink-500">Experience</p>
                    <p className="font-medium text-gray-200 ml-2">
                      {tech.experience}
                    </p>
                  </div>
                </div>

                {/* How I Used It */}
                {tech.howUsed ? (
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <p className="text-pink-500 font-semibold">
                      How I Used It:
                    </p>
                    <p className="mt-2 text-gray-300 leading-relaxed">
                      {tech.howUsed}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
