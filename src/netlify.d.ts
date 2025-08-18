import 'react';

declare module 'react' {
  interface FormHTMLAttributes<T> extends HTMLFormAttributes<T> {
    netlify?: boolean;
  }
}