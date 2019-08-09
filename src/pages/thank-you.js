import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const ThankYouPage = () => (
  <Layout>
    <SEO title="Velkommen til 💌" />

    <header className="lh-title">
      <h1 className="tc">🖥💯</h1>
    </header>

    <section className="lh-copy tc">
      <p>Vi skal nok finde ud af det sammen, os to.</p>
      <p>
        Hvis du har lyst, vil jeg rigtig gerne høre, hvem du er, og hvad du
        laver? Send mig en mail på 
        <a className="link" href="mailto:mikkel@brnbw.com">
          mikkel@brnbw.com
        </a>
         og skriv lidt om dig selv.
      </p>
      <p>Ellers ses vi bare i næste nyhedsbrev  ✉️✌🏼</p>
      <p className="mt4">
        <Link href="/">
          <a className="link dib br2 ph3 pv2 bg-teal white">&larr; Tilbage</a>
        </Link>
      </p>
    </section>
  </Layout>
);

export default ThankYouPage;
