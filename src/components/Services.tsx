import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dumbbell, 
  Users, 
  Target, 
  Heart, 
  Shield, 
  Zap,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Kişisel Antrenman",
      description: "Bire bir özel dersler ile teknik ve kondisyon gelişimi",
      features: ["Özel antrenman programı", "Teknik analiz", "Beslenme planı"]
    },
    {
      icon: Users,
      title: "Grup Dersleri",
      description: "Motivasyonu yüksek grup dinamiği ile eğlenceli antrenmanlar",
      features: ["Küçük gruplar", "Seviye bazlı eğitim", "Sosyal ortam"]
    },
    {
      icon: Target,
      title: "Yarışma Hazırlığı",
      description: "Profesyonel müsabakalar için özel hazırlık programları",
      features: ["Taktik geliştirme", "Mental koçluk", "Yarışma stratejisi"]
    },
    {
      icon: Heart,
      title: "Fitness Kickbox",
      description: "Sağlık ve form için kickbox teknikleri ile kardio antrenman",
      features: ["Kilo kontrolü", "Kardiyovasküler sağlık", "Stres atma"]
    },
    {
      icon: Shield,
      title: "Savunma Sanatları",
      description: "Günlük hayatta kullanabileceğiniz öz savunma teknikleri",
      features: ["Pratik teknikler", "Güven artırma", "Refleks geliştirme"]
    },
    {
      icon: Zap,
      title: "Kondisyon Antrenmanı",
      description: "Güç, dayanıklılık ve çeviklik geliştirmeye odaklanmış program",
      features: ["Fonksiyonel hareket", "Güç artırma", "Esneklik çalışması"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Neler</span>
            <span className="text-gradient ml-4">Yapıyoruz</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Kickbox, Muaythai, Kempo ve Boks alanlarında profesyonel eğitim. 
            Kişisel hedeflerinize uygun antrenman programları ile başarıya ulaşın.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-hero-background" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 text-balance">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-slide-up">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-hero-background to-secondary border-0 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-hero-text">
              Hedeflerine ulaşmaya hazır mısın?
            </h3>
            <p className="text-xl text-hero-text/90 mb-8 max-w-2xl mx-auto text-balance">
              Bugün başla ve kendini daha güçlü, daha özgüvenli hisset. 
              İlk dersin bizden hediye!
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-hero-background font-bold px-8 py-4 text-lg group"
            >
              Ücretsiz Deneme Dersi Al
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
