import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const AboutContact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* About Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
            Bridging Potential <br />
            <span className="text-gradient">with Innovation</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="space-y-6 text-lg text-white/60 leading-relaxed">
            <p>
              The IEEE Computer Society (CS) chapter at NSS College of Engineering is a vibrant community of tech enthusiasts, developers, and designers. 
            </p>
            <p>
              Our mission is to foster a culture of lifelong learning and technical excellence. We provide students with the resources they need to excel in the ever-evolving field of computing, from workshops and hackathons to networking events with industry leaders.
            </p>
            <p>
              Founded with the vision to empower student innovators, we continue to be a hub for creative thinking and collaborative problem-solving.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4">
            <div className="p-4 glass-card flex-1 text-center">
              <span className="block text-2xl font-bold text-brand-cyan">500+</span>
              <span className="text-sm text-white/40">Members</span>
            </div>
            <div className="p-4 glass-card flex-1 text-center">
              <span className="block text-2xl font-bold text-brand-indigo">30+</span>
              <span className="text-sm text-white/40">Workshops</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-brand-indigo/10 -rotate-12">
            <Send size={160} />
          </div>

          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-cyan transition-colors outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-cyan transition-colors outline-none" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60">Message</label>
              <textarea rows="4" placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-cyan transition-colors outline-none resize-none" />
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContactInfo icon={<Mail />} label="Email Us" value="ieee-cs@nssce.ac.in" />
            <ContactInfo icon={<MapPin />} label="Visit Us" value="NSSCE, Palakkad" />
            <ContactInfo icon={<Phone />} label="Call Us" value="+91 123 456 7890" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex flex-col gap-2">
    <div className="text-brand-cyan">{React.cloneElement(icon, { size: 20 })}</div>
    <span className="text-xs uppercase tracking-widest text-white/40">{label}</span>
    <span className="text-sm font-medium text-white/80">{value}</span>
  </div>
);

export default AboutContact;
