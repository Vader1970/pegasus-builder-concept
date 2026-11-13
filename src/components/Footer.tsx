import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Anchor } from "@/components/ui/Anchor";
import { ArrowUp } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { navItems } from "@/lib/content";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ds-footer">
      <div className="ds-wrap">
        <div className="ds-footer-grid">
          <div className="ds-footer-brand">
            <Logo tone="light" height={46} />
            <p>
              Premium residential concept
              <br />
              Illustrated portfolio
            </p>
          </div>
          <nav className="ds-footer-nav" aria-label="Footer">
            <span className="ds-footer-label">Navigate</span>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Anchor href={`#${item.id}`}>{item.label}</Anchor>
                </li>
              ))}
            </ul>
          </nav>
          <div className="ds-footer-contact">
            <span className="ds-footer-label">Contact</span>
            <a
              className="ds-footer-email"
              href={site.portfolioContactUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact {site.portfolioName}
            </a>
          </div>
          <div className="ds-footer-cta">
            <span className="ds-footer-label">Start a project</span>
            <AnimatedButton href="#contact" variant="footer">
              Discuss Your Project
            </AnimatedButton>
          </div>
        </div>
        <div className="ds-footer-base">
          <p className="ds-footer-note">
            Independent fictional website concept created by{" "}
            <a href={site.portfolioUrl} target="_blank" rel="noopener noreferrer">
              {site.portfolioName}
            </a>
            . Not a trading business.
          </p>
          <span className="ds-footer-copy">© {year} Alderform Build Co. Design concept.</span>
          <Anchor href="#top" className="ds-top">
            <span>Back to top</span>
            <span className="ds-top-icon">
              <ArrowUp />
            </span>
          </Anchor>
        </div>
      </div>
    </footer>
  );
}
