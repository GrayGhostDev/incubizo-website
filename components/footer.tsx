import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Incubizo</h3>
            <p className="text-foreground/70 mb-4">
              Helping startups and businesses grow through innovation, mentorship, and strategic partnerships.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/incubizo" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70 hover:text-primary transition-colors">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/company/incubizo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70 hover:text-primary transition-colors">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://facebook.com/incubizo" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70 hover:text-primary transition-colors">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/incubation" className="text-foreground/70 hover:text-primary transition-colors">
                  Business Incubation
                </Link>
              </li>
              <li>
                <Link href="/services/acceleration" className="text-foreground/70 hover:text-primary transition-colors">
                  Startup Acceleration
                </Link>
              </li>
              <li>
                <Link href="/services/innovation" className="text-foreground/70 hover:text-primary transition-colors">
                  Innovation Labs
                </Link>
              </li>
              <li>
                <Link href="/services/funding" className="text-foreground/70 hover:text-primary transition-colors">
                  Funding Access
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-foreground/70 hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-foreground/70 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-foreground/70">
              <p>123 Innovation Street</p>
              <p>Tech District, CA 94103</p>
              <p className="mt-2">
                <a href="mailto:info@incubizo.com" className="hover:text-primary transition-colors">
                  info@incubizo.com
                </a>
              </p>
              <p>
                <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm">
            &copy; {new Date().getFullYear()} Incubizo. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 