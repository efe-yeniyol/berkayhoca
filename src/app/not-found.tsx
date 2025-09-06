import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-foreground mb-4">Sayfa Bulunamadı</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-hero-background font-bold">
            <Link href="/" className="flex items-center">
              <Home className="mr-2" />
              Ana Sayfaya Dön
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-hero-background">
            <Link href="/#contact" className="flex items-center">
              <ArrowLeft className="mr-2" />
              İletişime Geç
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
