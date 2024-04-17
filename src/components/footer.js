class CommonFooter extends HTMLElement {
  connectedCallback() {
    let title = this.getAttribute("title");

    this.innerHTML = `
    <div class="common-footer">
      <div class="footer-container">
        <div class="group1">
          <span class="txt1">고객센터</span><span class="txt2">1599-0533</span
          ><span class="txt3">(AM 09:00 ~ PM 07:00)</span>
        </div>
        <div class="group2">
          <a href="#" class="link dark">회사소개</a>
          <a href="#" class="link dark">이용약관</a>
          <a href="#" class="link dark">개인정보 처리방침</a>
          <a href="#" class="link dark">사업자정보</a>
        </div>
        <div class="group3">
          경기도 성남시 수정구 창업로 43, A동 807~810호 (판교글로벌비즈센터)<br />
          대표이사 김용환 ㅣ 사업자 등록 번호 119-86-01044 ㅣ FAX :
          070-0826-8660 ㅣ Mail : rgmanager@readinggate.com
        </div>
      </div>
    </div>`;
  }
}

window.customElements.define("common-footer", CommonFooter);
