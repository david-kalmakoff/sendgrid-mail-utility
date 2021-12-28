import { Config, Email } from "./types/index";
const dotenv = require("dotenv").config();
const sgMail = require("@sendgrid/mail").setApiKey(
  process.env.SENDGRID_API_KEY
);
const Template = require("./template").default;

class Index {
  private _config: Config;
  private _template: any;

  constructor(config: Config) {
    this._config = config;
    const templateConfig = {
      url: config.url,
      logo: config.logo,
      title: config.title,
      primary: config.colorPrimary,
      secondary: config.colorSecondary,
    };

    this._template = new Template(templateConfig);
  }

  /**
   * Send email through SendGrid
   * @param {object} data For email to be sent
   * @return {void}
   */
  sendEmail(options: Email): Promise<void> {
    options.email = this.buildHTMLTemplate(options);

    const msg = {
      from: this._config.emailFrom,
      to: options.emailTo,
      subject: options.subject,
      text: options.text,
      html: options.email,
    };

    return new Promise(async (resolve, reject) => {
      try {
        await sgMail.send(msg);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Build standard HTML Template for SendGrid
   * @param {object} data For email to be sent
   * @return {string} With template added
   */
  buildHTMLTemplate(options: Email): string {
    if (typeof options.table === "undefined")
      return this._template.buildHTML({
        title: options.subject,
        text: options.text,
      });
    else
      return this._template.buildTableHTML({
        title: options.subject,
        table: options.table,
      });
  }
}

exports.default = Index;
