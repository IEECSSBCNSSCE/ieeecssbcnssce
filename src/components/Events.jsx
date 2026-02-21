import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';
import events from '../data/events.json';

const Events = () => {
  return (
    <section className="py-24 px-6 relative bg-black/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            What's <span className="text-gradient">Happening?</span>
          </motion.h2>
          <p className="text-white/60">Reserve your spot at our upcoming technical summits and workshops.</p>
        </div>

        <div className="space-y-6">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-card flex flex-col md:flex-row p-8 gap-8 items-center"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase">
                    {event.type}
                  </span>
                  <div className="flex items-center gap-1 text-white/40 text-sm">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-cyan transition-colors">{event.title}</h3>
                <p className="text-white/50 mb-6 leading-relaxed">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary flex items-center gap-2">
                    {event.cta} <ExternalLink size={16} />
                  </button>
                  <button className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm font-medium">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="md:w-32 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-brand-indigo/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border-t-brand-cyan animate-spin" />
                    <span className="text-[10px] font-bold uppercase text-white/60">Active</span>
                </div>
                <span className="text-xs text-white/30 mt-4 tracking-tighter">LIMITED SEATS</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
