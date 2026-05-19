import { useState } from 'react';
import './Trilhas.css';

const trilhas = [
  {
    id: 'profissionais',
    titulo: 'Trilha Profissionais',
    foco: 'Contribuir para a formação e evolução dos profissionais como gestores de negócios cada vez mais rentáveis.',
    formatos: ['Palestras com grandes nomes', 'Workshops e imersões temáticas', 'Consultoria e coaching personalizados'],
    temas: [
      'Branding e Posicionamento Pessoal',
      'Inteligência Artificial aplicada à Arquitetura',
      'Inovação e Tendências',
      'Gestão de Escritórios',
      'Mercado de Luxo',
    ],
  },
  {
    id: 'lojistas',
    titulo: 'Trilha Lojistas',
    foco: 'Garantir sustentabilidade, crescimento e equipes de alta performance.',
    formatos: ['Capacitações estratégicas', 'Encontros focados por público', 'Conteúdo aplicado ao varejo'],
    temas: [
      'Liderança e Gestão de Pessoas',
      'Relacionamento e Experiência do Cliente',
      'Excelência no Atendimento',
      'Vendas de Alta Performance',
      'Mercado de Luxo',
    ],
  },
];

export default function Trilhas() {
  const [active, setActive] = useState('profissionais');
  const current = trilhas.find((t) => t.id === active);

  return (
    <section className="trilhas" id="trilhas">
      <div className="trilhas__container">
        <div className="trilhas__header reveal">
          <span className="trilhas__label spaced">As Trilhas</span>
          <h2 className="trilhas__title">
            Conteúdo pensado para você e para seu negócio
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="trilhas__tabs reveal reveal-d1" role="tablist">
          {trilhas.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              className={`trilhas__tab ${active === t.id ? 'trilhas__tab--active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              <span className="trilhas__tab-name">{t.titulo}</span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="trilhas__panel reveal reveal-d2" key={active}>
          <div className="trilhas__panel-left">
            <p className="trilhas__foco">{current.foco}</p>

            <div className="trilhas__formatos">
              <span className="trilhas__sub spaced">Formato</span>
              <ul>
                {current.formatos.map((f, i) => (
                  <li key={i} className="trilhas__formato-item">
                    <span className="trilhas__dot" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="trilhas__panel-right">
            <span className="trilhas__sub spaced">Temas</span>
            <ul className="trilhas__temas">
              {current.temas.map((tema, i) => (
                <li key={i} className="trilhas__tema" style={{ '--delay': `${i * 0.07}s` }}>
                  <span className="trilhas__tema-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="trilhas__tema-name">{tema}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative sphere */}
      <img
        src="/assets/flutuante amarelo.webp"
        alt=""
        className="trilhas__sphere"
        aria-hidden="true"
      />
    </section>
  );
}
