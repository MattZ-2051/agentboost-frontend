type Tab = {
  label: string;
  href?: string;
  name: string;
};
export type TabItems = Tab[];

export type CardItem = {
  title: string;
  body: string;
}[];

export type SliderItems = CardItem[];

export type ChipVariant = 'variant-filled';

export type ButtonVariant =
  | 'variant-filled'
  | 'variant-filled-surface'
  | 'variant-filled-primary'
  | 'variant-filled-secondary'
  | 'variant-filled-tertiary'
  | 'variant-ringed'
  | 'variant-ringed-primary'
  | 'variant-ringed-secondary'
  | 'landing'
  | 'landing-dark';

export type Variants = Record<ButtonVariant, string>;
