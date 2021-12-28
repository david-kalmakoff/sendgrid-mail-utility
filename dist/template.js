"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Template = /** @class */ (function () {
    function Template(config) {
        this._config = config;
        this._config.primary ? null : (this._config.primary = "#153643");
        this._config.secondary ? null : (this._config.secondary = "#0e1726");
        this._header = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"> <html xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"en-GB\"> <head> <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /> <title>".concat(this._config.title, "</title> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /> <style type=\"text/css\"> a[x-apple-data-detectors] { color: inherit !important; } </style> </head> <body style=\"margin: 0; padding: 0;\" bgcolor=\"#060818\"> <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"> <tr> <td style=\"padding: 20px 0 30px 0;\"> <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" style=\"border-collapse: collapse; border: 1px solid #cccccc;\"> <tr> <td align=\"center\" bgcolor=\"").concat(this._config.secondary, "\" style=\"padding: 10px 0 10px 0;\"> <a href=\"").concat(this._config.url, "\"> <img src=\"").concat(this._config.logo, "\" alt=\"").concat(this._config.title, "\" width=\"auto\" max-height=\"230\" style=\"display: block;\"/> </a> </td> </tr> <tr> <td bgcolor=\"#ffffff\" style=\"padding: 40px 30px 40px 30px;\">");
        this._footer = "</td></tr><tr> <td bgcolor=\"".concat(this._config.secondary, "\" style=\"padding: 30px 30px;\"> <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"border-collapse: collapse;\"> <tr> <td style=\"color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;\"> <p style=\"margin: 0;\"> &reg; ").concat(this._config.title, ", ").concat(new Date().getFullYear(), " </p> </td> </tr> </table> </td></tr></table></td></tr></table></body></html>");
    }
    /**
     * Build standard HTML email for sendgrid
     * @param {object} data Content to be sent in email
     * @return {string} With template to be emailed
     */
    Template.prototype.buildHTML = function (data) {
        return (this._header +
            "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"border-collapse: collapse;\"> <tr> <td style=\"color: ".concat(this._config.primary, "; font-family: Arial, sans-serif;\"> <h1 style=\"font-size: 24px; margin: 0;\">").concat(data.title, "</h1> </td> </tr> <tr> <td style=\"color: ").concat(this._config.primary, "; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;\"> <p style=\"margin: 0;\">").concat(data.text, "</p> </td> </tr> </table>") +
            this._footer);
    };
    /**
     * TODO: Build table HTML email for sendgrid
     * @param {object} data Content to be sent in email
     * @return {string} With template to be emailed
     */
    Template.prototype.buildTableHTML = function (data) {
        var dataTable = "";
        for (var _i = 0, _a = Object.entries(data.table); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            dataTable += "<tr><td>".concat(key, ": </td><td>").concat(value, "</td></tr>");
        }
        return (this._header +
            "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"border-collapse: collapse;\"> <tr> <td style=\"color: ".concat(this._config.primary, "; font-family: Arial, sans-serif;\"> <h1 style=\"font-size: 24px; margin: 0;\">").concat(data.title, "</h1> </td> </tr> <tr> <td style=\"color: ").concat(this._config.primary, "; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;\"> <table>").concat(dataTable, "</table> </td> </tr> </table>") +
            this._footer);
    };
    return Template;
}());
exports.default = Template;
