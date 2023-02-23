dd<template>
	<div class="tooltip" :class="classNm" >
		<button type="button" @click="fnClick" class="ico" v-html="type"></button>
		<div class="desc" v-html="desc"></div>
	</div>
</template>
<script>
export default {
	props: ['desc', 'classNm', 'type'],
  data() {
    return {
    }
  },
  methods: {
    fnClick(e){
      const tooltipList = document.getElementsByClassName("tooltip");
			const target = e.target.parentNode;
			const onState = target.classList.contains("on") ? true : false;
			Array.prototype.forEach.call(tooltipList, item => item.classList.remove("on"));
			if (!onState) target.classList.add("on");
			else target.classList.remove("on");
		}
	},
  mounted() {
    //퍼블 검수용 임시 작업만 했습니다. 개발시 지워주세요.
    document.addEventListener("click", (e) => {
      const tooltipList = document.getElementsByClassName("tooltip");
      if(tooltipList.length > 0){
        const temp = e.target.className.split(" ");
        const target = e.target.className !== "" ? tooltipList[0].querySelector("." + temp[0]) : null;
        if (target === null) {
          Array.prototype.forEach.call(tooltipList, item => item.classList.remove("on"));
        }
      }
    });
  },
}
</script>