import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="footer-brand" aria-label="EHM Technology Services home">
            <span className="footer-logo-wrap">
              <Image
                src="/images/ehm-logo.png"
                alt="EHM Technology Services logo"
                fill
                className="brand-logo"
                sizes="120px"
              />
            </span>
            <span className="footer-brand-text">EHM Technology Services</span>
          </Link>
          <p className="footer-copy">
            Engineering, Estimation, and IT solutions delivered with a practical approach.
          </p>
        </div>

        <div>
          <p className="footer-heading">Quick Links</p>
          <div className="footer-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-heading">Contact</p>
          <p className="footer-contact">info@ehmtechservices.com</p>
          <p className="footer-contact">+92 322 628 3848</p>
          <p className="footer-contact">Remote-first services worldwide</p>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} EHM Technology Services. All rights reserved.</div>
    </footer>
  );
}
