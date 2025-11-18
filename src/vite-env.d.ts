/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'gmpx-api-loader': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      key?: string;
      'solution-channel'?: string;
    }, HTMLElement>;
    'gmp-map': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      center?: string;
      zoom?: string;
      'map-id'?: string;
    }, HTMLElement>;
    'gmpx-place-picker': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      placeholder?: string;
    }, HTMLElement>;
    'gmp-advanced-marker': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
