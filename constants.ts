import { Lawyer, Review } from './types';

export const LAWYERS: Lawyer[] = [
  {
    id: '1',
    name: 'Dra. Ana Paula Silva',
    specialty: 'Direito de Família',
    location: 'São Paulo, SP',
    bio: 'Advogada especialista em direito de família com mais de 15 anos de experiência em divórcios complexos e guarda compartilhada. Priorizo a mediação, mas defendo vigorosamente os interesses dos meus clientes no tribunal.',
    rating: 4.8,
    reviewCount: 124,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    hourlyRate: 450,
    yearsExperience: 15,
    education: 'USP - Largo São Francisco',
    tags: ['Divórcio', 'Guarda', 'Pensão Alimentícia']
  },
  {
    id: '2',
    name: 'Dr. Roberto Mendes',
    specialty: 'Direito Empresarial',
    location: 'Rio de Janeiro, RJ',
    bio: 'Especialista em propriedade intelectual e estruturação de startups. Ajudo empresas de tecnologia a navegar pelo complexo cenário jurídico brasileiro, desde o investimento anjo até o IPO.',
    rating: 4.9,
    reviewCount: 89,
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    hourlyRate: 800,
    yearsExperience: 12,
    education: 'FGV Rio',
    tags: ['Startups', 'Contratos', 'Marcas e Patentes']
  },
  {
    id: '3',
    name: 'Dra. Cláudia Oliveira',
    specialty: 'Direito Penal',
    location: 'Belo Horizonte, MG',
    bio: 'Ex-promotora com vasta experiência em defesa criminal. Entendo como a acusação pensa e uso esse conhecimento para construir defesas sólidas para meus clientes, focando em crimes de colarinho branco.',
    rating: 4.7,
    reviewCount: 210,
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    hourlyRate: 600,
    yearsExperience: 18,
    education: 'UFMG',
    tags: ['Habeas Corpus', 'Crimes Financeiros', 'Defesa']
  },
  {
    id: '4',
    name: 'Dr. Fernando Santos',
    specialty: 'Direito Trabalhista',
    location: 'Curitiba, PR',
    bio: 'Dedicado a defender os direitos dos trabalhadores e auxiliar empresas na conformidade com a CLT. Atuação focada em negociações sindicais e litígios trabalhistas complexos.',
    rating: 5.0,
    reviewCount: 75,
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    hourlyRate: 350,
    yearsExperience: 20,
    education: 'UFPR',
    tags: ['CLT', 'Acordos', 'Sindicatos']
  },
  {
    id: '5',
    name: 'Dra. Juliana Costa',
    specialty: 'Direito Tributário',
    location: 'São Paulo, SP',
    bio: 'Sócia-gestora com reputação de resolver disputas fiscais de alto valor. Quando o futuro financeiro da sua empresa está em jogo, ofereço planejamento tributário estratégico e defesa administrativa.',
    rating: 4.6,
    reviewCount: 312,
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    hourlyRate: 1200,
    yearsExperience: 25,
    education: 'PUC-SP',
    tags: ['Impostos', 'Recuperação Fiscal', 'Compliance']
  },
  {
    id: '6',
    name: 'Dr. Carlos Ferreira',
    specialty: 'Clínica Geral',
    location: 'Porto Alegre, RS',
    bio: 'Advocacia acessível para o dia a dia. Pequenas causas, problemas de consumo e trânsito. Ofereço representação agressiva a taxas justas para garantir seus direitos.',
    rating: 4.2,
    reviewCount: 540,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    hourlyRate: 250,
    yearsExperience: 10,
    education: 'UFRGS',
    tags: ['Consumidor', 'Trânsito', 'Pequenas Causas']
  },
  {
    id: '7',
    name: 'Dr. Ricardo Almeida',
    specialty: 'Direito Imobiliário',
    location: 'Salvador, BA',
    bio: 'Especialista em transações imobiliárias comerciais e residenciais. Garanto que seus investimentos estejam protegidos e que seus contratos sejam seguros e transparentes.',
    rating: 4.8,
    reviewCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    hourlyRate: 500,
    yearsExperience: 30,
    education: 'UFBA',
    tags: ['Escrituras', 'Zoneamento', 'Incorporação']
  },
  {
    id: '8',
    name: 'Dra. Mariana Lima',
    specialty: 'Direito Digital',
    location: 'Recife, PE',
    bio: 'Advogada moderna focada em LGPD, crimes cibernéticos e contratos digitais. Meticulosa e atualizada com as leis de proteção de dados e tecnologia.',
    rating: 5.0,
    reviewCount: 92,
    imageUrl: 'https://images.unsplash.com/photo-1581055990573-77790182f9c1?auto=format&fit=crop&w=400&q=80',
    hourlyRate: 600,
    yearsExperience: 8,
    education: 'UFPE',
    tags: ['LGPD', 'Internet', 'Privacidade']
  }
];

export const MOCK_REVIEWS: Review[] = [
  { id: '101', author: 'João D.', rating: 5, date: '2 meses atrás', text: 'Conduziu meu caso com graça e profissionalismo. Altamente recomendado!' },
  { id: '102', author: 'Maria S.', rating: 4, date: '1 mês atrás', text: 'Ótima comunicação, embora um pouco caro. Vale a pena pelos resultados.' },
  { id: '103', author: 'Miguel T.', rating: 5, date: '3 semanas atrás', text: 'Salvou minha empresa de um processo trabalhista injusto. Não posso agradecer o suficiente.' },
];