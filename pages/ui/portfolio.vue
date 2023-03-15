<template>
  <div class="wrap potfolio">
    <div class="container">
      <div class="inner">
        <h1 class="blind">찾고있는 포트폴리오를 검색하고 확인해보세요.</h1>
        <div class="location">
          <ul class="flex_a_center">
            <li><nuxt-link to="" title="홈">홈</nuxt-link></li>
            <li><b></b><nuxt-link to="" title="특허라이선싱">특허라이선싱</nuxt-link></li>
            <li><b></b><nuxt-link to="" title="기계소재">기계소재</nuxt-link></li>
            <li><b></b><nuxt-link to="" title="정밀생산기계" class="on">정밀생산기계</nuxt-link></li>
          </ul>
        </div>
        <div class="area">
          <h2 class="blind">페이지안내와 검색기능이 있습니다.</h2>
          <div class="a_search">
            <button type="button">정밀생산기계</button>
            <div class="cont">
              <dl>
                <dt>판매조건</dt>
                <dd>
                  <CheckBox classNm="type1" label="매매" id="chk1_1"/>
                  <CheckBox classNm="type1" label="장기대여(3년 이상)" id="chk1_2"/>
                  <CheckBox classNm="type1" label="장기대여(5년 이상)" id="chk1_3"/>
                  <CheckBox classNm="type1" label="장기대여(10년 이상)" id="chk1_4"/>
                  <CheckBox classNm="type1" label="영구 임대" id="chk1_5"/>
                  <CheckBox classNm="type1" label="단기대여(3년 이하)" id="chk1_6"/>
                  <CheckBox classNm="type1" label="단기대여(3년 이하)" id="chk1_7"/>
                  <CheckBox classNm="type1" label="단기대여(2년 이하)" id="chk1_8"/>
                  <CheckBox classNm="type1" label="단기대여(1년 이하)" id="chk1_9"/>
                  <CheckBox classNm="type1" label="기타" id="chk1_10"/>
                </dd>
              </dl>
              <dl>
                <dt>평가등급</dt>
                <dd>
                  <CheckBox classNm="type1" label="AA" id="chk1_11"/>
                  <CheckBox classNm="type1" label="A+" id="chk1_12"/>
                  <CheckBox classNm="type1" label="A" id="chk1_13"/>
                  <CheckBox classNm="type1" label="A-" id="chk1_14"/>
                  <CheckBox classNm="type1" label="B+" id="chk1_15"/>
                  <CheckBox classNm="type1" label="B" id="chk1_16"/>
                  <CheckBox classNm="type1" label="B-" id="chk1_17"/>
                  <CheckBox classNm="type1" label="C" id="chk1_18"/>
                </dd>
              </dl>
              <dl>
                <dt>추천사유</dt>
                <dd>
                  <CheckBox classNm="type1" label="경쟁력" id="chk1_20"/>
                  <CheckBox classNm="type1" label="투자성" id="chk1_21"/>
                  <CheckBox classNm="type1" label="미래가치" id="chk1_22"/>
                  <CheckBox classNm="type1" label="해외시장" id="chk1_23"/>
                  <CheckBox classNm="type1" label="스타트업" id="chk1_24"/>
                </dd>
              </dl>
              <dl>
                <dt>주요출원인</dt>
                <dd>
                  <CheckBox classNm="type1" label="서울대학교" id="chk1_25"/>
                  <CheckBox classNm="type1" label="한국전자통신연구원" id="chk1_26"/>
                  <CheckBox classNm="type1" label="한화" id="chk1_27"/>
                </dd>
              </dl>
              <div class="btns flex_bw">
                <button type="button" class="b_reset">전체 초기화</button>
                <button type="button" class="b_sarch">검색</button>
              </div>
            </div>
          </div>
        </div>
        <div class="area">
          <h2 class="blind">검색된 포트폴리오와 단일상품을 확인하세요.</h2>
          <div class="a_top">
            <div class="taps flex_a_center">
              <button type="button" class="on">포트폴리오</button>
              <button type="button">단일상품</button>
            </div>
            <div class="flex_bw flex_a_center">
              <p>총 <strong>12</strong>개의 상품이 검색되었습니다.</p>
              <div class="right flex_a_center">
                <button type="button" class="heart">좋아요버튼</button>
                <div class="bx_search">
                  <input type="text" placeholder="검색어를 입력해주세요" class="ipt"/>
                  <button type="button" class="btn_ico b_search">검색버튼</button>
                </div>
              </div>
            </div>
          </div>
          <div class="a_cont">
            <div class="list">
              <div class="item" v-for="i in 12" :key="i">
                <div class="thumb">
                  <span>평가등급 : A-</span>
                  <button type="button"><span>자세히보기</span></button>
                </div>
                <div class="i_cont">
                  <p class="tit">의료용 로봇 및 의료서비스 로봇 득허</p>
                  <span class="ellipsis3">종합 방산 기업인 한화디펜스의 특허입니다. 무인을 포함한 비행체 제어의 장치와 관리 방법등에 대한 특허 중 높은 기술력과 상위 등급을 가진 특허들을 모았습니다.대한 특허 중 높은 기술력과 상위 등급을 가진 특허들을 모았습니다.</span>
                  <dl class="flex_a_center">
                    <dt>제&nbsp;&nbsp;공&nbsp;&nbsp;자&nbsp;:&nbsp;</dt>
                    <dd>서울대학교산학협력단, 전남대학교산학협력단</dd>
                  </dl>
                  <dl class="flex_a_center">
                    <dt>특&nbsp;&nbsp;허&nbsp;&nbsp;수&nbsp;:&nbsp;</dt>
                    <dd>5개</dd>
                  </dl>
                  <dl class="flex_a_center">
                    <dt>거래방식&nbsp;:&nbsp;</dt>
                    <dd>영구임대</dd>
                  </dl>
                  <div class="btns flex_a_center flex_bw">
                    <button type="button" class="applica">신청하기</button>
                    <button type="button" class="cart">장바구니</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from "~/components/form/CheckBox";

export default {
  components: {
    CheckBox
  },
};
</script>