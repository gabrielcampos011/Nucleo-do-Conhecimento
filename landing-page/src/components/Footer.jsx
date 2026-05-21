import './Footer.css';

const links = [
  { label: 'O Programa', href: '#sobre' },
  { label: 'As Trilhas', href: '#trilhas' },
  { label: 'Por Que Participar', href: '#por-que' },
  { label: 'O Lançamento', href: '#lancamento' },
];

const sociais = [
  { label: 'Instagram', href: '#', icon: 'IG' },
  { label: 'LinkedIn', href: '#', icon: 'IN' },
];

export default function Footer() {
  return (
    <footer className="footer" id="planos">
      {/* CTA strip */}
      <div className="footer__cta-strip">
        <div className="footer__cta-content">
          <div>
            <p className="footer__cta-label spaced">Vagas Limitadas</p>
            <h3 className="footer__cta-title">
              Garanta sua inscrição<br />e evolua com o mercado.
            </h3>
          </div>
          <a href="#" className="footer__cta-btn">
            Quero me inscrever
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer__main">
        <div className="footer__col footer__col--brand">
          <img
            src={`${import.meta.env.BASE_URL}assets/Logo-branca-nucleo-do-conhecimento.png`}
            alt="Núcleo do Conhecimento"
            className="footer__logo"
          />
          <p className="footer__tagline">
            Um movimento de evolução que vai transformar o mercado ArqDecor.
          </p>
          <div className="footer__realizacao">
            <span className="footer__realizacao-label">Realização</span>
            <img src={`${import.meta.env.BASE_URL}assets/logo-sebrae-branca.png`} alt="SEBRAE" className="footer__sebrae" />
          </div>
        </div>

        <div className="footer__col">
          <span className="footer__col-title spaced">Navegação</span>
          <ul className="footer__links">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="footer__link">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <span className="footer__col-title spaced">Redes Sociais</span>
          <ul className="footer__sociais">
            {sociais.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="footer__social" aria-label={s.label}>
                  <span className="footer__social-icon">{s.icon}</span>
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Núcleo do Conhecimento · Todos os direitos reservados.</span>
        <span>nucleourbano.com.br/conhecimento</span>
      </div>
    </footer>
  );
}
