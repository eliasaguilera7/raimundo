import React, { useState, useEffect } from 'react';
import {
  Scale,
  Gavel,
  Users,
  Briefcase,
  Phone,
  MapPin,
  Menu,
  X,
  Globe,
  BookOpen,
  ShieldCheck,
  Facebook,
  Instagram,
} from 'lucide-react';
import Banner from './components/Banner/Banner';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bannerVariant, setBannerVariant] = useState('A'); // A = oficial (intacto)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // set favicon from /images/libra.png (force refresh, remove old links)
  useEffect(() => {
    const base = import.meta.env.BASE_URL;
    const href = `${base}images/libra.png?v=${__BUILD_TIME__}`;

    // remove any existing icon links so browser can't keep older one
    const selectors = [
      "link[rel='icon']",
      "link[rel='shortcut icon']",
      "link[rel='apple-touch-icon']",
      "link[rel*='icon']"
    ];
    document.querySelectorAll(selectors.join(',')).forEach((n) => n.parentNode?.removeChild(n));

    const makeLink = (rel, sizes) => {
      const l = document.createElement('link');
      l.rel = rel;
      if (sizes) l.sizes = sizes;
      l.type = 'image/png';
      l.href = href;
      document.head.appendChild(l);
      return l;
    };

    // add common favicon links
    makeLink('icon', '32x32');
    makeLink('icon', '16x16');
    makeLink('shortcut icon');
    makeLink('apple-touch-icon');
  }, []);

  // prefix for local assets when deployed under a subpath
  const base = import.meta.env.BASE_URL;
  // cache-busting query for local images
  const v = `?v=${__BUILD_TIME__}`;

  const toSectionId = (label) =>
    label
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // remove accents (áéíóúñ -> aeioun)
      .replace(/ /g, '-');

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = 'https://wa.me/595987226345';

  // Pre-filled WhatsApp message with Google Maps query to the address
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Estanzuela%20Barrio%20Cerrado%20Ecos%20del%20Lago%20Aregu%C3%A1%20Paraguay';
  const whatsappMapText = encodeURIComponent(
    `Hola, quiero coordinar una cita en: Estanzuela – Barrio Cerrado Ecos del Lago, Areguá, Paraguay.\nMapa: ${mapsUrl}`
  );
  // const whatsappMapLink = `${whatsappLink}?text=${whatsappMapText}`; // (si lo querés usar luego)

  return (
    <div className="font-sans text-neutral-200 bg-black min-h-screen selection:bg-[#D4AF37] selection:text-black">
      {/* --- NAVBAR --- */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 shadow-lg shadow-[#D4AF37]/10 backdrop-blur-md py-3 border-b border-[#D4AF37]/30'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo / Nombre */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <div className="h-12 w-12 rounded-lg overflow-hidden border border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-black flex items-center justify-center">
              {/* replaced icon with image */}
              <img
                src={`${base}images/libra.png${v}`}
                alt="Logo Abg. Raimundo Fernández"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-wider text-white uppercase font-serif leading-none">
                Abg. Raimundo Fernández
              </h1>
              <p className="text-[10px] md:text-xs text-[#D4AF37] tracking-[0.25em] uppercase font-bold mt-1">
                Abogado Penalista
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Inicio', 'Perfil', 'Áreas de Práctica', 'Formación', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(toSectionId(item))
                }
                className="text-xs uppercase tracking-widest text-neutral-400 hover:text-[#D4AF37] transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-black font-bold rounded hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)] border border-[#FFD700]/30"
            >
              Consulta Express
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#D4AF37]">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-950 absolute top-full left-0 w-full border-t border-[#D4AF37]/30 shadow-2xl">
            <div className="flex flex-col p-4 space-y-4">
              {['Inicio', 'Perfil', 'Áreas de Práctica', 'Formación', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(toSectionId(item))
                  }
                  className="text-left text-neutral-300 hover:text-[#D4AF37] py-2 border-b border-neutral-800 tracking-wider text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION (OFICIAL = Banner A, intacto) --- */}
      <Banner
        variant={bannerVariant}
        base={base}
        v={v}
        whatsappLink={whatsappLink}
        scrollToSection={scrollToSection}
      />

      {/* Demo toggle (solo dev) */}
      {import.meta.env.DEV && (
        <div className="fixed bottom-24 left-6 z-50 bg-black/90 border border-[#D4AF37]/40 rounded-sm p-3 space-y-2 shadow-2xl">
          <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">
            Banner demo
          </p>
          <div className="flex gap-2">
            {['A', 'B', 'C', 'D'].map((vKey) => (
              <button
                key={vKey}
                onClick={() => setBannerVariant(vKey)}
                className={`px-3 py-1 text-[10px] border uppercase tracking-widest font-bold transition-colors ${
                  bannerVariant === vKey
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                    : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'
                }`}
              >
                {vKey}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* --- CINTA DE PRESTIGIO --- */}
      <div className="border-y border-[#D4AF37]/20 bg-neutral-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white font-serif">100%</h3>
            <p className="text-xs text-[#D4AF37] uppercase tracking-widest mt-1">Confidencialidad</p>
          </div>
          <div className="text-center border-l border-neutral-800">
            <h3 className="text-3xl font-bold text-white font-serif">100%</h3>
            <p className="text-xs text-[#D4AF37] uppercase tracking-widest mt-1">Compromiso Ético</p>
          </div>
          <div className="text-center border-l border-neutral-800">
            <h3 className="text-3xl font-bold text.white font-serif">3</h3>
            <p className="text-xs text-[#D4AF37] uppercase tracking-widest mt-1">Continentes (Formación)</p>
          </div>
          <div className="text-center border-l border-neutral-800">
            <h3 className="text-3xl font-bold text-white font-serif">24h</h3>
            <p className="text-xs text-[#D4AF37] uppercase tracking-widest mt-1">Atención Urgente</p>
          </div>
        </div>
      </div>

      {/* --- SOBRE MI / PERFIL --- */}
      <section id="perfil" className="py-24 bg-black relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-8">
              <h2 className="text-4xl font-serif font-bold text-white">
                Trayectoria & <span className="text-[#D4AF37]">Vocación</span>
              </h2>
              <div className="text-neutral-300">
                <p className="font-serif text-xl font-bold">Abg. Raimundo Fernández</p>
                <p className="text-sm text-[#D4AF37] font-bold tracking-widest">
                  Abogado | Matrícula C.S.J. N.º 66.875
                </p>
              </div>
              <p className="text-neutral-400 text-sm">
                Abogado con formación jurídica nacional e internacional, cursando Masterado en Derecho Penal. Director de estudio
                jurídico propio, con experiencia en asesoramiento legal estratégico, análisis normativo y representación judicial.
                Formación complementaria en desarrollo económico, parques industriales y gestión pública en programas internacionales
                en Taiwán, Israel y Estados Unidos.
              </p>
              <div className="space-y-6 text-neutral-400 leading-relaxed font-light">
                <p>
                  Mi nombre es <strong>Abg. Raimundo Fernández</strong>. Soy un abogado penalista comprometido no
                  solo con el rigor técnico del Derecho, sino con la justicia en su sentido más amplio. Mi práctica se
                  basa en el estudio constante —cursando actualmente un Masterado en Derecho Penal— y en una defensa
                  apasionada.
                </p>
                <p>
                  Me defino como una figura multifacética: hijo, padre, esposo y profesional. Esta profundidad emocional
                  es la que traigo a cada caso, entendiendo que detrás de cada expediente hay una vida, una familia y un
                  patrimonio que proteger.
                </p>
                <p>
                  Mi firma, el <strong>Centro de Consultoría Jurídica y Empresarial</strong>, opera desde Areguá (Barrio
                  Cerrado Ecos del Lago) para todo el país, combinando la cercanía humana con la estrategia de alto
                  nivel.
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="px-4 py-2 border border-[#D4AF37]/30 rounded bg-[#D4AF37]/5">
                  <p className="text-[#D4AF37] font-bold text-sm">Derecho Penal</p>
                </div>
                <div className="px-4 py-2 border border-[#D4AF37]/30 rounded bg-[#D4AF37]/5">
                  <p className="text-[#D4AF37] font-bold text-sm">Derecho Civil</p>
                </div>
                <div className="px-4 py-2 border border-[#D4AF37]/30 rounded bg-[#D4AF37]/5">
                  <p className="text-[#D4AF37] font-bold text-sm">Empresarial</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 relative flex justify-center md:justify-end">
              <div className="relative w-72 h-80 md:w-[380px] md:h-[520px] p-2 bg-black border border-[#D4AF37]/30 shadow-2xl">
                <div className="absolute top-4 -right-4 w-full h-full border border-[#D4AF37]/50 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#D4AF37]/50 -z-10"></div>

                <div className="w-full h-full bg-neutral-900 overflow-hidden relative transition-all duration-700">
                  <img
                    src={`${base}images/diploma.jpeg${v}`}
                    alt="Diploma - Abg. Raimundo Fernández"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-10">
                    <div className="h-0.5 w-16 bg-[#D4AF37] mb-3"></div>
                    <p className="text-white font-serif text-xl font-bold">Centro de Consultoría</p>
                    <p className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mt-1">
                      Trayectoria & Vocación
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-neutral-900 opacity-20 blur-2xl"></div>
            <div className="relative bg-neutral-950 border border-neutral-800 p-8 rounded-sm shadow-2xl">
              <img
                src={`${base}images/libra.png${v}`}
                alt="Icono - Filosofía de Defensa"
                className="w-16 h-16 mb-6 object-contain"
              />
              <h3 className="text-xl font-bold text.white mb-2 font-serif">Filosofía de Defensa</h3>
              <p className="text-neutral-500 text-sm mb-6">
                "Una defensa firme, ética y orientada a resultados concretos."
              </p>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Confidencialidad absoluta</span>
                </li>
                <li className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                  <span>Análisis técnico minucioso</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                  <span>Acompañamiento familiar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- ÁREAS DE PRÁCTICA --- */}
      <section id="areas-de-practica" className="py-24 bg-neutral-950 border-t border-neutral-900">
        <div
          className="absolute inset-x-0 -mt-24 h-64 md:h-80 opacity-70"
          style={{
            backgroundImage: `url(${base}images/hero4.png${v})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <div className="absolute inset-x-0 -mt-24 h-64 md:h-80 bg-black/70 pointer-events-none" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-bold">Mis Especialidades</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-3">Áreas de Práctica</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="group bg-black p-8 border border-neutral-900 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-500"></div>
                <Gavel className="w-10 h-10 text-[#D4AF37] mb-6" />
                <h4 className="text-xl font-bold text-white mb-3 font-serif">Derecho Penal</h4>
                <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-400 transition-colors">
                  Defensa técnica en procesos complejos. Litigios de alta sensibilidad y representación ante fiscalías.
                </p>
              </div>

              <div className="group bg-black p-8 border border-neutral-900 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-500"></div>
                <Scale className="w-10 h-10 text-[#D4AF37] mb-6" />
                <h4 className="text-xl font-bold text-white mb-3 font-serif">Civil & Comercial</h4>
                <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-400 transition-colors">
                  Protección patrimonial, contratos, obligaciones y litigios con fuertes dimensiones económicas.
                </p>
              </div>

              <div className="group bg-black p-8 border border-neutral-900 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-500"></div>
                <Users className="w-10 h-10 text-[#D4AF37] mb-6" />
                <h4 className="text-xl font-bold text.white mb-3 font-serif">Niñez y Familia</h4>
                <p className="text-neutral-500 text.sm leading-relaxed group-hover:text-neutral-400 transition-colors">
                  Resolución de conflictos familiares priorizando la dignidad humana y los derechos del niño.
                </p>
              </div>

              <div className="group bg-black p-8 border border-neutral-900 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-500"></div>
                <Briefcase className="w-10 h-10 text-[#D4AF37] mb-6" />
                <h4 className="text-xl font-bold text.white mb-3 font-serif">Asesoría Empresarial</h4>
                <p className="text-neutral-500 text.sm leading-relaxed group-hover:text-neutral-400 transition-colors">
                  Consultoría estratégica para empresas, desarrollo de negocios y análisis normativo.
                </p>
              </div>

              <div className="group bg-black p-8 border border-neutral-900 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-500"></div>
                <Briefcase className="w-10 h-10 text-[#D4AF37] mb-6" />
                <h4 className="text-xl font-bold text.white mb-3 font-serif">Contratos y Consultoría Legal</h4>
                <p className="text-neutral-500 text.sm leading-relaxed">
                  Redacción y revisión de contratos. Consultoría jurídica estratégica para personas y empresas.
                </p>
              </div>

              <div className="group bg-black p-8 border border-neutral-900 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-500"></div>
                <Gavel className="w-10 h-10 text-[#D4AF37] mb-6" />
                <h4 className="text-xl font-bold text.white mb-3 font-serif">Representación ante Fiscalías y Juzgados</h4>
                <p className="text-neutral-500 text.sm leading-relaxed">
                  Presencia activa y defensa técnica ante órganos judiciales y administrativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORMACIÓN INTERNACIONAL --- */}
      <section id="formacion" className="py-24 relative overflow-hidden bg-black">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <Globe className="w-[800px] h-[800px] text-[#D4AF37]" strokeWidth={0.5} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-2">
              Excelencia Académica
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text.white">Formación Global</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-3 bg-gradient-to-r from-neutral-900 to-black border border-[#D4AF37]/30 p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-6">
                <div className="bg-[#D4AF37] p-3 rounded-full text-black">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text.white font-serif">Masterado en Derecho Penal</h3>
                  <p className="text-neutral-400">
                    Universidad Americana – Paraguay
                    <span className="text-[#D4AF37] text-xs font-bold px-2 py-0.5 border border-[#D4AF37] rounded ml-2">
                      EN CURSO
                    </span>
                  </p>
                </div>
              </div>
              <div className="h-px w-full md:w-px md:h-16 bg-neutral-800"></div>
              <div className="text-center md:text-right">
                <p className="text-neutral-500 text.sm">Base Jurídica</p>
                <p className="text.white font-bold">Abogado (UPAP)</p>
              </div>
            </div>

            <div className="bg-neutral-950 p-8 border-t-2 border-[#D4AF37] hover:bg-neutral-900 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text.white">Taiwán</h4>
                <Globe className="text-[#D4AF37] w-5 h-5" />
              </div>
              <p className="text-neutral-400 text.sm">Especialista en Parques Industriales y Desarrollo.</p>
            </div>

            <div className="bg-neutral-950 p-8 border-t-2 border-[#D4AF37] hover:bg-neutral-900 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text.white">Israel</h4>
                <Globe className="text-[#D4AF37] w-5 h-5" />
              </div>
              <p className="text-neutral-400 text.sm">Desarrollo Económico Local y Estrategias.</p>
            </div>

            <div className="bg-neutral-950 p-8 border-t-2 border-[#D4AF37] hover:bg-neutral-900 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text.white">Estados Unidos</h4>
                <Globe className="text-[#D4AF37] w-5 h-5" />
              </div>
              <p className="text-neutral-400 text.sm">Excelencia en Gestión de Adquisiciones.</p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-950 p-6 border border-neutral-800">
              <h4 className="text.white font-serif font-bold mb-2">Masterado en Derecho Penal</h4>
              <p className="text-neutral-400 text.sm">Universidad Americana – Paraguay</p>
              <span className="inline-block mt-2 text-[#D4AF37] text-xs font-bold px-2 py-0.5 border border-[#D4AF37] rounded">
                EN CURSO
              </span>
            </div>
            <div className="bg-neutral-950 p-6 border border-neutral-800">
              <h4 className="text.white font-serif font-bold mb-2">Abogado</h4>
              <p className="text-neutral-400 text.sm">Universidad Politécnica y Artística del Paraguay</p>
            </div>
            <div className="bg-neutral-950 p-6 border border-neutral-800">
              <h4 className="text.white font-serif font-bold mb-2">Didáctica Universitaria</h4>
              <p className="text-neutral-400 text.sm">Universidad Leonardo Da Vinci</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contacto" className="py-24 bg-black border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 place-items-center gap-6 mb-12">
            <a
              href={whatsappLink}
              className="flex flex-col items-center justify-center p-8 bg-neutral-900 border border-neutral-800 hover:border-[#D4AF37] transition-all group rounded-sm w-full max-w-md"
            >
              <Phone className="w-10 h-10 text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text.white font-bold text-lg mb-1">Llamada / WhatsApp</h3>
              <p className="text-[#D4AF37] font-mono text-xl">0987 226 345</p>
              <p className="text-neutral-500 text.sm mt-2">Respuesta Inmediata</p>
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 p-6 text-center">
              <MapPin className="w-6 h-6 text-[#D4AF37] mb-2 mx-auto" />
              <p className="text-neutral-300">Estanzuela – Barrio Cerrado Ecos del Lago</p>
              <p className="text-neutral-500 text.sm">Areguá, Paraguay – Atención en Asunción y alcance nacional</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6">
              <ClockIcon />
              <p className="text-neutral-300">Horarios de atención</p>
              <p className="text-neutral-500 text.sm">Lunes a viernes – Horario a coordinar</p>
              <p className="text-neutral-500 text.sm">Atención con cita previa</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6">
              <MailIcon />
              <p className="text-neutral-300">Correo profesional</p>
              <p className="text-neutral-500 text.sm">raifernandez70@gmail.com</p>
            </div>
          </div>

          <div className="bg-[#25D366] text.black p-1 rounded inline-block mt-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black text-[#25D366] px-8 py-3 font-bold hover:bg-neutral-900 transition-colors uppercase tracking-widest text.sm flex items-center justify-center gap-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              Contactar por WhatsApp
            </a>
          </div>

          <div className="mt-8">
            <div className="text-neutral-300 mb-2">
              Estanzuela – Barrio Cerrado Ecos del Lago<br />
              Areguá, Paraguay
            </div>
            <div className="relative w-full h-64 md:h-96 border border-neutral-800">
              <iframe
                title="Mapa - Estanzuela, Barrio Cerrado Ecos del Lago, Areguá"
                src="https://www.google.com/maps?q=Estanzuela%20Barrio%20Cerrado%20Ecos%20del%20Lago%20Aregu%C3%A1%20Paraguay&output=embed"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- NUESTRAS OFICINAS (VIDEO) --- */}
      <section id="oficinas" className="py-24 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-8">
            <span className="text-[#D4AF37] font-bold text.sm tracking-widest uppercase">Nuestras Oficinas</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text.white mt-2">Centro de Consultoría</h2>
            <p className="text-neutral-400 text.sm mt-3 max-w-2xl">
              Visítenos en Estanzuela – Barrio Cerrado Ecos del Lago, Areguá. Atención con cita previa.
            </p>
          </div>

          <div className="relative w-full overflow-hidden bg-black border border-neutral-800">
            <div className="aspect-[9/16] w-full max-w-[420px] md:max-w-[500px] mx-auto bg-neutral-900">
              <video
                className="w-full h-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                preload="metadata"
                poster={`${base}images/hero4.png${v}`}
              >
                <source src={`${base}videos/video1.mp4${v}`} type="video/mp4" />
                Su navegador no soporta la reproducción de video.
              </video>
            </div>
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-neutral-800/60"></div>
          </div>
        </div>
      </section>

      {/* --- IDIOMAS --- */}
      <section className="py-16 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text.white font-serif font-bold text-2xl mb-6">Idiomas</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-neutral-900 border border-neutral-800 p-4">
              <p className="text-neutral-300">Español – Avanzado</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-4">
              <p className="text-neutral-300">Guaraní – Avanzado</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black border-t border-neutral-900 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="h-10 w-10 bg-black border border-[#D4AF37] rounded flex items-center justify-center overflow-hidden">
                <img
                  src={`${base}images/libra.png${v}`}
                  alt="Logo Abg. Raimundo Fernández"
                  className="w-full h-full object-contain select-none pointer-events-none"
                />
              </div>
              <span className="text.white font-bold font-serif uppercase tracking-wider">
                Abg. Raimundo Fernández
              </span>
            </div>
            <p className="text-neutral-500 text-xs tracking-widest">Centro de Consultoría Jurídica y Empresarial</p>
            <div className="mt-3 flex items-center gap-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/raimundo.fernandez.52"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-neutral-500 hover:text-[#D4AF37] transition-colors hover:scale-110"
                title="Facebook"
              >
                <Facebook className="w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/raimundofer10/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-500 hover:text-[#D4AF37] transition-colors hover:scale-110"
                title="Instagram"
              >
                <Instagram className="w-7 h-7" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="transition-transform hover:scale-110"
                title="WhatsApp"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-7 h-7"
                />
              </a>
            </div>
          </div>
          <div className="text-neutral-600 text-[10px] text-center md:text-right space-y-1 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
            <p className="text-[#D4AF37]/50">Matrícula C.S.J. N.º 66.875</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a
            href="https://tuwebpy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-[#D4AF37] text-xs uppercase tracking-widest"
          >
            Desarrollado por TuWebPy
          </a>
        </div>
      </footer>

      {/* --- FLOATING WHATSAPP --- */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1db854] text.white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 flex items-center justify-center border-2 border-black"
        aria-label="Contactar por WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-7 h-7"
        />
      </a>
    </div>
  );
}

/* Helpers for contact icons using lucide-react without extra imports */
function ClockIcon() {
  return <span className="inline-block w-6 h-6 text-[#D4AF37]">⏰</span>;
}
function MailIcon() {
  return <span className="inline-block w-6 h-6 text-[#D4AF37]">@</span>;
}
