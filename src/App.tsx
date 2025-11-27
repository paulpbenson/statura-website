import { useState, useEffect } from 'react';
import { 
  CheckCircle, Brain, Database, Scale, Map as MapIcon, 
  ArrowRight, Shield, ChevronRight, Lock, 
  Menu, X, FileText, Server, Activity, Home, Layers, Search, Bell
} from 'lucide-react';

// --- BRAND IDENTITY ---
const COLORS = {
  primary: '#7B8C7D',      // Statura Dark
  secondary: '#96A998',    // Grasmere Green
  textMain: '#1E293B',     // Slate 900
  textLight: '#64748B',    // Slate 500
  bg: '#F8FAFC'
};

// --- SYNTHETIC SCREENSHOTS (THE "MOCKUPS") ---

const WorkspaceMockup = () => (
  <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white select-none">
    {/* Browser Header */}
    <div className="h-8 bg-slate-900 flex items-center px-4 gap-2">
      <div className="flex gap-1.5 opacity-50">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
      </div>
      <div className="ml-4 h-5 w-64 bg-slate-800 rounded text-[10px] text-slate-400 flex items-center px-2 font-mono">
        statura.app/assess/APP-2025-849
      </div>
    </div>
    
    {/* App Interface */}
    <div className="flex h-[400px]">
      {/* Sidebar (Collapsed) */}
      <div className="w-12 bg-[#7B8C7D] flex flex-col items-center py-4 gap-4 border-r border-slate-800/10">
        <div className="w-8 h-8 rounded bg-white/20"></div>
        <div className="w-6 h-0.5 bg-white/30"></div>
        <Home className="w-5 h-5 text-white/80" />
        <Layers className="w-5 h-5 text-white/80" />
        <Activity className="w-5 h-5 text-white/100" />
      </div>

      {/* Main Content Split */}
      <div className="flex-1 flex bg-slate-50">
        {/* Left: Document Viewer */}
        <div className="flex-1 p-4 border-r border-slate-200 flex flex-col">
          <div className="bg-white h-full shadow-sm border border-slate-200 rounded p-6 relative overflow-hidden">
             {/* Fake PDF Content */}
             <div className="absolute top-0 right-0 p-2">
                <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded">PDF</span>
             </div>
             <div className="w-2/3 h-4 bg-slate-800 mb-6 rounded-sm"></div>
             <div className="space-y-2 mb-8">
               <div className="w-full h-2 bg-slate-200 rounded-sm"></div>
               <div className="w-full h-2 bg-slate-200 rounded-sm"></div>
               <div className="w-5/6 h-2 bg-slate-200 rounded-sm"></div>
             </div>
             {/* Fake Diagram/Map */}
             <div className="w-full aspect-video bg-slate-100 rounded border-2 border-dashed border-slate-200 flex items-center justify-center relative">
                <MapIcon className="text-slate-300 w-12 h-12" />
                {/* GIS Layer Overlay */}
                <div className="absolute top-4 left-4 right-4 bottom-4 bg-[#96A998]/20 border border-[#96A998] rounded flex items-center justify-center">
                  <span className="bg-[#96A998] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                    Zone: GRZ1 (Detected)
                  </span>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Assessment Checklist */}
        <div className="w-72 bg-white border-l border-slate-200 p-4 flex flex-col">
          <div className="mb-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">ResCode Assessment</h4>
            <div className="h-1 w-full bg-slate-100 rounded overflow-hidden">
              <div className="h-full w-2/3 bg-[#96A998]"></div>
            </div>
          </div>

          <div className="space-y-3">
             {/* Checklist Item 1 */}
             <div className="p-3 rounded border border-green-200 bg-green-50">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-sm font-bold text-slate-700">A1 Street Setback</span>
                 <CheckCircle className="w-4 h-4 text-green-600" />
               </div>
               <div className="text-[10px] text-green-800">
                 Required: 6.0m <br/>
                 Proposed: 6.2m <br/>
                 <span className="font-bold">Status: Compliant</span>
               </div>
             </div>

             {/* Checklist Item 2 */}
             <div className="p-3 rounded border border-slate-200 bg-white">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-sm font-bold text-slate-700">A3 Site Coverage</span>
                 <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
               </div>
               <div className="text-[10px] text-slate-500">
                 Calculating impermeable surfaces...
               </div>
             </div>

             {/* Copilot Box */}
             <div className="mt-auto bg-[#1E293B] p-3 rounded text-white shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-3 h-3 text-[#96A998]" />
                  <span className="text-xs font-bold">Statura Copilot</span>
                </div>
                <p className="text-[10px] text-slate-300 leading-snug">
                  I've detected a Front Fence >1.5m. This triggers a Regulation 42 assessment.
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
    {/* Header */}
    <div className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4">
      <div className="font-serif font-bold text-slate-800">Dashboard</div>
      <div className="flex gap-2">
         <Search className="w-4 h-4 text-slate-400" />
         <Bell className="w-4 h-4 text-slate-400" />
         <div className="w-6 h-6 rounded-full bg-[#7B8C7D] text-white text-[10px] flex items-center justify-center">JP</div>
      </div>
    </div>
    
    {/* Kanban Board */}
    <div className="p-4 grid grid-cols-3 gap-3 h-full overflow-hidden">
       {/* Column 1 */}
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

       {/* Column 2 */}
       <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase">
             <span>Assessment (5)</span>
          </div>
          <div className="bg-white p-3 rounded shadow-sm border-l-4 border-[#96A998]">
             <div className="flex justify-between mb-2">
                <span className="text-[10px] bg-slate-100 px-1 rounded text-slate-600">Day 14</span>
                <Activity className="w-3 h-3 text-[#96A998]" />
             </div>
             <div className="text-xs font-bold text-slate-800 mb-1">42 Wallaby Way</div>
             <div className="text-[10px] text-slate-500">Waiting on RFI Response</div>
          </div>
          <div className="bg-white p-3 rounded shadow-sm border border-slate-200 opacity-60">
             <div className="h-3 w-2/3 bg-slate-800 rounded mb-1"></div>
             <div className="h-2 w-1/2 bg-slate-300 rounded"></div>
          </div>
       </div>

       {/* Column 3 */}
       <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase">
             <span>Decided (89)</span>
          </div>
          <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
             <div className="flex gap-1 mb-2">
               <CheckCircle className="w-3 h-3 text-green-600" />
               <span className="text-[10px] text-green-700 font-bold">Permit Granted</span>
             </div>
             <div className="h-3 w-3/4 bg-slate-800 rounded"></div>
          </div>
       </div>
    </div>
  </div>
);

// --- COMPONENTS ---

const StaturaLogo = ({ className = "h-10", onClick }: any) => (
  <svg onClick={onClick} viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} cursor-pointer`}>
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

// --- LEGAL PAGES (Privacy & Terms) ---
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

// --- MAIN APP ---

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

  // CONTENT FOR LEGAL PAGES
  const privacyContent = [
    { heading: "1. Data Collection & Usage", text: "Statura collects information necessary to provide statutory planning services. This includes applicant data, property details, and council workflows. We adhere to the Australian Privacy Principles (APPs)." },
    { heading: "2. Data Sovereignty", text: "All data is hosted within Australian jurisdiction on SOC2 Type II compliant infrastructure. We do not transfer council data offshore." },
    { heading: "3. AI & Data Privacy", text: "Customer data is strictly isolated. Inputs processed by our 'Intake Brain' are not used to train public models. Your planning data remains your intellectual property." }
  ];

  const termsContent = [
    { heading: "1. Service License", text: "Statura grants the Council a non-exclusive, non-transferable license to access the Platform for statutory planning purposes." },
    { heading: "2. Service Level Agreement (SLA)", text: "We commit to 99.9% uptime during business hours. Critical issues are responded to within 1 hour." }
  ];

  // RENDER HELPERS
  const navigate = (page: 'home' | 'privacy' | 'terms') => {
    setView(page);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B]">
      
      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <StaturaLogo className="h-10" onClick={() => navigate('home')} />
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 font-medium text-[#64748B]">
            <button onClick={() => navigate('home')} className="hover:text-[#7B8C7D] transition-colors">Platform</button>
            <button onClick={() => navigate('home')} className="hover:text-[#7B8C7D] transition-colors">Security</button>
            <button onClick={() => navigate('home')} className="hover:text-[#7B8C7D] transition-colors">Case Studies</button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://app.statura.com.au" className="text-sm font-semibold text-[#64748B] hover:text-[#1E293B]">
              Client Login
            </a>
            <Button onClick={() => window.location.href = 'mailto:sales@statura.com.au'}>Request Access</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 shadow-xl md:hidden flex flex-col gap-4">
             <button onClick={() => navigate('home')} className="text-left py-2 font-medium text-[#1E293B]">Platform</button>
             <button onClick={() => navigate('privacy')} className="text-left py-2 font-medium text-[#1E293B]">Privacy</button>
             <a href="https://app.statura.com.au" className="text-left py-2 font-medium text-[#7B8C7D]">Client Login</a>
          </div>
        )}
      </nav>

      {/* VIEW CONTROLLER */}
      {view === 'privacy' && <LegalPage title="Privacy Policy" lastUpdated="November 1, 2025" content={privacyContent} onBack={() => navigate('home')} />}
      {view === 'terms' && <LegalPage title="Terms of Service" lastUpdated="October 15, 2025" content={termsContent} onBack={() => navigate('home')} />}
      
      {view === 'home' && (
        <>
          {/* HERO SECTION */}
          <header className="relative pt-40 pb-24 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-[#1E293B] mb-8 tracking-tight">
                The Operating System for <br/>
                <span className="text-[#7B8C7D]">Statutory Planning</span>
              </h1>
              <p className="font-sans text-xl text-[#64748B] max-w-2xl mx-auto mb-10 leading-relaxed">
                Orchestrate the end-to-end planning workflow. Statura clears the backlog by combining legislative logic with intelligent process automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button icon={ArrowRight} onClick={() => window.location.href = 'mailto:sales@statura.com.au'}>Schedule Platform Demo</Button>
                <Button variant="outline" onClick={() => navigate('privacy')}>View Security Specs</Button>
              </div>
            </div>

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
               <div className="absolute -top-[10%] right-[10%] w-[500px] h-[500px] bg-[#96A998]/10 rounded-full blur-[100px]"></div>
               <div className="absolute bottom-[0%] left-[10%] w-[600px] h-[600px] bg-[#7B8C7D]/10 rounded-full blur-[100px]"></div>
            </div>
          </header>

          {/* SOCIAL PROOF */}
          <section className="border-y border-slate-200 bg-white py-10 overflow-hidden">
             <div className="max-w-7xl mx-auto px-6 text-center">
               <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-6">Engineered for Council Compliance</p>
               <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Styled text as placeholder logos */}
                 <div className="font-serif text-xl font-bold text-slate-500 flex items-center gap-2"><MapIcon className="w-5 h-5"/>Metro Council</div>
                 <div className="font-serif text-xl font-bold text-slate-500 flex items-center gap-2"><MapIcon className="w-5 h-5"/>Regional Shire</div>
                 <div className="font-serif text-xl font-bold text-slate-500 flex items-center gap-2"><MapIcon className="w-5 h-5"/>City Planning</div>
               </div>
             </div>
          </section>

          {/* FEATURE 1: WORKSPACE (With Synthetic Screenshot) */}
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#96A998]/10 text-[#7B8C7D] font-bold text-xs mb-6 uppercase tracking-wide">
                  The Planner's IDE
                </div>
                <h2 className="font-serif text-4xl text-[#1E293B] mb-6">Focus on decisions, not document management.</h2>
                <p className="text-[#64748B] text-lg mb-8">
                  The Statura Workspace integrates your document viewer, GIS layers, and assessment checklist into a single, unified view. No more dual-monitor shuffling.
                </p>
                <ul className="space-y-4">
                  {[
                    "Split-View Architecture: Assessment & Evidence side-by-side.",
                    "Dynamic RFI Drafting: One-click generation based on checklist gaps.",
                    "Live GIS Overlay: Contextual spatial data without leaving the application."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-[#96A998] flex-shrink-0" />
                      <span className="text-[#1E293B]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* SYNTHETIC SCREENSHOT */}
              <div className="relative group">
                <div className="absolute inset-0 bg-slate-200 transform translate-x-4 translate-y-4 rounded-xl -z-10"></div>
                <WorkspaceMockup />
              </div>
            </div>
          </section>

          {/* ARCHITECTURE (Three Brains) */}
          <section className="py-24 px-6 bg-[#1E293B] text-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="font-serif text-4xl mb-6">The "Three-Brains" Architecture</h2>
                <p className="text-slate-300 text-lg">
                  We solve the "Black Box" problem in Legal AI by separating rigid legislative logic from creative reasoning.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Scale className="w-10 h-10 text-[#96A998] mb-6" />
                  <h3 className="font-serif text-2xl mb-3">Legislative Brain</h3>
                  <p className="text-slate-400">Deterministic rules for numeric standards (ResCode). Zero hallucination. If the setback is 4m, Statura knows it's 4m.</p>
                </div>
                <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Database className="w-10 h-10 text-[#96A998] mb-6" />
                  <h3 className="font-serif text-2xl mb-3">Archive Brain</h3>
                  <p className="text-slate-400">Vector database retrieval of relevant VCAT precedents and past council decisions to ensure consistency.</p>
                </div>
                <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Brain className="w-10 h-10 text-[#96A998] mb-6" />
                  <h3 className="font-serif text-2xl mb-3">Intake Brain</h3>
                  <p className="text-slate-400">LLM-powered reasoning for unstructured text extraction, turning messy PDF applications into structured data.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURE 2: INTAKE & AUTOMATION */}
          <section className="py-24 px-6 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              {/* SYNTHETIC SCREENSHOT */}
              <div className="order-2 lg:order-1 relative group">
                 <div className="absolute inset-0 bg-[#96A998]/20 transform -translate-x-4 translate-y-4 rounded-xl -z-10"></div>
                 <DashboardMockup />
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] text-white font-bold text-xs mb-6 uppercase tracking-wide">
                  Intelligent Intake
                </div>
                <h2 className="font-serif text-4xl text-[#1E293B] mb-6">Stop manual data entry.</h2>
                <p className="text-[#64748B] text-lg mb-8">
                  Statura processes incoming applications instantly. Our Intake Brain reads the PDFs, extracts the key metrics, and pre-populates the assessment module before a planner even opens the file.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-[#7B8C7D] mb-1">85%</div>
                    <div className="text-sm text-[#64748B]">Reduction in Admin Time</div>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-[#7B8C7D] mb-1">0%</div>
                    <div className="text-sm text-[#64748B]">Data Hallucination on Hard Rules</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECURITY & TRUST */}
          <section className="py-20 px-6 bg-white border-t border-slate-100">
             <div className="max-w-4xl mx-auto text-center">
               <Shield className="w-12 h-12 text-[#1E293B] mx-auto mb-6" />
               <h2 className="font-serif text-3xl text-[#1E293B] mb-6">Sovereign. Secure. Compliant.</h2>
               <p className="text-[#64748B] mb-8">
                 Built on Australian-hosted infrastructure to meet the strict data sovereignty requirements of Local Government.
               </p>
               <div className="flex flex-wrap justify-center gap-4">
                 {["Data Hosted in Sydney (AWS/Supabase)", "Role-Based Access Control", "End-to-End Encryption", "Automated Audit Logs"].map((badge, i) => (
                   <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm font-medium text-slate-600">
                     {badge}
                   </span>
                 ))}
               </div>
             </div>
          </section>

          {/* CTA */}
          <section className="py-24 px-6 bg-[#7B8C7D]">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="font-serif text-4xl md:text-5xl mb-8">Ready to modernize your Planning Department?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => window.location.href = 'mailto:sales@statura.com.au'} className="bg-[#1E293B] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-900 transition-colors shadow-xl">
                  Contact Sales
                </button>
              </div>
              <p className="mt-6 text-white/70 text-sm">
                Statura is currently onboarding Victorian Councils for FY26.
              </p>
            </div>
          </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="bg-white text-slate-500 py-12 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <StaturaLogo className="h-8 mb-4" onClick={() => navigate('home')} />
            <p className="text-sm">&copy; 2025 Statura Pty Ltd. Melbourne, Victoria.</p>
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