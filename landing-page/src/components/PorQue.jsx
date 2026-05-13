import './PorQue.css';

const motivos = [
  'Aprenda a cobrar mais pelos seus projetos e aumente a margem de lucro da sua loja.',
  'Posicione-se como autoridade no mercado.',
  'Tenha uma equipe motivada e que vende mais.',
  'Especifique com mais segurança e inovação.',
  'Conecte-se com os arquitetos que mais especificam na região.',
];

export default function PorQue() {
  return (
    <section className="porque" id="por-que">
      <div className="porque__container">
        {/* Left — title block */}
        <div className="porque__left">
          <span className="porque__label reveal spaced">Por que participar?</span>
          <h2 className="porque__title reveal reveal-d1">
            O Retorno sobre<br />
            o seu <span className="gold">Conhecimento</span>
          </h2>
          <div className="porque__bar reveal reveal-d2" aria-hidden="true" />

          <div className="porque__networking reveal reveal-d3">
            <span className="porque__networking-icon" aria-hidden="true">»»</span>
            <p>
              E <strong>MUUUITO NETWORKING</strong><br />para todo mundo!
            </p>
          </div>
        </div>

        {/* Right — checklist */}
        <ul className="porque__list">
          {motivos.map((m, i) => (
            <li
              key={i}
              className={`porque__item reveal reveal-d${i + 1}`}
            >
              <span className="porque__check" aria-hidden="true">✓</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Background number */}
      <span className="porque__bg-num" aria-hidden="true">ROC</span>
    </section>
  );
}
