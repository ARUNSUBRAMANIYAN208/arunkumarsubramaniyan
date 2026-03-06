
import { UserCheck } from 'lucide-react';
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
                                {/* Abstract Data/Code pattern since we only have 1 photo for hero */}
                                <div className="p-8 text-primary/20 opacity-50 absolute inset-0 font-mono text-xs overflow-hidden select-none pointer-events-none whitespace-pre break-words break-all">
                                    {`const developer = {
  name: "Arunkumar",
  role: "Full Stack Developer",
  skills: ["React", "Node", "PostgreSQL", "AI/RAG"],
  passion: "Building scalable architectures",
  status: "Available"
};

return (
  <Portfolio data={developer} />
);`}
                                </div>

                                <h3 className="text-4xl md:text-5xl font-extrabold text-muted-foreground/30 relative z-10 -rotate-12 tracking-[0.5em] uppercase">
                                    Develop<br />Design<br />Deploy
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

                        <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary">
                            <p className="text-lg text-foreground/90 leading-relaxed font-medium">
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
