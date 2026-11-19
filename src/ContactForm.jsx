import { useFormTango } from 'formtango/react';

// Replace YOUR_FORM_ID with your form's id from https://formtango.com
export function ContactForm() {
  const { status, error, handleSubmit } = useFormTango('YOUR_FORM_ID');

  if (status === 'sent') return <p>Thanks! We got your message.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email <input type="email" name="email" required />
      </label>
      <label>
        Message <textarea name="message" required />
      </label>
      {/* Spam trap: leave this hidden and empty */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <button disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send'}</button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
}
