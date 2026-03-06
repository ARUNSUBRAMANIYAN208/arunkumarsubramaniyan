import { Download, ArrowRight } from 'lucide-react';

export const ResumeBanner = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-400/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card p-10 md:p-16 rounded-[3rem] border border-primary/20 shadow-2xl shadow-primary/5 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-brand-400/10 opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>

                    <div className="space-y-6 relative z-10 max-w-xl">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-primary/20 text-primary text-sm font-black uppercase tracking-[0.2em]">
                            Career Highlights
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-[1.1]">
                            Ready to see my <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-400">Full Track Record?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium">
                            Download my comprehensive resume to view detailed project experiences, certifications, and technical proficiencies in depth.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                        <a
                            href="#"
                            className="group/btn flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-black text-lg shadow-xl shadow-primary/25 hover:bg-brand-600 hover:-translate-y-1 transition-all"
                        >
                            <Download size={24} className="group-hover/btn:animate-bounce" />
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 font-bold text-foreground hover:text-primary transition-colors group/link"
                        >
                            Or Let's Talk <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
