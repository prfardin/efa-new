<script setup lang="ts">
import { DropPropsType } from '@u/props'
import { drop, RefElement } from '@u/util'
import { onMounted, ref } from 'vue'
import PrCard from '@c/core/PrCard.vue'


const props = withDefaults(defineProps<DropPropsType>(), {
  toggle: "- *",

})

const el = ref<RefElement>(null)

function setDrop() {
  return drop(el.value, {
    toggle: props.toggle,
    pos: props.pos,
    // @ts-ignore
    stretch: props.stretch,
    mode: props.mode,
    delayShow: props.delayShow,
    delayHide: props.delayHide,
    autoUpdate: props.autoUpdate,
    display: props.display,
    boundary: props.boundary,
    boundaryX: props.boundaryX,
    boundaryY: props.boundaryY,
    boundaryAlign: props.boundaryAlign,
    target: props.target,
    targetX: props.targetX,
    targetY: props.targetY,
    inset: props.inset,
    flip: props.flip,
    shift: props.shift,
    offset: props.offset,
    animation: props.animation,
    animateOut: props.animateOut,
    bgScroll: props.bgScroll,
    closeOnScroll: props.closeOnScroll,
    duration: props.duration,
    container: props.container
  })
}



onMounted(() => {
  setDrop()
})


</script>

<template>
    <div class="uk-card uk-card-body uk-card-default" ref="el">
      <slot />
    </div >
</template>

<style scoped>

</style>