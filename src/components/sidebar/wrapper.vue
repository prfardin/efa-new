<script setup lang="ts">
import PrOffcanvas from '@c/core/PrOffcanvas.vue'
import PrNav from '@c/core/PrNav.vue'
import PrIcon from '@c/core/PrIcon.vue'
import PrLink from '@c/core/PrLink.vue'
import { watchEffect } from 'vue'

interface Props {
  title: string
  divider: number
  id: string
  navItem:
    [{
      parentTitle: string,
      subItems:
       [{
          title: string,
          href: string
        }],
    }]
}

const props = withDefaults(defineProps<Props>(), {

})


</script>

<template>
  <pr-offcanvas container="" class="pr-sidebar-wrapper" :close-button="false" :id="id" :bg-close="false" :esc-close="false">
    <template #title>
      <h3 class="uk-margin-small-bottom uk-h3">{{ title }}</h3>
    </template>
    <template #content>
      <pr-nav multiple>
        <template v-for="(item, index) in navItem" :key="index">
          <li class="uk-parent">
            <a href="#">{{ item.parentTitle }}<pr-icon class="pr-nav-parent" icon="line-angle-down" /></a>
            <ul class="uk-nav-sub">
              <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex"><pr-link :to="subItem.href">{{ subItem.title }}</pr-link></li>
            </ul>
          </li>
          <li v-if="(index + 1) % divider === 0" class="uk-nav-divider" role="presentation"></li>
        </template>
      </pr-nav>
    </template>
  </pr-offcanvas>
</template>

<style>

.uk-parent {
  .pr-nav-parent {
    margin-left: auto;
    transition: all .2s ease-out;
  }
  &.uk-open a .pr-nav-parent {
    transform: rotate(180deg);
  }
}







</style>