class CharacterCard extends HTMLElement {
  connectedCallback() {
    const name1 = this.getAttribute("name1");
    const name2 = this.getAttribute("name2");
    const bgColor = this.getAttribute("bgColor");
    const description = this.getAttribute("description");
    const imgSrc = this.getAttribute("imgSrc");

    this.innerHTML = `
    <div class="card">
      <div class="txt-box" style="background-color: ${bgColor}">
        <div class="txt-1">${name1}<span class="small">${name2}</span></div>
        <div class="txt-2">
          ${description}
        </div>
      </div>
      <div class="image">
        <img
          src=${imgSrc}
          alt=""
        />
      </div>
    </div>`;
  }
}

window.customElements.define("character-card", CharacterCard);
