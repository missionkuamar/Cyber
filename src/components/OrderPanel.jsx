import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OrderPanel() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".order-inner", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="order"
      ref={ref}
      className="py-24 px-4 sm:px-6 relative overflow-hidden bg-cyber-black"
    >
      {/* background glow orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-cyber-pink/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyber-cyan/20 blur-[100px] rounded-full" />

      <div className="order-inner relative max-w-3xl mx-auto text-center border border-cyber-pink/30 rounded-2xl p-8 sm:p-12 bg-cyber-dark/70 backdrop-blur-sm">
        <p className="font-orbitron text-cyber-green text-xs tracking-[0.4em] mb-3">
          // TRANSMISSION OPEN
        </p>
        <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-black text-cyber-pink mb-4 drop-shadow-[0_0_20px_#ff2a6d]">
          ORDER ONLINE
        </h2>
        <p className="font-rajdhani text-cyber-cyan/80 text-base sm:text-lg mb-8 max-w-md mx-auto">
          Link your neural ID, pick your fuel, and we'll deploy your meal via drone
          in under 20 minutes. Zero contact. Pure flavor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-8 py-4 font-orbitron text-sm font-bold text-cyber-black bg-gradient-to-r from-cyber-cyan to-cyber-green rounded-md shadow-neon-cyan hover:scale-105 transition"
          >
            🚀 START ORDER
          </a>
          <a
            href="#"
            className="px-8 py-4 font-orbitron text-sm font-bold text-cyber-pink border-2 border-cyber-pink rounded-md hover:bg-cyber-pink/10 hover:shadow-neon-pink transition"
          >
            📡 CALL DRONE
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-cyber-purple/50 text-xs font-rajdhani tracking-wider">
          <span>◉ 24/7 GRID DELIVERY</span>
          <span>◉ NATIONWIDE NEON</span>
          <span>◉ 100% SYNTH</span>
        </div>
      </div>
    </section>
  );
}