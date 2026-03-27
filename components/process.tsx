import { MessageSquare, FileText, PenTool, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "1. Contáctenos",
    description: "Usted se contacta con nosotros y nos pasa sus datos para su divorcio express.",
  },
  {
    icon: FileText,
    title: "2. Preparamos la demanda",
    description: "Nosotros preparamos toda la documentación y la demanda de divorcio express.",
  },
  {
    icon: PenTool,
    title: "3. Firma",
    description: "Usted se reúne con nosotros una sola vez para firmar la demanda de divorcio.",
  },
  {
    icon: CheckCircle,
    title: "4. Tramitamos todo",
    description: "Nosotros tramitamos el divorcio en Capital Federal y le informamos cuando está listo.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Proceso Simple</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            ¿Cómo funciona el divorcio express?
          </h2>
          <p className="text-muted-foreground text-lg">
            Simplificamos el proceso para que su divorcio sea lo menos traumático posible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
              )}
              
              <div className="relative bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <step.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
