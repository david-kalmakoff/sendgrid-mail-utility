import { TemplateConfig, EmailData } from "./types/index";

class Template {
  private _config: TemplateConfig;
  private _header: string;
  private _footer: string;

  constructor(config: TemplateConfig) {
    this._config = config;

    this._config.primary ? null : (this._config.primary = "#153643");
    this._config.secondary ? null : (this._config.secondary = "#0e1726");

    this._header = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <title>${this._config.title}</title> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <style type="text/css"> a[x-apple-data-detectors] { color: inherit !important; } </style> </head> <body style="margin: 0; padding: 0;" bgcolor="#060818"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td style="padding: 20px 0 30px 0;"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;"> <tr> <td align="center" bgcolor="${this._config.secondary}" style="padding: 10px 0 10px 0;"> <a href="${this._config.url}"> <img src="${this._config.logo}" alt="${this._config.title}" width="auto" height="230 "max-height="230" style="display: block;"/> </a> </td> </tr> <tr> <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">`;
    this._footer = `</td></tr><tr> <td bgcolor="${
      this._config.secondary
    }" style="padding: 30px 30px;"> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;"> <tr> <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;"> <p style="margin: 0;"> &reg; ${
      this._config.title
    }, ${new Date().getFullYear()} </p> </td> </tr> </table> </td></tr></table></td></tr></table></body></html>`;
  }

  /**
   * Build standard HTML email for sendgrid
   * @param {object} data Content to be sent in email
   * @return {string} With template to be emailed
   */
  buildHTML(data: EmailData): string {
    return (
      this._header +
      `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;"> <tr> <td style="color: ${this._config.primary}; font-family: Arial, sans-serif;"> <h1 style="font-size: 24px; margin: 0;">${data.title}</h1> </td> </tr> <tr> <td style="color: ${this._config.primary}; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;"> <p style="margin: 0;">${data.text}</p> </td> </tr> </table>` +
      this._footer
    );
  }

  /**
   * TODO: Build table HTML email for sendgrid
   * @param {object} data Content to be sent in email
   * @return {string} With template to be emailed
   */
  buildTableHTML(data: EmailData): string {
    let dataTable = "";

    for (const [key, value] of Object.entries(data.table))
      dataTable += `<tr><td>${key}: </td><td>${value}</td></tr>`;

    return (
      this._header +
      `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;"> <tr> <td style="color: ${this._config.primary}; font-family: Arial, sans-serif;"> <h1 style="font-size: 24px; margin: 0;">${data.title}</h1> </td> </tr> <tr> <td style="color: ${this._config.primary}; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;"> <table>${dataTable}</table> </td> </tr> </table>` +
      this._footer
    );
  }
}

exports.default = Template;
