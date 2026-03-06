import profilePicture from '../assets/arun_full_stack_developer.png';
import { ArrowRight, Github, Mail, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';



export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Decorators */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-multiply dark:mix-blend-color-dodge animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-300/20 rounded-full blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-color-dodge animate-float-delayed"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div className="flex flex-col space-y-8 order-2 lg:order-1 relative z-10">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-2 rounded-full glass border border-primary/20">
                                <span className="text-sm font-semibold text-primary tracking-wider uppercase flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                    Available for work
                                </span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
                                Hi, I'm <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-400">
                                    Arunkumar
                                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl font-medium text-foreground/80 mt-4 max-w-2xl">
                                {profileData.role}
                            </p>
                            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
                                Building scalable web applications, modern architectures, and AI-powered systems with state-of-the-art technologies.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href="#projects"
                                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all transform hover:-translate-y-1 shadow-lg shadow-foreground/20"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 rounded-full glass border border-border font-semibold hover:bg-secondary transition-all transform hover:-translate-y-1"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="flex items-center gap-6 pt-4 border-t border-border/50">
                            <a href={profileData.contact.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                <Github size={20} />
                                <span className="text-sm hidden sm:inline">GitHub</span>
                            </a>
                            <a href={`mailto:${profileData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                <Mail size={20} />
                                <span className="text-sm hidden sm:inline">Email</span>
                            </a>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin size={20} />
                                <span className="text-sm hidden sm:inline">Chennai, IN</span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
                            {/* Image Frame Decorators */}
                            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_10s_linear_infinite] border-dashed"></div>
                            <div className="absolute inset-4 border-2 border-brand-300/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl glass-card p-2 bg-gradient-to-tr from-primary/20 to-brand-300/20">
                                <div className="w-full h-full rounded-full overflow-hidden bg-secondary relative">
                                    <img
                                        src={profilePicture}
                                        alt={profileData.name}
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                        loading="eager"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'https://ui-avatars.com/api/?name=Arunkumar+Subramaniyan&size=512&background=14b8a6&color=fff';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Floating tech badges */}
                            <div className="absolute top-10 left-0 glass-card px-4 py-2 rounded-xl flex items-center gap-2 animate-float">
                                <div className="w-3 h-3 rounded-full bg-[#61DAFB]"></div>
                                <span className="font-semibold text-sm">React.js</span>
                            </div>
                            <div className="absolute bottom-20 -left-6 glass-card px-4 py-2 rounded-xl flex items-center gap-2 animate-float-delayed">
                                <div className="w-3 h-3 rounded-full bg-[#339933]"></div>
                                <span className="font-semibold text-sm">Node.js</span>
                            </div>
                            <div className="absolute top-1/2 -right-8 glass-card px-4 py-2 rounded-xl flex items-center gap-2 animate-float">
                                <span className="text-xl">🚀</span>
                                <span className="font-semibold text-sm">AI / RAG</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
