import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const ConfirmPage = () => (
  <Layout>
    <SEO title="Velkommen til 💌" />

    <header className="tc lh-title">
      <h1>🤘🏼</h1>
    </header>

    <section className="lh-copy tc">
      <p>
        <strong className="fw9">Fedt!</strong> I din inbox ligger der nu en
        overraskelse.
      </p>
      <p className="gray f6">
        (Pst! Det er en knap, der bekræfter din tilmelding.{" "}
        <strong className="fw9">SO CLOSE!</strong>)
      </p>
      <p className="mt4">
        <Link href="/">
          <a className="link dib br2 ph3 pv2 bg-teal white">&larr; Tilbage</a>
        </Link>
      </p>
    </section>
  </Layout>
);

export default ConfirmPage;
