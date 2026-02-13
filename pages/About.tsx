
import React from 'react';
import { Mail, Linkedin, MapPin, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-24 px-4 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Profile Image & Contact */}
        <div className="lg:col-span-4 space-y-8">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative group">
            <img src="https://picsum.photos/seed/portrait/800/1000" alt="Professional Portrait" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 border-[16px] border-white/20"></div>
          </div>
          <div className="space-y-4 bg-slate-50 p-8 rounded-2xl">
            <h3 className="font-serif text-xl">Connect with me</h3>
            <div className="space-y-4">
              <a href="mailto:alex@example.com" className="flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-colors">
                <div className="p-2 bg-white rounded-lg border border-slate-200"><Mail className="w-4 h-4" /></div>
                alex@example.com
              </a>
              <a href="#" className="flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-colors">
                <div className="p-2 bg-white rounded-lg border border-slate-200"><Linkedin className="w-4 h-4" /></div>
                LinkedIn Profile
              </a>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="p-2 bg-white rounded-lg border border-slate-200"><MapPin className="w-4 h-4" /></div>
                Coventry, UK (Ready to Travel)
              </div>
            </div>
            <div className="pt-6 border-t border-slate-200">
               <a href="/cv.pdf" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded font-bold text-sm">
                  Download Full CV
               </a>
            </div>
          </div>
        </div>

        {/* Biography & Skills */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-medium">Technical Architect with a passion for digital delivery.</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              I bridge the gap between architectural vision and technical reality. With over 7 years of international experience, I have developed a specialized skill set in BIM management and large-scale architectural coordination.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Currently based in the UK, I bring deep expertise in ISO 19650 standards, Autodesk ecosystems, and multi-disciplinary team leadership. My approach is data-driven, focusing on how high-quality information management can drive sustainability and reduce project risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                   <Award className="w-4 h-4" /> Core Expertise
                </h3>
                <ul className="space-y-3">
                   {[
                     "BIM Management & Information Management",
                     "Technical Design Development (RIBA Stages 3-5)",
                     "Facade Engineering & Technical Detailing",
                     "Planning Applications & Building Regs Compliance",
                     "Multi-disciplinary Clash Detection & Resolution",
                     "Team Mentorship & Software Training"
                   ].map(skill => (
                     <li key={skill} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {skill}
                     </li>
                   ))}
                </ul>
             </div>
             <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                   <Award className="w-4 h-4" /> Professional Certifications
                </h3>
                <div className="space-y-4">
                   <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                      <span className="block text-xs font-bold text-slate-800">BRE BIM ISO 19650 Certification</span>
                      <span className="text-[10px] text-muted-foreground uppercase">Information Management</span>
                   </div>
                   <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                      <span className="block text-xs font-bold text-slate-800">Autodesk Certified Professional</span>
                      <span className="text-[10px] text-muted-foreground uppercase">Revit for Architecture</span>
                   </div>
                   <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                      <span className="block text-xs font-bold text-slate-800">RIBA Member (International)</span>
                      <span className="text-[10px] text-muted-foreground uppercase">Architectural Excellence</span>
                   </div>
                </div>
             </div>
          </div>

          <div className="space-y-8 pt-12 border-t border-slate-100">
             <h3 className="text-2xl font-serif">Selected Client Experience</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-50">
                <div className="h-12 flex items-center justify-center font-bold text-slate-400 border border-dashed border-slate-200 rounded">EMAAR</div>
                <div className="h-12 flex items-center justify-center font-bold text-slate-400 border border-dashed border-slate-200 rounded">ASHGHAL</div>
                <div className="h-12 flex items-center justify-center font-bold text-slate-400 border border-dashed border-slate-200 rounded">RCRC</div>
                <div className="h-12 flex items-center justify-center font-bold text-slate-400 border border-dashed border-slate-200 rounded">ATKINS</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
