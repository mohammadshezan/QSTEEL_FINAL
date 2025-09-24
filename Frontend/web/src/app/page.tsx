import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen bg-gray-900">
        {/* Main Hero Content with Background Image */}
        <div 
          className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/sihpic4.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        >
          {/* Overlay for better text readability */}
                    {/* Enhanced black filter overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/25 to-black/45"></div>
          
          {/* Content Container - Clean without background */}
                    {/* Content Container - Enhanced with dark styling */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-6 py-16 rounded-2xl shadow-2xl bg-gradient-to-br from-black/30 via-black/20 to-black/35 backdrop-blur-md border border-white/20">
            
            {/* Content */}
            <div className="relative z-20">
              <h1 className="hero-title text-5xl md:text-7xl font-bold tracking-tight text-white">
                QSTEEL – Smarter Steel Logistics, Powered by AI
              </h1>
              <p className="hero-description mt-6 text-xl md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed">
                From Plant to Customer — Faster, Smarter, Greener.
              </p>
              <div className="mt-10 flex justify-center gap-4 flex-wrap">
                <Link href="/customer-auth" className="railway-btn rounded-lg px-8 py-4 font-semibold text-white shadow-lg transform hover:scale-105">
                  Create Account
                </Link>
                <Link href="/dashboard" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg backdrop-blur-sm">
                  Launch Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-6">
          <FeatureCard icon="" title="AI Rake Optimizer" desc="Build optimal rakes, simulate what-if, and lock better KPIs." href="/optimizer" />
          <FeatureCard icon="" title="Live Tracking" desc="Realtime rake positions and station ETAs." href="/map" />
          <FeatureCard icon="" title="Carbon Analytics" desc="CO per ton-km, route comparisons, and sustainability reporting." href="/customer/analytics" />
          <FeatureCard icon="" title="Blockchain Ledger" desc="Tamper-evident audit trail for dispatch and yard events." href="/ledger" />
          <FeatureCard icon="" title="Multi-Plant Ops" desc="Coordinate plants, yards, and suppliers with shared visibility." href="/planner" />
        </div>
        <div className="mt-6 text-sm text-gray-400">
          <span className="mr-2">Cargo Types:</span>
          <span className="inline-flex gap-2 flex-wrap">
            {['CEMENT','ORE','STEEL','COAL'].map((c) => (
              <span key={c} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200">{c}</span>
            ))}
          </span>
        </div>
      </section>

      {/* Who It is For */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/sihpic4.jpg')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/80" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Who It is For</h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            QSTEEL serves every stakeholder in the steel logistics ecosystem with specialized tools and insights
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="module-card customers">
              <ModuleCard icon="" title="Customers" items={["Place Orders","Track & Invoices","Notifications","Support"]} href="/customer-auth" />
            </div>
            <div className="module-card managers">
              <ModuleCard icon="" title="Managers" items={["Approvals","Simulator","KPI & Reports","Optimizer"]} href="/manager/approvals" />
            </div>
            <div className="module-card yard">
              <ModuleCard icon="" title="Yard" items={["Wagon Health","Safety","Gate & Resources","Loading Analytics"]} href="/yard-actions" />
            </div>
            <div className="module-card admins">
              <ModuleCard icon="" title="Admins" items={["RBAC","Ledger","Integrations","Audit"]} href="/admin/rbac" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl font-semibold">Impact</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardStat className="kpi-card" label="Faster Dispatch" value={<><span className="text-4xl font-bold">30%</span> <span className="text-base font-medium text-gray-300 align-super"></span></>} />
          <CardStat className="kpi-card" label="Cost Savings" value={<><span className="text-4xl font-bold">20%</span> <span className="text-base font-medium text-gray-300 align-super"></span></>} />
          <CardStat className="kpi-card" label="Transparency" value={<span className="text-4xl font-bold">100%</span>} />
        </div>
      </section>

      {/* Signup/Login CTA */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-xl border border-white/10 p-6 md:p-8 bg-white/5">
          <div className="md:flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Get Started</h3>
              <p className="text-sm text-gray-400">New to QSTEEL? Sign up as a customer or sign in to manage operations.</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Link href="/customer-auth" className="rounded-lg bg-brand-green px-4 py-2 font-medium text-black hover:opacity-90">Sign Up</Link>
              <Link href="/(auth)/signin" className="rounded-lg border border-white/20 px-4 py-2 font-medium hover:bg-white/10">Sign In</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Component definitions
function CardStat({ label, value, className = "" }: { label: string; value: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-white/10 p-4 md:p-6 bg-white/5 backdrop-blur-sm ${className}`}>
      <div className="text-sm text-gray-400">{label}</div>
      <div className="mt-2 text-white">{value}</div>
    </div>
  );
}

function FeatureCard({ icon, title, desc, href }: { icon: string; title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="feature-card rounded-xl border border-white/10 p-4 bg-white/5 hover:bg-white/10 transition-all group">
      <div className="text-brand-green mb-3 text-2xl">{icon}</div>
      <h3 className="font-medium text-white group-hover:text-brand-green transition-colors">{title}</h3>
      <p className="text-sm text-gray-400 mt-1">{desc}</p>
    </Link>
  );
}

function ModuleCard({ icon, title, items, href }: { icon: string; title: string; items: string[]; href: string }) {
  return (
    <Link href={href} className="block p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group">
      <div className="text-brand-green mb-4 text-2xl">{icon}</div>
      <h3 className="font-semibold text-white mb-3 group-hover:text-brand-green transition-colors">{title}</h3>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-gray-400">{item}</li>
        ))}
      </ul>
    </Link>
  );
}