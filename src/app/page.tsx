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
                Développement Durable de l&#39;Agriculture et de l&#39;Élevage en Mauritanie.
                Formez-vous aux pratiques agricoles modernes et durables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full hover:shadow-lg transition-all duration-300">
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
                  className="object-cover rounded-2xl shadow-2xl"
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
              Découvrez nos services spécialisés pour le développement agricole et l&#39;élevage durable en Mauritanie
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
                  Formation et accompagnement dans les techniques modernes d&#39;élevage. 
                  Nous vous aidons à développer votre projet d&#39;élevage de manière durable.
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
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full hover:shadow-lg transition-all duration-300">
              Découvrir nos programmes
            </button>
          </div>
        </div>
      </section>

      {/* Section Loisirs avec design moderne */}
      <section id="loisirs" className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Espace Loisirs & Détente
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un environnement paisible et ludique pour toute la famille
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte Piscine */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-[400px]">
                <Image
                  src="/piscine.jpg"
                  alt="Piscine"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Piscine</h3>
                  <p className="text-sm text-gray-200">
                    Une piscine moderne et sécurisée pour se rafraîchir en famille
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Surveillance qualifiée</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Zones adaptées aux enfants</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Carte Pelouse */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-[400px]">
                <Image
                  src="/pelouse.jpg"
                  alt="Pelouse"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Espace Vert</h3>
                  <p className="text-sm text-gray-200">
                    Une vaste pelouse de gazon naturel pour vos activités en plein air
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Aire de jeux sécurisée</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Espaces ombragés</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Carte Restaurant */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-[400px]">
                <Image
                  src="/restaurant.jpg"
                  alt="Restaurant"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Restaurant Kids</h3>
                  <p className="text-sm text-gray-200">
                    Un espace restauration adapté aux enfants avec des menus équilibrés
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Menus enfants variés</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Animations repas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section des caractéristiques */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-green-600 mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Horaires Flexibles</h4>
              <p className="text-gray-600">Ouvert tous les jours de 9h à 19h</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-green-600 mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Sécurité Maximale</h4>
              <p className="text-gray-600">Personnel qualifié et équipements aux normes</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-green-600 mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Confort Optimal</h4>
              <p className="text-gray-600">Vestiaires, douches et casiers sécurisés</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-green-600 mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Tarifs Attractifs</h4>
              <p className="text-gray-600">Formules adaptées à tous les budgets</p>
            </div>
          </div>

          {/* Bouton de réservation */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full hover:shadow-lg transition-all duration-300">
              Réserver une activité
            </button>
          </div>
        </div>
      </section>

      {/* Section Formation avec design moderne */}
      <section id="formation" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notre Espace de Formation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une salle moderne et équipée pour vos formations théoriques et pratiques
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/formation-room.jpg"
                alt="Salle de formation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Salle de Formation Polyvalente
                </h3>
                <p className="text-gray-600 mb-6">
                  Notre salle de formation moderne est spécialement conçue pour accueillir les ONG, 
                  associations et coopératives dans les meilleures conditions d&#39;apprentissage.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Formation théorique :</strong> Équipements audiovisuels modernes, 
                      tableaux interactifs et connexion internet haut débit
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Formation pratique :</strong> Accès à notre ferme pédagogique 
                      pour des démonstrations concrètes
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Capacité d&#39;accueil :</strong> Jusqu&#39;à 30 personnes, 
                      disposition modulable selon vos besoins
                    </span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-green-600 mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Environnement Optimal</h4>
                  <p className="text-gray-600">Climatisation, éclairage naturel, espace de pause</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-green-600 mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Support Technique</h4>
                  <p className="text-gray-600">Assistance technique et matériel pédagogique fourni</p>
                </div>
              </div>

              <div className="text-center">
                <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full hover:shadow-lg transition-all duration-300">
                  Réserver la salle
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos avec design moderne */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-6">
                Agro-Past est né d&#39;une vision et d&#39;une volonté commune de promouvoir le développement
                durable de systèmes de production agricole et pastorale en Mauritanie.
              </p>
              <p className="text-gray-600 mb-8">
                Notre mission est de former et d&#39;accompagner la nouvelle génération d&#39;agriculteurs
                et d&#39;éleveurs, en mettant l&#39;accent sur des pratiques durables et innovantes.
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
                  className="object-cover rounded-2xl shadow-xl"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact avec design moderne */}
      <section id="contact" className="py-20 bg-gray-50">
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
              <button className="mt-8 px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full hover:shadow-lg transition-all duration-300">
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
