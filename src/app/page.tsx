import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section avec animation et design moderne */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text">
                  Agro-Past Mauritanie
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Développement Durable de l'Agriculture et de l'Élevage en Mauritanie.
                Formez-vous aux pratiques agricoles modernes et durables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                  Découvrir nos services
                </button>
                <button className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-all duration-300">
                  En savoir plus
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <Image
                  src="/hero-image.jpg"
                  alt="Agriculture durable"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services avec design moderne */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos services spécialisés pour le développement agricole et l'élevage durable en Mauritanie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ferme pédagogique */}
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/service1.jpg"
                  alt="Ferme pédagogique"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">
                  Ferme pédagogique
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Production et distribution de produits frais et de qualité. 
                  Nous cultivons des légumes et élevons des volailles dans le respect 
                  des normes environnementales.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Production de légumes frais
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Élevage de volailles
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Distribution locale
                  </li>
                </ul>
              </div>
            </div>

            {/* Formations et Stages */}
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/service2.jpg"
                  alt="Formations et Stages"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">
                  Formations et Stages
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Programmes de formation pratique adaptés aux besoins locaux. 
                  Accompagnement personnalisé pour développer vos compétences en 
                  agriculture et élevage.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Formation technique
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Stages pratiques
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Certification professionnelle
                  </li>
                </ul>
              </div>
            </div>

            {/* Élevage */}
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/service3.jpg"
                  alt="Élevage"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">
                  Élevage
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Formation et accompagnement dans les techniques modernes d'élevage. 
                  Nous vous aidons à développer votre projet d'élevage de manière durable.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Techniques modernes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Suivi sanitaire
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Gestion durable
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              Découvrir nos programmes
            </button>
          </div>
        </div>
      </section>

      {/* Section À propos avec design moderne */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-6">
                Agro-Past est né d'une vision et d'une volonté commune de promouvoir le développement
                durable de systèmes de production agricole et pastorale en Mauritanie.
              </p>
              <p className="text-gray-600 mb-8">
                Notre mission est de former et d'accompagner la nouvelle génération d'agriculteurs
                et d'éleveurs, en mettant l'accent sur des pratiques durables et innovantes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Agriculteurs formés</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">Projets réalisés</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src="/about-image.jpg"
                  alt="Notre histoire"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact avec design moderne */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Contactez-nous</h2>
            <p className="text-gray-600 mb-12">
              Notre équipe est là pour répondre à toutes vos questions et vous accompagner dans vos projets
            </p>
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Votre téléphone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Votre message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  ></textarea>
                </div>
              </div>
              <button className="mt-8 px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Composant Card pour les services avec design moderne
function ServiceCard({ title, description, gradient }: { title: string, description: string, gradient: string }) {
  return (
    <div className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
