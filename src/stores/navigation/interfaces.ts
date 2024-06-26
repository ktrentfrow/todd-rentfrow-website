import type { IWorkHistory } from '@ktrentfrow/common';

export type NavigationState = {
  bottomItemName: string;
  bottomTextDisplay: string;
  showBottomNavigation: boolean;
  workHistories: Array<IWorkHistory>;
};

export enum BottomNavItem {
  NONE = 'None',
  BLUEHALO = 'Blue Halo',
  BROCKWELL = 'Brockwell Technologies'
}

export const blueHaloRes = `
# Blue Halo

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for  Imports in TS


## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

npm install

### Compile and Hot-Reload for Development

npm run dev

### Type-Check, Compile and Minify for Production

npm run build

### Run Unit Tests with [Vitest](https://vitest.dev/)

npm run test:unit

### Lint with [ESLint](https://eslint.org/)

npm run lint
`;
