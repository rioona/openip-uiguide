<template>
  <!-- type: alert(경고창), confirm (선택창, normal(제목+내용) -->
  <div class="popup alert" :class="data.classNm" v-if="data !== null">
    <div class="p_wrap">
      <div class="p_top" v-if="data.type == 'normal'">
        <h2 class="tit" v-html="data.title"></h2>
        <button @click="fnClosePop" class="btn_ico b_close">닫기</button>
      </div>
      <button v-if="data.classNm=='type1'" @click="fnClosePop" class="btn_ico b_close">닫기</button>
      <div class="p_content" v-html="data.msg"></div>
      <div class="p_bottom" v-if="data.type == 'alert' && data.classNm !='type1'">
        <button v-if="data.btn.link == ''" @click="fnClosePop" class="btn">{{data.btn.name == undefined ? '확인':data.btn.name}}</button>
        <nuxt-link v-else :to="data.btn.link" class="btn">{{data.btn.name}}</nuxt-link>
      </div>
      <div class="p_bottom" v-if="data.type == 'confirm'">
        <button @click="fnClosePop" class="btn">취소</button>
        <button v-if="data.btn.link == ''" @click="fnClosePop" class="btn">{{ data.btn.name }}</button>
        <nuxt-link v-else :to="data.btn.link" class="btn">{{ data.btn.name }}</nuxt-link>
        <!-- <nuxt-link :to="data.btn.link == undefined?'':data.btn.link" class="button"><span>{{data.btn.name}}</span></nuxt-link> -->
        <!-- <nuxt-link :to="data.btn.link" class="btn"><span>{{data.btn.name}}</span></nuxt-link> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      data: null,
    };
  },
  components: {
  },
  mounted() {
    this.data = this.$store.state.ui.alertData;
    //라우터 전환될 때 이벤트
    $nuxt.$router.beforeEach((to, from, next) => {
      this.fnClosePop();
      next();
    });
  },
  methods: {
    fnClosePop(){
      this.$store.dispatch('ui/setAlertData', {
        state: false,
        type: "alert",
        title: null,
        msg: null,
        classNm:null,
        btn: {
          link: '',
          name: "확인",
          fnName: null,
        }
      });
    },
  },
};
</script>
