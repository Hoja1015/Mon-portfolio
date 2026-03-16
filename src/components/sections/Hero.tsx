import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const line1 = "Développeur Front End";
  const line2 = "Aspirant Full-stack";

  // Configuration de l'animation du conteneur (parent) pour l'effet machine à écrire
  const typewriterContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Vitesse de frappe (0.05s entre chaque lettre)
        delayChildren: 0.2,    // Délai avant le début de l'animation
      },
    },
  };

  // Configuration de chaque lettre pour l'effet machine à écrire
  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" },
  };

  // Configuration de l'animation d'apparition du bouton
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 1.7, // Délai après l'animation du texte
        duration: 0.5,
        type: "spring", // Ajoute un léger effet de ressort
        stiffness: 100,
      }
    },
  };

  // Configuration de l'animation de pulsation continue du bouton
  const buttonPulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.03, 1], // Légère augmentation d'échelle puis retour
      transition: {
        duration: 1.5,
        repeat: Infinity, // Répète l'animation à l'infini
        ease: "easeInOut",
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Titre Principal avec effet Typewriter sans curseur */}
      <motion.h1
        variants={typewriterContainerVariants}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
      >
        {/* Première ligne */}
        {line1.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
        
        <br />

        {/* Deuxième ligne avec sa propre couleur */}
        <span className="text-brand-primary">
          {line2.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }} // Ajustement du délai
        className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
      >
        Je transforme des concepts complexes en interfaces fluides et performantes.
        Développeur Front-End spécialisé en écosystèmes modern JavaScript, je conçois des expériences numériques centrées sur l’utilisateur et l’efficacité du code.
        Je recherche une alternance pour septembre 2026.
      </motion.p>

      {/* Boutons d'action avec animations d'apparition et de pulsation */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
      >
        <motion.a
          href="#contact"
          className="flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-full font-semibold hover:bg-brand-primary/90 transition-all hover:scale-105"
          animate="pulse"
          variants={buttonPulseVariants}
        >
          Me contacter
          <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;