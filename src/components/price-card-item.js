class PriceCardItem extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title");
    const price1 = this.getAttribute("price1");
    const price2 = this.getAttribute("price2");
    const badgeTxt = this.getAttribute("badgeTxt");

    this.innerHTML = `
    <div class="price-card-item">
      <div class="card-item-container">
        <div class="title">${title}</div>
        <div class="comment">최대 할인 적용 시</div>
        <div class="group">
          <div class="txt-price1">${price1}원</div>
          <div class="txt-price2">${price2}원</div>
        </div>
        <div class="${badgeTxt ? "badge" : "d-none"}">${badgeTxt}</div>
        <button class="btn purple-gradient m-t-40">구매하기</button>
      </div>
    </div>`;
  }
}

window.customElements.define("price-card-item", PriceCardItem);
