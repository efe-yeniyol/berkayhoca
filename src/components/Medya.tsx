import Image from "next/image";
import { Card } from "@/components/ui/card";

const Medya = () => {
  const images = [
    { src: "/assets/1.jpeg", alt: "Kickbox Antrenmanı", category: "Antrenman" },
    { src: "/assets/2.jpeg", alt: "Berkay Dağıstan Portre", category: "Portre" },
    { src: "/assets/3.jpeg", alt: "Ring Sporları", category: "Spor" },
    { src: "/assets/4.jpeg", alt: "Muaythai Teknikleri", category: "Teknik" },
    { src: "/assets/5.jpeg", alt: "Boks Antrenmanı", category: "Antrenman" },
    { src: "/assets/6.jpeg", alt: "Kempo Eğitimi", category: "Eğitim" },
    { src: "/assets/7.jpeg", alt: "Fitness Kickbox", category: "Fitness" },
    { src: "/assets/8.jpeg", alt: "Hero Background", category: "Background" },
    { src: "/assets/aa.png", alt: "Berkay Dağıstan", category: "Portre" }
  ];

  return (
    <section id="medya" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Medya</span>
            <span className="text-gradient ml-4">Galerisi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Antrenmanlarımızdan, yarışmalardan ve özel anlardan kareler. 
            Berkay Dağıstan ile geçirdiğiniz unutulmaz anları keşfedin.
          </p>
        </div>


        {/* Image Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-6">
            {/* First set of images */}
            {images.map((image, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                <Card className="overflow-hidden group hover-lift border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="relative w-80 h-64">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hero-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3">
                          <h4 className="font-semibold text-foreground text-sm mb-1">
                            {image.alt}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {image.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((image, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                <Card className="overflow-hidden group hover-lift border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="relative w-80 h-64">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hero-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3">
                          <h4 className="font-semibold text-foreground text-sm mb-1">
                            {image.alt}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {image.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Medya;
