
import React from 'react';
import { Linkedin, Mail, Instagram, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-200">
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter uppercase">Alex ArchiBIM</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Technical Architect & BIM Specialist</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Helping architectural practices and developers deliver complex projects with precision through advanced digital workflows and BIM management.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white rounded-full border hover:text-primary hover:border-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full border hover:text-primary hover:border-primary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:alex@example.com" className="p-2 bg-white rounded-full border hover:text-primary hover:border-primary transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Capabilities</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">BIM Coordination (LOD 100-400)</li>
              <li className="text-sm text-muted-foreground">Technical Design Development</li>
              <li className="text-sm text-muted-foreground">Clash Resolution & Audit</li>
              <li className="text-sm text-muted-foreground">Code Compliance (Part L, B, M)</li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Downloadables</h4>
            <div className="flex flex-col gap-3">
              <a href="/cv.pdf" className="flex items-center gap-2 text-xs font-bold bg-white border px-4 py-2 rounded hover:bg-slate-50 transition-colors">
                 <Download className="w-3 h-3" /> CV (PDF)
              </a>
              <a href="/portfolio.pdf" className="flex items-center gap-2 text-xs font-bold bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                 <Download className="w-3 h-3" /> Portfolio (PDF)
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Alex ArchiBIM. Based in Coventry, UK.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:underline underline-offset-4">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
