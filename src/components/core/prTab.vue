<script setup lang="ts">
import { RefElement, tab } from '@u/util'

import { onMounted, ref } from 'vue'
import { Tab } from '@u/props'
import PrLink from '@c/core/PrLink.vue'


const el = ref<RefElement>(null)

const props = withDefaults(defineProps<Tab>(), {
  toggle:  "selector	> *",
  active: 0,
  duration: 200,
  swiping: true,
  media: 960
})

onMounted(() => {
  tab(el.value, {
    connect: props.connect,
    toggle: props.toggle,
    active: props.active,
    animation: props.animation,
    duration: props.duration,
    swiping: props.swiping,
    media: props.media,
  })
})

</script>

<template>
  <ul class="uk-tab-left uk-tab" ref="el">
      <li v-for="(d, index) in tabs" :key="index">
        <pr-link :to="d.href">{{ d.title }}</pr-link>
      </li>
  </ul>
</template>

<style scoped>

.uk-tab {
  position: relative;
}

.uk-tab-left {
  height: 100%;
}

.uk-tab::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 20px;
  right: 0;
  border-bottom: 1px solid #e5e5e5;
}

.uk-tab-left::before {
  top: 0;
  bottom: 0;
  left: auto;
  right: 0;
  margin-right: 1px;
  border-left: 1px solid #e5e5e5;
  border-bottom: none;
}

.uk-tab>*>a {
  display: flex;
  align-items: center;
  column-gap: .25em;
  justify-content: center;
  padding: 9px 20px;
  color: #999;
  border-bottom: 2px solid transparent;
  font-size: 12px;
  text-transform: uppercase;
  transition: color .1s ease-in-out;
  line-height: 20px;
}

.uk-tab-left>*>a {
  justify-content: left;
  border-right: 2px solid transparent;
  border-bottom: none;
  padding: .5rem 0!important;
}

.uk-tab > * > a.uk-active {
  color: #222;
  border-color: #006af3;
  border-right-width: 3px;
}

</style>