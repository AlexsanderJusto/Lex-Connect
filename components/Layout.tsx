import React, { useState } from 'react';
import { Scale, Search, MessageSquare, User, Menu, X, Home } from 'lucide-react';
import { Page } from '../types';

interface LayoutProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentPage, onNavigate, children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'directory', label: 'Encontrar Advogado', icon: Search },
    { id: 'ai-agent', label: 'Assistente Jurídico IA', icon: MessageSquare },
  ];

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-legal-50 flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
              <div className="bg-legal-900 p-2 rounded-lg mr-3 shadow-lg">
                <Scale className="text-gold-400 h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-legal-900 tracking-tight leading-none">LexConnect</span>
                <span className="text-[10px] text-gold-600 uppercase tracking-widest font-semibold">Brasil</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id as Page)}
                  className={`flex items-center text-sm font-medium transition-colors ${
                    currentPage === item.id 
                      ? 'text-legal-900 border-b-2 border-gold-500 pb-1' 
                      : 'text-gray-500 hover:text-legal-700'
                  }`}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </button>
              ))}
              <div className="h-8 w-px bg-gray-200 mx-2"></div>
              <button className="text-sm font-medium text-gray-500 hover:text-legal-900">
                Entrar
              </button>
              <button className="bg-legal-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-legal-800 transition-colors border border-transparent shadow-md">
                Para Advogados
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-legal-900"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id as Page)}
                  className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium border-l-4 ${
                    currentPage === item.id
                      ? 'bg-legal-50 text-legal-900 border-gold-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-transparent'
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-legal-900 text-legal-200 py-16 border-t-4 border-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-white/10 p-2 rounded-lg mr-3">
                   <Scale className="text-gold-400 h-6 w-6" />
                </div>
                <span className="font-serif text-2xl font-bold text-white">LexConnect</span>
              </div>
              <p className="text-sm opacity-75 leading-relaxed">
                Conectando clientes à justiça com excelência e tecnologia. A plataforma líder em serviços jurídicos no Brasil.
              </p>
            </div>
            <div>
              <h4 className="text-gold-400 font-serif font-semibold mb-6 tracking-wide">Plataforma</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Encontrar Advogados</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Assistente IA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold-400 font-serif font-semibold mb-6 tracking-wide">Recursos</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog Jurídico</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold-400 font-serif font-semibold mb-6 tracking-wide">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Código de Ética</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-legal-800 text-center text-sm opacity-50 flex flex-col md:flex-row justify-between items-center">
            <span>© {new Date().getFullYear()} LexConnect Brasil. Todos os direitos reservados.</span>
            <span className="mt-2 md:mt-0">Desenvolvido com IA & Excelência</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;