export interface Config {
  readonly emailFrom: string;
  readonly logo: string;
  readonly url: string;
  readonly title: string;
  template?: any;
  colorPrimary?: string;
  colorSecondary?: string;
}

export interface Email {
  readonly emailTo: string | Array<string>;
  email?: string;
  readonly subject: string;
  readonly text: string;
  readonly table?: object;
}

export interface TemplateConfig {
  readonly logo: string;
  readonly url: string;
  readonly title: string;
  primary?: string;
  secondary?: string;
}

export interface EmailData {
  readonly title: string;
  readonly text?: string;
  readonly table?: object;
}
