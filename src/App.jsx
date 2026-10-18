import { useEffect, useState } from "react";
import "./App.css";

const email = "micelvasconcelos66@gmail.com";
const projects = [
  {
    id: "01",
    name: "Vitrine & Clientes",
    subtitle: "Cadastro de produtos e clientes",
    category: "Full stack",
    description:
      "Uma aplicação para o dia a dia de uma pequena papelaria: produtos, clientes e indicadores em uma interface integrada a uma API.",
    tags: ["React", "TypeScript", "FastAPI", "Docker"],
    details: [
      "Interface React e TypeScript com formulários, listagens e indicadores de cadastro.",
      "API Python com FastAPI, validação de dados e módulos separados por domínio.",
      "Testes com pytest e respostas de erro padronizadas.",
      "Ambiente Docker com duas réplicas da API, Nginx e armazenamento JSON compartilhado, com limites documentados para uso acadêmico.",
    ],
    note: "Projeto acadêmico · repositório público",
    url: "https://github.com/Micel357/cadastro-produtos-clientes",
  },
  {
    id: "02",
    name: "ECOA Dashboard",
    subtitle: "Indicadores ESG · Squad 2",
    category: "Front-end",
    description:
      "Interface para organizar a jornada de gestão ambiental, social e de governança, com navegação entre indicadores, questionários e planos de ação.",
    tags: ["React", "React Router", "Vite", "CSS"],
    details: [
      "Projeto em equipe com telas organizadas por funcionalidade e componentes reutilizáveis.",
      "Rotas para dashboard, questionários ESG, plano de ação, relatórios e gestão de equipe.",
      "Estados de interface e navegação implementados em React com React Router.",
      "Escopo atual: front-end. O repositório não contém um back-end próprio; a tela de gráficos inclui representações demonstrativas.",
    ],
    note: "Projeto em equipe · repositório público",
    url: "https://github.com/Micel357/ECOA-Dashboard---Squad-2",
  },
];
const experiences = [
  [
    "IntenseGP",
    "Interface & experiência",
    "Desenvolvimento de home page em React Native para uma iniciativa de governança, educação e socialização.",
  ],
  [
    "Accenture",
    "Agentes & automação",
    "Criação de agentes autônomos em Python com CrewAI, explorando a organização de tarefas e a colaboração entre agentes.",
  ],
  [
    "Move-Up",
    "Desenvolvimento mobile",
    "Colaboração no desenvolvimento e na migração de React para Ionic no Lumio-app, aplicativo disponível nas lojas.",
  ],
];
const skills = [
  [
    "01",
    "Desenvolvimento",
    "Java · C / C++ · Python",
    "Lógica de programação, back-end e integração de APIs.",
  ],
  [
    "02",
    "Interfaces",
    "React · TypeScript · HTML / CSS",
    "Interfaces componentizadas e integração com serviços. Vivência com Angular, React Native e Ionic.",
  ],
  [
    "03",
    "Dados & qualidade",
    "SQL Server · PostgreSQL · QA",
    "Bancos relacionais, validação de dados e testes de software. Interesse em cibersegurança.",
  ],
  [
    "04",
    "Ferramentas & colaboração",
    "Git / GitHub · Linux · Docker",
    "Scrum, Kanban, Lean e documentação de requisitos. AWS em formação e inglês B1.",
  ],
];
const sections = [
  ["projetos", "Projetos"],
  ["trajetoria", "Trajetória"],
  ["competencias", "Competências"],
  ["contato", "Contato"],
];
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a
        className="repository-banner"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Abrir repositório ${project.name} no GitHub`}
      >
        <span className="repository-kicker">
          <span aria-hidden="true">⌘</span> REPOSITÓRIO NO GITHUB <Arrow />
        </span>
        <span className="repository-owner">Micel357 /</span>
        <strong>{project.url.split("/").pop()}</strong>
        <span className="repository-access">
          Código público <span aria-hidden="true">↗</span>
        </span>
      </a>
      <div className="project-body">
        <div className="project-meta">
          <span>PROJETO {project.id}</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <details>
          <summary>
            Explorar o projeto <span aria-hidden="true">+</span>
          </summary>
          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <p className="project-note">{project.note}</p>
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer">
              Ver código no GitHub <Arrow />
            </a>
          )}
        </details>
      </div>
    </article>
  );
}

function App() {
  const [filter, setFilter] = useState("Todos");
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!copyMessage) return;
    const timeout = setTimeout(() => setCopyMessage(""), 5000);
    return () => clearTimeout(timeout);
  }, [copyMessage]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyMessage("E-mail copiado!");
    } catch {
      setCopyMessage("Não foi possível copiar. Selecione o e-mail abaixo.");
    }
  }
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <a
          className="brand"
          href="#inicio"
          aria-label="Micael Vasconcelos, início"
        >
          mv<span>.</span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Fechar −" : "Menu +"}
        </button>
        <nav
          id="navigation"
          className={menuOpen ? "open" : ""}
          aria-label="Principal"
          onKeyDown={(event) => {
            if (event.key === "Escape") setMenuOpen(false);
          }}
        >
          {sections.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href={`mailto:${email}`}>
          Vamos conversar <Arrow />
        </a>
      </header>
      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-top">
            <span className="eyebrow">DESENVOLVEDOR EM FORMAÇÃO</span>
            <span className="location">Recife, PE — Brasil</span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">
                Micael
                <span>
                  Vasconcelos<span className="period">.</span>
                </span>
              </h1>
              <p className="hero-statement">
                Lógica para construir.
                <br />
                <span>Cuidado para entregar.</span>
              </p>
              <p className="hero-description">
                Transformo aprendizado em aplicações reais, conectando
                desenvolvimento, automação e qualidade de software.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projetos">
                  Conheça meus projetos <Arrow />
                </a>
                <button
                  className="button secondary"
                  onClick={() => window.print()}
                >
                  Imprimir / salvar PDF <span aria-hidden="true">↓</span>
                </button>
              </div>
            </div>
            <aside className="identity-card" aria-label="Perfil profissional">
              <div className="identity-top">
                <span>PERFIL / 2026</span>
                <span className="status-dot" />
              </div>
              <div className="monogram" aria-hidden="true">
                M<span>V</span>
                <i>↗</i>
              </div>
              <div className="identity-bottom">
                <span>
                  DESENVOLVIMENTO
                  <br />& QUALIDADE
                </span>
                <span>
                  05<span>º período</span>
                </span>
              </div>
            </aside>
          </div>
          <div className="hero-bottom">
            <p>
              <span className="status-dot" /> Em busca de estágio ou vaga júnior
            </p>
            <a href="#sobre">
              Um pouco sobre mim <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section id="sobre" className="about section">
          <div className="section-label">01 / SOBRE MIM</div>
          <div>
            <h2>
              Curiosidade que vira
              <br />
              <span>prática.</span>
            </h2>
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas na
              Faculdade Católica ICR, no{" "}
              <strong>5º período e bolsista ProUni</strong>. Tenho interesse em
              construir soluções úteis, entender como elas funcionam e cuidar da
              sua qualidade.
            </p>
            <p>
              Minha experiência reúne back-end, interfaces web, bancos de dados
              e testes de software. Na Residência Tecnológica do Porto Digital,
              vivencio projetos em equipe; nos meus projetos, aprofundo
              automação, integração de APIs e organização de aplicações.
            </p>
            <div className="about-notes">
              <span>Back-end & interfaces</span>
              <span>Automação & APIs</span>
              <span>QA & cibersegurança</span>
            </div>
          </div>
        </section>
        <section id="projetos" className="section projects-section">
          <div className="section-heading">
            <div>
              <div className="section-label">02 / PROJETOS SELECIONADOS</div>
              <h2>
                Aprender. Construir.
                <br />
                <span>Colocar em prática.</span>
              </h2>
            </div>
            <p>
              Projetos reais, código aberto.
              <br />
              Conheça os repositórios no GitHub.
            </p>
          </div>
          <div className="project-toolbar">
            <div className="filters" role="group" aria-label="Filtrar projetos">
              {["Todos", "Full stack", "Front-end"].map((value) => (
                <button
                  key={value}
                  aria-pressed={filter === value}
                  onClick={() => setFilter(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <span aria-live="polite">
              {filter === "Todos" ? "02 projetos" : "01 projeto"}
            </span>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className={
                  filter !== "Todos" && filter !== project.category
                    ? "filtered-out"
                    : ""
                }
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
        <section id="trajetoria" className="section journey">
          <div className="section-label">03 / TRAJETÓRIA</div>
          <div>
            <h2>
              Construindo repertório.
              <br />
              <span>Em boa companhia.</span>
            </h2>
            <p className="section-intro">
              Vivências na Residência Tecnológica do Porto Digital.
            </p>
            <div className="timeline">
              {experiences.map(([company, role, description], index) => (
                <article key={company}>
                  <span className="timeline-number">0{index + 1}</span>
                  <div>
                    <span className="eyebrow">{role}</span>
                    <h3>{company}</h3>
                    <p>{description}</p>
                  </div>
                  <span className="timeline-mark" aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}
            </div>
            <div className="education">
              <div>
                <span className="eyebrow">FORMAÇÃO ACADÊMICA</span>
                <h3>
                  Análise e Desenvolvimento
                  <br />
                  de Sistemas
                </h3>
                <p>Faculdade Católica ICR · Bolsista ProUni</p>
                <p>Conclusão prevista: dezembro de 2026</p>
              </div>
              <strong>
                5<span>º período</span>
              </strong>
            </div>
            <p className="secondary-education">
              Ensino médio · EREM Rosa de Magalhães Melo · Concluído em 2023
            </p>
          </div>
        </section>
        <section id="competencias" className="section skills-section">
          <div className="section-heading">
            <div>
              <div className="section-label">04 / COMPETÊNCIAS</div>
              <h2>
                Uma base técnica.
                <br />
                <span>Várias possibilidades.</span>
              </h2>
            </div>
            <p>
              Conhecimento em evolução,
              <br />
              aplicado em cada projeto.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map(([number, title, stack, description]) => (
              <article key={number}>
                <span className="skill-number">/{number}</span>
                <h3>{title}</h3>
                <p className="skill-stack">{stack}</p>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="contato" className="section contact">
          <div className="section-label">05 / PRÓXIMO PASSO</div>
          <div className="contact-layout">
            <div>
              <p className="eyebrow">ABERTO A OPORTUNIDADES</p>
              <h2>
                Vamos construir
                <br />
                <span>algo juntos?</span>
                <Arrow />
              </h2>
              <p>
                Busco uma oportunidade de estágio ou vaga júnior para
                contribuir, aprender e evoluir com uma equipe.
              </p>
              <a className="contact-email" href={`mailto:${email}`}>
                {email}
              </a>
              <div className="contact-actions">
                <a className="button primary" href={`mailto:${email}`}>
                  Enviar e-mail <Arrow />
                </a>
                <button className="button secondary" onClick={copyEmail}>
                  Copiar e-mail <span aria-hidden="true">⧉</span>
                </button>
              </div>
              <p className="copy-status" role="status">
                {copyMessage}
              </p>
            </div>
            <div className="contact-links">
              <a
                href="https://github.com/Micel357"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
              <a
                href="https://www.linkedin.com/in/micael-vasconcelos"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow />
              </a>
              <a href="tel:+5581999329221">
                (81) 99932-9221 <Arrow />
              </a>
              <span>Recife, Pernambuco</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          mv.
        </a>
        <p>
          Micael Vasconcelos <span>© {new Date().getFullYear()}</span>
        </p>
        <a href="#inicio">De volta ao topo ↑</a>
      </footer>
    </>
  );
}
export default App;
