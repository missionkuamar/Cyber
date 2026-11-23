import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const foods = [
  { name: "Neon Ramen", price: "$18", color: "pink", emoji: "🍜", tag: "BESTSELLER" },
  { name: "Cyber Sushi", price: "$24", color: "cyan", emoji: "🍣", tag: "NEW" },
  { name: "Synth Burger", price: "$16", color: "purple", emoji: "🍔", tag: "HOT" },
  { name: "Acid Tacos", price: "$12", color: "green", emoji: "🌮", tag: "SPICY" },
];

const colorMap = {
  pink: { border: "border-cyber-pink", shadow: "shadow-neon-pink", text: "text-cyber-pink" },
  cyan: { border: "border-cyber-cyan", shadow: "shadow-neon-cyan", text: "text-cyber-cyan" },
  purple: { border: "border-cyber-purple", shadow: "shadow-neon-purple", text: "text-cyber-purple" },
  green: { border: "border-cyber-green", shadow: "shadow-neon-green", text: "text-cyber-green" },
};

export default function NeonFoodCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".food-card");
    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 bg-cyber-black relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl text-center text-cyber-cyan mb-3">
          NEON <span className="text-cyber-pink">BITES</span>
        </h2>
        <p className="font-rajdhani text-center text-cyber-purple/70 mb-12">
          Engineered flavors from the underground grid
        </p>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foods.map((f) => {
            const c = colorMap[f.color];
            return (
              <div
                key={f.name}
                className={`food-card group relative bg-cyber-dark/70 border ${c.border}/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:${c.shadow} cursor-pointer`}
              >
                {/* tag */}
                <span className={`absolute top-3 right-3 text-[10px] font-orbitron px-2 py-1 rounded ${c.text} border ${c.border}/50`}>
                  {f.tag}
                </span>

                {/* emoji food visual */}
                <div className={`text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_currentColor] ${c.text}`}>
                  {f.emoji}
                </div>

                <h3 className="font-orbitron text-lg text-center text-white mb-1">{f.name}</h3>
                <p className={`font-orbitron text-center ${c.text} text-xl font-bold`}>{f.price}</p>

                <div className={`mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-40 ${c.text}`} />

                <button className={`w-full mt-4 py-2 font-orbitron text-xs font-bold ${c.text} border ${c.border}/60 rounded hover:bg-white/5 transition`}>
                  ADD TO ORDER
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}