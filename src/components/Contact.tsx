import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Instagram, 
  MapPin, 
  Clock,
  ArrowRight,
  Send
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Instagram,
      title: "Instagram DM",
      description: "En hızlı iletişim yöntemi",
      action: "DM Gönder",
      link: "https://www.instagram.com/turkzagor/",
      primary: true
    }
  ];

  const info = [
    {
      icon: MapPin,
      title: "Konum",
      description: "İstanbul, Türkiye"
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      description: "Pazartesi - Cumartesi: 09:00 - 21:00"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">İletişime</span>
            <span className="text-gradient ml-4">Geç</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Antrenman programları, fiyat bilgileri veya herhangi bir sorunuz için 
            bizimle iletişime geçin. En hızlı yanıt için Instagram DM'den ulaşın.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Methods */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-8 text-foreground">
              İletişim Kanalları
            </h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className={`p-6 hover-lift border-border/50 hover:border-primary/50 transition-all duration-300 group ${
                    method.primary ? 'ring-2 ring-primary/20 bg-gradient-to-r from-primary/5 to-transparent' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      method.primary ? 'bg-gradient-primary' : 'bg-muted'
                    }`}>
                      <method.icon className={`w-7 h-7 ${
                        method.primary ? 'text-hero-background' : 'text-primary'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-foreground">
                          {method.title}
                        </h4>
                        {method.primary && (
                          <span className="bg-primary text-hero-background text-xs font-bold px-2 py-1 rounded-full">
                            ÖNERİLEN
                          </span>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {method.description}
                      </p>
                      
                      <Button
                        asChild
                        size="lg"
                        className={`${
                          method.primary 
                            ? 'bg-gradient-primary hover:opacity-90 text-hero-background' 
                            : 'bg-muted hover:bg-primary hover:text-hero-background'
                        } font-bold px-6 py-3 group/btn`}
                      >
                        <a 
                          href={method.link} 
                          target={method.link.startsWith('http') ? '_blank' : '_self'}
                          rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center"
                        >
                          {method.action}
                          <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Info & CTA */}
          <div className="animate-fade-in">
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-muted/50 to-background border-primary/20">
              <h3 className="text-3xl font-bold mb-8 text-foreground">
                Hızlı Bilgi
              </h3>
              
              <div className="space-y-6 mb-8">
                {info.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-primary p-6 rounded-2xl text-center">
                <h4 className="text-xl font-bold text-hero-background mb-2">
                  Hemen Başlayın!
                </h4>
                <p className="text-hero-background/90 mb-4">
                  İlk dersiniz ücretsiz. Hemen Instagram'dan mesaj atın.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-hero-background hover:bg-hero-background/90 text-primary font-bold px-8 py-4 text-lg group"
                >
                  <a 
                    href="https://www.instagram.com/turkzagor/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Instagram className="mr-2" />
                    Instagram'da Mesaj At
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
