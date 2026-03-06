import { Layout, Server, Cpu, Database } from 'lucide-react';
import { profileData } from '../data/profile';

const iconMap: { [key: string]: any } = {
    Layout,
    Server,
    Cpu,
    Database,
};

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col mb-16 space-y-4 text-center items-center">
                    <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em]">Specializations</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                        What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-400">Do Best</span>
                    </h3>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-brand-400 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {profileData.services.map((service, idx) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <div key={idx} className="glass-card p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2">
                                <div className="mb-6 relative">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                                        {Icon && <Icon className="w-7 h-7" />}
                                    </div>
                                    <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                                </div>
                                <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
