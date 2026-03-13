import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const projectMeta = [
  {
    tags: ["Angular", "Spring Boot", "PostgreSQL", "CSS","Docker"],
    github: "https://github.com/Jmour-dh/PMT",
    live: null,

  },
  {
    tags: ["React", "Node.js", "Experss","PostgreSQL", "SCSS"],
    github: "https://github.com/Jmour-dh/Royal-Palace",
    live: null,

  },
  {
    tags: ["React", "Node.js","Experss", "MongoDB", "CSS"],
    github: "https://github.com/Jmour-dh/Connectify",
    live: null,

  },
  {
    tags: ["React","Node.js","Experss","MongoDB", "CSS"],
    github: "https://github.com/Jmour-dh/Connectify",
    live: null,

  },
  {
    tags: ["React native","Node.js","Typescript", "WebSocket", "MongoDB"],
    github: "https://github.com/Jmour-dh/DMCHAT",
    live: null,
  },
];

export function ProjectsSection() {
  const { t } = useTranslation();

  const projects = projectMeta.map((meta, i) => ({
    ...meta,
    title: t(`projects.items.${i}.title`),
    description: t(`projects.items.${i}.description`),
  }));

  return (
    <section id="projects" className="section">
      <div
        className="glow-blob"
        style={{ right: 0, top: "25%", width: 400, height: 400 }}
      />

      <div className="container" style={{ position: "relative" }}>
        <div className="section-header">
          <span className="section-label">{t("projects.label")}</span>
          <h2 className="section-title">{t("projects.title")}</h2>
          <div className="section-divider" />
        </div>
        <div className="projects-small">
          {projects
            .map((project) => (
              <article key={project.title} className="project-card-sm">
                <div>
                  <div className="project-sm-header">
                    <h3>{project.title}</h3>
                    <div className="project-sm-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source - ${project.title}`}
                      >
                        <Github size={16} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Demo - ${project.title}`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p>{project.description}</p>
                </div>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
