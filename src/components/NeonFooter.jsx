export default function NeonFooter() {
  return (
    <footer className="bg-cyber-black border-t border-cyber-pink/30 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-orbitron text-lg font-black text-cyber-cyan mb-3">
            CYBER<span className="text-cyber-pink">BITES</span>
          </h3>
          <p className="font-rajdhani text-cyber-purple/60 text-sm">
            Synthetic flavors. Real adrenaline. Serving the grid since 2077.
          </p>
        </div>

        <div>
          <h4 className="font-orbitron text-sm text-cyber-green mb-3">NAVIGATE</h4>
          <ul className="space-y-2 font-rajdhani text-sm">
            {["Home", "Menu", "Combos", "Story", "Reviews"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-cyber-cyan/70 hover:text-cyber-pink transition">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-orbitron text-sm text-cyber-green mb-3">CONTACT</h4>
          <ul className="space-y-2 font-rajdhani text-sm text-cyber-cyan/70">
            <li>📍 Sector 7, Neo-Tokyo Grid</li>
            <li>📞 +81 2077-CYBER</li>
            <li>✉️ fuel@cyberbites2077.io</li>
          </ul>
        </div>

        <div>
          <h4 className="font-orbitron text-sm text-cyber-green mb-3">FOLLOW THE GRID</h4>
          <div className="flex gap-3">
            {["𝕏", "IG", "TT", "DC"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-cyber-cyan/40 rounded-full text-cyber-cyan text-xs font-orbitron hover:border-cyber-pink hover:text-cyber-pink hover:shadow-neon-pink transition"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-cyber-purple/20 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-rajdhani text-xs text-cyber-purple/50">
          © 2077 CYBER BITES. ALL SIGNALS RESERVED.
        </p>
        <p className="font-orbitron text-[10px] text-cyber-cyan/40 tracking-widest">
          // POWERED BY NEON
        </p>
      </div>
    </footer>
  );
}