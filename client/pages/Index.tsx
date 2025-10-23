import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Facebook, Code2, Zap, Gamepad2, Brain } from "lucide-react";
import { Header } from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block mb-4">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    ĐHS
                  </span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Đặng Hải Sơn
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-2">
            Full Stack Developer & Technology Enthusiast
          </p>

          <p className="text-sm sm:text-base text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about building modern web applications and exploring cutting-edge AI technologies
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 font-medium transition">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="text-white border-gray-600 hover:bg-slate-800 rounded-lg px-6 py-2 font-medium transition">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.facebook.com/hai.son.847156"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-blue-400 transition"
              title="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-blue-400 transition"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#contact"
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-red-400 transition"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Background</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a developer studying at{" "}
                <span className="font-semibold text-white">BK HCMC</span> (Ho Chi Minh University of Technology and Education) with a passion for creating beautiful and functional web experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a focus on full-stack web development and emerging AI technologies, I'm constantly exploring new tools and frameworks to build better applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Current Focus</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Code2 className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Full Stack Web Development</span>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Exploring AI Models & Machine Learning</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Modern Web Technologies</span>
                </div>
                <div className="flex items-start gap-3">
                  <Gamepad2 className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Gaming & Interactive Experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Interests & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Technology & Innovation",
                description:
                  "Passionate about staying updated with the latest technologies and implementing them in real-world projects",
                icon: Zap,
              },
              {
                title: "Web Development",
                description:
                  "Experienced in building responsive, modern web applications using React, TypeScript, and TailwindCSS",
                icon: Code2,
              },
              {
                title: "AI & Machine Learning",
                description:
                  "Exploring and learning about new AI models and their applications in web development",
                icon: Brain,
              },
              {
                title: "Gaming",
                description:
                  "Enthusiast of gaming and interactive digital experiences",
                icon: Gamepad2,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500 transition group"
                >
                  <Icon className="text-blue-400 mb-3 group-hover:text-purple-400 transition" size={24} />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Full Stack Portfolio",
                description:
                  "A modern, responsive portfolio website showcasing projects and skills with React and TailwindCSS",
                tags: ["React", "TypeScript", "TailwindCSS"],
                link: "#",
              },
              {
                title: "Web Application Project",
                description:
                  "Full-stack web application demonstrating modern development practices and responsive design principles",
                tags: ["React", "Node.js", "Express"],
                link: "#",
              },
              {
                title: "AI Integration Project",
                description:
                  "Exploring the integration of AI models into web applications for intelligent features",
                tags: ["Python", "AI/ML", "Web APIs"],
                link: "#",
              },
              {
                title: "Interactive Experience",
                description:
                  "Creating engaging interactive web experiences with animations and modern UX patterns",
                tags: ["React", "Framer Motion", "Web Design"],
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500 transition hover:shadow-lg hover:shadow-blue-500/20"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex text-blue-400 hover:text-blue-300 text-sm font-medium transition"
                >
                  Explore Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Let's Connect</h2>

          <p className="text-gray-400 mb-12 text-lg">
            Whether you'd like to discuss a project, have a question, or just want to say hello, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-3 font-medium transition">
              <Mail className="mr-2" size={18} />
              Send an Email
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-8 py-3 font-medium transition">
              <a href="https://www.facebook.com/hai.son.847156" target="_blank" rel="noopener noreferrer">
                Message on Facebook
              </a>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-gray-500 text-sm">
              © 2024 Đặng Hải Sơn. Building the future, one line of code at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
