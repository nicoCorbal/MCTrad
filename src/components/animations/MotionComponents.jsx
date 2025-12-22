import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Hook para detectar si es móvil
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// Hook combinado para reducir animaciones
export const useShouldReduceMotion = () => {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  return prefersReducedMotion || isMobile;
};

// Variantes de animación refinadas para "Quiet Luxury"
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

// Contenedor con stagger para hijos
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

// Item para usar dentro de stagger containers
export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

// Animación de línea expandiéndose
export const lineExpand = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

// Hover elegante para cards
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
  },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

// Hover para botones
export const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98
  }
};

// Componente de sección animada con scroll trigger
export const AnimatedSection = ({ children, className = "", delay = 0 }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: { opacity: 0, y: 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1]
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.section>
);

// Texto que aparece palabra por palabra
export const AnimatedText = ({ text, className = "", as = "p" }) => {
  const words = text.split(" ");
  const MotionTag = motion[as] || motion.p;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainerFast}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: [0.25, 0.4, 0.25, 1]
              }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
};

// Componente de Card animada
export const AnimatedCard = ({ children, className = "", index = 0 }) => (
  <motion.div
    className={className}
    initial="rest"
    whileHover="hover"
    whileTap="tap"
    variants={cardHover}
    custom={index}
  >
    {children}
  </motion.div>
);

// Componente de botón animado
export const AnimatedButton = ({ children, className = "", onClick, type = "button", disabled = false }) => (
  <motion.button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={className}
    initial="rest"
    whileHover={disabled ? "rest" : "hover"}
    whileTap={disabled ? "rest" : "tap"}
    variants={buttonHover}
  >
    {children}
  </motion.button>
);

// Link animado
export const AnimatedLink = ({ children, to, className = "" }) => (
  <motion.div
    initial="rest"
    whileHover="hover"
    whileTap="tap"
    variants={buttonHover}
  >
    {children}
  </motion.div>
);

// Número contador animado
export const AnimatedCounter = ({ value, suffix = "", className = "" }) => (
  <motion.span
    className={className}
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }}
  >
    {value}{suffix}
  </motion.span>
);

// Divider animado
export const AnimatedDivider = ({ className = "" }) => (
  <motion.div
    className={`h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent ${className}`}
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
  />
);

// Badge animada
export const AnimatedBadge = ({ children, className = "" }) => (
  <motion.span
    className={className}
    initial={{ opacity: 0, scale: 0.8, y: -10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
      delay: 0.2
    }}
  >
    {children}
  </motion.span>
);

export default {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
  staggerContainerFast,
  staggerItem,
  lineExpand,
  cardHover,
  buttonHover
};
