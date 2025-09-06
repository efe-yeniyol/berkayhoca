import { Card } from "@/components/ui/card";
import { Target, Trophy, Users, Zap } from "lucide-react";
import Image from "next/image";

const About = () => {
  const benefits = [
    {
      icon: Target,
      title: "Hedef Odaklı",
      description: "Kişisel hedeflerinize özel antrenman programları"
    },
    {
      icon: Trophy,
      title: "Profesyonel",
      description: "15 yıllık deneyim ve uluslararası sertifikalar"
    },
    {
      icon: Users,
      title: "Kişisel Yaklaşım",
      description: "Her sporcu için özel hazırlanmış antrenman metodları"
    },
    {
      icon: Zap,
      title: "Hızlı Sonuç",
      description: "Etkili tekniklerle kısa sürede görünür değişim"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">DENEYİM</span>
            <span className="text-foreground ml-4">kickbox antrenmanının faydalarını</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
            Berkay Dağıstan Kickbox Academy, fitness, beslenme ve sağlık konularında uzman 
            bir ekiptir ve benzersiz fitness ihtiyaçlarınızı ve hedeflerinizi anlamaya odaklanır.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Kişiselleştirilmiş hedef odaklı antrenman programları sunuyoruz
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Konsept benzersizdir. En iyi ekipman ve antrenörleri, ilerlemenizi güçlendirecek 
              özel fitness ve beslenme planları ile birleştiriyoruz. Eğer siz kararlılığı getirirseniz, 
              hedeflerinize birlikte ulaşacağımıza söz veriyoruz.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-lg hover:-translate-y-1 border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <benefit.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <Image
                src="/assets/2.jpeg"
                alt="Berkay Dağıstan - Kickbox Antrenörü"
                width={600}
                height={600}
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-background/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="bg-background/90 backdrop-blur-sm p-4 border-primary/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Yıl Deneyim</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Mutlu Sporcu</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
