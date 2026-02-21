import { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { SiGithub, SiLinkedin, SiLeetcode } from 'react-icons/si';
import { Mail, Send, Terminal, Cpu, GraduationCap, MapPin } from 'lucide-react';

import Navbar from '@/components/Navbar';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';
import SocialCard from '@/components/SocialCard';
import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { projects, skills, ProjectCategory } from '@/data/projects';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const { toast } = useToast();

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      className: "bg-primary text-white border-none"
    });
    // Reset form logic would go here
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ScrollToTop />

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 text-primary font-mono text-sm">
              Hello World, I'm
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Shubham <br />
              <span className="text-gradient">Mokashi</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground font-mono mb-8 h-12 flex items-center">
              <span className="mr-3 text-primary">&gt;</span>
              <Typewriter
                options={{
                  strings: [
                    'Full-Stack Developer',
                    'DSA Enthusiast',
                    'CS Student',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              I build scalable, user-centric web applications and solve complex algorithmic problems. Passionate about turning coffee into code.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="projects" smooth={true} duration={500}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base">
                  View My Work
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 rounded-full px-8 h-12 text-base">
                  Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center relative"
          >
            {/* Abstract Tech Representation */}
            <div className="relative w-[500px] h-[500px] bg-secondary/30 rounded-full border border-white/5 backdrop-blur-sm flex items-center justify-center animate-pulse-slow">
              <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-16 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="bg-gradient-to-tr from-primary to-accent w-48 h-48 rounded-full blur-2xl opacity-50" />
              <Code2 size={120} className="text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
              
              {/* Floating Icons */}
              <motion.div 
                animate={{ y: [0, -20, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-20 bg-background/80 p-3 rounded-xl border border-white/10 shadow-lg"
              >
                <Terminal className="text-accent" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 bg-background/80 p-3 rounded-xl border border-white/10 shadow-lg"
              >
                <Cpu className="text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-secondary/10">
        <div className="container mx-auto container-padding">
          <SectionHeader title="About Me" subtitle="Who I Am" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
              <div className="relative glass p-8 rounded-2xl">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  I'm currently a <span className="text-white font-medium">Computer Science student</span> at 
                  <span className="text-primary font-medium"> DYP Akurdi</span>, Pune. My journey in tech started with curiosity about how things work on the web, which led me to dive deep into Full Stack Development.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  When I'm not coding, you can find me solving problems on LeetCode, exploring new tech trends, or contributing to open-source projects. I believe in writing clean, maintainable code that solves real-world problems.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { icon: GraduationCap, label: "Education", value: "B.E. Computer Engineering" },
                { icon: MapPin, label: "Location", value: "Pune, India" },
                { icon: Terminal, label: "Experience", value: "Freshman / Student" },
                { icon: Cpu, label: "Interests", value: "Web Dev & DSA" },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-4 rounded-xl flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">{item.label}</h4>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24">
        <div className="container mx-auto container-padding">
          <SectionHeader title="Tech Stack" subtitle="My Arsenal" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <SkillBadge key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-secondary/10">
        <div className="container mx-auto container-padding">
          <SectionHeader title="Featured Projects" subtitle="My Work" />

          {/* Filter */}
          <div className="flex justify-center mb-12 flex-wrap gap-2">
            {['All', 'Full-Stack', 'Frontend', 'DSA'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as ProjectCategory)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-secondary/40 text-muted-foreground hover:bg-secondary/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* STATS / PROFILES SECTION */}
      <section className="py-24">
        <div className="container mx-auto container-padding">
          <SectionHeader title="Coding Profiles" subtitle="Find Me Online" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <SocialCard 
              index={0}
              name="shubham-mokashi" 
              platform="LinkedIn" 
              icon={SiLinkedin} 
              url="#" 
              color="#0077B5" 
            />
            <SocialCard 
              index={1}
              name="shubham_code" 
              platform="GitHub" 
              icon={SiGithub} 
              url="#" 
              color="#ffffff" 
            />
            <SocialCard 
              index={2}
              name="shubham_dev" 
              platform="LeetCode" 
              icon={SiLeetcode} 
              url="#" 
              color="#FFA116" 
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-secondary/10">
        <div className="container mx-auto container-padding max-w-4xl">
          <SectionHeader title="Get In Touch" subtitle="Contact Me" />
          
          <div className="glass p-8 md:p-12 rounded-3xl">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Name</label>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-secondary/50 border-white/10 focus:border-primary h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-secondary/50 border-white/10 focus:border-primary h-12 rounded-xl"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Message</label>
                <Textarea 
                  placeholder="How can I help you?" 
                  className="bg-secondary/50 border-white/10 focus:border-primary min-h-[150px] rounded-xl resize-none"
                />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                <a 
                  href="mailto:contact@shubham.dev" 
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  contact@shubham.dev
                </a>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-xl px-8"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center">
        <p className="text-muted-foreground font-mono text-sm">
          Built with <span className="text-primary">React</span> & <span className="text-accent">Tailwind</span> by Shubham Mokashi.
        </p>
      </footer>

      {/* Component imports needed for smooth scroll Link */}
      <div className="hidden">
         {/* This is a hack to ensure react-scroll Link works if used elsewhere */}
         <Link to="" />
      </div>
    </div>
  );
}

// Helper to make the import in SectionHeader and Navbar work properly
import { Link as ScrollLink } from 'react-scroll';
const Link = ScrollLink;
