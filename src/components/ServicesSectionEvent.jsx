import { useEffect, useRef, useState } from "react";
import {
  Heart,
  Briefcase,
  Star,
  Users,
  Globe,
  Zap,
  Monitor,
  HelpCircle,
  ArrowUpRight,
} from "lucide-react";

/* ─── Service Data ─────────────────────────────────────────── */
const services = [
  {
    id: 1,
    rotation: "rotate-0",
    title: "Weddings",
    desc: "Add an elegant touch to your special day with a premium tea and hot chocolate station. A memorable experience your guests will talk about long after the celebration.",
    IconComponent: Heart,
  },
  {
    id: 2,
    rotation: "rotate-[1.6deg]",
    title: "Corporate Events",
    desc: "Impress clients and colleagues with a sophisticated beverage service. From conference breaks to product launches, we elevate every corporate occasion.",
    IconComponent: Briefcase,
  },
  {
    id: 3,
    rotation: "rotate-[3deg]",
    title: "Festivals & Markets",
    desc: "Stand out at outdoor events with a premium mobile drinks offering. Our setup brings warmth, quality, and character to festivals and artisan markets of any scale.",
    IconComponent: Star,
  },
  {
    id: 4,
    rotation: "rotate-[5deg]",
    title: "Private Parties",
    desc: "Celebrate in style with a bespoke drinks service tailored to your occasion. Whether it's a birthday, anniversary, or intimate gathering, we bring the luxury to you.",
    IconComponent: Users,
  },
  {
    id: 5,
    rotation: "rotate-[7deg]",
    title: "Charity & Community",
    desc: "Support your community with a premium refreshment experience. We are proud to work alongside charities and community organisers to make every event special.",
    IconComponent: Globe,
  },
  {
    id: 6,
    rotation: "rotate-[9deg]",
    title: "Sporting Events",
    desc: "Keep athletes, supporters, and spectators energised and refreshed. Our speciality drinks offer a premium alternative at competitions, races, and sports days.",
    IconComponent: Zap,
  },
  {
    id: 7,
    rotation: "rotate-[11deg]",
    title: "Exhibitions & Trade Shows",
    desc: "Draw visitors to your stand and create a lasting impression. A Tigris Aurum drinks service adds real distinction to your exhibition presence.",
    IconComponent: Monitor,
  },
  {
    id: 8,
    rotation: "rotate-[13deg]",
    title: "Any Occasion",
    desc: "Don't see your event type listed? We cater for all occasions large and small. Get in touch and we'll create a bespoke package designed around your needs.",
    IconComponent: HelpCircle,
  },
];

/* ─── Icon Wrapper ────────────────────────────────────────── */
function IconWrapper({ Icon }) {
  return (
    <div
      className="w-13 h-13 rounded-xl flex items-center justify-center"
      style={{ background: "#F0E6CC" }}
    >
      <Icon
        size={26}
        style={{ color: "var(--brand-deep, #A7862C)" }}
        strokeWidth={2}
      />
    </div>
  );
}

/* ─── Service Card ────────────────────────────────────────── */
function ServiceCard({ service, translateY, zIndex, opacity, isMobile }) {
  return (
    <div
      className={`absolute w-full ${isMobile ? "max-w-full" : "max-w-105"} transition-all duration-75 ease-linear will-change-transform`}
      style={{
        zIndex,
        opacity,
        transform: `translateY(${translateY}%)`,
      }}
    >
      {/* Gradient border */}
      <div
        className={`${service.rotation} rounded-xl p-[1.5px]`}
        style={{
          background: "linear-gradient(135deg, var(--brand-primary, #C9A84C), var(--brand-deep, #A7862C))",
          boxShadow: "0 4px 48px rgba(201,168,76,0.13)",
        }}
      >
        {/* Card body */}
        <div
          className="rounded-[10.5px] flex flex-col gap-3.5 md:gap-4.5 p-[22px_20px_26px] md:p-[28px_28px_32px]"
          style={{ background: "var(--surface-alt, #F4EDDD)" }}
        >
          <IconWrapper Icon={service.IconComponent} />
          <div className="flex flex-col gap-2">
            <h3
              className="text-[17px] md:text-[20px] font-bold leading-[1.3] m-0"
              style={{ color: "var(--heading-color, #1A1A1A)" }}
            >
              {service.title}
            </h3>
            <p
              className="text-[13px] md:text-[14px] leading-[1.75] m-0"
              style={{ color: "var(--body-color, #2C2C2C)", opacity: 0.8 }}
            >
              {service.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Progress Dots ───────────────────────────────────────── */
function ProgressDots({ total, active }) {
  return (
    <div className="flex gap-[7px] mt-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="w-[7px] h-[7px] rounded-full transition-all duration-300"
          style={{
            background:
              i === active
                ? "var(--brand-primary, #C9A84C)"
                : "#D9CDB5",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Enquire Button ──────────────────────────────────────── */
function EnquireBtn() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-semibold no-underline transition-all duration-200 hover:scale-[1.04]"
      style={{
        background:
          "linear-gradient(135deg, var(--brand-primary, #C9A84C), var(--brand-deep, #A7862C))",
        color: "var(--surface, #FCFAF5)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 8px 32px rgba(201,168,76,0.38)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      Enquire About Your Event
      <ArrowUpRight size={18} />
    </a>
  );
}

/* ─── Main Section ────────────────────────────────────────── */
export default function HireSection() {
  const outerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const TOTAL_EXITS = services.length - 1;
  const phaseSize = 1 / TOTAL_EXITS;

  const getCardState = (i) => {
    if (i === services.length - 1) {
      return { translateY: 0, opacity: 1, zIndex: 1 };
    }
    const local = Math.min(
      Math.max((progress - i * phaseSize) / phaseSize, 0),
      1
    );
    return {
      translateY: local * -200,
      opacity: local > 0.75 ? 1 - (local - 0.75) / 0.25 : 1,
      zIndex: services.length - i,
    };
  };

  // Active card for dots
  const activeIdx = Math.min(
    Math.floor(progress / phaseSize),
    TOTAL_EXITS
  );

  return (
    <section
      ref={outerRef}
      className="relative"
      style={{
        height: "400vh",
        background: "var(--surface, #FCFAF5)",
      }}
    >
      <div
        className="sticky top-0 h-screen flex items-center overflow-hidden"
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-[clamp(24px,5vw,80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-[clamp(40px,6vw,120px)] items-center">

            {/* Left Content */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Eyebrow */}
              <span
                className="text-[11px] uppercase tracking-[0.18em] italic"
                style={{ color: "var(--brand-primary, #C9A84C)", fontFamily: "Georgia, serif" }}
              >
                Premium Mobile Service
              </span>

              <h2
                className="text-[1.6rem] md:text-[clamp(1.8rem,3.2vw,2.8rem)] font-bold leading-[1.18] m-0"
                style={{ color: "var(--heading-color, #1A1A1A)", fontFamily: "Georgia, serif" }}
              >
                Hire Us for{" "}
                <em style={{ color: "var(--brand-primary, #C9A84C)" }}>
                  Your Event
                </em>
              </h2>

              <p
                className="text-[0.85rem] md:text-[clamp(0.875rem,1.2vw,1rem)] leading-[1.85] max-w-[460px] m-0"
                style={{ color: "var(--body-color, #2C2C2C)", opacity: 0.85 }}
              >
                Tigris Aurum brings premium teas, velvety hot chocolates, and
                indulgent speciality drinks directly to your event. From intimate
                gatherings to large-scale occasions, we craft an exceptional
                beverage experience wherever you need us.
              </p>

              <div className="mt-1">
                <EnquireBtn />
              </div>

              {/* Progress dots */}
              <ProgressDots total={services.length} active={activeIdx} />
            </div>

            {/* Right Side (Card Stack) */}
            <div className="relative h-75 md:h-90 flex justify-center items-center overflow-visible">
              {services.map((service, i) => {
                const { translateY, opacity, zIndex } = getCardState(i);
                return (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    translateY={translateY}
                    zIndex={zIndex}
                    opacity={opacity}
                    isMobile={isMobile}
                  />
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}