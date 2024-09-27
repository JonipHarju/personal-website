"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ChevronDown,
  Code,
  Rocket,
  Cpu,
  ExternalLink,
  Send,
  Calendar,
  X,
  CheckCircle,
} from "lucide-react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiSanity,
  SiMui,
  SiFirebase,
  SiWebpack,
  SiPrisma,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const technologies = [
  { name: "React", Icon: FaReact, color: "text-blue-500" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", Icon: FaJs, color: "text-yellow-400" },
  { name: "HTML", Icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", Icon: FaCss3Alt, color: "text-blue-400" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-500" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-600" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-blue-400" },
];

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Developed a comprehensive full-stack e-commerce solution that revolutionizes online shopping experiences. This platform features real-time inventory management, ensuring customers always see up-to-date product availability. Implemented a secure payment processing system integrated with Stripe, providing a smooth and trustworthy checkout process. The platform also includes a dynamic product recommendation engine, personalized user dashboards, and an intuitive admin panel for easy store management.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "Redux",
      "Jest",
      "Docker",
    ],
    liveLink: "https://ecommerce-platform.example.com",
    duration: "6 months",
    testimonial: {
      text: "John's work on our e-commerce platform was exceptional. His attention to detail and problem-solving skills significantly improved our user experience and sales conversion rates.",
      author: "Jane Smith",
      title: "CEO, TechRetail Inc.",
    },
  },
  {
    title: "AI-Powered Content Generator",
    description:
      "Created an innovative AI-driven tool that transforms content creation for websites and social media. Leveraging advanced machine learning algorithms, this application generates high-quality, SEO-optimized content tailored to specific industries and target audiences. Features include customizable content templates, sentiment analysis for tone adjustment, plagiarism checking, and integration with popular content management systems. The tool significantly reduces content creation time while maintaining quality and relevance.",
    technologies: [
      "Python",
      "TensorFlow",
      "React",
      "FastAPI",
      "PostgreSQL",
      "NLTK",
      "Hugging Face Transformers",
      "Docker",
    ],
    liveLink: "https://ai-content-generator.example.com",
    duration: "8 months",
    testimonial: {
      text: "The AI content generator John developed has revolutionized our content creation process. It's intuitive, efficient, and produces remarkably human-like text.",
      author: "Mike Johnson",
      title: "Content Director, AI Innovations",
    },
  },
  {
    title: "Smart Home IoT Dashboard",
    description:
      "Engineered a cutting-edge IoT dashboard for smart home device management and monitoring. This responsive web application provides real-time data visualization and control for various smart home devices. Key features include customizable widgets for different device types, energy consumption tracking, automated routines based on user behavior, and integration with popular voice assistants. The dashboard also incorporates machine learning for predictive maintenance alerts and energy-saving recommendations.",
    technologies: [
      "React",
      "Socket.io",
      "D3.js",
      "Node.js",
      "MongoDB",
      "MQTT",
      "TensorFlow.js",
      "AWS IoT",
    ],
    liveLink: "https://smart-home-dashboard.example.com",
    duration: "7 months",
    testimonial: {
      text: "John's IoT dashboard is a game-changer for our smart home product line. The intuitive interface and real-time capabilities have significantly enhanced our user engagement.",
      author: "Sarah Lee",
      title: "Product Manager, SmartLiving Tech",
    },
  },
];

const techStack = [
  {
    name: "React",
    icon: FaReact,
    skillLevel: "Advanced",
    experience: "3 years",
    lastUsed: "Current",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    skillLevel: "Advanced",
    experience: "2 years",
    lastUsed: "Current",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    skillLevel: "Advanced",
    experience: "2 years",
    lastUsed: "Current",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    skillLevel: "Advanced",
    experience: "4 years",
    lastUsed: "Current",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    skillLevel: "Advanced",
    experience: "4 years",
    lastUsed: "Current",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    skillLevel: "Advanced",
    experience: "4 years",
    lastUsed: "Current",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    skillLevel: "Intermediate",
    experience: "1.5 years",
    lastUsed: "Current",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    skillLevel: "Intermediate",
    experience: "2 years",
    lastUsed: "Current",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    skillLevel: "Intermediate",
    experience: "2 years",
    lastUsed: "Current",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    skillLevel: "Intermediate",
    experience: "1.5 years",
    lastUsed: "3 months ago",
  },
  {
    name: "Sanity.io",
    icon: SiSanity,
    skillLevel: "Intermediate",
    experience: "1 year",
    lastUsed: "Current",
  },
  {
    name: "Material-UI",
    icon: SiMui,
    skillLevel: "Intermediate",
    experience: "2 years",
    lastUsed: "6 months ago",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    skillLevel: "Intermediate",
    experience: "1.5 years",
    lastUsed: "Current",
  },
  {
    name: "Webpack",
    icon: SiWebpack,
    skillLevel: "Basic",
    experience: "1 year",
    lastUsed: "6 months ago",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    skillLevel: "Basic",
    experience: "6 months",
    lastUsed: "Current",
  },
  {
    name: "NextAuth",
    icon: TbBrandNextjs,
    skillLevel: "Intermediate",
    experience: "1 year",
    lastUsed: "Current",
  },
];

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech", href: "#tech" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
    >
      <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-800">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                <span className="text-sm">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

const ProjectItem = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);
  const opacitySpring = useSpring(opacity, springConfig);
  const scaleSpring = useSpring(scale, springConfig);

  return (
    <motion.div
      ref={ref}
      className="mb-20 relative"
      style={{
        y: ySpring,
        opacity: opacitySpring,
        scale: scaleSpring,
      }}
    >
      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-4 text-pink-500 inline-block">
          <span className="relative">
            {project.title}
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-1 bg-pink-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </span>
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
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className="px-3 py-1 bg-gray-800 text-pink-300 rounded-full text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: techIndex * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
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
        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black transition-colors duration-300"
            asChild
          >
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-purple-400">
              Contact Information
            </h3>
            <p className="text-gray-300">
              Feel free to reach out to me through any of these platforms. I'm
              always excited to connect with fellow developers, potential
              clients, or anyone interested in tech!
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>github.com/johndoe</span>
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/johndoe</span>
              </a>
              <a
                href="mailto:john.doe@example.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>john.doe@example.com</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-300">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="mt-1 bg-gray-800 border-gray-700 text-white focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="mt-1 bg-gray-800 border-gray-700 text-white focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="mt-1 bg-gray-800 border-gray-700 text-white focus:ring-purple-500 focus:border-purple-500"
                  rows={4}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Stylish Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full relative overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="absolute -top-10 -right-10 bg-gradient-to-br from-purple-500 to-pink-500 w-40 h-40 rounded-full opacity-20"
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <CheckCircle className="text-green-400 w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-300 text-center">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="mt-6"
              >
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  Close
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default function Component() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <ParticleBackground />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            John Doe
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl text-gray-300 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Full-Stack Developer & Tech Enthusiast
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Turning ideas into reality through code and innovation
          </motion.p>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Discover My Journey
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <ChevronDown className="h-8 w-8 text-white" />
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative w-48 h-48 mx-auto md:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse"></div>
                <img
                  src="/placeholder.svg?height=192&width=192"
                  alt="John Doe"
                  className="rounded-full w-full h-full object-cover border-4 border-white relative z-10"
                />
              </div>
              <p className="text-gray-300 text-lg">
                As a passionate full-stack developer with 3 years of hands-on
                experience, I'm on a mission to push the boundaries of web
                development. My journey in tech is fueled by curiosity and a
                relentless drive to learn and create innovative solutions.
              </p>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-purple-400">
                  Contact Information
                </h3>
                <ul className="space-y-1 text-gray-300">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:john.doe@example.com"
                      className="text-pink-500 hover:underline"
                    >
                      john.doe@example.com
                    </a>
                  </li>
                  <li>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                      href="https://linkedin.com/in/johndoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:underline"
                    >
                      linkedin.com/in/johndoe
                    </a>
                  </li>
                  <li>
                    <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/johndoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:underline"
                    >
                      github.com/johndoe
                    </a>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  <a
                    href="/john-doe-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Download Resume (PDF)
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
                  <Code className="mr-2 h-6 w-6" /> Background & Expertise
                </h3>
                <p className="text-gray-300">
                  With a strong foundation in computer science and 3 years of
                  professional experience, I specialize in building scalable web
                  applications using modern technologies. My expertise spans
                  both front-end and back-end development, allowing me to create
                  comprehensive solutions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-pink-400 flex items-center">
                  <Rocket className="mr-2 h-6 w-6" /> Goals
                </h3>
                <p className="text-gray-300">
                  My goal is to contribute to innovative projects that push the
                  boundaries of what's possible in web development. I'm
                  constantly expanding my skill set and staying up-to-date with
                  the latest industry trends to deliver cutting-edge solutions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-red-400 flex items-center">
                  <Cpu className="mr-2 h-6 w-6" /> Current Focus
                </h3>
                <p className="text-gray-300">
                  I'm currently diving deep into advanced state management
                  techniques and serverless architectures. My recent projects
                  have allowed me to explore the intricacies of real-time data
                  processing and progressive web applications.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black min-h-screen">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold mb-20 text-center text-pink-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <div className="max-w-[1300px] mx-auto">
            <div className="space-y-40">
              {projects.map((project, index) => (
                <ProjectItem key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Tech Stack & Expertise
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
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
                {techStack.map((tech) => (
                  <TableRow
                    key={tech.name}
                    className="hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    <TableCell className="font-medium text-gray-200">
                      <div className="flex items-center space-x-2">
                        <tech.icon className="text-2xl text-pink-500" />
                        <span>{tech.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          tech.skillLevel === "Advanced"
                            ? "default"
                            : tech.skillLevel === "Intermediate"
                            ? "secondary"
                            : "outline"
                        }
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
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
