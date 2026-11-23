import { useState } from "react";

const menu = {
  Starters: [
    { name: "Neon Spring Rolls", price: 8, desc: "Crispy holographic wrappers, synth-veggie filling" },
    { name: "Plasma Edamame", price: 6, desc: "Charged soy pods with acid-green sea salt" },
  ],
  Mains: [
    { name: "Neon Ramen", price: 18, desc: "Glowing broth, cyber-pork, quantum egg" },
    { name: "Cyber Sushi", price: 24, desc: "Holographic fish on magnetic rice" },
    { name: "Synth Burger", price: 16, desc: "Lab-grown patty, neon cheese, glitch sauce" },
  ],
  Drinks: [
    { name: "Electric Cola", price: 5, desc: "Fizzy, ionized, guaranteed to wake you up" },
    { name: "Cyber Sake", price: 9, desc: "Fermented in zero-gravity vats" },
  ],
  Desserts: [
    { name: "Acid Pudding", price: 7, desc: "Glows under UV, tastes like the future" },
  ],
};

export default function DigitalMenu() {
  const [active, setActive] = useState("Mains");

  return (
    <section className="py-20 px-4 sm:px-6 bg-cyber-dark relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-orbitron text-3xl sm:text-4xl text-center text-cyber-purple mb-3">
          DIGITAL <span className="text-cyber-green">MENU</span>
        </h2>
        <p className="font-rajdhani text-center text-cyber-cyan/60 mb-10">
          Tap a category to decrypt the flavors
        </p>

        {/* tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(menu).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-orbitron text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full border transition-all duration-300 ${
                active === cat
                  ? "border-cyber-pink text-cyber-black bg-cyber-pink shadow-neon-pink"
                  : "border-cyber-cyan/40 text-cyber-cyan hover:border-cyber-cyan hover:shadow-neon-cyan"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menu[active].map((item) => (
            <div
              key={item.name}
              className="neon-gradient-border rounded-lg p-[1px] hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="bg-cyber-black/95 rounded-lg p-5 flex justify-between items-center gap-4">
                <div>
                  <h4 className="font-orbitron text-cyber-cyan text-base sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="font-rajdhani text-sm text-cyber-purple/70 mt-1">{item.desc}</p>
                </div>
                <span className="font-orbitron text-cyber-green font-bold whitespace-nowrap">
                  ${item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}