import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { useState, useEffect } from 'react';

export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((prev) => (prev + 1) % profileData.testimonials.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + profileData.testimonials.length) % profileData.testimonials.length);

    useEffect(() => {
        const interval = setInterval(next, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col mb-16 space-y-4 text-center items-center">
                    <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em]">Social Proof</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-400">Success Stories</span>
                    </h3>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-brand-400 rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto relative px-4 md:px-12">
                    <div className="relative overflow-hidden min-h-[400px] md:min-h-[350px]">
                        {profileData.testimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${idx === activeIndex
                                        ? 'opacity-100 translate-x-0 scale-100'
                                        : 'opacity-0 translate-x-full scale-95'
                                    }`}
                                style={{ display: idx === activeIndex ? 'block' : 'none' }}
                            >
                                <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-border/50 shadow-2xl relative">
                                    <div className="absolute -top-6 -left-6 w-16 h-16 rounded-3xl bg-primary flex items-center justify-center text-primary-foreground shadow-xl">
                                        <Quote size={32} />
                                    </div>

                                    <div className="flex gap-1 mb-8">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>

                                    <p className="text-xl md:text-2xl text-foreground/90 font-medium italic leading-relaxed mb-10">
                                        "{testimonial.quote}"
                                    </p>

                                    <div className="flex items-center justify-between border-t border-border/50 pt-8 mt-auto">
                                        <div>
                                            <h5 className="text-xl font-bold text-foreground">{testimonial.author}</h5>
                                            <p className="text-primary font-semibold text-sm uppercase tracking-wider">{testimonial.position}</p>
                                        </div>
                                        <div className="px-4 py-2 rounded-xl bg-secondary/50 text-xs font-black uppercase tracking-widest text-muted-foreground border border-border">
                                            {testimonial.platform}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center gap-6 mt-12">
                        <button onClick={prev} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group">
                            <ChevronLeft className="group-hover:scale-110 transition-transform" />
                        </button>
                        <div className="flex gap-2">
                            {profileData.testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground'}`}
                                />
                            ))}
                        </div>
                        <button onClick={next} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group">
                            <ChevronRight className="group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
