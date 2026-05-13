import './Sobre.css';

const pilares = [
  {
    icon: '◈',
    titulo: 'Trilhas Locais',
    desc: '4 encontros focados e separados por público — Lojistas e Profissionais — com palestras, workshops e imersões temáticas.',
  },
  {
    icon: '◉',
    titulo: 'Masterclasses Nacionais',
    desc: '2 grandes eventos conjuntos com nomes de peso do mercado: Carlos Ferreirinha, Valdir Júnior e Doma Arquitetura.',
  },
];

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
