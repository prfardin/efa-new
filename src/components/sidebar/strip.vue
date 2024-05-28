<script setup lang="ts">
import { RefElement, tooltip } from '@u/util'
import { onMounted, ref } from 'vue'

// components
import PrLink from '@c/core/PrLink.vue'

// images
import Avatar from '@i/avatar.png'


interface StripBody {
  href: string
  icon: string
  title?: string
}

const stripBodyItem = ref<StripBody>([
  {href: "/", icon: "create-dashboard", title: "1" },
  {href: "#", icon: "folder-minus", title: "2" },
  {href: "#", icon: "compass", title: "3" },
  {href: "#", icon: "bell", title: "4" }
])

const stripFooterItem = ref<StripBody>([
  {href: "#", icon: "create-dashboard" },
  {href: "#", icon: "folder-minus" },
  {href: "#", icon: "compass" },
  {href: "#", icon: "bell" },
])


const el = ref<RefElement>(null)

onMounted(() => {
  tooltip(el.value, {
    title: "test",
    pos: "right",
    animation: "uk-animation-slide-right-small",
    duration: 200
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
    <ul class="pr-sidebar-strip-body">
      <li class="pr-sidebar-strip-item" v-for="(item, index) in stripBodyItem" :key="index">
        <a :icon="item.icon" :to="item.href" ratio=".8" ref="el">sss</a>
      </li>
    </ul>
    <ul class="pr-sidebar-strip-footer">
      <li class="pr-sidebar-strip-item" v-for="(item, index) in stripFooterItem" :key="index">
        <pr-link :icon="item.icon" :to="item.href" ratio=".8" />
      </li>
    </ul>
  </div>
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
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 3rem;
    position: relative;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }
  a.uk-active {
   background-color: red;
  }
}


</style>
