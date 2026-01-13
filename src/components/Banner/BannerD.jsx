import React from 'react';
import { Gavel } from 'lucide-react';

export default function BannerD({ base, v, whatsappLink, scrollToSection }) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-black flex items-center pt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${base}images/banner4/banner4.webp${v})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* overlay for readability */}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      {/* watermark logo */}
      <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center">
        <img
          src={`${base}images/logoraimundo.png${v}`}
          alt=""
          className="w-[80vw] max-w-[700px] opacity-10 object-contain select-none"
        />
      </div>

      {/* Lawyer image */}
      {/* Desktop: absolute left, bottom-aligned. Mobile: shown below content (stacked). */}
      <div className="absolute inset-0 z-[5] pointer-events-none hidden md:block">
        <div className="relative h-full w-full">
          <img
            src={`${base}images/banner4/hero2svg.png${v}`}
            alt="Abg. Raimundo Fernández"
            className="absolute left-0 bottom-0 h-[88%] max-h-[820px] w-auto object-contain drop-shadow-2xl select-none"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:min-h-[calc(100vh-5rem)] flex items-center">
        <div className="w-full md:max-w-2xl md:ml-auto text-center md:text-right md:pr-2 md:pl-56">
          <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
            Matrícula C.S.J. N.º 66.875
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold font-serif leading-tight text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#D4AF37]">
              Soluciones Jurídicas en Derecho Penal y Consultoría Legal
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed border-r-4 md:border-r-4 border-[#D4AF37] pr-6 italic max-w-2xl md:ml-auto">
            "Soy un defensor de la ley y de la vida. Acompaño a personas en situaciones complejas con estrategia
            jurídica y dignidad humana."
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <a
              href={whatsappLink}
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#C5A028] text-black font-bold rounded-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] text-center flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
            >
              <Gavel className="w-5 h-5" />
              Agendar Consulta
            </a>
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-4 border border-neutral-700 hover:border-[#D4AF37] text-neutral-300 hover:text-[#D4AF37] rounded-sm font-semibold transition-all text-center uppercase tracking-wide text-sm"
            >
              Ver Contacto
            </button>
          </div>

          {/* Mobile lawyer (visible only < md) */}
          <div className="mt-10 flex justify-center md:hidden pointer-events-none">
            <img
              src={`${base}images/banner4/hero2svg.png${v}`}
              alt="Abg. Raimundo Fernández"
              className="w-[85%] max-w-[420px] object-contain drop-shadow-2xl select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
