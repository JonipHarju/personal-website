import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClientAnimationWrapper } from "./ClientAnimationWrapper";

export const ProjectItem = ({ project }) => {
  return (
    <ClientAnimationWrapper>
      <div className="relative z-10 mb-20">
        <h3 className="text-3xl font-bold mb-4 text-pink-500">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex items-center mb-4 text-pink-300">
          <Calendar className="mr-2 h-5 w-5" />
          <span>Project Duration: {project.duration}</span>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-semibold mb-2 text-pink-400">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-pink-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        {/* {project.testimonial && (
          <div className="mb-4">
            <h4 className="text-xl font-semibold mb-2 text-pink-400">
              Testimonial:
            </h4>
            <blockquote className="border-l-4 border-pink-500 pl-4 italic text-gray-300">
              "{project.testimonial.text}"
              <footer className="mt-2 text-gray-400 not-italic">
                - {project.testimonial.author}, {project.testimonial.title}
              </footer>
            </blockquote>
          </div>
        )} */}

        {project.liveLink ? (
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="flex items-center justify-center border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black transition-colors duration-300"
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink className="mr-2 h-4 w-4" />{" "}
                {/* Add a margin to separate icon and text */}
                Preview
              </a>
            </Button>
          </div>
        ) : null}
      </div>
    </ClientAnimationWrapper>
  );
};
