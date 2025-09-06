"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">Oops!</h1>
        <h2 className="text-3xl font-bold text-foreground mb-4">Bir Hata Oluştu</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Üzgünüz, beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={reset}
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 text-hero-background font-bold"
          >
            <RefreshCw className="mr-2" />
            Tekrar Dene
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-hero-background"
          >
            <a href="/" className="flex items-center">
              <Home className="mr-2" />
              Ana Sayfaya Dön
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
