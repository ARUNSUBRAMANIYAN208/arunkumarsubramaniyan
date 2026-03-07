import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { profileData } from '../data/profile';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        // Performance optimization: Disable transitions during theme switch
        document.documentElement.classList.add('no-transitions');

        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }

        // Force a reflow to apply the theme without transition
        window.getComputedStyle(document.documentElement).opacity;

        // Remove the no-transitions class after a small buffer
        setTimeout(() => {
            document.documentElement.classList.remove('no-transitions');
        }, 0);
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Experience', href: '#experience' },
        { name: 'AI Lab', href: '#ailab' },
        { name: 'Projects', href: '#projects' },
        // { name: 'Testimonials', href: '#testimonials' },
        // { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 border-b border-border' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-brand-300 flex items-center justify-center text-primary-foreground font-black text-xl shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                                AS
                            </div>
                            <span className="font-black text-2xl tracking-tight hidden sm:block text-foreground">
                                Arun<span className="font-medium">kumar</span>
                            </span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-bold text-foreground/80 hover:text-primary transition-all relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </a>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-secondary/80 text-foreground transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <a
                            href={`mailto:${profileData.contact.email}`}
                            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-brand-600 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                        >
                            Let's Talk
                        </a>
                    </div>

                    <div className="flex md:hidden items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-secondary/80 text-foreground transition-colors"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-foreground hover:text-primary transition-colors focus:outline-none"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full bg-background  transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 py-4 shadow-xl' : 'max-h-0'}`}>
                <div className="px-4 space-y-2 flex flex-col">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2.5 rounded-md text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={`mailto:${profileData.contact.email}`}
                        className="block mt-4 text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium w-full"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </nav>
    );
};
