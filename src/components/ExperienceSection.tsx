import React from "react";
import { Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ExperienceItem {
    period: string;
    role: string;
    company: string;
    description: string;
  }
  
const experienceTags: string[][] = [
  ["Next.js", "TypeScript", "AWS", "PostgreSQL"],
  ["React", "Node.js", "MongoDB", "Docker"],
  ["React", "JavaScript", "Tailwind CSS", "REST API"],
];

const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();

  const experiences = (t("experience.items", { returnObjects: true }) as ExperienceItem[]).map(
    (item: ExperienceItem, i: number) => ({
      ...item,
      tags: experienceTags[i] || [],
    })
  );

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t("experience.label")}</span>
          <h2 className="section-title">{t("experience.title")}</h2>
          <div className="section-divider" />
        </div>

        <div className="timeline">
          <div className="timeline-line" />

          {experiences.map((exp) => (
            <article key={exp.role} className="timeline-item">
              <div className="timeline-dot">
                <div className="timeline-dot-inner">
                  <Briefcase size={20} />
                </div>
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>

                <p>{exp.description}</p>

                <div className="tag-list">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag tag-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;