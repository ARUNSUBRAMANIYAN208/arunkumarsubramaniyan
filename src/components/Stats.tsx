import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { profileData } from '../data/profile';

export const Stats = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className="py-20 bg-secondary/30 border-y border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {profileData.stats.map((stat, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="text-4xl md:text-5xl font-black text-primary mb-2 flex items-center justify-center">
                                {inView ? (
                                    <CountUp
                                        end={stat.value}
                                        duration={2.5}
                                        suffix={stat.suffix}
                                        useEasing={true}
                                    />
                                ) : (
                                    <span>0{stat.suffix}</span>
                                )}
                            </div>
                            <p className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors duration-300">
                                {stat.label}
                            </p>
                            <div className="h-1 w-8 bg-primary/30 mx-auto mt-4 rounded-full group-hover:w-12 group-hover:bg-primary transition-all duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
