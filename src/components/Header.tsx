import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            N
          </div>
          <span className="text-xl font-bold text-foreground">Ngerti.in</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm">
            Masuk
          </Button>
          <Button size="sm" className="hidden sm:inline-flex">
            Daftar Gratis
          </Button>
        </div>
      </div>
    </header>
  );
};
