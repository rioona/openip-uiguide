<template>
  <div>
    <nuxt/>
    <transition name="fade">
      <Alert v-if="$store.state.ui.alertData.state === true"/>
    </transition>
  </div>
</template>

<script>
import Alert from "~/components/Alert.vue"
export default {
  name: "layout",
  components: {
    Alert
  }
}
</script>