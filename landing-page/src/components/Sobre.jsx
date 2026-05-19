import { useState } from 'react';
import './Sobre.css';

const pilares = [
  {
    icon: '◈',
    titulo: 'Trilhas Locais',
    desc: '4 encontros focados e separados por público — Lojistas e Profissionais — com palestras, workshops e imersões temáticas.',
    slides: 3,
  },
  {
    icon: '◉',
    titulo: 'Masterclasses Nacionais',
    desc: '2 grandes eventos conjuntos com nomes de peso do mercado: Carlos Ferreirinha, Valdir Júnior e Doma Arquitetura.',
    slides: 3,
  },
];

function CardCarousel({ count }) {
  const [active, setActive] = useState(0);

  return (
    <div className="sobre__carousel">
      <div className="sobre__carousel-track">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`sobre__carousel-slide ${active === i ? 'sobre__carousel-slide--active' : ''}`}
            aria-hidden={active !== i}
          >
            <div className="sobre__carousel-placeholder">
              <span className="sobre__carousel-placeholder-icon">⬜</span>
              <span className="sobre__carousel-placeholder-label">Imagem {i + 1}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="sobre__carousel-dots">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={`sobre__carousel-dot ${active === i ? 'sobre__carousel-dot--active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre__container">
        <div className="sobre__header">
          <span className="sobre__label reveal spaced">O Programa</span>
          <h2 className="sobre__title reveal reveal-d1">
            Reconhecimento,<br />
            <span className="gold">relacionamento</span> e negócios!
          </h2>
          <p className="sobre__text reveal reveal-d2">
            Projetar bem ou ter bons produtos já não é suficiente.
            É preciso saber <strong>VENDER</strong> e <strong>GERIR</strong>.
            O Núcleo do Conhecimento nasce para elevar a régua do mercado ArqDecor.
          </p>
        </div>

        <div className="sobre__pilares">
          {pilares.map((p, i) => (
            <div className={`sobre__card reveal reveal-d${i + 2}`} key={i}>
              <CardCarousel count={p.slides} />
              <span className="sobre__card-icon">{p.icon}</span>
              <h3 className="sobre__card-title">{p.titulo}</h3>
              <p className="sobre__card-desc">{p.desc}</p>
              <span className="sobre__card-line" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative diagonal stripes */}
      <div className="sobre__deco" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="sobre__stripe" style={{ '--i': i }} />
        ))}
      </div>
    </section>
  );
}
