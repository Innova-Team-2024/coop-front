import { ReactNode } from 'react';

export interface Feature {
  icon: ReactNode;
  text: string;
}

export interface Plan {
  title: string;
  features: Feature[];
  price: string;
  note: string;
  memberPrice: string;
  recommended: boolean;
}