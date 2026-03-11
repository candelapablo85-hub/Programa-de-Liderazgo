import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  isFor: string[];
  isNotFor: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  // Fix: Added React import to resolve React.ReactNode namespace error
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
