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

const userShortcuts = ref<any>([
  { href:"/", icon: "user", name: "saeed bayat", gmail: "saeedbayat@test.com" },
  { href:"/", icon: "briefcase", name: "saeed bayat", gmail: "saeedbayat@test.com" },
  { href:"/", icon: "users-alt", name: "saeed bayat", gmail: "saeedbayat@test.com" },
  { href:"/", icon: "setting", name: "saeed bayat", gmail: "saeedbayat@test.com" }
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
        <router-link to="settings">
          <div>
            <pr-icon :icon="item.icon" ratio=".9" />
          </div>
        </router-link>
      </li>
      <li class="pr-sidebar-strip-item" >
          <div>
            <a>
              <pr-avatar hover circle class="pr-cream-b-c pr-avatar-hover-primary">
                <img :src="Avatar" alt="" class="uk-object-cover">
              </pr-avatar>
            </a>
            <pr-drop class="pr-width-256" pos="tight-top" mode="click" :offset="55" :animate-out="true">
              <pr-card class="uk-border-rounded" border default>
                <div class="uk-background-muted" style="padding: 24px">
                  <div class="pr-flex-items">
                    <div>
                      <pr-avatar medium circle cls="pr-cream-b-c" style="--avatar-size: 56px">
                        <img :src="Avatar" alt="" class="uk-object-cover">
                      </pr-avatar>
                    </div>
                    <div>
                      <div class="uk-text-bold uk-text-small">saeed bayat</div>
                      <div class="uk-text-meta">IT Team</div>
                    </div>
                  </div>
                </div>
                <div class="uk-card-body" style="padding: .5rem">
                  <pr-link reset :to="uS.href" v-for="(uS, index) in userShortcuts" :key="index">
                    <div class="pr-flex-items">
                      <div>
                          <pr-icon :icon="uS.icon" ratio=".8" />
                      </div>
                      <div>
                        <div class="uk-text-bold uk-text-small">{{ uS.name }}</div>
                        <div class="uk-text-meta">{{ uS.gmail }}</div>
                      </div>
                    </div>
                  </pr-link>
                </div>
              </pr-card>
            </pr-drop>
          </div>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
