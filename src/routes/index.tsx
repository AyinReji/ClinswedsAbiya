import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import floral from "@/assets/floral-corner.png";
import leaf from "@/assets/leaf-sprig.png";
import moment1 from "@/assets/moment-1.jpeg";
import moment2 from "@/assets/moment-2.jpeg";
import moment3 from "@/assets/moment-3.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clins & Abiya" },
      { name: "description", content: "Together with their families, Clins & Abiya invite you to celebrate their wedding on 13 July 2026 at The Botanical Pavilion, Garden Grove." },
      { property: "og:title", content: "Clins & Abiya — A Wedding Invitation" },
      { property: "og:description", content: "13 July 2026 · The Botanical Pavilion, Garden Grove." },
    ],

    
    links: [
      {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Great+Vibes&family=Allura&family=Pinyon+Script&family=Inter:wght@300;400;500&display=swap",      },
    
      ],
  }),
  component: Invitation,
});

/* ---------- Ambient atmosphere ---------- */
function Atmosphere({ density = 14, glow = false }: { density?: number; glow?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(density)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${(i * 17 + 5) % 100}%`,
            top: `-12px`,
            width: glow ? 3 : 5,
            height: glow ? 3 : 5,
            background: glow ? "oklch(0.95 0.04 88 / 0.9)" : "oklch(0.92 0.05 90 / 0.85)",
            boxShadow: glow
              ? "0 0 10px oklch(0.85 0.08 88 / 0.9)"
              : "0 0 8px oklch(0.85 0.05 90 / 0.5)",
            animation: `drift ${14 + (i % 7) * 2}s linear ${i * 0.7}s infinite`,
            filter: i % 3 === 0 ? "blur(1px)" : "none",
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Intro Overlay ---------- */
function Intro({ onDone }: { onDone: () => void }) {
  const [exiting, setExiting] = useState(false);
  const close = () => { setExiting(true); window.setTimeout(onDone, 1100); };

  useEffect(() => {
    const t1 = window.setTimeout(() => setExiting(true), 3600);
    const t2 = window.setTimeout(onDone, 4800);
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center paper grain overflow-hidden cursor-pointer"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1, filter: exiting ? "blur(10px)" : "blur(0px)" }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      onClick={close}
    >
      <motion.img
        src={leaf} alt=""
        initial={{ opacity: 0, y: -30, rotate: -20 }}
        animate={{ opacity: 0.6, y: 0, rotate: -12 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="pointer-events-none absolute -top-10 -left-16 w-56"
      />
      <motion.img
        src={leaf} alt=""
        initial={{ opacity: 0, y: 30, rotate: 200 }}
        animate={{ opacity: 0.6, y: 0, rotate: 180 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="pointer-events-none absolute -bottom-10 -right-16 w-56"
      />
      <motion.img
        src={floral} alt=""
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute -bottom-20 -left-20 w-72"
      />
      <motion.img
        src={floral} alt=""
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="pointer-events-none absolute -top-24 -right-24 w-72"
      />

      <div className="relative text-center px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[11px] tracking-[0.4em] mb-8 font-sans-tracked"
          style={{ color: "oklch(0.42 0.05 128 / 0.7)" }}
        >
          THE WEDDING OF
        </motion.p>

        <h1 className="leading-none">
          <SignatureReveal text="Clins" delay={0.5} className="font-script text-7xl" color="var(--olive-deep)" />
          <motion.span
            className="block font-script text-5xl my-3"
            style={{ color: "var(--gold)" }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.9 }}
          >
            &amp;
          </motion.span>
          <SignatureReveal text="Abiya" delay={2.1} className="text-7xl" style={{ fontFamily: "'Pinyon Script', cursive" }} color="var(--olive-deep)" />
        </h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 3, duration: 0.9 }}
          className="ornament-line w-32 mx-auto mt-10"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.6 }}
          className="text-[10px] tracking-[0.35em] mt-4 text-muted-foreground"
        >
          13 · 07 · 2026
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 3.6, duration: 0.8 }}
          className="text-[9px] tracking-[0.3em] mt-6 text-muted-foreground"
        >
          TAP TO OPEN
        </motion.p>
      </div>

      <Atmosphere density={10} glow />
    </motion.div>
  );
}

function SignatureReveal({ text, delay, className, color, style }: { text: string; delay: number; className?: string; color?: string; style?: React.CSSProperties }) {
  return (
    <span
      className={`inline-block relative align-bottom leading-[1.15] pt-2 ${className ?? ""}`}
      style={{ color, ...style }}
    >
      <span aria-hidden className="opacity-0">{text}</span>
      <motion.span
        className="absolute inset-0 whitespace-nowrap"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ delay, duration: 1.4, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
    </span>
  );
}

/* ---------- Main Invitation ---------- */
function Invitation() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>{showIntro && <Intro key="intro" onDone={() => {
  setShowIntro(false);

  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });
}} />}</AnimatePresence>

      <main className="relative w-full min-h-screen flex justify-center bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 0 : 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative w-full max-w-[480px] paper grain overflow-hidden shadow-[0_0_80px_-30px_rgba(80,90,60,0.25)]"
        >
          <Hero />
          <Invite />
          <Details />
          <Countdown />
          <Moments />
          <Quote />
          <BlendedFooter />
        </motion.div>
      </main>
    </>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-6 min-h-[100svh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Layered botanical depth */}
      <motion.img
        src={floral} alt=""
        initial={{ opacity: 0, y: -20, scale: 1.05 }}
        animate={{ opacity: 0.75, y: 0, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="pointer-events-none absolute -top-10 -right-16 w-64"
        style={{ filter: "blur(0.3px)" }}
      />
      <motion.img
        src={floral} alt=""
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="pointer-events-none absolute -bottom-10 -left-16 w-64"
      />
      <motion.img
        src={leaf} alt=""
        initial={{ opacity: 0, rotate: 200 }}
        animate={{ opacity: 0.45, rotate: 180 }}
        transition={{ duration: 1.6, delay: 0.4 }}
        className="pointer-events-none absolute top-40 -left-14 w-36"
      />
      {/* Blurred foreground flower */}
      <motion.img
        src={floral} alt=""
        animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-20 right-0 w-72 opacity-50"
        style={{ filter: "blur(6px)" }}
      />
      {/* Soft glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, oklch(0.95 0.04 88 / 0.55), transparent 60%)",
        }}
      />

      <Atmosphere density={14} glow />

      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[10px] tracking-[0.4em] text-muted-foreground font-sans-tracked"
        >
          TOGETHER WITH THEIR FAMILIES
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="ornament-line w-20 mx-auto mt-5"
        />

        <h1 className="mt-8 leading-tight pt-3">
          <SignatureReveal
            text="Clins"
            delay={1}
            className="font-script text-[96px]"
            color="var(--olive-deep)"
          />
          <motion.span
            className="block font-script text-[60px] my-1"
            style={{ color: "var(--gold)" }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            &amp;
          </motion.span>
          <SignatureReveal
            text="Abiya"
            delay={2.5}
            className="text-[96px]"
            style={{ fontFamily: "'Pinyon Script', cursive" }}
            color="var(--olive-deep)"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="text-[10px] tracking-[0.35em] text-muted-foreground mt-10 font-sans-tracked"
        >
          INVITE YOU TO CELEBRATE THEIR WEDDING
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 1 }}
          className="flex items-center gap-3 my-5 max-w-[220px] mx-auto"
        >
          <span className="h-px flex-1 bg-border" />
          <span className="text-[10px]" style={{ color: "var(--gold)" }}>✦</span>
          <span className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1 }}
          className="font-display tracking-[0.3em] text-xl"
          style={{ color: "var(--ink)" }}
        >
          13 JULY 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.6, duration: 1 }}
          className="mt-14"
        >
          <p className="text-[10px] tracking-[0.35em] text-muted-foreground font-sans-tracked">SCROLL TO OPEN INVITATION</p>
          <motion.div
            animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}
            className="mt-3 w-8 h-8 rounded-full border border-border mx-auto grid place-items-center"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--olive-deep)" }}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Invite ---------- */
function Invite() {
  return (
    <section className="relative px-6 py-16 text-center overflow-hidden">
      <Atmosphere density={6} />
      <motion.img
        src={floral} alt=""
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="pointer-events-none absolute -left-12 top-0 w-36"
      />
      <motion.img
        src={floral} alt=""
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="pointer-events-none absolute -right-12 bottom-0 w-36"
      />
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2 }}
        className="font-display text-2xl leading-relaxed"
        style={{ color: "var(--ink)" }}
      >
        With joyful hearts,<br />we invite you to celebrate<br />our wedding day.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex items-center justify-center gap-2 mt-8"
      >
        <svg width="60" height="14" viewBox="0 0 60 14" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: "var(--olive)" }}>
          <path d="M2 7 Q10 1 18 7 Q26 13 34 7" />
        </svg>
        <span style={{ color: "var(--gold)" }}>✦</span>
        <svg width="60" height="14" viewBox="0 0 60 14" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: "var(--olive)" }}>
          <path d="M2 7 Q10 13 18 7 Q26 1 34 7" />
        </svg>
      </motion.div>
    </section>
  );
}

/* ---------- Details ---------- */
function Details() {
  return (
    <section className="relative px-6 pb-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1 }}
        animate={{ y: [0, -3, 0] }}
        style={{ background: "oklch(0.96 0.02 88 / 0.7)" }}
        className="relative rounded-2xl border border-border/70 backdrop-blur px-5 py-7 shadow-[0_20px_50px_-30px_rgba(80,90,60,0.35)]"
      >
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { icon: "calendar", label: "WEDDING DATE", value: "13 July 2026", sub: "MONDAY" },
            { icon: "clock", label: "TIME", value: "11:30 AM", sub: "MORNING" },
            { icon: "pin", label: "VENUE", value: "LE GRANDE AUDITORIUM", sub: "KURIACHIRA THRISSUR" },
          ].map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.8 }}
              className="flex flex-col items-center gap-2"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-10 h-10 rounded-full border grid place-items-center"
                style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
              >
                <Icon name={d.icon} />
              </motion.div>
              <p className="text-[8px] tracking-[0.2em] text-muted-foreground font-sans-tracked">{d.label}</p>
              <p className="font-display text-[13px] leading-tight" style={{ color: "var(--ink)" }}>{d.value}</p>
              <p className="text-[8px] tracking-[0.2em] text-muted-foreground font-sans-tracked">{d.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-6 -mb-12">
          <motion.a
            href="https://maps.app.goo.gl/CJzyGyp3sdPFsg6v5" target="_blank" rel="noopener noreferrer"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden flex items-center gap-3 px-6 py-3 rounded-full shadow-[var(--shadow-soft)]"
            style={{ background: "var(--olive-deep)", color: "var(--ivory)" }}
          >
            <span className="text-[11px] tracking-[0.3em] font-sans-tracked">VIEW LOCATION</span>
            <Icon name="map" />
            <motion.span
              className="absolute inset-0 pointer-events-none"
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.95 0.04 88 / 0.45), transparent)",
              }}
            />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

function Icon({ name }: { name: string }) {
  const p = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.4 } as const;
  switch (name) {
    case "calendar": return <svg {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg>;
    case "clock": return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case "pin": return <svg {...p}><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" /><circle cx="12" cy="9" r="2.5" /></svg>;
    case "map": return <svg {...p}><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" /><path d="M9 4v14M15 6v14" /></svg>;
    default: return null;
  }
}

/* ---------- Countdown ---------- */
function Countdown() {
  const target = useMemo(() => new Date("2026-07-13T11:30:00").getTime(), []);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const i = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(i);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);

  return (
    <section className="relative px-6 pt-24 pb-16 text-center overflow-hidden">
      <Atmosphere density={8} glow />
      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 h-40"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.72 0.11 85 / 0.12), transparent 70%)",
        }}
      />
      <p className="text-[10px] tracking-[0.35em] text-muted-foreground font-sans-tracked">COUNTDOWN TO OUR BIG DAY</p>
      <div className="flex items-center justify-center gap-1 my-3" style={{ color: "var(--gold)" }}>
        <span className="h-px w-6 bg-current opacity-50" />✦<span className="h-px w-6 bg-current opacity-50" />
      </div>
      <div className="relative grid grid-cols-4 gap-2 mt-4">
        {[{n:d,l:"DAYS"},{n:h,l:"HOURS"},{n:m,l:"MINUTES"},{n:s,l:"SECONDS"}].map((x,i) => (
          <div key={i} className="relative h-24 flex flex-col items-center">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={x.n}
                initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-display text-4xl absolute inset-0"
                style={{ color: "var(--ink)" }}
              >
                {String(x.n).padStart(2,"0")}
              </motion.p>
            </AnimatePresence>
            <p className="text-[9px] tracking-[0.3em] text-muted-foreground mt-12 font-sans-tracked">{x.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Moments (stacked polaroids) ---------- */
function Moments() {
  const photos = [moment1, moment2, moment3];
  const [order, setOrder] = useState([0, 1, 2]);
  const cycle = () => setOrder(([a, b, c]) => [b, c, a]);

  // auto cycle
  useEffect(() => {
    const t = window.setInterval(cycle, 5000);
    return () => window.clearInterval(t);
  }, []);

  const slots = [
    { rot: -10, x: -36, y: 30, scale: 0.92, z: 1, opacity: 0.85, blur: 1.5 },
    { rot: 8,   x:  28, y: 18, scale: 0.96, z: 2, opacity: 0.95, blur: 0.6 },
    { rot: -2,  x:   0, y:  0, scale: 1,    z: 3, opacity: 1,    blur: 0 },
  ];

  return (
    // remove the last hidden class to show this section IN THE LINE 581
    <section className="relative px-6 py-20 text-center overflow-hidden">
      <Atmosphere density={6} />
      <p className="text-[10px] tracking-[0.35em] text-muted-foreground font-sans-tracked">OUR MOMENTS</p>
      <div className="flex items-center justify-center gap-1 mt-3" style={{ color: "var(--gold)" }}>
        <span className="h-px w-6 bg-current opacity-50" />✦<span className="h-px w-6 bg-current opacity-50" />
      </div>

      <div
        className="relative mx-auto mt-10 cursor-pointer select-none"
        style={{ height: 360, width: 260 }}
        onClick={cycle}
      >
        {order.map((photoIdx, slotIdx) => {
          const s = slots[slotIdx];
          return (
            <motion.div
              key={photoIdx}
              layout
              initial={false}
              animate={{
                rotate: s.rot,
                x: s.x,
                y: s.y,
                scale: s.scale,
                opacity: s.opacity,
                filter: `blur(${s.blur}px)`,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.8 }}
              className="absolute left-1/2 top-0 -translate-x-1/2 bg-white p-3 pb-10 shadow-[0_25px_50px_-20px_rgba(60,70,40,0.45)]"
              style={{ zIndex: s.z, width: 240 }}
            >
              <img src={photos[photoIdx]} alt="" className="w-full h-72 object-cover" loading="lazy" />
            </motion.div>
          );
        })}
      </div>

      <motion.p
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="text-[9px] tracking-[0.3em] text-muted-foreground mt-8 font-sans-tracked"
      >
        TAP TO REVEAL
      </motion.p>

      <motion.img
        src={floral} alt=""
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-12 bottom-0 w-36 opacity-50"
      />
    </section>
  );
}

/* ---------- Quote ---------- */
function Quote() {
  return (
    <section className="relative px-6 py-16 text-center overflow-hidden">
      <Atmosphere density={5} />
      <motion.span
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="font-display text-6xl block leading-none"
        style={{ color: "var(--olive)" }}
      >
        “
      </motion.span>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="font-display text-2xl leading-snug mt-3"
        style={{ color: "var(--ink)" }}
      >
        A beautiful beginning<br />to a lifetime of love.
      </motion.p>
      <div className="flex items-center justify-center gap-1 mt-6" style={{ color: "var(--gold)" }}>
        <span className="h-px w-8 bg-current opacity-50" />✦<span className="h-px w-8 bg-current opacity-50" />
      </div>
    </section>
  );
}

/* ---------- Blended footer (no hard break) ---------- */
function BlendedFooter() {
  return (
    <section className="relative px-6 pt-10 pb-14 text-center overflow-hidden">
      {/* atmospheric continuation */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.55 0.055 125 / 0.08), transparent 70%), radial-gradient(ellipse at 50% 100%, oklch(0.72 0.11 85 / 0.07), transparent 75%)",
        }}
      />
      <Atmosphere density={8} glow />
      <motion.img
        src={floral} alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6 }}
        className="pointer-events-none absolute -left-16 top-0 w-44"
      />
      <motion.img
        src={leaf} alt=""
        initial={{ opacity: 0, rotate: -180 }}
        whileInView={{ opacity: 0.5, rotate: -160 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6 }}
        className="pointer-events-none absolute -right-10 top-6 w-32"
      />

      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="font-display font-light text-5xl"
          style={{ color: "var(--ink)" }}
        >
          Thank You
        </motion.h2>
        <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, delay: 0.2 }}
  className="font-script text-4xl mt-3"
  style={{ color: "var(--gold)" }}
>
  Clins &amp; <span style={{ fontFamily: "'Pinyon Script', cursive" }}>Abiya</span>
</motion.p>
<p className="text-[10px] tracking-[0.35em] text-muted-foreground mt-5 font-sans-tracked">13 JULY 2026</p>
<div className="flex items-center justify-center gap-1 mt-4" style={{ color: "var(--gold)" }}>
  <span className="h-px w-6 bg-current opacity-50" />✦<span className="h-px w-6 bg-current opacity-50" />
</div>

        <p className="text-[11px] text-muted-foreground mt-10">
          Designed by{" "}
          <a
            href="https://avenirstudios.vercel.app"
            className="story-link"
            style={{ color: "var(--ink)" }}
          >
            Kaeon
          </a>{" "}
          <span style={{ color: "var(--gold)" }}>✦</span>
        </p>
      </div>
    </section>
  );
}
