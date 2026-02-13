
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProofStrip from '../components/ProofStrip';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import { projects } from '../data/projects';
import { ArrowRight, MapPin, Mail, Phone, Briefcase } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <ProofStrip />

      {/* Featured Projects */}
      <section className="py-24 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Portfolio Selection
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
                Case studies in technical <br /> architectural delivery.
              </h3>
            </div>
            <Link to="/projects" className="text-sm font-bold flex items-center gap-2 group hover:text-primary transition-colors">
              View All 12+ Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Capabilities */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl font-serif font-medium leading-tight">
              A comprehensive approach to BIM & Architecture.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Recruiters and clients look for more than just 3D modeling. I focus on the information management layer, ensuring that every project is code-compliant, coordinated, and ready for construction.
            </p>
            <div className="space-y-6">
              {[
                { title: "BIM Management", desc: "Setting up CDEs, BEPs, and information requirements based on ISO 19650." },
                { title: "Technical Detailing", desc: "Delivering detailed 1:5 and 1:10 construction details for facades and interiors." },
                { title: "Clash Resolution", desc: "Expert use of Navisworks to identify and resolve thousands of inter-disciplinary conflicts." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl overflow-hidden p-8 md:p-12 text-white flex flex-col justify-between relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl -z-0"></div>
             <div className="space-y-8 relative z-10">
                <h3 className="text-2xl font-serif italic text-primary-foreground/80">"Technical precision is the foundation of architectural beauty."</h3>
                <div className="grid grid-cols-2 gap-8">
                   <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-primary-foreground/50 mb-2">Software Mastery</h4>
                      <ul className="text-sm space-y-1.5 opacity-80">
                         <li>Autodesk Revit (Advanced)</li>
                         <li>Navisworks Manage</li>
                         <li>Autodesk Construction Cloud</li>
                         <li>Dynamo / Grasshopper</li>
                      </ul>
                   </div>
                   <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-primary-foreground/50 mb-2">Core Competencies</h4>
                      <ul className="text-sm space-y-1.5 opacity-80">
                         <li>RIBA Plan of Work (Stage 3-5)</li>
                         <li>Information Management</li>
                         <li>Quantity Take-offs</li>
                         <li>Team Leadership</li>
                      </ul>
                   </div>
                </div>
             </div>
             <div className="pt-12 relative z-10">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs uppercase">AA</div>
                   <div>
                      <span className="block font-bold">Alex ArchiBIM</span>
                      <span className="text-xs opacity-60">Based in Coventry, UK</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium">Let's discuss your next <br /> technical challenge.</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              I'm currently open to senior BIM coordinator or project architect roles in the UK and remotely.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
             <div className="lg:col-span-4 space-y-8">
                <div className="flex gap-4">
                   <div className="p-3 bg-white rounded-lg border border-slate-100"><Mail className="w-5 h-5 text-primary" /></div>
                   <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</span>
                      <a href="mailto:alex@example.com" className="text-sm font-medium hover:text-primary transition-colors">alex@example.com</a>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="p-3 bg-white rounded-lg border border-slate-100"><Phone className="w-5 h-5 text-primary" /></div>
                   <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</span>
                      <a href="tel:+44700000000" className="text-sm font-medium hover:text-primary transition-colors">+44 7000 000000</a>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="p-3 bg-white rounded-lg border border-slate-100"><MapPin className="w-5 h-5 text-primary" /></div>
                   <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">Location</span>
                      <span className="text-sm font-medium">Coventry, United Kingdom</span>
                   </div>
                </div>
             </div>
             <div className="lg:col-span-8">
                <ContactForm />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
