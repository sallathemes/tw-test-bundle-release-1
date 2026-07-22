import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

export default class TextContent extends LitElement {
  @property({ type: Object })
  config?: {
    title: string;
    title_font_size: string;
    subtitle: string;
    subtitle_font_size: string;
    content_align: string;
    show_button: boolean;
    button_text: string;
    button_link: string;
    button_bg_color: string;
    button_text_color: string;
    custom_css?: string;
    background_color: string;
    content_color: string;
  };

  static styles = css`
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
  connectedCallback(): void {
    super.connectedCallback();
    this.className = "s-block s-block-simple-section";
    this.updateHostStyles();
  }

  private updateHostStyles(): void {
    if (!this.config) return;
    
    try {
      if (this.config.background_color) {
        this.style.backgroundColor = this.config.background_color;
      }
      if (this.config.content_color) {
        this.style.color = this.config.content_color;
      }
    } catch (error) {
      console.warn('Failed to update host styles:', error);
    }
  }

  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('config')) {
      this.updateHostStyles();
    }
  }

  render() {
    if (!this.config) {
      return html``;
    }

    return html`
      ${this.config?.custom_css
        ? unsafeHTML(`<style>${this.config.custom_css}</style>`)
        : ""}
      <div class="container">
        <div
          class="s-block-simple-section__content"
          style=${styleMap({
            "--content-align": this.config.content_align,
            "--title-font-size": `${this.config.title_font_size}px`,
            "--subtitle-font-size": `${this.config.subtitle_font_size}px`,
          })}
        >
          <h2 class="s-block-simple-section__title">${this.config.title}</h2>
          <p class="s-block-simple-section__subtitle">
            ${this.config.subtitle}
          </p>
          ${this.config.show_button
            ? html`
                <a
                  href="${this.config.button_link}"
                  class="s-block-simple-section__button"
                  style=${styleMap({
                    backgroundColor: this.config.button_bg_color,
                    color: this.config.button_text_color,
                  })}
                >
                  ${this.config.button_text}
                </a>
              `
            : ""}
        </div>
      </div>
    `;
  }
}
