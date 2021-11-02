import React from "react";
import { ColorSchemeIndex } from "./colors/ColorSchemeManager";
import ColorScheme, { BackgroundColor, ColorTint } from "./colors/ColorSchemes";
import Dictionary, { Language } from "./i8n/i8n";

export default {
  Scheme: React.createContext<{ scheme: ColorScheme, setScheme: (value: ColorSchemeIndex<BackgroundColor, ColorTint>) => void}>(null!),
  Language: React.createContext<{ language: Dictionary, setLanguage: (value: Language) => void }>(null!),
  CurrentUser: React.createContext<{ currentUser: any, setCurrentUser: (value: any) => void }>(null!)
};
