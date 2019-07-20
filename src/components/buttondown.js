import React, { useState, useEffect } from "react";

const stupidEmails = [
  "johann.wolfgang@goethe.biz",
  "bill@gatesnotes.com",
  "zuck@facebook.com",
  "a.merkel@bundestag.de",
  "mikkel@brnbw.com"
];

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

export const generateRandomEmail = () => sample(stupidEmails);

export default ({ color, ...props }) => {
  color = color || "pinkish";

  const [placeholder, setPlaceholder] = useState("");
  useEffect(() => {
    setPlaceholder(generateRandomEmail());
  });

  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/computers"
      method="post"
      target="popupwindow"
      onSubmit={() => {
        window.open("https://buttondown.email/computers", "popupwindow");
      }}
      className="embeddable-buttondown-form"
    >
      <div className="flex content-stretch">
        <div className="flex-auto">
          <label htmlFor="bd-email" className="dn">
            Enter your email
          </label>
          <input
            type="email"
            defaultValue=""
            name="email"
            id="bd-email"
            className={`input b--${color} w-100 br--left`}
            placeholder={placeholder}
          />
        </div>
        <input type="hidden" value="1" name="embed" />
        <input
          type="submit"
          value="Tilmeld"
          name="subscribe"
          className={`db btn ba bw1 b--${color} br2 br--right bg-${color}
            white ph1 ph3-ns b f6 f5-ns`}
        />
      </div>
    </form>
  );
};
