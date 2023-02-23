<template>
  <div :class="[dpSearchBtn?'bx_search':'bx_ipt', classNm, {'focus':focus}]">
    <label v-if="label" :for="id" v-html="label"></label>
    <input class="ipt"
      :type="type"
      :id="id"
      :ref="id"
      :name="name"
      :value="value"
      :tabindex="tabindex"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxLength"
      autocomplete="off"
      @input="fnInput"
      @keyup.enter="fnEnter"
      @focus="fnToggleFocus"
      @blur="fnToggleFocus"
    />
    <button v-if="dpConformlBtn&&!buttonClickCheck"
      class="btn black h35" title="중복확인"
      :disabled="disabled"
      @click="fnEnter">
      중복확인
    </button>
    <button v-if="dpConformlBtn&&buttonClickCheck"
      class="btn black h35" title="확인완료"
      disabled>
      확인완료
    </button>
    <button v-if="dpSearchBtn"
      class="btn_search" title="검색버튼"
      :disabled="disabled"
      @click="fnEnter">
      검색
    </button>
	</div>
</template>
<script>
export default {
	props: {
    // className
    classNm: {
      default: "text"
    },
    // 타입
    type: {
      type:String,
      default: "text"
    },
    // 라벨
    label: {
      type:String,
      default: null
    },
    // 필드 명
    name:{
      type:String,
      required:true,
    },
    // 필드 값
    value:{
      type:String,
      default:null,
    },
    maxLength:{
      type:Number,
      default:255
    },
    // 플레이스 홀드
    placeholder:{
      type:String,
    },
    // 사용여부
    disabled:{
      type:Boolean,
      default: false
    },
    // 검색버튼 사용
    dpSearchBtn:{
      type:Boolean,
      default: false
    },
    // 중복버튼 사용
    dpConformlBtn:{
      type:Boolean,
      default: false
    },
    //탭눌렀을 때
    tabindex: {
      type: Number,
      required: false,
      default: 1
    },
  },
	data() {
		return {
      id:null,
			focus: false,
      buttonClickCheck: false
		}
	},
  methods: {
    onFocus(){
      this.$refs[this.id].focus();
      this.focus= true;
    },
    outFocus(){
      this.focus = false;
    },
    fnEnter(){
      this.buttonClickCheck=true;
      // this.$emit('enter', this.name)
      this.$emit('enter', {
        name: this.name,
        value: this.$refs[this.id].value
      })
    },
    fnInput(e){
      this.$emit('update:value', e.target.value);
    },
    fnToggleFocus(){
      this.focus= !this.focus;
    }
  },
  watch:{
    value(nV, oV){
      //console.log(nV,oV);
    }
  },
  beforeMount() {
    // 아이디 생성
    this.id = 'ipt_'+this.name+'_'+Math.round(Math.random()*10000);
  }
}
</script>
