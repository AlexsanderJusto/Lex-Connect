export interface Lawyer {
  id: string;
  name: string;
  specialty: string;
  location: string;
  bio: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  hourlyRate: number;
  yearsExperience: number;
  education: string;
  tags: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
}

export type Page = 'home' | 'directory' | 'profile' | 'ai-agent';