import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import {
  Search,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Wrench,
  FlaskConical,
  X,
  ArrowUpRight,
  Heart,
  Github,
  Linkedin,
  Mail,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, articles, profile } from "@/data/portfolio";
const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Blog", to: "/blog" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
] as const;
export function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/SavantCode" target="_blank" rel="noreferrer" title="GitHub">
        <Github />
      </a>
      {/* <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
        <Linkedin />
      </a> */}
      <a
        href="https://leetcode.com/u/rahulkushwaha2506/"
        target="_blank"
        rel="noreferrer"
        title="LeetCode"
        className="inline-flex items-center justify-center hover:text-primary transition-colors"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.606-2.636a4.994 4.994 0 0 0-3.853-1.462c-1.442 0-2.812.583-3.839 1.61L3.52 10.98c-1.028 1.028-1.593 2.398-1.593 3.84 0 1.442.565 2.812 1.593 3.839l4.333 4.363c1.027 1.028 2.397 1.593 3.839 1.593 1.442 0 2.812-.565 3.839-1.593l2.606-2.636c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038zM20.811 13.01H10.666c-.702 0-1.27.568-1.27 1.27 0 .702.568 1.27 1.27 1.27h10.145c.702 0 1.27-.568 1.27-1.27 0-.702-.568-1.27-1.27-1.27z" />
        </svg>
      </a>
      <a href={`mailto:${profile.email}`} title="Email">
        <Mail />
      </a>
    </div>
  );
}
export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [light, setLight] = useState(false);
  const [muted, setMuted] = useState(true);
  const [lens, setLens] = useState("eng");
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    setLight(localStorage.getItem("portfolio-theme") === "light");
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        setSearch((s) => !s);
      }
      if (event.key === "Escape") setSearch(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  useEffect(() => {
    setSearch(false);
    setQuery("");
  }, [pathname]);
  const results = [
    ...navigation.map((n) => ({ title: n.label, to: n.to, kind: "Page" })),
    ...projects.map((p) => ({ title: p.name, to: "/projects" as const, kind: "Project" })),
    ...articles.map((a) => ({ title: a.title, to: "/blog" as const, kind: "Article" })),
  ].filter((r) => r.title.toLowerCase().includes(query.toLowerCase()));
  

  //sound function
  const sound = (e?: React.MouseEvent) => {
  if (muted) return;

  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();

    if (ctx.state === "suspended") {
      void ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(520, ctx.currentTime);

    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);

    osc.onended = () => {
      void ctx.close();
    };
  } catch (err) {
    console.warn("Audio playback prevented:", err);
  }
};

  //
  return (
    <>
      <header className="site-header">
        <div className="nav-inner">
          <nav aria-label="Main navigation">
  {navigation.map((item) => (
    <Link
      key={item.label}
      to={item.to}
      onClick={sound}
      className={
        pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to))
          ? "nav-link active"
          : "nav-link"
      }
    >
      {item.label}
    </Link>
  ))}
</nav>
          <div className="header-tools">
            <div className="lens-switch" aria-label="Viewing lens">
              <Button
                variant="ghost"
                size="sm"
                title="Engineering lens"
                aria-pressed={lens === "eng"}
                onClick={() => setLens("eng")}
                className={lens === "eng" ? "selected" : ""}
              >
                <Wrench /> <span>Eng</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                title="Research lens"
                aria-pressed={lens === "res"}
                onClick={() => setLens("res")}
                className={lens === "res" ? "selected" : ""}
              >
                <FlaskConical />
                <span>Res</span>
              </Button>
            </div>
            <Button
              variant="outline"
              onClick={() => setSearch(true)}
              className="search-trigger rounded-full"
              aria-label="Search portfolio"
            >
              <Search />
              <span className="shortcut">
                <kbd>Ctrl</kbd>
                <kbd>K</kbd>
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="round-tool sound-tool"
              title={muted ? "Enable interaction sounds" : "Mute interaction sounds"}
              aria-label={muted ? "Enable interaction sounds" : "Mute interaction sounds"}
              onClick={() => setMuted((m) => !m)}
            >
              {muted ? <VolumeX /> : <Volume2 />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="round-tool"
              title="Toggle theme"
              aria-label="Toggle theme"
              onClick={() => {
                setLight((l) => !l);
                localStorage.setItem("portfolio-theme", light ? "dark" : "light");
              }}
            >
              {light ? <Sun /> : <Moon />}
            </Button>
          </div>
        </div>
      </header>
      <main key={pathname} className="main-content page-enter" data-lens={lens}>
        {children}
      </main>
      <footer className="site-footer">
        <blockquote>
          <span className="quote-mark">“</span>
          <p>“The world isn't perfect. But that's the way it is.”</p>
          <cite>~ Edward Elric, Fullmetal Alchemist</cite>
        </blockquote>
        <div className="footer-bottom">
          <div className="flex justify-center gap-6">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
          <p className="mt-6 flex justify-center items-center gap-1.5">
            Made with <Heart size={15} className="heart-icon" /> by <strong>{profile.name}</strong>
          </p>
          <p className="mt-1">© 2026. All rights reserved.</p>
        </div>
      </footer>
      {search && (
        <div className="dialog-overlay" onClick={() => setSearch(false)}>
          <section
            className="search-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-3 items-center border-b border-border p-4">
              <Search className="text-muted-foreground" size={20} />
              <label id="search-title" className="sr-only" htmlFor="portfolio-search">
                Search portfolio
              </label>
              <input
                id="portfolio-search"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, projects, writing…"
                className="flex-1 min-w-0 bg-transparent outline-none"
              />
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close search"
                onClick={() => setSearch(false)}
              >
                <X />
              </Button>
            </div>
            <div className="p-2 max-h-96 overflow-auto">
              {results.length ? (
                results.map((r) => (
                  <Link
                    key={r.title}
                    to={r.to}
                    onClick={() => setSearch(false)}
                    className="search-result"
                  >
                    <span>
                      {r.title}
                      <small>{r.kind}</small>
                    </span>
                    <ArrowUpRight size={16} />
                  </Link>
                ))
              ) : (
                <p className="p-8 text-center text-muted-foreground">No results found.</p>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
