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
  document.querySelectorAll('.pr-sidebar-strip-item > div').forEach((e, key) => {
    tooltip(e, {
      title: stripBodyItem.value[key].title,
      pos: 'right'
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
        <div>
          <pr-icon :icon="item.icon" ratio=".9" class="uk-active" />
        </div>
      </li>
    </ul>
    <ul class="pr-sidebar-strip-footer">
      <li class="pr-sidebar-strip-item" v-for="(item, index) in stripFooterItem" :key="index">
        <pr-link :icon="item.icon" :to="item.href" ratio=".9" />
      </li>
    </ul>
  </div>
<!--  <div ref="el" />-->
</template>

<style>

.uk-tooltip::after {
  content: "";
  position: absolute;
  bottom: 50%;
  right: 100%;
  margin-bottom: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent #666 transparent  transparent;
}

.uk-tooltip {
  display: none;
  position: absolute;
  z-index: 1030;
  --uk-position-offset: 10px;
  --uk-position-viewport-offset: 10;
  top: 0;
  box-sizing: border-box;
  max-width: 200px;
  padding: 5px 10px;
  background: #666;
  border-radius: 2px;
  color: #fdfdfd;
  font-size: 14px;
}

.pr-sidebar-strip {
  border: 0 solid #e5e7eb;
  border-right-width: 1px;
  display: flex;
  position: relative;
  z-index: 20;
  pointer-events: auto;
  background-color: #fdfdfd;
  flex-direction: column;
  width: 5rem;
  height: 100%;
  transition: all .2s ease-in-out;
  ul {
    padding: 0;
    margin: 0;
  }
}

.pr-sidebar-strip-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 100%;
}

.pr-sidebar-strip-body {
  box-sizing: border-box;
  position: relative;
}

.pr-sidebar-strip-footer {
  box-sizing: border-box;
  position: relative;
  margin-top: auto!important;
}

.pr-sidebar-strip-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 100%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 3rem;
    position: relative;
    cursor: pointer;
    transition: all .2s ease-in-out;
    border-radius: 1rem;
    box-sizing: border-box;
    &:has(span.uk-active) {
      background-color: rgba(0, 106, 243, 0.1);
    }
  }
}





</style>
