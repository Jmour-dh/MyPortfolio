import { useTranslation } from "react-i18next";
import imgs from "../assets/images/developer.jpg";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t("about.label")}</span>
          <h2 className="section-title">{t("about.title")}</h2>
          <div className="section-divider" />
        </div>

        <div className="about-grid">
          {/* Image */}
          <div className="about-image-wrap">
            <div className="about-image-inner">
              <img
                src={imgs}
                alt="Photo de Dhia Eddine Jmour, developpeur full stack"
                className="about-image"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className="about-image-overlay" />
            </div>
            <div className="about-image-glow" />
          </div>

          {/* Content */}
          <div className="about-content">
            <div className="about-role">
              <h3>{t("about.role")}</h3>
              <p>{t("about.location")}</p>
            </div>

            <div className="about-bio">
              <p>{t("about.bio1")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}