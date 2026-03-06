import { GitHubCalendar } from 'react-github-calendar';
import { Github } from 'lucide-react';

export const GithubGraph = () => {
    return (
        <section className="py-24 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col mb-16 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl glass border border-primary/20 text-primary">
                            <Github className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                            Contribution Journey
                        </h2>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A visual representation of my daily commitment to writing clean, scalable code and contributing to the open-source community.
                    </p>
                </div>

                <div className="glass-card p-8 md:p-12 rounded-3xl border border-border/50 flex flex-col items-center justify-center overflow-x-auto">
                    <GitHubCalendar
                        username="ARUNSUBRAMANIYAN208"
                        blockSize={12}
                        blockMargin={5}
                        fontSize={14}
                        theme={{
                            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                        }}
                    />
                </div>
            </div>
        </section>
    );
};
