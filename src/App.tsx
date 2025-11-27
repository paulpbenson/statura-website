import { useState, useEffect } from 'react';
import { 
  CheckCircle, Brain, Database, Scale, Map as MapIcon, 
  ArrowRight, Shield, ChevronRight, ChevronDown,
  Menu, X, Activity, Home, Layers, Search, Bell,
  Zap, Lock, Cpu, FileCheck
} from 'lucide-react';

// --- BRAND IDENTITY ---
const COLORS = {
  secondary: '#96A998',    // Grasmere Green
  textMain: '#1E293B',     // Slate 900
};

// --- FLUSH-LEFT LOGO ---
const StaturaLogo = ({ className = "h-10", onClick }: any) => (
  <svg onClick={onClick} viewBox="0 0 600 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} cursor-pointer`}>
    <rect x="0" y="15" width="120" height="120" rx="24" fill={COLORS.secondary}/>
    <path d="M36 100 V 58 H 84 V 100" stroke="white" strokeWidth="10" strokeLinecap="square"/>
    <rect x="52" y="82" width="18" height="18" rx="2" fill="white"/>
    <text x="150" y="110" fontFamily="'Merriweather', 'Georgia', serif" fontWeight="900" fontSize="80" fill={COLORS.textMain}>
      Statura<tspan fill={COLORS.secondary}>.</tspan>
    </text>
  </svg>
);

// --- RESPONSIVE SYNTHETIC SCREENSHOTS ---

const WorkspaceMockup = () => (
  <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white select-none">
    {/* Header */}
    <div className="h-8 bg-slate-900 flex items-center px-4 gap-2">
      <div className="flex gap-1.5 opacity-50">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
      </div>
      <div className="ml-4 h-5 w-48 md:w-64 bg-slate-800 rounded text-[10px] text-slate-400 flex items-center px-2 font-mono truncate">
        statura.app/assess/DA-2025-849
      </div>
    </div>
    
    {/* Responsive App Interface (Stack on mobile, Row on desktop) */}
    <div className="flex flex-col md:flex-row h-auto md:h-[400px]">
      {/* Sidebar (Hidden on mobile to save space) */}
      <div className="hidden md:flex w-12 bg-[#7B8C7D] flex-col items-center py-4 gap-4 border-r border-slate-800/10">
        <div className="w-8 h-8 rounded bg-white/20"></div>
        <div className="w-6 h-0.5 bg-white/30"></div>
        <Home className="w-5 h-5 text-white/80" />
        <Layers className="w-5 h-5 text-white/80" />
        <Activity className="w-5 h-5 text-white/100" />
      </div>

      <div className="flex-1 flex flex-col md:flex-row bg-slate-50">
        {/* Left: Document */}
        <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col">
          <div className="bg-white h-64 md:h-full shadow-sm border border-slate-200 rounded p-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2">
                <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded">PDF</span>
             </div>
             <div className="w-2/3 h-4 bg-slate-800 mb-6 rounded-sm"></div>
             <div className="space-y-2 mb-8">
               <div className="w-full h-2 bg-slate-200 rounded-sm"></div>
               <div className="w-full h-2 bg-slate-200 rounded-sm"></div>
               <div className="w-5/6 h-2 bg-slate-200 rounded-sm"></div>
             </div>
             <div className="w-full aspect-video bg-slate-100 rounded border-2 border-dashed border-slate-200 flex items-center justify-center relative">
                <MapIcon className="text-slate-300 w-12 h-12" />
                <div className="absolute top-4 left-4 right-4 bottom-4 bg-[#96A998]/20 border border-[#96A998] rounded flex items-center justify-center">
                  <span className="bg-[#96A998] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm text-center">
                    Zone: Residential
                  </span>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Checklist */}
        <div className="w-full md:w-72 bg-white md:border-l border-slate-200 p-4 flex flex-col h-auto md:h-full">
          <div className="mb-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Planning Controls</h4>
            <div className="h-1 w-full bg-slate-100 rounded overflow-hidden">
              <div className="h-full w-2/3 bg-[#96A998]"></div>
            </div>
          </div>

          <div className="space-y-3">
             <div className="p-3 rounded border border-green-200 bg-green-50">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-sm font-bold text-slate-700">Street Setback</span>
                 <CheckCircle className="w-4 h-4 text-green-600" />
               </div>
               <div className="text-[10px] text-green-800">
                 Control: 6.0m <br/>
                 Proposed: 6.2m <br/>
                 <span className="font-bold">Status: Compliant</span>
               </div>
             </div>

             <div className="p-3 rounded border border-slate-200 bg-white">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-sm font-bold text-slate-700">Site Coverage</span>
                 <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
               </div>
               <div className="text-[10px] text-slate-500">
                 Calculating...
               </div>
             </div>

             <div className="mt-4 md:mt-auto bg-[#1E293B] p-3 rounded text-white shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-3 h-3 text-[#96A998]" />
                  <span className="text-xs font-bold">Statura Copilot</span>
                </div>
                <p className="text-[10px] text-slate-300 leading-snug">
                  Front Fence height &gt;1.5m. This triggers a heritage variation assessment.
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DashboardMockup = () => (
  <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-[#F1F5F9] select-none h-full min-h-[300px] flex flex-col">
    <div className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4">
      <div className="font-serif font-bold text-slate-800">Dashboard</div>
      <div className="flex gap-2">
         <Search className="w-4 h-4 text-slate-400" />
         <Bell className="w-4 h-4 text-slate-400" />
         <div className="w-6 h-6 rounded-full bg-[#7B8C7D] text-white text-[10px] flex items-center justify-center">JP</div>
      </div>
    </div>
    
    {/* Stack columns on mobile (grid-cols-1) */}
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-3 h-full overflow-y-auto">
       <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase">
             <span>Received (12)</span>
          </div>
          {[1,2].map(i => (
             <div key={i} className="bg-white p-3 rounded shadow-sm border border-slate-200">
                <div className="h-2 w-16 bg-blue-100 rounded mb-2"></div>
                <div className="h-3 w-3/4 bg-slate-800 rounded mb-1"></div>
                <div className="h-2 w-1/2 bg-slate-300 rounded"></div>
             </div>
          ))}
       </div>

       <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase">
             <span>Assessment (5)</span>
          </div>
          <div className="bg-white p-3 rounded shadow-sm border-l-4 border-[#96A998]">
             <div className="flex justify-between mb-2">
                <span className="text-[10px] bg-slate-100 px-1 rounded text-slate-600">Day 14</span>
                <Activity className="w-3 h-3 text-[#96A998]" />
             </div>
             <div className="text-xs font-bold text-slate-800 mb-1">108 High Street</div>
             <div className="text-[10px] text-slate-500">Waiting on RFI Response</div>
          </div>
          <div className="bg-white p-3 rounded shadow-sm border border-slate-200 opacity-60">
             <div className="h-3 w-2/3 bg-slate-800 rounded mb-1"></div>
             <div className="h-2 w-1/2 bg-slate-300 rounded"></div>
          </div>
       </div>

       <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase">
             <span>Decided (89)</span>
          </div>
          <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
             <div className="flex gap-1 mb-2">
               <CheckCircle className="w-3 h-3 text-green-600" />
               <span className="text-[10px] text-green-700 font-bold">Approved</span>
             </div>
             <div className="h-3 w-3/4 bg-slate-800 rounded"></div>
          </div>
       </div>
    </div>
  </div>
);

// --- UI COMPONENTS ---

const Button = ({ children, variant = 'primary', icon: Icon, onClick, className = '' }: any) => {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 text-lg font-sans cursor-pointer";
  const styles = {
    primary: `bg-[#1E293B] text-white hover:bg-[#7B8C7D] shadow-lg hover:shadow-xl hover:-translate-y-0.5`,
    outline: `border-2 border-[#1E293B] text-[#1E293B] hover:bg-slate-50`,
    ghost: `text-[#1E293B] hover:bg-slate-100`
  };
  return (
    <button onClick={onClick} className={`${base} ${styles[variant as keyof typeof styles]} ${className}`}>
      {children}
      {Icon && <Icon className="ml-2 w-5 h-5" />}
    </button>
  );
};

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none hover:bg-slate-50/50 transition-colors px-2 -mx-2 rounded-lg"
      >
        <span className="text-lg font-serif text-[#1E293B] font-medium pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#64748B] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 pb-6' : 'max-h-0'}`}>
        <p className="text-[#64748B] leading-relaxed px-2 text-sm md:text-base">{answer}</p>
      </div>
    </div>
  );
}

const LegalPage = ({ title, lastUpdated, content, onBack }: any) => (
  <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen animate-fade-in-up">
    <button onClick={onBack} className="flex items-center text-[#7B8C7D] mb-8 hover:underline font-medium">
      <ChevronRight className="rotate-180 w-4 h-4 mr-1" /> Back to Home
    </button>
    <h1 className="font-serif text-4xl text-[#1E293B] mb-2">{title}</h1>
    <p className="text-[#64748B] mb-12 border-b border-slate-200 pb-8">Last Updated: {lastUpdated}</p>
    <div className="prose prose-slate max-w-none">
      {content.map((section: any, i: number) => (
        <div key={i} className="mb-10">
          <h3 className="text-xl font-bold text-[#1E293B] mb-3">{section.heading}</h3>
          <p className="text-[#64748B] leading-relaxed whitespace-pre-line">{section.text}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- MAIN APPLICATION ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [view, setView] = useState<'home' | 'privacy' | 'terms'>('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const scrollToSection = (id: string) => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navigate = (page: 'home' | 'privacy' | 'terms') => {
    setView(page);
    setMobileMenuOpen(false);
  };

  const privacyContent = [
    { heading: "1. Data Collection & Usage", text: "Statura collects information necessary to provide statutory planning services. This includes applicant data, property details, and council workflows. We adhere to the Australian Privacy Principles (APPs)." },
    { heading: "2. Data Sovereignty", text: "All data is hosted within Australian jurisdiction on SOC2 Type II compliant infrastructure (AWS Sydney Region). We do not transfer council data offshore." },
    { heading: "3. AI & Data Privacy", text: "Customer data is strictly isolated. Inputs processed by our 'Intake Brain' are not used to train public models. Your planning data remains your intellectual property." }
  ];

  const termsContent = [
    { heading: "1. Service License", text: "Statura grants the Council a non-exclusive, non-transferable license to access the Platform for statutory planning purposes." },
    { heading: "2. Service Level Agreement (SLA)", text: "We commit to 99.9% uptime during business hours. Critical issues are responded to within 1 hour." }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B] overflow-x-hidden">
      
      {/* NAVIGATION BAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white shadow-sm py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-12 items-center">
          
          {/* Logo */}
          <div className="col-span-1 md:col-span-3 flex justify-start">
            <StaturaLogo className="h-8 md:h-12 w-auto" onClick={() => navigate('home')} />
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex md:col-span-6 justify-center gap-10 font-medium text-[#64748B]">
            <button onClick={() => scrollToSection('features')} className="hover:text-[#7B8C7D] transition-colors relative group">
              Platform
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B8C7D] transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('impact')} className="hover:text-[#7B8C7D] transition-colors relative group">
              Impact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B8C7D] transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('security')} className="hover:text-[#7B8C7D] transition-colors relative group">
              Security
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B8C7D] transition-all group-hover:w-full"></span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex md:col-span-3 justify-end items-center gap-6">
            <a href="https://app.statura.com.au" className="text-sm font-semibold text-[#64748B] hover:text-[#1E293B] transition-colors">
              Client Login
            </a>
            <Button onClick={() => window.location.href = 'mailto:sales@statura.com.au'} className="px-5 py-2.5 text-base">Request Access</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="col-span-1 md:hidden flex justify-end">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X className="text-[#1E293B]" /> : <Menu className="text-[#1E293B]" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 shadow-xl md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
             <button onClick={() => scrollToSection('features')} className="text-left py-3 font-medium text-[#1E293B] border-b border-slate-100">Platform</button>
             <button onClick={() => scrollToSection('impact')} className="text-left py-3 font-medium text-[#1E293B] border-b border-slate-100">Impact</button>
             <button onClick={() => navigate('privacy')} className="text-left py-3 font-medium text-[#1E293B] border-b border-slate-100">Privacy</button>
             <a href="https://app.statura.com.au" className="text-left py-3 font-medium text-[#7B8C7D]">Client Login</a>
          </div>
        )}
      </nav>

      {/* VIEW CONTROLLER */}
      {view === 'privacy' && <LegalPage title="Privacy Policy" lastUpdated="November 1, 2025" content={privacyContent} onBack={() => navigate('home')} />}
      {view === 'terms' && <LegalPage title="Terms of Service" lastUpdated="October 15, 2025" content={termsContent} onBack={() => navigate('home')} />}
      
      {view === 'home' && (
        <>
          {/* HERO SECTION */}
          <header className="relative pt-32 md:pt-48 pb-16 md:pb-24 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h1 className="font-serif text-4xl md:text-7xl leading-[1.1] text-[#1E293B] mb-6 md:mb-8 tracking-tight">
                The Operating System for <br/>
                <span className="text-[#7B8C7D]">Statutory Planning</span>
              </h1>
              <p className="font-sans text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
                Orchestrate the end-to-end planning workflow. Statura clears the backlog by combining legislative logic with intelligent process automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button icon={ArrowRight} onClick={() => window.location.href = 'mailto:sales@statura.com.au'} className="w-full sm:w-auto">Schedule Platform Demo</Button>
                <Button variant="outline" onClick={() => scrollToSection('security')} className="w-full sm:w-auto">View Security Specs</Button>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
               <div className="absolute -top-[10%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#96A998]/10 rounded-full blur-[80px] md:blur-[100px]"></div>
               <div className="absolute bottom-[0%] left-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#7B8C7D]/10 rounded-full blur-[80px] md:blur-[100px]"></div>
            </div>
          </header>

          {/* ECOSYSTEM FIT */}
          <section className="border-y border-slate-200 bg-white py-12 md:py-14 overflow-hidden">
             <div className="max-w-7xl mx-auto px-6 text-center">
               <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-8 md:mb-10">Built for the Australian & NZ Planning Systems</p>
               <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-x-16 opacity-60">
                 <span className="font-serif text-lg md:text-xl font-bold text-slate-400">Legislative Compliance</span>
                 <span className="font-serif text-lg md:text-xl font-bold text-slate-400">Compatible with Pathway</span>
                 <span className="font-serif text-lg md:text-xl font-bold text-slate-400">TechnologyOne Ready</span>
                 <span className="font-serif text-lg md:text-xl font-bold text-slate-400">Objective Trapeze</span>
               </div>
             </div>
          </section>

          {/* FEATURE 1: WORKSPACE */}
          <section id="features" className="py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#96A998]/10 text-[#7B8C7D] font-bold text-xs mb-6 uppercase tracking-wide">
                  The Planner's IDE
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1E293B] mb-6">Focus on decisions, not document management.</h2>
                <p className="text-[#64748B] text-base md:text-lg mb-8 leading-relaxed">
                  The Statura Workspace integrates your document viewer, GIS layers, and assessment checklist into a single, unified view. No more dual-monitor shuffling.
                </p>
                <ul className="space-y-4">
                  {[
                    "Split-View Architecture: Assessment & Evidence side-by-side.",
                    "Dynamic RFI Drafting: One-click generation based on checklist gaps.",
                    "Live GIS Overlay: Contextual spatial data without leaving the application."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle className="w-6 h-6 text-[#96A998] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1E293B] text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-slate-200 transform translate-x-2 md:translate-x-4 translate-y-2 md:translate-y-4 rounded-xl -z-10 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <WorkspaceMockup />
              </div>
            </div>
          </section>

          {/* IMPACT */}
          <section id="impact" className="py-16 md:py-24 px-6 bg-[#1E293B] text-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="font-serif text-3xl md:text-4xl mb-6">Built for Efficiency. <br/>Engineered for Compliance.</h2>
                   <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                     Statura is a capacity multiplier. By automating routine numeric and compliance checks, we empower Councils to clear the backlog and focus senior planners on high-value assessments.
                   </p>
                   <Button variant="outline" className="text-white border-white hover:bg-white/10 w-full md:w-auto" onClick={() => window.location.href = 'mailto:sales@statura.com.au'}>
                     Request Capability Statement
                   </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <Cpu className="w-8 h-8 text-[#96A998] mb-4" />
                      <div className="text-xl font-bold mb-2">Automated Intake</div>
                      <div className="text-sm text-slate-400">Pre-screens applications for missing documents before assignment.</div>
                   </div>
                   <div className="bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <Zap className="w-8 h-8 text-[#96A998] mb-4" />
                      <div className="text-xl font-bold mb-2">Instant Drafting</div>
                      <div className="text-sm text-slate-400">Generates RFIs and Officer Reports based on checklist status.</div>
                   </div>
                   <div className="bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 backdrop-blur-sm col-span-1 sm:col-span-2 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-6 h-6 text-[#96A998]" />
                        <span className="text-xl font-bold">Zero Hallucinations</span>
                      </div>
                      <div className="text-sm text-slate-400">Our Legislative Brain uses deterministic rules, not generative probability, for compliance checks.</div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* THREE BRAINS */}
          <section className="py-16 md:py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl text-[#1E293B] mb-6">The "Three-Brains" Architecture</h2>
                <p className="text-[#64748B] text-lg">
                  We solve the "Black Box" problem in Legal AI by separating rigid legislative logic from creative reasoning.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 rounded-xl border border-slate-200 bg-slate-50 hover:shadow-lg transition-all hover:-translate-y-1">
                  <Scale className="w-10 h-10 text-[#96A998] mb-6" />
                  <h3 className="font-serif text-2xl text-[#1E293B] mb-3">Legislative Brain</h3>
                  <p className="text-[#64748B] leading-relaxed">Deterministic rules for numeric standards (e.g. Setbacks, Height). Zero hallucination. If the control is 4m, Statura knows it's 4m.</p>
                </div>
                <div className="p-8 rounded-xl border border-slate-200 bg-slate-50 hover:shadow-lg transition-all hover:-translate-y-1">
                  <Database className="w-10 h-10 text-[#96A998] mb-6" />
                  <h3 className="font-serif text-2xl text-[#1E293B] mb-3">Archive Brain</h3>
                  <p className="text-[#64748B] leading-relaxed">Vector database retrieval of relevant Tribunal/Court precedents and past council decisions to ensure consistency.</p>
                </div>
                <div className="p-8 rounded-xl border border-slate-200 bg-slate-50 hover:shadow-lg transition-all hover:-translate-y-1">
                  <Brain className="w-10 h-10 text-[#96A998] mb-6" />
                  <h3 className="font-serif text-2xl text-[#1E293B] mb-3">Intake Brain</h3>
                  <p className="text-[#64748B] leading-relaxed">LLM-powered reasoning for unstructured text extraction, turning messy PDF applications into structured data.</p>
                </div>
              </div>
            </div>
          </section>

          {/* INTAKE / DASHBOARD */}
          <section className="py-16 md:py-24 px-6 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 lg:order-1 relative group h-full">
                 <div className="absolute inset-0 bg-[#96A998]/20 transform -translate-x-2 md:-translate-x-4 translate-y-2 md:translate-y-4 rounded-xl -z-10 transition-transform group-hover:-translate-x-3 group-hover:translate-y-3"></div>
                 <DashboardMockup />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] text-white font-bold text-xs mb-6 uppercase tracking-wide">
                  Intelligent Intake
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1E293B] mb-6">Stop manual data entry.</h2>
                <p className="text-[#64748B] text-base md:text-lg mb-8 leading-relaxed">
                  Statura processes incoming applications instantly. Our Intake Brain reads the PDFs, extracts the key metrics, and pre-populates the assessment module before a planner even opens the file.
                </p>
                <div className="p-6 bg-white border-l-4 border-[#7B8C7D] shadow-sm">
                   <div className="flex items-start gap-4">
                     <FileCheck className="w-8 h-8 text-[#7B8C7D] flex-shrink-0" />
                     <div>
                       <h4 className="font-bold text-[#1E293B] mb-1">Audit-Ready Logic</h4>
                       <p className="text-sm text-[#64748B]">Every decision point is logged with the specific clause, standard, or precedent used to generate the recommendation.</p>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECURITY & FAQ */}
          <section id="security" className="py-16 md:py-24 px-6 bg-white border-t border-slate-100">
             <div className="max-w-4xl mx-auto">
               <div className="text-center mb-16">
                 <Shield className="w-12 h-12 text-[#1E293B] mx-auto mb-6" />
                 <h2 className="font-serif text-3xl md:text-3xl text-[#1E293B] mb-6">Sovereign. Secure. Compliant.</h2>
                 <p className="text-[#64748B] mb-8">
                   Built on Australian-hosted infrastructure to meet the strict data sovereignty requirements of Local Government.
                 </p>
                 <div className="flex flex-wrap justify-center gap-4 mb-12">
                   {["Data Hosted in Sydney (AWS)", "Role-Based Access Control", "End-to-End Encryption", "Automated Audit Logs"].map((badge, i) => (
                     <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm font-medium text-slate-600 flex items-center gap-2">
                       <Lock className="w-3 h-3"/> {badge}
                     </span>
                   ))}
                 </div>
               </div>
               
               <div className="max-w-2xl mx-auto border-t border-slate-200">
                 <FAQItem question="Does Statura replace our existing e-Planning portal?" answer="No. Statura acts as an orchestration layer. We are designed to integrate with your existing systems (Pathway, TechnologyOne, Trapeze) to enhance workflow without requiring a 'rip and replace' of core databases." />
                 <FAQItem question="Where is the data stored?" answer="All data is processed and stored within the AWS Sydney Region, ensuring full compliance with Australian Data Sovereignty laws." />
                 <FAQItem question="How long does implementation take?" answer="Our platform can be deployed for pilot testing in as little as 4 weeks. Full integration timelines vary based on your specific IT environment." />
               </div>
             </div>
          </section>

          {/* CTA */}
          <section className="py-24 px-6 bg-[#7B8C7D]">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="font-serif text-3xl md:text-5xl mb-8">Ready to modernize your Planning Department?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => window.location.href = 'mailto:sales@statura.com.au'} className="bg-[#1E293B] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-900 transition-colors shadow-xl">
                  Contact Sales
                </button>
              </div>
              <p className="mt-6 text-white/70 text-sm">
                Expressions of Interest now open for ANZ Pilot Programs (FY26).
              </p>
            </div>
          </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="bg-white text-slate-500 py-12 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <StaturaLogo className="h-8 w-auto mb-4 mx-auto md:mx-0" onClick={() => navigate('home')} />
            <p className="text-sm flex items-center justify-center md:justify-start gap-2">
               &copy; 2025 Statura Pty Ltd. <br/>
               Melbourne, Australia.
            </p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-[#1E293B]">
            <button onClick={() => navigate('privacy')} className="hover:text-[#7B8C7D]">Privacy Policy</button>
            <button onClick={() => navigate('terms')} className="hover:text-[#7B8C7D]">Terms of Service</button>
            <a href="mailto:hello@statura.com.au" className="hover:text-[#7B8C7D]">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}