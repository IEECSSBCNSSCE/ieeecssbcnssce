import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import members from '../data/members.json';

const MembersGallery = () => {
  return (
    <section className="py-24 px-6 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Meet the <span className="text-gradient">Board</span>
          </motion.h2>
          <p className="text-white/60">The passionate minds driving IEEE CS NSSCE forward.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MemberCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card p-6 flex flex-col items-center text-center group relative overflow-hidden"
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />

      <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 border-2 border-brand-indigo/30 group-hover:border-brand-cyan transition-colors">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
      <p className="text-brand-cyan text-sm font-medium mb-4">{member.role}</p>

      <div className="flex gap-4">
        {member.social.linkedin && (
          <a href={member.social.linkedin} className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-brand-cyan transition-all">
            <Linkedin size={18} />
          </a>
        )}
        {member.social.github && (
          <a href={member.social.github} className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-brand-cyan transition-all">
            <Github size={18} />
          </a>
        )}
        {member.social.email && (
          <a href={`mailto:${member.social.email}`} className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-brand-cyan transition-all">
            <Mail size={18} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default MembersGallery;
