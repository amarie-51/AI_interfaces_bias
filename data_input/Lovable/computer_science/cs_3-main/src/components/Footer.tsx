import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-hero-gradient p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">CS Program</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering the next generation of computer scientists and technology leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Program</Link></li>
              <li><Link to="/faculty" className="text-muted-foreground hover:text-primary transition-colors text-sm">Faculty</Link></li>
              <li><Link to="/admissions" className="text-muted-foreground hover:text-primary transition-colors text-sm">Admissions</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">123 University Ave, Campus City, ST 12345</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">admissions@csuniversity.edu</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="bg-secondary hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-secondary hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-secondary hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-secondary hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Computer Science Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
