<script setup lang="ts">
import { RefElement, switcher } from '@u/util'
import { SwitcherPropsType } from '@u/props'
import { onMounted, ref } from 'vue'


const el = ref<RefElement>(null)
const isSwitcher = ref<any>(null)
const marginInlineStart = ref<number>(0)

const props = withDefaults(defineProps<SwitcherPropsType>(), {
  toggle: ".pr-switcher > button"
})

const setWidth = ref<number>(props.list.length)


function setSwitcher() {
  return switcher(el.value, {
    connect: props.connect,
    toggle: props.toggle,
    itemNav: props.itemNav,
    active: props.active,
    animation: props.animation,
    duration: props.duration,
    swiping: props.swiping,
    followFocus: props.followFocus,
  })
}

onMounted( () => {
  isSwitcher.value = setSwitcher()
})

// set margin-inline-start for change our cover position
// we set margin-inline-start with default value and calculate switchers length
// then We calculate the correct margin-inline-start value.

function isSelect(key: number) {
  marginInlineStart.value = 100 / setWidth.value * key
}

</script>

<template>
  <div class="pr-switcher" ref="el">
    <button v-for="(item, index) in list" :key="index" type="button" @click="isSelect(index)">{{ item.name }}</button>
    <div class="pr-switche-cover" :style="{ 'margin-inline-start': marginInlineStart + '%', width: `calc( 100% / ${setWidth})` }"></div>
  </div>
</template>

<style>

.pr-switcher {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #f0f4f7;
  height: 40px;
  border-radius: 5px;
  position: relative;
  .pr-switche-cover {
    background-color: #006af3;
    border-radius: 5px;
    position: absolute;
    transition:all .2s ease-in-out;
    inset-inline-start: 0;
    z-index: 10;
    top: 0;
    height: 100%;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    height: 100%;
    position: relative;
    z-index: 20;
    border: 0;
    color: rgb(148 163 184);
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 100%;
    font-variation-settings: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
    text-transform: none;
    -webkit-appearance: button;
    background-color: initial;
    background-image: none;
    cursor: pointer;
    transition:all .2s ease-in-out;
    &.uk-active {
      color: #fdfdfd!important;
    }
  }
}

</style>