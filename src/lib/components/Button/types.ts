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
	| 'landing-dark'
	| 'variant-app-primary'
	| 'variant-app-secondary';

export type Variants = Record<ButtonVariant, string>;
