import { NavLink } from "@/components/NavLink";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Program" },
    { to: "/faculty", label: "Faculty" },
    { to: "/admissions", label: "Admissions" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">BSN Program</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Preparing the next generation of compassionate, skilled nurses through excellence in education and clinical practice.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>123 University Ave, City, State 12345</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>admissions@bsnprogram.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Stay updated with the latest news and events from our nursing program.
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bachelor of Science in Nursing Program. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
