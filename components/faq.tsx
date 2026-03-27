"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuál es la ventaja del divorcio express?",
    answer: "Desde 2015, alcanza con que uno de los cónyuges se quiera divorciar para que el Juez forzosamente decrete el divorcio. Ya no se requiere el consentimiento de ambos ni demostrar causales. Esto simplifica enormemente el procedimiento."
  },
  {
    question: "¿Sigue conviniendo el divorcio por mutuo acuerdo?",
    answer: "Sí. Si ambos cónyuges están de acuerdo en el divorcio, el trámite es más sencillo, más económico y más rápido. Se obtiene antes la sentencia de divorcio."
  },
  {
    question: "¿Qué efecto tiene el abandono del hogar o la infidelidad?",
    answer: "Ninguno. Al desaparecer las causales de divorcio con el nuevo código, las viejas causales (injurias, adulterio, abandono) no tienen consecuencia en el divorcio."
  },
  {
    question: "¿Dónde debo tramitar el divorcio?",
    answer: "El divorcio tramita en la justicia civil correspondiente al último domicilio conyugal o al domicilio del demandado. Si la presentación es conjunta, puede ser en el domicilio de cualquiera de los cónyuges."
  },
  {
    question: "¿Es más barato el divorcio en Capital Federal?",
    answer: "Sí, el trámite en Capital Federal es más económico ya que los gastos son inferiores (no se pagan aportes y tasas que sí se pagan en Provincia de Buenos Aires)."
  },
  {
    question: "¿Puedo divorciarme si no hay acuerdo sobre los bienes?",
    answer: "Sí. El nuevo Código establece que el desacuerdo relativo a la distribución de los bienes no impide el dictado de la sentencia de divorcio. La cuestión patrimonial puede diferirse para una etapa posterior."
  },
  {
    question: "¿Qué son los bienes gananciales?",
    answer: "Son aquellos adquiridos a título oneroso durante el matrimonio por cualquiera de los cónyuges. Se dividen por mitades al liquidarse la sociedad conyugal con posterioridad al divorcio."
  },
  {
    question: "¿Cómo son los honorarios en un divorcio?",
    answer: "Creemos en la transparencia. Contáctenos para recibir un presupuesto por escrito que le dará certeza respecto al precio de su divorcio. Ofrecemos facilidades de pago y posibilidad de pagar con tarjeta de crédito."
  },
]

export function FAQ() {
  return (
    <section id="preguntas" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Resolvemos sus dudas sobre el proceso de divorcio en Argentina
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
