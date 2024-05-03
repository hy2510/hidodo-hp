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
            <a href="">하이도도</a>
            <div class="menu">
              <div class="menu-item active"><a href="">하이도도</a></div>
              <div class="menu-item"><a href="">캐릭터 소개</a></div>
              <div class="menu-item"><a href="">이용후기</a></div>
            </div>
          </div>
          <div class="gnb-item">
            <a href="">커리큘럼</a>
            <div class="menu">
              <div class="menu-item active"><a href="">개요</a></div>
              <div class="menu-item"><a href="">데일리 코스</a></div>
              <div class="menu-item"><a href="">서브 카테고리</a></div>
            </div>
          </div>
          <div class="gnb-item">
            <a href="">멤버십</a>
          </div>
        </div>
        <div class="group3">
          <span>
            <a href="" id="logIn" class="link dark">로그인 /</a>
            <a href="" id="SignUp" class="link dark">회원가입</a>
          </span>
          <a href="" id="logOut" class="link dark d-none">로그아웃</a>
          <button class="btn rounded purple">앱 다운로드</button>
        </div>
      </div>
    </div>`;
  }
}

window.customElements.define("global-nav-bar", GlobalNavBar);
