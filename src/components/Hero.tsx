import profilePicture from '../assets/arun_full_stack_developer.png';
import { ArrowRight, Github, Mail, Linkedin, Instagram, Download, Cpu } from 'lucide-react';
import { profileData } from '../data/profile';
import myResume from '../assets/Arunkumar_Subramaniyan_Full_Stack_Developer.pdf';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20  overflow-hidden bg-background">
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
                                href={myResume}
                                download="Arunkumar_Subramaniyan_Full_Stack_Developer.pdf"
                                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-brand-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
                            >
                                <Download size={18} className="group-hover:animate-bounce" />
                                Download Resume
                            </a>
                        </div>

                        <div className="flex items-center gap-5 pt-8 border-t border-border/50">
                            {[
                                { icon: Github, url: profileData.contact.github, hoverColor: 'hover:text-foreground' },
                                { icon: Linkedin, url: profileData.contact.linkedin, hoverColor: 'hover:text-[#0077b5]' },
                                { icon: Instagram, url: profileData.contact.instagram, hoverColor: 'hover:text-[#e4405f]' },
                                { icon: Mail, url: `mailto:${profileData.contact.email}`, hoverColor: 'hover:text-primary' }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`w-12 h-12 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground ${social.hoverColor} hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-1.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_20px_rgba(255,255,255,0.05)]`}
                                >
                                    <social.icon size={22} className="transition-transform duration-500 group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">

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

                            {/* Floating tech badges with specific brand icons */}
                            <div className="absolute top-10 left-0 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-3 animate-float border border-primary/20 shadow-lg">
                                <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#61DAFB]">
                                    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                                    <g stroke="#61DAFB" strokeWidth="1" fill="none">
                                        <ellipse rx="11" ry="4.2" />
                                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                                    </g>
                                </svg>
                                <span className="font-bold text-sm tracking-tight text-foreground">React.js</span>
                            </div>
                            <div className="absolute bottom-20 -left-6 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-3 animate-float-delayed border border-primary/20 shadow-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L3.5 6.5V17.5L12 22L20.5 17.5V6.5L12 2Z" fill="#339933" />
                                    <path d="M14.5 9.5C14.5 8.4 13.6 7.5 12.5 7.5H11.5C10.4 7.5 9.5 8.4 9.5 9.5V10.5C9.5 11.6 10.4 12.5 11.5 12.5H12.5C13.6 12.5 14.5 13.4 14.5 14.5V15.5C14.5 16.6 13.6 17.5 12.5 17.5H11.5C10.4 17.5 9.5 16.6 9.5 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <span className="font-bold text-sm tracking-tight text-foreground">Node.js</span>
                            </div>
                            <div className="absolute top-1/2 -right-8 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-3 animate-float border border-primary/20 shadow-lg">
                                <Cpu className="w-5 h-5 text-primary" />
                                <span className="font-bold text-sm tracking-tight text-foreground">AI / RAG Specialist</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
