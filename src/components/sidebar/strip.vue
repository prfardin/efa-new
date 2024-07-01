<script setup lang="ts">
import { tooltip } from '@u/util'
import { onMounted, ref } from 'vue'

// components
import PrLink from '@c/core/PrLink.vue'

// images
import Avatar from '@i/avatar.png'
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
      <li class="pr-sidebar-strip-item">
          <div>
            <div @click="test">
              <pr-avatar hover circle class="pr-cream-b-c pr-avatar-hover-primary">
                <img :src="Avatar" alt="" class="uk-object-cover">
              </pr-avatar>
            </div>
          </div>
      </li>
      <li>
        <span>
          <pr-drop id="ttt" target="body" class="pr-width-256" pos="right" mode="click" :offset="-5" :animate-out="true">
      <pr-card class="uk-border-rounded" border default style="height: 100px; background-color: red">

      </pr-card>
    </pr-drop>
        </span>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
