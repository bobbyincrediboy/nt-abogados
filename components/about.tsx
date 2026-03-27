import { Shield, Clock, Users, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Sin necesidad de acuerdo mutuo",
    description: "Desde 2015, alcanza con que uno de los cónyuges quiera divorciarse. La negativa del otro es irrelevante.",
  },
  {
    icon: Clock,
    title: "Proceso rápido y simple",
    description: "Optimizamos los tiempos y simplificamos los trámites para que su divorcio salga lo más rápido posible.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    description: "Cada caso es único. Le brindamos asesoramiento personalizado y acompañamiento durante todo el proceso.",
  },
  {
    icon: Award,
    title: "Profesionales especializados",
    description: "Contamos con años de experiencia en derecho de familia y divorcios en Capital Federal.",
  },
]

export function About() {
  return (
    <section id="divorcio" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Sobre el Divorcio Express</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
                Entendemos su preocupación
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  El Código Civil y Comercial de la Nación (vigente desde agosto de 2015) cambió sustancialmente 
                  el régimen del divorcio en Argentina: <strong className="text-foreground">ya no se requiere el consentimiento 
                  de ambos cónyuges</strong> para divorciarse, ni tampoco se necesita demostrar una causal de ruptura.
                </p>
                <p>
                  Hoy en día <strong className="text-foreground">alcanza con que uno de los cónyuges se quiera divorciar</strong> para 
                  que el Juez se vea obligado a dictar la sentencia de divorcio.
                </p>
                <p>
                  Nuestra filosofía es ayudarlo a que su divorcio sea lo menos traumático posible. Simplificamos 
                  los trámites y optimizamos los tiempos.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 p-8 lg:p-12 bg-primary/5 rounded-2xl border border-primary/10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                ¿Qué documentación necesito?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span>DNI de los cónyuges y de los hijos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span>Acta o libreta de matrimonio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span>Partida de nacimiento de los hijos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span>Si hay bienes registrables: títulos de propiedad y boletas de impuestos</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground italic">
                Si no dispone de algún documento, nosotros podemos conseguirlo (partidas de nacimiento, matrimonio, etc.)
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <p className="text-sm text-muted-foreground mb-2">Divorcio en</p>
                <p className="font-serif text-3xl font-bold text-primary">Capital Federal</p>
                <p className="text-sm text-muted-foreground mt-2">La opción más económica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
