import { UserCheck, Brain } from 'lucide-react';
import { profileData } from '../data/profile';

export const About = () => {
    return (
        <section id="about" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    <div className="w-full lg:w-1/2 relative group">
                        {/* Visual Element - Image or Abstract Shape */}
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-brand-300/30 rounded-3xl transform rotate-6 scale-95 transition-transform duration-500 group-hover:rotate-12"></div>
                            <div className="absolute inset-0 bg-gradient-to-bl from-card to-secondary rounded-3xl transform -rotate-3 transition-transform duration-500 group-hover:rotate-0 border border-border shadow-xl overflow-hidden flex items-center justify-center">
                                {/* Abstract Data/Code pattern - Significantly enhanced contrast */}
                                <div className="p-8 text-primary/40 absolute inset-0 font-mono text-xs overflow-hidden select-none pointer-events-none whitespace-pre break-words break-all">
                                    {`const developer = {
  name: "Arunkumar",
  role: "Full Stack Developer",
  skills: ["React", "Node", "Postgres", "AI/RAG"],
  passion: "Architecting Scalable Systems",
  status: "Available"
};

return (
  <Portfolio data={developer} />
);`}
                                </div>

                                {/* Main Text - More prominent but elegant */}
                                <h3 className="text-4xl md:text-5xl font-black text-foreground/40 relative z-10 -rotate-12 tracking-[0.4em] uppercase text-center leading-[1.2]">
                                    Develop<br />
                                    <span className="text-primary italic">Design</span><br />
                                    Deploy
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <UserCheck className="text-primary w-8 h-8" />
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                    About Me
                                </h2>
                            </div>
                            <div className="h-1 w-20 bg-primary rounded-full"></div>
                        </div>

                        <div className="glass-card p-8 rounded-[2rem] border-l-4 border-l-primary relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Brain size={120} />
                            </div>
                            <p className="text-xl text-foreground/90 leading-relaxed font-semibold relative z-10">
                                {profileData.summary}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="space-y-2">
                                <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-400">3+</h4>
                                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Years Experience</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-400">10+</h4>
                                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Projects Delivered</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
