import Link from "next/link";
import CareerPulse from "@/components/career-pulse";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-slate-950 flex flex-col">
      {/* Top-left Brand */}
      <header className="absolute top-6 left-6 md:top-8 md:left-8">
        <span className="font-mono text-xs md:text-sm text-white/80 tracking-wide">
          Iury Souza Cloud Engineering
        </span>
      </header>

      {/* Centered Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-24">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-sans font-semibold text-white text-center max-w-4xl leading-tight text-balance">
          Building resilient cloud systems with a full stack approach.
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-lg md:text-xl text-white/70 font-sans text-center">
          {"Let's innovate together."}
        </p>

        {/* Stack List */}
        <div className="mt-10">
          <span className="font-mono text-sm md:text-base text-sky-400 tracking-wide">
            [ AWS Professional | Cloud Architect | SRE ]
          </span>
        </div>
      </div>

      {/* Footer Links */}
      <footer className="absolute bottom-6 left-0 right-0 flex justify-center">
        <nav className="font-mono text-xs md:text-sm text-white/60 tracking-wide flex items-center gap-1">
          <span>[</span>
          <Link 
            href="/CV_GabrielFalcaoDaCruz.pdf" 
            target="_blank"
            className="hover:text-sky-400 transition-colors"
          >
            Resume
          </Link>
          <span>|</span>
          <Link 
            href="https://github.com/GabrielF0900" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            GitHub
          </Link>
          <span>|</span>
          <Link 
            href="https://linkedin.com/in/iurysouza" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            LinkedIn
          </Link>
          <span>]</span>
        </nav>
      </footer>

      {/* Career Pulse Component */}
      <CareerPulse />
    </main>
  );
}
