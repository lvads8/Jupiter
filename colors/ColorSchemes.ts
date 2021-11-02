export type BackgroundColor = 'dark' | 'light';

export type ColorTint = 'purple'; //| 'cyan'; // | 'orange' | 'lime' | 'red' | 'pink';

export default interface ColorScheme {
  isDark: boolean
  backgroundColor: string
  backgroundColorLight: string
  backgroundColorAccent: string
  foregroundColor: string
  foregroundColorLight: string
  foregroundColorAccent: string
  backgroundTintColor: string
  backgroundTintColorAccent: string
  foregroundTintColor: string
  foregroundTintColorAccent: string
  borderRadius: number
};
