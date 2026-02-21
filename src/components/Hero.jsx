import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Globe, Code } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-brand-indigo/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-brand-cyan/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-sm font-medium text-white/80">IEEE Computer Society NSSCE Chapter</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
            Innovate the <br />
            <span className="text-gradient">Future of Computing</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
            Empowering students at NSS College of Engineering with cutting-edge technical skills, 
            networking opportunities, and a platform to build the next generation of technology.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link to="/events" className="btn-primary flex items-center gap-2 group">
              Explore Events <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/members" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-medium">
              Meet the Team
            </Link>
          </div>
        </motion.div>

        {/* Floating Icons for 3D effect */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingIcon icon={<Terminal />} delay={0} x="10%" y="20%" />
          <FloatingIcon icon={<Globe />} delay={2} x="85%" y="15%" />
          <FloatingIcon icon={<Code />} delay={4} x="15%" y="75%" />
        </div>
      </div>
    </div>
  );
};

const FloatingIcon = ({ icon, delay, x, y }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.4, y: [0, -20, 0] }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
    className="absolute text-brand-cyan hidden md:block"
    style={{ left: x, top: y }}
  >
    {React.cloneElement(icon, { size: 40 })}
  </motion.div>
);

export default Hero;
