import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { name: "V0ID_WALKER", rating: 5, text: "The neon ramen literally glowed. My taste buds got hacked.", avatar: "👾" },
  { name: "NEON_QUEEN", rating: 5, text: "Best synth burger in the grid. Period. The glitch sauce is unreal.", avatar: "👑" },
  { name: "CHROME_GHOST", rating: 4, text: "Cyber sushi melted my neural link in the best way possible.", avatar: "🤖" },
  { name: "ACID_DRIFTER", rating: 5, text: "Combo deals are elite. Fed my whole crew for under 40 credits.", avatar: "💀" },
];

function AnimatedCounter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to({ v: 0 }, {
          v: target,
          duration: 2,
          ease: "power2.out",
          onUpdate() {
            setCount(Math.floor(this.targets()[0].v));
          },
        });
      },
    });
    return () => st.kill();
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

export default function RatingCards() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".rating-card", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="py-20 px-4 sm:px-6 bg-cyber-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl text-center text-cyber-cyan mb-3">
          GRID <span className="text-cyber-green">REVIEWS</span>
        </h2>
        <p className="font-rajdhani text-center text-cyber-purple/60 mb-12">
          What the citizens are saying
        </p>

        {/* top counters */}
        <div className="flex flex-wrap justify-center gap-10 mb-14">
          <div className="text-center">
            <div className="font-orbitron text-4xl sm:text-5xl font-black text-cyber-pink">
              <AnimatedCounter target={4.9} />★
            </div>
            <p className="font-rajdhani text-cyber-cyan/60 text-sm mt-1">AVG RATING</p>
          </div>
          <div className="text-center">
            <div className="font-orbitron text-4xl sm:text-5xl font-black text-cyber-green">
              <AnimatedCounter target={98} />%
            </div>
            <p className="font-rajdhani text-cyber-cyan/60 text-sm mt-1">WOULD REORDER</p>
          </div>
          <div className="text-center">
            <div className="font-orbitron text-4xl sm:text-5xl font-black text-cyber-purple">
              <AnimatedCounter target={12} />K
            </div>
            <p className="font-rajdhani text-cyber-cyan/60 text-sm mt-1">REVIEWS</p>
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rating-card bg-cyber-dark/70 border border-cyber-purple/30 rounded-xl p-6 hover:border-cyber-cyan hover:shadow-neon-cyan transition-all duration-300"
            >
              <div className="text-4xl mb-3">{r.avatar}</div>
              <div className="flex gap-1 mb-2 text-cyber-green">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - r.rating }).map((_, i) => (
                  <span key={i} className="text-cyber-purple/30">★</span>
                ))}
              </div>
              <p className="font-rajdhani text-cyber-purple/80 text-sm italic mb-4">
                "{r.text}"
              </p>
              <p className="font-orbitron text-xs text-cyber-cyan">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}