import { Gamepad2 } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Gamepad2 className="h-8 w-8 text-[#B7FF00]" />
            <div className="absolute inset-0 blur-md bg-[#B7FF00] opacity-50" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight font-pixelify">Hellbound Studios</h1>
            <p className="text-sm text-muted-foreground">Remix Gaming Portfolio</p>
          </div>
        </div>
      </div>
    </header>
  )
}
