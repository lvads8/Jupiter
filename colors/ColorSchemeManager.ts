import ColorScheme, { BackgroundColor, ColorTint } from "./ColorSchemes";

export type ColorSchemeIndex<B extends BackgroundColor, T extends ColorTint> = `${B}-${T}`;

const colorSchemes: { [id in ColorSchemeIndex<BackgroundColor, ColorTint>]: ColorScheme } = {
  'light-purple': {
    isDark: false,
    backgroundColor: '#fff',
    backgroundColorLight: 'hsl(0, 0%, 85%)',
    backgroundColorAccent: 'hsl(0, 0%, 60%)',
    foregroundColor: '#000',
    foregroundColorAccent: 'hsl(0, 0%, 20%)',
    foregroundColorLight: 'hsl(0, 0%, 40%)',
    backgroundTintColor: 'hsl(270, 80%, 35%)',
    backgroundTintColorAccent: 'hsl(270, 80%, 50%)',
    foregroundTintColor: 'hsl(0, 0%, 80%)',
    foregroundTintColorAccent: '#fff',
    borderRadius: 10,
  },
  'dark-purple': {
    isDark: true,
    backgroundColor: '#000',
    backgroundColorLight: 'hsl(0, 0%, 20%)',
    backgroundColorAccent: 'hsl(0, 0%, 30%)',
    foregroundColor: '#fff',
    foregroundColorLight: 'hsl(0, 0%, 60%)',
    foregroundColorAccent: 'hsl(0, 0%, 80%)',
    backgroundTintColor: 'hsl(270, 80%, 35%)',
    backgroundTintColorAccent: 'hsl(270, 80%, 50%)',
    foregroundTintColor: 'hsl(0, 0%, 80%)',
    foregroundTintColorAccent: '#fff',
    borderRadius: 10,
  }
};

export default class ColorSchemeManager {
  public get availableColorSchemes(): ColorSchemeIndex<BackgroundColor, ColorTint>[] {
    return Object.keys(colorSchemes) as ColorSchemeIndex<BackgroundColor, ColorTint>[];
  }

  public getColorScheme(index: ColorSchemeIndex<BackgroundColor, ColorTint>): ColorScheme {
    return colorSchemes[index];
  }
}
