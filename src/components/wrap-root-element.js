import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Embed from "./embed";
import Tweet from "./tweet";

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={{ Embed, Tweet }}>{element}</MDXProvider>
);
