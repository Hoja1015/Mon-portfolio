import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; 
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "../../constants/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export const Projects = () => {
  return (
    <section id="projects" className="px-6 py-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* En-tête de section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mes Projets
          </h2>
        </motion.div>

        {/* Grille des projets */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col rounded-[2.5rem] bg-white dark:bg-slate-900/50 text-brand-accent overflow-hidden border-2 border-slate-200 dark:border-white/10 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-brand-primary/20"
            >
              {/* Conteneur Image fixe (sans overlay bloquant) */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Contenu textuel */}
              <div className="p-8 flex flex-col flex-grow relative">
                
                {/* Badge Icône flottant */}
                <div className="absolute -top-10 left-8 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border-2 border-slate-100 dark:border-white/10 z-20">
                  <img src={project.icon} alt="project icon" className="w-8 h-8" loading="lazy"/>
                </div>

                {/* Titre et Actions Fixes */}
                <div className="flex items-start justify-between mb-4 gap-4 mt-2">
                  <h3 className="text-2xl font-black dark:text-white text-slate-900 group-hover:text-brand-primary transition-colors tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Boutons GitHub & Demo toujours visibles */}
                  <div className="flex gap-2 shrink-0">
                    <motion.a 
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-slate-100 dark:bg-white/10 rounded-xl text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white transition-colors border border-slate-200 dark:border-white/5"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-slate-100 dark:bg-white/10 rounded-xl text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white transition-colors border border-slate-200 dark:border-white/5"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags de technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;