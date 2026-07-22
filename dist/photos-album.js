import { LitElement as b, css as p, html as a } from "lit";
import { property as g } from "lit/decorators.js";
import { styleMap as c } from "lit/directives/style-map.js";
import { unsafeHTML as h } from "lit/directives/unsafe-html.js";
import { repeat as _ } from "lit/directives/repeat.js";
var d = Object.defineProperty, u = (n, t, l, r) => {
  for (var o = void 0, s = n.length - 1, e; s >= 0; s--)
    (e = n[s]) && (o = e(t, l, o) || o);
  return o && d(t, l, o), o;
};
const m = class m extends b {
  render() {
    var o;
    if (!this.config)
      return a``;
    const t = this.config.images || [], l = t[0] ? t[0].image : "", r = t.slice(1);
    return a`
      ${(o = this.config) != null && o.custom_css ? h(`<style>${this.config.custom_css}</style>`) : ""}
      <section class="s-block s-block-photos-album">
        <div class="container">
          <div class="s-block-photos-album__main">
            <div
              class="s-block-photos-album__content"
              style=${c({ backgroundColor: this.config.content_bg })}
            >
              <h2 class="s-block-photos-album__title">
                ${this.config.title}
              </h2>
              <p class="s-block-photos-album__subtitle">
                ${this.config.subtitle}
              </p>
              ${this.config.show_button ? a`
                    <a
                      href="${this.config.button_link}"
                      class="s-block-photos-album__button"
                      style=${c({
      backgroundColor: this.config.button_bg_color,
      color: this.config.button_text_color
    })}
                    >
                      ${this.config.button_text}
                    </a>
                  ` : ""}
            </div>
            ${l ? a`
                  <div class="s-block-photos-album__large-image-wrapper">
                    <img
                      src="${l}"
                      alt="Large Image"
                      class="s-block-photos-album__large-image"
                    />
                  </div>
                ` : ""}
          </div>
          ${r.length > 0 ? a`
                <div class="s-block-photos-album__bottom-images">
                  ${_(
      r,
      (s, e) => e,
      (s, e) => a`
                      <div class="s-block-photos-album__small-image-wrapper">
                        <img
                          src="${s.image}"
                          alt="Small Image ${e + 1}"
                          class="s-block-photos-album__small-image"
                        />
                      </div>
                    `
    )}
                </div>
              ` : ""}
        </div>
      </section>
    `;
  }
};
m.styles = p`
    :host {
      display: block;
    }

    .container {
      width: calc(100% - 2rem);
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .s-block-photos-album {
      padding: 3rem 0;
    }

    .s-block-photos-album__main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
      height: 400px;
    }

    .s-block-photos-album__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2.5rem;
      color: #ffffff;
      border-radius: 0.5rem;
    }

    .s-block-photos-album__large-image-wrapper {
      height: 100%;
      border-radius: 0.5rem;
      overflow: hidden;
      position: relative;
    }

    .s-block-photos-album__large-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .s-block-photos-album__large-image-wrapper:hover
      .s-block-photos-album__large-image {
      transform: scale(1.1);
    }

    .s-block-photos-album__title {
      font-size: 2rem;
      font-weight: 700;
      margin: 0 0 1.5rem 0;
      line-height: 1.3;
    }

    .s-block-photos-album__subtitle {
      font-size: 1.125rem;
      margin: 0 0 2rem 0;
      line-height: 1.6;
      opacity: 0.95;
    }

    .s-block-photos-album__button {
      padding: 0.875rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      align-self: flex-start;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .s-block-photos-album__button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .s-block-photos-album__bottom-images {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1.5rem;
    }

    .s-block-photos-album__small-image-wrapper {
      height: 250px;
      border-radius: 0.5rem;
      overflow: hidden;
      position: relative;
    }

    .s-block-photos-album__small-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .s-block-photos-album__small-image-wrapper:hover
      .s-block-photos-album__small-image {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      .s-block-photos-album__main {
        grid-template-columns: 1fr;
        height: auto;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
      }

      .s-block-photos-album__content {
        padding: 2rem 1.5rem;
      }

      .s-block-photos-album__large-image-wrapper {
        width: 100%;
        height: 300px;
      }

      .s-block-photos-album__title {
        font-size: 1.5rem;
      }

      .s-block-photos-album__subtitle {
        font-size: 1rem;
      }

      .s-block-photos-album__bottom-images {
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
      }

      .s-block-photos-album__small-image-wrapper {
        height: 180px;
      }
    }

    @media (max-width: 480px) {
      .s-block-photos-album {
        padding: 2rem 0;
      }

      .s-block-photos-album__content {
        padding: 1.5rem;
      }

      .s-block-photos-album__bottom-images {
        flex-direction: column;
        gap: 1rem;
      }

      .s-block-photos-album__small-image-wrapper {
        width: 100%;
        height: 200px;
      }
    }
  `;
let i = m;
u([
  g({ type: Object })
], i.prototype, "config");
typeof i < "u" && i.registerSallaComponent("salla-photos-album");
export {
  i as default
};
