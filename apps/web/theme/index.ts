import {
  theme as baseTheme,
  withDefaultColorScheme,
  extendTheme,
  ThemeConfig,
} from '@chakra-ui/react';

const theme: ThemeConfig = extendTheme(
  {
    config: { initialColorMode: 'dark', useSystemColorMode: false },
    colors: {
      brand: baseTheme.colors.cyan,
    },
    fonts: {
      heading: `'Anonymous Pro', monospace`,
      body: `'Anonymous Pro', monospace`,
    },
  },
  withDefaultColorScheme({ colorScheme: 'brand' }),
);

export default theme;
