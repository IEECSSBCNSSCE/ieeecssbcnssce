import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Zap } from 'lucide-react';
import achievements from '../data/achievements.json';

const Achievements = () => {
    const icons = [<Trophy />, <Award />, <Star />, <Zap />];

    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            Our <span className="text-gradient">Legacy</span>
                        </motion.h2>
                        <p className="text-white/60 max-w-lg">A journey marked by innovation, dedication, and excellence in the world of computing.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-right">
                            <span className="block text-3xl font-bold text-brand-cyan">10+</span>
                            <span className="text-xs uppercase tracking-widest text-white/40">Awards</span>
                        </div>
                        <div className="h-10 w-[1px] bg-white/10" />
                        <div className="text-right">
                            <span className="block text-3xl font-bold text-brand-indigo">50+</span>
                            <span className="text-xs uppercase tracking-widest text-white/40">Events</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`glass-card p-8 flex flex-col justify-between min-h-[300px] ${
                                idx === 0 ? "md:col-span-2" : ""
                            }`}
                        >
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-brand-indigo/20 rounded-xl text-brand-cyan">
                                    {React.cloneElement(icons[idx % icons.length], { size: 28 })}
                                </div>
                                <span className="text-3xl font-black text-white/10">{item.year}</span>
                            </div>
                            
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-brand-indigo/10 text-brand-indigo text-xs font-bold uppercase tracking-wider mb-4 border border-brand-indigo/20">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-white/50 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
