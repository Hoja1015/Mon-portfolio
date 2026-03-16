import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const line1 = "Développeur Front End";
  const line2 = "Aspirant Full-stack";

  // Configuration de l'animation du conteneur pour l'effet machine à écrire
  const typewriterContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  // Configuration de chaque lettre
  const letterVariants: Variants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" },
  };

  // Animation d'apparition du bouton - Correction avec "as const"
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 1.7,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }
    },
  } as const;

  // Animation de pulsation - Correction avec "as const"
  const buttonPulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  } as const;

  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Titre Principal avec effet Typewriter */}
      <motion.h1
        variants={typewriterContainerVariants}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
      >
        {/* Première ligne */}
        {line1.split("").map((char, index) => (
          <motion.span key={`line1-${index}`} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
        
        <br />

        {/* Deuxième ligne */}
        <span className="text-brand-primary">
          {line2.split("").map((char, index) => (
            <motion.span key={`line2-${index}`} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
      >
        Je transforme des concepts complexes en interfaces fluides et performantes.
        Développeur Front-End spécialisé en écosystèmes modern JavaScript, je conçois des expériences numériques centrées sur l’utilisateur et l’efficacité du code.
        Je recherche une alternance pour septembre 2026.
      </motion.p>

      {/* Bouton d'action avec casting "any" de sécurité pour le build */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial="hidden"
        animate="visible"
        variants={buttonVariants as any}
      >
        <motion.a
          href="#contact"
          className="flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-full font-semibold hover:bg-brand-primary/90 transition-all hover:scale-105 shadow-lg shadow-brand-primary/20"
          animate="pulse"
          variants={buttonPulseVariants as any}
        >
          Me contacter
          <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;