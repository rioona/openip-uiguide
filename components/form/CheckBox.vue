<template>
  <div class="bx_chk" :class="classNm">
    <input type="checkbox" class="chk" :id="'chk_'+id" :checked="value == true?'checked':''" :disabled="disabled == true?'disabled':false"/>
    <label :for="'chk_'+id" v-html="label"></label>
  </div>
</template>

<script>
export default {
  props: {
    // 라벨
    label: {
      type:String,
      required: true,
    },
    // 필드 값
    value:{
      type:Boolean,
      default:false,
    },
    // 사용여부
    disabled:{
      type:Boolean,
      default: false
    },
    classNm:{
      type:String,
    },
    id:{
      type:String,
    }
  },
  data() {
    return {
    }
  },
}
</script>
