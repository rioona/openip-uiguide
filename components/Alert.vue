<template>
  <div class="popup" v-if="data !== null" :class=" data.type !== undefined ? data.type : 'alert'">
    <div class="p_inner">
      <div class="content">
        <h2 v-html="data.title" v-if="data.title!== undefined"></h2>
        <div class="msg" v-html="data.msg"></div>
      </div>
      <div class="btns" v-if="data.type==='alert'">
        <button v-if="data.btn.link == undefined"
                @click="closePopup" class="button">
          <b>{{data.btn.name}}</b>
        </button>
        <button v-else-if="data.btn.func"
                @click="data.btn.func"
                class="button">
          <b>{{data.btn.name == undefined? "-" : data.btn.name}}</b>
        </button>
        <nuxt-link v-else
                   :to="data.btn.link"
                   class="button">
          <b>{{data.btn.name}}</b>
        </nuxt-link>
      </div>
      <div class="btns col2" v-else>
        <div class="col" v-for="(item, i) in data.btns" :key="i">
          <button v-if="item.link=='cancel'"
                  @click="closePopup"
                  class="btn btn_point btn-lg" >
            <b>{{item.name == undefined? "취소" : item.name}}</b>
          </button>
          <button v-else-if="item.func"
                  @click="item.func"
                  class="btn btn_point btn-lg">
            <b>{{item.name == undefined? "-" : item.name}}</b>
          </button>
          <nuxt-link v-else
                     :to="item.link == undefined?'':item.link"
                     class="btn btn_point btn-lg" ><b>{{item.name}}</b>
          </nuxt-link>
        </div>
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
    this.$router.beforeEach((to, from, next) => {
      this.closePopup();
      next();
    });
  },
  methods: {
    closePopup(){
      this.$store.dispatch('ui/setAlertData', {
        state:false,
        type: null,
        title: null,
        msg: null,
        btn:{
          link:'',
          name:null,
        }
      });
    },
  },
};
</script>
