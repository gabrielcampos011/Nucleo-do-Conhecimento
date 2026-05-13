import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Decorative vertical bars top-right */}
      <div className="hero__bars" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="hero__bar" style={{ '--i': i }} />
        ))}
      </div>

      {/* Decorative hatched sphere bottom-left */}
      <img
        src="/assets/flutuante amarelo.webp"
        alt=""
        className="hero__sphere"
        aria-hidden="true"
      />

      {/* Decorative arc circle */}
      <img
        src="/assets/arcos flutuantes.webp"
        alt=""
        className="hero__arc"
        aria-hidden="true"
      />

      <div className="hero__content">
        {/* Logo principal */}
        <div className="hero__logos reveal">
          <img
            src="/assets/Logo-branca-nucleo-do-conhecimento.png"
            alt="Núcleo do Conhecimento"
            className="hero__logo-main"
          />
        </div>

        <h1 className="hero__title reveal reveal-d1">
          O mercado mudou.<br />
          <span className="hero__title-sub">E nós precisamos evoluir com ele.</span>
        </h1>

        <p className="hero__desc reveal reveal-d2">
          Um programa inédito de capacitação, desenvolvimento e inovação<br className="hero__br" />
          voltado para <strong>Lojistas</strong> e <strong>Profissionais Especificadores</strong>.
        </p>

        <a href="#planos" className="hero__cta reveal reveal-d3">
          Quero me inscrever
          <span className="hero__cta-arrow">→</span>
        </a>

        {/* Realização — abaixo do CTA */}
        <div className="hero__partners reveal reveal-d4">
          <span className="hero__partners-label">Realização</span>
          <div className="hero__partners-logos">
            <img src="/assets/logo-sebrae-branca.png" alt="SEBRAE" className="hero__partner-logo" />
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint reveal reveal-d5" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">scroll</span>
      </div>
    </section>
  );
}
