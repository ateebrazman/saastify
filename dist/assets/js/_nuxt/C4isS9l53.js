import { k as e } from "./QgQWmE83.js";
import { Ma as t, Yi as n } from "./BtP95aSo.js";
var r = () => {
    try {
      let { hostname: e } = window.location;
      if (e === `localhost` || /^\d+(\.\d+){3}$/.test(e)) return;
      let t = e.split(`.`);
      return t.length >= 2 ? `.${t.slice(-2).join(`.`)}` : void 0;
    } catch {
      return;
    }
  },
  i = () => {
    let { setModeOnly: i } = e();
    return {
      setPageThemeMode: (e) => {
        let a = { path: `/`, domain: r() },
          o = t.get(n);
        if ((i(e, !1), o === void 0)) {
          t.remove(n, a);
          return;
        }
        o !== e && t.set(n, o, { ...a, expires: 365, sameSite: `Lax` });
      },
    };
  };
export { i as t };
