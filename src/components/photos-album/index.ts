import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { repeat } from "lit/directives/repeat.js";

type Image = {
  image: string;
};

export default class PhotosAlbum extends LitElement {
  @property({ type: Object })
  config?: {
    title: string;
    subtitle: string;
    content_bg: string;
    images: Image[];
    show_button: boolean;
    button_text: string;
    button_link: string;
    button_bg_color: string;
    button_text_color: string;
    custom_css?: string;
  };

  static styles = css`
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

  render() {
    if (!this.config) {
      return html``;
    }

    const images = this.config.images || [];
    const largeImage = images[0] ? images[0].image : "";
    const bottomImages = images.slice(1);

    return html`
      ${this.config?.custom_css
        ? unsafeHTML(`<style>${this.config.custom_css}</style>`)
        : ""}
      <section class="s-block s-block-photos-album">
        <div class="container">
          <div class="s-block-photos-album__main">
            <div
              class="s-block-photos-album__content"
              style=${styleMap({ backgroundColor: this.config.content_bg })}
            >
              <h2 class="s-block-photos-album__title">
                ${this.config.title}
              </h2>
              <p class="s-block-photos-album__subtitle">
                ${this.config.subtitle}
              </p>
              ${this.config.show_button
                ? html`
                    <a
                      href="${this.config.button_link}"
                      class="s-block-photos-album__button"
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
            ${largeImage
              ? html`
                  <div class="s-block-photos-album__large-image-wrapper">
                    <img
                      src="${largeImage}"
                      alt="Large Image"
                      class="s-block-photos-album__large-image"
                    />
                  </div>
                `
              : ""}
          </div>
          ${bottomImages.length > 0
            ? html`
                <div class="s-block-photos-album__bottom-images">
                  ${repeat(
                    bottomImages,
                    (img, index) => index,
                    (img, index) => html`
                      <div class="s-block-photos-album__small-image-wrapper">
                        <img
                          src="${img.image}"
                          alt="Small Image ${index + 1}"
                          class="s-block-photos-album__small-image"
                        />
                      </div>
                    `,
                  )}
                </div>
              `
            : ""}
        </div>
      </section>
    `;
  }
}
