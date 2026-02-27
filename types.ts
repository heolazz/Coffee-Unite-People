import type { ElementType } from 'react';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  attendees: number;
  imageUrl: string;
  host: string;
}

export interface Category {
  id: string;
  name: string;
  icon: ElementType;
}

export interface GeneratedIdea {
  id?: string;
  title: string;
  description: string;
  suggestedActivities: string[];
  category?: string;
  suitableLocationType?: string;
  estimatedDuration?: string;
}