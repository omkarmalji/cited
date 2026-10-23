import type { ComponentType, CSSProperties } from 'react';
export const PredictiveArcCanvas: ComponentType<{ mode?: 'dark'|'light'; speed?: number; hue?: number; saturation?: number; brightness?: number; variant?: 'predictive'|'data-pixel'|'override-grid'|'signal-particles'; className?: string }>;
export const HalftoneFlow: ComponentType<{ mode?: 'dark'|'light'|'system'; hue?: number; saturation?: number; brightness?: number; className?: string; style?: CSSProperties }>;
export const FlowField: ComponentType<{ mode?: 'dark'|'light'|'system'; speed?: number; size?: number; length?: number; density?: number; opacity?: number; hue?: number; saturation?: number; brightness?: number; className?: string; style?: CSSProperties }>;
