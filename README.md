# Sendgrid Mail Utility

Javascript (NodeJS) package to easily send styled emails through Sendgrid.

## Install Package

```
npm install @david-kalmakoff/sendgrid-mail-utility
```

## Add Package to Project

- Requires environment variable: SENDGRID_API_KEY to be set with API key.

```javascript
const Email = require("@david-kalmakoff/sendgrid-mail-utility").default;

const mailConfig = {
  emailFrom: "Email to send from", // string
  url: "URL for link on email", // string
  logo: "URL to image", // string
  title: "Email Title", // string
  colorPrimary: "#153643", // optional string with color hexadecimal
  colorSecondary: "#0e1726", // optional string with color hexadecimal
};

const mail = new Email(mailConfig);
```

## Send Email

```javascript
(async () => {
  try {
    const email = {
      emailTo: "Email to send to", // string or array of strings
      subject: "This is the subject.", // string
      text: "This is the text for the email.", // string or table
      table: { first: "this", second: "that" }, // object to create table email
    };
    await mail.sendEmail(email);
  } catch (error) {
    console.log(error);
  }
})();
```
