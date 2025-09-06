import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/8.jpeg"
          alt="Kickboxing Training"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-hero-background/80"></div>
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-hero-text">SENİN</span>
              <br />
              <span className="text-hero-text">KİCKBOX</span>
              <br />
              <span className="text-gradient">YOLCULUĞUN</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-hero-text/90 mb-8 max-w-2xl text-balance">
              Bugün başla. Türkiye'nin en iyi kickbox antrenörü Berkay Dağıstan ile kişisel antrenman.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-hero-background font-bold px-8 py-4 text-lg group"
              >
                <a 
                  href="https://www.instagram.com/turkzagor/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  HADI BAŞLAYALIM
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-hero-background px-8 py-4 text-lg group"
              >
                <a 
                  href="https://www.instagram.com/reel/C6OEZonqu_1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Play className="mr-2 group-hover:scale-110 transition-transform" />
                  Videoları İzle
                </a>
              </Button>
            </div>
          </div>

          {/* Moving Text */}
          <div className="hidden lg:block animate-slide-up">
            <div className="text-hero-text/30 text-sm font-medium tracking-wider transform rotate-90 origin-center whitespace-nowrap">
              GÜÇ • TEKNİK • DİSİPLİN • GÜÇ • TEKNİK • DİSİPLİN • 
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-hero-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-hero-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
