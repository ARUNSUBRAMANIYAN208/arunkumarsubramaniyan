import { Brain, Database, FileText, Cpu, MessageSquareText, ArrowRight, Zap } from 'lucide-react';

export const AILab = () => {
    const steps = [
        {
            id: '01',
            title: "Data Ingestion",
            description: "Extracting knowledge from PDFs, documentation, and external APIs.",
            icon: FileText,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            id: '02',
            title: "Neural Embedding",
            description: "Converting text into high-dimensional vectors using embedding models.",
            icon: Cpu,
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
        {
            id: '03',
            title: "Vector Storage",
            description: "Indexing embeddings in vector databases for lightning-fast retrieval.",
            icon: Database,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        },
        {
            id: '04',
            title: "Contextual LLM",
            description: "Retrieving relevant context to augment LLM prompts with factual data.",
            icon: Brain,
            color: "text-amber-500",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20"
        },
        {
            id: '05',
            title: "Intelligent Output",
            description: "Delivering accurate, halluciation-free responses to users.",
            icon: MessageSquareText,
            color: "text-rose-500",
            bg: "bg-rose-500/10",
            border: "border-rose-500/20"
        }
    ];

    return (
        <section id="ailab" className="py-24 bg-background relative overflow-hidden">
            {/* Laboratory Aesthetics */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary mb-4 animate-pulse">
                        <Zap size={16} />
                        <span className="text-sm font-bold tracking-widest uppercase">The AI Laboratory</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                        Building the Future with <span className="text-primary">RAG Architecture</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A visual deep-dive into how I architect enterprise-grade AI systems using Retrieval-Augmented Generation.
                    </p>
                </div>

                {/* Pipeline Diagram */}
                <div className="relative mt-20">
                    {/* Desktop Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-emerald-500 via-amber-500 to-rose-500 opacity-20 -translate-y-1/2 -z-10"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative group">
                                <div className={`glass-card p-6 rounded-3xl border ${step.border} bg-background/50 backdrop-blur-xl h-full flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
                                    <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center ${step.color} mb-6 border ${step.border} group-hover:scale-110 transition-transform duration-500 relative`}>
                                        <step.icon size={32} />
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-xs font-black shadow-sm">
                                            {step.id}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Mobile/Tablet/Desktop Arrow */}
                                    {idx < steps.length - 1 && (
                                        <div className="lg:hidden mt-8 flex justify-center">
                                            <ArrowRight className="text-muted-foreground rotate-90" />
                                        </div>
                                    )}
                                </div>

                                {/* Flow Particle (Desktop only) */}
                                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 rounded-full bg-primary/20 blur-sm -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lab Stats / Tech Involved */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: "Vector DBs", value: "Pinecone / Chroma" },
                        { label: "Embeddings", value: "OpenAI / Gemini" },
                        { label: "Orchestration", value: "LangChain / LlamaIndex" },
                        { label: "LLMs", value: "GPT-4 / Gemini 1.5 Pro" }
                    ].map((tech, i) => (
                        <div key={i} className="glass p-4 rounded-2xl border border-border/50 text-center">
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{tech.label}</p>
                            <p className="text-sm font-black text-foreground">{tech.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
