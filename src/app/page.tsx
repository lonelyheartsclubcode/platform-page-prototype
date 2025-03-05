import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The Amigo Platform: Where AI Meets Enterprise Excellence
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Empowering enterprises with next-generation AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Core: Intelligent AI Frontline
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              At the heart of Amigo lies Core—a fully integrated suite that drives your AI front office.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Agent',
                description: 'Your intelligent, context-aware representative—whether managing client engagement, legal advisory, or specialized expert roles.'
              },
              {
                title: 'Context Graph',
                description: 'A dynamic blueprint mapping out flows and decision points for consistent, reliable interactions.'
              },
              {
                title: 'Memory',
                description: 'A robust system capturing past interactions to enrich every new conversation.'
              },
              {
                title: 'Knowledge',
                description: 'A deep repository that powers accurate and insightful responses.'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-600">
            Core is the engine that drives real-world, client-facing AI interactions—ensuring your solution not only meets but exceeds expectations.
          </p>
        </div>
      </section>

      {/* Test Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Test: The Observability Layer
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Gain complete visibility into your AI's performance with Test.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Scorecards & Metrics',
                description: 'Real-time KPIs that measure success and highlight improvement opportunities.'
              },
              {
                title: 'Persona Simulations',
                description: 'Run thousands of simulated conversations before deployment—stress-testing agent behaviors to ensure they align with your objectives.'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-600">
            Test empowers you to monitor, optimize, and drive continuous improvement across every interaction.
          </p>
        </div>
      </section>

      {/* Model Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Model: The Optimization Engine
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stay ahead with Model—our engine for relentless innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Reinforcement Learning & Finetuning',
                description: 'Systematic, data-driven cycles that progressively elevate your AI agents from baseline performance to superhuman levels.'
              },
              {
                title: 'Cost Optimization',
                description: 'Strategic model tuning that drives efficiency and reduces operational expenses.'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-600">
            Model ensures your solution remains at the bleeding edge of AI, continuously adapting and scaling to meet your enterprise needs.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience the full spectrum of AI innovation.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Transform how your enterprise engages with intelligent, adaptive AI solutions.
          </p>
          <div className="mt-10">
            <Link
              href="#"
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started Today →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
