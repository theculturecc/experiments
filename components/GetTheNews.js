import React, { useState, useRef } from 'react';

export default function GetTheNews() {
  const [email, setEmail] = useState("");
  const form = useRef(null);

  const hasContent = email.length > 0;
  const isValidEmail = email.match(/[\w-]+@([\w-]+\.)+[\w-]+/);

  const inputClassNames = [
    hasContent && "has-content",
    isValidEmail && "is-valid"
  ].filter(Boolean).join(' ');

  return (
    <section id="get-the-news">
      <form
        action="https://tinyletter.com/theculturecc"
        method="post"
        target="popupwindow"
        ref={form}
        onSubmit={() => {
          window.open(
            'https://tinyletter.com/theculturecc',
            'popupwindow',
            'scrollbars=yes,width=800,height=600'
          );
        }}
      >
        <div>
          <input
            type="email"
            name="email"
            required={true}
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClassNames}
          />
          <input type="hidden" value="1" name="embed"/>
          <span id="caret" />
          <span id="submit" onClick={() => {
            form.current.submit();
          }}>
            <img src="/static/enter.svg" alt="Submit" />
          </span>
        </div>
      </form>
      <div id="whats-up">
        Drop us your email for occasional updates,
        <br />
        or follow us on{' '}
        <a href="https://twitter.com/theCultureCC" target="_blank">
          Twitter
        </a>
        .<br />
        <div id="only-joy">No spam, only joy.</div>
      </div>
    </section>
  );
}
