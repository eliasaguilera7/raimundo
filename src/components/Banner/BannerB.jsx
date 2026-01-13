import React from 'react';
import { Gavel } from 'lucide-react';

export default function BannerB({ base, v, whatsappLink, scrollToSection }) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${base}images/banner2/banner2ok.png${v})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* overlay for text readability */}
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      {/* watermark logo (above background, below content & lawyer) */}
      <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center">
        <img
          src={`${base}images/logoraimundo.png${v}`}
          alt=""
          className="w-[80vw] max-w-[700px] opacity-10 object-contain select-none"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center md:min-h-[calc(100vh-5rem)]">
        {/* Copy / CTA */}
        <div className="text-center md:text-left">
          <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
            Matrícula C.S.J. N.º 66.875
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold font-serif leading-tight text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#D4AF37]">
              Soluciones Jurídicas en Derecho Penal y Consultoría Legal
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto md:mx-0 leading-relaxed border-l-4 border-[#D4AF37] pl-6 italic">
            "Soy un defensor de la ley y de la vida. Acompaño a personas en situaciones complejas con estrategia
            jurídica y dignidad humana."
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={whatsappLink}
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#C5A028] text-black font-bold rounded-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] text-center flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
            >
              <Gavel className="w-5 h-5" />
              Agendar
            </a>
            <button
              onClick={() => scrollToSection('areas-de-practica')}
              className="px-8 py-4 border border-neutral-700 hover:border-[#D4AF37] text-neutral-300 hover:text-[#D4AF37] rounded-sm font-semibold transition-all text-center uppercase tracking-wide text-sm"
            >
              Ver Servicios
            </button>
          </div>
        </div>

        {/* Lawyer image overlay */}
        <div className="relative z-20 flex justify-center md:justify-end md:self-stretch md:h-full md:items-end">
          <img
            src={`${base}images/banner2/hero2svg.png${v}`}
            alt="Abg. Raimundo Fernández"
            className="w-[78%] max-w-[420px] md:w-auto md:max-w-[560px] object-contain drop-shadow-2xl select-none pointer-events-none"
            onError={(e) => {
              // fallback to .svg if .png is not present
              e.currentTarget.onerror = null;
              e.currentTarget.src = `${base}images/banner2/hero2svg.svg${v}`;
            }}
          />
        </div>
      </div>
    </section>
  );
}
