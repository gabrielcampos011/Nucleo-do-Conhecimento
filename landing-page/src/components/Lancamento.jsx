import './Lancamento.css';

export default function Lancamento() {
  return (
    <section className="lancamento" id="lancamento">
      <div className="lancamento__container">
        <div className="lancamento__header reveal">
          <span className="lancamento__label spaced">O Lançamento</span>
          <h2 className="lancamento__title reveal reveal-d1">
            Assista ao vídeo<br />
            <span className="gold">de lançamento</span>
          </h2>
          <p className="lancamento__desc reveal reveal-d2">
            Carlos Ferreirinha marcou presença no lançamento do Núcleo do Conhecimento.<br />
            Uma experiência inédita sobre mercado de luxo, gestão, inovação e o futuro dos negócios.
          </p>
        </div>

        <div className="lancamento__player reveal reveal-d3">
          <div className="lancamento__video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/qgmgnxJFFhw?rel=0&modestbranding=1&color=white"
              title="Vídeo de Lançamento — Núcleo do Conhecimento"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="lancamento__quote reveal reveal-d4">
          <div className="lancamento__quote-line" aria-hidden="true" />
          <blockquote className="lancamento__quote-text">
            "Não é o mais forte que sobrevive, nem o mais inteligente,<br className="lancamento__quote-br" />
            mas o que melhor se adapta às mudanças."
          </blockquote>
          <cite className="lancamento__quote-cite">— Adaptado de Charles Darwin</cite>
        </div>
      </div>

      {/* Decorative bars */}
      <div className="lancamento__bars" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="lancamento__bar" style={{ '--i': i }} />
        ))}
      </div>
    </section>
  );
}
