import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

import { LoadingScreen } from "@/components/LoadingScreen";

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const navLinks = [
  "Home",
  "About",
  "Highlights",
  "Facilities",
  "Innovation",
  "Events",
  "Contact",
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
      <section className="relative flex h-screen min-h-screen flex-col overflow-hidden">
        <video
          className="hero-background-video pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          onLoadedData={onVideoReady}
          onCanPlay={onVideoReady}
          onError={onVideoReady}
          onContextMenu={(event) => event.preventDefault()}
          aria-hidden="true"
          tabIndex={-1}
        />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-[60px] pb-32 pt-24 text-center">
          <p className="animate-fade-rise mb-4 text-xs font-medium tracking-[0.2em] text-[var(--classic-champagne)] uppercase sm:text-sm">
            Department of Computer Science, HKBK College of Engineering
          </p>
          <h1
            className="animate-fade-rise w-full max-w-5xl text-5xl font-normal leading-[1.05] tracking-tight sm:text-7xl md:text-8xl text-[var(--classic-ivory)]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where <em className="not-italic text-[var(--classic-silver)]/50">Innovation</em> Meets{" "}
            <em className="not-italic text-[var(--classic-silver)]/50">Technology</em>
          </h1>

          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[var(--classic-silver)]/80 sm:text-lg">
            Empowering students to become innovators, problem solvers, and future
            tech leaders.
          </p>


        </div>

        <nav className="bottom-pill-nav liquid-glass fixed bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-6 rounded-full bg-black/70 px-8 py-4 text-foreground shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-max max-w-[90vw] border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`relative px-2 py-1 text-xs font-medium tracking-wide transition-all duration-300 sm:text-sm ${
                link === "Home"
                  ? "text-[var(--classic-champagne)] font-semibold"
                  : "text-[var(--classic-silver)]/70 hover:text-[var(--classic-ivory)] hover:scale-110"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>
      </section>

    </main>
  );
}

export default App;
