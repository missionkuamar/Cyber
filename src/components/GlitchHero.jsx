import { useEffect, useRef } from "react";
import gsap from "gsap";
import ThreeScene from "./ThreeScene";

export default function GlitchHero() {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // GSAP glitch timeline
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
    tl.to(titleRef.current, { duration: 0.05, x: -4, skewX: 15 })
      .to(titleRef.current, { duration: 0.05, x: 4, skewX: -15 })
      .to(titleRef.current, { duration: 0.05, x: -2, skewX: 8 })
      .to(titleRef.current, { duration: 0.05, x: 0, skewX: 0 })
      .to(titleRef.current, { duration: 0.1, opacity: 0.3 })
      .to(titleRef.current, { duration: 0.1, opacity: 1 });

    gsap.from(subRef.current, {
      y: 40,
      opacity: 0,
      duration: 1.2,
      delay: 0.4,
      ease: "power3.out",
    });
    gsap.from(btnRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.9,
      ease: "back.out(1.7)",
    });

    return () => tl.kill();
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Three.js background */}
      <ThreeScene />

      {/* overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/60 via-transparent to-cyber-black pointer-events-none z-[1]" />

      {/* content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-orbitron text-cyber-green tracking-[0.4em] text-xs sm:text-sm mb-4">
          [ NEURAL KITCHEN // EST. 2077 ]
        </p>

        <h1
          ref={titleRef}
          className="glitch-text font-orbitron text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight"
          data-text="CYBER BITES"
        >
          <span className="text-cyber-cyan">CYBER</span>{" "}
          <span className="text-cyber-pink">BITES</span>
        </h1>

        <p
          ref={subRef}
          className="font-rajdhani text-base sm:text-lg md:text-xl text-cyber-purple/90 mt-6 max-w-2xl mx-auto tracking-wide"
        >
          Synthetic flavors. Real adrenaline. <br className="hidden sm:block" />
          Order the future. Taste the neon.
        </p>

        <div ref={btnRef} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="px-8 py-3 font-orbitron text-sm font-bold text-cyber-black bg-cyber-cyan rounded-md shadow-neon-cyan hover:scale-105 hover:shadow-[0_0_25px_#05d9e8] transition"
          >
            EXPLORE MENU
          </a>
          <a
            href="#order"
            className="px-8 py-3 font-orbitron text-sm font-bold text-cyber-pink border-2 border-cyber-pink rounded-md hover:bg-cyber-pink/10 hover:shadow-neon-pink transition"
          >
            ORDER NOW →
          </a>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce text-cyber-cyan text-2xl">
        ↓
      </div>
    </section>
  );
}