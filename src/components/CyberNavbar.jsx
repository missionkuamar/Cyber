import { useState } from "react";

const links = ["Home", "Menu", "Combos", "Story", "Reviews"];

export default function CyberNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/70 backdrop-blur-md border-b border-cyber-pink/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <a
          href="#"
          className="font-orbitron text-lg sm:text-xl font-black text-cyber-cyan tracking-widest"
        >
          CYBER<span className="text-cyber-pink">BITES</span>
          <span className="text-cyber-green text-xs ml-1">2077</span>
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="font-orbitron text-sm text-cyber-cyan/90 hover:text-cyber-pink transition-colors duration-200 tracking-wider"
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#order"
              className="px-4 py-2 font-orbitron text-xs font-bold text-cyber-black bg-gradient-to-r from-cyber-pink to-cyber-purple rounded-md shadow-neon-pink hover:scale-105 transition"
            >
              ORDER NOW
            </a>
          </li>
        </ul>

        {/* mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cyber-cyan text-2xl"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="md:hidden bg-cyber-dark/95 border-t border-cyber-purple/40 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="font-orbitron text-sm text-cyber-cyan hover:text-cyber-pink"
                >
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#order"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-2 font-orbitron text-xs font-bold text-cyber-black bg-cyber-pink rounded-md"
              >
                ORDER NOW
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}