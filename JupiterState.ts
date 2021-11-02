import ColorScheme from "./colors/ColorSchemes";
import Dictionary from "./i8n/i8n";

export default interface JupiterState {
  readonly language: Dictionary
  readonly colorScheme: ColorScheme
};
