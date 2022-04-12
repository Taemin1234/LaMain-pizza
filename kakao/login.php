<? include $_SERVER["DOCUMENT_ROOT"]."/inc/header.php" ?>
<style>
    header {
        display: none;
    }
    body {
        padding-bottom: 0;
    }
</style>


<ul style="display:none;">
	<li onclick="kakaoLogin();">
      <a href="javascript:void(0)">
          <span>카카오 로그인</span>
      </a>
	</li>
	<li onclick="kakaoLogout();">
      <a href="javascript:void(0)">
          <span>카카오 로그아웃</span>
      </a>
	</li>
</ul>


<div class="login_box">
   <div class="reply_content">
        <div class="login_logo"><img src="/img/login_logo2.svg"></div>
        <div class="login_kakao"><img src="/img/ico_kakao.svg">카카오로 간편한 시작</div>
        <div class="login_copy">Copyright © 2021 by zerokitchen Corp. All rights reserved.</div>
    </div>
</div>


<script>


$(document).ready(function() {
  $('.login_box' ).css( { 'display' : 'block' } );
});

$(document).on('click', '.login_kakao', function() {
    kakaoLogin();
});
</script>

<? include $_SERVER["DOCUMENT_ROOT"]."/inc/footer.php" ?>