
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { profileData } from '../data/profile';

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-16 justify-center">
                    <FolderGit2 className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
                        Featured Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {profileData.projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass-card rounded-2xl p-8 flex flex-col h-full hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Top Gradient Accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <FolderGit2 size={24} />
                                </div>
                                <a
                                    href="#"
                                    className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-full"
                                    aria-label="View Project Details"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <div className="space-y-3 mb-8 flex-grow">
                                {project.description.slice(0, 3).map((desc, i) => (
                                    <p key={i} className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
                                        {desc}
                                    </p>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-semibold text-primary/80 bg-primary/10 px-2.5 py-1 rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
