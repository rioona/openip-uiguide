<template>
  <div class="ui_wrap ui_guide">
    <div class="ui_header">
      <h1 class="ui_h1">유니콘랜치 공통 UI Guide</h1>
    </div>
    <section class="ui_container">
      <div class="ui_area_notice">
        <p class="f14">해당가이드에 있는 내용은 아래 css를 넣어주시면 어떤 프로젝트에서도 사용가능합니다.</p>
        <p class="f14"><b class="txt_blue">https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/common/css/common.css</b></p>
        <p class="f14">Git : <a href="https://ap-northeast-2.console.aws.amazon.com/codesuite/codecommit/repositories/Openip-Ui/browse?region=ap-northeast-2" target="_blank"><b>ssh://git-codecommit.ap-northeast-2.amazonaws.com/v1/repos/Openip-Ui</b></a></p>
        <p class="f14">해당 스타일은 기본이니 각 프로젝트에 맞춰 커스텀 하여 사용 부탁드립니다.</p>
      </div>
      <section class="ui_area" id="ui_area1">
        <h2 class="ui_h2 mb5">🎯 스타일 가이드</h2>
        <p class="mb20">대부분에 태그에 box-sizing: border-box 적용되어 있음. <br/>단 가상요소(before,after)에는 직접 설정해야 함</p>
        <div class="col2">
          <div class="col">
            <h3 class="ui_h3">여백 : margin</h3>
            <div class="g_cont">
              5px 간격으로 0px ~ 50px 까지 클래스(m*5~50)가 있습니다<br/>
              margin-top : ex) .mt5 (margin-top 5px)<br/>
              margin-bottom : ex) .mb25 (margin-bottom 25px)<br/>
              margin-left : ex) .ml10 (margin-left 10px)<br/>
              margin-right : ex) .mr50 (margin-right 50px)<br/>
            </div>
            <h3 class="ui_h3">여백 : padding</h3>
            <div class="g_cont">
              5px 간격으로 0px ~ 50px 까지 클래스(m*5~50)가 있습니다<br/>
              padding-top : ex) .mt5 (padding-top 5px)<br/>
              padding-bottom : ex) .mb25 (padding-bottom 25px)<br/>
              padding-left : ex) .ml10 (padding-left 10px)<br/>
              padding-right : ex) .mr50 (padding-right 50px)<br/>
            </div>
            <h3 class="ui_h3">폰트 크기 스타일</h3>
            <div class="g_cont">
              <p>
                <span>글꼴 : mac(애플고딕), 윈도우(맑은고딕)</span>
              </p>
              <p>
                <span>기본 글꼴 크기 : 14px</span>
              </p>
              <p>
                <span>기본 글자 색상 : #006</span>
              </p>
            </div>
            <h3 class="ui_h3">폰트 사이즈</h3>
            <div class="g_cont">
              폰트 사이즈 10px ~ 30px까지 클래스(f10~f30)가 있습니다<br/>
              <span class="f10">ex) .f10 : 폰트 사이즈 10px</span>
              <span class="f15">ex) .f15 : 폰트 사이즈 18px</span>
              <span class="f18">ex) .f18 : 폰트 사이즈 18px</span>
            </div>
            <h3 class="ui_h3">폰트 색상</h3>
            <div class="g_cont">
              <span
              class="txt_white"
              style="background: #aaa; display: inline-block"
              >.txt_white (화이트) : #fff</span><br/>
              <span class="txt_black">.txt_black(검정) : #000</span><br/>
              <span class="txt_gray">.txt_gray : #666</span><br/>
              <span class="txt_blue">.txt_blue : #2e59d9</span><br/>
              <span class="txt_sky">.txt_sky : #36b9cc</span><br/>
              <span class="txt_green">.txt_green : #1cc88a</span><br/>
              <span class="txt_red">.txt_red : #1cc88a</span><br/>
              <span class="txt_org">.txt_org : #f6c23e</span><br/>
            </div>
            <h3 class="ui_h3">배경</h3>
            <div class="g_cont">
              <span class="bg_white"> .bg_white : #fff</span><br/>
              <span class="bg_black txt_white">.bg_black : #000</span><br/>
              <span class="bg_gray txt_white">.bg_gray : #eee</span><br/>
              <span class="bg_blue txt_white">.bg_blue : #4e73df</span><br/>
              <span class="bg_sky txt_white">.bg_sky : #36b9cc</span><br/>
              <span class="bg_green txt_white">.bg_green : #1cc88a</span><br/>
              <span class="bg_red txt_white">.bg_red : #1cc88a</span><br/>
              <span class="bg_org txt_white">.bg_org : #f6c23e</span><br/>
            </div>
            <h3 class="ui_h3">텍스트 줄임(한줄)</h3>
            <div class="g_cont">
              <h5>.ellipsis 1줄</h5>
              <p class="ellipsis">
                보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여
              </p>
              <h5>.ellipsis 2줄</h5>
              <p class="ellipsis2">
                보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여
              </p>
              <h5>.ellipsis 3줄</h5>
              <p class="ellipsis3">
                보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여
              </p>
              <h5>.ellipsis 4줄</h5>
              <p class="ellipsis4">
                보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여보험상품 가입에 관하여보험상품 가입에
                관하여보험상품 가입에 관하여
              </p>
            </div>
          </div>
          <div class="col">
            <h3 class="ui_h3">text 정렬</h3>
            <p class="mb10"><b>.left</b> - 왼쪽 정렬 </p>
            <p class="mb10"><b>.center</b> - 가운데 정렬 </p>
            <p class="mb10"><b>.right</b> - 오른쪽 정렬 </p>
            <h3 class="ui_h3">flex 정렬</h3>
            <div class="g_cont">
              <p class="mb10">디자인이 1줄일 때만 적용 가능</p>
              <p class="mb10"><b>.flex_center</b> - 가운데 정렬 </p>
              <div class="flex_center mb10">
                <div class="item bg_gray mr10">item1</div>
              </div>
              <p class="mb10"><b>.flex_right</b> - 오른쪽 정렬</p>
              <div class="flex_right mb10">
                <div class="item bg_gray mr10">item1</div>
                <div class="item bg_gray">item2</div>
              </div>
              <p class="mb10"><b>.flex_bw</b> - 요소 2개일때는 양쪽 (오른쪽 왼쪽 정렬), 3개 이상이면 균일한 비유로 간격이 생성됩니다.</p>
              <div class="flex_bw mb10">
                <div class="item bg_gray">item1</div>
                <div class="item bg_gray">item2</div>
              </div>
              <div class="flex_bw mt15">
                <div class="item bg_gray">item1</div>
                <div class="item bg_gray">item2</div>
                <div class="item bg_gray">item3</div>
                <div class="item bg_gray">item4</div>
              </div>
              <p class="mb10"><b>.flex_a_center</b> - 세로 가운데 정렬</p>
              <div class="flex_a_center mt15">
                <div class="item bg_gray">item1</div>
                <div class="item bg_gray" style="height:50px;">item2</div>
                <div class="item bg_gray">item3</div>
                <div class="item bg_gray">item4</div>
              </div>
              <p class="mb10"><b>.flex_a_end</b> - 세로 바닥 정렬</p>
              <div class="flex_a_end mt15 bg_gray" style="height:50px;">
                <div class="item">item1</div>
                <div class="item">item2</div>
                <div class="item">item3</div>
                <div class="item">item4</div>
              </div>
            </div>
            <h3 class="ui_h3">단 나누기</h3>
            <div class="g_cont">
              <h5 class="mt0">
                .col2 : div2개 가로값 50% 일렬로 정렬 (하위요소는 col)
              </h5>
              <div class="col2 mb10">
                <div class="col">div1</div>
                <div class="col">div2</div>
              </div>
              <h5>
                .col3 : div3개 가로값 33.3% 일렬로 정렬 (하위요소는 col)
              </h5>
              <div class="col3">
                <div class="col">div1</div>
                <div class="col">div2</div>
                <div class="col">div3</div>
              </div>
              <h5>
                .col4 : div4개 가로값 25% 일렬로 정렬 (하위요소는 col)
              </h5>
              <div class="col4">
                <div class="col">div1</div>
                <div class="col">div2</div>
                <div class="col">div3</div>
                <div class="col">div4</div>
              </div>
              <h5>
                .col5 : div5개 가로값 20% 일렬로 정렬 (하위요소는 col)
              </h5>
              <div class="col5">
                <div class="col">div1</div>
                <div class="col">div2</div>
                <div class="col">div3</div>
                <div class="col">div4</div>
                <div class="col">div5</div>
              </div>
            </div>
            <h3 class="ui_h3">고정 가로크기</h3>
            <div class="g_cont">
              <p class="mt10">div, button, a, input 등 대부분에 태그에 적용 가능</p>
              <p class="mt10">가로값 : calc(50% - 2.5px) (아래 처럼 flex와 같이 쓰길 권장)</p>
              <div class="mt5 mb5 flex_bw">
                <div class="half bg_gray">div.half</div>
                <div class="half bg_gray">div.half</div>
              </div>
              <div class="full bg_gray">.div.full</div>
            </div>
          </div>
        </div>
      </section>
      <section class="ui_area" id="ui_area2">
        <h2 class="ui_h2 mb20">🎯 button, input 가이드</h2>
        <div class="col2">
          <div class="col">
            <h3 class="ui_h3">버튼 : .btn - button, a태크에 사용</h3>
            <div class="g_cont">
              
              <div class="mb10"><button type="button" class="btn">.btn</button> 최소 가로값 : 40px, 세로 : 30px, font : 14px</div>
              <p class="mb10">.btn에 아래 속성들 추가로 적용 가능합니다.(중첩 가능)</p>
              <p class="mb10 ui_point">📌 Colors</p>
              <div class="mt10">
                <button type="button" class="btn b_sky">.b_sky</button>
                <button type="button" class="btn b_green">.b_green</button>
                <button type="button" class="btn b_red">.b_red</button>
                <button type="button" class="btn b_org">.b_org</button>
                <button type="button" class="btn b_gray">.b_gray</button>
                <button type="button" class="btn b_black">.b_black</button>
              </div>
              <p class="mt10 mb10 ui_point">📌 Outline Buttons</p>
              <div class="mt10">
                <nuxt-link to="" class="btn l_blue">.l_blue</nuxt-link>
                <nuxt-link to="" class="btn l_sky">.l_sky</nuxt-link>
                <nuxt-link to="" class="btn l_green">.l_green</nuxt-link>
                <nuxt-link to="" class="btn l_red">.l_red</nuxt-link>
                <nuxt-link to="" class="btn l_org">.l_org</nuxt-link>
                <nuxt-link to="" class="btn l_gray">.l_gray</nuxt-link>
                <nuxt-link to="" class="btn l_black">.l_black</nuxt-link>
              </div>
              <p class="mt10 ui_point">📌 Sizing</p>
              <div class="mt10">
                <button type="button" class="btn b_sm">.b_sm 20px</button>
                <button type="button" class="btn b_lg">.b_lg 50px</button>
              </div>
              <p class="mb10 ui_point">📌 Disabled</p>
              <div>
                <nuxt-link to="" class="btn dis">a.dis</nuxt-link>
                <button type="button" class="btn" disabled="disabled">.btn disabled</button>
                <button type="button" class="btn b_green dis">.b_green.dis</button>
                <button type="button" class="btn l_sky dis">.l_sky.dis</button>
              </div>
              <p class="mt10 mb10 ui_point">📌 Half</p>
              <div class="mt5 mb5 flex_bw">
                <button type="button" class="btn bg_blue half">.half</button>
                <nuxt-link to="" class="btn bg_blue half">.a.half</nuxt-link>
              </div>
              <div class="mb5">
                <button type="button" class="btn l_point full">.full</button>
              </div>
            </div>
            <h3 class="ui_h3">아이콘 버튼 : .btn_ico + 해당 버튼 클래스 - button, a태크에 사용</h3>
            <div class="g_cont">
              <p class="mb10">
                프로젝트 마다 같은 클래스에 커스텀(재정의) 하여 사용하세요<br/>
                .btn_ico 아이콘 버튼 기본 클래스로 글자 제거 및 기본 크기 20px로
                아이콘 버튼을 새로 만드는 경우에도 사용해주세요.
                아이콘 크기는 변경할 수 있으나 색상 및 이미지 변경은 새로 svg를 추가하여 사용해야합니다.
              </p>
              <div>
                <p class="mt10 mb10 ui_point">📌 Icon Buttons</p>
                <p class="mb5">.c_white : 클래스는 흰색 아이콘입니다</p>
                <div class="flex_a_center mb5">
                  .btn_ico.b_search :
                  <button type="button" class="btn_ico b_search">검색 버튼</button>
                  <button type="button" class="btn_ico b_search c_white bg_blue">검색 버튼</button> 
                  <span class="ml10"> 비활성화 :</span> 
                  <button type="button" class="btn_ico b_search" disabled="disabled">검색 버튼</button>
                  <nuxt-link to="" class="btn_ico b_search c_white dis bg_blue">검색 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mb5">
                  .btn_ico.b_close :
                  <button type="button" class="btn_ico b_close">검색 버튼</button>
                  <button type="button" class="btn_ico bg_blue c_white b_close">검색 버튼</button> 
                  <span class="ml10"> 비활성화 :</span> 
                  <button type="button" class="btn_ico b_close" disabled="disabled">검색 버튼</button>
                  <nuxt-link to="" class="btn_ico bg_blue c_white dis b_close">검색 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mb5">
                  .btn_ico.b_reset :
                  <button type="button" class="btn_ico b_reset">리셋 버튼</button>
                  <button type="button" class="btn_ico bg_blue c_white b_reset">리셋 버튼</button> 
                  <span class="ml10"> 비활성화 :</span> 
                  <button type="button" class="btn_ico b_reset" disabled="disabled">리셋 버튼</button>
                  <nuxt-link to="" class="btn_ico bg_blue c_white dis b_reset">리셋 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mb5">
                  .btn_ico.b_calendar :
                  <button type="button" class="btn_ico b_calendar">달력</button>
                  <button type="button" class="btn_ico b_calendar c_white bg_blue">달력</button> 
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn_ico b_calendar" disabled="disabled">달력</button>
                  <nuxt-link to="" class="btn_ico b_calendar c_white dis bg_blue">달력</nuxt-link>
                </div>
                <div class="flex_a_center mb5">
                  .btn_ico.b_download :
                  <button type="button" class="btn_ico b_download">다운로드</button>
                  <button type="button" class="btn_ico b_download bg_blue c_white">다운로드</button> 
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn_ico b_download" disabled="disabled">다운로드</button>
                  <nuxt-link to="" class="btn_ico b_download dis bg_blue c_white">다운로드</nuxt-link>
                </div>
                <div class="flex_a_center mb5">
                  .btn_ico.b_filter :
                  <button type="button" class="btn_ico b_filter">필터</button>
                  <button type="button" class="btn_ico bg_blue c_white b_filter">필터</button> 
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn_ico b_filter" disabled="disabled">필터</button>
                  <nuxt-link to="" class="btn_ico b_filter bg_blue c_white dis ">필터</nuxt-link>
                </div>
                <div class="flex_a_center mt5">
                  .btn_ico.b_add : 
                  <button type="button" class="btn_ico b_add">더하기 버튼</button>
                  <button type="button" class="btn_ico bg_blue c_white b_add">더하기 버튼</button>
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn_ico b_add" disabled="disabled">더하기 버튼</button>
                  <nuxt-link to="" class="btn_ico bg_blue c_white dis b_add">더하기 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mt5">
                  .btn_ico.b_subt : 
                  <button type="button" class="btn_ico b_subt">빼기 버튼</button>
                  <button type="button" class="btn_ico bg_blue c_white b_subt">빼기 버튼</button>
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn_ico b_subt" disabled="disabled">빼기 버튼</button>
                  <nuxt-link to="" class="btn_ico bg_blue c_white dis b_subt">빼기 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mt5">
                  .btn_ico.b_prev : 
                  <button type="button" class="btn_ico b_prev">이전 버튼</button>
                  <button type="button" class="btn_ico bg_blue c_white b_prev">이전 버튼</button>
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn_ico b_prev" disabled="disabled">이전 버튼</button>
                  <nuxt-link to="" class="btn_ico bg_blue c_white dis b_prev">이전 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mt5">
                  .btn_ico.b_next : 
                  <button type="button" class="btn_ico b_next">다음 버튼</button>
                  <button type="button" class="btn_ico bg_blue c_white b_next">다음 버튼</button>
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn_ico b_next" disabled="disabled">다음 버튼</button>
                  <nuxt-link to="" class="btn_ico bg_blue c_white dis b_next">다음 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mt5">
                  .btn_ico.b_up : <button type="button" class="btn_ico b_up">위 버튼</button>
                  <button type="button" class="btn_ico bg_blue c_white b_up">위 버튼</button>
                  <span class="ml5"> 비활성화</span> 
                  <button type="button" class="btn_ico b_up" disabled="disabled">위 버튼</button>
                  <nuxt-link to="" class="btn_ico bg_blue c_white dis b_up">위 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mt5">
                  .btn_ico.b_down : 
                  <button type="button" class="btn_ico b_down">아래 버튼</button>
                  <button type="button" class="btn_ico bg_blue c_white b_down">아래 버튼</button>
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn_ico b_down" disabled="disabled">아래 버튼</button>
                  <nuxt-link to="" class="btn_ico bg_blue c_white dis b_down">아래 버튼</nuxt-link>
                </div>   
              </div>
            </div>
          </div>
          <div class="col">
            <h3 class="ui_h3">input - 기본 타입</h3>
            <div class="g_cont">
              <p class="mb5"><b>.ipt</b> : 가로값 100%, 선색상 #aaa, placeholder #666</p>
              <input type="text" class="ipt" placeholder="입력하세요"/>
              <input type="text" class="ipt mt5" value="값"/>
              <div class="bx_search mt10">
                <input type="text" class="ipt"/>
                <button class="btn_ico b_search">검색버튼</button>
              </div>
            </div>
            <h3 class="ui_h3">select</h3>
            <div class="g_cont">
              <p class="mb20">
                Select components 기본 텍스트는 title에 넣어주세요. 없는 경우
                생략<br/>
                가로값은 기본 100% width에 px or %으로 넣으면 조정 가능
              </p>
              <h5>.slct - 기본</h5>
              <Select defaultTitle="선택해주세요"
                :itemList="[
                  { name: '셀렉트1' },
                  { name: '셀렉트2'},
                  // { name: '셀렉트2', select:true},
                  { name: '셀렉트3' },
                  { name: '셀렉트4' },
                ]"/>
              <Select defaultTitle="비활성화" classNm="dis mt5"
                :itemList="[
                  { name: '셀렉트1' },
                  { name: '셀렉트2'},
                  // { name: '셀렉트2', select:true},
                  { name: '셀렉트3' },
                  { name: '셀렉트4' },
                ]"/>
              <h5>.slct - 라우터 이동 (to 값)</h5>
              <Select defaultTitle="라우터" classNm="mt5"
              :itemList="[
                // { name: '라우터1' , to:'/ui' , target:'_blank' },
                { name: '라우터1' , to:'/ui' },
                { name: '라우터2' , to:'/ui' },
                { name: '라우터3' , to:'/ui' },
                { name: '라우터4' , to:'/ui' },
                { name: '라우터5' , to:'/ui' },
              ]"/>
              <h5>.slct - 타 사이트 이동 (link 값)</h5>
              <Select defaultTitle="링크" classNm="mt5"
                :itemList="[
                  { name: '링크1' , link:'https://www.naver.com/' , target:'_blank' },
                  { name: '링크2' , link:'https://www.naver.com/' , target:'_blank' },
                  { name: '링크3' , link:'https://www.naver.com/' , target:'_blank' },
                  { name: '링크4' , link:'https://www.naver.com/' , target:'_blank' },
                ]"/>
            </div>
            <h3 class="ui_h3">CheckBox</h3>
            <div class="g_cont">
              <div>
                <CheckBox label="체크박스1" id="chk1_1"/>
                <CheckBox label="체크박스2" id="chk1_2" :value="true"/>
                <CheckBox label="체크박스3" id="chk1_3" :disabled="true"/>
                <CheckBox label="체크박스4" id="chk1_4" :value="true" :disabled="true"/>
              </div>
              <div class="mt5">
                <CheckBox label="체크박스1" id="chk2_1" classNm="t_round"/>
                <CheckBox label="체크박스2" id="chk2_2" classNm="t_round" :value="true"/>
                <CheckBox label="체크박스3" id="chk2_3" classNm="t_round" :disabled="true"/>
                <CheckBox label="체크박스4" id="chk2_4" classNm="t_round" :value="true" :disabled="true"/>
              </div>
            </div>
            <h3 class="ui_h3">RadioBox</h3>
            <div class="g_cont">
              <RadioBox label="라디오박스1" id="1" group="radi1"/>
              <RadioBox label="라디오박스2" id="2" group="radi1" :value="true"/>
              <RadioBox label="라디오박스3" id="1" group="radi2" :disabled="true"/>
              <RadioBox label="라디오박스4" id="2"  group="radi2" :value="true" :disabled="true"/>
            </div>
            <h3 class="ui_h3">툴팁 : .tooltip</h3>
            <div class="g_cont">
              <Tooltip type="?" desc="<p>ui 가이드 사용 안내<br/>블라블라 블라블라</p><p>ui 가이드 사용 안내<br/>블라블라 블라블라</p>"/>
              <Tooltip type="!" desc="<p>ui 가이드 사용 안내<br/>블라블라 블라블라</p><p>ui 가이드 사용 안내<br/>블라블라 블라블라</p>"/>
            </div>
            <h3 class="ui_h3">Scroll style</h3>
            <div class="flex_bw ui_scroll">
                <div class="half scroll">
                  <strong>.scroll</strong><br/>
                  This is the true joy in life, the being used 
                  for a purpose recognized by yourself as a mighty
                  ne instead of a feverish selfish little clod of
                  ailments and grievances complaining that the world
                  will not devote itself to making you happyby 
                  yourself as a mighty ne instead of a feverish selfish
                  little clod of ailments.
                </div>
                <div class="half scroll type1">
                  <strong>.scroll.type1</strong><br/>
                  This is the true joy in life, the being used 
                  for a purpose recognized by yourself as a mighty
                  ne instead of a feverish selfish little clod of
                  ailments and grievances complaining that the world
                  will not devote itself to making you happyby 
                  yourself as a mighty ne instead of a feverish selfish
                  little clod of ailments.
                </div>
              </div>
          </div>
        </div>
      </section>
      <section class="ui_area" id="ui_area3">
        <h2 class="ui_h2 mb20">🎯 경고 팝업 가이드</h2>
        <div class="col2">
          <div class="col">
            <h3 class="ui_h3">팝업</h3>
            <div class="g_cont">
              <h4>store 기본</h4>
<pre>
alertData: {
  state: false,
  type: "alert", //경고창은 기본값이 들어가있어서 생략 가능 (confirm, alert)
  title: null,
  msg: null,
  classNm:null,
  btn: {
    link: '',
    name: "확인", //입력안하면 확인 버튼으로 들어감
    fnName: null,
  }
}
</pre>
              <button class="btn l_blue" @click="fnShowAlert(1)">경고창 닫기 아이콘 버튼</button>
<pre>
let data = this.$store.state.ui.alertData;
data = {
  ...data,
  classNm:"type1",
  state:true,
  msg: "<p>경고창입니다</p>",
}
  this.$store.dispatch('ui/setAlertData', data);
</pre>
            </div>
          </div>
          <div class="col">
            <div class="g_cont">
              <button class="btn l_blue" @click="fnShowAlert(2)">경고창 하단 버튼</button>
<pre>
let data = this.$store.state.ui.alertData;
data = {
  ...data,
  state:true,
  msg: "<p>경고창입니다</p>",
}
this.$store.dispatch('ui/setAlertData', data);
</pre>
            </div>
            <div class="g_cont">
              <button class="btn l_blue" @click="fnShowAlert(3)">confirm 확인칭</button> 
<pre>
let data = this.$store.state.ui.alertData;
data = {
  ...data,
  state:true,
  type: "confirm",
  msg: "<p>확인창입니다</p>",
  btn:{
    name:"장바구니보기",
    link: "",
  }
}
this.$store.dispatch('ui/setAlertData', data);
</pre>
            </div>
          </div>
        </div>
      </section>  
      <section class="ui_area" id="ui_area4">
        <h2 class="ui_h2 mb20">🎯 테이블, 탭 등</h2>
        <div class="col2 mt20">
          <article class="col">
            <h3 class="ui_h3">게시판 형식 테이블 .tbl</h3>
            <p>
              가로크기는 colgroup 으로 제어, 반응형일때는 퍼센트 또는 클래스로 제어<br/>
              td,th에 <b>.right</b>, <b>.left</b>, <b>.center</b> 를 추가하여 정렬 가능<br/>
              <b>th</b> : font 13px, <b>td</b> : font 14px
            </p>
            <table class="tbl mt20">
              <colgroup>
                <col width="7%">
                <col width="">
                <col width="10%">
                <col width="10%">
              </colgroup>
              <thead>
                <tr>
                  <th>no</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in 3" :key="i">
                  <td class="center">{{ i }}</td>
                  <td>게시판 제목입니다</td>
                  <td class="center">홍길동</td>
                  <td class="center">999</td>
                </tr>
              </tbody>
            </table>
            <h3 class="ui_h3 mt20">게시판 형식 테이블 .tbl_form</h3>
            <p>
              가로크기는 colgroup 으로 제어, 반응형일때는 퍼센트 또는 클래스로 제어<br/>
              td,th에 <b>.right</b>, <b>.left</b>, <b>.center</b> 를 추가하여 정렬 가능<br/>
              <b>th</b> : font 13px, <b>td</b> : font 14px
            </p>
            <table class="tbl_form mt20">
              <colgroup>
                <col width="15%">
                <col width="">
              </colgroup>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td><input type="text" class="ipt"></td>
                </tr>
                <tr>
                  <th>이름</th>
                  <td>홍길동</td>
                </tr>
                <tr v-for="i in 3" :key="i">
                  <th>주소</th>
                  <td>서울시 </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article class="col">
            <h3 class="ui_h3 mt20">페이징 .pagination</h3>
            <div class="pagination">
              <nuxt-link to="" class="btn_ico b_start">맨앞</nuxt-link>
              <nuxt-link to="" class="btn_ico b_prev">이전</nuxt-link>
              <nuxt-link to="" class="num" v-for="i in 10" :key="i" :class="{'on' : i==2}">{{ i }}</nuxt-link>
              <nuxt-link to="" class="btn_ico b_next">다음</nuxt-link>
              <nuxt-link to="" class="btn_ico b_end">맨뒤</nuxt-link>
            </div>
            <h3 class="ui_h3 mt20">탭 .taps</h3>
            <div class="taps">
              <button type="button" class="tap">탭1</button>
              <button type="button" class="tap on">탭2</button>
              <button type="button" class="tap">탭3</button>
              <button type="button" class="tap">탭4</button>
            </div>
          </article>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import Select from "~/components/form/Select";
import CheckBox from "~/components/form/CheckBox";
import RadioBox from "~/components/form/RadioBox";
import Tooltip from "~/components/common/Tooltip";

export default {
  data() {
    return {
      // popup: false,
    };
  },
  components: {
    Select,
    CheckBox,
    RadioBox,
    Tooltip,
  },
  head() {
    return {
      title:"공통 UI Guide",
    };
  },
  mounted(){
  },
  methods: {
    fnShowAlert(num) {
      let data = this.$store.state.ui.alertData;
      // this.$store.state.ui.alertData;
      if(num==1){
        data = {
          ...data,
          classNm:"type1",
          state:true,
          msg: "<p>경고창입니다</p>",
        };
      }else if(num==2){
        data = {
          ...data,
          state:true,
          msg: "<p>경고창입니다</p>",
        };
      }else if(num==3){
        data  = {
          ...data,
          state:true,
          type: "confirm",
          msg: "<p>확인창입니다</p>",
          btn:{
            name:"장바구니보기",
            link: "",
          }
        };
      }
      this.$store.dispatch('ui/setAlertData', data);
    },
  },
};
</script>
<!-- 해당 페이지에서만 쓰는 css -->
<style scoped v-if="true">
  @import "https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/common/css/guide.css?v=01";
</style>
<!-- <style lang="scss" scoped v-if="true">
  @import "~/static/scss/variable.scss";
  @import "~/static/scss/mixin.scss";
  .ui_wrap{
    width: 100%;
    min-height: 100vh;
    color: #4a5b6d;
    background-color: #eef4fb;
    font-size: 12px;
  }
  .ui_header{
    @include setCont(100%, null, block);
    text-align: center;
  }
  .ui_container{
    width: 100%;
    margin: 0 auto;
    padding: 40px 15px;
  }
  .ui_area_notice{
    padding: 20px 5px;
    font-size: 13px;
    line-height: 1.6;
  }
  .ui_area{
    background-color: #ffffff;
    box-shadow: 0 0.15rem 1.75rem #dde3ec;
    border-left: 3px solid #256cb5;
    border-radius: 5px;
    padding: 25px 25px 35px;
    &+.ui_area{
      
      margin-top: 20px;
    }
  }
  .ui_tbl{
    width:100%;
    text-align: center;
  }
  .ui_tbl th, .ui_tbl td{
    height: 38px;
    padding: 5px;
  }
  .ui_tbl td{
    border-bottom: 1px solid #ededed;
  }
  .ui_tbl td:first-child{
    width: 50%;
    text-align: left;
    padding-left: 20px;
  }
  .ui_tbl th{
    background-color: #f7f7f9;
  }
  .ui_label{
    display: inline-block;
    border-radius: 50%;
    padding: 5px 6px;
    color: #ffffff;
    margin-right: 5px;
    background-color: #45b9cc;
    &.type1{
      background-color: #454696;
    }
    &.type2{
      background-color: #10324f;
    }
  }
  .ui_h1{
    text-align: center;
    color: #4a5b6d;
    padding: 40px 0 10px;
  }
  .ui_h1 > strong{
    font-size: 25px;
  }
  .ui_h2{color: #256cb5; font-size: 16px;}
  .ui_h3{
    color: #256cb5;
    margin-bottom: 10px;
  }
  .ui_link{
    font-size: 12px;
    font-weight: 300;
    &:hover{
      text-decoration: underline;
      .ui_new{
        text-decoration: unset;
      }
    }
  }
  .ui_new{
    background-color: #FFB200;
    color: #ffffff;
    border-radius: 3px;
    padding: 3px;
    margin-left: 3px;
  }
  .ui_guide{
    font-size: 14px;
    line-height: 1.6;
    color:#222;
    .ui_container{
      padding: 50px 30px;
    }
    .ui_area_notice{
      padding: 0 5px 20px;
    }
    .ui_h2{
      font-size: 20px;
      margin-bottom: 20px;
    }
    .ui_area{
      &>.col2{
        &>.col{
          padding: 0 20px;
          &+.col{
            border-left: 1px solid #aaa;
          }
        }
      }
      @include tablet{
        &>.col2{
          flex-wrap: wrap;
          &>.col{
            width: 100%;
            &+.col{
              border-left:none;
            }
          }
        }
      }
      .ui_h3{
        font-size: 16px;
        margin-bottom: 10px;
        color: #313131;
        &::before{
          content: "✔︎";
          margin-right: 6px;
        }
      }
    }
    .g_cont{
      padding: 0 20px;
      &+h3{
        margin-top: 30px;
      }
      h5{
        margin: 15px 0 5px;
      }
      .col{
        border: 1px solid #aaa;
        &+.col{
          border-left: none;
        }
      }
    }
    pre{
      padding: 20px;
      border-radius: 5px;
      background: #efefef;
      margin: 10px 0 15px;
      @include font(12, 16);
    }
  }
</style> -->
