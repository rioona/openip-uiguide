<template>
  <div class="ui_wrap ui_guide">
    <header class="ui_header">
      <h1 class="ui_h1"><strong>공통</strong> Guide Page</h1>
      <p class="f14">해당가이드에 있는 클래스들은 2023년 01월 이후로 만들어진 모든 프로젝트에서 사용 가능합니다.</p>
    </header>
    <section class="ui_container">
      <div class="ui_area_notice">
        <p><strong>적용 프로젝트 </strong> - 없음</p>
        <p>해등 스타일은 기본이니 각 프로젝트에 맞춰 덮어서 사용 부탁드립니다.</p>
      </div>
      <article class="ui_area" id="ui_area1">
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
              <span class="txt_black">.txt_black(검정) : #000</span><br/>
              <span
                class="txt_white"
                style="background: #aaa; display: inline-block"
                >.txt_white (화이트) : #fff</span><br/>
              <span class="txt_red">.txt_red(빨강) : #e02d1b</span><br/>
              <span class="txt_blue">.txt_blue(파랑) : #2e59d9</span><br/>
              <span class="txt_gray">.txt_gray(회색) : #666</span><br/>
            </div>
            <h3 class="ui_h3">배경</h3>
            <div class="g_cont">
              <span class="bg_white"> .bg_white : 배경 (흰색)</span><br/>
              <span class="bg_black txt_white">.bg_black : 배경 (검정)</span><br/>
              <span class="bg_gray txt_white">.bg_gray : 배경 (회색)</span><br/>
              <span class="bg_point txt_white">.bg_point : 배경 (포인트)</span><br/>
              <span class="bg_red">.bg_red : 배경 (빨강)</span><br/>
              <span class="bg_blue">.bg_blue : 배경 (파랑)</span><br/>
              <span class="bg_sky">.bg_sky : 배경 (하늘)</span><br/>
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
              <div class="flex_a_center mt15">
                <div class="item bg_gray">item1</div>
                <div class="item bg_gray" style="height:50px;">item2</div>
                <div class="item bg_gray">item3</div>
                <div class="item bg_gray">item4</div>
              </div>
              <div class="flex_a_end mt15 bg_gray"  style="height:50px;">
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
                <div class="col bg_red">div1</div>
                <div class="col bg_blue">div2</div>
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
      </article>
      <article class="ui_area" id="ui_area2">
        <h2 class="ui_h2 mb20">🎯 button, input 가이드</h2>
        <div class="col2">
          <div class="col">
            <h3 class="ui_h3">버튼 : .btn - button, a태크에 사용</h3>
            <div class="g_cont">
              <p class="mb10 ui_point">📌 Colors</p>
              <button type="button" class="btn btn_primary">primary</button>
              <button type="button" class="btn btn_secondary">secondary</button>
              <button type="button" class="btn btn_success">success</button>
              <button type="button" class="btn btn_danger">danger</button>
              <button type="button" class="btn btn_warning">warning</button>
              <button type="button" class="btn btn_light">light</button>
              <button type="button" class="btn btn_dark">dark</button>
              <div class="mt10">
                <nuxt-link to="" class="btn btn_primary">a.primary</nuxt-link>
                <nuxt-link to="" class="btn btn_secondary">a.secondary</nuxt-link>
                <nuxt-link to="" class="btn btn_success">a.success</nuxt-link>
                <nuxt-link to="" class="btn btn_danger">a.danger</nuxt-link>
                <nuxt-link to="" class="btn btn_warning">a.warning</nuxt-link>
                <nuxt-link to="" class="btn btn_light">a.light</nuxt-link>
                <nuxt-link to="" class="btn btn_dark">a.dark</nuxt-link>
              </div>
              <p class="mt10 mb10 ui_point">📌 Outline Buttons</p>
              <button type="button" class="btn l_primary">primary</button>
              <button type="button" class="btn l_secondary">secondary</button>
              <button type="button" class="btn l_success">success</button>
              <button type="button" class="btn l_danger">danger</button>
              <button type="button" class="btn l_warning">warning</button>
              <button type="button" class="btn l_light">light</button>
              <button type="button" class="btn l_dark">dark</button>
              <div class="mt10">
                <nuxt-link to="" class="btn l_primary">a.primary</nuxt-link>
                <nuxt-link to="" class="btn l_secondary">a.secondary</nuxt-link>
                <nuxt-link to="" class="btn l_success">a.success</nuxt-link>
                <nuxt-link to="" class="btn l_danger">a.danger</nuxt-link>
                <nuxt-link to="" class="btn l_warning">a.warning</nuxt-link>
                <nuxt-link to="" class="btn l_light">a.light</nuxt-link>
                <nuxt-link to="" class="btn l_dark">a.dark</nuxt-link>
              </div>
              <p class="mt10 ui_point">📌 Sizing</p>
              <p class="mb10">최소 가로값 : 25px, 세로 : 20px (line-height 20px), font : 7px</p>
              <button type="button" class="btn btn_primary btn-xs">EXTRA SMALL</button>
              <button type="button" class="btn btn_primary btn-sm">SMALL</button>
              <button type="button" class="btn btn_primary">기본</button>
              <button type="button" class="btn btn_primary btn-lg">LARGE</button>
              <button type="button" class="btn btn_primary btn-xl">EXTRA LARGE</button>
              <div class="mt10">
                <nuxt-link to="" class="btn l_primary btn-xs">a.EXTRA SMALL</nuxt-link>
                <nuxt-link to="" class="btn l_secondary btn-sm">a.SMALL</nuxt-link>
                <nuxt-link to="" class="btn l_success">a.기본</nuxt-link>
                <nuxt-link to="" class="btn l_danger btn-lg">a.LARGE</nuxt-link>
                <nuxt-link to="" class="btn l_warning btn-xl">a.EXTRA LARGE</nuxt-link>
              </div>
              <p class="mb10 ui_point">📌 Disabled</p>
              <nuxt-link to="" class="btn dis">a.btn.dis</nuxt-link>
              <button type="button" class="btn" disabled="disabled">button disabled 속성</button>
              <p class="mt10 mb10 ui_point">📌 Half</p>
              <div class="mt5 mb5 flex_bw">
                <button type="button" class="btn btn_primary half">.btn.half</button>
                <nuxt-link to="" class="btn btn_primary half">.a.half</nuxt-link>
              </div>
              <div class="mb5">
                <button type="button" class="btn l_primary full">.btn.full</button>
              </div>
            </div>
            <h3 class="ui_h3">아이콘 버튼 : .btn_sign + 해당 버튼 클래스 - button, a태크에 사용</h3>
            <div class="g_cont">
              <p class="mb10">
                프로젝트 마다 같은 클래스에 커스텀(재정의) 하여 사용하세요<br/>
                .btn_sign 아이콘 버튼 기본 클래스로 글자 제거 및 기본 크기 20px로
                아이콘 버튼을 새로 만드는 경우에도 사용해주세요.
                아이콘 크기는 변경할 수 있으나 색상 및 이미지 변경은 새로 svg를 추가하여 사용해야합니다.
              </p>
              <div>
                <p class="mt10 ui_point">📌 Circle Icon Buttons</p>
                <p class="mt10">기본 - 아이콘 버튼 클래스에 .c_white 추가하면, 아이콘 흰색 & 컬러 백그라운드 버튼 사용가능</p>
                <button type="button" class="btn btn_circle c_white btn_person"></button>
                <button type="button" class="btn btn_circle c_white btn_check"></button>
                <button type="button" class="btn btn_circle c_white btn_reset"></button>
                <button type="button" class="btn btn_circle c_white btn_help"></button>
                <button type="button" class="btn btn_circle c_white btn_setting"></button>
                <button type="button" class="btn l_primary btn_circle btn_person"></button>
                <button type="button" class="btn l_secondary btn_circle btn_check"></button>
                <button type="button" class="btn l_success btn_circle btn_reset"></button>
                <button type="button" class="btn l_danger btn_circle btn_help"></button>
                <button type="button" class="btn l_warning btn_circle btn_setting"></button>
                <div class="mt10">
                  <nuxt-link to="" class="btn btn_circle c_white btn_person"></nuxt-link>
                  <nuxt-link to="" class="btn btn_circle c_white btn_check"></nuxt-link>
                  <nuxt-link to="" class="btn btn_circle c_white btn_reset"></nuxt-link>
                  <nuxt-link to="" class="btn btn_circle c_white btn_help"></nuxt-link>
                  <nuxt-link to="" class="btn btn_circle c_white btn_setting"></nuxt-link>
                  <nuxt-link to="" class="btn l_primary btn_circle btn_person"></nuxt-link>
                  <nuxt-link to="" class="btn l_secondary btn_circle btn_check"></nuxt-link>
                  <nuxt-link to="" class="btn l_success btn_circle btn_reset"></nuxt-link>
                  <nuxt-link to="" class="btn l_danger btn_circle btn_help"></nuxt-link>
                  <nuxt-link to="" class="btn l_warning btn_circle btn_setting"></nuxt-link>
                </div>
                <p class="mt10">Small</p>
                <button type="button" class="btn btn_primary btn_circle btn-sm c_white btn_person"></button>
                <button type="button" class="btn btn_secondary btn_circle btn-sm c_white btn_check"></button>
                <button type="button" class="btn btn_success btn_circle btn-sm c_white btn_reset"></button>
                <button type="button" class="btn btn_danger btn_circle btn-sm c_white btn_help"></button>
                <button type="button" class="btn btn_warning btn_circle btn-sm c_white btn_setting"></button>
                <div class="mt10">
                  <nuxt-link to="" class="btn btn_primary btn_circle btn-sm c_white btn_person"></nuxt-link>
                  <nuxt-link to="" class="btn btn_secondary btn_circle btn-sm c_white btn_check"></nuxt-link>
                  <nuxt-link to="" class="btn btn_success btn_circle btn-sm c_white btn_reset"></nuxt-link>
                  <nuxt-link to="" class="btn btn_danger btn_circle btn-sm c_white btn_help"></nuxt-link>
                  <nuxt-link to="" class="btn btn_warning btn_circle btn-sm c_white btn_setting"></nuxt-link>
                </div>
                <p class="mt10 mb10 ui_point">📌 Square Icon Buttons</p>
                <div class="flex_a_center mb5">
                  .btn_search.btn_sign :
                  <button type="button" class="btn btn_ico btn_search">검색 버튼</button>
                  <button type="button" class="btn btn_ico btn_primary c_white btn_search">검색 버튼</button> 
                  <span class="ml10"> 비활성화 :</span> 
                  <button type="button" class="btn btn_ico btn_search" disabled="disabled">검색 버튼</button>
                  <nuxt-link to="" class="btn btn_ico btn_primary c_white dis btn_search">검색 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mb5">
                  .btn_close.btn_sign :
                  <button type="button" class="btn btn_ico btn_close">검색 버튼</button>
                  <button type="button" class="btn btn_ico btn_primary c_white btn_close">검색 버튼</button> 
                  <span class="ml10"> 비활성화 :</span> 
                  <button type="button" class="btn btn_ico btn_close" disabled="disabled">검색 버튼</button>
                  <nuxt-link to="" class="btn btn_ico btn_primary c_white dis btn_close">검색 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mb5">
                  .btn_calendar.btn_sign :
                  <button type="button" class="btn btn_ico btn_calendar">달력</button>
                  <button type="button" class="btn btn_ico btn_primary c_white btn_calendar">달력</button> 
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn btn_ico btn_calendar" disabled="disabled">달력</button>
                  <nuxt-link to="" class="btn btn_ico btn_primary c_white dis btn_calendar">달력</nuxt-link>
                </div>
                <div class="flex_a_center mb5">
                  .btn_download.btn_sign :
                  <button type="button" class="btn btn_ico btn_download">다운로드</button>
                  <button type="button" class="btn btn_ico btn_primary c_white btn_download">다운로드</button> 
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn btn_ico btn_download" disabled="disabled">다운로드</button>
                  <nuxt-link to="" class="btn btn_ico btn_primary c_white dis btn_download">다운로드</nuxt-link>
                </div>
                <div class="flex_a_center mb5">
                  .btn_filter.btn_sign :
                  <button type="button" class="btn btn_ico btn_filter">필터</button>
                  <button type="button" class="btn btn_ico btn_primary c_white btn_filter">필터</button> 
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn btn_ico btn_filter" disabled="disabled">필터</button>
                  <nuxt-link to="" class="btn btn_ico btn_primary c_white dis btn_filter">필터</nuxt-link>
                </div>
                <div class="flex_a_center mb5">
                  .btn_inputarrow.btn_sign :
                  <button type="button" class="btn btn_ico btn_inputarrow">증가감소</button>
                  <button type="button" class="btn btn_ico btn_primary c_white btn_inputarrow">증가감소</button> 
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn btn_ico btn_inputarrow" disabled="disabled">증가감소</button>
                  <nuxt-link to="" class="btn btn_ico btn_primary c_white dis btn_inputarrow">증가감소</nuxt-link>
                </div>
                <div class="flex_a_center mt5">
                  .btn_add.btn_sign : 
                  <button type="button" class="btn btn_ico btn_add">더하기 버튼</button>
                  <button type="button" class="btn btn_ico btn_primary c_white btn_add">더하기 버튼</button>
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn btn_ico btn_add" disabled="disabled">더하기 버튼</button>
                  <nuxt-link to="" class="btn btn_ico btn_primary c_white dis btn_add">더하기 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mt5">
                  .btn_subt.btn_sign : 
                  <button type="button" class="btn btn_ico btn_subt">빼기 버튼</button>
                  <button type="button" class="btn btn_ico btn_primary c_white btn_subt">빼기 버튼</button>
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn btn_ico btn_subt" disabled="disabled">빼기 버튼</button>
                  <nuxt-link to="" class="btn btn_ico btn_primary c_white dis btn_subt">빼기 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mt5">
                  .btn_down.btn_sign : 
                  <button type="button" class="btn btn_ico btn_down">아래 버튼</button>
                  <button type="button" class="btn btn_ico btn_primary c_white btn_down">아래 버튼</button>
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn btn_ico btn_down" disabled="disabled">아래 버튼</button>
                  <nuxt-link to="" class="btn btn_ico btn_primary c_white dis btn_down">아래 버튼</nuxt-link>
                </div>   
                <div class="flex_a_center mt5">
                  .btn_prev.btn_sign : 
                  <button type="button" class="btn btn_ico btn_prev">이전 버튼</button>
                  <button type="button" class="btn btn_ico btn_primary c_white btn_prev">이전 버튼</button>
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn btn_ico btn_prev" disabled="disabled">이전 버튼</button>
                  <nuxt-link to="" class="btn btn_ico btn_primary c_white dis btn_prev">이전 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mt5">
                  .btn_next.btn_sign : 
                  <button type="button" class="btn btn_ico btn_next">다음 버튼</button>
                  <button type="button" class="btn btn_ico btn_primary c_white btn_next">다음 버튼</button>
                  <span class="ml5"> 비활성화 :</span> 
                  <button type="button" class="btn btn_ico btn_next" disabled="disabled">다음 버튼</button>
                  <nuxt-link to="" class="btn btn_ico btn_primary c_white dis btn_next">다음 버튼</nuxt-link>
                </div>
                <div class="flex_a_center mt5">
                  .btn_down.btn_sign : <button type="button" class="btn btn_ico btn_down">아래 버튼</button>
                  <button type="button" class="btn btn_ico btn_primary c_white btn_down">아래 버튼</button>
                  <span class="ml5"> 비활성화</span> 
                  <button type="button" class="btn btn_ico btn_down" disabled="disabled">아래 버튼</button>
                  <nuxt-link to="" class="btn btn_ico btn_primary c_white dis btn_down">아래 버튼</nuxt-link>
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
                <button class="btn btn_ico btn_search">검색버튼</button>
              </div>
            </div>
            <h3 class="ui_h3">select</h3>
            <div class="g_cont">
              <p class="mb20">
                Select components 기본 텍스트는 title에 넣어주세요. 없는 경우
                생략<br/>
                가로값은 기본 100% width에 px or %으로 넣으면 조정 가능
              </p>
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
              <h5>Select - 라우터 이동</h5>
              <Select defaultTitle="라우터" classNm="mt5"
              :itemList="[
                // { name: '라우터1' , to:'/ui' , target:'_blank' },
                { name: '라우터1' , to:'/ui' },
                { name: '라우터2' , to:'/ui' },
                { name: '라우터3' , to:'/ui' },
                { name: '라우터4' , to:'/ui' },
                { name: '라우터5' , to:'/ui' },
              ]"/>
              <h5>Select - 타 사이트 이동</h5>
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
          </div>
        </div>
      </article>
      <article class="ui_area" id="ui_area2">
        <h2 class="ui_h2 mb20">🎯 팝업, 툴팁 가이드</h2>
        <div class="col2">
          <div class="col">
            <h3 class="ui_h3">툴팁 : .tooltip</h3>
            <div class="g_cont" style="min-height:500px;">
              <Tooltip type="?" desc="<p>ui 가이드 사용 안내<br/>블라블라 블라블라</p><p>ui 가이드 사용 안내<br/>블라블라 블라블라</p>"/>
              <Tooltip type="!" desc="<p>ui 가이드 사용 안내<br/>블라블라 블라블라</p><p>ui 가이드 사용 안내<br/>블라블라 블라블라</p>"/>
            </div>
          </div>
          <div class="col">

          </div>
        </div>
      </article>  
    </section>

    <!-- 
    <article class="g_bx" id="g_bx1">
       <h3 class="ui_h2">🎯 button & tab 가이드</h2>
      <div class="col2">
        <div class="g_left">
          <p class="mb40">.btn : 기본 색상 파랑색, .full 클래스를 추가하면 가로사이즈 100% 적용</p>
          <div class="g_cont">
             <h3 class="ui_h3">DEFAULT BUTTONS</h3>
            <p></p>
            <button type="button" class="btn full">.btn.full</button><br>
            <button type="button" class="btn">.btn</button>
            <button type="button" class="btn sky">.btn.sky</button>
            <button type="button" class="btn red">.btn.red</button>
            <button type="button" class="btn dark">.btn.dark</button>
            <button type="button" class="btn dis">.btn.dis</button>
            <button type="button" class="btn sm">.btn.sm</button>
          </div>
          <div class="g_cont">
             <h3 class="ui_h3">OUTLINE BUTTONS</h3>
            <button type="button" class="btn l_blue">.btn.l_blue</button>
            <button type="button" class="btn l_sky">.btn.l_sky</button>
            <button type="button" class="btn l_red">.btn.l_red</button>
            <button type="button" class="btn l_dark">.btn.l_dark</button>
            <button type="button" class="btn l_dis">.btn.l_dis</button>
          </div>
          <div class="g_cont">
             <h3 class="ui_h3">ICON+BUTTONS</h3>
            <button type="button" class="btn b_refresh"><b>.btn.b_refresh</b></button>
            <button type="button" class="btn b_setting"><b>btn.b_setting</b></button>
            <button type="button" class="btn b_cancel"><b>btn.b_cancel</b></button>
            <button type="button" class="btn b_checked"><b>.btn.b_checked</b></button>
            <button type="button" class="btn b_add"><b>.btn.b_add</b></button>
            <button type="button" class="btn b_sub"><b>.btn.b_sub</b></button>
            <button type="button" class="btn b_down"><b>.btn.b_down</b></button>
          </div>
          <div class="g_cont">
             <h3 class="ui_h3">ICON BUTTONS</h3>
            <button type="button" class="btn_search type2">검색</button>
          </div>
        </div>
        <div class="g_right">
          <div class="g_cont">
             <h3 class="ui_h3">TAB</h3>
            <p class="mt20 mb5">.tabs1</p>
            <div class="tabs1">
              <button type="button" class="tab on">TAB01</button>
              <button type="button" class="tab">TAB02</button>
            </div>
            <p class="mt20 mb5">.tabs2</p>
            <div class="tabs2">
              <button type="button" class="tab on">TAB01</button>
              <button type="button" class="tab">TAB02</button>
              <button type="button" class="tab">TAB03</button>
              <button type="button" class="tab">TAB04</button>
            </div>
            <p class="mt20 mb5">.tabs3</p>
            <div class="tabs3">
              <button type="button" class="tab">TAB01</button>
              <button type="button" class="tab on">TAB02</button>
              <button type="button" class="tab">TAB03</button>
            </div>
          </div>
        </div>
      </div>
    </article>
    <article class="g_bx" id="g_bx1">
       <h3 class="ui_h2">🎯 Input 가이드</h2>
      <div class="col2">
        <div class="g_left">
          <div class="g_cont">
             <h3 class="ui_h3">Input</h3>
            <p class="mb15">
              Input components : 기본 가로사이즈 100%, data.width로 가로값 조정
              가능<br/>
              id를 넣으면, label도 이용가능
            </p>
            <InputBox
              :data="{ type: 'text', id: 'id', placeholder: '입력해 주세요.' }"
            />
            <InputBox
              :data="{
                type: 'text',
                placeholder: '입력해주세요',
                width: '150px',
              }"
            />
            <InputBox
              :data="{ type: 'text', placeholder: '비활성화', disabled: true }"
            />
            <InputBox
              :data="{
                shape: 'search',
                type: 'text',
                placeholder: '검색어를 입력하세요.',
              }"
            />
            <InputBox
              :data="{
                shape: 'search',
                type: 'text',
                placeholder: '검색어를 입력하세요.',
                disabled: true,
              }"
            />
            <InputBox
              :data="{ shape: 'file', placeholder: '파일을 선택하세요.' }"
            />
            <InputBox
              :data="{
                shape: 'file',
                placeholder: '파일을 선택하세요.',
                disabled: true,
              }"
            />
          </div>
          <div class="g_cont">
             <h3 class="ui_h3">Textarea</h3>
            <p class="mb10">
              .textarea : 기본너비 :100%, 기본높이: 90px<br/>
              inline-style 로 가로, 세로 조정가능
            </p>
            <textarea class="textarea" placeholder="입력해주세요!"></textarea>
            <textarea
              class="textarea"
              style="width: 50%; height: 50px"
              placeholder="입력해주세요!"
            ></textarea>
          </div>
        </div>
        <div class="g_right">
          <div class="g_cont">
             <h3 class="ui_h3">Check Box</h3>
            <p>CheckBox components</p>
            <CheckBox
              :data="{
                title: '<b>아이디기억하기</b>',
                id: '1',
              }"
            />
            <CheckBox
              :data="{
                title: '<b>비활성화</b>',
                id: '2',
                checked:true,
                disabled: true,
              }"
            />
            <h3 class="mt20">Radio Box</h3>
            <p>RadioBox components</p>
            <RadioBox
              :data="{
                title: '라디오버튼1',
                // title:'<b>라디오버튼1</b>',
                id: 1,
                name: 'radio',
              }"
            />
            <RadioBox
              :data="{
                title: '라디오버튼2',
                // title:'<b>라디오버튼 비활성화</b>',
                id: 2,
                name: 'radio',
              }"
            />
            <RadioBox
              :data="{
                title: '라디오버튼 비활성화',
                // title:'<b>라디오버튼 비활성화</b>',
                id: 3,
                name: 'radio',
                disabled: true,
              }"
            />
            <RadioBox
              :data="{
                title: '라디오버튼 비활성화',
                // title:'<b>라디오버튼 비활성화</b>',
                id: 3,
                name: 'radio',
                disabled: true,
                checked:true,
              }"
            />
          </div>
        </div>
      </div>
    </article>
    <article class="g_bx" id="g_bx1">
       <h3 class="ui_h2">🎯 팝업 가이드</h2>
      <div class="col2">
        <div class="g_left">
          <div class="g_cont">
            <p class="mb15">
              * 팝업 컴포먼트 사용시 부모요소로 꼭 &lt;transition ...&gt;를 녛어주세요.<br/>
              transition 태그로 에니메션 추가
            </p>
            <button type="button" class="btn" @click="fnOpenPop(1)">
              상품 등록 팝업
            </button>
            <button type="button" class="btn" @click="fnOpenPop(4)">
              상담내역 팝업
            </button>
            <button type="button" class="btn" @click="fnOpenPop(5)">
              상담내역2 팝업 
            </button>
            <button type="button" class="btn" @click="fnOpenPop(6)">
              상담내역3 팝업 <em class="new">new</em>
            </button>
            <button type="button" class="btn" @click="fnOpenPop(2)">
              경고창
            </button>
            <button type="button" class="btn" @click="fnOpenPop(3)">
              확인창
            </button>
            <transition 
              name="custom-classes-transition"
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut">
              <CreatePop  v-if="$store.state.ui.popCreateState == true" :key="$store.state.ui.popCreateState"/>
              <CsPop  v-if="$store.state.ui.popCsState == true" :key="$store.state.ui.popCsState"/>
              <Cs2Pop  v-if="$store.state.ui.popCs2State == true" :key="$store.state.ui.popCsS2tate"/>
              <Cs3Pop  v-if="$store.state.ui.popCs3State == true" :key="$store.state.ui.popCsS3tate"/>
            </transition>
          </div>
        </div>
        <div class="g_right"></div>
      </div>
    </article> -->
  </div>
</template>

<script>
import Select from "~/components/form/Select";
import CheckBox from "~/components/form/CheckBox";
import RadioBox from "~/components/form/RadioBox";
import Tooltip from "~/components/common/Tooltip";
// import SelectSearch from "~/components/common/SelectSearch";
// import CreatePop from "~/components/popup/Create";
// import CsPop from "~/components/popup/Cs";
// import Cs2Pop from "~/components/popup/Cs2";
// import Cs3Pop from "~/components/popup/Cs3";
// import PopupView from "~/components/popup/PopupView";

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
    Tooltip
    // InputBox,
    // SelectSearch,
    // CreatePop,
    // CsPop,
    // Cs2Pop,
    // Cs3Pop,
    // PopupView,
  },
  mounted(){
  },
  methods: {
    // fnOpenPop(num) {
    //   // this.$store.dispatch('ui/setMenuState', false);
    //   if(num == 1) {
    //     this.$store.dispatch('ui/setPopCreateState', true); 
    //   }else if(num==2){
    //     let data = {
    //       state:true,
    //       type: "alert",
    //       title: "Alert",
    //       msg: "<p>텍스트를  <br/>입력해주세요.</p>",
    //       btn:{
    //         name:"확인",
    //       }
    //     };
    //     this.$store.dispatch('ui/setPopAlertData', data);
    //   }else if(num==3){
    //     let data  = {
    //       state:true,
    //       type: 'confirm',
    //       title: "Confirm",
    //       msg: "<p>텍스트를  <br/>입력해주세요.</p>",
    //       btn:{
    //         name:"save"
    //       }
    //     };
    //     this.$store.dispatch('ui/setPopAlertData', data);
    //   }else if(num==4){
    //     this.$store.dispatch('ui/setPopCsState', true); 
    //   }else if(num==5){
    //     this.$store.dispatch('ui/setPopCs2State', true); 
    //   }else if(num==6){
    //     this.$store.dispatch('ui/setPopCs3State', true); 
    //   }
    // },
  },
};
</script>
<!-- 해당 페이지에서만 쓰는 css -->
<style scoped v-if="true">
  @import "//s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/common/css/guide.css?v=2";
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
  .ui_tbl th, td{
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
  }
  .ui_link:hover{
    text-decoration: underline;
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
  }
</style> -->
