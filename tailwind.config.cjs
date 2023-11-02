/** @type {import('tailwindcss').Config} */
import { agentBoostTheme } from './agentboost-theme';
import { skeleton } from '@skeletonlabs/tw-plugin';

module.exports = {
  // 1. Apply the dark mode class setting:
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // 2. Append the path for the Skeleton NPM package and files:
    require('path').join(
      require.resolve('@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}',
    ),
  ],
  theme: {
    extend: {
      colors: {
        slate: '#C0C4DA',
      },
    },
  },
  plugins: [
    // 3. Append the Skeleton plugin to the end of this list
    require('@tailwindcss/forms'),
    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
    skeleton({
      themes: {
        custom: [agentBoostTheme],
      },
    }),
  ],
};
