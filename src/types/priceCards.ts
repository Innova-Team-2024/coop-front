import { Feature } from './plan';

export interface PlanCardProps {
  title: string;
  features: Feature[];
  price: string;
  note: string;
  memberPrice: string;
  recommended: boolean;
}
