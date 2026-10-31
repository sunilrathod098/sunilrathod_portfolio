import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];
export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="nav-wrap">
            <nav className="nav container">
                <a className="brand" href="#home" onClick={() => setOpen(false)}>
                    <span className="brand-mark">SR</span>
                    <span>
                        Sunil Rathod<span className="brand-dot">...</span>
                    </span>
                </a>
                <div className={`nav-links ${open ? "is-open" : ""}`}>
                    {links.map((l) => (
                        <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                            {l.label}
                        </a>
                    ))}
                    <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
                        Let’s talk <ArrowUpRight size={15} />
                    </a>
                </div>
                <button
                    className="menu-toggle"
                    aria-label="Toggle navigation"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X /> : <Menu />}
                </button>
            </nav>
        </header>
    );
}
