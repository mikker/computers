import React from "react";
import { useGet } from 'use-http'

let scriptAdded = false

export default function Tweet({ url }) {
  // const req = useGet({
  //   url: `https://publish.twitter.com/oembed?url=${url}`,
  //   // onMount: true
  // })

  // console.log(req)

  return (
    <>
      {/* <blockquote className="twitter-tweet"> */}
      {/*   <p lang="en" dir="ltr"> */}
      {/*     The latest in &quot;Mikkel vs. Mikkel&#39;s ability to focus&quot; – */}
      {/*     My Twitter timeline looks like this now thanks to{" "} */}
      {/*     <a href="https://t.co/EXC7gweziv">https://t.co/EXC7gweziv</a>:{" "} */}
      {/*     <a href="https://t.co/75S1IR74Ki">pic.twitter.com/75S1IR74Ki</a> */}
      {/*   </p> */}
      {/*   &mdash; Mikkel Malmberg (@mikker){" "} */}
      {/*   <a href="https://twitter.com/mikker/status/1098211934904684544?ref_src=twsrc%5Etfw"> */}
      {/*     February 20, 2019 */}
      {/*   </a> */}
      {/* </blockquote>{" "} */}
      {/* <script */}
      {/*   async */}
      {/*   src="https://platform.twitter.com/widgets.js" */}
      {/*   charSet="utf-8" */}
      {/* ></script> */}
    </>
  );
}
