export function Footer() {
  return (
    <footer className="rounded-3xl bg-card/70 px-8 md:px-16 py-16 md:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="flex flex-wrap justify-center gap-6 text-base md:text-lg font-semibold text-foreground/80">
          <a
            href="https://warpcast.com/chukinice"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#B7FF00]"
          >
            Farcaster
          </a>
          <a
            href="https://twitter.com/chukinice"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#B7FF00]"
          >
            Twitter
          </a>
          <a
            href="https://t.me/chukinice"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#B7FF00]"
          >
            Telegram
          </a>
          <a
            href="https://github.com/chukinice"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#B7FF00]"
          >
            GitHub
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground/80">
          <span className="uppercase tracking-[0.25em] text-xs md:text-sm text-[#B7FF00]/80">
            Powered by Remix
          </span>
          <span className="text-xs md:text-sm text-muted-foreground/70">
            Build AI-powered games effortlessly.
          </span>
        </div>
      </div>
    </footer>
  );
}
