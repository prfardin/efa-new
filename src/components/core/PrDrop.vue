<script setup lang="ts">
import { DropPropsType } from '@u/props'
import { drop, RefElement } from '@u/util'
import { onMounted, ref, watch, watchEffect } from 'vue'
import PrCard from '@c/core/PrCard.vue'

const emit = defineEmits(['update:toggle'])

const props = withDefaults(defineProps<DropPropsType>(), {
})

const el = ref<RefElement>(null)

const test = ref<string | boolean | undefined>(props.toggle)


onMounted(() => {
  drop(el.value, {
    toggle: test.value,
    pos:props.pos,
    // @ts-ignore
    stretch: props.stretch,
    mode: props.mode,
    "delay-show": props.delayShow,
    "delay-hide": props.delayHide,
    autoUpdate: props.autoUpdate,
    display: props.display,
    boundary: props.boundary,
    boundaryX: props.boundaryX,
    boundaryY: props.boundaryY,
    "boundary-align": props.boundaryAlign,
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
    container: props.container,
  })
})

watchEffect(() => {
  test.value = props.toggle
  console.log(props.toggle)
  emit('update:toggle', test.value)
})



</script>

<template>
    <div class="uk-card uk-card-body uk-card-default" ref="el">
      test
    </div >
</template>

<style scoped>

</style>