import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, TrendingUp, CheckCircle, Play, MessageCircle, Award } from "lucide-react";
const Index = () => {
  const platforms = [{
    name: "Mercado Livre",
    description: "Domine a maior plataforma de e-commerce da América Latina",
    brandColor: "#FFE600",
    gradientFrom: "#FFE600",
    gradientTo: "#FFCC02",
    icon: "🛒",
    features: ["Otimização de anúncios", "Mercado Ads", "Reputação de vendedor"]
  }, {
    name: "Shopee",
    description: "Estratégias para crescer na plataforma que mais cresce",
    brandColor: "#EE4D2D",
    gradientFrom: "#EE4D2D",
    gradientTo: "#FF6600",
    icon: "🛍️",
    features: ["Live streaming", "Promoções", "Shopee Ads"]
  }, {
    name: "Shein",
    description: "Aprenda a vender na gigante da moda internacional",
    brandColor: "#FF6B9D",
    gradientFrom: "#FF6B9D",
    gradientTo: "#C44569",
    icon: "👗",
    features: ["Marketplace global", "Tendências", "Logística"]
  }];
  const testimonials = [{
    name: "Maria Silva",
    role: "Empreendedora Digital",
    content: "Com a mentoria da Vendalize, aumentei minhas vendas em 300% em apenas 3 meses!",
    rating: 5
  }, {
    name: "João Santos",
    role: "Lojista Online",
    content: "Aprendi estratégias que nunca imaginei. Hoje sou referência no meu nicho.",
    rating: 5
  }, {
    name: "Ana Costa",
    role: "Vendedora Marketplace",
    content: "A metodologia é incrível. Resultados desde a primeira semana!",
    rating: 5
  }];
  const benefits = ["Aumento de até 500% nas vendas", "Estratégias exclusivas para cada plataforma", "Suporte personalizado 24/7", "Comunidade exclusiva de vendedores", "Ferramentas e templates prontos", "Acompanhamento de resultados"];
  return <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="./images/vendalize_logo_20260114_173218.png" alt="Vendalize Logo" className="h-10 w-10 rounded-lg" />
            <span className="text-2xl font-bold text-gradient">Vendalize</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-foreground/80 hover:text-primary transition-smooth">Sobre</a>
            <a href="#servicos" className="text-foreground/80 hover:text-primary transition-smooth">Serviços</a>
            <a href="#depoimentos" className="text-foreground/80 hover:text-primary transition-smooth">Depoimentos</a>
            <Button className="btn-glow transition-smooth">
              Começar Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Eleve seu
            <span className="text-gradient block">E-commerce</span>
            para o Próximo Nível
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Domine as estratégias secretas do Mercado Livre, Shopee e Shein. 
            Aumente suas vendas em até 500% com nossa metodologia comprovada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="btn-glow transition-smooth text-lg px-8 py-6">
              Começar Mentoria Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com Especialista
            </Button>
          </div>
          
          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="servicos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Domine as Principais Plataformas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estratégias específicas para cada marketplace, com foco em resultados reais
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => <Card key={index} className="platform-card border-border/50 overflow-hidden relative group">
                {/* Fundo com gradiente da marca */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{
              background: `linear-gradient(135deg, ${platform.gradientFrom}20, ${platform.gradientTo}10)`
            }}></div>
                
                {/* Imagens de fundo específicas para cada plataforma */}
                {platform.name === "Mercado Livre" && <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <img src="https://images.unsplash.com/photo-1659353741638-9bbe25cd8715?w=400&auto=format&fit=crop&q=80" alt="Mercado Livre Background" className="w-full h-full object-cover" />
                  </div>}
                
                {platform.name === "Shopee" && <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <img src="https://images.unsplash.com/photo-1649767727699-3a38a00dd984?w=400&auto=format&fit=crop&q=80" alt="Shopee Background" className="w-full h-full object-cover" />
                  </div>}
                
                {platform.name === "Shein" && <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <img src="https://images.unsplash.com/photo-1622825313701-9e52e0db6a68?w=400&auto=format&fit=crop&q=80" alt="Shein Background" className="w-full h-full object-cover" />
                  </div>}
                
                <CardContent className="p-8 relative z-10">
                  {/* Logo real da plataforma */}
                  
                  
                  <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                  <p className="text-muted-foreground mb-6">{platform.description}</p>
                  
                  {/* Badge com cor da marca */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 text-white shadow-lg bg-[rgb(7,7,7)]" style={{
                background: `linear-gradient(135deg, ${platform.gradientFrom}, ${platform.gradientTo})`
              }}>
                    Especialização Exclusiva
                  </div>
                  
                  <ul className="space-y-3">
                    {platform.features.map((feature, idx) => <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Planos Disponíveis</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para transformar seu e-commerce
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Plano Básico */}
            <Card className="gradient-card border-border/50 relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Plano Básico</h3>
                  <div className="text-4xl font-bold text-primary mb-2">R$ 297</div>
                  <div className="text-sm text-muted-foreground">por mês</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>1 Plataforma (Mercado Livre)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Suporte via WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Templates básicos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Aulas gravadas</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
            
            {/* Plano Premium */}
            <Card className="gradient-card border-primary/50 relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">
                  Mais Popular
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Plano Premium</h3>
                  <div className="text-4xl font-bold text-primary mb-2">R$ 597</div>
                  <div className="text-sm text-muted-foreground">por mês</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>3 Plataformas (ML, Shopee, Shein)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Suporte 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Templates avançados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Mentoria ao vivo</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Comunidade exclusiva</span>
                  </li>
                </ul>
                <Button className="w-full btn-glow">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
            
            {/* Plano VIP */}
            <Card className="gradient-card border-border/50 relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Plano VIP</h3>
                  <div className="text-4xl font-bold text-primary mb-2">R$ 997</div>
                  <div className="text-sm text-muted-foreground">por mês</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Tudo do Premium +</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Consultoria 1:1</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Análise de conta</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Estratégias personalizadas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Garantia de resultados</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Estatísticas */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Gráfico visual de crescimento */}
              <div className="bg-gradient-card rounded-2xl shadow-card p-8 border border-border/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-sm text-muted-foreground">Negócios Transformados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500%</div>
                    <div className="text-sm text-muted-foreground">Crescimento Médio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Suporte Disponível</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Plataformas Principais</div>
                  </div>
                </div>
                
                {/* Ícone de crescimento */}
                <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-glow">
                  <TrendingUp className="h-8 w-8" />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">Por que escolher a Vendalize?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Nossa metodologia exclusiva já transformou mais de 1.000 negócios online
              </p>
              <div className="grid gap-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">Aumento de até 500% nas vendas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">Estratégias exclusivas para cada plataforma</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">Suporte personalizado 24/7</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">Comunidade exclusiva de vendedores</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">Ferramentas e templates prontos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">Acompanhamento de resultados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-muted-foreground">
              Mais de 1.000 empreendedores já transformaram seus negócios
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="gradient-card border-border/50">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/10">
        <div className="container mx-auto text-center">
          <Award className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Pronto para Transformar seu E-commerce?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 1.000 empreendedores que já multiplicaram suas vendas com nossa metodologia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-glow transition-smooth text-lg px-8 py-6">
              Começar Mentoria Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="./images/vendalize_logo_20260114_173218.png" alt="Vendalize Logo" className="h-8 w-8 rounded-lg" />
                <span className="text-xl font-bold text-gradient xl:text-4xl mr-[5px] ml-[5px] pt-[23px] pb-[23px]">Vendalize</span>
              </div>
              <p className="text-muted-foreground">Eleve seu ecommerce para o próximo nível</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Mentoria Mercado Livre</li>
                <li>Consultoria Shopee</li>
                <li>Estratégias Shein</li>
                <li>Automação de Vendas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Sobre Nós</li>
                <li>Casos de Sucesso</li>
                <li>Blog</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>contato@vendalize.com.br</li>
                <li>(11) 99999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Vendalize. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;