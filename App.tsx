import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { Page, Lawyer } from './types';
import { LAWYERS } from './constants';
import LawyerCard from './components/LawyerCard';
import StarRating from './components/StarRating';
import { askLegalAgent, AgentResponse } from './services/geminiService';
import { Search, MapPin, Filter, Send, Sparkles, Phone, Award, GraduationCap, Clock, MessageCircle, MessageSquare, Gavel, Scale, Handshake, User } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedLawyerId, setSelectedLawyerId] = useState<string | null>(null);

  // --- Components for specific pages defined inline for simplicity within the single file structure constraint ---

  // 1. HOME PAGE
  const HomePage = () => (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="relative bg-legal-900 text-white overflow-hidden">
        {/* Abstract Law Background */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-center bg-cover mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-legal-900 via-legal-900/90 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 text-left z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-6">
              <Gavel size={14} className="mr-2" />
              Excelência Jurídica ao seu Alcance
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Justiça que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Conecta.</span>
            </h1>
            <p className="text-lg md:text-xl text-legal-100 mb-10 max-w-lg leading-relaxed font-light">
              Encontre os advogados mais qualificados do Brasil ou obtenha orientação instantânea com nossa IA especializada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
               <button 
                onClick={() => setCurrentPage('ai-agent')}
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-serif font-semibold text-lg flex items-center justify-center shadow-lg shadow-gold-500/20 transition-all transform hover:-translate-y-1"
              >
                <Sparkles className="mr-2" />
                Falar com IA
              </button>
              <button 
                onClick={() => setCurrentPage('directory')}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-serif font-semibold text-lg flex items-center justify-center transition-all"
              >
                <Search className="mr-2" />
                Buscar Advogados
              </button>
            </div>
          </div>
          {/* Hero Image/Illustration area could go here on the right */}
        </div>
      </div>

      {/* Featured Lawyers */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 w-full bg-slate-50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div>
            <h2 className="text-4xl font-serif font-bold text-legal-900">Advogados em Destaque</h2>
            <p className="text-gray-500 mt-3 font-light text-lg">Profissionais altamente recomendados prontos para defender seus direitos.</p>
          </div>
          <button 
            onClick={() => setCurrentPage('directory')}
            className="hidden md:flex items-center text-legal-700 font-medium hover:text-legal-900 group mt-4 md:mt-0"
          >
            Ver todos os profissionais
            <div className="bg-gold-100 p-1 rounded-full ml-2 group-hover:bg-gold-200 transition-colors">
              <Search size={16} className="text-gold-600" />
            </div>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LAWYERS.slice(0, 4).map(lawyer => (
            <LawyerCard 
              key={lawyer.id} 
              lawyer={lawyer} 
              onClick={(id) => { setSelectedLawyerId(id); setCurrentPage('profile'); }} 
            />
          ))}
        </div>
        
        <button 
          onClick={() => setCurrentPage('directory')}
          className="md:hidden w-full mt-8 py-3 border border-gray-300 rounded-lg text-gray-600 font-medium text-center hover:bg-gray-50"
        >
          Ver todos os advogados
        </button>
      </div>
      
      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-legal-900 mb-4">Por que escolher a LexConnect?</h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             <div className="group p-8 rounded-2xl hover:bg-legal-50 transition-colors duration-300">
                <div className="bg-legal-100 p-5 rounded-full mb-6 text-legal-800 w-20 h-20 mx-auto flex items-center justify-center group-hover:bg-legal-800 group-hover:text-gold-400 transition-colors duration-300">
                  <MapPin size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif text-legal-900">Geolocalização Precisa</h3>
                <p className="text-gray-500 leading-relaxed">Encontre advogados que conhecem as leis locais e os tribunais da sua jurisdição específica.</p>
             </div>
             <div className="group p-8 rounded-2xl hover:bg-legal-50 transition-colors duration-300">
                <div className="bg-legal-100 p-5 rounded-full mb-6 text-legal-800 w-20 h-20 mx-auto flex items-center justify-center group-hover:bg-legal-800 group-hover:text-gold-400 transition-colors duration-300">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif text-legal-900">Especialistas Verificados</h3>
                <p className="text-gray-500 leading-relaxed">Todos os advogados na plataforma possuem OAB ativa verificada. Leia avaliações reais de clientes.</p>
             </div>
             <div className="group p-8 rounded-2xl hover:bg-legal-50 transition-colors duration-300">
                <div className="bg-legal-100 p-5 rounded-full mb-6 text-legal-800 w-20 h-20 mx-auto flex items-center justify-center group-hover:bg-legal-800 group-hover:text-gold-400 transition-colors duration-300">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif text-legal-900">Match Inteligente com IA</h3>
                <p className="text-gray-500 leading-relaxed">Nossa IA analisa os detalhes do seu caso para conectar você ao profissional com maior chance de êxito.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 2. DIRECTORY PAGE
  const DirectoryPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [specialtyFilter, setSpecialtyFilter] = useState('Todas');
    const [locationFilter, setLocationFilter] = useState('');

    const specialties = ['Todas', ...Array.from(new Set(LAWYERS.map(l => l.specialty)))];

    const filteredLawyers = LAWYERS.filter(lawyer => {
      const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            lawyer.bio.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = specialtyFilter === 'Todas' || lawyer.specialty === specialtyFilter;
      const matchesLocation = lawyer.location.toLowerCase().includes(locationFilter.toLowerCase());
      
      return matchesSearch && matchesSpecialty && matchesLocation;
    });

    return (
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-gold-500 mr-4 rounded-full"></div>
            <h1 className="text-4xl font-serif font-bold text-legal-900">Encontre um Advogado</h1>
          </div>
          
          {/* Filters */}
          <div className="bg-white p-6 rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Buscar por nome ou palavra-chave..." 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-legal-500 focus:border-transparent transition-shadow"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-3.5 text-gray-400" size={20} />
                <select 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-legal-500 focus:border-transparent appearance-none bg-white transition-shadow"
                  value={specialtyFilter}
                  onChange={(e) => setSpecialtyFilter(e.target.value)}
                >
                  {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Cidade ou Estado" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-legal-500 focus:border-transparent transition-shadow"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredLawyers.map(lawyer => (
            <LawyerCard 
              key={lawyer.id} 
              lawyer={lawyer} 
              onClick={(id) => { setSelectedLawyerId(id); setCurrentPage('profile'); }} 
            />
          ))}
          {filteredLawyers.length === 0 && (
            <div className="col-span-full text-center py-20">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                 <Search className="text-gray-400" size={32} />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Nenhum advogado encontrado</h3>
              <p className="text-gray-500">Tente ajustar seus filtros de busca.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // 3. AI AGENT PAGE
  const AIAgentPage = () => {
    const [query, setQuery] = useState('');
    const [history, setHistory] = useState<{role: 'user' | 'model', content: string}[]>([
      { role: 'model', content: "Olá. Sou o Assistente Jurídico da LexConnect. Posso responder a perguntas jurídicas gerais e conectá-lo a advogados especializados no seu problema. Como posso ajudar você hoje?" }
    ]);
    const [loading, setLoading] = useState(false);
    const [recommendations, setRecommendations] = useState<Lawyer[]>([]);

    const handleSend = async () => {
      if (!query.trim()) return;
      
      const userMessage = query;
      setQuery('');
      setHistory(prev => [...prev, { role: 'user', content: userMessage }]);
      setLoading(true);

      try {
        const response: AgentResponse = await askLegalAgent(userMessage);
        
        setHistory(prev => [...prev, { role: 'model', content: response.answer }]);
        
        if (response.recommendedLawyerIds && response.recommendedLawyerIds.length > 0) {
          const matchedLawyers = LAWYERS.filter(l => response.recommendedLawyerIds.includes(l.id));
          setRecommendations(matchedLawyers);
        }
      } catch (error) {
        setHistory(prev => [...prev, { role: 'model', content: "Desculpe, encontrei um erro ao processar sua solicitação." }]);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="h-[calc(100vh-80px)] flex flex-col md:flex-row bg-slate-50">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col h-full bg-white md:rounded-tr-2xl shadow-xl z-10">
          <div className="p-4 border-b border-gray-100 bg-white flex items-center justify-between">
             <div className="flex items-center">
               <div className="bg-gold-100 p-2 rounded-lg mr-3">
                 <Sparkles className="text-gold-600" size={20} />
               </div>
               <div>
                 <h2 className="font-serif font-bold text-legal-900">Assistente IA</h2>
                 <p className="text-xs text-green-600 font-medium flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Online</p>
               </div>
             </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {history.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-6 py-4 shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-legal-900 text-white rounded-br-none' 
                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                }`}>
                  {msg.role === 'model' && (
                    <div className="flex items-center mb-2 border-b border-gray-100 pb-2">
                      <Scale size={14} className="text-gold-500 mr-2" />
                      <span className="text-xs font-bold uppercase text-gold-600 tracking-wider">LexConnect AI</span>
                    </div>
                  )}
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-6 py-4 shadow-sm flex items-center space-x-2">
                  <span className="text-xs text-gray-400 font-medium mr-2">Analisando caso</span>
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative">
              <textarea
                className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-4 pr-14 py-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none focus:bg-white transition-colors"
                rows={2}
                placeholder="Descreva seu problema jurídico (ex: 'Preciso de ajuda com divórcio em SP')..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <button 
                onClick={handleSend}
                disabled={loading || !query.trim()}
                className="absolute right-3 bottom-3 p-2.5 bg-legal-900 text-white rounded-lg hover:bg-legal-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">A IA pode cometer erros. Verifique informações importantes com um advogado.</p>
          </div>
        </div>

        {/* Recommendations Sidebar */}
        <div className="w-full md:w-80 lg:w-96 bg-gray-50 p-4 border-l border-gray-200 overflow-y-auto h-[30vh] md:h-auto">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center">
            <User size={14} className="mr-2" /> Advogados Recomendados
          </h3>
          
          {recommendations.length > 0 ? (
            <div className="space-y-4">
              {recommendations.map(lawyer => (
                <LawyerCard 
                  key={lawyer.id} 
                  lawyer={lawyer} 
                  compact 
                  onClick={(id) => { setSelectedLawyerId(id); setCurrentPage('profile'); }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 border-2 border-dashed border-gray-200 rounded-xl">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Search className="text-gray-300" size={20} />
              </div>
              <p className="text-gray-400 text-sm font-medium">
                Descreva seu caso no chat para receber recomendações personalizadas.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // 4. PROFILE PAGE
  const ProfilePage = () => {
    if (!selectedLawyerId) return <DirectoryPage />;
    const lawyer = LAWYERS.find(l => l.id === selectedLawyerId);
    if (!lawyer) return <DirectoryPage />;

    return (
      <div className="bg-slate-50 pb-20">
        {/* Header Cover */}
        <div className="h-64 bg-legal-900 relative">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="md:flex">
              {/* Sidebar Info */}
              <div className="md:w-1/3 bg-legal-50/30 p-8 border-r border-gray-100 text-center md:text-left">
                <div className="relative inline-block mb-6">
                  <img 
                    src={lawyer.imageUrl} 
                    alt={lawyer.name} 
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg object-cover mx-auto md:mx-0"
                  />
                  <div className="absolute bottom-3 right-3 bg-green-500 w-5 h-5 rounded-full border-2 border-white shadow-sm" title="Disponível"></div>
                </div>
                
                <h1 className="text-3xl font-serif font-bold text-legal-900 mb-1">{lawyer.name}</h1>
                <p className="text-gold-600 font-medium mb-6 uppercase tracking-wide text-xs">{lawyer.specialty}</p>
                
                <div className="flex items-center justify-center md:justify-start mb-8 bg-white p-3 rounded-lg shadow-sm inline-flex">
                  <StarRating rating={lawyer.rating} size={20} />
                  <span className="ml-2 text-legal-800 font-bold">4.9</span>
                  <span className="ml-1 text-gray-400 text-sm">({lawyer.reviewCount} avaliações)</span>
                </div>

                <div className="space-y-5 text-sm">
                   <div className="flex items-center text-gray-700">
                     <div className="w-8 h-8 rounded-full bg-legal-100 flex items-center justify-center mr-3 text-legal-700">
                        <MapPin size={16} />
                     </div>
                     <span className="font-medium">{lawyer.location}</span>
                   </div>
                   <div className="flex items-center text-gray-700">
                     <div className="w-8 h-8 rounded-full bg-legal-100 flex items-center justify-center mr-3 text-legal-700">
                        <Clock size={16} />
                     </div>
                     <span className="font-medium">{lawyer.yearsExperience} Anos de Experiência</span>
                   </div>
                   <div className="flex items-center text-gray-700">
                     <div className="w-8 h-8 rounded-full bg-legal-100 flex items-center justify-center mr-3 text-legal-700">
                        <GraduationCap size={16} />
                     </div>
                     <span className="font-medium">{lawyer.education}</span>
                   </div>
                   <div className="flex items-center text-gray-700">
                     <div className="w-8 h-8 rounded-full bg-legal-100 flex items-center justify-center mr-3 text-legal-700">
                        <span className="font-serif font-bold">$</span>
                     </div>
                     <span className="font-bold text-legal-900 text-lg">R$ {lawyer.hourlyRate}/h</span>
                   </div>
                </div>

                <div className="mt-10 space-y-3">
                  <button className="w-full bg-legal-900 text-white py-3.5 rounded-lg font-medium hover:bg-legal-800 transition-colors flex items-center justify-center shadow-lg shadow-legal-900/20">
                    <MessageSquare size={18} className="mr-2" />
                    Enviar Mensagem
                  </button>
                  <button className="w-full bg-white border-2 border-gray-200 text-gray-700 py-3.5 rounded-lg font-medium hover:border-gold-400 hover:text-gold-600 transition-colors flex items-center justify-center">
                    <Phone size={18} className="mr-2" />
                    Agendar Consulta
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:w-2/3 p-10">
                <section className="mb-10">
                  <div className="flex items-center mb-6">
                    <h2 className="text-2xl font-serif font-bold text-legal-900 mr-4">Sobre</h2>
                    <div className="h-px flex-grow bg-gray-200"></div>
                  </div>
                  <p className="text-gray-600 leading-8 text-lg font-light">{lawyer.bio}</p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {lawyer.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-legal-50 text-legal-700 rounded-full text-xs font-semibold uppercase tracking-wide border border-legal-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-8">
                    <h2 className="text-2xl font-serif font-bold text-legal-900 mr-4">Avaliações de Clientes</h2>
                    <div className="h-px flex-grow bg-gray-200"></div>
                  </div>
                  <div className="space-y-6">
                    {/* Mock specific reviews for this profile */}
                     <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                       <div className="flex justify-between items-start mb-3">
                         <div className="font-bold text-legal-900">Miguel T.</div>
                         <span className="text-xs text-gray-400">2 semanas atrás</span>
                       </div>
                       <StarRating rating={5} size={16} className="mb-3" />
                       <p className="text-gray-600 italic">"Excelente serviço. {lawyer.name} foi incrivelmente ágil e me ajudou a navegar por uma situação muito difícil com total clareza."</p>
                     </div>
                     <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                       <div className="flex justify-between items-start mb-3">
                         <div className="font-bold text-legal-900">Júlia L.</div>
                         <span className="text-xs text-gray-400">1 mês atrás</span>
                       </div>
                       <StarRating rating={4.5} size={16} className="mb-3" />
                       <p className="text-gray-600 italic">"Muito conhecedora em {lawyer.specialty}. Recomendo para quem precisa de conselho jurídico em {lawyer.location}."</p>
                     </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <HashRouter>
      <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'directory' && <DirectoryPage />}
        {currentPage === 'ai-agent' && <AIAgentPage />}
        {currentPage === 'profile' && <ProfilePage />}
      </Layout>
    </HashRouter>
  );
};

export default App;