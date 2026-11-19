# React contact form template

A React and Vite contact form that works with no backend. [FormTango](https://formtango.com) is a form backend: your form posts to one address, and every submission is stored in an inbox, checked for spam and emailed to you. No server code, no API key.

## Use this template

1. Click **Use this template** above, or clone the repo.
2. Run `npm install` then `npm run dev`.
3. Replace `YOUR_FORM_ID` in `src/ContactForm.jsx` with your form's id.

## Get a form id

Either sign up free at https://formtango.com (100 submissions a month), or create a form with no account:

```bash
curl -X POST https://formtango.com/api/v1/claims \
  -H "Content-Type: application/json" -d '{"name":"Contact form"}'
```

The response has the `endpoint` to use and a `claimUrl`. Open the claim link to see your submissions.

## What you get

- Submissions stored in an inbox you can search and export
- An email for each one, with the visitor's address as the reply-to
- Spam filtering with no CAPTCHA
- Optional: file uploads, webhooks, Slack, Google Sheets, Notion and more

More guides: https://formtango.com/guides · Docs: https://formtango.com/docs
