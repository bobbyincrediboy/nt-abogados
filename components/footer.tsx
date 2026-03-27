import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-tight">NT</span>
              <span className="text-xs uppercase tracking-[0.2em] opacity-70">Abogados</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Estudio jurídico especializado en divorcios en Capital Federal. 
              Tramitamos su divorcio de forma rápida, simple y económica.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#inicio" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#proceso" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Proceso
                </Link>
              </li>
              <li>
                <Link href="#divorcio" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Sobre el Divorcio
                </Link>
              </li>
              <li>
                <Link href="#preguntas" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-sm opacity-80">Divorcio Express</li>
              <li className="text-sm opacity-80">Divorcio por Mutuo Acuerdo</li>
              <li className="text-sm opacity-80">Divorcio Unilateral</li>
              <li className="text-sm opacity-80">Divorcio desde el Extranjero</li>
              <li className="text-sm opacity-80">Liquidación de Bienes</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:1128788270" className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                  <Phone className="h-4 w-4" />
                  <span>11 2878-8270</span>
                </a>
              </li>
              <li>
                <a href="mailto:nt@ntabogados.com.ar" className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                  <Mail className="h-4 w-4" />
                  <span>nt@ntabogados.com.ar</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Ciudad de Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © {currentYear} NT Abogados. Todos los derechos reservados.
            </p>
            <p className="text-sm opacity-60">
              Estudio jurídico matriculado en CABA
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
