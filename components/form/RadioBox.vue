<template>
  <div class="bx_radio">
    <input type="radio" :id="group+'_'+id" :name="group" class="radio" :checked="value == true?'checked':false" :disabled="disabled == true?'disabled':false"/>
    <label :for="group+'_'+id" v-html="label"></label>
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
    // 필드 명
    group:{
      required:true,
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
  methods:{
  }
}
</script>
