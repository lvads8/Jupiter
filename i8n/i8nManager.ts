import Dictionary, { Language } from './i8n';
import English from "./i8n_English";
import Hungarian from "./i8n_Hungarian";

const languages: { [id in Language]: Dictionary } = {
  'en': English,
  'hu': Hungarian
};

export default class i8nManager {
  public get availableLanguages(): Language[] {
    return Object.keys(languages) as Language[];
  }

  public getLanguage(id: Language): Dictionary {
    return languages[id];
  }
}
