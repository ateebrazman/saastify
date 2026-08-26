import { an as e, hn as t } from "./QgQWmE83.js";
import { Io as n, as as r, lo as i, os as a } from "./BtP95aSo.js";
function o() {
  return n(a().public[`nuxt-schema-org`], { scriptAttributes: {} });
}
function s(n) {
  let a = o(),
    s = r(),
    c = n;
  e(n) && (c = () => s.runWithContext(() => t(n)));
  let l = {
    type: `application/ld+json`,
    key: `schema-org-graph`,
    nodes: c,
    tagPriority: `high`,
    ...a.scriptAttributes,
  };
  if (a?.reactive) return i({ script: [l] });
}
export { s as t };
