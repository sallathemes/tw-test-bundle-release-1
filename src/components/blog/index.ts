import { css, html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { calendar, comment, like, user } from "./icons";

type Post = {
  id: number;
  url: string;
  image: { url: string; alt: string };
  created_at: string;
  author: String;
  name: string;
  summary: string;
  likes_count?: number;
  comments_count?: number;
  value: number;
  label: string;
  key: number;
};

export default class Blog extends LitElement {
  @property({ type: Object })
  config?: {
    posts: Post[];
    custom_css?: string;
    title?: string;
  };

  @state()
  private isLoading = false;

  @state()
  private _sliderConfig = {
    spaceBetween: 15,
  };

  firstUpdated() {
    this._sliderConfig = {
      ...this._sliderConfig,
    };
  }
  connectedCallback(): void {
    super.connectedCallback();
    this.className = "s-block s-block-blog";
    this.setAttribute("style", `background-color: #eee;display: block;`);
    this.getArticles();
  }

  static styles = css`
    .container {
      width: calc(100% - 2rem);
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .swiper:not(.swiper-initialized) {
      opacity: 0;
    }
    salla-slider [slot="items"] {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
    @media (max-width: 991px) {
      salla-slider [slot="items"] {
        display: none;
      }
    }

    .s-block-blog__title {
      text-align: center;
    }

    .s-block-blog .swiper-wrapper {
      padding: 2rem 0;
    }

    .s-block-blog__post {
      height: auto;
      width: 100%;
      background-color: #fff;
      margin-bottom: 2rem;
      border-radius: 0.5rem;
      overflow: hidden;
      position: relative;
    }

    @media (min-width: 640px) {
      salla-slider .s-block-blog__post {
        width: 50%;
      }
    }

    @media (min-width: 768px) {
      salla-slider .s-block-blog__post {
        width: 32.333333%;
      }
    }

    @media (min-width: 1024px) {
      salla-slider .s-block-blog__post {
        width: 32.333333%;
      }
    }

    .s-block-blog__post-entry {
      position: relative;
      height: 100%;
      transition: box-shadow 0.5s;
      background-color: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .s-block-blog__post-entry:hover {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .s-block-blog__post-entry__image {
      position: relative;
      overflow: hidden;
      height: 14rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #e5e7eb;
    }

    .s-block-blog__post-entry__image img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .s-block-blog__post-entry__content {
      flex: 1;
      padding: 1.25rem 1.25rem 1.75rem;
    }

    .s-block-blog__post-entry__meta {
      display: inline-flex;
      gap: 1.25rem;
      color: var(--store-text-secondary, #6b7280);
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }

    .s-block-blog__post-entry__meta .sicon-calendar-date,
    .s-block-blog__post-entry__meta .sicon-user {
      margin: 0 0.25rem;
    }
    .s-block-blog__post-entry__icons-wrapper {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .s-block-blog__post-entry__icons {
      display: flex;
      gap: 0.4rem;
      align-items: center;
      color: #6b7280;
    }

    .s-block-blog__post-entry__meta a:hover {
      color: #111827;
    }

    .s-block-blog__post-entry__title {
      font-size: 18px;
      font-weight: 700;
      color: #111827;
      margin-top: 0;
      margin-bottom: 1rem;
    }

    .s-block-blog__post-entry__title a {
      color: #111827;
      text-decoration: none;
    }

    .s-block-blog__post-entry__summary {
      font-size: 14px;
      color: #6b7280;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .s-block-blog__post-entry__icons .sicon-thumbs-up,
    .s-block-blog__post-entry__icons .sicon-chat {
      margin-right: 0.25rem;
    }

    .s-block-blog__post-entry__read-more {
      display: flex;
      align-items: center;
      color: #6b7280;
      text-decoration: none;
    }

    .s-block-blog__post-entry__read-more .sicon-keyboard_arrow_left {
      margin-left: 0.25rem;
    }

    @media (max-width: 767px) {
      .s-block-blog__post {
        width: 100%;
      }
    }
  `;

  private async getArticles() {
    if (!this.config?.posts?.length) {
      return;
    }

    // Posts already contain full article data, no need to fetch
    if (this.config.posts[0]?.url) {
      return;
    }

    this.isLoading = true;

    try {
      const response = await (window as any).Salla.api.request(
        `/blog/articles?${this.config.posts.map((post) => `ids[]=${post.value}`).join("&")}`,
        {},
        "get",
      );

      this.config.posts = response.data;
      this.requestUpdate();
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      this.requestUpdate();
      console.error("Failed to fetch articles:", error);
    }
  }

  render() {
    if (this.isLoading) {
      return html`<div class="container">
        <h2 class="s-block-blog__title">${this.config?.title}</h2>
        <salla-loading></salla-loading>
      </div>`;
    }

    if (!this.config?.posts?.length) {
      return html``;
    }

    return html`
      ${this.config?.custom_css
        ? unsafeHTML(`<style>${this.config.custom_css}</style>`)
        : ""}

      <div class="container">
        <h2 class="s-block-blog__title">${this.config.title}</h2>
        <salla-slider
          type="carousel"
          show-controls="false"
          .sliderConfig=${this._sliderConfig}
        >
          <div slot="items">
            ${repeat(
              this.config.posts,
              (post) => post.id,
              (post) => html`
                <div class="s-block-blog__post">
                  <article class="s-block-blog__post-entry">
                    <a
                      href="${(window as any).Salla.url.get(
                        `/blog/${post.id}`,
                      )}"
                      class="s-block-blog__post-entry__image"
                    >
                      <img src="${typeof post.image === "object" ? post.image.url : post.image}" alt="${post.title || post.name}" />
                    </a>
                    <div class="s-block-blog__post-entry__content">
                      <div class="s-block-blog__post-entry__meta">
                        <div class=" s-block-blog__post-entry__icons">
                          ${unsafeHTML(calendar)}
                          <span>${typeof post.created_at === "object" ? post.created_at.formatted : post.created_at}</span>
                        </div>
                        <a href="#" class="s-block-blog__post-entry__icons">
                          ${unsafeHTML(user)}
                          <span>${typeof post.author === "object" ? post.author.name : post.author}</span>
                        </a>
                      </div>
                      <h3 class="s-block-blog__post-entry__title">
                        <a
                          href="${(window as any).Salla.url.get(
                            `/blog/${post.id}`,
                          )}"
                          >${post.title || post.name}</a
                        >
                      </h3>
                      <p class="s-block-blog__post-entry__summary">
                        ${post.summary}
                      </p>
                      ${this.config?.posts.some(
                        (p) => p.likes_count || p.comments_count,
                      )
                        ? html`
                            <div
                              class="s-block-blog__post-entry__icons-wrapper"
                            >
                              ${post.likes_count
                                ? html`
                                    <div
                                      class="s-block-blog__post-entry__icons"
                                    >
                                      ${unsafeHTML(like)} ${post.likes_count}
                                    </div>
                                  `
                                : ""}
                              ${post.comments_count
                                ? html`
                                    <div
                                      class="s-block-blog__post-entry__icons"
                                    >
                                      ${unsafeHTML(comment)}
                                      ${post.comments_count}
                                    </div>
                                  `
                                : ""}
                            </div>
                          `
                        : ""}
                    </div>
                  </article>
                </div>
              `,
            )}
          </div>
        </salla-slider>
      </div>
    `;
  }
}
