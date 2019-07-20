// prism theme
import { wrapRootElement as wrap } from "./src/components/wrap-root-element";

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = wrap;

import { onRouteUpdate as routeUpdate } from "./plugins/twitter-embeds/gatsby-browser";

export const onRouteUpdate = (attrs) => {
  setTimeout(() => {
    routeUpdate(attrs)
  }, 1000);
};
