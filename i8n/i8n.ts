export type Language = 'en' | 'hu';

export default interface Dictionary {
  readonly _id: Language
  readonly name: string
  readonly hello: string
  readonly welcomeToJupiter: string
  readonly neptunCode: string
  readonly password: string
  readonly rememberMe: string
  readonly login: string
  readonly invalidCredentials: string
  readonly information: string
  readonly grades: string
  readonly timetable: string
  readonly settings: string
  readonly subjectDetails: string
  readonly days: string[]
  readonly school: string
  readonly faculty: string
  readonly subjectName: string
  readonly start: string
  readonly end: string
  readonly room: string
  readonly teacher: string
  readonly date: string
  readonly gradeName: string
  readonly mark: string
  readonly yourDataIsOnlySentToNeptun: string
}
