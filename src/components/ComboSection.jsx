const combos = [
  {
    title: "HACKER PACK",
    items: ["Neon Ramen", "Electric Cola", "Acid Pudding"],
    price: 25,
    old: 30,
    color: "pink",
  },
  {
    title: "NETRUNNER MEAL",
    items: ["Cyber Sushi", "Cyber Sake", "Plasma Edamame"],
    price: 34,
    old: 39,
    color: "cyan",
  },
  {
    title: "CHROME FEAST",
    items: ["Synth Burger", "Acid Tacos", "Electric Cola", "Acid Pudding"],
    price: 38,
    old: 45,
    color: "green",
  },
];

const colorMap = {
  pink: { border: "border-cyber-pink", text: "text-cyber-pink", bg: "bg-cyber-pink", shadow: "shadow-neon-pink" },
  cyan: { border: "border-cyber-cyan", text: "text-cyber-cyan", bg: "bg-cyber-cyan", shadow: "shadow-neon-cyan" },
  green: { border: "border-cyber-green", text: "text-cyber-green", bg: "bg-cyber-green", shadow: "shadow-neon-green" },
};

export default function ComboSection() {
  return (
    <section id="combos" className="py-20 px-4 sm:px-6 bg-cyber-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl text-center text-cyber-green mb-3">
          COMBO <span className="text-cyber-pink">DEALS</span>
        </h2>
        <p className="font-rajdhani text-center text-cyber-cyan/60 mb-12">
          Bundle up. Save credits. Fuel the grind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {combos.map((c) => {
            const col = colorMap[c.color];
            return (
              <div
                key={c.title}
                className={`relative bg-cyber-dark/80 border ${col.border}/40 rounded-xl p-6 text-center hover:${col.shadow} hover:-translate-y-2 transition-all duration-300`}
              >
                {/* discount badge */}
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 ${col.bg} text-cyber-black font-orbitron text-[10px] font-bold px-3 py-1 rounded-full`}>
                  SAVE ${c.old - c.price}
                </span>

                <h3 className={`font-orbitron text-xl font-bold ${col.text} mt-2 mb-4`}>
                  {c.title}
                </h3>

                <ul className="space-y-2 mb-6">
                  {c.items.map((i) => (
                    <li key={i} className="font-rajdhani text-cyber-purple/80 text-sm">
                      • {i}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="font-orbitron text-2xl font-black text-white">${c.price}</span>
                  <span className="font-orbitron text-sm text-cyber-pink/70 line-through">${c.old}</span>
                </div>

                <button className={`w-full py-2 font-orbitron text-xs font-bold ${col.bg} text-cyber-black rounded hover:opacity-90 transition`}>
                  GRAB COMBO
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}