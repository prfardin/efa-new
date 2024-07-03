<script setup lang="ts">
import { tooltip } from '@u/util'
import { onMounted, ref } from 'vue'

// components
import PrLink from '@c/core/PrLink.vue'

// images
import Avatar from '@i/avatar.png'
import Logo from '@i/logo-inverse.png'
import PrIcon from '@c/core/PrIcon.vue'
import PrAvatar from '@c/core/PrAvatar.vue'
import PrToggle from '@c/core/PrToggle.vue'
import PrButton from '@c/core/PrButton.vue'
import PrDrop from '@c/core/PrDrop.vue'
import PrCard from '@c/core/PrCard.vue'
import UIkit from 'uikit'

interface StripBody {
  icon: string
  title?: any
  id?: string
  href?: string
}

interface Props {
  stripBodyItem: [
    { icon: string, title: string },
  ] ,
  stripFooterItem: [
    { icon: string, title: string },
  ]
}

const emit =  defineEmits(['openSidebar'])


const props = withDefaults(defineProps<Props>(), {

})

onMounted(() => {
  // tooltip
  document.querySelectorAll('.pr-sidebar-strip-body > .pr-sidebar-strip-item > a').forEach((e, key) => {
    tooltip(e, {
      title: props.stripBodyItem[key].title,
      pos: 'right',
      animation: 'uk-animation-slide-right-small',
      duration: '150',
      offset: 6
    })
  })
  document.querySelectorAll('.pr-sidebar-strip-footer > .pr-sidebar-strip-item > a').forEach((e, key) => {
    tooltip(e, {
      title: props.stripFooterItem[key].title,
      pos: 'right',
      animation: 'uk-animation-slide-right-small',
      duration: '150',
      offset: 6
    })
  })
})

const isActive = ref<number>(0)

function toggleSidebar(i: number) {
  isActive.value = i
  emit('openSidebar', i)
}

function test() {
  UIkit.drop('ttt').show();
}

const notifications = ref<any>([
  { href:"/", img: Avatar, name: "saeed bayat", notif: "let a comment", time: "1 hour ago" },
  { href:"/", img: Avatar, name: "saeed bayat", notif: "let a comment", time: "1 hour ago" },
  { href:"/", img: Avatar, name: "saeed bayat", notif: "let a comment", time: "1 hour ago" },
])

</script>

<template>
  <div class="pr-sidebar-strip">
    <div class="pr-sidebar-strip-header">
      <pr-link to="/" class="uk-flex uk-flex-center uk-flex-middle">
        <img :src="Logo" alt="logo" width="35" height="40" />
      </pr-link>
    </div>
    <ul class="pr-sidebar-strip-body" ref="listTooltip">
      <li class="pr-sidebar-strip-item" v-for="(item, index) in stripBodyItem" :key="index">
        <a role="button" @click="toggleSidebar(index)" :class="{ 'uk-active': index === isActive }">
          <div>
            <pr-icon :icon="item.icon" ratio=".9" />
          </div>
        </a>
      </li>
    </ul>
    <ul class="pr-sidebar-strip-footer">
      <li class="pr-sidebar-strip-item" v-for="(item, index) in stripFooterItem" :key="index">
        <a>
          <div>
            <pr-icon :icon="item.icon" ratio=".9" />
          </div>
        </a>
      </li>
      <li class="pr-sidebar-strip-item tmtmtm" >
          <div style="display: inline-block">
            <a @click="test">
              <pr-avatar hover circle class="pr-cream-b-c pr-avatar-hover-primary">
                <img :src="Avatar" alt="" class="uk-object-cover">
              </pr-avatar>
            </a>
          </div>
      </li>
    </ul>
  </div>
  <pr-drop id="ttt" animation="uk-animation-scale-up" mode="click" :offset="5" :animate-out="true" pos="top-left" target=".pr-sidebar-strip .tmtmtm">
    <pr-card class="uk-border-rounded" border default>
      <div class="uk-card-header uk-flex uk-flex-middle uk-flex-between pr-padding-16">
        <h4 class="uk-h4 uk-margin-remove">Notification</h4>
        <pr-link to="">View All</pr-link>
      </div>
      <div class="uk-card-body uk-card-small uk-card-small pr-padding-16">
        <pr-link reset :to="n.href" v-for="(n, index) in notifications" :key="index">
          <div class="pr-flex-items">
            <div>
              <pr-avatar small circle cls="pr-cream-b-c">
                <img :src="n.img" alt="" class="uk-object-cover">
              </pr-avatar>
            </div>
            <div>
              <span class="uk-text-bold uk-text-small">{{ n.name }}</span>
              <span class="uk-text-meta" style="margin-left: 8px">{{ n.notif }}</span>
              <div class="uk-text-meta">{{ n.time }}</div>
            </div>
          </div>
        </pr-link>
      </div>
    </pr-card>
  </pr-drop>
</template>

<style>

</style>
