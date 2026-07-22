import { LitElement as p, css as m, html as i } from "lit";
import { property as h, state as b } from "lit/decorators.js";
import { repeat as f } from "lit/directives/repeat.js";
import { unsafeHTML as n } from "lit/directives/unsafe-html.js";
const w = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.57591 0.269531V1.77783H10.1008V0.269531H11.6091V1.77783H14.6257C15.0422 1.77783 15.3798 2.11547 15.3798 2.53197V14.5983C15.3798 15.0149 15.0422 15.3525 14.6257 15.3525H1.05102C0.634522 15.3525 0.296875 15.0149 0.296875 14.5983V2.53197C0.296875 2.11547 0.634522 1.77783 1.05102 1.77783H4.06761V0.269531H5.57591ZM13.8715 7.81101H1.80517V13.8442H13.8715V7.81101ZM4.82176 10.0735V11.5817H3.31347V10.0735H4.82176ZM12.3632 10.0735V11.5817H6.33006V10.0735H12.3632ZM4.06761 3.28612H1.80517V6.30271H13.8715V3.28612H11.6091V4.79442H10.1008V3.28612H5.57591V4.79442H4.06761V3.28612Z" fill="#666666"/>
</svg>`, y = `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.94345 14.5204L0.953125 15.4072L1.83986 11.4168C1.27397 10.3586 0.953125 9.14963 0.953125 7.8657C0.953125 3.70065 4.32956 0.324219 8.4946 0.324219C12.6596 0.324219 16.0361 3.70065 16.0361 7.8657C16.0361 12.0307 12.6596 15.4072 8.4946 15.4072C7.21067 15.4072 6.00169 15.0864 4.94345 14.5204ZM5.16183 12.9268L5.65469 13.1904C6.5206 13.6534 7.48819 13.8989 8.4946 13.8989C11.8267 13.8989 14.5278 11.1977 14.5278 7.8657C14.5278 4.53366 11.8267 1.83251 8.4946 1.83251C5.16257 1.83251 2.46142 4.53366 2.46142 7.8657C2.46142 8.87211 2.70689 9.83968 3.16993 10.7056L3.43349 11.1984L2.93967 13.4206L5.16183 12.9268Z" fill="#666666"/>
</svg>`, u = `<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7992 5.84987H15.6259C16.459 5.84987 17.1342 6.52516 17.1342 7.35814V8.94517C17.1342 9.14215 17.0956 9.33725 17.0206 9.51945L14.687 15.1868C14.5706 15.4694 14.2952 15.6538 13.9896 15.6538H1.29712C0.880616 15.6538 0.542969 15.3161 0.542969 14.8996V7.35814C0.542969 6.94166 0.880616 6.60402 1.29712 6.60402H3.92294C4.16798 6.60402 4.39774 6.48496 4.53905 6.28477L8.65172 0.458486C8.75918 0.306247 8.96175 0.255336 9.12841 0.338673L10.4965 1.02271C11.2896 1.41926 11.6992 2.31487 11.4804 3.17417L10.7992 5.84987ZM5.06786 7.8012V14.1455H13.4846L15.6259 8.94517V7.35814H10.7992C9.81529 7.35814 9.09485 6.43128 9.33754 5.47776L10.0188 2.80206C10.0625 2.6302 9.9806 2.45108 9.82193 2.37177L9.32336 2.12247L5.77129 7.15458C5.58282 7.42157 5.34192 7.64042 5.06786 7.8012ZM3.55956 8.11229H2.05126V14.1455H3.55956V8.11229Z" fill="#666666"/>
</svg>`, k = `<svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2304 16.1066H10.7221V14.5983C10.7221 13.3488 9.70923 12.3359 8.45969 12.3359H3.9348C2.68529 12.3359 1.67236 13.3488 1.67236 14.5983V16.1066H0.164062V14.5983C0.164062 12.5158 1.85228 10.8276 3.9348 10.8276H8.45969C10.5422 10.8276 12.2304 12.5158 12.2304 14.5983V16.1066ZM6.19724 9.3193C3.69822 9.3193 1.67236 7.29344 1.67236 4.79442C1.67236 2.29539 3.69822 0.269531 6.19724 0.269531C8.69626 0.269531 10.7221 2.29539 10.7221 4.79442C10.7221 7.29344 8.69626 9.3193 6.19724 9.3193ZM6.19724 7.81101C7.86323 7.81101 9.21383 6.46043 9.21383 4.79442C9.21383 3.1284 7.86323 1.77783 6.19724 1.77783C4.53123 1.77783 3.18065 3.1284 3.18065 4.79442C3.18065 6.46043 4.53123 7.81101 6.19724 7.81101Z" fill="#666666"/>
</svg>`;
var v = Object.defineProperty, c = (d, o, s, r) => {
  for (var e = void 0, t = d.length - 1, a; t >= 0; t--)
    (a = d[t]) && (e = a(o, s, e) || e);
  return e && v(o, s, e), e;
};
const _ = class _ extends p {
  constructor() {
    super(...arguments), this.isLoading = !1, this._sliderConfig = {
      spaceBetween: 15
    };
  }
  firstUpdated() {
    this._sliderConfig = {
      ...this._sliderConfig
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.className = "s-block s-block-blog", this.setAttribute("style", "background-color: #eee;display: block;"), this.getArticles();
  }
  async getArticles() {
    var o, s, r;
    if ((s = (o = this.config) == null ? void 0 : o.posts) != null && s.length && !((r = this.config.posts[0]) != null && r.url)) {
      this.isLoading = !0;
      try {
        const e = await window.Salla.api.request(
          `/blog/articles?${this.config.posts.map((t) => `ids[]=${t.value}`).join("&")}`,
          {},
          "get"
        );
        this.config.posts = e.data, this.requestUpdate(), this.isLoading = !1;
      } catch (e) {
        this.isLoading = !1, this.requestUpdate(), console.error("Failed to fetch articles:", e);
      }
    }
  }
  render() {
    var o, s, r, e;
    return this.isLoading ? i`<div class="container">
        <h2 class="s-block-blog__title">${(o = this.config) == null ? void 0 : o.title}</h2>
        <salla-loading></salla-loading>
      </div>` : (r = (s = this.config) == null ? void 0 : s.posts) != null && r.length ? i`
      ${(e = this.config) != null && e.custom_css ? n(`<style>${this.config.custom_css}</style>`) : ""}

      <div class="container">
        <h2 class="s-block-blog__title">${this.config.title}</h2>
        <salla-slider
          type="carousel"
          show-controls="false"
          .sliderConfig=${this._sliderConfig}
        >
          <div slot="items">
            ${f(
      this.config.posts,
      (t) => t.id,
      (t) => {
        var a;
        return i`
                <div class="s-block-blog__post">
                  <article class="s-block-blog__post-entry">
                    <a
                      href="${window.Salla.url.get(
          `/blog/${t.id}`
        )}"
                      class="s-block-blog__post-entry__image"
                    >
                      <img src="${typeof t.image == "object" ? t.image.url : t.image}" alt="${t.title || t.name}" />
                    </a>
                    <div class="s-block-blog__post-entry__content">
                      <div class="s-block-blog__post-entry__meta">
                        <div class=" s-block-blog__post-entry__icons">
                          ${n(w)}
                          <span>${typeof t.created_at == "object" ? t.created_at.formatted : t.created_at}</span>
                        </div>
                        <a href="#" class="s-block-blog__post-entry__icons">
                          ${n(k)}
                          <span>${typeof t.author == "object" ? t.author.name : t.author}</span>
                        </a>
                      </div>
                      <h3 class="s-block-blog__post-entry__title">
                        <a
                          href="${window.Salla.url.get(
          `/blog/${t.id}`
        )}"
                          >${t.title || t.name}</a
                        >
                      </h3>
                      <p class="s-block-blog__post-entry__summary">
                        ${t.summary}
                      </p>
                      ${(a = this.config) != null && a.posts.some(
          (g) => g.likes_count || g.comments_count
        ) ? i`
                            <div
                              class="s-block-blog__post-entry__icons-wrapper"
                            >
                              ${t.likes_count ? i`
                                    <div
                                      class="s-block-blog__post-entry__icons"
                                    >
                                      ${n(u)} ${t.likes_count}
                                    </div>
                                  ` : ""}
                              ${t.comments_count ? i`
                                    <div
                                      class="s-block-blog__post-entry__icons"
                                    >
                                      ${n(y)}
                                      ${t.comments_count}
                                    </div>
                                  ` : ""}
                            </div>
                          ` : ""}
                    </div>
                  </article>
                </div>
              `;
      }
    )}
          </div>
        </salla-slider>
      </div>
    ` : i``;
  }
};
_.styles = m`
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
let l = _;
c([
  h({ type: Object })
], l.prototype, "config");
c([
  b()
], l.prototype, "isLoading");
c([
  b()
], l.prototype, "_sliderConfig");
typeof l < "u" && l.registerSallaComponent("salla-blog");
export {
  l as default
};
