import { LitElement as b, css as f, html as e } from "lit";
import { property as d } from "lit/decorators.js";
import { styleMap as a } from "lit/directives/style-map.js";
var p = Object.defineProperty, m = (l, t, r, _) => {
  for (var s = void 0, i = l.length - 1, n; i >= 0; i--)
    (n = l[i]) && (s = n(t, r, s) || s);
  return s && p(t, r, s), s;
};
const c = class c extends b {
  connectedCallback() {
    var t;
    super.connectedCallback(), this.setAttribute(
      "style",
      `--stats-bg-color: ${(t = this.config) == null ? void 0 : t.component_bg}`
    ), this.className = "s-block s-block-statistics";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return !this.config || !this.config.stats ? e`` : e`
      <style>
        .s-block-statistics {
          display: block;
          padding: 3rem 0;
          background-color: var(--stats-bg-color, #1a2a44);
          text-align: center;
        }
        .s-block-statistics__wrapper {
          display: flex;
          justify-content: space-around;
          align-items: center;

          flex-wrap: wrap;
        }

        .s-block-statistics__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--stat-text-color, #ffc107);
        }

        .s-block-statistics__icon {
          font-size: 2rem;
          color: var(--stat-icon-color, #ffc107);
          margin-bottom: 0.5rem;
        }

        .s-block-statistics__value {
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0;
          line-height: 1.4;
        }

        .s-block-statistics__label {
          font-size: 0.875rem;
          margin: 0;
        }

        .s-block-statistics__button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: none;
          margin-top: 3rem;
          display: inline-block;
        }

        @media (max-width: 767px) {
          .s-block-statistics {
            flex-direction: column;
            gap: 1rem;
          }
        }
      </style>

      <div class="container">
        <div class="s-block-statistics__wrapper">
          ${this.config.stats.map(
      (t) => e`
              <div
                class="s-block-statistics__stat"
                style=${a({ "--stat-icon-color": t.icon_color, "--stat-text-color": t.text_color })}
              >
                <i class="s-block-statistics__icon ${t.icon}"></i>
                <p class="s-block-statistics__value">${t.value}</p>
                <p class="s-block-statistics__label">${typeof t.label == "string" ? t.label : t.label[document.documentElement.lang] || t.label.ar}</p>
              </div>
            `
    )}
        </div>
        ${this.config.show_button ? e`
              <a
                href="${this.config.button_link}"
                class="s-block-statistics__button"
                style=${a({
      backgroundColor: this.config.button_bg_color,
      color: this.config.button_text_color
    })}
              >
                ${this.config.button_text}
              </a>
            ` : ""}
      </div>
    `;
  }
};
c.styles = f``;
let o = c;
m([
  d({ type: Object })
], o.prototype, "config");
typeof o < "u" && o.registerSallaComponent("salla-statistics");
export {
  o as default
};
