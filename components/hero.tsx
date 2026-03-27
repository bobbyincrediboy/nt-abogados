import { Button } from "@/components/ui/button"
import { Scale, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Scale className="h-4 w-4" />
              <span>Estudio Jurídico en Capital Federal</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Sus Abogados de{" "}
              <span className="text-primary">Divorcio Express</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Tramitamos su divorcio de forma rápida, simple y con el menor costo posible. 
              Consulte sin compromiso con nuestro equipo de profesionales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8">
                <a href="#contacto">
                  Consultar Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base border-primary/30 hover:bg-primary/5">
                <a href="#divorcio">Más Información</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-3xl font-bold text-primary">+500</p>
                <p className="text-sm text-muted-foreground">Casos resueltos</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Confidencialidad</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-12 border border-primary/10">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="font-serif text-xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Contáctenos</p>
                    <p className="text-sm text-muted-foreground">Envíe sus datos</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-sm border border-border ml-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="font-serif text-xl font-bold text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Preparamos todo</p>
                    <p className="text-sm text-muted-foreground">Demanda de divorcio</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="font-serif text-xl font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Firme la demanda</p>
                    <p className="text-sm text-muted-foreground">Una sola reunión</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-primary text-primary-foreground rounded-xl shadow-lg ml-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                    <span className="font-serif text-xl font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-medium">¡Divorciado/a!</p>
                    <p className="text-sm opacity-80">Nosotros tramitamos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
