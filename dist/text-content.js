import { LitElement as p, css as f, html as s } from "lit";
import { property as m } from "lit/decorators.js";
import { styleMap as a } from "lit/directives/style-map.js";
import { unsafeHTML as b } from "lit/directives/unsafe-html.js";
var d = Object.defineProperty, h = (c, t, l, _) => {
  for (var i = void 0, o = c.length - 1, r; o >= 0; o--)
    (r = c[o]) && (i = r(t, l, i) || i);
  return i && d(t, l, i), i;
};
const n = class n extends p {
  connectedCallback() {
    super.connectedCallback(), this.className = "s-block s-block-simple-section", this.updateHostStyles();
  }
  updateHostStyles() {
    if (this.config)
      try {
        this.config.background_color && (this.style.backgroundColor = this.config.background_color), this.config.content_color && (this.style.color = this.config.content_color);
      } catch (t) {
        console.warn("Failed to update host styles:", t);
      }
  }
  updated(t) {
    super.updated(t), t.has("config") && this.updateHostStyles();
  }
  render() {
    var t;
    return this.config ? s`
      ${(t = this.config) != null && t.custom_css ? b(`<style>${this.config.custom_css}</style>`) : ""}
      <div class="container">
        <div
          class="s-block-simple-section__content"
          style=${a({
      "--content-align": this.config.content_align,
      "--title-font-size": `${this.config.title_font_size}px`,
      "--subtitle-font-size": `${this.config.subtitle_font_size}px`
    })}
        >
          <h2 class="s-block-simple-section__title">${this.config.title}</h2>
          <p class="s-block-simple-section__subtitle">
            ${this.config.subtitle}
          </p>
          ${this.config.show_button ? s`
                <a
                  href="${this.config.button_link}"
                  class="s-block-simple-section__button"
                  style=${a({
      backgroundColor: this.config.button_bg_color,
      color: this.config.button_text_color
    })}
                >
                  ${this.config.button_text}
                </a>
              ` : ""}
        </div>
      </div>
    ` : s``;
  }
};
n.styles = f`
    :host {
      display: block;
    }

    .container {
      width: calc(100% - 2rem);
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .s-block-simple-section {
      padding: 2rem 0;
    }

    .s-block-simple-section__content {
      text-align: var(--content-align, right);
    }

    .s-block-simple-section__title {
      font-size: var(--title-font-size, 30px);
      margin-bottom: 1rem;
      font-weight: 600;
      line-height: 1.3;
    }

    .s-block-simple-section__subtitle {
      font-size: var(--subtitle-font-size, 20px);
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .s-block-simple-section__button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.25rem;
      font-size: 16px;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      font-weight: 500;
      transition: opacity 0.2s ease;
    }

    .s-block-simple-section__button:hover {
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .s-block-simple-section {
        padding: 1.5rem 0;
      }

      .s-block-simple-section__title {
        font-size: calc(var(--title-font-size, 30px) * 0.8);
      }

      .s-block-simple-section__subtitle {
        font-size: calc(var(--subtitle-font-size, 20px) * 0.9);
      }
    }

    @media (max-width: 480px) {
      .s-block-simple-section {
        padding: 1rem 0;
      }

      .s-block-simple-section__content {
        text-align: center;
      }
    }
  `;
let e = n;
h([
  m({ type: Object })
], e.prototype, "config");
typeof e < "u" && e.registerSallaComponent("salla-text-content");
export {
  e as default
};
