import { NavLink } from "@/components/NavLink";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CS Program</h3>
            <p className="text-primary-foreground/80">
              Empowering the next generation of computer scientists and innovators.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <NavLink to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Program
              </NavLink>
              <NavLink to="/faculty" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Faculty
              </NavLink>
              <NavLink to="/admissions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Admissions
              </NavLink>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Student Portal
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Course Catalog
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Academic Calendar
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>admissions@cs.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 University Ave</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Computer Science Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
