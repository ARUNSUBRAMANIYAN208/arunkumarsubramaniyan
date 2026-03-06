import { BookOpen, ArrowRight, Calendar } from 'lucide-react';
import { profileData } from '../data/profile';

export const Blog = () => {
    return (
        <section id="blog" className="py-24 bg-secondary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl glass border border-primary/20 text-primary">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                                Technical Insights
                            </h2>
                        </div>
                        <p className="text-lg text-muted-foreground max-w-xl">
                            Sharing my experiences and deep dives into modern web architecture, AI, and software engineering best practices.
                        </p>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
                        View All Articles <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {profileData.blogPosts.map((post, idx) => (
                        <a key={idx} href={post.url} className="glass-card group flex flex-col p-8 rounded-[2.5rem] border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-10 opacity-5 -rotate-12 group-hover:rotate-0 group-hover:opacity-10 transition-all duration-700">
                                <BookOpen size={120} />
                            </div>

                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest border border-primary/20">
                                    Engineering
                                </span>
                                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                                    <Calendar size={14} />
                                    <span>{post.date}</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                                {post.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed mb-8">
                                {post.excerpt}
                            </p>

                            <div className="mt-auto flex items-center gap-2 text-foreground font-black text-sm uppercase tracking-widest group-hover:text-primary transition-colors">
                                Read More <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
