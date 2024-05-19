<script setup lang="ts">
import { OffcanvasPropsType } from '@u/props'
import { offcanvas, RefElement } from '@u/util'
import { onMounted, ref } from 'vue'




const props = withDefaults(defineProps<OffcanvasPropsType>(), {

})

const el = ref<RefElement>(null)

onMounted(() => {
  offcanvas(el.value, {
    mode: props.mode,
    flip: props.flip,
    overlay: props.overlay,
    // @ts-ignore
    escClose: props.escClose,
    bgClose: props.bgClose,
    container: props.container
  })
})

</script>

<template>
  <div :id="props.id" ref="el">
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>

      <h3>Title</h3>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
  </div>
</template>

<style scoped lang="less">

</style>