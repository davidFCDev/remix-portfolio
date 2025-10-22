import { Gamepad2 } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4">
          <div className="relative flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center">
            <Gamepad2 className="h-full w-full text-[#B7FF00]" />
            <div className="absolute inset-0 bg-[#B7FF00] opacity-0 blur-sm" />
          </div>
          <div className="flex h-[3.25rem] flex-col justify-between py-0.5">
            <h1 className="text-2xl font-bold tracking-tight font-pixelify leading-none">
              Hellbound Studios
            </h1>
            <p className="text-sm text-muted-foreground leading-none">
              Remix Gaming Portfolio
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
