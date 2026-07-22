import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

type Stat = {
  icon_color: string;
  text_color: string;
  value: string;
  label: string | Record<string, string>;
  icon: string;
};

export default class SallaStatistics extends LitElement {
  @property({ type: Object })
  config?: {
    component_bg: string;
    stats: Stat[];
    show_button: boolean;
    button_text: { ar: string; en?: string };
    button_link: string;
    button_bg_color: string;
    button_text_color: string;
    custom_css?: string;
  };

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute(
      "style",
      `--stats-bg-color: ${this.config?.component_bg}`,
    );
    this.className = "s-block s-block-statistics";
  }

  static styles = css``;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }
  render() {
    if (!this.config || !this.config.stats) {
      return html``;
    }
    
    return html`
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
            (stat) => html`
              <div
                class="s-block-statistics__stat"
                style=${styleMap({ "--stat-icon-color": stat.icon_color, "--stat-text-color": stat.text_color })}
              >
                <i class="s-block-statistics__icon ${stat.icon}"></i>
                <p class="s-block-statistics__value">${stat.value}</p>
                <p class="s-block-statistics__label">${typeof stat.label === "string" ? stat.label : (stat.label[document.documentElement.lang] || stat.label.ar)}</p>
              </div>
            `,
          )}
        </div>
        ${this.config.show_button
          ? html`
              <a
                href="${this.config.button_link}"
                class="s-block-statistics__button"
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
    `;
  }
}
