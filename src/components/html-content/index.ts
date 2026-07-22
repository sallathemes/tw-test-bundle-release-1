import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

export default class HtmlContent extends LitElement {
  @property({ type: Object })
  config?: {
    code: string;
  };

  connectedCallback(): void {
    super.connectedCallback();
    this.className = "s-block s-block-html-content";
  }

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    //it's empty or plus/basic
    if (!this.config?.code) {
      return html``;
    }

    const store: any = (window as any).Salla.config.get('store');

    //it doesn't have custom domain, and it's not on the edit mode
    if (store.ray < 50 || (store.url.includes('salla.') && (window as any).Salla.config.get('theme.mode') !== 'edit')) {
      return html`
        <div style="padding: 24px; border: 1px dashed #d1d5db; border-radius: 8px; text-align: center; background-color: #f9fafb; color: #6b7280;">
          <p style="margin: 0; font-size: 14px;">
            يتطلب هذا العنصر انت تكون لديك ميزة <strong style="color: #374151;">CSS Custom</strong> للعمل بشكل صحيح.
          </p>
        </div>
      `;
    }

    return html`${unsafeHTML(this.config.code)}`;
  }
}
