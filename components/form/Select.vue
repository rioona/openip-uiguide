<template>
  <div class="slct" :class="[classNm]">
    <button class="s_tit" type="button" @click="toggleSlct">{{title==undefined ? defaultTitle : title}}</button>
    <div class="s_cont">
      <div v-for="(item, i) in itemList" class="item"
        :class="{select : item.select==true}"
        :key="item.value"
        @click="(e)=>fnClick(e,i)">
        <span class="i_inner"  v-if="item.link == undefined && item.to == undefined">
					{{item.name}}
				</span>
        <nuxt-link :to="item.to" :target="item.target" c class="i_inner link" v-if="item.to != undefined ">
					{{item.name}}
				</nuxt-link>
        <a :href="item.link" :target="item.target" class="i_inner a" v-if="item.link != undefined ">
					{{item.name}}
				</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemList: {
      type:Array,
      required:true,
    },
    classNm:{
      type:String
    },
    value:{
      required: false
    },
    defaultTitle:{
      type:String,
      default : '선택해주세요'
    },
    // 사용여부
    disabled:{
      type:Boolean,
      default: false
    },
  },
  data() {
    return {
      // on: false,
      title: undefined,
    }
  },
  methods: {
    onFocus(){
      this.toggleSlct();
    },
    toggleSlct(e) {
      const slctList = document.getElementsByClassName("slct");
      const target = e.target.parentNode;
      if(!target.classList.contains("dis")){
        const onState = target.classList.contains("on") ? true : false;
        Array.prototype.forEach.call(slctList, item => item.classList.remove("on"));
        if (!onState) target.classList.add("on");
        else target.classList.remove("on");
      }
      // console.log(slctList);
      // Array.prototype.forEach.call(slctList, (item) =>
      //   item.classList.remove("on")
      // );
      // if(!this.disabled){
      //   this.on = !this.on;
      // }

			// const slctList = document.getElementsByClassName("slct");
			// const slctSearchList = document.getElementsByClassName("slct_search");
			// Array.prototype.forEach.call(slctSearchList, item => item.classList.remove("on"));
    },
    fnClick(e, i) {
      //퍼블 검수용 임시 작업만 했습니다. 개발시 지워주세요.
      // if(this.type !== "type2"){
			// const id = e.target.parentNode.getAttribute("data-id");
			const target = e.target.parentNode.parentNode.parentNode;
      
      this.itemList.map((item,j)=>{
        if(i==j){
          item.select = true;
          return;
        }
        item.select = false;
      });
      this.title = this.itemList[i].name;
			target.classList.remove("on");
      // this.on = !this.on;


    },
  },
  mounted() {
    //퍼블 검수용 임시 작업만 했습니다. 개발시 지워주세요.
    document.addEventListener("click", (e) => {
      const slctList = document.getElementsByClassName("slct");
      if(slctList.length > 0){
        const temp = e.target.className.split(" ");
        const target = e.target.className !== "" ? slctList[0].querySelector("." + temp[0]) : null;
        if (target === null) {
          Array.prototype.forEach.call(slctList, item => item.classList.remove("on"));
        }
      }
    });
  },
  // mounted(){
  // },
}
</script>
