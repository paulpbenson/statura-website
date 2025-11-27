import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, Brain, Database, Scale, Layers, FileText, Map, 
  ArrowRight, Users, ShieldCheck, X, ChevronRight, Lock, Play
} from 'lucide-react';

// --- BRAND IDENTITY SYSTEM ---
const COLORS = {
  primary: '#7B8C7D',      // Statura Dark
  secondary: '#96A998',    // Grasmere Green
  bg: '#F8FAFC',           // Ultra Light Slate
  textMain: '#1E293B',     // Slate 900
  textLight: '#64748B',    // Slate 500
  accent: '#0F172A'        // Deep Navy for contrast
};

// --- COMPONENTS ---

const StaturaLogo = ({ className = "h-10" }: { className?: string }) => (
  <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g transform="translate(50, 50)">
        <rect x="0" y="0" width="200" height="200" rx="40" fill={COLORS.secondary}/>
        <path d="M60 140 V 70 H 140 V 140" stroke="white" strokeWidth="16" strokeLinecap="square"/>
        <rect x="85" y="110" width="30" height="30" rx="4" fill="white"/>
    </g>
    <text x="290" y="190" fontFamily="'Merriweather', 'Georgia', serif" fontWeight="900" fontSize="120" fill={COLORS.textMain}>
      Statura<tspan fill={COLORS.secondary}>.</tspan>
    </text>
  </svg>
);

const Button = ({ children, variant = 'primary', icon: Icon, onClick }: any) => {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 text-lg font-sans cursor-pointer";
  const styles = {
    primary: `bg-[#1E293B] text-white hover:bg-[#7B8C7D] shadow-lg hover:shadow-xl hover:-translate-y-0.5`,
    outline: `border-2 border-[#1E293B] text-[#1E293B] hover:bg-slate-50`,
    ghost: `text-[#1E293B] hover:bg-slate-100`
  };
  
  return (
    <button onClick={onClick} className={`${base} ${styles[variant as keyof typeof styles]}`}>
      {children}
      {Icon && <Icon className="ml-2 w-5 h-5" />}
    </button>
  );
};

const Modal = ({ isOpen, onClose, title, children }: any) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-100">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-serif text-xl text-[#1E293B]">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

// --- SECTIONS ---

const FeatureCard = ({ title, desc, icon: Icon }: any) => (
  <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#96A998] transition-colors duration-300">
      <Icon className="w-6 h-6 text-[#7B8C7D] group-hover:text-white" />
    </div>
    <h3 className="font-serif text-2xl text-[#1E293B] mb-3">{title}</h3>
    <p className="text-[#64748B] font-sans leading-relaxed">{desc}</p>
  </div>
);

// --- MAIN APPLICATION ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showInvestorModal, setShowInvestorModal] = useState(false);

  // Handle Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openApp = () => window.open('https://app.statura.com.au', '_blank');

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B] selection:bg-[#96A998] selection:text-white">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <StaturaLogo className="h-10" />
          
          <div className="hidden md:flex gap-8 font-medium text-[#64748B]">
            <a href="#platform" className="hover:text-[#7B8C7D] transition-colors">Platform</a>
            <a href="#brains" className="hover:text-[#7B8C7D] transition-colors">Technology</a>
            <a href="#portal" className="hover:text-[#7B8C7D] transition-colors">For Applicants</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowInvestorModal(true)}
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#64748B] hover:text-[#1E293B]"
            >
              <Lock className="w-4 h-4" /> Investor Login
            </button>
            <Button onClick={() => setShowDemoModal(true)}>Book Demo</Button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#96A998]/10 text-[#7B8C7D] font-bold text-sm mb-8 border border-[#96A998]/20 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#96A998] animate-pulse"></span>
            V13 Gold Master Live
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-[#1E293B] mb-8 tracking-tight">
            The Operating System for <br/>
            <span className="text-[#7B8C7D]">Statutory Planning</span>
          </h1>
          
          <p className="font-sans text-xl text-[#64748B] max-w-2xl mx-auto mb-10 leading-relaxed">
            Statura moves Councils beyond simple document storage. We orchestrate the entire planning workflow with intelligent automation and zero-hallucination compliance checks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button icon={ArrowRight} onClick={openApp}>Launch Interactive Pilot</Button>
            <Button variant="outline" icon={Play} onClick={() => setShowDemoModal(true)}>Watch Video</Button>
          </div>
          
          <p className="mt-6 text-sm text-[#64748B]/60">
            Trusted by forward-thinking Councils and Investors.
          </p>
        </div>

        {/* Hero Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
           <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#96A998]/20 rounded-full blur-[120px]"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#7B8C7D]/10 rounded-full blur-[120px]"></div>
        </div>
      </header>

      {/* PRODUCT UI SHOWCASE */}
      <section id="platform" className="px-6 -mt-20 mb-24 relative z-20">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden ring-1 ring-slate-900/5">
          {/* Mock Browser Header */}
          <div className="h-10 bg-[#1E293B] flex items-center px-4 gap-2 border-b border-slate-700">
            <div className="flex gap-1.5 opacity-50">
              <div className="w-3 h-3 rounded-full bg-slate-400"></div>
              <div className="w-3 h-3 rounded-full bg-slate-400"></div>
              <div className="w-3 h-3 rounded-full bg-slate-400"></div>
            </div>
            <div className="ml-4 px-4 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono w-96 flex justify-between items-center">
              <span>app.statura.com.au/workspace/application-042</span>
              <Lock className="w-3 h-3" />
            </div>
          </div>

          {/* Abstract UI Representation */}
          <div className="grid md:grid-cols-12 h-[600px] bg-slate-50">
            {/* Left Sidebar - Navigation */}
            <div className="hidden md:block col-span-2 bg-[#7B8C7D] p-4 text-white/90">
               <div className="h-8 w-3/4 bg-white/20 rounded mb-8"></div>
               <div className="space-y-4">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="flex items-center gap-3 opacity-70">
                     <div className="w-5 h-5 bg-white/30 rounded"></div>
                     <div className="h-2 w-20 bg-white/30 rounded"></div>
                   </div>
                 ))}
               </div>
            </div>
            
            {/* Center - Document/Map Area */}
            <div className="col-span-12 md:col-span-6 p-6 border-r border-slate-200 bg-white relative">
               <div className="absolute top-6 right-6 flex gap-2">
                 <span className="px-2 py-1 bg-slate-100 text-xs font-bold text-slate-500 rounded">PDF</span>
                 <span className="px-2 py-1 bg-[#96A998] text-xs font-bold text-white rounded">GIS LAYER</span>
               </div>
               <div className="h-full border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center bg-slate-50">
                  <div className="text-center">
                    <Map className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                    <span className="text-slate-400 font-serif italic">Interactive Document & GIS Canvas</span>
                  </div>
               </div>
            </div>

            {/* Right - AI Copilot & Checklist */}
            <div className="col-span-12 md:col-span-4 p-6 bg-slate-50 flex flex-col gap-4">
               <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                 <div className="flex items-center gap-2 mb-3">
                   <Brain className="w-5 h-5 text-[#7B8C7D]" />
                   <h4 className="font-bold text-[#1E293B]">Statura Copilot</h4>
                 </div>
                 <p className="text-sm text-[#64748B] leading-relaxed">
                   Based on <span className="text-[#1E293B] font-semibold">ResCode B1</span>, the street setback is 4.5m, which complies with the neighbourhood character standard.
                 </p>
                 <div className="mt-3 flex gap-2">
                   <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">COMPLIANT</span>
                   <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded">CONFIDENCE: 99%</span>
                 </div>
               </div>

               <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex-1">
                 <h4 className="font-bold text-[#1E293B] mb-4">Assessment Checklist</h4>
                 <div className="space-y-3">
                   {['Street Setback', 'Site Coverage', 'Permeability', 'Garden Area', 'Wall Height'].map((item, i) => (
                     <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded cursor-pointer group">
                       <div className="flex items-center gap-3">
                         <div className={`w-5 h-5 rounded border flex items-center justify-center ${i < 3 ? 'bg-[#96A998] border-[#96A998] text-white' : 'border-slate-300'}`}>
                           {i < 3 && <CheckCircle className="w-3.5 h-3.5" />}
                         </div>
                         <span className="text-sm font-medium text-slate-700">{item}</span>
                       </div>
                       <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500" />
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE BRAINS ARCHITECTURE */}
      <section id="brains" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl text-[#1E293B] mb-6">The "Three-Brains" Architecture</h2>
            <p className="text-[#64748B] text-lg">
              Statura is built to solve the "Black Box" problem in Legal AI. We separate rigid legislative logic from creative reasoning to ensure 100% auditability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Legislative Brain" 
              desc="The 'Hard Logic'. Deterministic TypeScript rules handle numeric standards (ResCode, height limits). Zero hallucination. If the setback is 4m, Statura knows it's 4m."
              icon={Scale}
            />
            <FeatureCard 
              title="Archive Brain" 
              desc="The 'Memory'. A Vector database that instantly retrieves relevant VCAT precedents and past council decisions to support consistency in decision making."
              icon={Database}
            />
            <FeatureCard 
              title="Intake Brain" 
              desc="The 'Reasoning'. GPT-4o powers unstructured text extraction from PDFs and qualitative reasoning, transforming messy applications into structured data."
              icon={Brain}
            />
          </div>
        </div>
      </section>

      {/* APPLICANT PORTAL SECTION */}
      <section id="portal" className="py-24 px-6 bg-[#1E293B] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">Stop the "What's the status?" Phone Calls.</h2>
          <p className="text-slate-300 text-lg mb-12">
            The Statura Applicant Portal gives homeowners and developers a live, "Domino's Pizza Tracker" style view of their permit application.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { label: 'Received', icon: FileText, active: true },
              { label: 'Referral', icon: Users, active: true },
              { label: 'Assessment', icon: ShieldCheck, active: true, pulse: true },
              { label: 'Decision', icon: CheckCircle, active: false }
            ].map((step, i) => (
              <div key={i} className={`flex flex-col items-center gap-4 ${step.active ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center relative ${step.active ? 'bg-white/10 border-[#96A998] text-[#96A998]' : 'border-slate-600 text-slate-600'}`}>
                  <step.icon className="w-8 h-8" />
                  {step.pulse && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse border-2 border-[#1E293B]"></span>}
                </div>
                <span className="font-bold text-sm tracking-wide">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-5xl mx-auto bg-[#7B8C7D] rounded-2xl p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready to clear the backlog?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join the Councils using Statura to reduce clock days and retain happy planners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setShowDemoModal(true)} className="bg-white text-[#1E293B] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
                Book a Demo
              </button>
              <button onClick={openApp} className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                View Live Pilot
              </button>
            </div>
          </div>
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#1E293B]/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white text-slate-500 py-16 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <StaturaLogo className="h-8 mb-4 opacity-100" />
            <p className="text-sm">
              &copy; 2025 Statura Pty Ltd. <br/>
              Melbourne, Victoria.
            </p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-[#1E293B]">
            <a href="#" className="hover:text-[#7B8C7D]">Privacy Policy</a>
            <a href="#" className="hover:text-[#7B8C7D]">Terms of Service</a>
            <a href="mailto:hello@statura.com.au" className="hover:text-[#7B8C7D]">Contact</a>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      
      {/* Demo Booking Modal */}
      <Modal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)}
        title="Schedule a Statura Demo"
      >
        <div className="space-y-4">
          <p className="text-slate-600 mb-4">Leave your details and our team will coordinate a walkthrough of the V13 Gold Master environment.</p>
          <input type="text" placeholder="Full Name" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7B8C7D] outline-none" />
          <input type="email" placeholder="Council / Organization Email" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7B8C7D] outline-none" />
          <button className="w-full bg-[#1E293B] text-white py-3 rounded-lg font-bold hover:bg-[#7B8C7D] transition-colors">
            Request Invite
          </button>
          <p className="text-xs text-slate-400 text-center mt-2">We typically respond within 2 hours.</p>
        </div>
      </Modal>

      {/* Investor Login Modal */}
      <Modal 
        isOpen={showInvestorModal} 
        onClose={() => setShowInvestorModal(false)}
        title="Investor Access"
      >
        <div className="space-y-4">
          <div className="bg-amber-50 text-amber-800 p-3 rounded-md text-sm mb-4 border border-amber-200">
             <strong>Note:</strong> Data Room access is restricted to authorized partners.
          </div>
          <input type="email" placeholder="Email Address" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7B8C7D] outline-none" />
          <input type="password" placeholder="Access Code" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7B8C7D] outline-none" />
          <button className="w-full bg-[#1E293B] text-white py-3 rounded-lg font-bold hover:bg-[#7B8C7D] transition-colors">
            Enter Data Room
          </button>
        </div>
      </Modal>

    </div>
  );
}