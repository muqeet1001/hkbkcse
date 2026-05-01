import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  Camera,
  Code2,
  GraduationCap,
  Handshake,
  Lightbulb,
  Globe2,
  Laptop,
  Mail,
  Monitor,
  Play,
  Presentation,
  Rocket,
  Trophy,
  Wifi,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { LoadingScreen } from "@/components/LoadingScreen";

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const footerVideoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#facilities" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const aboutHighlights = [
  {
    title: "Industry-focused learning",
    icon: Laptop,
    tone: "blue",
  },
  {
    title: "Hands-on project experience",
    icon: Rocket,
    tone: "gold",
  },
  {
    title: "Strong problem-solving culture",
    icon: Brain,
    tone: "violet",
  },
  {
    title: "Exposure to modern technologies",
    icon: Globe2,
    tone: "teal",
  },
];

const missionPoints = [
  "Provide quality technical education",
  "Encourage innovation and research",
  "Develop industry-ready professionals",
];

const aboutImages = [
  {
    title: "AI & Coding Lab",
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Project Mentoring",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hardware Prototyping",
    src: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Student Collaboration",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Research Culture",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Modern Learning Spaces",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
  },
];

const highlightCards = [
  {
    value: 95,
    suffix: "%",
    label: "Placement Rate",
    icon: Briefcase,
  },
  {
    value: 200,
    suffix: "+",
    label: "Hackathon Participations",
    icon: Rocket,
  },
  {
    value: 60,
    suffix: "+",
    label: "Industry-Oriented Learning",
    icon: Code2,
  },
  {
    value: 40,
    suffix: "+",
    label: "Startups With Funding",
    icon: Lightbulb,
  },
  {
    value: 50,
    suffix: "+",
    label: "Student Achievements",
    icon: Trophy,
  },
  {
    value: 90,
    suffix: "%",
    label: "Academic Excellence",
    icon: GraduationCap,
  },
];

const highlightImages = [
  {
    title: "Hackathon Culture",
    caption: "Students building, pitching, and competing with practical ideas.",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Placement Momentum",
    caption: "Career-focused preparation shaped around industry expectations.",
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Academic Excellence",
    caption: "Consistent learning outcomes driven by mentoring and discipline.",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Innovation Projects",
    caption: "Ideas becoming prototypes through labs, teamwork, and curiosity.",
    src: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Collaborative Learning",
    caption: "Peer learning, workshops, and technical circles in motion.",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  },
];

type SliderImage = {
  title: string;
  src: string;
};

type FacilityCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  images: SliderImage[];
};

const facilityCards: FacilityCard[] = [
  {
    title: "Advanced Computer Labs",
    description: "Hands-on systems for coding, testing, and technical practice.",
    icon: Monitor,
    images: [
      {
        title: "Hands-on Learning",
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Coding Practice",
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Systems Lab",
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Project Work",
        src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    title: "Smart Classrooms",
    description: "Interactive teaching spaces for focused academic sessions.",
    icon: Presentation,
    images: [
      {
        title: "Interactive Sessions",
        src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Modern Teaching",
        src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Seminar Ready",
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    title: "Startup Incubator",
    description: "A space for prototypes, mentoring, and founder thinking.",
    icon: Rocket,
    images: [
      {
        title: "Innovation Space",
        src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Founder Energy",
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Pitch Culture",
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Prototype Studio",
        src: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    title: "High-Speed Internet & WiFi",
    description: "Reliable connectivity across learning and lab spaces.",
    icon: Wifi,
    images: [
      {
        title: "Always Connected",
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Campus Network",
        src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Fast Access",
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    title: "Latest Software & Tools",
    description: "Development tools that support modern engineering workflows.",
    icon: Wrench,
    images: [
      {
        title: "Developer Tools",
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Modern Stack",
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Build Systems",
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    title: "Library & Digital Resources",
    description: "Curated books, journals, and online research resources.",
    icon: BookOpen,
    images: [
      {
        title: "Digital Research",
        src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Quiet Study",
        src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Knowledge Access",
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

const footerLinkGroups = [
  {
    title: "Explore",
    links: ["Home", "About", "Highlights", "Facilities", "Innovation", "Events", "Contact"],
  },
  {
    title: "Department",
    links: ["About the Department", "Vision & Mission", "Faculty", "Infrastructure"],
  },
  {
    title: "Gallery",
    links: ["Student Life", "Events", "Projects", "Achievements"],
  },
];

const footerSocialLinks = [
  { label: "Instagram", icon: Camera },
  { label: "LinkedIn", icon: Mail },
  { label: "YouTube", icon: Play },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loaderTimelineComplete, setLoaderTimelineComplete] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (loaderTimelineComplete && videoReady) {
      setIsLoading(false);
    }
  }, [loaderTimelineComplete, videoReady]);

  useEffect(() => {
    if (!isLoading && window.location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(window.location.hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setLoaderTimelineComplete(true)} />
        )}
      </AnimatePresence>

      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      >
        <LandingPage onVideoReady={() => setVideoReady(true)} />
      </div>
    </>
  );
}

type LandingPageProps = {
  onVideoReady: () => void;
};

function LandingPage({ onVideoReady }: LandingPageProps) {
  return (
    <main className="relative w-full overflow-x-hidden bg-background text-foreground selection:bg-white/20 selection:text-white">
      <nav className="reference-bottom-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="reference-bottom-nav__link"
          >
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

      <section
        id="home"
        className="relative flex h-screen min-h-screen flex-col overflow-hidden"
      >
        <video
          className="hero-background-video pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          onLoadedMetadata={onVideoReady}
          onLoadedData={onVideoReady}
          onCanPlay={onVideoReady}
          onCanPlayThrough={onVideoReady}
          onPlaying={onVideoReady}
          onError={onVideoReady}
          onContextMenu={(event) => event.preventDefault()}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        <div className="relative z-10 flex min-h-[100svh] w-full flex-1 flex-col items-center justify-center px-6 pb-28 pt-10 text-center sm:pb-32">
          <p className="animate-fade-rise liquid-glass mb-6 inline-flex min-h-12 max-w-[min(92vw,760px)] items-center justify-center rounded-full px-5 py-3 text-center text-[9px] font-medium uppercase tracking-[0.24em] text-[var(--classic-champagne)] sm:min-h-14 sm:px-7 sm:text-[11px] md:text-xs">
            HKBK College of Engineering &bull; Computer Science & Engineering
          </p>

          <h1
            className="animate-fade-rise w-full max-w-6xl text-[clamp(4rem,13vw,10.5rem)] font-normal leading-[0.82] tracking-[-0.055em] text-[var(--classic-ivory)]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            HKBK <em className="not-italic text-[var(--classic-silver)]/48">CSE</em>
          </h1>

          <p
            className="animate-fade-rise-delay mt-6 text-3xl font-normal leading-none tracking-tight text-[var(--classic-ivory)] sm:text-4xl md:text-[2.75rem]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where Innovation Meets Technology
          </p>

          <p className="animate-fade-rise-delay mt-5 max-w-2xl text-sm leading-relaxed text-[var(--classic-silver)]/84 sm:text-base">
            Empowering students to become innovators, problem solvers, and
            future tech leaders through practical learning, modern tools, and
            inspired engineering culture.
          </p>

          <div className="animate-fade-rise-delay-2 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#about"
              className="liquid-glass inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-medium text-[var(--classic-ivory)] transition-transform duration-300 hover:scale-[1.03]"
            >
              Explore Department
              <ArrowRight size={16} strokeWidth={1.8} />
            </a>
            <a
              href="#highlights"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-black/22 px-8 py-3 text-sm font-medium text-[var(--classic-silver)]/86 backdrop-blur-sm transition-all duration-300 hover:border-white/28 hover:bg-white/8 hover:text-white"
            >
              View Highlights
            </a>
          </div>

        </div>
      </section>

      <section
        id="about"
        className="relative scroll-mt-8 overflow-hidden bg-[#050505] px-6 py-24 pb-32 sm:px-8 lg:py-32"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="space-y-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--classic-champagne)]/80">
              About the Department
            </p>
            <h2
              className="max-w-xl text-5xl font-normal leading-[0.96] tracking-tight text-[var(--classic-ivory)] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Building thoughtful engineers for a changing digital world.
            </h2>

            <AboutImageSlider />
          </div>

          <div className="space-y-8">
            <div className="about-copy-card rounded-3xl p-6 sm:p-8">
              <div className="space-y-5 text-base leading-relaxed sm:text-lg">
                <p>
                  The Department of Computer Science & Engineering at HKBK
                  College is dedicated to building a strong foundation in
                  technology, innovation, and problem-solving.
                </p>
                <p>
                  We focus on empowering students with practical skills, modern
                  tools, and real-world knowledge to prepare them for the
                  evolving tech industry.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map(({ title, icon: Icon, tone }) => (
                <div
                  key={title}
                  className={`about-feature-card about-feature-card--${tone} rounded-2xl p-5 text-black`}
                >
                  <span className="about-feature-card__icon mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <p className="text-sm font-medium leading-snug">{title}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="about-panel about-panel--vision rounded-3xl p-6">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-[var(--classic-champagne)]/85">
                  Vision
                </h3>
                <p className="text-sm leading-relaxed text-[var(--classic-silver)]/82">
                  To become a center of excellence in computer science education
                  and innovation.
                </p>
              </div>

              <div className="about-panel about-panel--mission rounded-3xl p-6">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-[var(--classic-champagne)]/85">
                  Mission
                </h3>
                <ul className="space-y-3 text-sm leading-relaxed text-[var(--classic-silver)]/82">
                  {missionPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--classic-champagne)]/80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="highlights"
        className="relative scroll-mt-8 overflow-hidden bg-[#050505] px-6 py-24 pb-36 sm:px-8 lg:py-32"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--classic-champagne)]/80">
                Highlights
              </p>
              <h2
                className="max-w-3xl text-5xl font-normal leading-[0.96] tracking-tight text-[var(--classic-ivory)] sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Proof of progress, shaped by students.
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.95fr]">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {highlightCards.map(({ value, suffix, label, icon: Icon }) => (
                <div key={label} className="highlight-stat-card rounded-3xl p-6">
                  <span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </span>
                  <p
                    className="highlight-count text-5xl font-normal leading-none tracking-tight text-black"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    <AnimatedNumber value={value} suffix={suffix} />
                  </p>
                  <h3 className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-black/70">
                    {label}
                  </h3>
                </div>
              ))}
            </div>

            <HighlightImageSlider />
          </div>
        </div>
      </section>

      <section
        id="facilities"
        className="relative scroll-mt-8 overflow-hidden bg-[#050505] px-6 py-24 pb-36 sm:px-8 lg:py-32"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--classic-champagne)]/80">
              Facilities
            </p>
            <h2
              className="text-5xl font-normal leading-[0.96] tracking-tight text-[var(--classic-ivory)] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Facilities
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--classic-silver)]/82 sm:text-lg">
              Modern infrastructure and resources that support learning,
              innovation, and development.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {facilityCards.map((facility, index) => (
              <FacilityCardView
                key={facility.title}
                facility={facility}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative min-h-[70vh] overflow-hidden bg-[#050505] px-6 pb-24 sm:px-8 font-sans selection:bg-white/20 selection:text-white"
      >
        <video
          className="absolute inset-0 z-[0] h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={footerVideoUrl} type="video/mp4" />
        </video>

        <div className="relative z-10 mx-auto max-w-7xl pt-[250px]">
          <SiteFooter />
        </div>
      </section>
    </main>
  );
}

function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="liquid-glass w-full rounded-3xl p-5 md:p-7 text-white/70"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-9 mb-7">
        <div className="md:col-span-4">
          <div className="mb-4 flex items-center gap-3 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
              fill="currentColor"
            >
              <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
            </svg>
            <span className="text-lg font-medium">HKBK &bull; CSE</span>
          </div>
          <p className="mb-3 text-xs text-white/80">
            Department of Computer Science & Engineering
          </p>
          <p className="text-xs leading-relaxed max-w-sm">
            Empowering students to innovate, build, and lead in the world of
            technology.
          </p>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs uppercase tracking-wider text-white font-medium mb-3">
                {group.title}
              </h3>
              <ul className="space-y-1.5 text-[11px]">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs uppercase tracking-wider text-white font-medium mb-3">
              Contact
            </h3>
            <ul className="space-y-1.5 text-[11px]">
              <li>Email: yourcollege@email.com</li>
              <li>Phone: +91 XXXXX XXXXX</li>
              <li>Location: HKBK College, Bangalore</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-4">
        <p className="text-[10px] uppercase tracking-widest opacity-50">
          &copy; 2026 HKBK College - Department of CSE. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest opacity-50">
            Follow:
          </span>
          <div className="flex items-center gap-3">
            {footerSocialLinks.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="opacity-70 hover:opacity-100 transition-colors hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

type FacilityCardViewProps = {
  facility: FacilityCard;
  index: number;
};

function FacilityCardView({ facility, index }: FacilityCardViewProps) {
  const Icon = facility.icon;

  return (
    <motion.article
      className="facility-card rounded-3xl p-5"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.06, 0.24),
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="facility-card__icon inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white">
          <Icon size={24} strokeWidth={1.8} />
        </span>
      </div>

      <h3 className="text-xl font-semibold leading-tight text-black">
        {facility.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-black/68">
        {facility.description}
      </p>

      <FacilityImageCarousel images={facility.images} />
    </motion.article>
  );
}

type FacilityImageCarouselProps = {
  images: SliderImage[];
};

function FacilityImageCarousel({ images }: FacilityImageCarouselProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const image = images[activeImage];

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [images.length, isPaused]);

  return (
    <div
      className="facility-carousel relative mt-6 h-[190px] overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.figure
          key={image.title}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={image.src}
            alt={image.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-black/16 to-transparent" />
          <figcaption className="absolute inset-x-4 bottom-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/84">
              {image.title}
            </p>
          </figcaption>
        </motion.figure>
      </AnimatePresence>

      <div className="absolute right-4 top-4 z-10 flex gap-1.5">
        {images.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Show ${item.title}`}
            onClick={() => setActiveImage(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeImage === index
                ? "w-7 bg-white"
                : "w-1.5 bg-white/42 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

type AnimatedNumberProps = {
  value: number;
  suffix: string;
};

function AnimatedNumber({ value, suffix }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const numberRef = useRef<HTMLSpanElement>(null);
  const isVisible = useRef(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const element = numberRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          isVisible.current = false;
          setDisplayValue(0);

          if (frameRef.current !== null) {
            window.cancelAnimationFrame(frameRef.current);
          }

          return;
        }

        if (isVisible.current) {
          return;
        }

        isVisible.current = true;
        setDisplayValue(0);

        const startTime = performance.now();
        const duration = 1600;

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setDisplayValue(Math.round(value * easedProgress));

          if (progress < 1) {
            frameRef.current = window.requestAnimationFrame(tick);
          }
        };

        frameRef.current = window.requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value]);

  return (
    <span ref={numberRef} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

function HighlightImageSlider() {
  const [activeImage, setActiveImage] = useState(0);
  const image = highlightImages[activeImage];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % highlightImages.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="highlight-feature-card relative min-h-[480px] overflow-hidden rounded-3xl lg:min-h-full">
      <AnimatePresence mode="wait">
        <motion.figure
          key={image.title}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.98, x: -30 }}
          transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={image.src}
            alt={image.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/84 via-black/24 to-black/8" />
          <figcaption className="absolute inset-x-6 bottom-6">
            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
              <Handshake size={24} strokeWidth={1.8} />
            </span>
            <h3
              className="max-w-sm text-4xl font-normal leading-[0.96] text-[var(--classic-ivory)]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {image.title}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--classic-silver)]/82">
              {image.caption}
            </p>
          </figcaption>
        </motion.figure>
      </AnimatePresence>

      <div className="absolute right-6 top-6 z-10 flex gap-2">
        {highlightImages.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Show ${item.title}`}
            onClick={() => setActiveImage(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeImage === index
                ? "w-8 bg-white"
                : "w-1.5 bg-white/35 hover:bg-white/65"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function AboutImageSlider() {
  const [activeImage, setActiveImage] = useState(0);
  const image = aboutImages[activeImage];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % aboutImages.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="liquid-glass relative mt-8 h-[320px] max-w-xl overflow-hidden rounded-3xl p-3 sm:h-[380px]">
      <AnimatePresence mode="wait">
        <motion.figure
          key={image.title}
          className="absolute inset-3 overflow-hidden rounded-2xl"
          initial={{ opacity: 0, scale: 1.04, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.98, x: -24 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={image.src}
            alt={image.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/18 to-transparent" />
          <figcaption className="absolute inset-x-5 bottom-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--classic-champagne)]/80">
              Department Moment
            </p>
            <h3 className="mt-2 text-2xl font-medium leading-tight text-[var(--classic-ivory)]">
              {image.title}
            </h3>
          </figcaption>
        </motion.figure>
      </AnimatePresence>

      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
        {aboutImages.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Show ${item.title}`}
            onClick={() => setActiveImage(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeImage === index
                ? "w-8 bg-[var(--classic-champagne)]"
                : "w-1.5 bg-white/35 hover:bg-white/65"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
