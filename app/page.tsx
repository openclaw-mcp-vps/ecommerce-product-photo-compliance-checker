export default function Home() {
  const faqs = [
    {
      q: "Which marketplaces are supported?",
      a: "We currently check compliance rules for Amazon and eBay, covering image size, background color, resolution, and content requirements."
    },
    {
      q: "How does the AI compliance check work?",
      a: "Upload your product photo and our OpenAI Vision-powered engine analyzes it against the latest marketplace guidelines, returning a detailed pass/fail report with fix suggestions."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest font-semibold">
          Amazon &amp; eBay Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Check Product Photos for{" "}
          <span className="text-[#58a6ff]">Marketplace Compliance</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your product images and get instant AI-powered feedback on Amazon &amp; eBay photo requirements — background, resolution, content, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Checking Photos — $11/mo
          </a>
          <a
            href="#how-it-works"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Upload Photo", desc: "Drag and drop your product image into the dashboard." },
            { step: "2", title: "AI Scans It", desc: "Our Vision AI checks every rule for your chosen marketplace." },
            { step: "3", title: "Get Fixes", desc: "Receive a clear report with actionable suggestions to fix issues." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-[#8b949e]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$11<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to stay compliant</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited photo checks",
              "Amazon & eBay rule sets",
              "AI fix suggestions",
              "Compliance history dashboard",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} PhotoCheck. All rights reserved.
      </footer>
    </main>
  );
}
