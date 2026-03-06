
import { GraduationCap, Award } from 'lucide-react';
import { profileData } from '../data/profile';

export const Education = () => {
    return (
        <section id="education" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-4 mb-12 justify-center border-b border-border pb-6">
                        <GraduationCap className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
                            Education
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {profileData.education.map((edu, idx) => (
                            <div
                                key={idx}
                                className="glass-card rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/50 transition-colors"
                            >
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        {edu.degree}
                                    </h3>
                                    <div className="text-primary font-medium text-lg mb-2">
                                        {edu.institution}
                                    </div>
                                    {edu.details && (
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 bg-secondary/50 p-3 rounded-lg w-fit">
                                            <Award size={16} className="text-amber-500" />
                                            <span className="font-medium text-foreground">{edu.details}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="md:text-right flex-shrink-0">
                                    <div className="inline-block px-4 py-2 rounded-full border border-border bg-background text-sm font-semibold text-muted-foreground">
                                        {edu.duration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
