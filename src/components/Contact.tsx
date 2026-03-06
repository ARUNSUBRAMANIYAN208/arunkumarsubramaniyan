import { Mail, MapPin, Send, ExternalLink, Globe } from 'lucide-react';
import { profileData } from '../data/profile';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            {/* Abstract Background Orbs */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-color-dodge"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-color-dodge"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col mb-16 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl glass border border-primary/20 text-primary shadow-sm shadow-primary/10">
                            <Send className="w-6 h-6" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                            Get In Touch
                        </h2>
                    </div>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-brand-400 rounded-full"></div>
                    <p className="text-xl text-muted-foreground mt-4 max-w-2xl pt-2">
                        I am currently open to exciting new opportunities and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Direct Contact & Socials */}
                    <div className="space-y-10">
                        {/* Status Card */}
                        <div className="glass-card p-8 rounded-3xl border border-border/50 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-300 opacity-50 group-hover:opacity-100"></div>
                            <h3 className="text-2xl font-bold mb-8 relative z-10">Direct Contact</h3>

                            <div className="space-y-6 relative z-10">
                                <a href={`mailto:${profileData.contact.email}`} className="flex items-center gap-5 p-4 rounded-xl hover:bg-secondary/50 transition-colors border border-transparent hover:border-border">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary group-hover:text-foreground transition-colors shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Email</p>
                                        <p className="text-foreground font-medium text-responsive sm:text-lg break-all">{profileData.contact.email}</p>
                                    </div>
                                </a>

                                <a href="https://wa.me/919787949579" target="_blank" rel="noreferrer" className="flex items-center gap-5 p-4 rounded-xl hover:bg-secondary/50 transition-colors border border-transparent hover:border-border">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary group-hover:text-foreground transition-colors shrink-0">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w300.org/2000/svg">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.061-.173-.299-.018-.461.13-.611.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">WhatsApp</p>
                                        <p className="text-foreground font-medium text-lg">{profileData.contact.phone.replace(' - ', ' ')}</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-5 p-4 rounded-xl border border-transparent">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Location</p>
                                        <p className="text-foreground font-medium text-lg">{profileData.contact.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Freelance Links */}
                    <div className="space-y-6">
                        <div className="glass-card p-8 md:p-10 rounded-3xl border border-border/50 h-full flex flex-col relative overflow-hidden">
                            {/* Accent Glow */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-400/20 rounded-full blur-[80px]"></div>

                            <div className="flex items-center gap-3 mb-8 relative z-10">
                                <Globe className="w-6 h-6 text-brand-400" />
                                <h3 className="text-2xl font-bold text-foreground">Freelance Platforms</h3>
                            </div>

                            <p className="text-muted-foreground mb-10 leading-relaxed font-medium relative z-10">
                                Over the years, I've successfully delivered high-quality web solutions to clients globally through various freelance marketplaces. You can view my verified work history, reviews, and client feedback on these platforms.
                            </p>

                            <div className="flex flex-col gap-4 relative z-10">
                                {profileData.freelance.map((site, index) => (
                                    <a
                                        key={index}
                                        href={site.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full flex items-center justify-between p-5 rounded-2xl bg-secondary/50 border border-border/50 hover:border-brand-400/50 hover:bg-secondary transition-all group"
                                    >
                                        <div className="flex items-center gap-4">
                                            {/* Simple visual indicator, can replace with actual brand icons if preferred */}
                                            <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center font-black text-brand-400 border border-border shadow-sm group-hover:scale-105 transition-transform">
                                                {site.platform.charAt(0)}
                                            </div>
                                            <span className="text-xl font-extrabold tracking-tight text-foreground">{site.platform}</span>
                                        </div>
                                        <div className="p-2 rounded-lg bg-background group-hover:bg-brand-400 group-hover:text-background transition-colors text-muted-foreground">
                                            <ExternalLink className="w-4 h-4" />
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-auto pt-10 relative z-10">
                                <div className="p-6 rounded-2xl border border-dashed border-primary/30 bg-primary/5 flexitems-center justify-center text-center">
                                    <p className="text-sm font-semibold text-primary">Ready to start your next project? Let's talk!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
