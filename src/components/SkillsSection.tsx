import React from "react";
import { Monitor, Server, Database, Cloud } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ size?: number }>; // Typage générique pour les icônes
  skills: string[];
}

export const SkillsSection: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories: SkillCategory[] = [
    {
      title: t("skills.categories.frontend"),
      icon: Monitor,
      skills: ["React", "React native", "Angular", "TypeScript", "SASS", "HTML/CSS"],
    },
    {
      title: t("skills.categories.backend"),
      icon: Server,
      skills: ["Node.js", "Spring Boot", "Express", "REST API"],
    },
    {
      title: t("skills.categories.database"),
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Mysql"],
    },
    {
      title: t("skills.categories.devops"),
      icon: Cloud,
      skills: ["Git", "Docker", "AWS", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="glow-blob" style={{ left: 0, top: "33%", width: 400, height: 400 }} />

      <div className="container" style={{ position: "relative" }}>
        <div className="section-header">
          <span className="section-label">{t("skills.label")}</span>
          <h2 className="section-title">{t("skills.title")}</h2>
          <div className="section-divider" />
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card">
              <div className="skill-card-icon">
                <category.icon size={20} />
              </div>
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;