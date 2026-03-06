import { Briefcase, Calendar, Building2, Terminal, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { profileData } from '../data/profile';

export const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-background relative overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-400/5 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-color-dodge"></div>
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10 mix-blend-color-dodge"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-20 relative z-10">
                    <div className="inline-flex p-3 rounded-2xl glass border border-primary/20 text-primary shadow-[0_0_30px_rgba(20,184,166,0.15)] mb-2">
                        <Briefcase className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                        Professional Background
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mt-4">
                        A detailed look into my tenure developing scalable web systems, integrating AI solutions, and leading architectural improvements.
                    </p>
                </div>

                <div className="space-y-12">
                    {profileData.experience.map((exp, idx) => (
                        <div key={idx} className="group relative">
                            {/* Hover glow effect for the entire card */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-brand-400/50 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                            <div className="relative glass-card bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden p-8 md:p-12 transition-all duration-300">

                                {/* Top Header / Company Info */}
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-border/40">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                                                <Terminal className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                                                {exp.title}
                                            </h3>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-4 text-foreground/80 font-medium text-lg pl-1">
                                            <div className="flex items-center gap-2">
                                                <Building2 size={20} className="text-primary/70" />
                                                <span className="text-primary font-bold">{exp.company}</span>
                                            </div>
                                            <span className="hidden sm:inline text-border">•</span>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Calendar size={18} />
                                                <span>{exp.duration}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden lg:flex px-6 py-3 rounded-full glass border border-primary/20 items-center gap-2 text-primary font-bold shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                        </span>
                                        Current Role
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
                                    {/* Left Column: Responsibilities */}
                                    <div className="xl:col-span-7 space-y-6">
                                        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                            <ChevronRight className="w-4 h-4 text-primary" />
                                            Core Responsibilities
                                        </h4>
                                        <ul className="space-y-4">
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i} className="flex gap-4 items-start group/item">
                                                    <div className="p-1 rounded bg-secondary/80 text-primary/50 group-hover/item:text-primary group-hover/item:bg-primary/10 shrink-0 mt-0.5 transition-colors">
                                                        <CheckCircle2 className="w-5 h-5" />
                                                    </div>
                                                    <span className="text-base text-foreground/80 leading-relaxed group-hover/item:text-foreground transition-colors">{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right Column: Key Achievements and Tech */}
                                    <div className="xl:col-span-5 space-y-8">
                                        {exp.achievements && exp.achievements.length > 0 && (
                                            <div className="p-7 rounded-2xl bg-secondary/30 border border-primary/10 shadow-inner relative overflow-hidden group/achieve hover:bg-secondary/50 transition-colors">
                                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover/achieve:opacity-40 transition-opacity">
                                                    <Award className="w-24 h-24 text-primary" />
                                                </div>
                                                <div className="relative z-10">
                                                    <h4 className="flex items-center gap-2 text-sm font-bold text-foreground mb-5 uppercase tracking-wider">
                                                        <span className="text-primary">✦</span> Major Impact
                                                    </h4>
                                                    <ul className="space-y-4">
                                                        {exp.achievements.map((ach, i) => (
                                                            <li key={i} className="flex gap-3 text-foreground/90 font-medium">
                                                                <span className="text-xl leading-none text-brand-400 mt-0.5">•</span>
                                                                <span className="leading-relaxed">{ach}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}

                                        {/* Optional: Add a small skill badge section based manually from profileData or hardcoded for the role to add more visual flare */}
                                        <div className="space-y-4">
                                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest pl-1">Technologies Used</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {['React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'GraphQL', 'Prisma', 'Tailwind'].map((tech) => (
                                                    <span key={tech} className="px-3 py-1.5 rounded-md glass border border-border text-xs font-semibold hover:border-primary/50 transition-colors cursor-default">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
