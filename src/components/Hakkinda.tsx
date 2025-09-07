import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Trophy, Target, Users, Heart } from "lucide-react";

const Hakkinda = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "2019 Kempo Avrupa Şampiyonu",
      description: "Avrupa'da ülkemizi temsil eden başarı"
    },
    {
      icon: Target,
      title: "2018 Türkiye Muaythai Şampiyonu",
      description: "Türkiye'de en üst seviye başarı"
    },
    {
      icon: Users,
      title: "15+ Yıl Deneyim",
      description: "Ring sporlarında uzun yıllar"
    },
    {
      icon: Heart,
      title: "Milli Sporcu",
      description: "Ülkemizi gururla temsil ediyor"
    }
  ];

  return (
    <section id="hakkinda" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sol Taraf - Yazı İçeriği */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Berkay</span>
              <span className="text-foreground ml-4">Dağıstan</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Merhaba, ben <strong className="text-foreground">Berkay Dağıstan</strong>. 
                1999 İstanbul doğumluyum. Çocukluk yaşlarımda spora başladım.
              </p>
              
              <p>
                Hiperaktif kişiliğim nedeniyle rehber öğretmenimin yönlendirmesiyle 
                boks ile tanıştım. 10 yaşımdan bu yana ring sporlarının içindeyim.
              </p>
              
              <p>
                Aktif olarak <strong className="text-primary">Halis Avşar SK</strong> sporcusuyum. 
                Sporculuğumun yanında <strong className="text-primary">antrenörlük</strong> de yapmaktayım. 
                Milli sporcu olarak ülkemizi temsil etmekten gurur duyuyorum.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground">
                "Ring sporları sert görünse de, içinde <strong>saygı ve sevgiyi</strong> barındırır. 
                Herkesin bu sporu en az bir kez denemesini isterim."
              </blockquote>
            </div>

            {/* Başarılar Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="p-4 hover-lift border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="w-5 h-5 text-hero-background" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sağ Taraf - Görsel */}
          <div className="animate-slide-up">
            <div className="relative">
              <Image
                src="/assets/aa.png"
                alt="Berkay Dağıstan - Kickbox Antrenörü"
                width={600}
                height={700}
                className="w-full h-[700px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-background/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6">
                <Card className="bg-background/90 backdrop-blur-sm p-3 border-primary/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">25</div>
                    <div className="text-xs text-muted-foreground">Yaş</div>
                  </div>
                </Card>
              </div>
              
              {/* Bottom Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="bg-background/90 backdrop-blur-sm p-4 border-primary/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-primary">91+</div>
                      <div className="text-xs text-muted-foreground">Kg Kategori</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">Zagor</div>
                      <div className="text-xs text-muted-foreground">Lakap</div>
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

export default Hakkinda;
