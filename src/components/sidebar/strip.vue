<script setup lang="ts">
import { tooltip } from '@u/util'
import { onMounted, ref } from 'vue'

// components
import PrLink from '@c/core/PrLink.vue'

// images
import Avatar from '@i/avatar.png'
import PrIcon from '@c/core/PrIcon.vue'
import PrToggle from '@c/core/PrToggle.vue'


interface StripBody {
  icon: string
  title?: any
  id?: string
  href?: string
}

interface Props {
  target: string
  stripBodyItem: [
    { icon: string, title: string },
  ]
}

const emit =  defineEmits(['openSidebar'])


const props = withDefaults(defineProps<Props>(), {

})

const stripFooterItem = ref<StripBody[]>([
  {href: "#", icon: "paint-tool" },
  {href: "#", icon: "search" },
  {href: "#", icon: "setting" },
  {href: "#", icon: "bell" },
])

onMounted(() => {
  document.querySelectorAll('.pr-sidebar-strip-body > .pr-sidebar-strip-item > div').forEach((e, key) => {
    tooltip(e, {
      title: props.stripBodyItem[key].title,
      pos: 'right',
      animation: 'uk-animation-slide-right-small',
      duration: '150'
    })
  })
})

const isActive = ref<number>(0)

function toggleSidebar(i: number) {
  isActive.value = i
  emit('openSidebar', i)
}



</script>

<template>
  <div class="pr-sidebar-strip">
    <div class="pr-sidebar-strip-header">
      <pr-link to="/" class="uk-flex uk-flex-center uk-flex-middle">
        <img :src="Avatar" alt="avatar" width="40" height="40" />
      </pr-link>
    </div>
    <ul class="pr-sidebar-strip-body" ref="listTooltip">
      <li class="pr-sidebar-strip-item" v-for="(item, index) in stripBodyItem" :key="index">
        <pr-toggle role="button" :target="target" @click="toggleSidebar(index)" :class="{ 'uk-active': index === isActive }">
          <div>
            <pr-icon :icon="item.icon" ratio=".9" />
          </div>
        </pr-toggle>
      </li>
    </ul>
    <ul class="pr-sidebar-strip-footer">
      <li class="pr-sidebar-strip-item" v-for="(item, index) in stripFooterItem" :key="index">
        <pr-link :icon="item.icon" :to="item.href" ratio=".9" />
      </li>
    </ul>
  </div>
</template>

<style>

</style>
