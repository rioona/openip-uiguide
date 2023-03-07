<template>
  <div class="popup" v-if="data !== null" :class=" data.type !== undefined ? data.type : 'popup'">
    <div class="p_inner">
      <button class="btn_close" @click="closePopup"></button>
      <div class="tit" v-html="data.title"></div>
      <div class="content">
        <div class="msg" v-html="data.msg"></div>
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
    this.data = this.$store.state.ui.popupData;
    $nuxt.$router.beforeEach((to, from, next) => {
      this.closePopup();
      next();
    });
  },
  methods: {
    closePopup(){
      this.$store.dispatch('ui/setPopupData', {
        state:false,
        type: null,
        title: null,
        msg: null,
      });
    },
  },
};
</script>
