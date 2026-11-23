import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CyberStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-line", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        x: -60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 bg-gradient-to-b from-cyber-dark to-cyber-black relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* visual */}
        <div className="relative order-2 md:order-1">
          <div className="neon-gradient-border rounded-xl p-[2px]">
            <div className="bg-cyber-black rounded-xl p-8 flex items-center justify-center min-h-[280px]">
              <div className="text-8xl sm:text-9xl drop-shadow-[0_0_30px_#05d9e8]">🍜</div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 font-orbitron text-cyber-pink text-xs bg-cyber-black px-3 py-1 border border-cyber-pink/60 rounded">
            SINCE 2077
          </div>
        </div>

        {/* text */}
        <div className="order-1 md:order-2">
          <h2 className="story-line font-orbitron text-3xl sm:text-4xl text-cyber-cyan mb-4">
            OUR <span className="text-cyber-pink">STORY</span>
          </h2>
          <p className="story-line font-rajdhani text-cyber-purple/80 text-base sm:text-lg leading-relaxed mb-4">
            Born in the neon-soaked underbelly of Neo-Tokyo, Cyber Bites 2077 was forged by
            rogue chefs and ex-netrunners who believed flavor shouldn't be bound by reality.
          </p>
          <p className="story-line font-rajdhani text-cyber-purple/70 text-sm sm:text-base leading-relaxed mb-6">
            We source from zero-gravity farms, ferment in quantum vats, and plate every dish
            with a dose of pure adrenaline. This isn't just food — it's an upgrade for your soul.
          </p>

          <div className="story-line grid grid-cols-3 gap-4 mt-8">
            {[
              { num: "50K+", label: "CYBER CITIZENS" },
              { num: "120+", label: "SYNTH DISHES" },
              { num: "24/7", label: "GRID OPEN" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-orbitron text-xl sm:text-2xl font-black text-cyber-green">
                  {s.num}
                </div>
                <div className="font-rajdhani text-[10px] sm:text-xs text-cyber-cyan/60 tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}