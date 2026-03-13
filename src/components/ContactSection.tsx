
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

type SocialLink = {
  href: string;
  icon: React.ComponentType<{ size: number }>;
  label: string;
};

export function ContactSection() {
  const { t } = useTranslation();

  const socialLinks: SocialLink[] = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "mailto:alex@example.com", icon: Mail, label: "Email" },
  ];

  return (
    <section id="contact" className="section">
      <div
        className="glow-blob"
        style={{
          left: "50%",
          top: "50%",
          width: 500,
          height: 500,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="contact-inner" style={{ position: "relative" }}>
        <div className="section-header">
          <span className="section-label">{t("contact.label")}</span>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
          >
            {t("contact.title")}
          </h2>
          <div className="section-divider" />
          <p
            style={{
              marginTop: 24,
              maxWidth: 480,
              lineHeight: 1.7,
              color: "var(--fg-muted)",
            }}
          >
            {t("contact.description")}
          </p>
        </div>

        <div className="contact-card">
          <a href="mailto:alex@example.com" className="btn-primary">
            {t("contact.cta")}
            <ArrowUpRight size={16} />
          </a>

          <p className="contact-social-prompt">{t("contact.socialPrompt")}</p>

          <div className="contact-socials">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="contact-social-link"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}