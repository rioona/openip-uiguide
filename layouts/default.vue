<template>
  <div>
    <nuxt/>
    <transition name="fade">
      <Popup v-if="$store.state.ui.popupData.state === true"/>
      <Alert v-if="$store.state.ui.alertData.state === true"/>
    </transition>
  </div>
</template>

<script>
import Popup from "~/components/Popup.vue";
import Alert from "~/components/Alert.vue"
export default {
  name: "layout",
  components: {
    Popup,
    Alert
  }
}
</script>