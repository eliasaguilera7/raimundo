import React from 'react';
import { Gavel } from 'lucide-react';

export default function BannerA({ base, v, whatsappLink, scrollToSection }) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* --- HERO SECTION (OFICIAL) --- */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>

        {/* Marca de agua del logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={`${base}images/logoraimundo.png${v}`}
            alt="Marca de agua - Logo Abg. Raimundo Fernández"
            className="opacity-10 w-[70vw] max-w-[560px] object-contain select-none"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Contenido Texto */}
        <div className="space-y-8 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D4AF37] rounded-sm bg-black/50 backdrop-blur-sm shadow-[0_0_10px_rgba(212,175,55,0.1)]">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
              Matrícula C.S.J. N.º 66.875
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B6914] via-[#D4AF37] to-[#FFD700]">
              Soluciones Jurídicas en Derecho Penal y Consultoría Legal
            </span>
          </h1>

          <p className="text-lg text-neutral-400 max-w-lg leading-relaxed border-l-4 border-[#D4AF37] pl-6 italic">
            "Soy un defensor de la ley y de la vida. Acompaño a personas en situaciones complejas con estrategia
            jurídica y dignidad humana."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={whatsappLink}
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#C5A028] text-black font-bold rounded-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] text-center flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
            >
              <Gavel className="w-5 h-5" />
              Agendar Consulta
            </a>
            <button
              onClick={() => scrollToSection('areas-de-practica')}
              className="px-8 py-4 border border-neutral-700 hover:border-[#D4AF37] text-neutral-300 hover:text-[#D4AF37] rounded-sm font-semibold transition-all text-center uppercase tracking-wide text-sm"
            >
              Ver Servicios
            </button>
          </div>
        </div>

        {/* Imagen Hero */}
        <div className="relative flex justify-center md:justify-end mt-10 md:mt-0 order-1 md:order-2">
          <div className="relative w-72 h-80 md:w-[400px] md:h-[550px] p-2 bg-black border border-[#D4AF37]/30 shadow-2xl">
            <div className="absolute top-4 -right-4 w-full h-full border border-[#D4AF37]/50 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#D4AF37]/50 -z-10"></div>

            <div className="w-full h-full bg-neutral-900 overflow-hidden relative transition-all duration-700">
              {/* show full image without cropping */}
              <img
                key={__BUILD_TIME__}
                src={`${base}images/hero5.png${v}`}
                alt="Abg. Raimundo Fernández"
                className="w-full h-full object-contain object-center"
                onError={(e) => {
                  console.warn('Hero image failed to load:', `${base}images/hero5.png${v}`);
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-12">
                <div className="h-0.5 w-16 bg-[#D4AF37] mb-3"></div>
                <p className="text-white font-serif text-2xl font-bold">Abg. Raimundo Fernández</p>
                <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mt-1">
                  Director & Fundador
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
