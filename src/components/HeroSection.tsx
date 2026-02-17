import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="grid-bg" />
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="hero-content">
        {/* Status badge */}
        {/* <div className="status-badge">
          <span className="status-dot">
            <span className="status-dot-ping" />
            <span className="status-dot-core" />
          </span>
          <span className="status-text">{t('hero.available')}</span>
        </div> */}

        <h1 className="hero-name">
          Dhia Eddine <span className="gradient">Jmour</span>
        </h1>

        <div className="hero-role-wrap">
          <div className="hero-role-line" />
          <h2 className="hero-role">{t("hero.role")}</h2>
          <div className="hero-role-line hero-role-line-r" />
        </div>

        <p className="hero-desc">{t('hero.description')}</p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">{t('hero.cta')}</a>
          <a href="#projects" className="btn-secondary">{t("hero.projects")}</a>
        </div>

        <div className="hero-socials">
          {[
            { href: "https://github.com/Jmour-dh", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/jmourdhiaeddine", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:dhiaeddinejm@gmail.com.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="social-icon-link"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <a href="#about" className="scroll-hint" aria-label="Scroll down">
          <span>{t("hero.scrollDown")}</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  )
}