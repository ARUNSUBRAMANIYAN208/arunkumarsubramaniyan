
import { Code, Database, Globe, Layers, Server, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

const iconMap = {
    frontend: <Globe className="w-6 h-6 text-primary" />,
    backend: <Server className="w-6 h-6 text-brand-400" />,
    databases: <Database className="w-6 h-6 text-primary" />,
    modernTech: <Layers className="w-6 h-6 text-brand-400" />,
    tools: <Terminal className="w-6 h-6 text-primary" />,
    concepts: <Code className="w-6 h-6 text-brand-400" />
};

const categoryTitles = {
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    modernTech: "AI / Modern Tech",
    tools: "Tools",
    concepts: "Concepts"
};

export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-secondary/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Technical Arsenal
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive overview of my expertise, ranging from scalable backend architectures to dynamic UI implementations and modern AI integrations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(profileData.skills).map(([category, skills]) => (
                        <div
                            key={category}
                            className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    {iconMap[category as keyof typeof iconMap]}
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                    {categoryTitles[category as keyof typeof categoryTitles]}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-background border border-border/50 text-foreground/80 hover:border-primary hover:text-primary transition-colors cursor-default"
                                    >
                                        {skill}
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
