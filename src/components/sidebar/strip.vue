<script setup lang="ts">
import { RefElement, tooltip } from '@u/util'
import { computed, onMounted, ref, watch, watchEffect } from 'vue'

// components
import PrLink from '@c/core/PrLink.vue'

// images
import Avatar from '@i/avatar.png'
import PrIcon from '@c/core/PrIcon.vue'


interface StripBody {
  href: string
  icon: string
  title?: any
  id?: string
}

const stripBodyItem = ref<StripBody[]>([
  { href: "/", icon: "create-dashboard", title: "title1", id: "#ttttt" },
  { href: "/s", icon: "folder-minus", title: "title2" },
  { href: "/ss", icon: "compass", title: "title3" },
  { href: "/sss", icon: "bell", title: "title4" }
])

const stripFooterItem = ref<StripBody[]>([
  {href: "#", icon: "paint-tool" },
  {href: "#", icon: "search" },
  {href: "#", icon: "setting" },
  {href: "#", icon: "bell" },
])

onMounted(() => {
  document.querySelectorAll('.pr-sidebar-strip-body > .pr-sidebar-strip-item > a').forEach((e, key) => {
    tooltip(e, {
      title: stripBodyItem.value[key].title,
      pos: 'right',
      animation: 'uk-animation-slide-right-small',
      duration: '150'
    })
  })
})

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
        <pr-link :to="item.href">
          <div>
              <pr-icon :icon="item.icon" ratio=".9" />
          </div>
        </pr-link>
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
