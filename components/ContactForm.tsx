
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset form or state after some time if needed
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 p-8 rounded-xl border border-green-100 text-center animate-in fade-in zoom-in duration-300">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700">Thank you for reaching out. I'll get back to you within 24-48 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-bold text-green-900 underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
          <input 
            required
            type="text" 
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
          <input 
            required
            type="email" 
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
        <select className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white">
          <option>Project Inquiry</option>
          <option>Job Opportunity</option>
          <option>BIM Consultancy</option>
          <option>Other</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
        <textarea 
          required
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        ></textarea>
      </div>
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full bg-primary text-primary-foreground py-4 rounded font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
      >
        {status === 'loading' ? 'Sending...' : (
          <>Send Message <Send className="w-4 h-4" /></>
        )}
      </button>
      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
