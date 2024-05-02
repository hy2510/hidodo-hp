class GlobalNavBar extends HTMLElement {
  connectedCallback() {
    let title = this.getAttribute("title");

    this.innerHTML = `
    <div class="global-nav-bar">
      <div class="gnb-container">
        <div class="group1">
          <span class="logo"></span>
        </div>
        <div class="group2">
          <div class="gnb-item active">
            <span>하이도도</span>
            <div class="menu">
              <div class="menu-item active">하이도도</div>
              <div class="menu-item">캐릭터 소개</div>
              <div class="menu-item">이용후기</div>
            </div>
          </div>
          <div class="gnb-item">
            <span>커리큘럼</span>
            <div class="menu">
              <div class="menu-item active">개요</div>
              <div class="menu-item">데일리 코스</div>
              <div class="menu-item">서브 카테고리</div>
            </div>
          </div>
          <div class="gnb-item">
            <span>멤버십</span>
          </div>
        </div>
        <div class="group3">
          <a href="" id="logIn" class="link dark">로그인 / 회원가입</a>
          <a href="" id="logOut" class="link dark d-none">로그아웃</a>
          <button class="btn rounded purple">앱 다운로드</button>
        </div>
      </div>
    </div>`;
  }
}

window.customElements.define("global-nav-bar", GlobalNavBar);
