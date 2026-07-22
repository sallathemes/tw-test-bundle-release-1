import { LitElement as s, html as l } from "lit";
import { property as d } from "lit/decorators.js";
import { unsafeHTML as c } from "lit/directives/unsafe-html.js";
var f = Object.defineProperty, p = (r, t, o, m) => {
  for (var e = void 0, n = r.length - 1, i; n >= 0; n--)
    (i = r[n]) && (e = i(t, o, e) || e);
  return e && f(t, o, e), e;
};
class a extends s {
  connectedCallback() {
    super.connectedCallback(), this.className = "s-block s-block-html-content";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    var o;
    if (!((o = this.config) != null && o.code))
      return l``;
    const t = window.Salla.config.get("store");
    return t.ray < 50 || t.url.includes("salla.") && window.Salla.config.get("theme.mode") !== "edit" ? l`
        <div style="padding: 24px; border: 1px dashed #d1d5db; border-radius: 8px; text-align: center; background-color: #f9fafb; color: #6b7280;">
          <p style="margin: 0; font-size: 14px;">
            يتطلب هذا العنصر انت تكون لديك ميزة <strong style="color: #374151;">CSS Custom</strong> للعمل بشكل صحيح.
          </p>
        </div>
      ` : l`${c(this.config.code)}`;
  }
}
p([
  d({ type: Object })
], a.prototype, "config");
typeof a < "u" && a.registerSallaComponent("salla-html-content");
export {
  a as default
};
