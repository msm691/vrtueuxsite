import { Check, Sparkles } from 'lucide-react';

export function Pricing() {
  const vrPricing = [
    {
      name: 'Tapis Omnidirectionnel',
      duration: '30 min',
      price: '24€',
      highlight: true,
      features: ['Unique en France', 'Expérience immersive totale', 'Déplacement naturel']
    },
    {
      name: 'SimRacing VR',
      duration: '30 min',
      price: '15€',
      features: ['Simulateur de pointe', 'Retour de force réaliste', 'Courses en VR']
    },
    {
      name: 'CVR Autonome',
      duration: '30 min',
      price: '12€',
      features: ['Large catalogue de jeux', 'Sans fil', 'Graphismes immersifs']
    }
  ];

  const packs = [
    {
      name: 'Pack Découverte',
      duration: '1h',
      price: '49€',
      features: ['Idéal pour débuter', 'Testez plusieurs expériences', 'Conseils personnalisés']
    },
    {
      name: 'Pass 10 Sessions',
      duration: '10 x 30 min',
      price: '130€',
      popular: true,
      features: ['Économisez 20€', 'Valable 6 mois', 'Partage possible']
    }
  ];

  const arcadePricing = [
    {
      name: '5 Parties',
      price: '12,50€',
      features: ['Bornes arcade rétro', 'Jeux classiques']
    },
    {
      name: '12 Parties',
      price: '29,95€',
      features: ['Meilleur rapport qualité/prix', 'Économisez 5€']
    },
    {
      name: '20 Parties',
      price: '49,90€',
      features: ['Offre famille', 'Économisez 12,50€']
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Nos <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tarifs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des formules adaptées à tous vos besoins, que vous soyez débutant ou expert.
          </p>
        </div>

        {/* VR Individual */}
        <div className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center">Expériences VR Individuelles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vrPricing.map((item, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                  item.highlight
                    ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                    : 'border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20'
                }`}
              >
                {item.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                      <Sparkles size={14} />
                      Exclusif
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-xl text-white mb-2">{item.name}</h4>
                  <div className="text-gray-400 mb-4">{item.duration}</div>
                  <div className="text-4xl text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                    {item.price}
                  </div>
                  <div className="text-gray-500 text-sm">TTC</div>
                </div>
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <Check className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Packs */}
        <div className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center">Packs & Forfaits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packs.map((pack, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                  pack.popular
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/20'
                    : 'border-slate-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20'
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm">
                      Populaire
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-xl text-white mb-2">{pack.name}</h4>
                  <div className="text-gray-400 mb-4">{pack.duration}</div>
                  <div className="text-4xl text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                    {pack.price}
                  </div>
                  <div className="text-gray-500 text-sm">TTC</div>
                </div>
                <ul className="space-y-3">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <Check className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Arcade */}
        <div>
          <h3 className="text-2xl text-white mb-8 text-center">Bornes Arcade</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {arcadePricing.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-green-500/20"
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl text-white mb-4">{item.name}</h4>
                  <div className="text-4xl text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                    {item.price}
                  </div>
                  <div className="text-gray-500 text-sm">TTC</div>
                </div>
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <Check className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * Tous les prix sont TTC. Les sessions sont à réserver à l'avance.
          </p>
        </div>
      </div>
    </section>
  );
}
